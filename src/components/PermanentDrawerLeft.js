import React from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  AppBar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  createStyles,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Header from "./Header";
import Footer from "./Footer";

const drawerWidth = 240;

const useStyle = makeStyles((theme) =>
  createStyles({
    hover: {
      "&:hover": {
        backgroundColor: "#661E0D !important",
        color: "#fff",
      },
    },
    text: {
      "&.css-ahj2mt-MuiTypography-root ": {
        fontWeight: "bold",
        fontSize: "20px",
      },
    },
  })
);

export default function PermanentDrawerLeft({ children }) {
  const classes = useStyle();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "rgb(244,238,235)",
              color: "black",
            },
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography className={classes.text}>Virdbro</Typography>
          </Toolbar>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button className={classes.hover} key={text}>
                <ListItemIcon className={classes.hover}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem className={classes.hover} button key={text}>
                <ListItemIcon className={classes.hover}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box component="div" sx={{ flexGrow: 1, bgcolor: "#f2f2f2" }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Box sx={{ ml: 30, bgcolor: "#f2f2f2" }}>
        <Footer />
      </Box>
    </>
  );
}
