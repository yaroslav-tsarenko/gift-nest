import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <footer className={`background2 ${className}`}>
      <div className="background-shape">
        <img className="svg-icon4" alt="" src="/svg-4.svg" />
      </div>
      <div className="security">
        <div className="protected-by-trustwave2">
          Protected by Trustwave. Secure 128-bit SSL Encrypted.
        </div>
      </div>
      <div className="ezetop-2024-all2">
        © Ezetop 2024. All rights reserved.
      </div>
    </footer>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
