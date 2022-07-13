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
  selectLanguage: (e: { target: { value: any } }) => {},
});

const Wrapper = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const location = useLocation();
  let currentLang, currentLocale;
  if (location.pathname.indexOf("/fi/") > -1) {
    currentLang = "fi";
    currentLocale = Finnish;
  } else {
    currentLang = "en";
    currentLocale = English;
  }
  const [locale, setLocale] = useState(currentLang);
  const [messages, setMessages] = useState(currentLocale);

  function selectLanguage(e: { target: { value: any } }) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
      navigate(`/blog`, { replace: true });
    } else {
      setMessages(Finnish);
      navigate(`/${newLocale}/blog`, { replace: true });
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <Helmet
        htmlAttributes={{
          lang: locale,
        }}
      >
        <meta charSet="utf-8" />
      </Helmet>
      <IntlProvider messages={messages} locale={locale}>
        <FullSize>{props.children}</FullSize>
      </IntlProvider>
    </Context.Provider>
  );
};

export const FullSize = styled("div", {
  width: "100%",
  height: "100%",
});

export default Wrapper;
