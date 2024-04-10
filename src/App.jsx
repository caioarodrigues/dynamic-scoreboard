import "./index.css"
import { Card } from './Components/Card/Index.module'
import { CardsList } from "./Components/CardsList/Index.module"
import { useCardsContext } from "./Context/CardsContext"
import { useCallback } from "react"

function App() {
  const { getCards, createCard } = useCardsContext()

  const _createCard = useCallback((name) => {
    createCard({ name })
  }, [getCards])

  _createCard('João')
  console.log(getCards())
  return (
    <div className="bg-slate-400 h-screen">
      <CardsList />
      <Card name='João' />
      <Card name='Maria' />  
      <Card name='José' />  
    </div>
  )
}

export default App
