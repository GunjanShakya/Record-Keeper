import { FormControl, FormGroup, InputLabel, Input, Typography,styled, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addUser } from "../service/api";
const C=styled(FormGroup)`
width: 50%;
margin:5% auto 0 auto;
& > div {
    margin-top: 20px;
}
`
const defaultValue= {
    name: '',
    username: '',
    Email: '',
    Phone: ''
}
const AddUsers = () => {

    const navigate=useNavigate();

    const[user,setuser]=useState(defaultValue);

    const onValueChange = (e) => {
        // console.log(e.target.name,e.target.value)
        setuser({...user,[e.target.name]: e.target.value})
        // console.log(user);
    }

    const addUserDetails = async () => {
        // console.log("ok");
       await addUser(user);
       navigate('/all');
    }
    return ( 
        <C>
       <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </C>
    )

}
export default AddUsers;