import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const projects = undefined;

  // const { allProjectCards: projects } = useStaticQuery(graphql`
  //   query {
  //     allProjectCards {
  //       projects: nodes {
  //         tags
  //         title
  //         year
  //         image {
  //           childImageSharp {
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <article>
      <h1>Gatsby Image Sourcing</h1>
      <section>
        {projects.map((project, index) => {
          const image = getImage(project.image.childImageSharp.gatsbyImageData);
          return (
            <div key={index}>
              <h3>{project.title}</h3>
              <GatsbyImage image={image} alt={project.title} />
              <p>{`Year: ${project.year}, Tags: ${project.year.join(", ")}`}</p>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default IndexPage;
