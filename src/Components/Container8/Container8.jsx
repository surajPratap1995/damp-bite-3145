import { NewData8 } from "./Box8";
import React from "react";
import {Box,Stack} from "@chakra-ui/react";


import styles from "./Box8.module.css"

const Box8=()=>
{
    return (
        <div style={{margin:"auto", width:"95%"}}>
             <Stack direction="horizontal" gap="20px"
        justify="space-between" overflow="scroll" marginTop="25px" height="300px">
            {NewData8.map((el,i) => (
                <Box width="230px" height="290px" key={i} cursor="pointer"
                border="1px solid #e8e6e6" borderRadius="7px" 
                className={styles.img}>
                    <img style={{width:"290px", height:"290px",borderTopLeftRadius:"5px",
                    borderTopRightRadius:"5px"}} src={el.img} alt=''/>
                    <Box width="230px" padding="16px">
                        
                    </Box>
                </Box>
            ))}
        </Stack>
        </div>
    )
}
export default Box8