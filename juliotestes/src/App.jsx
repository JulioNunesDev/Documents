import { useEffect, useState } from "react";

import "./App.css";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize(window.innerWidth)
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };

  }, []);
  return windowSize;
};




function Count() {

  const [count, setCount]=useState(0)

  useEffect(()=>{
    const i = setInterval(()=>{
      setCount((prev)=> prev + 1)
    }, 1000)

    return ()=>{
    clearInterval(i)
    }
  },[])

  return count
 
}

function App() {

 

  return (
    <>
{Count()}
<p> Largura Tela:
{useWindowSize()}

</p>
 </>
 
 )
}

export default App;
