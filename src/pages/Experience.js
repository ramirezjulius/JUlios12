import "./Experience.css";
import Navbar from "./Navbar";
import PC1Image from "./img/ojt5.jpg"
import PC2Image from "./img/ojt1.jpg"
import PC3Image from "./img/J1.jpg"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="ontoy">

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Experiences
              </h1>
              <div className="exp">
                <div className="container">
                  <hr />
                  <div className="row mb-5">
                    <h3 className="text-center">OJT On-The Job Training</h3>
                    <hr />
                    <div className="col-lg-4">
                    <img src={PC1Image} alt="" />
                      <h4 className="three text-black">INSTALL MODEM KCAT FIBERNET </h4>
                    </div>
                    <div className="col-lg-4">
                    <img src={PC2Image} alt="" />
                      <h4 className="three text-black">INSTALL CABLE WITH INTERNET</h4>
                    </div>
                    <div className="col-lg-4">
                    <img src={PC3Image} alt="" />
                      <h4 className="three text-black">SCAN TV CHANNEL</h4>
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

export default Experience;
