import Link from "next/link";
import { useRouter } from "next/router"

export default function Header() {
    const router = useRouter();
  return (
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
  )
}
