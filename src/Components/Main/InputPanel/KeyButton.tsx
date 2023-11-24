import { useContext } from "react";
import { DictionaryContext } from "../../../context/dictionaryContext";

interface IKeyButton {
  value: string;
}

function KeyButton({ value }: IKeyButton) {
  const { setSelectedChar, setTextValue, selectedChar } =
    useContext(DictionaryContext);

  function handleclick() {
    if (value === "Все") {
      setTextValue("");
      setSelectedChar("");
    } else {
      setTextValue("");
      setTimeout(() => {
        setSelectedChar(value);
      }, 5);
    }
  }

  return (
    <div
      onClick={handleclick}
      className={
        value === "Все" && selectedChar === ""
          ? `KeyButton keyAll KeyButtonSelected`
          : value === "Все" && selectedChar !== ""
          ? `KeyButton keyAll`
          : value !== "Все" && selectedChar === value
          ? `KeyButton KeyButtonSelected`
          : `KeyButton`
      }
    >
      {value}
    </div>
  );
}

export default KeyButton;
