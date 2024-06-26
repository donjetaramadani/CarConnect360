import React from 'react';
import './styleauthor.css';

const AuthorPage = () => {
  return (
    <div className="container">
  


<div>

  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png" />
  <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
  <title>
    Material Kit 2 by Creative Tim
  </title>
  {/*     Fonts and icons     */}
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  {/* Nucleo Icons */}
  <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
  {/* Font Awesome Icons */}
  {/* Material Icons */}
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
  {/* CSS Files */}
  <link id="pagestyle" href="../assets/css/material-kit.css?v=3.0.4" rel="stylesheet" />
  {/* Nepcha Analytics (nepcha.com) */}
  {/* Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. */}
  {/* Navbar Transparent */}
  
  <header>
    <div className="page-header min-height-400" style={{backgroundImage: 'url("../assets/img/city-profile.jpg")'}} >
      <span className="mask bg-gradient-dark opacity-8" />
    </div>
  </header>

  <div className="card card-body shadow-blur mx-5 mx-md-4 mt-n7 mb-4">
   

    {/*    <div className="row py-5">
              <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="mb-0">Michael Roven</h3>
                  <div className="d-block">
                    <button type="button" className="btn btn-sm btn-outline-info text-nowrap mb-0">Follow</button>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-auto">
                    <span className="h6">323</span>
                    <span>Posts</span>
                  </div>
                  <div className="col-auto">
                    <span className="h6">3.5k</span>
                    <span>Followers</span>
                  </div>
                  <div className="col-auto">
                    <span className="h6">260</span>
                    <span>Following</span>
                  </div>
                </div>
                <p className="text-lg mb-0">
                  Decisions: If you can’t decide, the answer is no.
                  If two equally difficult paths, choose the one more
                  painful in the short term (pain avoidance is creating
                  an illusion of equality). Choose the path that leaves
                  you more equanimous. <br /><a href="javascript:;" className="text-info icon-move-right">More about me
                    <i className="fas fa-arrow-right text-sm ms-1" />
                  </a>
                </p>
              </div>
            </div>*/}
 <section className="py-sm-7 py-5 position-relative">
  <div className="container">
    <div className="row">
      <div className="col-12 mx-auto">
        <div className="mt-n8 mt-md-n9 text-center img-container">
          <img 
            className="wide-img shadow-xl position-relative z-index-2 taller-img" 
            src="../assets/img/o.jpg" 
            alt="bruce" 
            loading="lazy" 
          />
        </div>
        <div className="row py-5">
          <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
            <div className="d-flex justify-content-center">
              {/* Other content goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<div className="card card-body shadow-xl mx-2 mx-md-4 mt-n6 mb-4">
    {/* Section with four info areas left & one card right with image and waves */}
    <section className="py-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="row justify-content-start">
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">public</i>
                  <h5>Fully integrated</h5>
                  <p>We provide a seamless browsing and purchasing experience, ensuring that our users find the perfect vehicle without any hassle.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">payments</i>
                  <h5>Payments functionality</h5>
                  <p>Our platform offers robust payment options, making transactions smooth and secure for all users.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-start mt-4">
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">apps</i>
                  <h5>Prebuilt components</h5>
                  <p>Experience our enhanced platform, designed to meet all your automotive needs efficiently and effectively.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">3p</i>
                  <h5>Improved platform</h5>
                  <p>Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System to save both time and money.</p>
                </div>
              </div>
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
          <div className="col-lg-4 ms-auto mt-lg-0 mt-4">
            <div className="card">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <a className="d-block blur-shadow-image">
                  <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="img-colored-shadow" className="img-fluid border-radius-lg" />
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="font-weight-normal">
                  <a href="javascript:;">Advanced Analytics</a>
                </h5>
                <p className="mb-0">
                Website visitors today demand a frictionless user experience—especially when using search. CarConnect360 goes a step further by providing advanced analytics, giving you valuable insights into user behavior and preferences.
                </p>
                <button type="button" className="btn bg-gradient-info btn-sm mb-0 mt-3">Find out more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>


    <section className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="mb-5">Check my latest blogposts</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card card-plain">
              <div className="card-header p-0 position-relative">
                <a className="d-block blur-shadow-image">
                  <img src="../assets/img/examples/testimonial-6-2.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" loading="lazy" />
                </a>
              </div>
              <div className="card-body px-0">
                <h5>
                  <a href="javascript:;" className="text-dark font-weight-bold">CarConnect360 raised $65 million in Funding</a>
                </h5>
                <p>
                CarConnect360 has successfully raised $65 million to revolutionize the automotive browsing and purchasing experience. This funding will enable us to expand our offerings and improve our platform...
                </p>
                <a href="javascript:;" className="text-info text-sm icon-move-right">Read More
                  <i className="fas fa-arrow-right text-xs ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-plain">
              <div className="card-header p-0 position-relative">
                <a className="d-block blur-shadow-image">
                  <img src="../assets/img/examples/testimonial-6-3.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" loading="lazy" />
                </a>
              </div>
              <div className="card-body px-0">
                <h5>
                  <a href="javascript:;" className="text-dark font-weight-bold">Advanced Machine Learning for Vehicle Recommendations</a>
                </h5>
                <p>
                Our latest update integrates advanced machine learning algorithms to provide personalized vehicle recommendations, making it easier for users to find their ideal car...
                </p>
                <a href="javascript:;" className="text-info text-sm icon-move-right">Read More
                  <i className="fas fa-arrow-right text-xs ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-plain">
              <div className="card-header p-0 position-relative">
                <a className="d-block blur-shadow-image">
                  <img src="../assets/img/examples/blog-9-4.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" loading="lazy" />
                </a>
              </div>
              <div className="card-body px-0">
                <h5>
                  <a href="javascript:;" className="text-dark font-weight-bold">Streamlined Vehicle Rental Processes</a>
                </h5>
                <p>
                CarConnect360 introduces streamlined processes for vehicle rentals, ensuring a hassle-free experience for our users.
                 Learn more about how we are simplifying rentals...
                </p>
                <a href="javascript:;" className="text-info text-sm icon-move-right">Read More
                  <i className="fas fa-arrow-right text-xs ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <div className="card card-blog card-background cursor-pointer">
              <div className="full-background" style={{backgroundImage: 'url("../assets/img/examples/blog2.jpg")'}}  />
              <div className="card-body">
                <div className="content-left text-start my-auto py-4">
                  <h2 className="card-title text-white">Flexible Maintenance Scheduling</h2>
                  <p className="card-description text-white">Forget rigid maintenance schedules. With CarConnect360, you can book vehicle maintenance at your convenience, ensuring your car is always in top condition without disrupting your schedule.</p>
                  <a href="javascript:;" className="text-white text-sm icon-move-right">Read More
                    <i className="fas fa-arrow-right text-xs ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>

  <section className="py-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h2 className="mb-0">Trusted by over</h2>
            <h2 className="text-gradient text-primary mb-3">1,679,477+ Car Enthusiasts and Professionals</h2>
            <p className="lead">Many automotive businesses, car enthusiasts, and service providers love CarConnect360's offerings. </p>
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
                <p className="mt-4">"This platform is fantastic! The user interface is intuitive, and it made finding my dream car incredibly easy."</p>
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
                <p className="mt-4 text-white">"I've used CarConnect360 for all my car rental needs. It's affordable and reliable. The support team is very helpful and responsive!"</p>
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
                <p className="mt-4">"CarConnect360 saved me a lot of time. I found the perfect vehicle components and maintenance services without any hassle. Highly recommended for car enthusiasts!"</p>
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
        
      </div>
    </section>


  <section className="py-lg-5">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card box-shadow-xl overflow-hidden mb-5">
            <div className="row">
              <div className="col-lg-5 position-relative bg-cover px-0" style={{backgroundImage: 'url("../assets/img/examples/blog2.jpg")'}} >
                <div className="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                  <div className="mask bg-gradient-dark opacity-8" />
                  <div className="p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
                    <h3 className="text-white">Contact Information</h3>
                    <p className="text-white opacity-8 mb-4">Fill up the form and our Team will get back to you within 24 hours.</p>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-phone text-sm" />
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">(+40) 772 100 200</span>
                      </div>
                    </div>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-envelope text-sm" />
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">support@carconnect360.com</span>
                      </div>
                    </div>
                    <div className="d-flex p-2 text-white">
                      <div>
                        <i className="fas fa-map-marker-alt text-sm" />
                      </div>
                      <div className="ps-3">
                        <span className="text-sm opacity-8">Rruga Ahmet Krasniqi, Prishtina, Kosovo 10000</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Facebook">
                        <i className="fab fa-facebook" />
                      </button>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Twitter">
                        <i className="fab fa-twitter" />
                      </button>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Dribbble">
                        <i className="fab fa-dribbble" />
                      </button>
                      <button type="button" className="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Instagram">
                        <i className="fab fa-instagram" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <form className="p-3" id="contact-form" method="post">
                  <div className="card-header px-4 py-sm-5 py-3">
                    <h2>Say Hi!</h2>
                    <p className="lead"> We'd like to talk with you.</p>
                  </div>
                  <div className="card-body pt-1">
                    <div className="row">
                      <div className="col-md-12 pe-2 mb-3">
                        <div className="input-group input-group-static mb-4">
                          <label>My name is</label>
                          <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-md-12 pe-2 mb-3">
                        <div className="input-group input-group-static mb-4">
                          <label>I'm looking for</label>
                          <input type="text" className="form-control" placeholder="What you love" />
                        </div>
                      </div>
                      <div className="col-md-12 pe-2 mb-3">
                        <div className="input-group input-group-static mb-4">
                          <label>Your message</label>
                          <textarea name="message" className="form-control" id="message" rows={6} placeholder="I want to say that..." defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 text-end ms-auto">
                        <button type="submit" className="btn bg-gradient-info mb-0">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
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
            Explore the most comprehensive and innovative design system created by CarConnect360. <br/>Check out our latest Premium Automotive UI Kit.
            <br/>Designed for those who appreciate bold elements and beautiful interfaces, our UI Kit is packed with hundreds of components, designed blocks, and fully coded pages.
            <br/> CarConnect360's Material Kit is ready to help you create stunning automotive websites and web apps.
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
            <p className="lead mb-0">We are committed to delivering the best automotive web solutions.</p>
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




  <footer className="footer py-5">
    <div className="container z-index-1 position-relative">
      <div className="row">
        <div className="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
          <h6 className="text-dark font-weight-bolder text-uppercase mb-lg-4 mb-3">Material Design</h6>
          <ul className="nav flex-row ms-n3 justify-content-lg-start justify-content-center mb-4 mt-sm-0">
            <li className="nav-item">
              <a className="nav-link text-dark opacity-8" href="https://www.creative-tim.com" target="_blank">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark opacity-8" href="https://www.creative-tim.com/presentation" target="_blank">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark opacity-8" href="https://www.creative-tim.com/blog" target="_blank">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark opacity-8" href="https://www.creative-tim.com" target="_blank">
                Services
              </a>
            </li>
          </ul>
          <p className="text-sm text-dark opacity-8 mb-0">
          Copyright © CarConnect360
          </p>
        </div>
        <div className="col-lg-6 ms-auto text-lg-end text-center">
          <p className="mb-5 text-lg text-dark font-weight-bold">
          The reward for achieving excellence is recognition. The challenge of recognition is maintaining that excellence..
          </p>
          <a href="javascript:;" target="_blank" className="text-dark me-xl-4 me-4 opacity-5">
            <span className="fab fa-dribbble" />
          </a>
          <a href="javascript:;" target="_blank" className="text-dark me-xl-4 me-4 opacity-5">
            <span className="fab fa-twitter" />
          </a>
          <a href="javascript:;" target="_blank" className="text-dark me-xl-4 me-4 opacity-5">
            <span className="fab fa-pinterest" />
          </a>
          <a href="javascript:;" target="_blank" className="text-dark opacity-5">
            <span className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  </footer>

</div>
</div>

);
};

export default AuthorPage;
