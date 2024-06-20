import Header1 from "../components/Header1";
import Filters from "../components/Filters";
import GiftCardInfo from "../components/GiftCardInfo";
import FrameComponent2 from "../components/FrameComponent2";
import "./ListingPage.css";

const ListingPage = () => {
  return (
    <div className="listingpage">
      <Header1 />
      <section className="hero1">
        <div className="hero-content">
          <div className="one-gift-multiple-options-en-parent">
            <h1 className="one-gift-multiple-container">
              <p className="one-gift-multiple">One gift, multiple options,</p>
              <p className="endless-joy">endless joy.</p>
            </h1>
            <div className="with-100s-of-container">
              <p className="with-100s-of">
                With 100s of brands to choose from and the freedom to spend it
              </p>
              <p className="their-way-this">{`their way, this Swap & Shop card is our giftees’ fav!`}</p>
            </div>
          </div>
        </div>
        <img
          className="us-woc20banner20image-20des-icon"
          loading="lazy"
          alt=""
          src="/us-woc20banner20image-20desktoppng@2x.png"
        />
      </section>
      <Filters />
      <GiftCardInfo />
      <FrameComponent2 />
    </div>
  );
};

export default ListingPage;
