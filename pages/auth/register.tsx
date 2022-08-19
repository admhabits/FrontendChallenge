import Styles from '../../styles/Home.module.css';

export default function Register() {

  const handleOnclick = (e: any) => {
    e.preventDefault();
    console.log('hi');
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
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                  
                    <button onClick={handleOnclick} className="btn btn-sm btn-primary mt-3" style={{ float: 'right' }}>Submit</button>
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}
