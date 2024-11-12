import { PokemonProvider } from './context/PokemonContext'
import Router from './routes/Router'

function App() {

  return (
    <>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  )
}

export default App
