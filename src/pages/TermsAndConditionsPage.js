import Header2 from "../components/Header2";
import Usage from "../components/Usage";
import FrameComponent3 from "../components/FrameComponent3";
import "./TermsAndConditionsPage.css";

const TermsAndConditionsPage = () => {
  return (
    <div className="termsandconditionspage">
      <Header2 />
      <div className="terms-content">
        <h1 className="terms-and-conditions">Terms and Conditions</h1>
        <div className="please-refer-to2">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </div>
      <main className="lilylamb-kids-we-us-or-parent">
        <div className="lilylamb-kids-we">
          LilyLamb Kids ("we," "us," or "our") values your privacy and is
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, disclose, and protect your information
          when you use our website, products, and services.
        </div>
        <div className="information">
          <h1 className="information-we-collect-container">
            <ol className="information-we-collect">
              <li>Information We Collect</li>
            </ol>
          </h1>
          <div className="information-types">
            <div className="information-list">
              <div className="personal-information">
                1.1 Personal Information
              </div>
              <div className="we-may-collect">
                We may collect personal information, such as your name, email
                address, contact details, and payment information, when you
                register for an account or use our services.
              </div>
            </div>
            <div className="information-list1">
              <div className="usage-information">1.2 Usage Information</div>
              <div className="we-automatically-collect">
                We automatically collect information about your usage of our
                website and services, including your IP address, device type,
                browser type, pages visited, and interactions with our platform.
              </div>
            </div>
          </div>
        </div>
        <Usage />
        <section className="data-security-parent">
          <h1 className="data-security">
            <ol className="data-security1">
              <li>Data Security</li>
            </ol>
          </h1>
          <div className="we-take-reasonable">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission or storage can be guaranteed to be
            completely secure. Please use caution when sharing personal
            information online.
          </div>
        </section>
        <div className="third-party-services-parent">
          <h1 className="third-party-services">
            <ol className="third-party-services1">
              <li>Third-Party Services</li>
            </ol>
          </h1>
          <div className="we-may-use">
            We may use third-party service providers to assist us in delivering
            our services. These providers may have access to your information
            for specific purposes, but they are obligated to maintain the
            confidentiality and security of your data.
          </div>
        </div>
        <section className="cookies-and-tracking-technolog-parent">
          <h1 className="cookies-and-tracking-container">
            <ol className="cookies-and-tracking-technolog">
              <li>Cookies and Tracking Technologies</li>
            </ol>
          </h1>
          <div className="we-use-cookies">
            We use cookies and similar tracking technologies to collect and
            store information about your interactions with our website. You can
            manage your cookie preferences through your browser settings.
          </div>
        </section>
        <div className="your-choices-parent">
          <h1 className="your-choices">
            <ol className="your-choices1">
              <li>Your Choices</li>
            </ol>
          </h1>
          <div className="you-have-the1">
            You have the right to access, update, or delete your personal
            information. You can also unsubscribe from marketing communications
            at any time. To exercise these rights or for any privacy-related
            inquiries, please contact us at LilyLamb Kids.
          </div>
        </div>
        <div className="changes-to-this-privacy-policy-parent">
          <h1 className="changes-to-this-container">
            <ol className="changes-to-this-privacy-policy">
              <li>Changes to this Privacy Policy</li>
            </ol>
          </h1>
          <div className="we-may-update">
            We may update this Privacy Policy to reflect changes in our data
            practices. Any updates will be posted on this page with an updated
            effective date. Please review this Privacy Policy periodically to
            stay informed about our privacy practices.
          </div>
        </div>
        <div className="contact-us-container">
          <h1 className="contact-us4">
            <ol className="contact-us5">
              <li>Contact Us</li>
            </ol>
          </h1>
          <div className="if-you-have-container1">
            <p className="if-you-have2">
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices, please contact us at
              LilyLamb Kids.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="by-using-our1">
              By using our website, products, and services, you agree to the
              terms outlined in this Privacy Policy. We are committed to
              protecting your privacy and ensuring the security of your
              information.
            </p>
          </div>
        </div>
      </main>
      <FrameComponent3 />
    </div>
  );
};

export default TermsAndConditionsPage;
