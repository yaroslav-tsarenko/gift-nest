import PropTypes from "prop-types";
import "./PaymentMethods.css";

const PaymentMethods = ({ className = "" }) => {
  return (
    <div className={`payment-methods ${className}`}>
      <div className="supported-payment-methods">Supported payment methods</div>
      <div className="payment-logos">
        <img className="svg-icon8" alt="" src="/svg-13.svg" />
        <img className="svg-icon9" alt="" src="/svg-14.svg" />
        <img className="svg-icon10" alt="" src="/svg-15.svg" />
        <img className="svg-icon11" alt="" src="/svg-16.svg" />
        <img className="svg-icon12" alt="" src="/svg-17.svg" />
        <img className="svg-icon13" alt="" src="/svg-18.svg" />
        <img className="svg-icon14" alt="" src="/svg-19.svg" />
      </div>
    </div>
  );
};

PaymentMethods.propTypes = {
  className: PropTypes.string,
};

export default PaymentMethods;
