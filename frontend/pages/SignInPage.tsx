import React from 'react';

const SignInPage = () => {
  return (
    <div>
  
    {/*
=========================================================
* Material Kit 2 - v3.0.4
=========================================================

* Product Page:  https://www.creative-tim.com/product/material-kit 
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. */}
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
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent ">
      <div className="container">
        <a className="navbar-brand  text-white " href="https://demos.creative-tim.com/material-kit/presentation" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
          Material Kit 2
        </a>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </span>
        </button>
        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <li className="nav-item dropdown dropdown-hover mx-2 ms-lg-6">
              <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPages8" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="material-icons opacity-6 me-2 text-md">dashboard</i>
                Pages
                <img src="../assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-2 d-lg-block d-none" />
                <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-2 d-lg-none d-block" />
              </a>
              <div className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages8">
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
              <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="material-icons opacity-6 me-2 text-md">view_day</i>
                Sections
                <img src="../assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-2 d-lg-block d-none" />
                <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-2 d-lg-none d-block" />
              </a>
              <ul className="dropdown-menu dropdown-menu-animation dropdown-menu-end dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuBlocks">
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
              <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="material-icons opacity-6 me-2 text-md">article</i>
                Docs
                <img src="../assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-2 d-lg-block d-none" />
                <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-2 d-lg-none d-block" />
              </a>
              <ul className="dropdown-menu dropdown-menu-animation dropdown-menu-end dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
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
              <a className="nav-link nav-link-icon me-2" href="https://github.com/creativetimofficial/soft-ui-design-system" target="_blank">
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
    <div className="page-header align-items-start min-vh-100" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'}}>
      <span className="mask bg-gradient-dark opacity-6" />
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                  <div className="row mt-3">
                    <div className="col-2 text-center ms-auto">
                      <a className="btn btn-link px-3" href="javascript:;">
                        <i className="fa fa-facebook text-white text-lg" />
                      </a>
                    </div>
                    <div className="col-2 text-center px-1">
                      <a className="btn btn-link px-3" href="javascript:;">
                        <i className="fa fa-github text-white text-lg" />
                      </a>
                    </div>
                    <div className="col-2 text-center me-auto">
                      <a className="btn btn-link px-3" href="javascript:;">
                        <i className="fa fa-google text-white text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form role="form" className="text-start">
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-check form-switch d-flex align-items-center mb-3">
                    <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                    <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                  </div>
                  <p className="mt-4 text-sm text-center">
                    Don't have an account?
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer position-absolute bottom-2 py-2 w-100">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-12 col-md-6 my-auto">
              <div className="copyright text-center text-sm text-white text-lg-start">
                © ,
                made with <i className="fa fa-heart" aria-hidden="true" /> by
                <a href="https://www.creative-tim.com" className="font-weight-bold text-white" target="_blank">Creative Tim</a>
                for a better web.
              </div>
            </div>
            <div className="col-12 col-md-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link text-white" target="_blank">Creative Tim</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link text-white" target="_blank">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/blog" className="nav-link text-white" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-white" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    {/*   Core JS Files   */}
    {/* Control Center for Material UI Kit: parallax effects, scripts for the example pages etc */}
    {/*  Google Maps Plugin    */}
    </div>

);
};

export default SignInPage;
