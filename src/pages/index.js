import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Navigation from "../components/navigation";

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <div className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <Link to={`/${work.slug}`} className="card__image">
            <Img fluid={work.coverImage.fluid} />
          </Link>
        </div>
      ))}
    </div>
    <Navigation about />
  </Layout>
);

export default IndexPage;
