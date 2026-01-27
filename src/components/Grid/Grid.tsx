import "./Grid.css";
import gridData from "../../data/gridData";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Grid = () => {
  return (
    <div className="grid-container">
      {gridData.map((item) => (
        <div className="team-card" key={item.id}>
          <div className="image-wrapper">
            <img src={item.image} alt={item.name} />

            <div className="overlay">
              <div className="social-icons">
                <span><FaFacebookF /></span>
                <span><FaTwitter /></span>
                <span><FaInstagram /></span>
                <span><FaLinkedinIn /></span>
              </div>
            </div>
          </div>

          <h3>{item.name}</h3>
          <p>{item.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;

