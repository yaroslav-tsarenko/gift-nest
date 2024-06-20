import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link6.css";

const Link6 = ({ className = "", image, allIn1Choice, giftCard, propLeft }) => {
  const linkStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`link3 ${className}`} style={linkStyle}>
      <div className="background10">
        <img className="image-icon" loading="lazy" alt="" src={image} />
      </div>
      <div className="featured-cards-grid-links-name">
        <h3 className="all-in-1-choice-gift-container">
          <p className="all-in-1-choice">{allIn1Choice}</p>
          <p className="gift-card">{giftCard}</p>
        </h3>
        <div className="featured-cards-grid-links-name1">
          <img className="background-icon" alt="" src="/background.svg" />
        </div>
      </div>
    </div>
  );
};

Link6.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  allIn1Choice: PropTypes.string,
  giftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Link6;
