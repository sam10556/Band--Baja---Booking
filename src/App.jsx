import './App.css'
import PartyPopper from './components/PartyPopper'

function App() {

  return (
    <>
    <div className="min-h-screen bg-black flex items-center justify-center">
      <header className="text-center">
        <div className="flex items-center justify-center space-x-4">
          <h1 className="text-6xl font-bold text-white tracking-widest cursor-pointer">
            Band Baja Barat
          </h1>
          <PartyPopper/>
        </div>
      </header>
    </div>
    </>
  )
}

export default App
