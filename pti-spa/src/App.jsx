import reactLogo from './assets/react.svg'
import './App.css'
import CardProduto from './components/CardProduto'
// import Header from './components/Header'
// import Titulo from './components/Titulo'
// import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <Titulo /> */}
      <div>
        <h1 className='titulo'>Popular dishes with delivery</h1>
        <h2 className='subtitulo'>
          Description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>

      <CardProduto />

      {/* <Footer /> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
