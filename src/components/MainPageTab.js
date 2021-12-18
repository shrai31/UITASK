import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardDetails from "./CardDetails";
import CustomizedButtons from "./CustomizedButtons";
import { green, orange } from '@mui/material/colors';


const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     tabText: {
//       "&.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
//         color: "red",
//         bgColor: "yellow"
//       },
//     },
//   })
// );
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainPageTab() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Toolbar>
        <Typography component="div"> My Wardrobe</Typography>
      </Toolbar>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              borderBottom: 0,
              marginLeft: "20px",
              width: "140%",
            }}
          >
            <ThemeProvider theme={outerTheme}>
            <Tabs
              value={value}
              onChange={handleChange}
              // indicatorColor="secondary"
              // textColor="yellow"
              // className={classes.tabText}
              TabIndicatorProps={{ style: { background: "green" } }}
            >
              
              <Tab label="LookBook" {...a11yProps(0)} />
              <Tab label="Wardrobe" {...a11yProps(1)} />
              <Tab label="Extra " {...a11yProps(2)} />
            </Tabs>
            </ThemeProvider>
          </Box>
          <Box sx={{ width: "16%", marginRight: "auto" }}>
            <CustomizedButtons />
          </Box>
        </Box>
        <TabPanel value={value} index={0}>
          <CardDetails />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Ongoing Component
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
}
