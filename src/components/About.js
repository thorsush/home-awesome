import React from "react";
import "../About.css";
import image from "./images/homeawesomelogo.png";

export default function About() {
  return (
    <div className="about">
      <h1>
        Brought a new House or need to renovate the OLD one, we got it covered{" "}
      </h1>
      <div className="about_info">
        <img src={image}></img>
        <h3>
          If you are always confused about how to decorate your Sweet Home then
          dont worry!
          <br />
          Here at Home Awesome you will be suggested on what to buy according to
          the preferences of the old buyers. Not only that you could also talk
          to our best designers by becoming our prime member.
        </h3>
      </div>
      <footer>
        <p>Home Awesome</p>
        <a>Copyright</a>
        <a>Privacy Policy</a>
        <a>Advertisement</a>
        <p>Follow us on</p>
      </footer>
    </div>
  );
}
