import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Header3.css";

const Header3 = ({ className = "" }) => {
  return (
    <header className={`header3 ${className}`}>
      <img className="logo-icon6" loading="lazy" alt="" src="/logo.svg" />
      <div className="header-navigation1">
        <div className="nav-list3">
          <div className="navigation-links">
            <div className="item9">
              <div className="link36">
                <a className="send-top-up2">Send top-up</a>
                <div className="link-icons">
                  <img className="svg-icon13" alt="" src="/svg@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-links1">
            <div className="item-link9">
              <a className="gift-cards3">Gift Cards</a>
            </div>
          </div>
          <div className="navigation-links2">
            <div className="item10">
              <div className="link37">
                <a className="company5">Company</a>
                <div className="svg-wrapper1">
                  <img className="svg-icon14" alt="" src="/svg-1@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-links3">
            <div className="item-link10">
              <a className="help6">Help</a>
            </div>
          </div>
          <div className="language-selector">
            <div className="item11">
              <div className="link38">
                <div className="language-icon1">
                  <img className="svg-icon15" alt="" src="/svg-2.svg" />
                </div>
                <a className="en3">EN</a>
                <div className="language-dropdown1">
                  <img className="svg-icon16" alt="" src="/svg-3@2x.png" />
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
  );
};

Header3.propTypes = {
  className: PropTypes.string,
};

export default Header3;
