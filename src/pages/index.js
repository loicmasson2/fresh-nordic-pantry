import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Heading, PageLayout } from "../components";
import Wrapper from "../components/Wrapper";
import { Link } from "gatsby";
// markup
const IndexPage = () => {
    return (React.createElement(Wrapper, null,
        React.createElement("main", null,
            React.createElement(PageLayout, null,
                React.createElement(Heading, null, "HELLO"),
                React.createElement(FormattedMessage, { id: "title", defaultMessage: "I am an example" }),
                React.createElement(Link, { to: "/blog", replace: true }, "Go back")))));
};
export default IndexPage;
