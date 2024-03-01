const path = require("path");
const serveStatic = require("serve-static");

const assetsPath = path.join(__dirname, "src/assets");
// Beware the leading `/` before the path!
const pathToServe = "/static";

module.exports = function (app) {
    app.use(pathToServe, serveStatic(assetsPath));
};
