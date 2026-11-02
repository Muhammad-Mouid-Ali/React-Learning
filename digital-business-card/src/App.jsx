import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <main className='card'>
        <Info/>
        <div className='card-body'>
          <section><About/></section>
          <section><Interests/></section>
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default App
