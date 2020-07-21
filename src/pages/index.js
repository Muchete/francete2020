import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import LoopVideo from "../components/loopVideo";

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          coverImage {
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
              ...GatsbyDatoCmsSizes
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

const IndexPage = ({ data }) => (
  <Layout>
    <>
      <div className="showcase">
        <div className="showcase__middle">
          {data.allDatoCmsWork.edges.map(({ node: work }) => (
            <div key={work.id} className="showcase__item">
              <Link to={`/${work.slug}`} className="card__image">
                {content(work.coverImage)}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Navigation about />
    </>
  </Layout>
);

export default IndexPage;
