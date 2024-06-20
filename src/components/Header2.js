import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header4 ${className}`}>
      <img className="logo-icon" alt="" src="/logo.svg" />
      <div className="header-nav">
        <div className="nav-list">
          <div className="topup-nav-links">
            <div className="item">
              <FormControl
                className="link"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "24.5px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24.5px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24.5px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "24.5px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "24.5px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "Black",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img width="10px" height="10px" src="/svg.png" style={{}} />
                  )}
                >
                  <MenuItem>Send top-up</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className="topup-nav-links1">
            <div className="item-link">
              <a className="gift-cards">Gift Cards</a>
            </div>
          </div>
          <div className="topup-nav-links2">
            <div className="item1">
              <FormControl
                className="link1"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "93.5px",
                  height: "24.5px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24.5px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24.5px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "24.5px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "24.5px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "Black",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="10px"
                      height="10px"
                      src="/svg-1.png"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>Company</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className="topup-nav-links3">
            <div className="item-link1">
              <a className="help">Help</a>
            </div>
          </div>
          <div className="language">
            <div className="item2">
              <div className="link2">
                <div className="language-selector-link-content">
                  <img className="svg-icon" alt="" src="/svg-2.svg" />
                </div>
                <a className="en">EN</a>
                <div className="language-selector-dropdown">
                  <img className="svg-icon1" alt="" src="/svg-3@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="item-link2"
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

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
