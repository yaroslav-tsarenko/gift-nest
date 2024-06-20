import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`footer-parent ${className}`}>
      <div className="footer">
        <div className="footer-top">
          <img className="logo-icon1" alt="" src="/logo-1.svg" />
          <div className="footer-message">
            <div className="a-little-goes">A little goes a long way</div>
            <div className="link-group">
              <img
                className="link-icon"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
              <img className="link-icon1" alt="" src="/link-1.svg" />
              <img className="link-icon2" alt="" src="/link-2.svg" />
              <img className="link-icon3" alt="" src="/link-3.svg" />
            </div>
          </div>
        </div>
        <div className="company-info-parent">
          <div className="company-info">
            <div className="company">Company</div>
            <div className="container">
              <div className="link7">
                <a
                  className="about-us"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-5305"
                  target="_blank"
                >
                  About us
                </a>
              </div>
              <div className="link8">
                <div className="press">Press</div>
              </div>
              <div className="link9">
                <div className="careers">Careers</div>
              </div>
            </div>
          </div>
          <div className="legal-parent">
            <div className="legal">Legal</div>
            <div className="container1">
              <div className="link-container">
                <div className="link10">
                  <a
                    className="privacy-notice"
                    href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-11956"
                    target="_blank"
                  >
                    Privacy notice
                  </a>
                </div>
                <div className="link11">
                  <a
                    className="terms-conditions"
                    href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-13217"
                    target="_blank"
                  >{`Terms & conditions`}</a>
                </div>
              </div>
              <div className="link12" />
              <div className="link13">
                <a
                  className="cookies"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=2-272"
                  target="_blank"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
          <div className="help-parent">
            <div className="help1">Help</div>
            <div className="container2">
              <div className="link14">
                <div className="support-centre">Support centre</div>
              </div>
              <div className="link15">
                <a
                  className="sitemap"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=2-801"
                  target="_blank"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="background16">
        <div className="security-info">
          <img className="svg-icon15" alt="" src="/svg-20.svg" />
        </div>
        <div className="copyright-info">
          <div className="protected-by-trustwave">
            Protected by Trustwave. Secure 128-bit SSL Encrypted.
          </div>
        </div>
        <div className="ezetop-2024-all">
          © Ezetop 2024. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
