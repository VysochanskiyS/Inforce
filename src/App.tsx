import React, { useEffect } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { Busket } from "./components/Busket";
import { Lists } from "./components/Lists";
import axios from "axios";
import { NavHeader } from "./components/NavHeader";
import { useDispatch } from "react-redux";
import { setItems } from "./store/actionCreators";
const useStyles = makeStyles({
  headerNav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 5%",
    width: "100%",
  },
  homeNav: {
    display: "flex",
    fontSize: "22px",
  },
  navItem: {
    marginRight: "20px",
  },
});
function App() {
  const classes = useStyles();
  const [items, setItemsData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(false);
    axios.get("http://localhost:3001/posts").then(({ data }) => {
      dispatch(setItems(data));
      setItemsData(data);
    });
  }, []);
  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="" element={<Lists />}></Route>
        <Route path="basket" element={<Busket />}></Route>
      </Routes>
    </div>
  );
}

export default App;
