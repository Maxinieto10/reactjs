import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  console.log("se renderiza el app")

  const [valor, setValor] = useState(0)

  return (
    <>
    <NavBar valor = {valor} />
{/*     <div>
      <h1>hola</h1>
      <Button text="Mi primer boton" color="red"/>
      <Button text="Mi segundo boton" color="green"/>
      <Button text="Mi tercer boton" color="blue"/>
    </div> */}
    <ItemListContainer mensaje="estamos resolviendo la entrega" fn={setValor}/>
    </>
  )
}

export default App
