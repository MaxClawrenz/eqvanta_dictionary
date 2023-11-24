import { useContext, useEffect, useState } from "react";
import Word from "./Word";
import { DictionaryContext } from "../../../context/dictionaryContext";
import { IItem } from "../../../hooks/useGetWords";

interface IResultBlock {
  value: string;
}

function ResultBlock({ value }: IResultBlock) {
  const { data, textValue, categoryId } = useContext(DictionaryContext);
  const [filteredData, setFilteredData] = useState<IItem[]>([]);

  useEffect(() => {
    if (data && data[value]) {
      setFilteredData(
        data[value].filter((element) => {
          if (categoryId === "0") {
            return element.name.toLowerCase().includes(textValue.toLowerCase());
          } else {
            return (
              element.name.toLowerCase().includes(textValue.toLowerCase()) &&
              element.categories.includes(categoryId)
            );
          }
        })
      );
    }
  }, [textValue, data, value, categoryId]);

  if (data && data[value]) {
    return (
      <div className="ResultBlock">
        <div className="headerChar">{value}</div>
        <svg
          className="headerBreak"
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="2"
          viewBox="0 0 268 2"
          fill="none"
        >
          <path
            d="M1 1L267 0.999977"
            stroke="black"
            strokeOpacity="0.1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="blockChar">
          {filteredData.map((char) => (
            <Word key={char.id} name={char.name} id={char.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ResultBlock;
