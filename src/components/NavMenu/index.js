import React from "react";
import Link from "gatsby-link";
import GithubIcon from "../Svg/github";
import TwitterIcon from "../Svg/twitter";

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      isActive: false,
      reverseAnimation: false
    };
  }

  componentDidMount() {
    this.setState({ isMobile: window.innerWidth < 600 });

    window.addEventListener("resize", () => {
      const { isMobile } = this.state;
      const width = window.innerWidth;

      if (!isMobile && width < 600) {
        this.setState({ isMobile: true });
      }

      if (isMobile && width > 600) {
        this.setState({ isMobile: false });
      }
    });
  }

  getRouteClass(route) {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const location = path.split("/");
      const isRoute = location[1] == route;
      // Match blog routes by the publication date in the path
      const isBlogRoute = path
        .substring(1, 11)
        .match(/([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/g);

      if (isRoute) {
        return "active";
      } else if (isBlogRoute && (route !== "work" && route !== "about")) {
        return "active";
      }
    }

    return "inactive";
  }

  toggleNavMenu() {
    const { isActive, isMobile } = this.state;

    if (isMobile) {
      if (!isActive) {
        // Summon the nav menu
        this.setState({ isActive: true });
        // Lock scrolling
        document.body.classList.add("fixed");
      } else {
        // Dismiss the nav menu, start the reversal animation
        this.setState({ isActive: false, reverseAnimation: true });
        // Allow users to scroll again
        document.body.classList.remove("fixed");

        setTimeout(() => {
          // After the animation has completed, remove the animation class
          this.setState({ reverseAnimation: false });
        }, 1000);
      }
    }
  }

  renderNavMenu() {
    const shouldReverse = this.state.reverseAnimation === true ? "reverse" : "";

    return (
      <nav className={shouldReverse}>
        <ul className={shouldReverse}>
          <li className={this.getRouteClass("")}>
            <Link onClick={this.toggleNavMenu.bind(this)} to="/">
              Blog
            </Link>
          </li>
          <li className={this.getRouteClass("work")}>
            <Link onClick={this.toggleNavMenu.bind(this)} to="/work">
              Work
            </Link>
          </li>
          <li className={this.getRouteClass("about")}>
            <Link onClick={this.toggleNavMenu.bind(this)} to="/about">
              About
            </Link>
          </li>
          <li>
            <a href="https://github.com/tylerreckart" target="_blank">
              <GithubIcon /> <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/tylerreckart" target="_blank">
              <TwitterIcon /> <span>@tylerreckart</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    const { isMobile, isActive, reverseAnimation } = this.state;

    const applyMobileClass = isMobile === true ? "mobile" : "";
    const applyActiveClass = isActive === true ? "active" : "";
    const shouldReverse = reverseAnimation === true ? "reverse" : "";

    return (
      <div id="nav-menu" className={applyMobileClass}>
        {isMobile === true ? (
          <React.Fragment>
            <div className="hamburger-container">
              <div
                className="hamburger-box"
                onClick={this.toggleNavMenu.bind(this)}
              >
                <span
                  className={`hamburger ${applyActiveClass} ${shouldReverse}`}
                />
              </div>
            </div>
            {isActive === true || reverseAnimation === true
              ? this.renderNavMenu()
              : null}
            <div
              className={`nav-overlay ${applyActiveClass} ${shouldReverse}`}
            />
          </React.Fragment>
        ) : (
          this.renderNavMenu()
        )}
      </div>
    );
  }
}
