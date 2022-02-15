import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function FilterBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Roadster" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Here&Now" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <FormGroup>
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
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Black" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl1(null)}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="blue" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl1(null)}>
                  <FormGroup>
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
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label=">75%" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl2(null)}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label=">50%" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl2(null)}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label=">30%" />
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
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Formal" />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl3(null)}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Party Wear"
                    />
                  </FormGroup>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorEl3(null)}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Casual" />
                  </FormGroup>
                </MenuItem>
              </Menu>
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
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Price:High To Low</MenuItem>
            <MenuItem value={20}>Price:Low To High</MenuItem>
            <MenuItem value={30}>Better Discount</MenuItem>
            <MenuItem value={30}>Costomer Ratings</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default FilterBar;
