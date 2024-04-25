import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center '>
        <div className='flex flex-col items-center'>
        <h3>Under construction by  <Link
          to="https://hire-david-hype.vercel.app"
          className=""
        >David Hype</Link> </h3>
        <Link
          to="/"
          className=""
        >Go Home</Link>
        </div>
    </div>
  )
}

export default ErrorPage