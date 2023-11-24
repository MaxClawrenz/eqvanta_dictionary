import { useContext } from "react";
import { DictionaryContext } from "../../../context/dictionaryContext";
import ResultBlock from "./ResultBlock";

function ResultBody() {
  const { dictionaryExample, selectedChar, categoriesAlphabet, categoryId } =
    useContext(DictionaryContext);
  const filteredArray = [selectedChar];

  return (
    <div className="ResultBody">
      {!selectedChar &&
        categoryId === "0" &&
        dictionaryExample.map((char: string) => (
          <ResultBlock key={char} value={char} />
        ))}
      {!selectedChar &&
        categoryId !== "0" &&
        categoriesAlphabet.map((char: string) => (
          <ResultBlock key={char} value={char} />
        ))}
      {selectedChar &&
        filteredArray.map((char: string) => (
          <ResultBlock key={char} value={char} />
        ))}
    </div>
  );
}

export default ResultBody;
