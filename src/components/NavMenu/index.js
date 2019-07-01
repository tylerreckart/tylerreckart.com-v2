import React from "react";
import Link from "gatsby-link";
import GithubIcon from '../Svg/github';

export default class NavMenu extends React.Component {
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

  render() {
    return (
      <div id="nav-menu">
        <nav>
          <ul>
            <li className={`${this.isCurrentRoute("") ? "active" : ""}`}>
              <Link to="/">Home</Link>{" "}
            </li>
            <li className={`${this.isCurrentRoute("about") ? "active" : ""}`}>
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              {/*👨‍💻*/}{" "}
              <a href="https://github.com/tylerreckart" target="_blank">
                <GithubIcon /> <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tylerreckart" target="_blank">
                @tylerreckart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
