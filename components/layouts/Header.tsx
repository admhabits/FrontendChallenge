import Link from "next/link";
import { useRouter } from "next/router"

export default function Header({title} : any) {
    const router = useRouter();
  return (
    <>
    <div>
    <ul className="nav nav-tabs">
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
      <div className='row'>
        <div className='col-md-12'>
          <h4 className='heading text-center text-primary p-3'>{title}</h4>
        </div>
      </div>
      <div className="account bg-primary">
        <button type="button" className="btn btn-primary btn-sm active px-3">Keluar</button>
      </div>
    </>
  )
}
