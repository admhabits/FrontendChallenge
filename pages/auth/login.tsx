import axios from 'axios';
import { useState } from 'react';
import Styles from '../../styles/Home.module.css';

export default function login() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

  const handleOnclick = (e: any) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/login', {email, password: pass})
    .then(res => {
        console.log(res.data);
        window.location.href = "/";
    })
    .catch(error => {
        console.log(error.response.data.error);
        setError(error.response.data.error);
    })
  }
  return (
    <div className={Styles.container}>
        <main className='bg-green'>
            <div className="card p-1 bg-primary" style={{ width: "18rem;" }}>
                <div className='card-header bg-white'>
                <h5 className="card-title text-center text-primary">Login</h5>
                </div>
                <div className="card-body bg-white rounded mt-2">
                   
                    <form className='mt-3'>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} onChange={ (e) => setEmail(e.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {
                            error !== "" && (
                            <div id="emailHelp" className="form-text">{error}</div>
                            )
                        }
                    </div>
                    <div className="mb-1">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={pass} onChange={(e)=> setPass(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                    </div>
                  
                  
                    </form>
                </div>
                <div className='card-footer mt-2 bg-white shadow'>
                <button onClick={handleOnclick} className="btn btn-sm btn-primary" style={{ float: 'right' }}>Submit</button>
                </div>
            </div>
        </main>
    </div>
  )
}
