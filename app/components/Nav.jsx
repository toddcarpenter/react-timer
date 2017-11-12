var React = require("react");
var {Link, IndexLink} = require("react-router");

// Simple presentational components don't need React.createClass()
// This is a stateless functional component
var Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                            Timer
                        </IndexLink>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                            Countdown
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">Created by <a href="http://toddl.es" target="_blank">Toddles</a></li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Nav;