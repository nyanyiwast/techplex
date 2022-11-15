import React from 'react'

export const NavigationBar = () => {
  return(
    <>
     <section className="menu menu1 cid-s8WMQIZfEW" once="menu" id="menu1-1">
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
            <div className="container-fluid">
            <div className="navbar-brand">
                <span className="navbar-caption-wrap">
                    <a className="navbar-caption text-white display-5" href="#">
                        Tech<b style={{color: 'gray'}}>plex</b>
                    </a>
                </span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div className="hamburger">
                <span />
                <span />
                <span />
                <span />
                </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li className="nav-item">
                    <a className="nav-link link text-white display-4" href="#header03-0" aria-expanded="false">
                    Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link text-white display-4" href="#features011-6" aria-expanded="false">
                        About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link text-white display-4" href="#features09-5" aria-expanded="false">
                        Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link text-white display-4" href="#clients01-d" aria-expanded="false">
                    Partners</a>
                </li>
                <li className="nav-item"><a className="nav-link link text-white display-4" href="#team02-8">
                    Values</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link text-white display-4" href="#footer01-e">
                    Contact</a>
                </li>
              </ul>
            </div>
            </div>
        </nav>
        </section>

    </>
  )
}

export default NavigationBar;