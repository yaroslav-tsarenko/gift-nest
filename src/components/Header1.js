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
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header6 ${className}`}>
      <img className="logo-icon4" loading="lazy" alt="" src="/logo.svg" />
      <div className="nav-list-wrapper">
        <div className="nav-list2">
          <div className="navbar-items">
            <div className="item6">
              <FormControl
                className="link28"
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
          <div className="navbar-items1">
            <div className="item-link6">
              <a className="gift-cards2">Gift Cards</a>
            </div>
          </div>
          <div className="navbar-items2">
            <div className="item7">
              <FormControl
                className="link29"
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
          <div className="navbar-items3">
            <div className="item-link7">
              <a className="help4">Help</a>
            </div>
          </div>
          <div className="language1">
            <div className="item8">
              <div className="link30">
                <div className="language-icon">
                  <img className="svg-icon21" alt="" src="/svg-2.svg" />
                </div>
                <a className="en2">EN</a>
                <div className="language-dropdown">
                  <img className="svg-icon22" alt="" src="/svg-3@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="item-link8"
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

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
