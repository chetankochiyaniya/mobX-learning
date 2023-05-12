import './App.css'
import UserData from './UserData'
import Home from './components/Home'
function App() {
  const store = new UserData()
  return (
    <div className="App">
      <Home store={store} />
    </div>
  )
}

export default App
