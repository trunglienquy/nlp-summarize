import { NavLink, Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-10 font-medium">
        <Link to="/">
            <h1 className="font-[danfo] text-5xl ">Summarize DNTN</h1>
        </Link>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to="/">
                <p>Summarize text</p>
            </NavLink>
            <NavLink to="/summarize-video">
                <p>Summarize video</p>
            </NavLink>
            <NavLink to="/about">
                <p>About</p>
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar