import { IoClose } from 'react-icons/io5'
import { ContainerMenuMobile } from './style'
import { 
  BsGithub, 
  BsLinkedin,
  BsWhatsapp
} from 'react-icons/bs'
import { useContext, useEffect } from 'react'
import { GeneralContext } from '../../context/GeneralContext'

const MenuMobile = () => {

  const {menuIsVisible, setMenuIsVisible} = useContext(GeneralContext);

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])

  return (
    <ContainerMenuMobile isVisible={menuIsVisible}>
      <IoClose size={45} className='close' onClick={() => setMenuIsVisible(false)}/>
      <nav>
        <a href="https://wa.me/5592994136127" target="_blank" className="wpp"><BsWhatsapp/> whatsapp</a>
        <a href="https://github.com/ingleson/" target="_blank" className="gh"><BsGithub/> GitHub</a>
        <a href="https://www.linkedin.com/in/jose-ingleson/" target="_blank" className="lk"><BsLinkedin/> Linkedin</a>
      </nav>
    </ContainerMenuMobile>
  )
}

export default MenuMobile