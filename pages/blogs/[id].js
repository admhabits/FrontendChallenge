import Header from '../../components/layouts/Header'
import { database } from '../../services/FirebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


export default function DetailBlogs() {
  const [detailBlog, setDetailBlog] = useState(null);
  const router = useRouter();
  const getDetailBlogs = async () => {
    const { id } = router.query;
    const docRef = doc(database, 'blogs', id);
    // console.log(id);
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          console.log(docSnap.data());
          setDetailBlog(docSnap.data());
        } else {
          alert('Tidak ditemukan data!');
        }
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    getDetailBlogs();
  }, [])
  
  return (
    <div className='container mt-2'>
      {
        !detailBlog ? (
          <div className='row'>
            <div className='col-12'>
              <p className='text-primary text-center'>Loading...</p>
            </div>
          </div>
        ) : (
         <>
           <Header title={detailBlog?.title}/>
          <p>{detailBlog?.desc}</p>
         </>
        )
      }
    </div>
  )
}
