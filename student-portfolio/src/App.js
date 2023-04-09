import "./App.css";
import HomeHeader from "../src/components/Header/HomeHeader";
import HomeFooter from "../src/components/Footer/HomeFooter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeHeader />
      </header>

      {/* <footer className="App-footer">
        <HomeFooter />
      </footer> */}
    </div>
  );
}

export default App;
