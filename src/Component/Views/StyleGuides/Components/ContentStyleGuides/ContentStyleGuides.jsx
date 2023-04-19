import React from "react";
import "./ContentStyleGuides.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faApple,
  faFacebookMessenger,
  faGithub,
  faLinkedin,
  faSkype,
  faSpotify,
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const ContentStyleGuides = () => {
  let navigate = useNavigate();
  const routeChangeHome = () => {
    let path = `/`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  function openNewTab(url) {
    window.open(url, "_blank");
  }
  return (
    <div className="content-styles-guides">
      <div className="content-heading">
        <div className="inner-heading">
          <h1>Webflow Style Guide</h1>
          <p>
            Writeology X is our free blog Webflow Memberships Template. It was
            designed & developed by the amazing team at <u>BRIX Templates</u>.
          </p>
          <button
            onClick={() =>
              openNewTab("https://github.com/HuyPham2607/Writeology")
            }
          >
            Get template
          </button>
          <button className="back-home" onClick={() => routeChangeHome()}>
            Back to home
          </button>
        </div>
      </div>
      <div className="style--content Colors">
        <div className="style---content-heading">
          <div className="style---heading-icon-wrapper">
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f8356476b1382_colors-icon-style-guide-brix-templates.svg"
              alt=""
            />
          </div>
          <h2>Colors</h2>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Neutral colors</h2>
          </div>
          <div className="w-layout-grid grid-4-columns">
            <div className="card-item-style-guides">
              <div className="color-block neutral-800"></div>
              <div className="color-block-content">
                <div className="color-block-content-name">Neutral 800</div>
                <div className="color-block-content-hex">#131313</div>
              </div>
            </div>
            <div className="card-item-style-guides">
              <div className="color-block neutral-700"></div>
              <div className="color-block-content">
                <div className="color-block-content-name">Neutral 700</div>
                <div className="color-block-content-hex">#353535</div>
              </div>
            </div>
            <div className="card-item-style-guides">
              <div className="color-block neutral-600"></div>
              <div className="color-block-content">
                <div className="color-block-content-name">Neutral 600</div>
                <div className="color-block-content-hex">#727272</div>
              </div>
            </div>
            <div className="card-item-style-guides">
              <div className="color-block neutral-500"></div>
              <div className="color-block-content">
                <div className="color-block-content-name">Neutral 500</div>
                <div className="color-block-content-hex">#B1B1B1</div>
              </div>
            </div>
            <div className="card-item-style-guides">
              <div className="color-block neutral-400"></div>
              <div className="color-block-content">
                <div className="color-block-content-name">Neutral 400</div>
                <div className="color-block-content-hex">#D5D5D5</div>
              </div>
            </div>
            <div className="card-item-style-guides">
              <div className="color-block neutral-300"></div>
              <div className="color-block-content">
                <div className="color-block-content-name">Neutral 300</div>
                <div className="color-block-content-hex">#F0F0F0</div>
              </div>
            </div>
            <div className="card-item-style-guides">
              <div className="color-block neutral-200"></div>
              <div className="color-block-content">
                <div className="color-block-content-name">Neutral 200</div>
                <div className="color-block-content-hex">#FCFCFC</div>
              </div>
            </div>
            <div className="card-item-style-guides">
              <div className="color-block neutral-100"></div>
              <div className="color-block-content">
                <div className="color-block-content-name">Neutral 100</div>
                <div className="color-block-content-hex">#FFFFFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="style--content Typography">
        <div className="style---content-heading">
          <div className="style---heading-icon-wrapper">
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f832c7e6b1396_typography-icon-style-guide-brix-templates.svg"
              alt=""
            />
          </div>
          <h2>Typography</h2>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Special headings</h2>
          </div>
          <div className="w-layout-grid grid-1-column gap-row-80px">
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Display 1</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  52px / 64px
                </div>
              </div>
              <div>
                <h1 className="display-1">Donec etdolr odio pelle ntesqu.</h1>
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Display 2</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  44px / 56px
                </div>
              </div>
              <div>
                <h1 className="display-2">Donec etdolr odio pelle ntesqu.</h1>
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Display 3</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  38px / 56px
                </div>
              </div>
              <div>
                <h1 className="display-3">Donec etdolr odio pelle ntesqu.</h1>
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Display 4</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  28px / 40px
                </div>
              </div>
              <div>
                <h1 className="display-4">Donec etdolr odio pelle ntesqu.</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Headings</h2>
          </div>
          <div className="w-layout-grid grid-1-column gap-row-80px">
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Heading H1</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  52px / 64px
                </div>
              </div>
              <div>
                <h1 className="h1-size">Donec et odio dolor pelle ntesqu.</h1>
                <div className="h1-size">Donec et odio dolor pelle ntesqu.</div>
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Heading H2</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  44px / 56px
                </div>
              </div>
              <div>
                <h2 className="h2-size">Donec et odio dolor pelle ntesqu.</h2>
                <div className="h2-size">Donec et odio dolor pelle ntesqu.</div>
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Heading H3</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  38px / 56px
                </div>
              </div>
              <div>
                <h3 className="h3-size">Donec et odio dolor pelle ntesqu.</h3>
                <div className="h3-size">Donec et odio dolor pelle ntesqu.</div>
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Heading H4</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  28px / 40px
                </div>
              </div>
              <div>
                <h4 className="h4-size">Donec et odio dolor pelle ntesqu.</h4>
                <div className="h4-size">Donec et odio dolor pelle ntesqu.</div>
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Heading H5</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  18px / 26px
                </div>
              </div>
              <div>
                <h5 className="h5-size">Donec et odio dolor pelle ntesqu.</h5>
                <div className="h5-size">Donec et odio dolor pelle ntesqu.</div>
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Heading H6</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  16px / 22px
                </div>
              </div>
              <div>
                <h6 className="h6-size">Donec et odio dolor pelle ntesqu.</h6>
                <div className="h6-size">Donec et odio dolor pelle ntesqu.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Body</h2>
          </div>
          <div className="w-layout-grid grid-1-column gap-row-80px">
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Body Large</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  24px / 38px
                </div>
              </div>
              <div className="paragraph-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursu.
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Body Default</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  16px / 24px
                </div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </div>
            </div>
            <div className="w-layout-grid style---typography-block-grid">
              <div>
                <h2 className="mg-bottom-24px">Body Small</h2>
                <div className="text-200 mg-bottom-16px">Manrope Bold</div>
                <div className="text-200 color-accent-1 color-neutral-800">
                  14px / 24px
                </div>
              </div>
              <div className="paragraph-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="style--content Shadows">
        <div className="style---content-heading">
          <div className="style---heading-icon-wrapper">
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f832d516b13c9_shadows-icon-style-guide-brix-templates.svg"
              alt=""
            />
          </div>
          <h2>Shadows</h2>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>General shadows</h2>
          </div>
          <div className="w-layout-grid grid-3-columns gap-row-80px">
            <div className="style---shadow-card shadow-01">
              <h2>Shadow 01</h2>
            </div>
            <div className="style---shadow-card shadow-02">
              <h2>Shadow 02</h2>
            </div>
            <div className="style---shadow-card shadow-03">
              <h2>Shadow 03</h2>
            </div>
            <div className="style---shadow-card shadow-04">
              <h2>Shadow 04</h2>
            </div>
            <div className="style---shadow-card shadow-05">
              <h2>Shadow 05</h2>
            </div>
            <div className="style---shadow-card shadow-06">
              <h2>Shadow 06</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="style--content Buttons">
        <div className="style---content-heading">
          <div className="style---heading-icon-wrapper">
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f83d04e6b137b_buttons-icon-style-guide-brix-templates.svg"
              alt=""
            />
          </div>
          <h2>Buttons</h2>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Primary buttons</h2>
          </div>
          <div className="style---components-wrapper">
            <div className="style---bg-white">
              <div className="w-layout-grid grid-3-columns style---buttons-grid">
                <button className="btn-primary small">Small</button>
                <button className="btn-primary">Defaults</button>
                <button className="btn-primary large">Large</button>
              </div>
            </div>
            <div className="style---bg-white bg-dark">
              <div className="w-layout-grid grid-3-columns style---buttons-grid">
                <button
                  className="btn-primary small style-buttons-dark"
                  style={{ backgroundColor: "#fff", color: "#131313" }}
                >
                  Small
                </button>
                <button
                  style={{ backgroundColor: "#fff", color: "#131313" }}
                  className="btn-primary style-buttons-dark"
                >
                  Defaults
                </button>
                <button
                  style={{ backgroundColor: "#fff", color: "#131313" }}
                  className="btn-primary large style-buttons-dark"
                >
                  Large
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="style--content Links">
        <div className="style---content-heading">
          <div className="style---heading-icon-wrapper">
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f83f9376b13de_links-icon-style-guide-brix-templates.svg"
              alt=""
            />
          </div>
          <h2>Links</h2>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Links</h2>
          </div>
          <div className="style---components-wrapper">
            <div className="style---bg-white">
              <div className="w-layout-grid grid-4-columns">
                <span className="link-item">Link Item</span>
                <span className="link-item">Link Item</span>
                <span className="link-item">Link Item</span>
                <span className="link-item">Link Item</span>
              </div>
            </div>
            <div className="style---bg-white bg-dark">
              <div className="w-layout-grid grid-4-columns">
                <span className="link-item" style={{ color: "#fff" }}>
                  Link Item
                </span>
                <span className="link-item" style={{ color: "#fff" }}>
                  Link Item
                </span>
                <span className="link-item" style={{ color: "#fff" }}>
                  Link Item
                </span>
                <span className="link-item" style={{ color: "#fff" }}>
                  Link Item
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="style--content Inputs">
        <div className="style---content-heading">
          <div className="style---heading-icon-wrapper">
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f83f9376b13de_links-icon-style-guide-brix-templates.svg"
              alt=""
            />
          </div>
          <h2>Inputs</h2>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Input text</h2>
          </div>
          <div className="style---components-wrapper">
            <div className="style---bg-white">
              <div className="w-layout-grid grid-2-columns _1-col-tablet">
                <div>
                  <div className="w-form">
                    <form>
                      <label htmlFor="name">Label</label>
                      <input
                        type="text"
                        className="input small w-input"
                        maxLength="256"
                        name="name"
                        data-name="Name"
                        placeholder="Placeholder"
                        id="name"
                      />
                    </form>
                    <div
                      className="w-form-done"
                      tabIndex="-1"
                      role="region"
                      aria-label="Email Form success"
                    ></div>
                    <div
                      className="w-form-fail"
                      tabIndex="-1"
                      role="region"
                      aria-label="Email Form failure"
                    ></div>
                  </div>
                  <div className="w-form">
                    <form>
                      <label htmlFor="name-3">Label</label>
                      <input
                        type="text"
                        className="input w-input"
                        maxLength="256"
                        name="name-3"
                        data-name="Name 3"
                        placeholder="Placeholder"
                        id="name-3"
                      />
                    </form>
                    <div
                      className="w-form-done"
                      tabIndex="-1"
                      role="region"
                      aria-label="Email Form success"
                    ></div>
                    <div
                      className="w-form-fail"
                      tabIndex="-1"
                      role="region"
                      aria-label="Email Form failure"
                    ></div>
                  </div>
                  <div className="w-form">
                    <form>
                      <label htmlFor="name-2">Label</label>
                      <input
                        type="text"
                        className="input large w-input"
                        maxLength="256"
                        name="name-2"
                        data-name="Name 2"
                        placeholder="Placeholder"
                        id="name-2"
                      />
                    </form>
                    <div
                      className="w-form-done"
                      tabIndex="-1"
                      role="region"
                      aria-label="Email Form success"
                    ></div>
                    <div
                      className="w-form-fail"
                      tabIndex="-1"
                      role="region"
                      aria-label="Email Form failure"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="w-form">
                    <form>
                      <label htmlFor="name-6">Label</label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className="input button-inside w-input"
                          maxLength="256"
                          placeholder="Placeholder"
                        />
                        <button className="btn-primary inside-input default w-button">
                          Default
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="w-form">
                    <form>
                      <label htmlFor="name-5">Label</label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className="input large button-inside w-input"
                          maxLength="256"
                          placeholder="Placeholder"
                        />
                        <button className="btn-primary inside-input default w-button">
                          Default
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Text area</h2>
          </div>
          <div className="style---components-wrapper">
            <div className="style---bg-white">
              <div className="w-layout-grid grid-2-columns _1-col-tablet">
                <div>
                  <div className="w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      aria-label="Email Form"
                    >
                      <label htmlFor="name-4">Label</label>
                      <textarea
                        placeholder="Placeholder"
                        maxLength="5000"
                        id="field-2"
                        name="field-2"
                        data-name="Field 2"
                        className="text-area small w-input"
                      ></textarea>
                    </form>
                  </div>
                  <div className="w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      aria-label="Email Form"
                    >
                      <label htmlFor="field">Label</label>
                      <textarea
                        placeholder="Placeholder"
                        maxLength="5000"
                        id="field"
                        name="field"
                        data-name="field"
                        className="text-area w-input"
                      ></textarea>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="style--content Icons">
        <div className="style---content-heading">
          <div className="style---heading-icon-wrapper">
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f8399d56b1375_icon-font-icon-style-guide-brix-templates.svg"
              alt=""
            />
          </div>
          <h2>Icons</h2>
        </div>
        <div className="style---content-block">
          <div className="style---block-sub-heading">
            <h2>Square icons</h2>
          </div>
          <div className="style---components-wrapper">
            <div className="style---bg-white">
              <div className="w-layout-grid style---social-square-icons-grid">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  style={{ color: "#000000" }}
                  size="xl"
                />
                <FontAwesomeIcon
                  icon={faSquareTwitter}
                  style={{ color: "#000000" }}
                  size="xl"
                />
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  style={{ color: "#000000" }}
                  size="xl"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#000000" }}
                  size="xl"
                />
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  size="xl"
                  style={{ color: "#000000" }}
                />
                <FontAwesomeIcon
                  icon={faSkype}
                  size="xl"
                  style={{ color: "#000000" }}
                />
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  size="xl"
                  style={{ color: "#000000" }}
                />
                <FontAwesomeIcon
                  icon={faSpotify}
                  size="xl"
                  style={{ color: "#000000" }}
                />
                <FontAwesomeIcon
                  size="xl"
                  icon={faApple}
                  style={{ color: "#000000" }}
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  style={{ color: "#000000" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStyleGuides;
