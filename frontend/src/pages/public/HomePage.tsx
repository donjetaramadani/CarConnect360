import React from 'react';
import HomePageImage from './ph.jpg'; 
import 'bootstrap';
import './stylehome.css';
//import './homescript.js';
//import GameSection from './GameSection';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { PATH_PUBLIC } from '../../routes/paths'; 
import GameSection from './GameSection';

const HomePage = () => {

  return (
    <div className="flex justify-center items-center h-full">
    <div style={{ paddingTop: '0px',paddingLeft: '50px', paddingBottom: '50px', paddingRight: '50px'}}>
   

  



  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png" />
  <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
  <title>
    Material Kit 2 by Creative Tim
  </title>
 
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
 
  <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
 
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />

  <link id="pagestyle" href="../assets/css/material-kit.css?v=3.0.4" rel="stylesheet" />


  <header>
  <div className="page-header min-vh-75 px-0 mx-0" style={{ backgroundImage: 'url("../assets/img/bg9.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100% !important', boxSizing: 'border-box'}}>
  <span className="mask bg-gradient-dark opacity-6" />
  <div className="container-fluid p-0">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center mx-auto my-auto">
        <h1 className="text-white">Your Gateway to Automotive Excellence</h1>
        <p className="lead mb-4 text-white opacity-8">Embrace innovation and drive your aspirations forward. With CarConnect360, the game of finding your perfect vehicle becomes a seamless, exhilarating adventure.</p>
     {/*   <button type="submit" className="btn bg-white text-dark">Create Account</button>
        <h6 className="text-white mb-2 mt-5">Find us on</h6>*/}
        <div className="d-flex justify-content-center">
          <a href="javascript:;"><i className="fab fa-facebook text-lg text-white me-4" /></a>
          <a href="javascript:;"><i className="fab fa-instagram text-lg text-white me-4" /></a>
          <a href="javascript:;"><i className="fab fa-twitter text-lg text-white me-4" /></a>
          <a href="javascript:;"><i className="fab fa-google-plus text-lg text-white" /></a>
        </div>
      </div>
    </div>
  </div>
</div>


  <div className="position-absolute w-100 z-index-1 bottom-0">
  <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g className="moving-waves">
      <use xlinkHref="#gentle-wave" x={48} y={-1} fill="rgba(255,255,255,0.40" />
      <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.35)" />
      <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.25)" />
      <use xlinkHref="#gentle-wave" x={48} y={8} fill="rgba(255,255,255,0.20)" />
      <use xlinkHref="#gentle-wave" x={48} y={13} fill="rgba(255,255,255,0.15)" />
      <use xlinkHref="#gentle-wave" x={48} y={16} fill="rgba(255,255,255,0.95" />
    </g>
  </svg>
</div>

  </header>

  <section className="pt-3 pb-4" id="count-stats">
  <div className="parallax-container">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 shadow-effect" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="row">
          <div className="col-md-4 position-relative">
            <div className="p-3 text-center">
              <h1 className="text-gradient text-primary"><span id="state1">1000</span>+</h1>
              <h5 className="mt-3">Integrated Automotive Solutions</h5>
              <p className="text-sm">Fully integrated platform for browsing, purchasing, and renting vehicles</p>
            </div>
            <hr className="vertical dark" />
          </div>
          <div className="col-md-4 position-relative">
            <div className="p-3 text-center">
              <h1 className="text-gradient text-primary"> <span id="state2"></span>∞</h1>
              <h5 className="mt-3">User-Centric Design
              </h5>
              <p className="text-sm">From intuitive navigation to detailed vehicle information and service booking capabilities</p>
            </div>
            <hr className="vertical dark" />
          </div>
          <div className="col-md-4">
            <div className="p-3 text-center">
              <h1 className="text-gradient text-primary" id="state3"><span id="state1">500</span>+</h1>
              <h5 className="mt-3">Innovation and Efficiency</h5>
              <p className="text-sm">Empowers users to customize their automotive websites effortlessly, saving significant time and resources while maintaining a competitive edge in the market. </p>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
  </div>
