import React from 'react'
import Emerging_trends from './Emerging_trends'
import Inventory_management from './Inventory_management'
import Inventory from './Inventory_management'
import Suply___chain from './Suply___chain'

const Pagination_2 = () => {
  return (
    <div>
           <div style={{
          display: "flex",
    justifyContent: "center",
    gap: "3rem",
    margin: "1rem",
    }}>
<Suply___chain/>
  <Emerging_trends/>
  <Inventory_management/>
  </div>
    </div>
  )
}

export default Pagination_2