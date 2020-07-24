import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import LoopVideo from "../components/loopVideo";
import ImageHandler from "../components/image-handler";

export const query = graphql`
  query OverviewQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          coverImage {
            url
            video {
              low: mp4Url(exactRes: low)
              medium: mp4Url(exactRes: medium)
              high: mp4Url(exactRes: high)
              poster: thumbnailUrl
            }
            sizes(
              maxWidth: 1600
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export const content = (item) => {
  if (item.video) {
    return <LoopVideo video={item.video} className="cover" />;
  } else {
    return <Img sizes={item.sizes} className="cover" />;
  }
};

const Overview = ({ data }) => (
  <Layout>
    <>
      <div className="overview">
        <div className="overview__middle">
          {data.allDatoCmsWork.edges.map(({ node: work }) => (
            <div key={work.id} className="overview__item">
              <Link to={`/${work.slug}`} className="card__image">
                <ImageHandler cn="cover" content={work.coverImage} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Navigation about works />
    </>
  </Layout>
);

export default Overview;
