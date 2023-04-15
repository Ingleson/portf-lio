import { createContext, useState } from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiSass,
  DiPostgresql,
  DiNodejs,
  DiPython,
  DiDjango,
  DiGit
} from 'react-icons/di';
import {
  SiTypescript,
  SiStyledcomponents,
  SiExpress
} from 'react-icons/si'

export const GeneralContext = createContext({});

function GeneralProvider ({children}) {
  
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const techs = [
    {
      name: 'HTML',
      icon: <DiHtml5/>
    },
    {
      name: 'CSS',
      icon: <DiCss3/>
    },
    {
      name: 'JavaScript',
      icon: <DiJavascript1/>
    },
    {
      name: 'Node',
      icon: <DiNodejs/>
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript title="TypeScript"/>
    },
    {
      name: 'React',
      icon: <DiReact/>
    },
    {
      name: 'Styled-components',
      icon: <SiStyledcomponents title="Styled-components"/>
    },
    {
      name: 'Python',
      icon: <DiPython/>
    },
    {
      name: 'Django',
      icon: <DiDjango/>
    },
    {
      name: 'Express',
      icon: <SiExpress title="Express"/>
    },
    {
      name: 'SASS',
      icon: <DiSass/>
    },
    {
      name: 'PostgreSQL',
      icon: <DiPostgresql/>
    },
    {
      name: 'Git',
      icon: <DiGit/>
    },
  ]
  const projects = [
    {
      title: 'KenzieHub',
      languages: ['HTML', 'Css-in-Js', 'JavaScript', 'React'],
      descrip: 'Aplicação para anotações de tecnologias, voltado para que devs possam anotar suas tecnologias e niveis de conhecimento, além de poder se cadastrar com o seu nivel de desenvolvedor.',
      gitCode: 'https://github.com/Ingleson/KenzieHub',
      appCode: 'https://kenzie-hub-vert-ten.vercel.app/'
    },
    {
      title: 'Snack Shop',
      languages: ['HTML', 'Css-in-Js', 'JavaScript', 'React'],
      descrip: 'Aplicação para compra de lanches e acompanhamentos. Faça seu pedido e veja o valor que está seu pedido, adicionando e retirando itens do carrinho.',
      gitCode: 'https://github.com/Ingleson/Hamburgueria',
      appCode: 'https://hamburgueria-eta-three.vercel.app/'
    },
    {
      title: 'NuKenzie',
      languages: ['HTML', 'CSS', 'JavaScript', 'React'],
      descrip: 'Aplicação para gerenciamento de despesas. Adicione ganhos e gastos e tenha seu valor totalizado para manter controle de suas finanças.',
      gitCode: 'https://github.com/Ingleson/NuKenzie',
      appCode: 'https://nu-kenzie-eta-eight.vercel.app/'
    },
    {
      title: 'DevQuiz',
      languages: ['HTML', 'SASS', 'JavaScript'],
      descrip: 'Pequeno quiz que testa o conhecimento básico do desenvolvedor. Responda as perguntas e no final terá sua taxa de aproveitamento, além de saber se respondeu certo ou errado a cada pergunta.',
      gitCode: 'https://github.com/Ingleson/mini-quiz',
      appCode: 'https://mini-quiz-lilac.vercel.app/'
    },
    {
      title: 'TransactionApp',
      languages: ['HTML', 'SASS', 'JavaScript','React'],
      descrip: 'Aplicação que faz uma simulação de antecipação. Com esta aplicação você podera prever qual sua taxa de recimento em até 3 meses.',
      gitCode: 'https://github.com/Ingleson/TransactionApp',
      appCode: 'https://transaction-app-five.vercel.app/'
    },
    {
      title: 'NoteCtts',
      languages: ['HTML', 'Css-in-Js', 'JavaScript','React', 'TypeScript', 'Node', 'Express', 'PostgreSQL'],
      descrip: 'Aplicação full-stack para gerenciamento de contatos. Além de precisar criar sua conta, você pode adicionar novos contatos, editar e excluir, tanto o proprio usuário quanto os seus contatos criados.',
      gitCode: 'https://github.com/orgs/Note-Ctts/repositories',
      appCode: 'https://note-ctts.vercel.app/'
    },
  ]
  
  return (
    <GeneralContext.Provider value={
      {
        menuIsVisible,
        setMenuIsVisible,
        techs,
        projects
      }
    }>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider;