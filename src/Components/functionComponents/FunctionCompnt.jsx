import React, { useState } from 'react';
import { Button, Grid, Box } from "@mui/material";
import "../Component.css";
function FunctionCompnt(props) {

    const [num, setNum] = useState(0);

    const handleClickIncre = () => {
        setNum(num + 1);
    }
    const handleClickDecre = () => {
        if(num>0){
            setNum(num - 1);
        }else{
            alert("Sorry Limit Zero Reached !")
        }
   
    }
    return (
        <>

            <Box display="flex" justifyContent="center" pt={12}>

                <Box className="cla_main_box" >
                    <Box className="cla_center_box">{num}</Box>
                    <Box>
                        <Button onClick={handleClickIncre} className="cla_btn">Increment</Button>
                        <Button onClick={handleClickDecre} className="cla_btn">Decrement</Button>
                    </Box>
                </Box>

            </Box>
            {/* <Box display="flex" justifyContent="center"><Button className="cla_btnData_field">Create Student Data</Button></Box> */}

        </>
    );
}

export default FunctionCompnt;