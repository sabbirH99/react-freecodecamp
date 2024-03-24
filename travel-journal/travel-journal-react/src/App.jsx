import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import data from './data'


function App() {

  const cards = data.map(item => {
    return (
      <Card

        key={item.key}
        {...item}

      />
    )
  })

  return (
    <>
    <div className="header">
      My Travel Journal
    </div>
      <div className="card--wrapper">
        {cards}
      </div>
    </>
  )
}

export default App
