var React = require("react");
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
var Main = require("Main");
 
require("style!css!foundation-sites/dist/css/foundation.min.css");

// init foundation
$(document).foundation();

require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Router history={hashHistory}>
    {/* the "path" prop tells it where the root of the site is
        and the "component"" prop tells it which compenent to show when at the root */}
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById("app")
);
