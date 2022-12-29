// import {Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
// import { getUser } from "../service/api";
// import { useState, useEffect  } from "react";
// import { styled } from "@mui/system";

// const StyledTable=styled(Table)
// `
//   width: 90%;
//   margin: 50px 0 0 50px;
// `
// const Thead = styled(TableRow)
// `
// & > th {
//   background: #808080
//   ;
//   color: #fff;
//   font-size:20px;
  
// }
// `;

// const TRow = styled(TableRow)`
//     & > td{
//         font-size: 18px
//     }
// `;
// const AllUsers = () => {

//     const [user, setuser] = useState([]);

//     useEffect(() => {
//         getAllUsers();
        
//     }, []);

//     const getAllUsers= async () => {
//         let res= await getUser();
//         setuser(res.data);
//         console.log(user);
//     }

//     //console.log("helloo")
   
// return(<StyledTable>
//     <TableHead>
//     <Thead>
//          <TableCell>ID</TableCell>
//          <TableCell>Name</TableCell>
//          <TableCell>UserName</TableCell>
//          <TableCell>Email</TableCell>
//          <TableCell>Phone</TableCell> 
//          <TableCell> </TableCell>
//          </Thead>
//     </TableHead>
//     <TableBody>
// {
//     user.map((user1) => (
//         <TRow key={user1._id}>
//             <TableCell>{user1._id}</TableCell>
//             <TableCell>{user1.name}</TableCell>
//             <TableCell>{user1.username}</TableCell>
//             <TableCell>{user1.Email}</TableCell>
//             <TableCell>{user1.Phone}</TableCell>
//             <TableCell>
//                 <Button variant="contained" style={{marginRight:10}}>Edit</Button>
//                 <Button variant="contained" color="secondary">Delete</Button>
//             </TableCell>
//         </TRow>
//     ))
// }
//     </TableBody>
// </StyledTable>)
// }

// export default AllUsers;