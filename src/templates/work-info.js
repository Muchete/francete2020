import React from "react";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Layout from "../components/layout";
// import Draggable from "react-draggable";

export default ({ data }) => (
  <Layout>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <>
          <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
          {/* <Draggable> */}
          <div className="modal-wrap">
            <div className="modal modal__info">
              <div className="modal__content">
                {modal ? (
                  <Link to={closeTo} className="modal__close">
                    X
                  </Link>
                ) : (
                  <Link
                    to={"/" + data.datoCmsWork.slug}
                    className="modal__close"
                  >
                    X
                  </Link>
                )}
                <div
                  className="modal__text"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
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

export const query = graphql`
  query workInfo($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
