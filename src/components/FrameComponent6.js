import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "", checkout }) => {
  return (
    <section className={`header-group ${className}`}>
      <header className="header7">
        <img className="logo-icon6" loading="lazy" alt="" src="/logo.svg" />
        <div className="nav-list-container">
          <div className="nav-list3">
            <div className="item-wrapper">
              <div className="item9">
                <div className="link54">
                  <a className="send-top-up">Send top-up</a>
                  <div className="svgs">
                    <img className="svg-icon24" alt="" src="/svg@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-link-wrapper">
              <div className="item-link9">
                <a className="gift-cards4">Gift Cards</a>
              </div>
            </div>
            <div className="item-container">
              <div className="item10">
                <div className="link55">
                  <a className="company4">Company</a>
                  <div className="svg-container">
                    <img className="svg-icon25" alt="" src="/svg-1@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-link-container">
              <div className="item-link10">
                <a className="help6">Help</a>
              </div>
            </div>
            <div className="item-frame">
              <div className="item11">
                <div className="link56">
                  <div className="svg-frame">
                    <img className="svg-icon26" alt="" src="/svg-2.svg" />
                  </div>
                  <a className="en3">EN</a>
                  <div className="svg-wrapper1">
                    <img className="svg-icon27" alt="" src="/svg-3@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="item-link11"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                borderColor: "#fff",
                borderRadius: "64px",
                "&:hover": { borderColor: "#fff" },
                width: 83.7,
                height: 40,
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>
      <div className="frame-wrapper">
        <div className="frame-parent9">
          <div className="checkout-wrapper">
            <h1 className="checkout3">{checkout}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  checkout: PropTypes.string,
};

export default FrameComponent6;
