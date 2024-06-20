import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link3.css";

const Link3 = ({
  className = "",
  image,
  imageShadow,
  allIn1ChoiceGiftCard,
  theRightChoiceForEveryone,
  propLeft,
  propRight,
  propDisplay,
}) => {
  const link3Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const wrapperImageShadowStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const theRightChoiceStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`link6 ${className}`} style={link3Style}>
      <div className="image-parent">
        <img className="image-icon1" alt="" src={image} />
        <div className="wrapper-imageshadow2" style={wrapperImageShadowStyle}>
          <img className="imageshadow-icon2" alt="" src={imageShadow} />
        </div>
      </div>
      <div className="all-in-1-choice-gift-card-wrapper">
        <h3 className="all-in-1-choice-gift">{allIn1ChoiceGiftCard}</h3>
      </div>
      <div className="choice-card-descriptions">
        <div className="the-right-choice-for-everyone-parent">
          <div className="the-right-choice" style={theRightChoiceStyle}>
            {theRightChoiceForEveryone}
          </div>
          <div className="choice-card-backgrounds">
            <img className="background-icon3" alt="" src="/background.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Link3.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  imageShadow: PropTypes.string,
  allIn1ChoiceGiftCard: PropTypes.string,
  theRightChoiceForEveryone: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propRight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Link3;
