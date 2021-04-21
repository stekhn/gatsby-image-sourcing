const path = require("path");
const projects = require("./src/data/projects.json");

// Reference: https://stackoverflow.com/a/56012718
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  projects.forEach((project) => {
    const { title, year, tags, image } = project;
    const { name, ext } = path.parse(image);

    const absolutePath = path.resolve(
      __dirname,
      "./src/images/projects",
      image
    );

    const imageData = {
      name,
      ext,
      absolutePath,
      extension: ext.substring(1),
    };

    console.log(imageData);
  
    const imageNode = {
      ...imageData,
      id: createNodeId(`project-card-image-${name}`),
      internal: {
        type: "projectCardsImage",
        contentDigest: createContentDigest(imageData),
      },
    };

    actions.createNode(imageNode);

    const node = {
      title,
      year,
      tags,
      image: imageNode,
      id: createNodeId(`project-card-${title}`),
      internal: {
        type: "projectCards",
        contentDigest: createContentDigest(project),
      },
    };

    actions.createNode(node);
  });
};
