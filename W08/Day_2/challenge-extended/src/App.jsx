import "./App.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { MainContent } from "./body";

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
