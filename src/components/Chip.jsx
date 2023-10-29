import React, { useContext } from 'react'
import { FilterContext } from '../filtersContext'

const Chip = () => {
    const filters = useContext(FilterContext);
  return (
    <div>
      Chip
      {JSON.stringify(filters)}
    </div>
  )
}

export default Chip
