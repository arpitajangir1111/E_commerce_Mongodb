import React, { useState } from 'react'
import {ecomContext} from './AllProducts'

function CategoryRibbon() {
    const {allCategories, filterCategory} = useState(ecomContext);
  return (
    <div className='categories'>
        <ul>
           {allCategories.map(()=>{
            return(
                <li>
                    <Link to = '#' onClick = {(e) => filterCategory(e,category.name)}></Link>
                </li>
            )
           })} 
        </ul>
    </div>
  )
}

export default CategoryRibbon