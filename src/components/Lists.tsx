import { Card, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../store/selectors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Item } from "../store/actionTypes";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addItemToBusket } from "../store/actionCreators";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles({
  container: {
    marginTop: "20px",
    padding: "0 5%",
  },
  containerItems: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    marginRight: "25px",
    marginBottom: "10px",
    cursor: "pointer",
    transition: ".3s",
    "&:hover": {
      transform: "translate(0, -10px)",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 5px 0",
  },
  loading: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
export const Lists = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addtoBusket, setAddToBusket] = React.useState(false);
  const [count, setCount] = React.useState(1);

  const [busket, setBusket] = React.useState({
    id: 4,
    imageUrl: "",
    name: "",
    count: 1,
    size: {
      width: 200,
      height: 200,
    },
    weight: "",
    comments: [""],
  });

  const handleOpen = (item: Item) => {
    setBusket(item);
    setOpen(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (addtoBusket) {
      dispatch(addItemToBusket(busket));
      handleClose();
    }
    setAddToBusket(false);
    console.log(busket);
  }, [addtoBusket]);
  const handleClose = () => setOpen(false);
  const data = useSelector(getItems);
  return (
    <div className={classes.container}>
      <div className={classes.containerItems}>
        {data.loadingState === "LOADED" ? (
          data.items.map((item: Item) => (
            <div key={item.id} className={classes.item}>
              <Card onClick={() => handleOpen(item)} sx={{ padding: "10px" }}>
                <div className={classes.card}>
                  <div>{item.name}</div>
                  <img
                    width={item.size.width}
                    height={item.size.height}
                    src={item.imageUrl}
                    alt="person"
                  />
                </div>
              </Card>
            </div>
          ))
        ) : (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {busket ? (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
              ></Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {busket.name}
              </Typography>
              <Badge color="secondary" badgeContent={count}></Badge>
              <ButtonGroup>
                <Button
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                    setBusket((state) => ({
                      ...state,
                      count: count-1,
                    }));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  onClick={() => {
                    setCount(count + 1);
                    setBusket((state) => ({
                        ...state,
                        count: count+1,
                      }));
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
              <div className={classes.buttons}>
                <Button
                  onClick={handleClose}
                  style={{ marginRight: "10px" }}
                  variant="contained"
                >
                  cancel
                </Button>
                <Button
                  onClick={() => setAddToBusket(true)}
                  variant="contained"
                >
                  add
                </Button>
              </div>
            </>
          ) : (
            ""
          )}
        </Box>
      </Modal>
    </div>
  );
};
