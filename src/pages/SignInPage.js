import { Button } from "@mui/material";
import Header2 from "../components/Header2";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <Header2 />
      <section className="page-content1">
        <div className="content-wrapper">
          <div className="sign-in">
            <div className="form-container">
              <div className="sign-in-header">
                <h1 className="sign-in1">Sign in</h1>
                <div className="sign-in-to">
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className="input-fields">
                <div className="field-labels">
                  <div className="username">Username</div>
                  <img
                    className="input-boxes-icon"
                    alt=""
                    src="/frame-153-1.svg"
                  />
                </div>
                <div className="field-labels1">
                  <div className="password">Password</div>
                  <img
                    className="field-labels-child"
                    alt=""
                    src="/frame-153-2.svg"
                  />
                </div>
                <Button
                  className="button"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#000",
                    borderRadius: "40px",
                    "&:hover": { background: "#000" },
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className="or-sign-in">or, sign in with</div>
              <div className="social-buttons">
                <img
                  className="button-placeholders-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="button-placeholders-icon1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="button-placeholders-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-shape-icon"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <section className="footer-container">
        <div className="footer1">
          <div className="footer-top">
            <img
              className="logo-icon1"
              loading="lazy"
              alt=""
              src="/logo-1.svg"
            />
            <div className="footer-slogan">
              <div className="a-little-goes1">A little goes a long way</div>
              <div className="footer-links2">
                <img
                  className="link-icon4"
                  loading="lazy"
                  alt=""
                  src="/link.svg"
                />
                <img
                  className="link-icon5"
                  loading="lazy"
                  alt=""
                  src="/link-1.svg"
                />
                <img
                  className="link-icon6"
                  loading="lazy"
                  alt=""
                  src="/link-2.svg"
                />
                <img
                  className="link-icon7"
                  loading="lazy"
                  alt=""
                  src="/link-3.svg"
                />
              </div>
            </div>
          </div>
          <div className="footer-info">
            <div className="company-info1">
              <div className="company1">Company</div>
              <div className="container3">
                <div className="link9">
                  <a
                    className="about-us1"
                    href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-5305"
                    target="_blank"
                  >
                    About us
                  </a>
                </div>
                <div className="link10">
                  <div className="press1">Press</div>
                </div>
                <div className="link11">
                  <div className="careers1">Careers</div>
                </div>
              </div>
            </div>
            <div className="legal-info">
              <div className="legal1">Legal</div>
              <div className="container4">
                <div className="policy-links">
                  <div className="link12">
                    <a
                      className="privacy-notice1"
                      href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-11956"
                      target="_blank"
                    >
                      Privacy notice
                    </a>
                  </div>
                  <div className="link13">
                    <a
                      className="terms-conditions3"
                      href="https://www.figma.com/design/PkpQxw35jvFCgx4PD3S8gs?node-id=1-13217"
                      target="_blank"
                    >{`Terms & conditions`}</a>
                  </div>
                </div>
                <div className="link14" />
                <div className="link15">
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
            <div className="help-info">
              <div className="help1">Help</div>
              <div className="container5">
                <div className="link16">
                  <div className="support-centre1">Support centre</div>
                </div>
                <div className="link17">
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
        <footer className="background1">
          <div className="secure-icon">
            <img className="svg-icon1" loading="lazy" alt="" src="/svg-4.svg" />
          </div>
          <div className="copyright">
            <div className="protected-by-trustwave1">
              Protected by Trustwave. Secure 128-bit SSL Encrypted.
            </div>
          </div>
          <div className="ezetop-2024-all1">
            © Ezetop 2024. All rights reserved.
          </div>
        </footer>
      </section>
    </div>
  );
};

export default SignInPage;
