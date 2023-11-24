import axios from "axios";
import { useEffect, useState } from "react";

export interface ITemplateData {
  [key: string]: IItem[];
}

export interface IItem {
  id: string;
  name: string;
  desc: string;
  categories: string;
}

function useGetWords() {
  const [templateData, setTemplateData] = useState<ITemplateData>({});

  useEffect(() => {
    async function loadData() {
      await axios
        .get("/custom_web_template.html?object_code=dictionary_back")
        .then((data) => {
          setTemplateData(data.data);
        })
        .catch((error) => console.log(error));
    }
    loadData();
  }, []);

  return templateData;
}

export default useGetWords;
