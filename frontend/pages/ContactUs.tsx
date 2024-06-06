import React from 'react';

const ContactUsPage = () => {
  return (
    <div>
  

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
  {/* Navbar */}
  <div className="container position-sticky z-index-sticky top-0">
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg  blur border-radius-xl mt-4 top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div className="container-fluid px-0">
            <a className="navbar-brand font-weight-bolder ms-sm-3" href="https://demos.creative-tim.com/material-kit/index" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
              Material Kit 2
            </a>
            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </span>
            </button>
            <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
              <ul className="navbar-nav navbar-nav-hover ms-auto">
                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="material-icons opacity-6 me-2 text-md">dashboard</i>
                    Pages
                    <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-auto ms-md-2" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                    <div className="d-none d-lg-block">
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        Landing Pages
                      </h6>
                      <a href="../pages/about-us.html" className="dropdown-item border-radius-md">
                        <span>About Us</span>
                      </a>
                      <a href="../pages/contact-us.html" className="dropdown-item border-radius-md">
                        <span>Contact Us</span>
                      </a>
                      <a href="../pages/author.html" className="dropdown-item border-radius-md">
                        <span>Author</span>
                      </a>
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                        Account
                      </h6>
                      <a href="../pages/sign-in.html" className="dropdown-item border-radius-md">
                        <span>Sign In</span>
                      </a>
                    </div>
                    <div className="d-lg-none">
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        Landing Pages
                      </h6>
                      <a href="../pages/about-us.html" className="dropdown-item border-radius-md">
                        <span>About Us</span>
                      </a>
                      <a href="../pages/contact-us.html" className="dropdown-item border-radius-md">
                        <span>Contact Us</span>
                      </a>
                      <a href="../pages/author.html" className="dropdown-item border-radius-md">
                        <span>Author</span>
                      </a>
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                        Account
                      </h6>
                      <a href="../pages/sign-in.html" className="dropdown-item border-radius-md">
                        <span>Sign In</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="material-icons opacity-6 me-2 text-md">view_day</i>
                    Sections
                    <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-auto ms-md-2" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuBlocks">
                    <div className="d-none d-lg-block">
                      <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../presentation.html">
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Page Sections</h6>
                              <span className="text-sm">See all sections</span>
                            </div>
                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" className="arrow" />
                          </div>
                        </a>
                        <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/page-sections/hero-sections.html">
                            Page Headers
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/page-sections/features.html">
                            Features
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../presentation.html">
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Navigation</h6>
                              <span className="text-sm">See all navigations</span>
                            </div>
                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" className="arrow" />
                          </div>
                        </a>
                        <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/navigation/navbars.html">
                            Navbars
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/navigation/nav-tabs.html">
                            Nav Tabs
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/navigation/pagination.html">
                            Pagination
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../presentation.html">
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Input Areas</h6>
                              <span className="text-sm">See all input areas</span>
                            </div>
                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" className="arrow" />
                          </div>
                        </a>
                        <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/input-areas/inputs.html">
                            Inputs
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/input-areas/forms.html">
                            Forms
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../presentation.html">
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Attention Catchers</h6>
                              <span className="text-sm">See all examples</span>
                            </div>
                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" className="arrow" />
                          </div>
                        </a>
                        <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/attention-catchers/alerts.html">
                            Alerts
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/attention-catchers/modals.html">
                            Modals
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/attention-catchers/tooltips-popovers.html">
                            Tooltips &amp; Popovers
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../presentation.html">
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Elements</h6>
                              <span className="text-sm">See all elements</span>
                            </div>
                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" className="arrow" />
                          </div>
                        </a>
                        <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/avatars.html">
                            Avatars
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/badges.html">
                            Badges
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/breadcrumbs.html">
                            Breadcrumbs
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/buttons.html">
                            Buttons
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/dropdowns.html">
                            Dropdowns
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/progress-bars.html">
                            Progress Bars
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/toggles.html">
                            Toggles
                          </a>
                          <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/typography.html">
                            Typography
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="row d-lg-none">
                      <div className="col-md-12">
                        <div className="d-flex mb-2">
                          <div className="icon h-10 me-3 d-flex mt-1">
                            <i className="ni ni-single-copy-04 text-gradient text-primary" />
                          </div>
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Page Sections</h6>
                            </div>
                          </div>
                        </div>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/page-sections/hero-sections.html">
                          Page Headers
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/page-sections/features.html">
                          Features
                        </a>
                        <div className="d-flex mb-2 mt-3">
                          <div className="icon h-10 me-3 d-flex mt-1">
                            <i className="ni ni-laptop text-gradient text-primary" />
                          </div>
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Navigation</h6>
                            </div>
                          </div>
                        </div>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/navigation/navbars.html">
                          Navbars
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/navigation/nav-tabs.html">
                          Nav Tabs
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/navigation/pagination.html">
                          Pagination
                        </a>
                        <div className="d-flex mb-2 mt-3">
                          <div className="icon h-10 me-3 d-flex mt-1">
                            <i className="ni ni-badge text-gradient text-primary" />
                          </div>
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Input Areas</h6>
                            </div>
                          </div>
                        </div>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/input-areas/inputs.html">
                          Inputs
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/input-areas/forms.html">
                          Forms
                        </a>
                        <div className="d-flex mb-2 mt-3">
                          <div className="icon h-10 me-3 d-flex mt-1">
                            <i className="ni ni-notification-70 text-gradient text-primary" />
                          </div>
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Attention Catchers</h6>
                            </div>
                          </div>
                        </div>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/attention-catchers/alerts.html">
                          Alerts
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/attention-catchers/modals.html">
                          Modals
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/attention-catchers/tooltips-popovers.html">
                          Tooltips &amp; Popovers
                        </a>
                        <div className="d-flex mb-2 mt-3">
                          <div className="icon h-10 me-3 d-flex mt-1">
                            <i className="ni ni-app text-gradient text-primary" />
                          </div>
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Elements</h6>
                            </div>
                          </div>
                        </div>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/avatars.html">
                          Avatars
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/badges.html">
                          Badges
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/breadcrumbs.html">
                          Breadcrumbs
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/buttons.html">
                          Buttons
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/dropdowns.html">
                          Dropdowns
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/progress-bars.html">
                          Progress Bars
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/toggles.html">
                          Toggles
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md mb-1" href="../sections/elements/typography.html">
                          Typography
                        </a>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="material-icons opacity-6 me-2 text-md">article</i>
                    Docs
                    <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-auto ms-md-2" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                    <div className="d-none d-lg-block">
                      <ul className="list-group">
                        <li className="nav-item list-group-item border-0 p-0">
                          <a className="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit ">
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Getting Started</h6>
                            <span className="text-sm">All about overview, quick start, license and contents</span>
                          </a>
                        </li>
                        <li className="nav-item list-group-item border-0 p-0">
                          <a className="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/colors/material-kit ">
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Foundation</h6>
                            <span className="text-sm">See our colors, icons and typography</span>
                          </a>
                        </li>
                        <li className="nav-item list-group-item border-0 p-0">
                          <a className="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/alerts/material-kit ">
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Components</h6>
                            <span className="text-sm">Explore our collection of fully designed components</span>
                          </a>
                        </li>
                        <li className="nav-item list-group-item border-0 p-0">
                          <a className="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/datepicker/material-kit ">
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Plugins</h6>
                            <span className="text-sm">Check how you can integrate our plugins</span>
                          </a>
                        </li>
                        <li className="nav-item list-group-item border-0 p-0">
                          <a className="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/utilities/material-kit ">
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Utility Classes</h6>
                            <span className="text-sm">For those who want flexibility, use our utility classes</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="row d-lg-none">
                      <div className="col-md-12 g-0">
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/about-us.html">
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Getting Started</h6>
                          <span className="text-sm">All about overview, quick start, license and contents</span>
                        </a>
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/about-us.html">
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Foundation</h6>
                          <span className="text-sm">See our colors, icons and typography</span>
                        </a>
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/about-us.html">
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Components</h6>
                          <span className="text-sm">Explore our collection of fully designed components</span>
                        </a>
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/about-us.html">
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Plugins</h6>
                          <span className="text-sm">Check how you can integrate our plugins</span>
                        </a>
                        <a className="dropdown-item py-2 ps-3 border-radius-md" href="../pages/about-us.html">
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Utility Classes</h6>
                          <span className="text-sm">For those who want flexibility, use our utility classes</span>
                        </a>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item ms-lg-auto">
                  <a className="nav-link nav-link-icon me-2" href="https://github.com/creativetimofficial/material-kit" target="_blank">
                    <i className="fa fa-github me-1" />
                    <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github">Github</p>
                  </a>
                </li>
                <li className="nav-item my-auto ms-3 ms-lg-0">
                  <a href="https://www.creative-tim.com/product/material-kit-pro" className="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">Upgrade to Pro</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
      </div>
    </div>
  </div>
  {/* -------- START HEADER 8 w/ card over right bg image ------- */}
  <section>
    <div className="page-header min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
            <div className="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{backgroundImage: 'url("../assets/img/illustrations/illustration-signin.jpg")', backgroundSize: 'cover'}} />
          </div>
          <div className="col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
            <div className="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div className="bg-gradient-primary shadow-primary border-radius-lg p-3">
                  <h3 className="text-white text-primary mb-0">Contact us</h3>
                </div>
              </div>
              <div className="card-body">
                <p className="pb-3">
                  For further questions, including partnership opportunities, please email hello@creative-tim.com
                  or contact using our contact form.
                </p>
                <form id="contact-form" method="post" autoComplete="off">
                  <div className="card-body p-0 my-3">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group input-group-static mb-4">
                          <label>Full Name</label>
                          <input type="email" className="form-control" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-md-6 ps-md-2">
                        <div className="input-group input-group-static mb-4">
                          <label>Email</label>
                          <input type="email" className="form-control" placeholder="hello@creative-tim.com" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0 mt-md-0 mt-4">
                      <div className="input-group input-group-static mb-4">
                        <label>How can we help you?</label>
                        <textarea name="message" className="form-control" id="message" rows={6} placeholder="Describe your problem in at least 250 characters" defaultValue={""} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn bg-gradient-primary mt-3 mb-0">Send Message</button>
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
  {/* -------- END HEADER 8 w/ card over right bg image ------- */}
  <footer className="footer pt-5 mt-5">
    <div className="container">
      <div className=" row">
        <div className="col-md-3 mb-4 ms-auto">
          <div>
            <a href="https://www.creative-tim.com/product/material-kit">
              <img src="../assets/img/logo-ct-dark.png" className="mb-3 footer-logo" alt="main_logo" />
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
  {/* Control Center for Material UI Kit: parallax effects, scripts for the example pages etc */}
  {/*  Google Maps Plugin    */}
</div>

</div>

);
};

export default ContactUsPage ;
