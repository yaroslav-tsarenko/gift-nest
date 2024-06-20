import FrameComponent4 from "../components/FrameComponent4";
import ContactNameField from "../components/ContactNameField";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <div className="paymentpage-inner">
        <FrameComponent4 />
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <ContactNameField />
      </div>
    </div>
  );
};

export default PaymentPage;
