import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/Main/MainPage";
import WordCard from "./Components/WordCard/WordCard";
import { DictionaryProvider } from "./context/dictionaryContext";

function App() {
  return (
    <DictionaryProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
        <Route path="/_wt/dictionary" element={<MainPage />} />
        <Route path="/_wt/word/:id" element={<WordCard />} />
      </Routes>
    </DictionaryProvider>
  );
}

export default App;
