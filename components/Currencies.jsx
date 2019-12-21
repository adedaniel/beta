import React from 'react';

export default function Currencies(props) {
  return (
    <a
                  key={props.currency}
                className={`nav-link pl-4 ${props.active}`}
                  id={`v-pills-${props.currency}-tab`}
                  data-toggle='pill'
                  href={`#v-pills-${props.currency}`}
                  role='tab'
                  aria-controls={`v-pills-${props.currency}`}
                  aria-selected='true'
                >
                  {props.country}
                  <style jsx>
        {`
        .nav-link.active{
          background-color: #17a2b8 !important;
        }
`}
</style>
                </a>
  );
}
