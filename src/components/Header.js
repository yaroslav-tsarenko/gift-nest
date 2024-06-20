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
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header5 ${className}`}>
      <img className="logo-icon2" loading="lazy" alt="" src="/logo.svg" />
      <div className="header-navigation">
        <div className="nav-list1">
          <div className="navigation-sub-items">
            <div className="item3">
              <FormControl
                className="link16"
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
          <div className="navigation-sub-items1">
            <div className="item-link3">
              <a className="gift-cards1">Gift Cards</a>
            </div>
          </div>
          <div className="navigation-sub-items2">
            <div className="item4">
              <div className="link17">
                <a className="company1">Company</a>
                <div className="svg-wrapper">
                  <img className="svg-icon16" alt="" src="/svg-1@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-sub-items3">
            <div className="item-link4">
              <a className="help2">Help</a>
            </div>
          </div>
          <div className="language-switcher">
            <div className="item5">
              <div className="link18">
                <div className="language-link-icon">
                  <img className="svg-icon17" alt="" src="/svg-2.svg" />
                </div>
                <a className="en1">EN</a>
                <div className="language-dropdown-icon">
                  <img className="svg-icon18" alt="" src="/svg-3@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="item-link5"
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

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
