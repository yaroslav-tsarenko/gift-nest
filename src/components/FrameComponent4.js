import { Button } from "@mui/material";
import Link3 from "./Link3";
import Link5 from "./Link5";
import Link4 from "./Link4";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`homepage-inner ${className}`}>
      <div className="frame-parent2">
        <div className="heading-2-most-frequently-ch-parent">
          <h1 className="heading-22">View all gift cards</h1>
          <div className="background15" />
        </div>
        <div className="link-parent">
          <Link3
            image="/image-2@2x.png"
            imageShadow="/imageshadow-8@2x.png"
            allIn1ChoiceGiftCard="All-in-1 Choice Gift Card"
            theRightChoiceForEveryone="The right choice for everyone"
          />
          <Link3
            image="/image-3@2x.png"
            imageShadow="/imageshadow-9@2x.png"
            allIn1ChoiceGiftCard="Virgin Experience Days"
            theRightChoiceForEveryone="More than 4000 experiences to choose from"
            propLeft="852px"
            propRight="20px"
            propDisplay="inline-block"
          />
          <Link5
            imageShadow="/imageshadow-10@2x.png"
            hotelGiftCard="Airbnb Gift Card"
            propTop="368px"
            propLeft="0px"
            propBackgroundColor="#fdafaf"
          />
          <Link5
            imageShadow="/imageshadow-11@2x.png"
            hotelGiftCard="Primark Gift Card"
            propTop="368px"
            propLeft="345.5px"
            propBackgroundColor="#5cb6c1"
          />
          <Link4
            imageShadow="/imageshadow-12@2x.png"
            beautyFashion="Uber Eats Gift"
            choiceGiftCard="Card"
            propTop="368px"
            propLeft="691px"
            propBackgroundColor="#5cb746"
          />
          <Link5
            imageShadow="/imageshadow-13@2x.png"
            hotelGiftCard="Adidas Gift Card"
            propTop="368px"
            propLeft="1036.5px"
            propBackgroundColor="#e8e8e8"
          />
          <Link5
            imageShadow="/imageshadow-14@2x.png"
            hotelGiftCard="IKEA Gift Card"
            propTop="368px"
            propLeft="1382px"
            propBackgroundColor="#ffeb0a"
          />
          <Link4
            imageShadow="/imageshadow-15@2x.png"
            beautyFashion="Ernest Jones Gift"
            choiceGiftCard="Card"
            propTop="732px"
            propLeft="0px"
            propBackgroundColor="#c17188"
          />
          <Link4
            imageShadow="/imageshadow-16@2x.png"
            beautyFashion="The Dining Out"
            choiceGiftCard="Gift Card"
            propTop="732px"
            propLeft="345.5px"
            propBackgroundColor="#a3adb8"
          />
          <Link4
            imageShadow="/imageshadow-2@2x.png"
            beautyFashion="Great British Pub"
            choiceGiftCard="Gift Card"
            propTop="732px"
            propLeft="691px"
            propBackgroundColor="#b61019"
          />
          <Link5
            imageShadow="/imageshadow-18@2x.png"
            hotelGiftCard="Costa Gift Card"
            propTop="732px"
            propLeft="1036.5px"
            propBackgroundColor="#eac57d"
          />
          <Link4
            imageShadow="/imageshadow-19@2x.png"
            beautyFashion="National Book"
            choiceGiftCard="Tokens Gift Card"
            propTop="732px"
            propLeft="1382px"
            propBackgroundColor="#7eb8be"
          />
        </div>
        <Button
          className="frame-child"
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
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
