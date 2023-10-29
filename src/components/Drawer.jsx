import React, { useContext } from 'react'
import { FilterContext } from '../filtersContext';

const Drawer = () => {
    const filters = useContext(FilterContext);
  return (
    <div>
      Drawer
      {JSON.stringify(filters)}
    </div>
  )
}

export default Drawer
