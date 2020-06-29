import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Link } from "gatsby-plugin-modal-routing";
import Layout from "../components/layout";
import Draggable from "react-draggable";

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
    <Draggable>
      <div className="modal-wrap">
        <div className="modal modal__info">
          <div className="modal__content">
            <Link to={"/" + data.datoCmsWork.slug} className="modal__close">
              X
            </Link>
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
    </Draggable>
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
