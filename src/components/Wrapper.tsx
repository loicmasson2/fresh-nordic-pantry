import React, { useState } from "react";
import { navigate } from "gatsby";
import { IntlProvider } from "react-intl";
import French from "../intl/fr.json";
import English from "../intl/en.json";
import Finnish from "../intl/fi.json";
import { styled } from "../../stitches.config";
export const Context = React.createContext("en");

const getinitialState = () => {
  let currentLang, currentLocale;
  currentLang = "en";
  currentLocale = English;
  // NOTE FOR LATER
  // USE HTML LANG INSTEAD
  // if (window.location.href.indexOf("/fr/") > -1) {
  //   currentLang = "fr";
  //   currentLocale = French;
  // }
  //
  // if (window.location.href.indexOf("/fi/") > -1) {
  //   currentLang = "fi";
  //   currentLocale = Finnish;
  // }
  return { currentLocale, currentLang };
};

const Wrapper = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const { currentLocale, currentLang } = getinitialState();
  const [locale, setLocale] = useState(currentLang);
  const [messages, setMessages] = useState(currentLocale);
  function selectLanguage(e: { target: { value: any } }) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      if (newLocale === "fr") {
        setMessages(French);
      } else {
        setMessages(Finnish);
      }
    }
    navigate(`/${newLocale}/blog`, { replace: true });
  }
  return (
    <Context.Provider value={{ locale, selectLanguage }}>
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
