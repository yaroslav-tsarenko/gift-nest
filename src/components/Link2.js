import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link2.css";

const Link2 = ({
  className = "",
  background,
  backToSchoolSmartEGift,
  celebrateBackToSchool,
  propTop,
  propLeft,
  propTextDecoration,
  propDisplay,
  propMinWidth,
}) => {
  const link4Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const celebrateBackToStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propTextDecoration, propDisplay, propMinWidth]);

  return (
    <div className={`link31 ${className}`} style={link4Style}>
      <img className="background-icon4" alt="" src={background} />
      <div className="link-inner">
        <div className="back-to-school-smart-egift-car-parent">
          <div className="back-to-school-container">
            <p className="back-to-school">{backToSchoolSmartEGift}</p>
            <p className="card">Card</p>
          </div>
          <div className="heading-5">
            <div className="celebrate-back-to" style={celebrateBackToStyle}>
              {celebrateBackToSchool}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link2.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  backToSchoolSmartEGift: PropTypes.string,
  celebrateBackToSchool: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Link2;
