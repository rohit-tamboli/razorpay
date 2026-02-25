import React from 'react'
import Products from './components/Products'
import productsData from './components/data'

const App = () => {
  return (
    <Products products={productsData}/>
  )
}

export default App