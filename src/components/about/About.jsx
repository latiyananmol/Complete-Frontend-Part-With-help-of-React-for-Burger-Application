import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/anmol.jpeg";
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>MBA Burger Wala</h4>
          <p>
            We are MBA Burfer Wala. The Place for most tasty Bugers on the
            Entire Earth.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Anmol Latiyan</h3>
            </div>
            <p>
              I am Anmol Latiyan , the Founder of Latiyan Burger Wala.
              Affiliated to God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
