
import Axios from "axios";


import React, { Component } from 'react'

export default class Rate extends Component {
componentDidMount() {
  // console.log(this.props.currency);


  Axios.get(
          `https://api.coindesk.com/v1/bpi/currentprice/${this.props.currency}.json`
        ).then((result) => {
          // let time=result.data.time;
          var d = new Date().toString();
          // console.log(time.updated);
          this.setState({ date: d });
          // console.log(countries);


          var secondKey = Object.keys(result.data.bpi)[1]; //fetched the key at second index
          if (result.data.bpi[secondKey]) {
            let currencyName = result.data.bpi[secondKey].code;
            this.setState({ currency: currencyName});
            let eachRate = result.data.bpi[secondKey].rate;

            
            this.setState({ bpi: eachRate });
          }
        })
}

state={
  bpi: "",
  date: "",
  currency: ""
}

  render() {
    return (
       <React.Fragment>

      
       <div
                className={`tab-pane fade ${this.props.showActive}`}
                id={`v-pills-${this.props.currency}`}
                role='tabpanel'
                aria-labelledby={`v-pills-${this.props.currency}-tab`}
              >
              <div className="container text-center mt-5">
              <h3 className="mt5">
              1 Bitcoin 
               </h3>
               <h4>
                is equivalent to
                </h4>
              <h1 className="mt-5 mb-3 text-info">
              {this.state.bpi}  {this.state.currency}
              </h1>
              <br/>
              <h4 className="mb-3">
             as at 
              </h4>
              <h4 className="mb-3">
              {this.state.date}
              </h4>
              <br/>
              
              
              
              <div className="bottom float-bottom ">
              <h6>
              
              With love from <a target="_blank" href="https://github.com/adedaniel">adedaniel</a>
              </h6>
              
              
             
              </div>
              <style jsx>
              {`
              .bottom{
                  position: absolute;
                  bottom: 0;
                  width: 67vw
              }
              .blue{
                  color:  #17a2b8
              }
              .mt5{
                margin-top: 65px
              }
              .icon{
              
                  font-size: 50px !important;
                  
              
              }
              `}
              </style>
              </div>
       
              
              </div>
    <div>
    </div>
  </React.Fragment>
    )
  }
}
