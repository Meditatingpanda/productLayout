import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import { Data } from "./Data";
function App() {
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [category, setCategory] = useState();
  const [newData, setNewData] = useState(Data);
  const [sortValue, setSortValue] = useState("");

  const applyFilters = () => {
    let updatedList = Data;
    if (color) updatedList = updatedList.filter((key) => key.color === color);
    if (brand) updatedList = updatedList.filter((key) => key.brand === brand);
    if (discount)
      updatedList = updatedList.filter((key) => key.discount >= discount);
    if (category)
      updatedList = updatedList.filter((key) => key.category === category);

    setNewData(updatedList);
  };
  
  const sortArray = () => {
    let updatedList = Data;
    if (sortValue === 1) {
      updatedList = Data.sort((a, b) => -a.price + b.price);
    } else if (sortValue === 2) {
      updatedList = Data.sort((a, b) => a.price - b.price);
    } else if (sortValue === 3) {
      updatedList = Data.sort((a, b) => -a.discount + b.discount);
    } else if (sortValue === 3) {
      updatedList = Data.sort((a, b) => a.ratings - b.ratings);
    }
    setNewData(updatedList);
  };
  useEffect(() => {
    applyFilters();
  }, [color, brand, discount, category]);

  useEffect(() => {
    sortArray();
  }, [sortValue]);
  return (
    <>
      <Navbar />
      <FilterBar
        setBrand={setBrand}
        setColor={setColor}
        setDiscount={setDiscount}
        setSortValue={setSortValue}
        setCategory={setCategory}
        sortValue={sortValue}
        // clearFilter={clearFilter}
      />
      <Products Data={newData} />
    </>
  );
}

export default App;
