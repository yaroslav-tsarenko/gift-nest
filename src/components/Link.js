import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({
  className = "",
  background,
  heading4KrogerEGiftCard,
  propLeft,
  propTextDecoration,
}) => {
  const link6Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const newArrivalStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`link33 ${className}`} style={link6Style}>
      <img className="background-icon6" alt="" src={background} />
      <div className="link-child">
        <div className="heading-4-kroger-egift-card-parent">
          <div className="heading-4">{heading4KrogerEGiftCard}</div>
          <div className="heading-51">
            <div className="new-arrival" style={newArrivalStyle}>
              New Arrival
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4KrogerEGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default Link;
