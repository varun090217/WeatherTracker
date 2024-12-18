const path = require("path");

exports.handler = async (event, context) => {
  if (event.path === "/weatherTracker") {
    const htmlPath = path.join(__dirname, "../../src/index.html");
    return {
      statusCode: 200,
      body: require("fs").readFileSync(htmlPath, "utf8"),
      headers: { "Content-Type": "text/html" },
    };
  }
  return { statusCode: 404, body: "Not Found" };
};
