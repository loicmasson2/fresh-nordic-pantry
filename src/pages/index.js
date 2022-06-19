import * as React from "react";
import { Heading, PageLayout } from "../components";
import Wrapper from "../components/Wrapper";
import { Link } from "gatsby";
// markup
const IndexPage = () => {
    return (React.createElement(Wrapper, null,
        React.createElement("main", null,
            React.createElement(PageLayout, null,
                React.createElement(Heading, null, "HELLO"),
                React.createElement(Link, { to: "/blog", replace: true }, "Go to blog")))));
};
export default IndexPage;
