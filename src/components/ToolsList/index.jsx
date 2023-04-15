import { useContext } from "react";
import { ContainerTools } from "./style";
import { GeneralContext } from "../../context/GeneralContext";


const ToolsList = () => {

  const {techs} = useContext(GeneralContext);
  
  return (
    <ContainerTools id="technologies">
      <h3>Ferramentas que utilizo</h3>
      <ul>
        {techs.map((tech) => (
          <li title={tech.name} key={tech.name}>
            {tech.icon}
          </li>
        ))}
      </ul>
    </ContainerTools>
  )
}

export default ToolsList;