import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link4.css";

const Link4 = ({
  className = "",
  imageShadow,
  beautyFashion,
  choiceGiftCard,
  propTop,
  propLeft,
  propBackgroundColor,
}) => {
  const link2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const background1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={`link5 ${className}`} style={link2Style}>
      <div className="background12" style={background1Style}>
        <div className="wrapper-imageshadow1">
          <img className="imageshadow-icon1" alt="" src={imageShadow} />
        </div>
      </div>
      <div className="beauty-fashion-choice-gift-c-parent">
        <h3 className="beauty-fashion-container">
          <p className="beauty-fashion">{beautyFashion}</p>
          <p className="choice-gift-card">{choiceGiftCard}</p>
        </h3>
        <div className="background-wrapper">
          <img className="background-icon2" alt="" src="/background.svg" />
        </div>
      </div>
    </div>
  );
};

Link4.propTypes = {
  className: PropTypes.string,
  imageShadow: PropTypes.string,
  beautyFashion: PropTypes.string,
  choiceGiftCard: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default Link4;
