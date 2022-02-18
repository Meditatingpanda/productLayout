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
    setNewData(updatedList);
  };
 
  
  useEffect(() => {
    applyFilters();
  }, [color, brand, discount, category]);
 
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
        setNewData={setNewData}
        // clearFilter={clearFilter}
      />
      <Products Data={newData} />
    </>
  );
}

export default App;
