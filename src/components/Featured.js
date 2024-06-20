import { Button } from "@mui/material";
import Link6 from "./Link6";
import Link5 from "./Link5";
import Link4 from "./Link4";
import PropTypes from "prop-types";
import "./Featured.css";

const Featured = ({ className = "" }) => {
  return (
    <section className={`featured ${className}`}>
      <div className="featured-cards">
        <div className="background13" />
        <div className="featured-cards-content">
          <h1 className="heading-2">Most frequently chosen gift cards</h1>
          <div className="featured-cards-grid">
            <div className="featured-cards-grid-links">
              <Link6
                image="/image@2x.png"
                allIn1Choice="All-in-1 Choice"
                giftCard="Gift Card"
              />
              <Link5
                imageShadow="/imageshadow@2x.png"
                hotelGiftCard="Hotel Gift Card"
              />
              <Link4
                imageShadow="/imageshadow-1@2x.png"
                beautyFashion={`Beauty & Fashion`}
                choiceGiftCard="Choice Gift Card"
              />
              <Link6
                image="/image-1@2x.png"
                allIn1Choice="Restaurant Gift"
                giftCard="Card"
                propLeft="1036.5px"
              />
              <Link4
                imageShadow="/imageshadow-2@2x.png"
                beautyFashion="Great British Pub"
                choiceGiftCard="Gift Card"
                propTop="24px"
                propLeft="1382px"
                propBackgroundColor="#b61019"
              />
              <Link4
                imageShadow="/imageshadow-3@2x.png"
                beautyFashion="John Lewis Gift"
                choiceGiftCard="Card"
                propTop="388px"
                propLeft="0px"
                propBackgroundColor="#401717"
              />
              <Link4
                imageShadow="/imageshadow-4@2x.png"
                beautyFashion="Great British Pub"
                choiceGiftCard="Gift Card"
                propTop="388px"
                propLeft="345.5px"
                propBackgroundColor="#b61019"
              />
              <Link5
                imageShadow="/imageshadow-3@2x.png"
                hotelGiftCard="Costa Gift Card"
                propTop="388px"
                propLeft="691px"
                propBackgroundColor="#eac57d"
              />
              <Link4
                imageShadow="/imageshadow-6@2x.png"
                beautyFashion="Virgin Experience"
                choiceGiftCard="Days Gift Card"
                propTop="388px"
                propLeft="1036.5px"
                propBackgroundColor="#f26984"
              />
              <Link5
                imageShadow="/imageshadow-7@2x.png"
                hotelGiftCard="Hotel Gift Card"
                propTop="388px"
                propLeft="1382px"
                propBackgroundColor="#378bc8"
              />
            </div>
            <Button
              className="featured-cards-view-all"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "17.6",
                background: "#1d1d1d",
                borderRadius: "20px",
                "&:hover": { background: "#1d1d1d" },
                width: 200,
                height: 46,
              }}
            >
              View all gift cards
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Featured.propTypes = {
  className: PropTypes.string,
};

export default Featured;
