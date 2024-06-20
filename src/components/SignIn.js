import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./SignIn.css";

const SignIn = ({ className = "" }) => {
  return (
    <div className={`sign-in2 ${className}`}>
      <div className="sign-in-heading">
        <h1 className="sign-up">Sign up</h1>
        <div className="sign-up-to">Sign up to get rewards, and many more</div>
      </div>
      <form className="input-fields1">
        <div className="name-address-username">
          <div className="input-labels">
            <div className="your-name">Your Name</div>
          </div>
          <TextField
            className="email-country-password"
            placeholder="Email"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d1d1d1" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
        <div className="name-address-username1">
          <div className="address-wrapper">
            <div className="address">Address</div>
          </div>
          <div className="country-parent">
            <div className="country">Country</div>
            <img
              className="password-spacing-icon"
              alt=""
              src="/password-spacing.svg"
            />
          </div>
        </div>
        <div className="name-address-username2">
          <div className="username-parent">
            <div className="username1">Username</div>
            <img
              className="name-address-spacing"
              alt=""
              src="/frame-153-1.svg"
            />
          </div>
          <div className="password-parent">
            <div className="password1">Password</div>
            <img className="frame-child" alt="" src="/frame-153-2.svg" />
          </div>
        </div>
        <Button
          className="button1"
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
          Sign Up
        </Button>
      </form>
      <div className="or-sign-up">or, sign up with</div>
      <div className="social-buttons1">
        <img
          className="social-icons"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-icons1"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-icons2"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
      </div>
    </div>
  );
};

SignIn.propTypes = {
  className: PropTypes.string,
};

export default SignIn;
