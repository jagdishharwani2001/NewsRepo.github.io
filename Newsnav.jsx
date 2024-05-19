import React from "react"
const Newsnav = ({setcategory})=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><button type="button" className="btn btn-primary position-relative">
                    Inbox
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                    <a className="nav-link " href="#" onClick={()=>setcategory("technology")}>Technology</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href="#" onClick={()=>setcategory("business")}>Buisness</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href="#" onClick={()=>setcategory("entertainment")}>Entertainment</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}
export default Newsnav;
