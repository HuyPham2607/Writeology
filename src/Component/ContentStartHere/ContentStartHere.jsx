import React from "react";
import "./ContentStartHere.css";
import { Link, Element, scroller } from "react-scroll";

const ContentStartHere = () => {
  function openNewTab(url) {
    window.open(url, "_blank");
  }
  return (
    <section>
      <div className="content-overflow">
        <div className="navbar-overflow">
          <ul>
            <li>
              <Link
                className="links"
                activeClass="active"
                to="section1"
                spy={true}
                offset={-70}
                duration={500}
                onClick={() => scroller.scrollTo("section1", {})}
              >
                Styling
              </Link>
            </li>

            <li>
              <Link
                className="links"
                activeClass="active"
                to="section2"
                spy={true}
                offset={-70}
                duration={500}
                onClick={() => scroller.scrollTo("section2", {})}
              >
                Editing pages
              </Link>
            </li>
            <li>
              <Link
                className="links"
                activeClass="active"
                to="section3"
                spy={true}
                offset={-70}
                duration={500}
                onClick={() => scroller.scrollTo("section3", {})}
              >
                Useful notes
              </Link>
            </li>
            <li>
              <Link
                className="links"
                activeClass="active"
                to="section4"
                spy={true}
                offset={-70}
                duration={500}
                onClick={() => scroller.scrollTo("section4", {})}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className="links"
                activeClass="active"
                to="section5"
                spy={true}
                offset={-70}
                duration={500}
                onClick={() => scroller.scrollTo("section5", {})}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="content-start">
          <h2>Getting started</h2>
          <p>
            Thanks for purchasing the Writeology X template. In this brief guide
            we cover all the basics on how to edit basic elements (i.e. colors,
            fonts, CMS content, etc) from the Writeology X Webflow template.
          </p>
          <p>
            If you are not very familiar with Webflow, we highly recommend you
            to take the Webflow 101 Crash Course from Webflow University, as it
            will teach you all the basics to get up and running.
          </p>

          <Element name="section1" className="section">
            <h2>Styling</h2>
            <p>Let's get started with the styling of the template.</p>
            <h3>Colors</h3>
            <p>
              Writeology X template is built using Color Swatches, meaning that
              you can easily edit a color swatch to be updated site-wide.
            </p>
            <p>
              In order to do this, you just need to go to the Style tab in the
              right sidebar, then scroll to Colors in Typography section, and if
              you click the color, you will be able to see all color swatches
              and edit them to be updated site-wide to any color needed.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25a9c066ae048c8358d97_writeology-webflow-template-and-ui-kit-color-p-800.png"
              alt=""
            />

            <h3>Fonts</h3>
            <p>
              Writeology X template uses one single font side-wide, and it's set
              up in the Body (All Pages) selector, so this means you can easily
              update the font on all the site in one click
            </p>
            <p>
              On any page, just click the orange selector option in the top
              right of the Style tab, and then select Body (All Pages). Once
              with this, you can go to Typography section below and change the
              font to any font for your business brand.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25abb9b6d6f967accc7e2_writeology-webflow-template-and-ui-kit-typography-p-800.png"
              alt=""
            />
            <p>
              In case you need a custom or premium font that is not available on
              Webflow, you can always go to Project Settings Fonts and you will
              be able to upload custom fonts, or connect your Adobe Fonts
              account.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62af529482ada2bf00a0ecde_writelogy-webflow-template-and-ui-kit-custom-typography-p-800.png"
              alt=""
            />
            <h3>Graphics & Icons</h3>
            <p>
              Some icons or graphics in the template are normal images/graphics,
              so you will notice that when updating all colors, these will still
              have the template color.
            </p>
            <p>
              This happens because these graphics are images (PNG, JPG, SVG,
              etc), so updating the Webflow CSS (styling) won't affect them. If
              you would like to reuse this graphics, you can always download
              them and edit them using any design software (i.e. Photoshop,
              Illustrator, Sketch, Figma, etc), or directly upload your own
              images/graphics that match your brand.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25ac7f9943a19d47212c1_writeology-webflow-template-and-ui-kit-icons-and-graphics-p-800.png"
              alt=""
            />
          </Element>

          <Element name="section2" className="section">
            <h2>Editing Pages</h2>
            <p>
              Now it's time to continue with the next steps to edit your website
              pages. Usually there are 2 types of content that will be edited,
              which are the following.
            </p>
            <h3>Static pages</h3>
            <p>
              Static Content is all the content that is not CMS-based, which
              means that it is not dynamic (like a Blog Post, for example).
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25ada03ee65a089e57d0b_writeology-webflow-template-and-ui-kit-static-content-p-800.png"
              alt=""
            />
            <p>
              You can easily identify all this content because it's shown as
              grey in the left sidebar Navigator, and it shows a blue border
              when you click or hover over it.
            </p>
            <p>
              If you want to edit this type of content, you can just double
              click it, and you will be able to directly type right there.
            </p>
            <h3>Dynamic Content (CMS)</h3>
            <p>
              Dynamic Content is all the content that is dynamic and will be
              auto-generated based on the content added in the CMS section in
              the left sidebar (just below Pages icon).
            </p>
            <p>
              You can easily identify all of this because it's shown as purple
              in the left sidebar Navigator, and it shows a purple border when
              you click or hover it.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25ae9e6bac90590af0f84_writeology-webflow-template-and-ui-kit-CMS-content-p-800.png"
              alt=""
            />
            <p>
              This content should be updated directly in the CMS section. This
              is meant to make it very easy for you to update it, as it's very
              likely it will need to be constantly updated (For example, adding
              a new blog post)
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62af522b80e099dad6049fde_writelogy-webflow-template-and-ui-kit-CMS-Collection--p-800.png"
              alt=""
            />
            <p>
              Also, if you want to edit a complete auto-generated CMS page (for
              example, a Blog Post), you will find this page available for
              editing in the bottom of all pages in the Pages section in the
              left sidebar.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25afc02b14646358c4841_writeology-webflow-template-and-ui-kit-CMS-page-p-800.png"
              alt=""
            />
            <h3>Products (eCommerce)</h3>
            <p>
              Products or eCommerce content function in a similar way to the CMS
              dynamic content, however, this is focused exclusively for
              eCommerce products.
            </p>
            <p>
              You can identify eCommerce content in a similar way to the CMS
              content, because it's also shown as purple in the left sidebar
              Navigator, as well as with a purple border when you click or hover
              it.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62af522b0cd76f5a8726b232_writelogy-webflow-template-and-ui-kit-eCommerce-Content--p-800.png"
              alt=""
            />
            <p>
              This content should be updated directly in the eCommerce tab in
              the left sidebar. This is meant to make it very easy for you to
              update it, as it's very likely it will need to be constantly
              updated (For example, changing a product price, or adding more
              stock)
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62af522b37289b50c7d7a550_writelogy-webflow-template-and-ui-kit-eCommerce-collection--p-800.png"
              alt=""
            />
            <p>
              Also, if you want to edit the autogenerated product eCommerce
              page, you will find this page available for editing almost at the
              bottom of all pages just above CMS collection pages.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62af522c3263c77d1299f97f_writelogy-webflow-template-and-ui-kit-eCommerce-page--p-800.png"
              alt=""
            />
          </Element>

          <div className="under-line"></div>

          <Element name="section3" className="section">
            <h2>Useful Notes</h2>
            <p>
              Also than the main basic explanation we shared above, here we
              share a few tips and how-to's which are from the most common
              questions we receive.
            </p>
            <h3>Interactions</h3>
            <p>
              If you would like to edit any template Interaction (i.e. removing
              a appear effect), you can easily identify elements that have
              interactions as these have a small Interactions icon (a small
              thunder) in the left sidebar Navigator.
            </p>
            <p>
              If you click this little Interactions icon, you will open the
              right sidebar Interactions tab for this element, where you can
              edit the interaction.=
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25ab0cf3be3cc7ac4d47f_writeology-webflow-template-and-ui-kit-animations-p-800.png"
              alt=""
            />
            <h3>Mobile or Tablet View</h3>
            <p>
              Everytime you make a change (for example, you create a new section
              design), it's a good practice to go to your Viewport top
              navigation and see how it looks on Tablet and Mobile.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25b1ac9064f89f421ec71_writeology-webflow-template-and-ui-kit-responsive-design.png"
              alt=""
            />
            <p>
              If you only edit a Template section with updated text or images
              and you don't erase any Template class, this should not be needed,
              however, if you customize the template more deeply, edit classes,
              or create new sections, it's always good to constantly edit your
              mobile and tablet views to ensure everything is looking perfect.
            </p>
            <h3>Editing Meta Title, Desc and Featured Image</h3>
            <p>
              If you would like to customize the Title, Description and Image
              that is shown when you share your website on any place (i.e.
              Facebook, Twitter, etc), you can easily go to the Pages section in
              the left Sidebar, click the little Settings icon of the page you
              would like to customize, and all these settings will appear.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b25b999441492b194e6c0d_writeology-webflow-template-and-ui-kit-seo-p-800.png"
              alt=""
            />
            <p>Please note it's important to change this on page basis.</p>
            <h3>Backups</h3>
            <p>
              If something goes wrong, for example, if you are not liking where
              the website is going to, if you deleted some critical classes that
              were required to make the Template look nice, or if you just want
              to go to a previous version for any reason, you can always go to
              the Backups section.
            </p>
            <img
              src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62af522b2ec6e7f164840532_writelogy-webflow-template-and-ui-kit-backups--p-800.png"
              alt=""
            />
            <p>
              You can find it in the Settings section in the left Sidebar, and
              then you can just see all the automatic or manual backups.
              Restoring to the old backup is just a click away.
            </p>
            <div className="under-line"></div>
          </Element>
          <Element name="section4" className="section">
            <h2>Writeology X Webflow Template Support</h2>
            <p>
              As you could see above, Writeology X was built on Webflow using
              the best practices to make it very easy for you to edit the
              template and customize it to your needs.
            </p>
            <p>
              However, if you ever find any issue, need help, or just want to
              say hi, feel free to send us at email at
              writeology@brixtemplates.com — We will be happy to help you.
            </p>
            <h3>Custom Design & Development</h3>
            <p>
              On the other hand, if you are looking for help to build an unique
              and personalized version of Writeology X, or just an amazing
              website designed & developed from scratch on Webflow, feel free to
              get in touch with our Webflow Design & Development Agency. The
              amazing team behind Writeology X Webflow Template can help you.
            </p>
          </Element>
          <div className="under-line"></div>
          <Element name="section5" className="section">
            <h2>Frequently Asked Questions</h2>
            <h3>How can I get more icons for the template?</h3>
            <p>
              Looking for a broader icon family to use in this Webflow Template?
              Take a look at our BRIX Templates Icon Fonts and get a collection
              of 100+ icons for your template.
            </p>
            <h3>Are you going to release a template for X?</h3>
            <p>
              Have an idea for another Webflow Template you would like to see
              come to life? Send us your Webflow Template Idea and win a special
              price if we select it.
            </p>
          </Element>
          <button onClick={() => openNewTab("https://github.com/HuyPham2607")}>
            Get template
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentStartHere;
