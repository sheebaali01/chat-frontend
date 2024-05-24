import { Button, Dialog, DialogTitle, Stack } from '@mui/material'
import React from 'react'
import { sampleUsers } from '../constants/sampleData'
import UserItem from "../shared/UserItem"

const AddMemberDialog = ({addMember,isLoadingAddMember,chatId}) => {
    const addFriendHandler = (id) => {
        
    }

    const closeHandler = () => {
        
    }
    const addMemberSubmitHandler = () => {
        
    }
  return (
    <Dialog open onClose={closeHandler}>
        <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
            <Stack spacing={"1rem"}>
                { sampleUsers.length>0?
                    (sampleUsers.map((i) => <UserItem user={i} key={i._id} handler={addFriendHandler}/>)):
                    <Typography textAlign={"center"}>No Friends</Typography>
                }
            </Stack>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
            <Button onClick={closeHandler} color="error">Cancel</Button>
          <Button variant="contained" disabled={isLoadingAddMember} onClick={addMemberSubmitHandler} >Submit Changes</Button>
            </Stack>
        </Stack>
    </Dialog>
  )
}

export default AddMemberDialog