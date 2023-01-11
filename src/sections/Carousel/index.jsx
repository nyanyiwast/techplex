import React from 'react'
import logo from '../../components/Navigation/logo.png'
export const CarouselMain = () => {
    return(
        <>
        <section className="header3 cid-s8WMMTVzGD mbr-fullscreen mbr-parallax-background" id="header03-0">
            <div className="mbr-overlay" style={{opacity: '0.4', backgroundColor: 'rgb(255, 255, 255)'}} />
            <div className="align-center container">
                <div className="row ">
                <div className="col-12 col-md-12 col-lg-8">
                    <h1 className="mbr-section-title align-left mbr-fonts-style mb-3 display-6"><strong>
                    Innovation & Technology
                    </strong>
                    </h1>
                    <h2 className="mbr-section-subtitle align-left mbr-fonts-style mb-3 display-4">
                    “A team of experts providing business solutions across different sectors.”
                    </h2>

                    <div className="align-left mbr-section-btn">
                        {/* <a className="btn btn-lg btn-black display-4" href="#footer01-e">Get in
                        Touch</a> */}
                        <img id="logo" src={logo} alt='logo' style={
                            {
                             marginTop: '-152px',
                             height: '100%'
                            }
                            }/>
                        </div>
                </div>
                </div>
            </div>
            <div className="icons-wrapper">
            </div>
            </section>

        </>
    )
}
export default CarouselMain;