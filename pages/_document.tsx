import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import NextDocument, { DocumentInitialProps } from "next/document";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/styles";

export default class Document extends NextDocument {
  static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): void =>
        originalRenderPage({
          enhanceApp: (App: React.ElementType): React.ElementType => (
            props
          ): React.ReactElement =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />)
            )
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </Fragment>
        ]
      };
    } catch (err) {
      ctx.renderPage = (): React.ReactElement => (
        <div>There has been an unexpected error. Please try again.</div>
      );
      return null;
    } finally {
      styledComponentSheet.seal();
    }
  }
}
