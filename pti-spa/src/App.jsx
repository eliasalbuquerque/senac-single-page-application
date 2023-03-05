import './App.css'
import CardProduto from './components/CardProduto'
import Header from './components/Header'
import Titulo from './components/Titulo'
import Footer from './components/Footer'

function App() {
  const dishes01 = {
    nome: 'Beef Burguer',
    descricao: 'Juicy beef patty served on a bun..',
    valor: '12.00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNr83Gs2YzJiE4B12zJNyvvoJh9qxKl3fTw&usqp=CAU',
  };
  const dishes02 = {
    nome: 'Pancakes',
    descricao: 'Fluffy, round cakes made from batter.',
    valor: '15.00',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/002/482/982/small_2x/breakfast-pancakes-hand-draw-and-line-style-icon-design-free-vector.jpg',
  };
  const dishes03 = {
    nome: 'French Fries',
    descricao: 'Thin, crispy slices of fried potatoes.',
    valor: '10.00',
    img: 'https://thumbs.dreamstime.com/b/french-fries-flying-to-paper-box-sketch-style-hand-drawn-illustration-fried-potato-fast-food-retro-artwork-vector-image-isolated-256585715.jpg',
  };

  return (
    <div className="App">
      <Header />
      <Titulo />
      <section>
        <section className='container'>
          <CardProduto dishes={dishes01} />
          <CardProduto dishes={dishes02} />
          <CardProduto dishes={dishes03} />
          <CardProduto dishes={dishes01} />
          <CardProduto dishes={dishes02} />
          <CardProduto dishes={dishes03} />
          <CardProduto dishes={dishes01} />
          <CardProduto dishes={dishes02} />
          <CardProduto dishes={dishes03} />
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App