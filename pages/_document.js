// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import React from "react";
import ErrorPage from 'next/error'
// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = 
    (Document.getInitialProps
          ? await Document.getInitialProps(ctx)
          : null) || {}
    ;

    if (initialProps.statusCode && ctx.res) {
        ctx.res.statusCode = initialProps.statusCode
      }
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
        <style jsx>
      
      {`
       
      body {

overflow : hidden; 
}
      `}
      </style>
      </Html>
     
    );
  }
}
export default MyDocument;
