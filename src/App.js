import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navbar";
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
    sortArray();
    setNewData(updatedList);
  };

  const sortArray = () => {
    let updatedList = Data;
    if (localStorage.check === "HL")
      updatedList.sort((a, b) => a.price - b.price);
    if (localStorage.check === "LH")
      updatedList.sort((a, b) => b.price - a.price);
    if (localStorage.check === "BD")
      updatedList.sort((a, b) => a.discount - b.discount);
    if (localStorage.check === "CR")
      updatedList.sort((a, b) => a.ratings - b.ratings);
    setNewData(updatedList);
  };
  useEffect(() => {
    applyFilters();
  }, [color, brand, discount, category, sortValue]);

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
