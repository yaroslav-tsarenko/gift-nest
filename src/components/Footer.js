import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer2 ${className}`}>
      <div className="footer-logo">
        <img className="logo-icon3" alt="" src="/logo-1.svg" />
        <div className="slogan">
          <div className="a-little-goes2">A little goes a long way</div>
          <div className="social-links">
            <img className="link-icon8" loading="lazy" alt="" src="/link.svg" />
            <img className="link-icon9" alt="" src="/link-1.svg" />
            <img className="link-icon10" alt="" src="/link-2.svg" />
            <img className="link-icon11" alt="" src="/link-3.svg" />
          </div>
        </div>
      </div>
      <div className="company-info2">
        <div className="company-name1">
          <div className="company2">Company</div>
          <div className="container6">
            <div className="link21">
              <a
                className="about-us2"
                href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-5305"
                target="_blank"
              >
                About us
              </a>
            </div>
            <div className="link22">
              <div className="press2">Press</div>
            </div>
            <div className="link23">
              <div className="careers2">Careers</div>
            </div>
          </div>
        </div>
        <div className="legal-info1">
          <div className="legal2">Legal</div>
          <div className="container7">
            <div className="legal-link-items">
              <div className="link24">
                <a
                  className="privacy-notice2"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-11956"
                  target="_blank"
                >
                  Privacy notice
                </a>
              </div>
              <div className="link25">
                <a
                  className="terms-conditions4"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-13217"
                  target="_blank"
                >{`Terms & conditions`}</a>
              </div>
            </div>
            <div className="link26" />
            <div className="link27">
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
        <div className="help3">
          <div className="help4">Help</div>
          <div className="container8">
            <div className="link28">
              <div className="support-centre2">Support centre</div>
            </div>
            <div className="link29">
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
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
