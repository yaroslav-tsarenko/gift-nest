import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`faq-items-wrapper ${className}`}>
      <div className="faq-items">
        <div className="faq-contact">
          <h1 className="have-a-question-container">
            <p className="have-a-question">
              Have a question about sending mobile
            </p>
            <p className="recharge-with-varied">recharge with Varied Value?</p>
          </h1>
        </div>
        <div className="faq-content">
          <div className="what-is-ding">What is Ding?</div>
          <div className="faq-icons">
            <img className="faq-icon-images" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content1" />
        <div className="faq-content2">
          <div className="what-is-an">What is an international top-up?</div>
          <div className="vector-wrapper6">
            <img className="vector-icon8" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content3" />
        <div className="faq-content4">
          <div className="can-i-send">
            Can I send mobile recharges from abroad?
          </div>
          <div className="vector-wrapper7">
            <img className="vector-icon9" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content5" />
        <div className="faq-content6">
          <div className="how-to-send">How to send a top-up online</div>
          <div className="vector-wrapper8">
            <img className="vector-icon10" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content7" />
        <div className="faq-content8">
          <div className="can-i-also">Can I also send data?</div>
          <div className="vector-wrapper9">
            <img className="vector-icon11" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content9" />
        <div className="faq-content10">
          <div className="what-are-the">
            What are the most popular countries that our users recharge?
          </div>
          <div className="vector-wrapper10">
            <img className="vector-icon12" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content11" />
        <div className="faq-content12">
          <div className="what-are-the1">
            What are the most popular mobile operators?
          </div>
          <div className="vector-wrapper11">
            <img className="vector-icon13" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content13" />
        <div className="faq-content14">
          <div className="can-i-pay">
            Can I pay for a mobile recharge with my credit card?
          </div>
          <div className="vector-wrapper12">
            <img className="vector-icon14" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content15" />
        <div className="faq-content16">
          <div className="how-can-i">
            How can I get exclusive Ding promotions?
          </div>
          <div className="vector-wrapper13">
            <img className="vector-icon15" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content17" />
        <div className="faq-content18">
          <div className="can-i-also1">
            Can I also buy gift cards online with Ding?
          </div>
          <div className="vector-wrapper14">
            <img className="vector-icon16" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="faq-content19" />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
