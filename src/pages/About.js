import "./About.css";
import Navbar from "./Navbar";
import IMAGES from "./img/J1.jpg"

const About = () => {
  return (
    <div>
      <Navbar />
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={IMAGES}alt="" />
            </div>
            <div className="slide-left col-lg-6">
            <div class="text">
              <h2 className="display-2 fw-bold text-black">About</h2>
              <p className="text-black">GOD IS GOOD </p>
              <p className="text-black">""Dirty Hand Clean Money"</p>
              <a href="#work" className="btn btn-brand text-black">See My Work</a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default About;
