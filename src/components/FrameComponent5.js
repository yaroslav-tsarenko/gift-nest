import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Button,
  Icon,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`send-to-wrapper ${className}`}>
      <div className="send-to">
        <div className="send-to-input">
          <TextField
            className="backgroundborder"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "17px", marginRight: "14px" }}
                >
                  <img width="28px" height="28px" src="/svg-4.png" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ marginRight: "17px" }}>
                  <img width="24px" height="6px" src="/svg-5.png" />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderColor: "#1d1d1d",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "64px",
              width: "87.61904761904762%",
              height: "50px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#1d1d1d",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>Where are you sending to?</MenuItem>
          </TextField>
        </div>
        <div className="send-type">
          <div className="send-type-selector">
            <div className="send-type-selector-options">
              <div className="top-up">Top-Up</div>
            </div>
            <Button
              className="send-type-selector-options1"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#262626",
                fontSize: "17.6",
                borderColor: "#1d1d1d",
                borderRadius: "20px",
                "&:hover": { borderColor: "#1d1d1d" },
              }}
            >
              Gift Cards
            </Button>
          </div>
        </div>
        <div className="send-number">
          <div className="send-number-input">
            <div className="ready-to-send-a-top-up-wrapper">
              <div className="ready-to-send">Ready to send a top-up?</div>
            </div>
            <TextField
              className="backgroundborder1"
              placeholder="Enter number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="16px" height="16px" src="/svg-6.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#1d1d1d" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  paddingLeft: "25px",
                  borderRadius: "64px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "16px",
                  color: "#708c8c",
                },
              }}
            />
          </div>
          <Button
            className="button3"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#1d1d1d",
              borderRadius: "64px",
              "&:hover": { background: "#1d1d1d" },
              height: 48,
            }}
          >
            Start top-up
          </Button>
        </div>
        <div className="testimonial1">
          <div className="testimonial-backgrounds">
            <div className="testimonial-backgrounds-quote">
              <img className="svg-icon2" alt="" src="/svg-7.svg" />
            </div>
            <div className="background">
              <div className="background1" />
              <img className="svg-icon3" alt="" src="/svg-8.svg" />
            </div>
            <div className="background2">
              <div className="background3" />
              <img className="svg-icon4" alt="" src="/svg-8.svg" />
            </div>
            <div className="background4">
              <div className="background5" />
              <img className="svg-icon5" alt="" src="/svg-8.svg" />
            </div>
            <div className="background6">
              <div className="background7" />
              <img className="svg-icon6" alt="" src="/svg-8.svg" />
            </div>
            <div className="background8">
              <div className="background9" />
              <img className="svg-icon7" alt="" src="/svg-8.svg" />
            </div>
          </div>
        </div>
        <div className="rated-excellent-based-on-1380-wrapper">
          <div className="rated-excellent-based">
            4.6 Rated Excellent based on 13,805 reviews
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
