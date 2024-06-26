import React, { useState } from 'react';
import './../../../assets/css/material-kit.css';
import './../../../assets/css/material-kit.min.css';
import './../../../assets/css/nucleo-icons.css';
import './../../../assets/css/nucleo-svg.css';
import './styles.css';
import ExploreMenu from '../../components/exploremenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';


const  AccessoriesPage = () => {


  const [category, setCategory] = useState("All");


  return (
    <div className="container">
  


<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/apple-icon.png" />
  <link rel="icon" type="image/png" href="./assets/img/favicon.png" />
  <script src="./src/script.js"></script>
  <title>
  Accessories
  </title>
  {/*     Fonts and icons     */}
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  {/* Nucleo Icons */}
  <link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="./assets/css/nucleo-svg.css" rel="stylesheet" />
  {/* Font Awesome Icons */}
  {/* Material Icons */}
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
  {/* CSS Files */}
  <link id="pagestyle" href="./assets/css/material-kit.css?v=3.0.4" rel="stylesheet" />
  {/* Nepcha Analytics (nepcha.com) */}
  {/* Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. */}
  {/* Navbar */}
  <div className="container position-sticky z-index-sticky top-0">
    <div className="row">
      <div className="col-12">
       
        {/* End Navbar */}
      </div>
    </div>
  </div>
  <header className="header-2">
    <div className="page-header min-vh-75 relative" style={{backgroundImage: 'url("./assets/img/bg2.jpg")'}}>
      <span className="mask bg-gradient-primary opacity-4" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-center mx-auto">
            <h1 className="text-white pt-3 mt-n5"> Accessories</h1>
            <p className="lead text-white mt-3">Rest assured that each product meets our high standards of quality and reliability.</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="card card-body shadow-blur mx-3 mx-md-4 mt-n6">
   
   
   
    
    {/* -------- START Content Presentation Docs ------- */}
    <div className="container mt-sm-5">
      <div className="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg")'}} >
        <span className="mask bg-gradient-dark" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ms-lg-5">
              <h4 className="text-white">Built by developers</h4>
              <h1 className="text-white">Complex Documentation</h1>
              <p className="lead text-white opacity-8">From vehicle specifications to maintenance tips and accessory integration, CarConnect360 provides comprehensive documentation. Dive into detailed guides covering every aspect of our products to enhance your automotive experience.</p>
              <a href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit" className="text-white icon-move-right">
                Read docs
                <i className="fas fa-arrow-right text-sm ms-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="info-horizontal bg-gradient-primary border-radius-xl d-block d-md-flex p-4">
            <i className="material-icons text-white text-3xl">flag</i>
            <div className="ps-0 ps-md-3 mt-3 mt-md-0">
              <h5 className="text-white">Getting Started</h5>
              <p className="text-white">Discover various ways to utilize our platform effectively. Learn about the essential files and setup required to integrate CarConnect360 seamlessly into your automotive projects.</p>
              <a href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit" className="text-white icon-move-right">
                Let's start
                <i className="fas fa-arrow-right text-sm ms-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 px-lg-1 mt-lg-0 mt-4">
          <div className="info-horizontal bg-gray-100 border-radius-xl d-block d-md-flex p-4 h-100">
            <i className="material-icons text-gradient text-primary text-3xl">precision_manufacturing</i>
            <div className="ps-0 ps-md-3 mt-3 mt-md-0">
              <h5>Plugins</h5>
              <p>Gain inspiration and insights into the plugins powering CarConnect360's innovative features. Explore how these plugins enhance functionality and streamline automotive operations.</p>
              <a href="https://www.creative-tim.com/learning-lab/bootstrap/datepicker/material-kit" className="text-primary icon-move-right">
                Read more
                <i className="fas fa-arrow-right text-sm ms-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-lg-0 mt-4">
          <div className="info-horizontal bg-gray-100 border-radius-xl d-block d-md-flex p-4">
            <i className="material-icons text-gradient text-primary text-3xl">receipt_long</i>
            <div className="ps-0 ps-md-3 mt-3 mt-md-0">
              <h5>Utility Classes</h5>
              <p>CarConnect360 offers a wide array of pre-made elements and utility classes. Customize your automotive platform effortlessly with flexible design options and modular components.

</p>
              <a href="https://www.creative-tim.com/learning-lab/bootstrap/utilities/material-kit" className="text-primary icon-move-right">
                Read more
                <i className="fas fa-arrow-right text-sm ms-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* -------- END Content Presentation Docs ------- */}



    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
   






  
    <section className="py-sm-7" id="download-soft-ui">
      <div className="bg-gradient-dark position-relative m-3 border-radius-xl overflow-hidden">
        <img src="./assets/img/shapes/waves-white.svg" alt="pattern-lines" className="position-absolute start-0 top-md-0 w-100 opacity-2" />
        <div className="container py-7 postion-relative z-index-2 position-relative">
          <div className="row">
            <div className="col-md-7 mx-auto text-center">
              <h3 className="text-white mb-0">Do you love this awesome</h3>
              <h3 className="text-white">UI Kit for Bootstrap 5?</h3>
              <p className="text-white mb-5">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in HTML. Start a new project or give an old Bootstrap project a new look!</p>
              <a href="https://www.creative-tim.com/product/material-kit" className="btn btn-primary btn-lg mb-3 mb-sm-0">Download HTML</a>
            </div>
          </div>
        </div>
      </div>
     
    </section>
    
   
    {/* -------   END PRE-FOOTER 2 - simple social line w/ title & 3 buttons    -------- */}
  </div>
  <footer className="footer pt-5 mt-5">
    <div className="container">
      <div className=" row">
        <div className="col-md-3 mb-4 ms-auto">
          <div>
            <a href="https://www.creative-tim.com/product/material-kit">
              <img src="./assets/img/logo-ct-dark.png" className="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 className="font-weight-bolder mb-4">Material Kit 2</h6>
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
                <a className="nav-link" href="https://www.creative-tim.com/presentation" target="_blank">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/templates/free" target="_blank">
                  Freebies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/templates/premium" target="_blank">
                  Premium Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/blog" target="_blank">
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
                <a className="nav-link" href="https://iradesign.io/" target="_blank">
                  Illustrations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/bits" target="_blank">
                  Bits &amp; Snippets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/affiliates/new" target="_blank">
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
                <a className="nav-link" href="https://www.creative-tim.com/contact-us" target="_blank">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/knowledge-center" target="_blank">
                  Knowledge Center
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://services.creative-tim.com/?ref=ct-mk2-footer" target="_blank">
                  Custom Development
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/sponsorships" target="_blank">
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
                <a className="nav-link" href="https://www.creative-tim.com/knowledge-center/terms-of-service" target="_blank">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/knowledge-center/privacy-policy" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/license" target="_blank">
                  Licenses (EULA)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="text-center">
            <p className="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©  Material Kit by <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*   Core JS Files   */}
  {/*  Plugin for TypedJS, full documentation here: https://github.com/inorganik/CountUp.js */}
  {/*  Plugin for Parallax, full documentation here: https://github.com/dixonandmoe/rellax */}
  {/*  Plugin for TiltJS, full documentation here: https://gijsroge.github.io/tilt.js/ */}
  {/*  Plugin for Selectpicker - ChoicesJS, full documentation here: https://github.com/jshjohnson/Choices */}
  {/* Control Center for Material UI Kit: parallax effects, scripts for the example pages etc */}
  {/*  Google Maps Plugin    */}
</div>



</div>

  );
};





export default AccessoriesPage;

