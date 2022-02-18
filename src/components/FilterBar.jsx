import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Data } from "../Data";

function FilterBar({
  sortValue,
  setBrand,
  setColor,
  setDiscount,
  setSortValue,
  setCategory,
  setNewData,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  let temp = "";
  const handleClick = (event) => {
    //  console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    temp = event.target.value;
    setSortValue(temp);
    sortArray();
  };
  const percentageCal = (value, per) => {
    return (1 - per / 100) * value;
  };

  const sortArray = () => {
    let updatedList = Data;
    if (temp === "HL")
      updatedList.sort((a, b) => {
        return (
          percentageCal(b.price, b.discount) -percentageCal(a.price, a.discount) 
         
        );
      });
    if (temp === "LH")
      updatedList.sort((a, b) => {
        return (
          percentageCal(a.price, a.discount) -
          percentageCal(b.price, b.discount)
          
        );
      });
    if (temp === "BD") updatedList.sort((a, b) =>   b.discount-a.discount);
    if (temp === "CR") updatedList.sort((a, b) =>   b.ratings-a.ratings);
    console.log(updatedList);
    setNewData(updatedList);
  };

  const clearFilter = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-[4rem] shadow-md mt-3 pb-3 flex justify-center items-center">
      <div className="w-[85%] ">
        <div className="flex items-center justify-between w-1/3 flex-wrap">
          <span className="-mt-1 text-3xl text-gray-500">Filters</span>
          <div className="flex justify-between  flex-wrap">
            <span>
              <Button
                onClick={handleClick}
                sx={{
                  color: "gray",
                }}
              >
                Brand
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                  <FormGroup onClick={(e) => setBrand("Roadster")}>
                    <FormControlLabel control={<Checkbox />} label="Roadster" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <FormGroup onClick={(e) => setBrand("Here&Now")}>
                    <FormControlLabel control={<Checkbox />} label="Here&Now" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <FormGroup onClick={(e) => setBrand("HrX")}>
                    <FormControlLabel control={<Checkbox />} label="HrX" />
                  </FormGroup>
                </MenuItem>
              </Menu>
            </span>
            <span>
              <Button
                onClick={(e) => setAnchorEl1(e.currentTarget)}
                sx={{
                  color: "gray",
                }}
              >
                Color
              </Button>
              <Menu
                anchorEl={anchorEl1}
                open={open1}
                onClose={(e) => setAnchorEl1(null)}
              >
                <MenuItem onClick={(e) => setAnchorEl1(null)}>
                  <FormGroup onClick={(e) => setColor("black")}>
                    <FormControlLabel control={<Checkbox />} label="Black" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl1(null)}>
                  <FormGroup onClick={(e) => setColor("blue")}>
                    <FormControlLabel control={<Checkbox />} label="blue" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl1(null)}>
                  <FormGroup onClick={(e) => setColor("yellow")}>
                    <FormControlLabel control={<Checkbox />} label="yellow" />
                  </FormGroup>
                </MenuItem>
              </Menu>
            </span>
            <span>
              <Button
                onClick={(e) => setAnchorEl2(e.currentTarget)}
                sx={{
                  color: "gray",
                }}
              >
                Discount
              </Button>
              <Menu
                anchorEl={anchorEl2}
                open={open2}
                onClose={(e) => setAnchorEl2(null)}
              >
                <MenuItem onClick={(e) => setAnchorEl2(null)}>
                  <FormGroup onClick={(e) => setDiscount("75")}>
                    <FormControlLabel control={<Checkbox />} label=">75%" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl2(null)}>
                  <FormGroup onClick={(e) => setDiscount("50")}>
                    <FormControlLabel control={<Checkbox />} label=">50%" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl2(null)}>
                  <FormGroup onClick={(e) => setDiscount("25")}>
                    <FormControlLabel control={<Checkbox />} label=">25%" />
                  </FormGroup>
                </MenuItem>
              </Menu>
            </span>

            <span>
              <Button
                onClick={(e) => setAnchorEl3(e.currentTarget)}
                sx={{
                  color: "gray",
                }}
              >
                Category
              </Button>
              <Menu
                anchorEl={anchorEl3}
                open={open3}
                onClose={(e) => setAnchorEl3(null)}
              >
                <MenuItem onClick={(e) => setAnchorEl3(null)}>
                  <FormGroup onClick={() => setCategory("formal")}>
                    <FormControlLabel control={<Checkbox />} label="Formal" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl3(null)}>
                  <FormGroup onClick={() => setCategory("party")}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Party Wear"
                    />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl3(null)}>
                  <FormGroup onClick={() => setCategory("casual")}>
                    <FormControlLabel control={<Checkbox />} label="Casual" />
                  </FormGroup>
                </MenuItem>
              </Menu>
            </span>
            <span>
              <Button onClick={clearFilter} sx={{ color: "red" }}>
                Clear
              </Button>
            </span>
          </div>
        </div>
      </div>
      <div className="w-36">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortValue}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"HL"}>Price:High To Low</MenuItem>
            <MenuItem value={"LH"}>Price:Low To High</MenuItem>
            <MenuItem value={"BD"}>Better Discount</MenuItem>
            <MenuItem value={"CR"}>Costomer Ratings</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default FilterBar;
