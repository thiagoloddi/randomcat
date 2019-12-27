import React from "react";
import NextApp from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Colors from "../utils/Colors";
import Head from "./components/meta/Head";
import Page from "./components/layout/Page";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Bebas Neue", "Arial", "sans-serif";
    font-size: 16px;
    color: rgba(0, 0, 0, 0.87);
    line-height: 1;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  ul, ol, li {
    list-style-type: none;
    padding: 0;
  }
`;

type AppState = {
  theme: {
    colors: {
      bgGradient: string;
    };
  };
};

class App extends NextApp<{}, {}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      theme: {
        colors: {
          bgGradient: Colors.randomGradient()
        }
      }
    };
  }

  componentDidMount(): void {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Head />
        <GlobalStyle />
        <Page render={(): React.ReactElement => <Component {...pageProps} />} />
      </ThemeProvider>
    );
  }
}

export default App;
