import React from 'react'
import SaleSection from '../../components/SaleSection/SaleSection'
import s from './SalePage.module.css'
import DiscountFilterForms from '../../components/FilterForms/DiscountFilterForms'

export default function SalePage() {
  return (
    <div className={s.salePage} >
      <h1 className={s.sale}>SALE</h1>
      
      <div className={s.filterWrapper}>
      
    <DiscountFilterForms />
      
  
    </div>

     <SaleSection />
    </div>
  )
}
