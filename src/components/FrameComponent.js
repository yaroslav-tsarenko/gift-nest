import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`footer-group ${className}`}>
      <div className="footer1">
        <div className="footer-top1">
          <img className="logo-icon3" alt="" src="/logo-1.svg" />
          <div className="footer-slogan">
            <div className="a-little-goes1">A little goes a long way</div>
            <div className="social-links">
              <img
                className="link-icon4"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
              <img className="link-icon5" alt="" src="/link-1.svg" />
              <img className="link-icon6" alt="" src="/link-2.svg" />
              <img className="link-icon7" alt="" src="/link-3.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent8">
          <div className="company-parent">
            <div className="company2">Company</div>
            <div className="container3">
              <div className="link19">
                <a
                  className="about-us1"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-5305"
                  target="_blank"
                >
                  About us
                </a>
              </div>
              <div className="link20">
                <div className="press1">Press</div>
              </div>
              <div className="link21">
                <div className="careers1">Careers</div>
              </div>
            </div>
          </div>
          <div className="legal-group">
            <div className="legal1">Legal</div>
            <div className="container4">
              <div className="policy-links">
                <div className="link22">
                  <a
                    className="privacy-notice1"
                    href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-11956"
                    target="_blank"
                  >
                    Privacy notice
                  </a>
                </div>
                <div className="link23">
                  <a
                    className="terms-conditions1"
                    href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-13217"
                    target="_blank"
                  >{`Terms & conditions`}</a>
                </div>
              </div>
              <div className="link24" />
              <div className="link25">
                <a
                  className="cookies1"
                  href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=2-272"
                  target="_blank"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
          <div className="help-group">
            <div className="help3">Help</div>
            <div className="container5">
              <div className="link26">
                <div className="support-centre1">Support centre</div>
              </div>
              <div className="link27">
                <a
                  className="sitemap1"
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
      <footer className="background21">
        <div className="social-icon">
          <img className="svg-icon20" alt="" src="/svg-20.svg" />
        </div>
        <div className="security-info1">
          <div className="protected-by-trustwave1">
            Protected by Trustwave. Secure 128-bit SSL Encrypted.
          </div>
        </div>
        <div className="ezetop-2024-all1">
          © Ezetop 2024. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
