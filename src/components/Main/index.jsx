import React from 'react'
import { ContainerMain } from './styles';
import AsideDesktop from '../AsideDesktop';
import ProjectList from '../ProjectList';

const Main = () => {
  return (
    <ContainerMain>
      <AsideDesktop/>
      <ProjectList/>
    </ContainerMain>
  )
}

export default Main;