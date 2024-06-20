import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ContactNameField.css";

const ContactNameField = ({ className = "" }) => {
  return (
    <div className={`contact-name-field ${className}`}>
      <div className="contact-name-labels">
        <div className="contact-information">Contact Information</div>
        <TextField
          className="form-field"
          placeholder="Email"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#000" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
      </div>
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="card-field-dividers">
            <img
              className="card-field-dividers-child"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="card-field-dividers-item"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="card-field-dividers-inner"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon" alt="" src="/icon.svg" />
        </div>
        <div className="m-m-y-y-field">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#000" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#000" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
        </div>
      </div>
      <div className="contact-name-labels1">
        <div className="carholder-name">Carholder Name</div>
        <TextField
          className="form-field4"
          placeholder="Name on Card"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#000" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#d9d9d9" },
          }}
        />
      </div>
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field5">
          <div className="usa">USA</div>
          <img
            className="form-field-child"
            alt=""
            src="/frame-1000006889.svg"
          />
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="frame-container">
        <input className="frame-input" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-name-field-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#000",
          borderRadius: "40px",
          "&:hover": { background: "#000" },
          height: 54,
        }}
      >
        Pay Now
      </Button>
    </div>
  );
};

ContactNameField.propTypes = {
  className: PropTypes.string,
};

export default ContactNameField;
