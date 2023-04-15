import React, { useContext } from 'react'
import { ContainerProject } from './style';
import { GeneralContext } from '../../context/GeneralContext';

import { FaShare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const ProjectList = () => {

  const { projects } = useContext(GeneralContext);
  
  return (
    <ContainerProject id='projects'>
      <i>Projetos</i>
      <h3>Originalidade e <strong>dedicação</strong> em cada detalhe</h3>
      <ul className='ul-project'>
        {projects.sort(() => {return Math.random() - 0.5}).map((project, index) => (
          <li key={index}>
            <h4>{project.title}</h4>
            <div className='lang-box'>
              <i>Linguagens:</i>
              {project.languages.map((lang) => (
                <span>{lang}</span>
              ))}
            </div>
            <p>{project.descrip}</p>
            <div className='btn-box'>
              <a href={project.gitCode} target='_blank'><BsGithub/> Github Code</a>
              <a href={project.appCode} target='_blank'><FaShare/> aplicação</a>
            </div>
          </li>
        ))}
      </ul>
    </ContainerProject>
  )
}

export default ProjectList;