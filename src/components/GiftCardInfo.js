import Link2 from "./Link2";
import Link1 from "./Link1";
import Link from "./Link";
import PropTypes from "prop-types";
import "./GiftCardInfo.css";

const GiftCardInfo = ({ className = "" }) => {
  return (
    <section className={`gift-card-info ${className}`}>
      <div className="gift-cards-parent">
        <div className="gift-cards3">
          <div className="gift-cards-header">
            <h1 className="heading-23">Give more with VividVouchers</h1>
          </div>
          <div className="sort-by-btton">
            <div className="sort-by">Sort by</div>
            <div className="sort-icon">
              <img className="vector-icon17" alt="" src="/vector1.svg" />
            </div>
          </div>
        </div>
        <div className="a-favorite-brand">
          A favorite brand or the gift of choice? How about... both!  
        </div>
        <div className="choose-a-gift">
          Choose a gift card, rest assured they can easily swap it for another.
        </div>
        <div className="link-terms">{`Terms & Conditions apply`}</div>
        <div className="cards">
          <div className="link34">
            <img
              className="background-icon7"
              loading="lazy"
              alt=""
              src="/background@2x.png"
            />
            <div className="card-containers">
              <div className="card-titles">
                <div className="heading-41">Minions Smart eGift Card</div>
                <div className="heading-52">
                  <div className="special-edition">Special edition</div>
                </div>
              </div>
            </div>
          </div>
          <Link2
            background="/background-1@2x.png"
            backToSchoolSmartEGift="Back to School Smart eGift"
            celebrateBackToSchool="Celebrate Back to School"
          />
          <Link1
            background="/background-2@2x.png"
            congratulationsSmartEGift="Congratulations Smart eGift"
            card="Card"
          />
          <div className="link35">
            <img
              className="background-icon8"
              alt=""
              src="/background-3@2x.png"
            />
            <div className="heading-4-oh-baby-smart-egi-wrapper">
              <div className="heading-42">Oh Baby! Smart eGift Card</div>
            </div>
          </div>
          <Link1
            background="/background-4@2x.png"
            congratulationsSmartEGift="On The Go Eats Smart eGift"
            card="Card"
            propLeft="1139.2px"
            propTop="40px"
          />
          <div className="link36">
            <img
              className="background-icon9"
              alt=""
              src="/background-5@2x.png"
            />
            <div className="heading-4-teachers-smart-egi-wrapper">
              <div className="heading-43">Teachers Smart eGift Card</div>
            </div>
          </div>
          <div className="link37">
            <img
              className="background-icon10"
              alt=""
              src="/background-6@2x.png"
            />
            <div className="heading-4-prezzee-kids-smart-wrapper">
              <div className="heading-44">
                VividVouchers Kids Smart eGift Card
              </div>
            </div>
          </div>
          <Link
            background="/background-7@2x.png"
            heading4KrogerEGiftCard="Kroger eGift Card"
          />
          <Link
            background="/background-8@2x.png"
            heading4KrogerEGiftCard="Bright Cellars eGift Card"
            propLeft="569.6px"
            propTextDecoration="none"
          />
          <div className="link38">
            <img
              className="background-icon11"
              alt=""
              src="/background-9@2x.png"
            />
            <div className="link-inner1">
              <div className="heading-4-sephora-gift-card-parent">
                <div className="heading-45">Sephora Gift Card</div>
                <div className="heading-53">
                  <div className="top-seller">Top Seller</div>
                </div>
              </div>
            </div>
          </div>
          <Link2
            background="/background-10@2x.png"
            backToSchoolSmartEGift="YorkTest Wellness Card eGift"
            celebrateBackToSchool="New Arrival"
            propTop="332px"
            propLeft="1139.2px"
            propTextDecoration="none"
            propDisplay="inline-block"
            propMinWidth="74.1px"
          />
          <Link1
            background="/background-11@2x.png"
            congratulationsSmartEGift="Academy Sports + Outdoors"
            card="eGift Card"
            propLeft="1424px"
            propTop="332px"
          />
          <div className="link39">
            <img
              className="background-icon12"
              alt=""
              src="/background-12@2x.png"
            />
            <div className="heading-4-aries-season-smart-wrapper">
              <div className="heading-46">Aries Season Smart eGift Card</div>
            </div>
          </div>
          <div className="link40">
            <img
              className="background-icon13"
              alt=""
              src="/background-13@2x.png"
            />
            <div className="heading-4-etsy-egift-card-wrapper">
              <div className="heading-47">Etsy eGift Card</div>
            </div>
          </div>
          <div className="link41">
            <img
              className="background-icon14"
              alt=""
              src="/background-14@2x.png"
            />
            <div className="heading-4-fandango-gift-card-wrapper">
              <div className="heading-48">Fandango Gift Card</div>
            </div>
          </div>
          <Link1
            background="/background-15@2x.png"
            congratulationsSmartEGift="Gemini Season Smart eGift"
            card="Card"
            propLeft="854.4px"
            propTop="624px"
          />
          <Link1
            background="/background-16@2x.png"
            congratulationsSmartEGift="Happy Mother's Day Smart"
            card="eGift Card"
            propLeft="1139.2px"
            propTop="624px"
          />
          <Link1
            background="/background-17@2x.png"
            congratulationsSmartEGift={`Health & Wellness Smart eGift`}
            card="Card"
            propLeft="1424px"
            propTop="624px"
          />
          <div className="link42">
            <img
              className="background-icon15"
              alt=""
              src="/background-18@2x.png"
            />
            <div className="heading-4-i-choose-you-smart-wrapper">
              <div className="heading-49">I Choose You Smart eGift Card</div>
            </div>
          </div>
          <div className="link43">
            <img
              className="background-icon16"
              alt=""
              src="/background-19@2x.png"
            />
            <div className="heading-4-lego-egift-card-wrapper">
              <div className="heading-410">Lego eGift Card</div>
            </div>
          </div>
          <Link1
            background="/background-20@2x.png"
            congratulationsSmartEGift="Trolls Band Together Smart"
            card="eGift Card"
            propLeft="569.6px"
            propTop="916px"
          />
          <Link1
            background="/background-21@2x.png"
            congratulationsSmartEGift="On The Go Eats Smart eGift"
            card="Card"
            propLeft="854.4px"
            propTop="916px"
          />
          <Link1
            background="/background-22@2x.png"
            congratulationsSmartEGift="Jurassic World Smart eGift"
            card="Card"
            propLeft="1139.2px"
            propTop="916px"
          />
          <div className="link44">
            <img
              className="background-icon17"
              alt=""
              src="/background-23@2x.png"
            />
            <div className="heading-4-aerie-gift-card-wrapper">
              <div className="heading-411">Aerie Gift Card</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GiftCardInfo.propTypes = {
  className: PropTypes.string,
};

export default GiftCardInfo;
