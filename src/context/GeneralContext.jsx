import { createContext, useState } from "react";

export const GeneralContext = createContext({});

function GeneralProvider ({children}) {
  
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  
  return (
    <GeneralContext.Provider value={
      {
        menuIsVisible,
        setMenuIsVisible
      }
    }>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider;