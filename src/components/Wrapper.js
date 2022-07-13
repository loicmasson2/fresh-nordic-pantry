import React, { useState } from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import English from "../intl/en.json";
import Finnish from "../intl/fi.json";
import { styled } from "../../stitches.config";
import { useLocation } from "@reach/router";
export const Context = React.createContext({
    locale: "en",
    selectLanguage: (e) => { },
});
const Wrapper = (props) => {
    const location = useLocation();
    let currentLang, currentLocale;
    if (location.pathname.indexOf("/fi/") > -1) {
        currentLang = "fi";
        currentLocale = Finnish;
    }
    else {
        currentLang = "en";
        currentLocale = English;
    }
    const [locale, setLocale] = useState(currentLang);
    const [messages, setMessages] = useState(currentLocale);
    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "en") {
            setMessages(English);
            navigate(`/blog`, { replace: true });
        }
        else {
            setMessages(Finnish);
            navigate(`/${newLocale}/blog`, { replace: true });
        }
    }
    return (React.createElement(Context.Provider, { value: { locale, selectLanguage } },
        React.createElement(Helmet, { htmlAttributes: {
                lang: locale,
            } },
            React.createElement("meta", { charSet: "utf-8" })),
        React.createElement(IntlProvider, { messages: messages, locale: locale },
            React.createElement(FullSize, null, props.children))));
};
export const FullSize = styled("div", {
    width: "100%",
    height: "100%",
});
export default Wrapper;
