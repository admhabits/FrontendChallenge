import axios from 'axios';
import { useState } from 'react';
import Styles from '../../styles/Home.module.css';

export default function Register() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

  const handleOnclick = (e: any) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/login', {email, password: pass})
    .then(res => {
        console.log(res.data);
        window.location.href = "/auth/login";
    })
    .catch(error => {
        console.log(error.response.data.error);
        setError(error.response.data.error);
    })
  }
  return (
    <div className={Styles.container}>
        <main>
            <div className="card p-2" style={{ width: "18rem;" }}>
                <div className="card-body bg-dark rounded">
                    <h5 className="card-title text-center mb-3 text-white">Register</h5>
                    <form className='mt-3'>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {
                            !error && error ==="" ? (
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            ): (
                        <div id="emailHelp" className="form-text">{error}</div>
                                
                            )
                        }
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                    </div>
                  
                    <button onClick={handleOnclick} className="btn btn-sm btn-primary mt-3" style={{ float: 'right' }}>Submit</button>
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}
