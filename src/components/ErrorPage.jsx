import { Link } from 'react-router'

export default function ErrorPage() {
  return (
    <div>
        <h1>Page Not Found</h1>
        <Link to={"/"} >
            <button>Go to home page</button>
        </Link>
    </div>
  )
}