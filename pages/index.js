import Fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar";
import Axios from "axios";
import React from "react";
import ErrorPage from './_error'
import Link from "next/link";
import Prices from "../components/Prices";
import Head from "next/head";

const Index = (props) => (



  <React.Fragment>
  {props.bpi ? (  <div className="body">
      <Prices bpi={props.bpi} />
    </div>
  ) : <ErrorPage/>}
  
    <style jsx>{`
    .body{
      overflow: hidden 
    }
    `}
    
    </style>
  </React.Fragment>
);
Index.getInitialProps = async () => {
 
 try {
  const data = await fetch(
    "https://api.coindesk.com/v1/bpi/supported-currencies.json"
  );
  console.log(data);
  
  const result = await data.json();

  return {
    bpi: result
  };
 } catch (error) {
   console.log(error);
 }
 
  

};

export default Index;
