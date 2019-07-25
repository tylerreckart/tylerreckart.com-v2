import React from "react";
import Link from "gatsby-link";
import GithubIcon from "../Svg/github";
import TwitterIcon from "../Svg/twitter";

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      isActive: false
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

      if (location[1] === route) {
        return true;
      }
    }

    return false;
  }

  onClickHamburger() {
    const { isActive } = this.state;

    if (!isActive) {
      this.setState({ isActive: true });

      document.body.classList.add("fixed");
    } else {
      this.setState({ isActive: false });

      document.body.classList.remove("fixed");
    }
  }

  renderNav(navClass) {
    return (
      <nav className={navClass || ""}>
        <ul>
          <li className={`${this.isCurrentRoute("") ? "active" : ""}`}>
            <Link to="/">Blog</Link>
          </li>
          <li className={`${this.isCurrentRoute("work") ? "active" : ""}`}>
            <Link to="/work">Work</Link>
          </li>
          <li className={`${this.isCurrentRoute("about") ? "active" : ""}`}>
            <Link to="/about">About</Link>
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
    const { isMobile, isActive } = this.state;

    return (
      <div id="nav-menu" className={isMobile && "mobile"}>
        {isMobile === true ? (
          <React.Fragment>
            <div className="hamburger-container">
              <div className="hamburger-box" onClick={this.onClickHamburger.bind(this)}>
                <span className={`hamburger ${isActive === true ? "active" : ""}`} />
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
