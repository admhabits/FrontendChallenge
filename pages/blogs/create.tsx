import { addDoc, collection } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import Header from '../../components/layouts/Header';
import { database } from '../../services/FirebaseConfig';

export default function create_post() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dbInstance = collection(database, 'blogs');
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageLink, setImageLink] = useState("");

  
 useLayoutEffect(() => {
  if(localStorage.getItem('user') !== null){
      const items : any = localStorage.getItem("user");
      const parseItem = JSON.parse(items);
      console.log(parseItem);
      if(parseItem.token == null){
        setIsLoggedIn(false);
        window.location.href = '/auth/login';
      } else {
        setIsLoggedIn(true);
      }
  } else {
    window.location.href = '/auth/login';
    setIsLoggedIn(false);
    window.localStorage.setItem('user', JSON.stringify({ 
      token: null
    }));
  }
 }, [])


 
  const createPost = () => {
    addDoc(dbInstance, { title, imageLink, desc })
    .then(()=> {
      console.log({ title, imageLink, desc });
      alert('Berhasil Membuat Postingan!');
      setTitle("");
      setDesc("");
      setImageLink("");
    })
    .catch(error => {
      alert("Terjadi kesalahan server!");
    })
  }
  return (
    <div className='container mt-1 p-3'>
      <Header title="Buat Postingan" isHide={isLoggedIn}/>
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
          <button type='submit' className="btn btn-md btn-primary" onClick={createPost}>Simpan Postingan</button>
        </div>
      </div>
    </div>
  )
}
