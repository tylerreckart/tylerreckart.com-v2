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
    console.log(document.body.style);
    this.setState({ isActive: !this.state.isActive });
  }

  renderNav(navClass) {
    return (
      <nav className={navClass || ""}>
        <ul>
          <li className={`${this.isCurrentRoute("") ? "active" : ""}`}>
            <Link to="/">Blog</Link>
          </li>
          {/* <li className={`${this.isCurrentRoute("work") ? "active" : ""}`}>
            <Link to="/work">Work</Link>
          </li> */}
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
              <button
                className="hamburger"
                onClick={this.onClickHamburger.bind(this)}
              >
                Nav
              </button>
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
