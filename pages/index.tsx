import { database } from "../services/FirebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import Header from "../components/layouts/Header"
import { useEffect, useState } from "react";

type MyBlogList = {
  id: string, title: string, desc: string, imageLink: string
}

export default function Home() {
 const [blogs, setBlogs] = useState<MyBlogList[]>([]);
 const ref = collection(database, 'blogs');
 const getPosts = async () => {
    try {
      const querySnapshot = await getDocs(ref);
      const dataBlogs : any = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataBlogs.push({ ...doc.data(), id: doc.id});
        console.log(doc.id, " => ", doc.data());
      });
      console.log(dataBlogs);
      setBlogs(dataBlogs);
    } catch (error) {
      alert(error);
    }
 }

 useEffect(() => {
    getPosts();
 }, [])
 
 
  return (
    <div className="container mt-2 p-3">
      <Header title="Semua Postingan"/>
      <div className="row">
        {
          blogs.length === 0 && (
            <div className="col-12">
              <p className="text-success text-center">Loading...</p>
            </div>
          )
        }
       {
         blogs.length !== 0 && blogs.map((item, key) => (
          <div className="col-md-6 col-sm-12 col-lg-4 mb-lg-4 mb-md-3 mb-sm-2">
          <div className="card">
            <div className="card-header">{item?.title}</div>
            <div className="card-body">{item?.desc}</div>
            <div className="card-footer d-flex justify-content-end gap-2">
              <button className="btn btn-sm btn-danger">Remove</button>
              <button className="btn btn-sm btn-warning">Edit</button>
              <button className="btn btn-sm btn-primary">Read More</button>
            </div>
          </div>
        </div>
        ))
       }
      </div>
    </div>
  )
}
