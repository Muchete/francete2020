import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import LoopVideo from "../components/loopVideo";

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
    <div className="work__content">
      {/* <h1 className="sheet__title">{data.datoCmsWork.title}</h1> */}
      {data.datoCmsWork.gallery.map((item) => {
        if (item.video) {
          return <LoopVideo video={item.video} />;
        } else {
          return <Img sizes={item.sizes} className="work__img" />;
        }
      })}
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
        video {
          low: mp4Url(exactRes: low)
          medium: mp4Url(exactRes: medium)
          high: mp4Url(exactRes: high)
          poster: thumbnailUrl
        }
        sizes(maxWidth: 2000) {
          ...GatsbyDatoCmsSizes
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
