import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import useGetWords, { ITemplateData } from "../hooks/useGetWords";

export interface IProviderProps {
  children: ReactNode;
}

interface IDictionaryContext {
  data: ITemplateData;
  dictionaryExample: string[];
  filteredData: ITemplateData;
  selectedChar: string;
  setSelectedChar: Dispatch<SetStateAction<string>>;
  textValue: string;
  setTextValue: Dispatch<SetStateAction<string>>;
  categoryId: string;
  setCategoryId: Dispatch<SetStateAction<string>>;
  categoriesAlphabet: string[];
  setCategoriesAlphabet: Dispatch<SetStateAction<string[]>>;
}

export const DictionaryContext = createContext<IDictionaryContext>({
  data: {},
  dictionaryExample: [],
  filteredData: {},
  selectedChar: "",
  setSelectedChar: () => {},
  textValue: "",
  setTextValue: () => {},
  categoryId: "0",
  setCategoryId: () => {},
  categoriesAlphabet: [],
  setCategoriesAlphabet: () => {},
});

export function DictionaryProvider({ children }: IProviderProps) {
  const data = useGetWords();
  const [filteredData] = useState<ITemplateData>(data);
  const [selectedChar, setSelectedChar] = useState<string>("");
  const [textValue, setTextValue] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("0");
  const engAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const rusAlphabet = "абвгдежзиклмнопрстуфхцчшэюя".toUpperCase().split("");

  const dictionaryExample = [...engAlphabet, ...rusAlphabet];
  const [categoriesAlphabet, setCategoriesAlphabet] =
    useState<string[]>(dictionaryExample);

  return (
    <DictionaryContext.Provider
      value={{
        data,
        dictionaryExample,
        filteredData,
        selectedChar,
        setSelectedChar,
        textValue,
        setTextValue,
        categoryId,
        setCategoryId,
        categoriesAlphabet,
        setCategoriesAlphabet,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}
