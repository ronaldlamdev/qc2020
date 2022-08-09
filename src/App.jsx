import Navbar from "./assets/components/Navbar"
import About from "./assets/components/About"
import Matches from "./assets/components/Matches"
import Standings from "./assets/components/Standings"
import Highlights from "./assets/components/Highlights"


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <About />
      <Matches />
      <Standings />
      {/* <Highlights /> */}
    </div>
  )
}

export default App
