import Header1 from "../components/Header1";
import SignIn from "../components/SignIn";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header1 />
      <section className="page-content">
        <div className="content-container">
          <SignIn />
        </div>
        <img
          className="content-background-icon"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </section>
      <section className="footer-group">
        <div className="footer">
          <div className="logo-parent">
            <img className="logo-icon" alt="" src="/logo-1.svg" />
            <div className="slogan-navigation">
              <div className="a-little-goes">A little goes a long way</div>
              <div className="footer-links1">
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
          <div className="company-info">
            <div className="company-name">
              <div className="company">Company</div>
              <div className="container">
                <div className="link">
                  <a
                    className="about-us"
                    href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-5305"
                    target="_blank"
                  >
                    About us
                  </a>
                </div>
                <div className="link1">
                  <div className="press">Press</div>
                </div>
                <div className="link2">
                  <div className="careers">Careers</div>
                </div>
              </div>
            </div>
            <div className="legal-help">
              <div className="legal">Legal</div>
              <div className="container1">
                <div className="privacy-terms">
                  <div className="link3">
                    <a
                      className="privacy-notice"
                      href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-11956"
                      target="_blank"
                    >
                      Privacy notice
                    </a>
                  </div>
                  <div className="link4">
                    <a
                      className="terms-conditions2"
                      href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-13217"
                      target="_blank"
                    >{`Terms & conditions`}</a>
                  </div>
                </div>
                <div className="link5" />
                <div className="link6">
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
            <div className="help-links">
              <div className="help">Help</div>
              <div className="container2">
                <div className="link7">
                  <div className="support-centre">Support centre</div>
                </div>
                <div className="link8">
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
        <footer className="background">
          <div className="background-icon">
            <img className="svg-icon" alt="" src="/svg-4.svg" />
          </div>
          <div className="security-info">
            <div className="protected-by-trustwave">
              Protected by Trustwave. Secure 128-bit SSL Encrypted.
            </div>
          </div>
          <div className="ezetop-2024-all">
            © Ezetop 2024. All rights reserved.
          </div>
        </footer>
      </section>
    </div>
  );
};

export default SignUpPage;
