import React from "react";
import { Card, CardMedia, IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      // backgroundColor:"red"
    },
    mainContainer: {
      width: 374,
      height: 194,
      marginBottom: 20,
      position: "relative",
    },
    favButton: {
      position: "absolute",
      left: 152,
      top: -188,
      zIndex: 999,
      // color: "green",
      "&.css-78trlr-MuiButtonBase-root-MuiIconButton-root": {
        backgroundColor: "white",
      },
    },
    favI: {
      // Top:180,
      borderRadius: "50%",
    },
  })
);

export default function CardDetails() {
  const classess = useStyles();
  const arr = [ 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  return (
    <>
      <div className={classess.mainWrapper} >
        
        {arr.map((item,index) => (
          <Card key={index} className={classess.mainContainer}>
            <CardMedia
              component="img"
              height="194"
              image="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Paella dish"
            />
            <IconButton className={classess.favButton}>
              <FavoriteIcon className={classess.FavI} />
            </IconButton>
          </Card>
        ))}
      </div>
    </>
  );
}
