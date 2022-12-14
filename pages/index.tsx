import { database } from "../services/FirebaseConfig"
import { collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore"
import Header from "../components/layouts/Header"
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

type MyBlogList = {
  id: string, title: string, desc: string, imageLink: string
}

export default function Home() {
 const [blogs, setBlogs] = useState<MyBlogList[]>([]);
 const [isLoggedIn, setIsLoggedIn] = useState(false);
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

 const deleteBlog = async (id : any) => {
  try {
       await deleteDoc(doc(database, 'blogs', id));
      // console.log(deletebyId);
      getPosts();

  } catch (error) {
    alert(error)
  }
 }

 useLayoutEffect(() => {
  if(window.localStorage.getItem('user') !== null){
      const items : any = localStorage.getItem("user");
      const parseItem = JSON.parse(items);
      console.log(parseItem);
      if(parseItem.token == null){
        setIsLoggedIn(false);
        // window.location.href = '/auth/login';
      } else {
        setIsLoggedIn(true);
      }
  } else {
    // window.location.href = '/auth/login';
    setIsLoggedIn(false);
    window.localStorage.setItem('user', JSON.stringify({ 
      token: null
    }));
  }
 }, [])

 useEffect(() => {
    getPosts();
 }, [])
 
 
  return (
    <div className="container mt-2 p-3">
      <Header title="Semua Postingan" isHide={isLoggedIn}/>
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
          <div className="col-md-6 col-sm-12 col-lg-4 mb-lg-4 mb-md-3 mb-sm-2" key={key}>
          <div className="card">
            <div className="card-header">{item?.title}</div>
            <div className="card-body">{item?.desc.length >= 100 ? item.desc.slice(0, 120) + "...": item.desc}</div>
            <div className="card-footer d-flex justify-content-end gap-2">
              {
                isLoggedIn && (
                  <>
                     <button className="btn btn-sm btn-danger" onClick={ () => deleteBlog(item?.id)}>Remove</button>
                    <Link href={`/blogs/edit/${item?.id}?title=${item?.title}&desc=${item?.desc}&imageLink=${item?.imageLink}`}>
                      <a className="btn btn-sm btn-warning">Edit</a>
                    </Link>
                  </>
                )
              }
              <Link href={`/blogs/${item?.id}`}>
                <a className="btn btn-sm btn-primary">Read More</a>
              </Link>
            </div>
          </div>
        </div>
        ))
       }
      </div>
    </div>
  )
}
