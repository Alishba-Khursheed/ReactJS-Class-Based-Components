import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid,Box, Button } from "@mui/material";

const FieObjects ={
    name: "name",
    class:"class",
    subject:"subject",
    age:"age",
}
function StudentData(props) {
      const [dataField ,setDataField] = useState(FieObjects);
    const handleChange = e => {
        const { name, value } = e.target;
        setDataField(dataField => ({
            ...dataField,
            [name]: value
        }));
    };
    const handleClickBtn = ()=>{
        console.log(dataField);
    }

    return (
        <>
            <Grid container>
            <Grid item display="flex" justifyContent="center"pt={10} xl={12} lg={12} md={12} sm={12} xs={12} >
           <Box className="data_field_box_main">
            <Grid container pt={5}>
              <Grid item  xl={6}lg={6}md={6}sm={6}xs={6}>
              <TextField
          id="outlined-password-input"
          label="Name"
          type="name"
          autoComplete="current-password"
          onChange={handleChange}
          name="name"
        />
              </Grid>
              <Grid item xl={6}lg={6}md={6}sm={6}xs={6}>
              <TextField
          id="outlined-password-input"
          label="Class"
          type="class"
          autoComplete="current-password"
          onChange={handleChange}
          name="class"
        />
              </Grid>
            </Grid>
            <Grid container pt={5}>
              <Grid item  xl={6}lg={6}md={6}sm={6}xs={6}>
              <TextField
          id="outlined-password-input"
          label="Subject"
          type="subject"
          autoComplete="current-password"
          onChange={handleChange}
          name="subject"
        />
              </Grid>
              <Grid item xl={6}lg={6}md={6}sm={6}xs={6}>
              <TextField
          id="outlined-password-input"
          label="Age"
          type="age"
          autoComplete="current-password"
          onChange={handleChange}
          name="age"
        />
              </Grid>
            </Grid>
          <Box pb={2}> <Button onClick={handleClickBtn} className="save_btn">Save</Button></Box>
           
           </Box>
            </Grid>
          </Grid> 

          <Box pt={10} display="flex"justifyContent="center">
          


    <table>
  <tr>
    <th>Name</th>
    <th>Class</th>
    <th>Subject</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
    <td>Maria Anders</td>
  </tr>
</table>

          </Box>
        </>
    );
}

export default StudentData;