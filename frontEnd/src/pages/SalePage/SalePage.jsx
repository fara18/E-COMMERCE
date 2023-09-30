import React from 'react'
import SaleSection from '../../components/SaleSection/SaleSection'
import s from './SalePage.module.css'
export default function SalePage() {
  return (
    <div className={s.salePage} >
      <h1 className={s.sale}>SALE</h1>

     <SaleSection />
    </div>
  )
}
