import { useEffect, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { database } from '../../../services/FirebaseConfig'
import { useRouter } from 'next/router';
import Header from '../../../components/layouts/Header';

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [dataDetail, setDataDetail] = useState(null);
  const docRef = doc(database, 'blogs', id);

  const updatePost = () => {
    updateDoc(docRef, { title, imageLink, desc })
    .then(()=> {
      console.log({ title, imageLink, desc });
      alert('Berhasil Update Postingan! ' + id);
    })
    .catch(error => {
      alert(error);
    })
  }

  const getDetailBlogs = async () => {
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          console.log(docSnap.data());
          setDataDetail(docSnap.data());
        } else {
          alert('Tidak ditemukan data!');
        }
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    getDetailBlogs();
  }, [id])
  
  return (
    <div className='container p-3 mt-1'>
        <Header title={`Edit Postingan ${id}`}/>
        <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Judul Postingan"/>
        </div>
        <div className="col-md-6 ">
        <input type="text" className="form-control" id="imageLink" onChange={(e) => setImageLink(e.target.value)} value={imageLink} placeholder="Image Link"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <textarea className='form-control' data-sb-validation="required" placeholder='Deskripsi' onChange={(e)=> setDesc(e.target.value)} value={desc} rows={8}></textarea>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 d-flex justify-content-end'>
          <button type='submit' className="btn btn-md btn-primary" onClick={updatePost}>update Postingan</button>
        </div>
      </div>
    </div>
  )
}
