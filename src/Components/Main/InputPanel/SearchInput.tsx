import { ChangeEvent, useContext, useEffect } from "react";
import { DictionaryContext } from "../../../context/dictionaryContext";

function SearchInput() {
  const { setSelectedChar } = useContext(DictionaryContext);

  const { textValue, setTextValue } = useContext(DictionaryContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTextValue(event.target.value.toUpperCase());
  }

  useEffect(() => {
    if (textValue.length > 0) {
      setSelectedChar(textValue.split("")[0]);
    } else {
      setSelectedChar("");
    }
  }, [setSelectedChar, textValue]);

  return (
    <div className="SearchBlock">
      <input
        value={textValue}
        onChange={handleChange}
        className="SearchInput"
        type="text"
        name="SearchInput"
        placeholder="Поиск"
      />
      <a
        className="addWordLink"
        href="/_wt/request_create/request_type_id/7075545079880228850/doc_id/7075573254342847286"
      >
        <div className="addWordButton">+ Добавить слово</div>
      </a>
    </div>
  );
}

export default SearchInput;
