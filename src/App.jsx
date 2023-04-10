import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import MenuMobile from "./components/MenuMobile"
import './styles/App.css'
import './styles/reset.css'

function App() {

  return (
    <div className="App">
      <MenuMobile/>
      <Header/>
      <AboutMe/>
    </div>
  )
}

export default App
