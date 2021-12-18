import React from "react";
import {
  Toolbar,
  AppBar,
  Box,
  Badge,
  createStyles,
  IconButton,
  Typography,
  styled,
  alpha,
  InputBase,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
// import {  styled, alpha} from '@mui/material/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      marginLeft: "240px",
      color: "black",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-between",
    },
    text: {
      display: { xs: "none", sm: "block" },
      fontSize: "24px !important",
    },
    username: {
      fontSize: "14px !important",
      marginTop: "10px !important",
    },
    rightcontent: {
      display: "flex",
      textAlign: "center",
    },
    icons: {
      size: "large",
    },
  })
);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.mainContainer}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box className={classes.rightcontent}>
            <IconButton className={classes.icons}>
              <Badge>
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton className={classes.icons}>
              <Badge>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton className={classes.icons}>
              <Badge>
                <AccountCircleIcon />
              </Badge>
            </IconButton>
            <IconButton className={classes.icons}>
              <Badge>
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Box className={classes.icons}>
              <Typography className={classes.username}>Name</Typography>
            </Box>
            <IconButton className={classes.icons}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
