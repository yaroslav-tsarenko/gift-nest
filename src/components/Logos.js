import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Logos.css";

const Logos = ({ className = "" }) => {
  return (
    <section className={`logos ${className}`}>
      <div className="logos-grid">
        <div className="logos-grid-fifth-row-content">
          <div className="choice-card">
            <div className="choice-card-content">
              <div className="background14" />
              <div className="heading-2-all-in-1-choice-gi-parent">
                <h1 className="heading-21">All-in-1 Choice Gift Card</h1>
                <div className="choice-card-description">
                  <div className="choice-card-description-icons-parent">
                    <div className="choice-card-description-icons">
                      <img
                        className="choice-card-description-icons1"
                        alt=""
                        src="/choice-card-description-icons-content.svg"
                      />
                    </div>
                    <div className="the-perfect-gift">
                      The perfect gift for any occasion
                    </div>
                  </div>
                  <div className="frame-group">
                    <div className="vector-wrapper">
                      <img
                        className="vector-icon"
                        alt=""
                        src="/choice-card-description-icons-content.svg"
                      />
                    </div>
                    <div className="over-130-different">
                      Over 130 different gift cards to choose from
                    </div>
                  </div>
                  <div className="frame-container">
                    <div className="vector-container">
                      <img
                        className="vector-icon1"
                        alt=""
                        src="/choice-card-description-icons-content.svg"
                      />
                    </div>
                    <div className="the-perfect-solution">
                      The perfect solution for corporate gifting
                    </div>
                  </div>
                  <div className="frame-div">
                    <div className="vector-frame">
                      <img
                        className="vector-icon2"
                        alt=""
                        src="/choice-card-description-icons-content.svg"
                      />
                    </div>
                    <div className="available-as-a">
                      Available as a physical or a digital card
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="vector-wrapper1">
                      <img
                        className="vector-icon3"
                        alt=""
                        src="/choice-card-description-icons-content.svg"
                      />
                    </div>
                    <div className="available-to-order">
                      Available to order in denominations of £10 to £500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="gc-uk-home-image-mockuppng-icon"
            loading="lazy"
            alt=""
            src="/gcukhomeimagemockuppng@2x.png"
          />
        </div>
        <div className="recharge-options">
          <Button
            className="recharge-buttons"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#262626",
              fontSize: "17.6",
              background: "#fff",
              borderRadius: "20px",
              "&:hover": { background: "#fff" },
              width: 176,
              height: 46,
            }}
          >
            Purchase Now!
          </Button>
          <Button
            className="recharge-buttons1"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "17.6",
              borderColor: "#fff",
              borderRadius: "20px",
              "&:hover": { borderColor: "#fff" },
              height: 46,
            }}
          >
            Check Your Balance
          </Button>
        </div>
        <div className="logos-grid-first-row">
          <img
            className="adidas-logosvg-icon"
            alt=""
            src="/adidas-logosvg.svg"
          />
          <img
            className="airbnb-logosvg-icon"
            alt=""
            src="/airbnb-logosvg.svg"
          />
          <img className="asos-logosvg-icon" alt="" src="/airbnb-logosvg.svg" />
          <img
            className="boohoo-logosvg-icon"
            alt=""
            src="/boohoo-logosvg.svg"
          />
          <img
            className="decathlon-logosvg-icon"
            alt=""
            src="/decathlon-logosvg.svg"
          />
          <img
            className="deliveroo-logo-witsvg-icon"
            loading="lazy"
            alt=""
            src="/deliveroologowitsvg.svg"
          />
          <img
            className="foot-locker-logosvg-icon"
            alt=""
            src="/foot-locker-logosvg.svg"
          />
          <img
            className="gardengift-logosvg-icon"
            alt=""
            src="/boohoo-logosvg.svg"
          />
        </div>
        <div className="logos-grid-first-row1">
          <img
            className="justeat-logosvg-icon"
            loading="lazy"
            alt=""
            src="/justeat-logosvg.svg"
          />
          <img
            className="love2shop-logosvg-icon"
            loading="lazy"
            alt=""
            src="/justeat-logosvg.svg"
          />
          <img
            className="miller-and-carter-steakhouse-l-icon"
            loading="lazy"
            alt=""
            src="/justeat-logosvg.svg"
          />
          <img
            className="new-look-logosvg-icon"
            loading="lazy"
            alt=""
            src="/justeat-logosvg.svg"
          />
          <img className="nike-logosvg-icon" alt="" src="/nike-logosvg.svg" />
          <img
            className="primark-logo-witsvg-icon"
            loading="lazy"
            alt=""
            src="/primarklogowitsvg.svg"
          />
          <img
            className="riverisland-logosvg-icon"
            loading="lazy"
            alt=""
            src="/riverislandlogosvg.svg"
          />
          <img
            className="sports-direct-logosvg-icon"
            alt=""
            src="/justeat-logosvg.svg"
          />
        </div>
      </div>
    </section>
  );
};

Logos.propTypes = {
  className: PropTypes.string,
};

export default Logos;
