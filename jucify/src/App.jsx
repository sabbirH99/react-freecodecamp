// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import data from './data'
import Card from './components/card';

function App() {

  const cards = data.map(function(item){
    return (
      <Card 
        key={item.id}
        {...item}
      />
    );
  });

  



  return (
    <>
      <Header />
      {cards}
    </>
  )
}

export default App
