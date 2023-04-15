import React from 'react'
import { ContainerAboutMe } from './style';

const AboutMe = () => {
  return (
    <ContainerAboutMe>
      <div className="about-me">
        <i>Oi, meu nome é</i>
        <h1>JOSÉ INGLESON</h1>
        <h2>Sou um desenvolvedor Full-Stack Web.</h2>
        <p><i>Participei de inumeros projetos desenvolvendo minhas habilidades e expandindo meu conhecimento, estudando em um ambiente que simulava o profissional o que me tornou capacitado para lidar com diversos problemas e me adaptar.</i></p>

        <div className="btn-box">
          <a href="#projects">Projetos</a>
          <a href="#technologies">Tecnologias</a>
        </div>
      </div>
    </ContainerAboutMe>
  )
}

export default AboutMe;