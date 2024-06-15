import React, { useEffect, useState } from 'react';
import { createPopper } from "@popperjs/core";
import './Sidebar.css';
import { PATH_DASHBOARD } from '../../routes/paths.ts';

const ANIMATION_DURATION = 300;

const Sidebar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const sidebarEl = document.getElementById("sidebar");
    if (!sidebarEl) return;

    const subMenuEls = document.querySelectorAll(".menu > ul > .menu-item.sub-menu");
    const firstSubMenusBtn = document.querySelectorAll(".menu > ul > .menu-item.sub-menu > a");
    const innerSubMenusBtn = document.querySelectorAll(".menu > ul > .menu-item.sub-menu .menu-item.sub-menu > a");

    class PopperObject {
      instance: any;
      reference: HTMLElement | null;
      popperTarget: HTMLElement | null;

      constructor(reference: HTMLElement, popperTarget: HTMLElement) {
        this.instance = null;
        this.reference = null;
        this.popperTarget = null;
        this.init(reference, popperTarget);
      }

      init(reference: HTMLElement, popperTarget: HTMLElement) {
        this.reference = reference;
        this.popperTarget = popperTarget;
        this.instance = createPopper(this.reference, this.popperTarget, {
          placement: "right",
          strategy: "fixed",
          modifiers: [
            {
              name: "computeStyles",
              options: {
                adaptive: false,
              },
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["left", "right"],
              },
            },
          ],
        });

        document.addEventListener("click", this.clicker.bind(this), false);

        const ro = new ResizeObserver(() => {
          this.instance.update();
        });

        ro.observe(this.popperTarget);
        ro.observe(this.reference);
      }

      clicker(event: MouseEvent) {
        const sidebarEl = document.getElementById("sidebar");
        if (
          sidebarEl?.classList.contains("collapsed") &&
          !this.popperTarget?.contains(event.target as Node) &&
          !this.reference?.contains(event.target as Node)
        ) {
          this.hide();
        }
      }

      hide() {
        if (this.instance && this.instance.state) {
          this.instance.state.elements.popper.style.visibility = "hidden";
        }
      }
    }

    class Poppers {
      subMenuPoppers: PopperObject[];

      constructor() {
        this.subMenuPoppers = [];
        this.init();
      }

      init() {
        subMenuEls.forEach(element => {
          const lastElementChild = element.lastElementChild as HTMLElement;
          if (lastElementChild) {
            this.subMenuPoppers.push(new PopperObject(element as HTMLElement, lastElementChild));
          }
          this.closePoppers();
        });
      }

      togglePopper(target: HTMLElement) {
        if (window.getComputedStyle(target).visibility === "hidden")
          target.style.visibility = "visible";
        else
          target.style.visibility = "hidden";
      }

      updatePoppers() {
        this.subMenuPoppers.forEach(element => {
          if (element.instance && element.instance.state) {
            element.instance.state.elements.popper.style.display = "none";
            element.instance.update();
          }
        });
      }

      closePoppers() {
        this.subMenuPoppers.forEach(element => {
          element.hide();
        });
      }
    }

    const PoppersInstance = new Poppers();

    const updatePoppersTimeout = () => {
      setTimeout(() => {
        PoppersInstance.updatePoppers();
      }, ANIMATION_DURATION);
    };

    const handleCollapseToggle = () => {
      sidebarEl.classList.toggle("collapsed");
      setSidebarCollapsed(!sidebarCollapsed);
      PoppersInstance.closePoppers();
      if (sidebarEl.classList.contains("collapsed")) {
        firstSubMenusBtn.forEach(element => {
          const parentElement = element.parentElement;
          if (parentElement) {
            parentElement.classList.remove("open");
          }
        });
      }
      updatePoppersTimeout();
    };

    const handleToggleSidebar = () => {
      sidebarEl.classList.toggle("toggled");
      updatePoppersTimeout();
    };

    const handleOverlayClick = () => {
      sidebarEl.classList.toggle("toggled");
    };

    document.getElementById("btn-collapse")?.addEventListener("click", handleCollapseToggle);
    document.getElementById("btn-toggle")?.addEventListener("click", handleToggleSidebar);
    document.getElementById("overlay")?.addEventListener("click", handleOverlayClick);

    const slideUp = (target: HTMLElement, duration = ANIMATION_DURATION) => {
      const { parentElement } = target;
      if (!parentElement) return;
      parentElement.classList.remove("open");
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = `${duration}ms`;
      target.style.boxSizing = "border-box";
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = "0";
      target.style.paddingTop = "0";
      target.style.paddingBottom = "0";
      target.style.marginTop = "0";
      target.style.marginBottom = "0";
      window.setTimeout(() => {
        target.style.display = "none";
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
      }, duration);
    };

    const slideDown = (target: HTMLElement, duration = ANIMATION_DURATION) => {
      const { parentElement } = target;
      if (!parentElement) return;
      parentElement.classList.add("open");
      target.style.removeProperty("display");
      let { display } = window.getComputedStyle(target);
      if (display === "none") display = "block";
      target.style.display = display;
      const height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = "0";
      target.style.paddingTop = "0";
      target.style.paddingBottom = "0";
      target.style.marginTop = "0";
      target.style.marginBottom = "0";
      target.offsetHeight;
      target.style.boxSizing = "border-box";
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = `${duration}ms`;
      target.style.height = `${height}px`;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
      }, duration);
    };

    const slideToggle = (target: HTMLElement, duration = ANIMATION_DURATION) => {
      if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration);
      }
      return slideUp(target, duration);
    };

    firstSubMenusBtn.forEach(element => {
      element.addEventListener("click", () => {
        const nextElementSibling = element.nextElementSibling as HTMLElement;
        if (sidebarCollapsed) {
          if (nextElementSibling) {
            PoppersInstance.togglePopper(nextElementSibling);
          }
        } else {
          const parentMenu = element.closest(".menu.open-current-submenu");
          if (parentMenu) {
            parentMenu
              .querySelectorAll(":scope > ul > .menu-item.sub-menu > a")
              .forEach(el => {
                const elNextElementSibling = el.nextElementSibling as HTMLElement;
                if (elNextElementSibling && window.getComputedStyle(elNextElementSibling).display !== "none") {
                  slideUp(elNextElementSibling);
                }
              });
          }
          if (nextElementSibling) {
            slideToggle(nextElementSibling);
          }
        }
      });
    });

    innerSubMenusBtn.forEach(element => {
      element.addEventListener("click", () => {
        const nextElementSibling = element.nextElementSibling as HTMLElement;
        if (nextElementSibling) {
          slideToggle(nextElementSibling);
        }
      });
    });

    return () => {
      document.getElementById("btn-collapse")?.removeEventListener("click", handleCollapseToggle);
      document.getElementById("btn-toggle")?.removeEventListener("click", handleToggleSidebar);
      document.getElementById("overlay")?.removeEventListener("click", handleOverlayClick);
    };
  }, [sidebarCollapsed]);




  return (
<div>
  <meta charSet="UTF-8" />
  <title>CodePen - Pro Sidebar template</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" />
  <link rel="stylesheet" href="https://unpkg.com/css-pro-layout@1.1.0/dist/css/css-pro-layout.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" /><link rel="stylesheet" href="./style.css" />
  
  <div className="layout has-sidebar fixed-sidebar fixed-header">
    <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
      <a id="btn-collapse" className="sidebar-collapser"><i className="ri-arrow-left-s-line" /></a>
      <div className="image-wrapper">
        <img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
      </div>
      <div className="sidebar-layout">
        
        <div className="sidebar-content">
          <nav className="menu open-current-submenu">
            <ul>
              <li className="menu-header"><span> GENERAL </span></li>
              <li className="menu-item sub-menu">
                <a href="#">
                  <span className="menu-icon">
                    <i className="ri-vip-diamond-fill" />
                  </span>
                  <span className="menu-title">Grid</span>
                 
                </a>
                <div className="sub-menu-list">
                  <ul>
                    <li className="menu-item">
                      <a href={PATH_DASHBOARD.usersManagement}>
                        <span className="menu-title">Users Management</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href={PATH_DASHBOARD.inbox}>
                        <span className="menu-title">Inbox</span>
                      </a>
                    </li>
                    <li className="menu-item sub-menu">
                      <a href="#">
                        <span className="menu-title">Logs</span>
                      </a>
                      <div className="sub-menu-list">
                        <ul>
                          <li className="menu-item">
                            <a href={PATH_DASHBOARD.systemLogs}>
                              <span className="menu-title">System Logs</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href={PATH_DASHBOARD.myLogs}>
                              <span className="menu-title">My Logs</span>
                            </a>
                          </li>
                          <li className="menu-item sub-menu">
                            <a href="#">
                              <span className="menu-title">More</span>
                            </a>
                            <div className="sub-menu-list">
                              <ul>
                                <li className="menu-item">
                                  <a href="#">
                                    <span className="menu-title">CheckBox</span>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a href="#">
                                    <span className="menu-title">Radio</span>
                                  </a>
                                </li>
                                <li className="menu-item sub-menu">
                                  <a href="#">
                                    <span className="menu-title">Want more ?</span>
                                    <span className="menu-suffix">🤔</span>
                                  </a>
                                  <div className="sub-menu-list">
                                    <ul>
                                      <li className="menu-item">
                                        <a href="#">
                                          <span className="menu-prefix">🎉</span>
                                          <span className="menu-title">You made it </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item sub-menu">
                <a href="#">
                  <span className="menu-icon">
                    <i className="ri-bar-chart-2-fill" />
                  </span>
                  <span className="menu-title">Charts</span>
                </a>
                <div className="sub-menu-list">
                  <ul>
                    <li className="menu-item">
                      <a href={PATH_DASHBOARD.sendMessage}>
                        <span className="menu-title">Send Message</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href={PATH_DASHBOARD.allMessages}>
                        <span className="menu-title">All Messages</span>
                      </a>
                    </li>
                    {/*<li className="menu-item">
                      <a href={PATH_DASHBOARD.accessories}>
                        <span className="menu-title">Bar chart</span>
                      </a>
                    </li>*/}
                    {/*  <li className="menu-item">
                      <a href={PATH_DASHBOARD.Appointment}>
                        <span className="menu-title">Bar chart</span>
                      </a>
                    </li>*/}
                    {/*  <li className="menu-item">
                      <a href={PATH_DASHBOARD.Booking}>
                        <span className="menu-title">Bar chart</span>
                      </a>
                    </li>*/}
                    {/* <li className="menu-item">
                      <a href={PATH_DASHBOARD.Customer}>
                        <span className="menu-title">Bar chart</span>
                      </a>
                    </li>*/}
                     {/* <li className="menu-item">
                      <a href={PATH_DASHBOARD.Payment}>
                        <span className="menu-title">Bar chart</span>
                      </a>
                    </li>*/}
                      <li className="menu-item">
                      <a href="#">
                        <span className="menu-title">Bar chart</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item sub-menu">
                <a href="#">
                  <span className="menu-icon">
                    <i className="ri-shopping-cart-fill" />
                  </span>
                  <span className="menu-title">E-commerce</span>
                </a>
                <div className="sub-menu-list">
                  <ul>
                    <li className="menu-item">
                      <a href="#">
                        <span className="menu-title">Products</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#">
                        <span className="menu-title">Orders</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#">
                        <span className="menu-title">credit card</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item sub-menu">
                <a href="#">
                  <span className="menu-icon">
                    <i className="ri-global-fill" />
                  </span>
                  <span className="menu-title">Maps</span>
                </a>
                <div className="sub-menu-list">
                  <ul>
                    <li className="menu-item">
                      <a href={PATH_DASHBOARD.Product}>
                        <span className="menu-title">Product</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href={PATH_DASHBOARD.Supplier}>
                        <span className="menu-title">Supplier</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href={PATH_DASHBOARD.Invoice}>
                        <span className="menu-title">Invoice</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item sub-menu">
                <a href="#">
                  <span className="menu-icon">
                    <i className="ri-paint-brush-fill" />
                  </span>
                  <span className="menu-title">Theme</span>
                </a>
                <div className="sub-menu-list">
                  <ul>
                    <li className="menu-item">
                      <a href="#">
                        <span className="menu-title">Dark</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#">
                        <span className="menu-title">Light</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-header" style={{paddingTop: 20}}><span> EXTRA </span></li>
              <li className="menu-item">
                <a href={PATH_DASHBOARD.owner}>
                  <span className="menu-icon">
                    <i className="ri-book-2-fill" />
                  </span>
                  <span className="menu-title">Owner</span>
                  <span className="menu-suffix">
                    <span className="badge secondary">Beta</span>
                  </span>
                </a>
              </li>
              <li className="menu-item">
                <a href={PATH_DASHBOARD.admin}>
                  <span className="menu-icon">
                 {/*   <i className="ri-calendar-fill" />*/}
                 <i className="ri-book-2-fill" />
                  </span>
                  <span className="menu-title">Admin</span>
                </a>
              </li>
              <li className="menu-item">
                <a href={PATH_DASHBOARD.manager}>
                  <span className="menu-icon">
                   {/*  <i className="ri-service-fill" />*/}
                   <i className="ri-book-2-fill" />
                  </span>
                  <span className="menu-title">Manager</span>
                </a>
              </li>
              <li className="menu-item">
                <a href={PATH_DASHBOARD.user}>
                  <span className="menu-icon">
                   {/*  <i className="ri-service-fill" />*/}
                   <i className="ri-service-fill" />
                  </span>
                  <span className="menu-title">User</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>
    </aside>
    
   
  </div>
 
</div>
);
}

export default Sidebar;
