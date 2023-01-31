import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mt-5 mb-lg-0">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platform
            </a></li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
            </a></li>
            <li className="nav-item">
            <a className="nav-link active">Pricing</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active">Enterprises</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <div className='nav-item me-2'>
                <a className='nav-link'>Log in</a>
            </div>
            <button className="btn btn-primary" type="submit">Strat Free Trail</button>
        </form>
        </div>
    </div>
    </nav>
    <div className='d-flex'>
        <div>
            <div>
                <h2>TIKTOK ANALYTICS</h2>
                <h1>
                Boost your engagement the right way on the world's trendiest platform 
                </h1>
            </div>
            <p>Understand what your audience loves, which influencers drive ROI, and how your content performs with TikTok Analytics.</p>
            <button>Start Free Trail</button>
            <p>tick-icon No credit card required</p>
        </div>

        <div>image Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nam maiores itaque ex quisquam est quam magni, ad illo hic officia, illum doloremque facilis quia quaerat incidunt obcaecati nostrum nesciunt nihil tenetur, et dolores velit? Dolorum quibusdam autem exercitationem odit deleniti unde neque. Tenetur, minus debitis ea atque deserunt enim.</div>

    </div>
    </div>
  )
}

export default Header