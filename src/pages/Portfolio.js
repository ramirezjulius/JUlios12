import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/calcu2.jpg";
import ontoy1Image from "./img/react js.webp";
import ontoy2Image from "./img/system integration.png";
import jao5Image from "./img/capstone project.jpg";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="ontoy">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Portfolio
              </h1>
              <div id="portfolio">
                <div className="container">
                  <div className="row mt-5">
                    <h3> My Projects</h3>
                    <hr />
                    <div className="col">
                      <img className="one" src={calcuImage2} alt="Calculator" />
                      <h4 className="mt-5">Calculator</h4>
                    </div>
                    <div className="col">
                      <img className="three" src={ontoy2Image} alt="System Integrations" />
                      <h4 className="mt-5">System Integrations</h4>
                    </div>
                    <div className="col">
                      <img className="four" src={jao5Image} alt="Capstone Project" />
                      <h4 className="mt-5">Capstone Project</h4>
                    </div>
                    <div className="col">
                      <img className="two" src={ontoy1Image} alt="My React Js" />
                      <h4 className="mt-5">My React Js</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
