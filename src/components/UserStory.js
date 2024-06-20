import PropTypes from "prop-types";
import "./UserStory.css";

const UserStory = ({ className = "" }) => {
  return (
    <div className={`user-story ${className}`}>
      <div className="mara-finds">
        María - Finds it easy to recharge her mother's number.
      </div>
      <img
        className="picture-central-north-americ"
        alt=""
        src="/picture--centralnorth-americapng@2x.png"
      />
      <img className="clip-path-group" alt="" src="/clip-path-group@2x.png" />
      <div className="country-codes">
        <img className="tcpng-icon" alt="" src="/tcpng@2x.png" />
        <img className="tipng-icon" alt="" src="/tipng@2x.png" />
        <img className="clpng-icon" alt="" src="/clpng@2x.png" />
        <img className="unpng-icon" alt="" src="/unpng@2x.png" />
        <img className="vrpng-icon" alt="" src="/vrpng@2x.png" />
        <img className="tlpng-icon" alt="" src="/tlpng@2x.png" />
      </div>
    </div>
  );
};

UserStory.propTypes = {
  className: PropTypes.string,
};

export default UserStory;
