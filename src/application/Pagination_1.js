import React from 'react'
import Brand_awareness from './Brand_awareness';
import Logistics from './Logistics';

import Market_place from './Market_place';


const Pagination_1 = () => {
  return (
    <div>
           <div style={{
          display: "flex",
    justifyContent: "center",
    gap: "3rem",
    margin: "1rem",
    }}>
<Market_place/>
  <Logistics/>
  <Brand_awareness/>
  </div>
    </div>
  )
}

export default Pagination_1