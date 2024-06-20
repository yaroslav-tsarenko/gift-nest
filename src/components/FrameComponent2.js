import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`footer-container ${className}`}>
      <div className="footer2">
        <div className="footer-top2">
          <img className="logo-icon5" alt="" src="/logo-1.svg" />
          <div className="footer-message1">
            <div className="a-little-goes2">A little goes a long way</div>
            <div className="footer-links">
              <img
                className="link-icon8"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
              <img className="link-icon9" alt="" src="/link-1.svg" />
              <img className="link-icon10" alt="" src="/link-2.svg" />
              <img className="link-icon11" alt="" src="/link-3.svg" />
            </div>
          </div>
        </div>
        <div className="company-info1">
          <div className="company-details">
            <div className="company3">Company</div>
            <div className="container6">
              <div className="link45">
                <a
                  className="about-us2"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-5305"
                  target="_blank"
                >
                  About us
                </a>
              </div>
              <div className="link46">
                <div className="press2">Press</div>
              </div>
              <div className="link47">
                <div className="careers2">Careers</div>
              </div>
            </div>
          </div>
          <div className="legal-info">
            <div className="legal2">Legal</div>
            <div className="container7">
              <div className="privacy-links">
                <div className="link48">
                  <a
                    className="privacy-notice2"
                    href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-11956"
                    target="_blank"
                  >
                    Privacy notice
                  </a>
                </div>
                <div className="link49">
                  <a
                    className="terms-conditions2"
                    href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-13217"
                    target="_blank"
                  >{`Terms & conditions`}</a>
                </div>
              </div>
              <div className="link50" />
              <div className="link51">
                <a
                  className="cookies2"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=2-272"
                  target="_blank"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
          <div className="help-info">
            <div className="help5">Help</div>
            <div className="container8">
              <div className="link52">
                <div className="support-centre2">Support centre</div>
              </div>
              <div className="link53">
                <a
                  className="sitemap2"
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
      <footer className="background22">
        <div className="security">
          <img className="svg-icon23" alt="" src="/svg-20.svg" />
        </div>
        <div className="copyright">
          <div className="protected-by-trustwave2">
            Protected by Trustwave. Secure 128-bit SSL Encrypted.
          </div>
        </div>
        <div className="ezetop-2024-all2">
          © Ezetop 2024. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