</section>





  {/* -------- END HEADER 7 w/ text and video ------- */}
  <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
 
   {/*--  <section className="py-7">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6">
            <div className="row justify-content-start">
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">public</i>
                  <h5>Fully integrated</h5>
                  <p>We get insulted by others, lose trust for those We get back freezes</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">payments</i>
                  <h5>Payments functionality</h5>
                  <p>We get insulted by others, lose trust for those We get back freezes</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-start mt-4">
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">apps</i>
                  <h5>Prebuilt components</h5>
                  <p>We get insulted by others, lose trust for those We get back freezes</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">3p</i>
                  <h5>Improved platform</h5>
                  <p>We get insulted by others, lose trust for those We get back freezes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ms-auto mt-lg-0 mt-4">
            <div className="card">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <a className="d-block blur-shadow-image">
                  <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="img-colored-shadow" className="img-fluid border-radius-lg" />
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="font-weight-normal">
                  <a href="javascript:;">Get insights on Search</a>
                </h5>
                <p className="mb-0">
                  Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards.
                </p>
                <button type="button" className="btn bg-gradient-info btn-sm mb-0 mt-3">Find out more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>*/}
<section className="mt-7 my-3 py-3">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-4 p-lg-2 mt-lg-0 mt-3">
        <div className="rotating-card-container">
          <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-3">
            <div className="front front-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)', backgroundSize: 'cover' }}>
              <div className="card-body py-7 text-center">
                <i className="material-icons text-white text-4xl my-3">touch_app</i>
                <h3 className="text-white"> CarConnect360 Experience</h3>
                <p className="text-white opacity-8">Save time transitioning from prototyping to fully functional code with all elements seamlessly implemented for an efficient automotive browsing experience.</p>
              </div>
            </div>
            <div className="back back-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)', backgroundSize: 'cover' }}>
              <div className="card-body pt-5 text-center">
                <h3 className="text-white">Discover More</h3>
                <p className="text-white opacity-8"> Browse through a diverse selection of vehicles available for sale and rent, complete with detailed specifications and transparent pricing. Find your perfect match with ease.</p>
               {/* <a href=".//sections/page-sections/hero-sections.html" target="_blank" className="btn btn-white btn-sm w-50 mx-auto mt-3">Start with Headers</a>  */}
               {/*   <Link to={PATH_PUBLIC.Cars} className="btn btn-white btn-sm w-50 mx-auto mt-3">Discover Cars</Link>  */}
               <Link to={PATH_PUBLIC.home} className="btn btn-white btn-sm w-50 mx-auto mt-3">Discover Cars</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-lg-2 mt-lg-0 mt-3">
        <div className="rotating-card-container">
          <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-3">
            <div className="front front-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)', backgroundSize: 'cover' }}>
              <div className="card-body py-7 text-center">
                <i className="material-icons text-white text-4xl my-3">touch_app</i>
                <h3 className="text-white">Accessory Kit</h3>
                <p className="text-white opacity-8">Save time transitioning from prototyping to fully functional code with all elements seamlessly implemented, ensuring your automotive accessories stand out with ease.</p>
              </div>
            </div>
            <div className="back back-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)', backgroundSize: 'cover' }}>
              <div className="card-body pt-5 text-center">
                <h3 className="text-white">Discover More</h3>
                <p className="text-white opacity-8"> Discover a range of automotive accessories that complement your style and enhance functionality. From practical enhancements to stylish additions, find accessories that meet your needs</p>
               {/* <a href=".//sections/page-sections/hero-sections.html" target="_blank" className="btn btn-white btn-sm w-50 mx-auto mt-3">Start with Headers</a>*/}
                <Link to={PATH_PUBLIC.Accessories} className="btn btn-white btn-sm w-50 mx-auto mt-3">Discover Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="mt-2 my-3 py-3">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-4 p-lg-2 mt-lg-0 mt-3">
        <div className="rotating-card-container">
          <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-3">
            <div className="front front-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)', backgroundSize: 'cover' }}>
              <div className="card-body py-7 text-center">
                <i className="material-icons text-white text-4xl my-3">touch_app</i>
                <h3 className="text-white">Lifestyle Collection</h3>
                <p className="text-white opacity-8">Save time transitioning from prototyping to fully functional code with all elements seamlessly implemented, enhancing your automotive lifestyle offerings effortlessly.</p>
              </div>
            </div>
            <div className="back back-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)', backgroundSize: 'cover' }}>
              <div className="card-body pt-5 text-center">
                <h3 className="text-white">Discover More</h3>
                <p className="text-white opacity-8"> Explore a curated collection of automotive lifestyle products designed to enrich your driving experience. From apparel to gadgets, find items that reflect your passion for cars.</p>
               {/* <a href=".//sections/page-sections/hero-sections.html" target="_blank" className="btn btn-white btn-sm w-50 mx-auto mt-3">Start with Headers</a>*/}
                <Link to={PATH_PUBLIC.home} className="btn btn-white btn-sm w-50 mx-auto mt-3">Discover Life Style</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-lg-2 mt-lg-0 mt-3">
        <div className="rotating-card-container">
          <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-3">
            <div className="front front-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)', backgroundSize: 'cover' }}>
              <div className="card-body py-7 text-center">
                <i className="material-icons text-white text-4xl my-3">touch_app</i>
                <h3 className="text-white">Service Excellence</h3>
                <p className="text-white opacity-8">Save time transitioning from prototyping to fully functional code, optimizing your automotive service operations for enhanced efficiency and customer satisfaction.</p>
              </div>
            </div>
            <div className="back back-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)', backgroundSize: 'cover' }}>
              <div className="card-body pt-5 text-center">
                <h3 className="text-white">Discover More</h3>
                <p className="text-white opacity-8">Access essential automotive services directly through our platform. From maintenance to repair, streamline your vehicle management with trusted service providers and convenient booking options.</p>
                {/*<a href=".//sections/page-sections/hero-sections.html" target="_blank" className="btn btn-white btn-sm w-50 mx-auto mt-3">Start with Headers</a>*/}
                <Link to={PATH_PUBLIC.home} className="btn btn-white btn-sm w-50 mx-auto mt-3">Discover Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>








    
    {/* END Section with four info areas left & one card right with image and waves */}
    {/* -------- START Features w/ pattern background & stats & rocket -------- */}
   {/*   <section className="pb-5 position-relative bg-gradient-dark mx-n3">
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-start mb-5 mt-5">
            <h3 className="text-white z-index-1 position-relative">The Executive Team</h3>
            <p className="text-white opacity-8 mb-0">There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="card card-profile mt-4">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-n5">
                  <a href="javascript:;">
                    <div className="p-3 pe-md-0">
                      <img className="w-100 border-radius-md shadow-lg" src="../assets/img/team-5.jpg" alt="image" />
                    </div>
                  </a>
                </div>
                <div className="col-lg-8 col-md-6 col-12 my-auto">
                  <div className="card-body ps-lg-0">
                    <h5 className="mb-0">Emma Roberts</h5>
                    <h6 className="text-info">UI Designer</h6>
                    <p className="mb-0">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-profile mt-lg-4 mt-5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-n5">
                  <a href="javascript:;">
                    <div className="p-3 pe-md-0">
                      <img className="w-100 border-radius-md shadow-lg" src="../assets/img/bruce-mars.jpg" alt="image" />
                    </div>
                  </a>
                </div>
                <div className="col-lg-8 col-md-6 col-12 my-auto">
                  <div className="card-body ps-lg-0">
                    <h5 className="mb-0">William Pearce</h5>
                    <h6 className="text-info">Boss</h6>
                    <p className="mb-0">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 col-12">
            <div className="card card-profile mt-4 z-index-2">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-n5">
                  <a href="javascript:;">
                    <div className="p-3 pe-md-0">
                      <img className="w-100 border-radius-md shadow-lg" src="../assets/img/ivana-squares.jpg" alt="image" />
                    </div>
                  </a>
                </div>
                <div className="col-lg-8 col-md-6 col-12 my-auto">
                  <div className="card-body ps-lg-0">
                    <h5 className="mb-0">Ivana Flow</h5>
                    <h6 className="text-info">Athlete</h6>
                    <p className="mb-0">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-profile mt-lg-4 mt-5 z-index-2">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-n5">
                  <a href="javascript:;">
                    <div className="p-3 pe-md-0">
                      <img className="w-100 border-radius-md shadow-lg" src="../assets/img/ivana-square.jpg" alt="image" />
                    </div>
                  </a>
                </div>
                <div className="col-lg-8 col-md-6 col-12 my-auto">
                  <div className="card-body ps-lg-0">
                    <h5 className="mb-0">Marquez Garcia</h5>
                    <h6 className="text-info">JS Developer</h6>
                    <p className="mb-0">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* -------- END Features w/ pattern background & stats & rocket -------- */}
    <section className="pt-4 pb-6" id="count-stats">
      <div className="container">
        <div className="row mb-7">
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <img className="w-100 opacity-7" src="../assets/img/logos/gray-logos/logo-coinbase.svg" alt="logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <img className="w-100 opacity-7" src="../assets/img/logos/gray-logos/logo-nasa.svg" alt="logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <img className="w-100 opacity-7" src="../assets/img/logos/gray-logos/logo-netflix.svg" alt="logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <img className="w-100 opacity-7" src="../assets/img/logos/gray-logos/logo-pinterest.svg" alt="logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <img className="w-100 opacity-7" src="../assets/img/logos/gray-logos/logo-spotify.svg" alt="logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <img className="w-100 opacity-7" src="../assets/img/logos/gray-logos/logo-vodafone.svg" alt="logo" />
          </div>
        </div>


        {/*
        <div className="row justify-content-center text-center">
          <div className="col-md-3">
            <h1 className="text-gradient text-info" id="state1">0</h1>
            <h5>Projects</h5>
            <p>Of “high-performing” level are led by a certified project manager</p>
          </div>
          <div className="col-md-3">
            <h1 className="text-gradient text-info">+</h1>
            <h5>Hours</h5>
            <p>That meets quality standards required by our users</p>
          </div>
          <div className="col-md-3">
            <h1 className="text-gradient text-info">/7</h1>
            <h5>Support</h5>
            <p>Actively engage team members that finishes on time</p>
          </div>
        </div>*/}





      </div>
      <GameSection/>
    </section>
    {/* -------- START PRE-FOOTER 1 w/ SUBSCRIBE BUTTON AND IMAGE ------- */}
    <section className="my-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h4>Be the first to see the news</h4>
            <p className="mb-4">
            Your industry might not be centered around technology now, but soon, technology will be at the heart of every successful business.
            </p>
            <div className="row">
              <div className="col-8">
                <div className="input-group input-group-outline">
                  <label className="form-label">Email Here...</label>
                  <input type="text" className="form-control mb-sm-0" />
                </div>
              </div>
              <div className="col-4 ps-0">
                <button type="button" className="btn bg-gradient-info mb-0 h-100 position-relative z-index-2">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-md-5 ms-auto">
            <div className="position-relative">
              <img className="max-width-50 w-100 position-relative z-index-2" src="../assets/img/macbook.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>




    {/* -------- END PRE-FOOTER 1 w/ SUBSCRIBE BUTTON AND IMAGE ------- */}
  </div>
  <footer className="footer pt-5 mt-5">
    <div className="container">
      <div className=" row">
        <div className="col-md-3 mb-4 ms-auto">
          <div>
            <a href="https://www.creative-tim.com/product/material-kit">
           
            </a>
            <h6 className="font-weight-bolder mb-4">CarConnect360</h6>
          </div>
          <div>
            <ul className="d-flex flex-row ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://www.facebook.com/CreativeTim" target="_blank">
                  <i className="fab fa-facebook text-lg opacity-8" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://twitter.com/creativetim" target="_blank">
                  <i className="fab fa-twitter text-lg opacity-8" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://dribbble.com/creativetim" target="_blank">
                  <i className="fab fa-dribbble text-lg opacity-8" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://github.com/creativetimofficial" target="_blank">
                  <i className="fab fa-github text-lg opacity-8" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w" target="_blank">
                  <i className="fab fa-youtube text-lg opacity-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 className="text-sm">Company</h6>
            <ul className="flex-column ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Freebies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Premium Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 className="text-sm">Resources</h6>
            <ul className="flex-column ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Illustrations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Bits &amp; Snippets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 className="text-sm">Help &amp; Support</h6>
            <ul className="flex-column ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Knowledge Center
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Custom Development
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Sponsorships
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 col-6 mb-4 me-auto">
          <div>
            <h6 className="text-sm">Legal</h6>
            <ul className="flex-column ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="_blank">
                  Licenses (EULA)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="text-center">
            <p className="text-dark my-4 text-sm font-weight-normal">
              All rights reserved.  Copyright © <a href="" target="_blank">CarConnect360</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  </div>
  </div>

  );
};

export default HomePage;
