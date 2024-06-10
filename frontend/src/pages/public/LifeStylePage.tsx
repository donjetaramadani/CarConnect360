import React from 'react';
import './../../../assets/css/material-kit.css';
import './../../../assets/css/material-kit.min.css';
import './../../../assets/css/nucleo-icons.css';
import './../../../assets/css/nucleo-svg.css';
import './styles.css';


const  LifeStylePage = () => {
  return (
    <div className="container">
  


<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/apple-icon.png" />
  <link rel="icon" type="image/png" href="./assets/img/favicon.png" />
  <script src="./src/script.js"></script>
  <title>
    Material Kit 2 by Creative Tim
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
            <h1 className="text-white pt-3 mt-n5">Material Kit 2</h1>
            <p className="lead text-white mt-3">Free &amp; Open Source Web UI Kit built over Bootstrap 5. <br /> Join over 1.6 million developers around the world. </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="card card-body shadow-blur mx-3 mx-md-4 mt-n6">
    <section className="pt-3 pb-4" id="count-stats">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto py-3">
            <div className="row">
              <div className="col-md-4 position-relative">
                <div className="p-3 text-center">
                  <h1 className="text-gradient text-primary"><span id="state1" >0</span>+</h1>
                  <h5 className="mt-3">Coded Elements</h5>
                  <p className="text-sm font-weight-normal">From buttons, to inputs, navbars, alerts or cards, you are covered</p>
                </div>
                <hr className="vertical dark" />
              </div>
              <div className="col-md-4 position-relative">
                <div className="p-3 text-center">
                  <h1 className="text-gradient text-primary"> <span id="state2" >0</span>+</h1>
                  <h5 className="mt-3">Design Blocks</h5>
                  <p className="text-sm font-weight-normal">Mix the sections, change the colors and unleash your creativity</p>
                </div>
                <hr className="vertical dark" />
              </div>
              <div className="col-md-4">
                <div className="p-3 text-center">
                  <h1 className="text-gradient text-primary" id="state3" >0</h1>
                  <h5 className="mt-3">Pages</h5>
                  <p className="text-sm font-weight-normal">Save 3-4 weeks of work when you use our pre-made pages for your website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="my-5 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
            <div className="rotating-card-container">
              <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5">
                <div className="front front-background" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)', backgroundSize: 'cover'}}>
                  <div className="card-body py-7 text-center">
                    <i className="material-icons text-white text-4xl my-3">touch_app</i>
                    <h3 className="text-white">Feel the <br /> Material Kit</h3>
                    <p className="text-white opacity-8">All the Bootstrap components that you need in a development have been re-design with the new look.</p>
                  </div>
                </div>
                <div className="back back-background" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)', backgroundSize: 'cover'}}>
                  <div className="card-body pt-7 text-center">
                    <h3 className="text-white">Discover More</h3>
                    <p className="text-white opacity-8"> You will save a lot of time going from prototyping to full-functional code because all elements are implemented.</p>
                    <a href=".//sections/page-sections/hero-sections.html" target="_blank" className="btn btn-white btn-sm w-50 mx-auto mt-3">Start with Headers</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ms-auto">
            <div className="row justify-content-start">
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-gradient text-primary text-3xl">content_copy</i>
                  <h5 className="font-weight-bolder mt-3">Full Documentation</h5>
                  <p className="pe-5">Built by developers for developers. Check the foundation and you will find everything inside our documentation.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-gradient text-primary text-3xl">flip_to_front</i>
                  <h5 className="font-weight-bolder mt-3">Bootstrap 5 Ready</h5>
                  <p className="pe-3">The world’s most popular front-end open source toolkit, featuring Sass variables and mixins.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-start mt-5">
              <div className="col-md-6 mt-3">
                <i className="material-icons text-gradient text-primary text-3xl">price_change</i>
                <h5 className="font-weight-bolder mt-3">Save Time &amp; Money</h5>
                <p className="pe-5">Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.</p>
              </div>
              <div className="col-md-6 mt-3">
                <div className="info">
                  <i className="material-icons text-gradient text-primary text-3xl">devices</i>
                  <h5 className="font-weight-bolder mt-3">Fully Responsive</h5>
                  <p className="pe-3">Regardless of the screen size, the website content will naturally fit the given resolution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center text-center my-sm-5">
            <div className="col-lg-6">
              
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-sm-5 mt-3">
        <div className="row">
          <div className="col-lg-3">
            <div className="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style={{top: 100}}>
             
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-4 mt-md-0">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-md-0 mt-3">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-md-0 mt-3">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-md-0 mt-3">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-md-0 mt-3">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-lg-6">
          <div className="col-lg-3">
           
          </div>
          <div className="col-lg-9">
            <div className="row mt-3">
              <div className="col-md-4">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-lg-6">
          <div className="col-lg-3">
            <div className="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style={{top: 100}}>
             
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row mt-3">
              <div className="col-md-4">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
              
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-lg-6">
          <div className="col-lg-3">
            <div className="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style={{top: 100}}>
              
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row mt-3">
              <div className="col-md-4">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-md-0 mt-3">
              
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style={{top: 100}}>
             
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row mt-3">
              <div className="col-md-4">
              
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-md-0 mt-3">
               
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
               
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-md-0 mt-3">
                
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="row text-center my-sm-5 mt-5">
            <div className="col-lg-6 mx-auto">
             
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row mt-4">
              <div className="col-md-6">
                
              </div>
              <div className="col-md-6 mt-md-0 mt-5">
               
              </div>
              <div className="col-md-6 mt-md-3 mt-6">
               
              </div>
              <div className="col-md-6 mt-md-3 mt-6">
               
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-auto mt-md-0 mt-5">
            <div className="position-sticky" style={{top: '100px !important'}}>
             
              
            </div>
          </div>
        </div>
      </div></section>
    {/* -------- START Content Presentation Docs ------- */}
    <div className="container mt-sm-5">
      <div className="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg")'}} >
        <span className="mask bg-gradient-dark" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ms-lg-5">
              <h4 className="text-white">Built by developers</h4>
              <h1 className="text-white">Complex Documentation</h1>
              <p className="lead text-white opacity-8">From colors, cards, typography to complex elements, you will find the full documentation. Play with the utility classes and you will create unlimited combinations for our components.</p>
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
              <p className="text-white">Check the possible ways of working with our product and the necessary files for building your own project.</p>
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
              <p>Get inspiration and have an overview about the plugins that we used to create the Material Kit.</p>
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
              <p>Material Kit is giving you a lot of pre-made elements. For those who want flexibility, we included many utility classes.</p>
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
    <section className="py-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h2 className="mb-0">Trusted by over</h2>
            <h2 className="text-gradient text-primary mb-3">1,679,477+ web developers</h2>
            <p className="lead">Many Fortune 500 companies, startups, universities and governmental institutions love Creative Tim's products. </p>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-lg-4 col-md-8">
            <div className="card card-plain">
              <div className="card-body">
                <div className="author">
                  <div className="name">
                    <h6 className="mb-0 font-weight-bolder">Nick Willever</h6>
                    <div className="stats">
                      <i className="far fa-clock" /> 1 day ago
                    </div>
                  </div>
                </div>
                <p className="mt-4">"This is an excellent product, the documentation is excellent and helped me get things done more efficiently."</p>
                <div className="rating mt-3">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 ms-md-auto">
            <div className="card bg-gradient-primary">
              <div className="card-body">
                <div className="author align-items-center">
                  <div className="name">
                    <h6 className="text-white mb-0 font-weight-bolder">Shailesh Kushwaha</h6>
                    <div className="stats text-white">
                      <i className="far fa-clock" /> 1 week ago
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white">"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"</p>
                <div className="rating mt-3">
                  <i className="fas fa-star text-white" />
                  <i className="fas fa-star text-white" />
                  <i className="fas fa-star text-white" />
                  <i className="fas fa-star text-white" />
                  <i className="fas fa-star text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="card card-plain">
              <div className="card-body">
                <div className="author">
                  <div className="name">
                    <h6 className="mb-0 font-weight-bolder">Samuel Kamuli</h6>
                    <div className="stats">
                      <i className="far fa-clock" /> 3 weeks ago
                    </div>
                  </div>
                </div>
                <p className="mt-4">"Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."</p>
                <div className="rating mt-3">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="horizontal dark my-5" />
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6 ms-auto">
            <img className="w-100 opacity-6" src="./assets/img/logos/gray-logos/logo-apple.svg" alt="Logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <img className="w-100 opacity-6" src="./assets/img/logos/gray-logos/logo-facebook.svg" alt="Logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <img className="w-100 opacity-6" src="./assets/img/logos/gray-logos/logo-nasa.svg" alt="Logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6 ms-lg-0 ms-md-auto">
            <img className="w-100 opacity-6" src="./assets/img/logos/gray-logos/logo-vodafone.svg" alt="Logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-6 me-md-auto mx-md-0 mx-auto">
            <img className="w-100 opacity-6" src="./assets/img/logos/gray-logos/logo-digitalocean.svg" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
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
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="text-center">
              <h3 className="mt-5 mb-4">Available on these technologies</h3>
              <div className="row justify-content-center">
                <div className="col-lg-2 col-4">
                  <a href="https://www.creative-tim.com/product/soft-ui-design-system" target="_blank">
                    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg" className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bootstrap 5 - Most popular front-end component library" />
                  </a>
                </div>
                <div className="col-lg-2 col-4">
                  <a href="javascript:;">
                    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg" className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Comming soon" />
                  </a>
                </div>
                <div className="col-lg-2 col-4">
                  <a href="javascript:;">
                    <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg" className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Comming soon" />
                  </a>
                </div>
                <div className="col-lg-2 col-4">
                  <a href="javascript:;">
                    <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg" className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Comming soon" />
                  </a>
                </div>
                <div className="col-lg-2 col-4">
                  <a href="javascript:;">
                    <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg" className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Comming soon" />
                  </a>
                </div>
                <div className="col-lg-2 col-4">
                  <a href="javascript:;" target="_blank">
                    <img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg" className="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Comming soon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-12 my-auto">
            <h3 className="text-gradient text-primary mb-0">You liked it and</h3>
            <h3>Want more?</h3>
            <p className="pe-md-5 mb-4">
              Most complex and innovative Design System Made by <a href="https://creative-tim.com/" target="_blank">Creative Tim </a> . Check our latest Premium Bootstrap 5 UI Kit.
              Designed for those who like bold elements and beautiful websites. Made of hundred of elements, designed blocks and fully coded pages, Material Kit is ready to help you create stunning websites and webapps.
            </p>
            <div className="github-buttons">
              <a href="https://www.creative-tim.com/product/material-kit-pro?ref=index-mk2" target="_blank" className="btn bg-gradient-primary mb-5 mb-sm-0">Upgrade to Pro</a>
              <div className="github-button">
                <span />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12 my-auto">
            <a href="https://www.creative-tim.com/product/material-kit-pro?ref=index-mk2">
              <img className="w-100 border-radius-lg shadow-lg" src="https://s3.amazonaws.com/creativetim_bucket/products/46/original/material-kit-pro.jpg?1632843641" alt="Product Image" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* -------   START PRE-FOOTER 2 - simple social line w/ title & 3 buttons    -------- */}
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 ms-auto">
            <h4 className="mb-1">Thank you for your support!</h4>
            <p className="lead mb-0">We deliver the best web products</p>
          </div>
          <div className="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Kit%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit" className="btn btn-twitter mb-0 me-2" target="_blank">
              <i className="fab fa-twitter me-1" /> Tweet
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit" className="btn btn-facebook mb-0 me-2" target="_blank">
              <i className="fab fa-facebook-square me-1" /> Share
            </a>
            <a href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit" className="btn btn-pinterest mb-0 me-2" target="_blank">
              <i className="fab fa-pinterest me-1" /> Pin it
            </a>
          </div>
        </div>
      </div>
    </div>
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





export default LifeStylePage;

