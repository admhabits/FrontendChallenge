import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import Header from '../../components/layouts/Header';
import { database } from '../../services/FirebaseConfig';

export default function create_post() {
  const dbInstance = collection(database, 'blogs');
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const createPost = () => {
    addDoc(dbInstance, {
      title: "Test postingan",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deleniti."
    })
    .then(()=> {
      alert('Data berhasil!');
    })
  }
  return (
    <div className='container mt-2 p-3'>
      <Header title="Buat Postingan"/>
      <div className="row mb-3">
        <div className="col-md-6">
          <input type="text" className="form-control" id="title" placeholder="Judul Postingan"/>
        </div>
        <div className="col-md-6">
        <input type="text" className="form-control" id="imageLink" placeholder="Image Link"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <textarea className='form-control' data-sb-validation="required" placeholder='Deskripsi' rows={8}></textarea>
        </div>
      </div>
    </div>
  )
}
