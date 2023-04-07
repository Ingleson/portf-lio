import avatar from "../../assets/my_photo-3.jpg";
import {
  BsGithub,
  BsLinkedin,
  BsList
} from 'react-icons/bs';
import { Container } from "./style";
import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";

const Header = () => {

  const {setMenuIsVisible} = useContext(GeneralContext);

  return (
    <Container>
      <div className="user-box">
        <img src={avatar} alt="user-profile" />
        <p>Ingleson Maciel</p>
      </div>
      <nav className="social-box">
        <a href="https://wa.me/5592994136127" target="_blank" className="wpp">Falar no whatsapp</a>
        <a href="https://github.com/ingleson/" target="_blank" className="gh"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/jose-ingleson/" target="_blank" className="lk"><BsLinkedin/></a>
      </nav>
      <span><BsList size={35} onClick={() => setMenuIsVisible(true)}/></span>
    </Container>
  )
}

export default Header;