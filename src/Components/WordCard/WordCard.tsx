import { useParams } from "react-router-dom";
import WordHeader from "./WordHeader";
import WordTitle from "./WordTitle";
import { useContext, useEffect, useState } from "react";
import WordDesc from "./WordDesc";
import { DictionaryContext } from "../../context/dictionaryContext";

interface ICurItem {
  name: string;
  id: string;
  desc: string;
}

function WordCard() {
  const { id } = useParams();
  const { data } = useContext(DictionaryContext);
  const [curItem, setCurItem] = useState<ICurItem>();

  useEffect(() => {
    if (data) {
      for (const key in data) {
        const findItem = data[key].find((item) => item.id === id);
        if (findItem) {
          setCurItem(findItem);
        }
      }
    }
  }, [data, id]);

  return (
    <>
      <WordHeader />
      <WordTitle name={curItem?.name} />
      <WordDesc desc={curItem?.desc} />
    </>
  );
}

export default WordCard;
