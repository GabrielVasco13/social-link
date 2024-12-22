import "./App.css";
import Card from "./components/Card";
import { LanguageProvider } from "./components/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Card />
      </LanguageProvider>
    </div>
  );
}

export default App;
