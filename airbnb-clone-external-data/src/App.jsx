// import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Navbar'
import Hero from './components/Hero'
import Card from "./components/Card"
import data from './data'

console.log(data);

function App() {

  const cards = (data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  }))


  return (
    <div className='page-wrapper'>
      <Nav />
      <Hero />

      <section className="card--wrapper">
        {cards}
      </section>
    </div>
  )
}

export default App
