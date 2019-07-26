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
      reverseAnimation: false,
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

  isCurrentRoute(route) {
    let location;
    if (typeof window !== "undefined") {
      location = window.location.pathname.split("/");

      const blogRoute = window.location.pathname.substring(1, 11).match(/([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/g);
      if (location[1] === route) {
        return true;
      } else if (route === "" && (blogRoute && blogRoute.length > 0)) {
        return true;
      }
    }

    return false;
  }

  toggleMenu() {
    const { isActive, isMobile } = this.state;

    if (isMobile) {
      if (!isActive) {
        this.setState({ isActive: true });

        document.body.classList.add("fixed");
      } else {
        this.setState({ isActive: false, reverseAnimation: true });

        document.body.classList.remove("fixed");

        setTimeout(() => {
          this.setState({ reverseAnimation: false });
        }, 500);
      }
    }
  }

  renderNav(navClass) {
    return (
      <nav className={navClass || ""}>
        <ul>
          <li className={`${this.isCurrentRoute("") ? "active" : ""}`}>
            <Link onClick={this.toggleMenu.bind(this)} to="/">Blog</Link>
          </li>
          <li className={`${this.isCurrentRoute("work") ? "active" : ""}`}>
            <Link onClick={this.toggleMenu.bind(this)} to="/work">Work</Link>
          </li>
          <li className={`${this.isCurrentRoute("about") ? "active" : ""}`}>
            <Link onClick={this.toggleMenu.bind(this)} to="/about">About</Link>
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

    return (
      <div id="nav-menu" className={isMobile && "mobile"}>
        {isMobile === true ? (
          <React.Fragment>
            <div className="hamburger-container">
              <div className="hamburger-box" onClick={this.toggleMenu.bind(this)}>
                <span className={`hamburger ${isActive === true ? "active" : ""} ${reverseAnimation === true ? "reverse" : ""}`} />
              </div>
            </div>
            {isActive === true ? this.renderNav("nav-active") : null}
            <div
              className={`nav-overlay ${isActive === true ? "active" : ""}`}
            />
          </React.Fragment>
        ) : this.renderNav()}
      </div>
    );
  }
}
