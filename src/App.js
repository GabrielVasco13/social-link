import "./App.css";
import Card from "./components/Card";
import { LanguageProvider } from "./LanguageContext";

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
