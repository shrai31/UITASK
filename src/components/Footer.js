import { Box, Typography, createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "97%",
      margin: "0 auto",
      height: "auto",
      display: "flex",
      justifyContent: "space-between",
    },
    labelName: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    footertext: {
      display: "flex",
      justifyContent: "space-between",
    },
    pageDetails: {
      marginLeft: "8px",
      fontWeight: "bold",
    },
    typo: {
      "&.css-ahj2mt-MuiTypography-root": {
        marginLeft: 16,
      },
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography className={classes.labelName}>{"Virdbrobeui"}</Typography>
      </Box>
      <Box className={classes.footertext}>
        <Box className={classes.typo}>{"Terms & Conditons"}</Box>

        <Box>
          <Typography className={classes.typo}>{"Privacy policy"}</Typography>
        </Box>
        <Box>
          <Typography className={classes.typo}>{"About Us"}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
