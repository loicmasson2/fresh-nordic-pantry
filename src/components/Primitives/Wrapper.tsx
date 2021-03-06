import React, { useState } from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import English from "../../intl/en.json";
import Finnish from "../../intl/fi.json";
import { styled } from "../../../stitches.config";

import { useLocation } from "@reach/router";
import useSiteMetadata from "../../hooks/use-sitemetadata";

export const Context = React.createContext({
  locale: "en",
  selectLanguage: (language: string) => {},
});

/**
 * Wrapper for head component and
 * contain the translation brain
 *
 */
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
  const { title = "" } = useSiteMetadata();

  const selectLanguage = (language: string) => {
    const newLocale = language;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
      navigate(`/blog`, { replace: true });
    } else {
      setMessages(Finnish);
      navigate(`/${newLocale}/blog`, { replace: true });
    }
  };

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <Helmet
        htmlAttributes={{
          lang: locale,
        }}
      >
        <meta charSet="utf-8" />
        <title>{title}</title>
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
