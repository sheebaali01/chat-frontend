import React from 'react'
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { sampleNotifications } from '../constants/sampleData';
const Notifications = () => {
  return (
    <Dialog open>
      <Stack p={{xs:"1rem",sm:"2rem"}} maxWidth={"23rem"}>
          <DialogTitle>Notifications</DialogTitle>

          {
            sampleNotifications.length>0 ? <></> : <Typography>No Notifications</Typography>
          }
      </Stack>
    </Dialog>
  )
}

export default Notifications