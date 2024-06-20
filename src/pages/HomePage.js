import { Button } from "@mui/material";
import Header2 from "../components/Header2";
import FrameComponent5 from "../components/FrameComponent5";
import Featured from "../components/Featured";
import Logos from "../components/Logos";
import FrameComponent4 from "../components/FrameComponent4";
import UserStory from "../components/UserStory";
import PaymentMethods from "../components/PaymentMethods";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header2 />
      <section className="hero">
        <div className="the-fastest-way-to-send-gift-c-parent">
          <h1 className="the-fastest-way">
            The fastest way to send Gift Cards worldwide
          </h1>
          <div className="hero-subtitle">
            <div className="of-gift-cards-container">
              <span className="of-gift-cards-container1">
                <p className="of-gift-cards">
                  99% of Gift Cards sent online with Ding arrive in 3
                </p>
                <p className="seconds">seconds.</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent5 />
      <Featured />
      <Logos />
      <FrameComponent4 />
      <section className="testimonial">
        <h1 className="send-a-little-container">
          <p className="send-a-little">Send a little smile</p>
          <p className="from-dallas-to">from Dallas to San Salvador</p>
        </h1>
        <div className="continents">
          <Button
            className="continent-items"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#1d1d1d",
              fontSize: "16",
              borderColor: "#1d1d1d",
              borderRadius: "20px",
              "&:hover": { borderColor: "#1d1d1d" },
              width: 93,
              height: 38,
            }}
          >
            Africa
          </Button>
          <div className="continent-items1">
            <div className="section-africa">Asia | The Pacific</div>
          </div>
          <div className="continent-items2">
            <div className="section-africa1">The Caribbean</div>
          </div>
          <div className="continent-items3">
            <div className="section-africa2">Central | North America</div>
          </div>
          <Button
            className="continent-items4"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#1d1d1d",
              fontSize: "16",
              borderColor: "#1d1d1d",
              borderRadius: "20px",
              "&:hover": { borderColor: "#1d1d1d" },
              width: 102,
              height: 38,
            }}
          >
            Europe
          </Button>
          <Button
            className="continent-items5"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#1d1d1d",
              fontSize: "16",
              borderColor: "#1d1d1d",
              borderRadius: "20px",
              "&:hover": { borderColor: "#1d1d1d" },
              width: 159,
              height: 38,
            }}
          >
            South America
          </Button>
        </div>
        <blockquote className="my-mother-is-container">
          <span className="my-mother-is-container1">
            <p className="my-mother-is">
              "My mother is in Mexico and I recharge her number every month. I
              can rely on
            </p>
            <p className="ding-to-make">
              Ding to make sure the credit is received, so she doesn't need to
              go the store to
            </p>
            <p className="refill-her-balance">refill her balance."</p>
          </span>
        </blockquote>
        <UserStory />
        <PaymentMethods />
      </section>
      <section className="trust-container-wrapper">
        <div className="trust-container">
          <div className="trust-statement">
            <h1 className="trusted-by-over">
              Trusted by over 1 million people globally
            </h1>
          </div>
          <div className="whether-you-call">
            Whether you call it top-up, mobile recharge, reload, airtime, load
            or credit, we've got you covered. We've delivered over 500 million
            international mobile recharges online since 2006.
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent3 />
    </div>
  );
};

export default HomePage;
