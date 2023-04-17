import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import MenuMobile from "./components/MenuMobile"
import ToolsList from "./components/ToolsList"
import './styles/App.css'
import './styles/reset.css'

function App() {

  return (
    <div className="App">
      <MenuMobile/>
      <Header/>
      <AboutMe/>
      <ToolsList/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
