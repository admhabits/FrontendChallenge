import Link from "next/link";
import { useRouter } from "next/router"

export default function Header({title} : any) {
    const router = useRouter();
  return (
    <>
    <div>
    <ul className="nav nav-tabs p-2 rounded">
        <li className="nav-item">
          <Link href="/">
            <a className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>My Blogs</a>
          </Link>
          
        </li>
        <li className="nav-item">
          <Link href="/blogs/create">
            <a className={`nav-link ${router.pathname == "/blogs/create" ? "active" : ""}`}>Create Post</a>
          </Link>
        </li>
      </ul>  
    </div>
      <div className="account mb-2 mt-1 d-flex justify-content-end rounded gap-2">
      {
          router.pathname == "/" && (
          <input type="search" placeholder="Search..." className="form-control" style={{ width: '300px' }}/>
          )
      }
          <button type="button" className="btn btn-primary btn-sm active px-3">Logout</button>
      </div>
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-start'>
          <h4 className='heading text-center text-primary py-3'>{title}</h4>
        </div>
      </div>
     
    </>
  )
}
