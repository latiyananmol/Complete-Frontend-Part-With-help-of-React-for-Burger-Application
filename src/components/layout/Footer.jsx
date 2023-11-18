import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>
        <p>We are Trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @MBAburgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://youtube.com/latiyananmol">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/anmollatiyan">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/latiyananmol">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
