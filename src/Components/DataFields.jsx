import React from "react";
import TextField from '@mui/material/TextField';
import { Grid,Box, Button } from "@mui/material";

class DataFields extends React.Component

 {
    render()
    {
        return(
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
        />
              </Grid>
              <Grid item xl={6}lg={6}md={6}sm={6}xs={6}>
              <TextField
          id="outlined-password-input"
          label="Class"
          type="class"
          autoComplete="current-password"
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
        />
              </Grid>
              <Grid item xl={6}lg={6}md={6}sm={6}xs={6}>
              <TextField
          id="outlined-password-input"
          label="Age"
          type="age"
          autoComplete="current-password"
        />
              </Grid>
            </Grid>
          <Box pb={2}> <Button className="save_btn">Save</Button></Box>
           
           </Box>
            </Grid>
          </Grid>
          </>
        )
    }
 }
 export default DataFields;