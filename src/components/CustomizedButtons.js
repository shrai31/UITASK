import React from 'react';
import { styled, Button, Stack } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#661E0D"),
  // width:"%",
  marginRight:"24px",
  height:"48px",
  backgroundColor: "#661E0D",
  '&:hover': {
    backgroundColor: "#661E0D",
  },
}));

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
     
      <ColorButton> <AddBoxIcon />Create New</ColorButton>
    </Stack>
  );
}
