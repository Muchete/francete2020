import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import LoopVideo from "../components/loopVideo";
import ImageHandler from "../components/image-handler";

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
    <div className="work__content">
      {data.datoCmsWork.gallery.map((item) => {
        return <ImageHandler content={item} cn="work-site" />;
      })}
      <Navigation
        about
        works
        info={data.datoCmsWork.slug}
        showInfo={data.datoCmsWork.showInfo}
      />
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
        filename
        url
        video {
          low: mp4Url(exactRes: low)
          medium: mp4Url(exactRes: medium)
          high: mp4Url(exactRes: high)
          poster: thumbnailUrl
        }
        sizes(maxWidth: 2000) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      showInfo
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
