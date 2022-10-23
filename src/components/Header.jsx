import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Header = () => {

    const [Showbar, setShowbar] = useState(false);
    const first = useRef()
    const show = ()=>{
        setShowbar(true);
        first.current.classList.toggle('show')
    }

return (
<nav className="navbar navbar-expand-lg">
    <div className="container">

        <Link className="navbar-brand fw-bold fs-2 text-warning ms-xs-3" to="/">Movies Home</Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={Showbar} aria-label="Toggle navigation" onClick={show}>
        <span className="navbar-toggler-icon text-warning"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={first}>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link text-warning fw-bold ms-2 active" aria-current="page" to="/">WatchLIst</Link> 
                </li>
                <li className="nav-item">
                <Link className="nav-link text-warning fw-bold ms-2" to="/watched">Watched</Link> 
                </li>
                <li className="nav-item">
                <Link className="nav-link btn btn-outline-danger text-light fw-bold ms-2 px-4 pt-2" to="/add" onClick={()=> swal('Search Here For Movies You Want , Add To WatchList !')}> Search + </Link> 
                </li>
            </ul>
        </div>

    </div>
</nav>
)
}

export default Header