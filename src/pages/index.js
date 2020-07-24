import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import ImageHandler from "../components/image-handler";
import Slider from "../components/slider";

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
            sizes(maxWidth: 1600) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            url
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <>
      <div className="option_touch">
        <div className="showcase">
          <div className="showcase__middle">
            {data.allDatoCmsWork.edges.map(({ node: work }) => (
              <div key={work.id} className="showcase__item">
                <Link to={`/${work.slug}`} className="card__image">
                  <ImageHandler cn="cover" content={work.coverImage} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Slider data={data} />
      <Navigation about index />
    </>
  </Layout>
);

export default IndexPage;
