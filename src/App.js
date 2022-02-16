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
  const [newData, setNewData] = useState(null);
  const [sortValue, setSortValue] = useState("");
  let times=0;
  useEffect(() => {
    setNewData([...Data]);
  }, []);
  useEffect(() => {
    if (color) setNewData(Data.filter((key) => key.color === color));
  }, [color]);
  useEffect(() => {
    if (brand) setNewData(Data.filter((key) => key.brand === brand));
  }, [brand]);
  useEffect(() => {
    if (discount) setNewData(Data.filter((key) => key.discount >= discount));
  }, [discount]);
  useEffect(() => {
    if (category) setNewData(Data.filter((key) => key.category === category));
  }, [category]);
  useEffect(() => {
    if (sortValue===2) {
      setNewData(newData.sort((a, b) => a.price - b.price));
    }
  }, [sortValue]);
  console.log(sortValue);
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
      />
      <Products Data={newData} />
    </>
  );
}

export default App;
