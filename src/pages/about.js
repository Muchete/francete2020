import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { ModalRoutingContext, Link } from "gatsby-plugin-modal-routing";
import Layout from "../components/layout";
// import Draggable from "react-draggable";

const About = ({ data: { about } }) => (
  <Layout>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <>
          <HelmetDatoCms seo={about.seoMetaTags} />
          {/* <Draggable> */}
          <div className="modal-wrap">
            <div className="modal">
              <div className="modal__content">
                {modal ? (
                  <Link to={closeTo} className="modal__close">
                    X
                  </Link>
                ) : (
                  <Link to="/" className="modal__close">
                    X
                  </Link>
                )}
                <div
                  className="modal__text"
                  dangerouslySetInnerHTML={{
                    __html: about.bioNode.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
          {/* </Draggable> */}
        </>
      )}
    </ModalRoutingContext.Consumer>
  </Layout>
);

export default About;

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
