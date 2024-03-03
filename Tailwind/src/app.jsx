import { useState } from 'preact/hooks'

import './app.css'
import { RevenueCard } from './components/RevenueCard';

export function App() {
// things  to understand. flex,grid,
// font size background/font colors..
// concept of border radius,
// vanilla to tailwind..
  return (
    <>
      <div className='grid grid-cols-4'>
        <RevenueCard title={"Amount Pendig"} 
          amount={"92,312.20"}
          orderCount={13}
        />
      </div>
    </>
  ) 
}
export default App;