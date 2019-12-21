import React from 'react';
import Typed from 'react-typed';


export default function Home(props) {
  return (
    <div className="container text-center">
<h1 className="mt-5 mb-3">
<Typed
                    strings={["Hi! I'm Beta"]}
                    typeSpeed={40}
                />
</h1>
<br/>
<h4 className="mb-3">
<Typed
                    strings={["I've got bitcoin rates for over 150 countries worldwide"]}
                    typeSpeed={30}
                    startDelay= {2500}
                    cursorChar={''}
                />
</h4>
<br/>

<h4>
<Typed
                    strings={["Click on any of the currencies on the left to get their latest bitcoin rates"]}
                    typeSpeed={10}
                    startDelay= {6000}
                    cursorChar={''}
                />
</h4>

<div className="bottom float-bottom ">
<h6>

With love from <a target="_blank" href="https://github.com/adedaniel">adedaniel</a>
</h6>


<p className="m-0">Wanna reach out?</p>
<a target="_blank" href="https://twitter.com/ijebu_developer" className="text-decoration-none">
<i className="fa icon blue fa-twitter-square" aria-hidden="true"></i>&nbsp;&nbsp;
</a>
<a target="_blank" className="text-decoration-none" href="tel:+2348104172477">
<i className="fa text-secondary icon fa-phone-square" aria-hidden="true"></i>&nbsp;&nbsp;
</a>
<a target="_blank" className="text-decoration-none" href="mailto:adetoladaniel693@gmail.com">
<i className="fa text-danger icon fa-envelope-square" aria-hidden="true"></i>
</a>
<br/>
<small>API from <a target="_blank" href="https://www.coindesk.com/">Coindesk</a></small>
<br/>
<small>Theme from <a target="_blank" href="https://bootswatch.com/">Bootswatch</a></small>

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

.icon{

    font-size: 50px !important;
    

}
`}
</style>
</div>

  );
}
