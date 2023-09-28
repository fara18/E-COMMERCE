import React from 'react'
import { Button } from '../Button/Button'
import './HomeSection.css'
import { Link } from 'react-router-dom'
export default function HomeSection() {
  return (
    
        <div className='hero-container'>
     
      <h1>TITLE</h1>
      <p>TEXT</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='*'
        >
         Txt
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          link='/sale'
        >
         Sale
        </Button>
      
      </div>
    </div>
  
  )
}
