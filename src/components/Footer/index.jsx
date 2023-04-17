import React from 'react'
import { ContainerFooter } from './style';
import { 
  MdEmojiPeople,
  MdKeyboardArrowUp
} from 'react-icons/md'

const Footer = () => {
  return (
    <ContainerFooter>
      <button onClick={() => window.scrollTo(0,0)}><MdKeyboardArrowUp/></button>
      <p><MdEmojiPeople/> Obrigado pelo acesso</p>
      <p>Jovemtksstranger@gmail.com</p>
    </ContainerFooter>
  )
}

export default Footer;