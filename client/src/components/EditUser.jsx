import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getEUser } from "../service/api";




const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;



const defaulteValue = {
    name: "",
    username: "",
    Email: "",
    Phone: "",
};

const EditUsers = () => {

    const [user, setuser] = useState(defaulteValue);

    const navigate = useNavigate();
    const { id } = useParams(); // useparams is an object and we can get id by destructuring it


    useEffect(() => {
        loadUserDetails();
    },[]);


    const loadUserDetails = async () => {
        const response = await getEUser(id);
        // console.log("hi");
        setuser(response.data);
        // user.name=response.data;
        // user.username=response.data.username;
        // user.Email=response.data.Email;
        // user.Phone=response.data.Phone;
        // console.log(user);

    }



    const onValueChange = (e) => {
        // console.log(e.target.name,e.target.value)
        setuser({ ...user, [e.target.name]: e.target.value })
        // console.log(user);
    }

    const editUserDetails = async () => {
        // console.log("ok");
        await editUser(user,id);
        navigate('/all');
    }
    return (
        // <Typography>Heloo</Typography>
       
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Email" value={user.Email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Phone" value={user.Phone} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )

}
export default EditUsers;