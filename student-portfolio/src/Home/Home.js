import PassionImg from "../images/ian-schneider-TamMbr4okv4-unsplash.jpg";
import LiveWorkFreeImg from "../images/jon-tyson-QL0FAxaq2z0-unsplash.jpg";
import ScribbledImg from "../images/sigmund-4UGmm3WRUoQ-unsplash.jpg";
import TabletImg from "../images/taras-shypka-iFSvn82XfGo-unsplash.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">
        Documentation and examples for opting imagelightweight styles to
        them—all via classes.
      </h2>
      <p className="home-desciption">
        Documentation and examples for opting images into responsive behavior
        (so they never become larger than their parent elements) and add
        lightweight styles to them—all via classes.Documentation and examples
        for opting images into responsive behavior (so they never become larger
        than their parent elements) and add lightweight styles to them—all via
        classes.Documentation and examples for opting images into responsive
        behavior (so they never become larger than their parent elements) and
        add lightweight styles to them—all via classes.Documentation and
        examples for opting images into responsive behavior (so they never
        become larger than their parent elements) and add lightweight styles to
        them—all via classes.
      </p>
      <div className="home-banner-img">
        <img src={PassionImg} />
      </div>
      <div className="row">
        <div className="home-content-box col-sm-6">
          <img className="content-img" src={LiveWorkFreeImg} />
        </div>
        <div className="home-content-box col-sm-6">
          <p className="content-desciption">
            Documentation and examples for opting images into responsive
            behavior (so they never become larger than their parent elements)
            and add lightweight styles to them—all via classes.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="home-content-box col-sm-6">
          <p className="content-desciption">
            Documentation and examples for opting images into responsive
            behavior (so they never become larger than their parent elements)
            and add lightweight styles to them—all via classes.
          </p>
        </div>
        <div className="home-content-box col-sm-6">
          <img className="content-img" src={ScribbledImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
