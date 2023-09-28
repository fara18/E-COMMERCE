import React from 'react'
import {  useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import s from './CatalogSection.module.css'
import CatalogSectionItem from './CatalogSectionItem';
export default function CatalogSection() {
    const categories = useSelector(state=>state.categories)
    const catalog =categories.slice(0,4)
    
  return (
   
      <div className={s.catalog}>
        <Link to='/catalog'>
         <h1>Catalog</h1>
         </Link>
<div className={s.catalogContainer}>



  <div className={s.catalogWrapper}>
    
    <ul className={s.catalogItems}>
          {
            catalog.map(el=> <CatalogSectionItem key={el.id} category={el} {...el} />)
          }
      </ul>
      </div>
        
        
        </div>
      </div>
    
    
  )
}
//  <div >
//       {/* <h1>Catalog</h1>

//       <div className="catalogContainer">
//         <div className="catalogWrapper">
          
//           <ul className="catalogItems"> */}
//             {
//             categories.map((el) => (
//               <Item key={el.id} category={el} {...el} />
//             ))
//             }
//           {/* </ul>
        
        
//         </div>
//       </div> */}
//     </div>