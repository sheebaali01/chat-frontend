import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../constants/sampleData";
const Notifications = () => {

  const friendRequestHandler = ({_id,accept})=>{

  }
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"23rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((i) =>(
            <NotificationItem sender={i.sender} _id={i._id} handler={friendRequestHandler}/>
          ))
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};
const NotificationItem = memo(({sender,_id}) =>{
    const {name,avatar} = sender;
    return (
      <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} send you a friend request`}
        </Typography>
          <Stack direction={{
            xs:"column",
            sm:"row"
          }}>
            <Button onClick={()=>handler({_id,accept:true})}>
              Accept
            </Button>
            <Button color="error" onClick={()=>handler({_id,accept:false})}>
              Reject
            </Button>
          </Stack>
      </Stack>
    </ListItem>
    )
  }
)
export default Notifications;
