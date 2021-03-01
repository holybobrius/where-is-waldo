import Header from "./components/Header"
import Game from "./components/Game"
import ToFind from "./components/ToFind"
import Timer from "./components/Timer"
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Game />
        <ToFind />
        <Timer />
      </main>
    </div>
  );
}

export default App;
