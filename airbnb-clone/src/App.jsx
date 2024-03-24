// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Navbar'
import Hero from './components/Hero'
import Card from "./components/Card"

function App() {
  return (
    <div className='page-wrapper'>
      <Nav />
      <Hero />
      <section className="card--wrapper">
        <Card
          image="../src/assets/card-image-1.png"
          cardStat="In Stock"
          rating="3"
          reviews="5"
          location="CANADA"
          title="Life lessons with Katie Zaferes"
          price="From $223"
        />
        <Card
          image="../src/assets/card-image-2.png"
          cardStat="sold out"
          rating="5"
          reviews="6"
          location="USA"
          title="Learn wedding photography"
          price="From $136"
        />
        <Card
          image="../src/assets/card-image-3.png"
          cardStat="sold out"
          rating="5"
          reviews="6"
          location="USA"
          title="Group Mountain Biking"
          price="From $136"
        />
      </section>
    </div>
  )
}

export default App
