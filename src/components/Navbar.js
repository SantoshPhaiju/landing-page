import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <AppBar
        sx={{ padding: "8px", marginBottom: "20px" }}
        className="mb-36 bg-[#000000b1]"
      >
        <Toolbar variant="dense" className="flex justify-between">
          <div className="flex items-center nav ml-8">
            <h2 className="text-3xl inline-block mr-10">Logo here</h2>
            <ul className="flex justify-center items-center space-x-4">
              <li className="hover:bg-gray-600 cursor-pointer py-1 font-sans px-4 rounded-2xl">Promotions</li>
              <li className="hover:bg-gray-600 cursor-pointer py-1 font-sans px-4 rounded-2xl">Featured</li>
              <li className="hover:bg-gray-600 cursor-pointer py-1 font-sans px-4 rounded-2xl">Top Categories</li>
              <li className="hover:bg-gray-600 cursor-pointer py-1 font-sans px-4 rounded-2xl">All Categories</li>
              <li className="hover:bg-gray-600 cursor-pointer py-1 font-sans px-4 rounded-2xl">Pricing</li>
            </ul>
          </div>

          <div className="buttons mr-40 flex space-x-5 items-center">
            <p>|</p>
            <Button variant="outlined" className="text-white uppercase ml-3 rounded-3xl text-lg">
              Login
            </Button>
            <Button
              variant="contained"
              className="text-blue-800 uppercase rounded-3xl px-8 bg-blue-300 text-lg"
            >
              Register
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
