
import { Grid,Box,Image } from "@chakra-ui/react"
import {NewData11}  from "./Box11"
const Box11=()=>
{
    return (
        <>
        <Grid  templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap="20px"  width="90%" margin="auto" marginTop="20px">
        {NewData11.map((el,i)=>(
            <Box width="100%" height={"370px"}   Key={i} cursor="pointer">
               <Box>
                <Image src={el.img} width="100%"></Image>
               </Box>
               <Box>
                 <h1 style={{fontSize:"14px", fontWeight:"700" , color:"grey",backgroundColor:"white"}}>{el.p}</h1>
               </Box>
            </Box>
        ))}

        </Grid>
        </>
    )
}
export default Box11