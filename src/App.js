import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import { Data } from "./Data";

function App() {
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState(null);
  const [discount, setDiscount] = useState();
  const [category, setCategory] = useState();

  const [newData, setNewData] = useState(null);

  useEffect(() => {
    if (Boolean(newData) && newData.length < Data.length) {
      setNewData(newData.filter((key) => key.color === color));
    } else {
      setNewData(Data.filter((key) => key.color === color));
    }
  }, [color]);
  useEffect(() => {
    setNewData(Data.filter((key) => key.brand === brand));
  }, [brand]);
  useEffect(() => {
    setNewData(Data.filter((key) => key.discount >= discount));
  }, [discount]);
  useEffect(() => {
    setNewData([...Data]);
  }, []);
  //console.log();

  //console.log(newData);

  return (
    <>
      <Navbar />
      <FilterBar
        setBrand={setBrand}
        setColor={setColor}
        setDiscount={setDiscount}
      />
      <Products Data={newData} />
    </>
  );
}

export default App;
