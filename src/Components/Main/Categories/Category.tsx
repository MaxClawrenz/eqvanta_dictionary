import { useContext, useEffect } from "react";
import { DictionaryContext } from "../../../context/dictionaryContext";
import { IItem } from "../../../hooks/useGetWords";

interface ICategory {
  id: string;
  name: string;
}

function Category(props: ICategory) {
  const { categoryId, setCategoryId, data, setCategoriesAlphabet } =
    useContext(DictionaryContext);

  useEffect(() => {
    const newAlphabet: string[] = Object.entries(data)
      .map(([key, value]) => (alphabetFilter(value) ? key : null))
      .filter((elem): elem is string => elem !== null);
    setCategoriesAlphabet(newAlphabet);
  }, [categoryId]);

  function handleChangeCategory() {
    setCategoryId(props.id);
  }

  function alphabetFilter(array: IItem[]) {
    return (
      array.filter((elem) => elem.categories.includes(categoryId)).length > 0
    );
  }

  return (
    <div
      onClick={handleChangeCategory}
      className={
        categoryId === props.id
          ? `CategoryBlock CategoryBlockSelected`
          : `CategoryBlock`
      }
    >
      {props.name}
    </div>
  );
}

export default Category;
