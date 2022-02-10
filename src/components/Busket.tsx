import React from "react";
import { makeStyles } from "@mui/styles";
import { getItems } from "../store/selectors";
import { useSelector } from "react-redux";
import { Item } from "../store/actionTypes";
import { Button } from "@mui/material";
const useStyles = makeStyles({
  container: {
    marginTop: "15px",
  },
  text: {
    fontSize: "22px",
    color: "grey",
    marginBottom: "25px",
  },
  content: {
    padding: "0 10%",

    display: "flex",
    justifyContent: "space-around",
  },
});

export const Busket = () => {
  const classes = useStyles();
  const { busket } = useSelector(getItems);
  const [sorted, setSorted] = React.useState([]);
  const [isSorted, setIsSorted] = React.useState(false);

  const sortBy = () => {
    setSorted(
      busket.slice().sort((a: Item, b: Item) => a.name.localeCompare(b.name))
    );
    setIsSorted(true);
  };
  return (
    <div>
      <div className={classes.text}>Busket</div>
      <div className={classes.content}>
        <div>Choosed products</div>
        <Button variant="contained" onClick={sortBy}>
          Sort by
        </Button>
      </div>

      <div>
        {isSorted
          ? sorted.map((item: Item) => (
              <div
                key={item.id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div style={{ marginRight: "10px" }}>{item.name}</div>
                <div>{item.count}</div>
              </div>
            ))
          : busket.map((item: Item) => (
              <div
                key={item.id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div style={{ marginRight: "10px" }}>{item.name}</div>
                <div>{item.count}</div>
              </div>
            ))}
      </div>
    </div>
  );
};
