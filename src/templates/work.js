import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Navigation from "../components/navigation";

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
    <div className="work__content">
      {/* <h1 className="sheet__title">{data.datoCmsWork.title}</h1> */}
      {data.datoCmsWork.gallery.map((img) => (
        <Img fluid={img.fluid} />
      ))}
      <Navigation about works info={data.datoCmsWork.slug} />
    </div>
  </Layout>
);

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      gallery {
        fluid(maxWidth: 1440, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
