import React from "react";
import NextHead from "next/head";

const Head: React.FC = () => (
  <NextHead>
    <title>Random Cat</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />

    <link
      href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap"
      rel="stylesheet"
    />
  </NextHead>
);

export default Head;
