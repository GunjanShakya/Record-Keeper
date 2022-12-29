import {Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { getUser, deleteUser  } from "../service/api";
import { useState, useEffect  } from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
const StyledTable=styled(Table)
`
  width: 90%;
  margin: 50px 0 0 50px;
`
const Thead = styled(TableRow)
`
& > th {
  background: #808080
  ;
  color: #fff;
  font-size:20px;
  
}
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;
const AllUsers = () => {

    const [olddata, newdataget] = useState([]);

    useEffect(() => {
        getAllUsers();
        
    }, []);

    const getAllUsers= async () => {
        let res= await getUser();
        newdataget(res.data);
        // console.log(olddata);
    }

    const deleteuserDetails=async(id)=>{
        await deleteUser(id);
        getAllUsers();
      }

    //console.log("helloo")
   
return(<StyledTable>
    <TableHead>
    <Thead>
         <TableCell>ID</TableCell>
         <TableCell>Name</TableCell>
         <TableCell>UserName</TableCell>
         <TableCell>Email</TableCell>
         <TableCell>Phone</TableCell> 
         <TableCell> </TableCell>
         </Thead>
    </TableHead>
    <TableBody>
{
    olddata.map((olddat) => (
        <TRow key={olddat._id}>
            <TableCell>{olddat._id}</TableCell>
            <TableCell>{olddat.name}</TableCell>
            <TableCell>{olddat.username}</TableCell>
            <TableCell>{olddat.Email}</TableCell>
            <TableCell>{olddat.Phone}</TableCell>
            <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={ `/edit/${olddat._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=>deleteuserDetails(olddat._id)}>Delete</Button>
            </TableCell>
        </TRow>
    ))
}
    </TableBody>
</StyledTable>)
}

export default AllUsers;