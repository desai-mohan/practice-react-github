import React, { createContext } from "react";
import { useContext } from "react";
export const practicecontext = createContext();
console.log(practicecontext);
const App = () => {
  const { count } = useContext(practicecontext);
  console.log(count);
  return <div>desai_mohan_reddy</div>;
};

export default App;
