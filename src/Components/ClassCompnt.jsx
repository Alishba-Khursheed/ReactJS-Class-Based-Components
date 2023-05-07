import React from "react";
import { Box, Button,Grid } from "@mui/material";
import "./Component.css";



class ClassCompnt extends React.Component {
    constructor() {
        super();
        this.state = { number: 0 };
    }

    handleClickIncre = () => {
        this.setState(prevState => ({
            number: prevState.number + 1
        }))
    }

    handleClickDecre = () => {
           if(this.state.number > 0) {
            this.setState(prevState => ({
                number: prevState.number - 1
            }))
           }else{
            alert("Sorry Limit zero reached")
           }
       
    }

    render() {
        return (

   <>



<Box display="flex" justifyContent="center"><Button className="cla_btnData_field">Create Student Data</Button></Box>

<Box display="flex" justifyContent="center" pt={12}>

<Box className="cla_main_box" >
    <Box className="cla_center_box">{this.state.number}</Box>
    <Box>
        <Button onClick={this.handleClickIncre} className="cla_btn">Increment</Button>
        <Button onClick={this.handleClickDecre} className="cla_btn">Decrement</Button>
    </Box>
</Box>

</Box>

   </>
        )
    }
}
export default ClassCompnt;