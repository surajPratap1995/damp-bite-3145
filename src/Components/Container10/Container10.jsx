
import { Grid,Box,Image } from "@chakra-ui/react"
import {NewData10}  from "./Box10"
const Box10=()=>
{
    return (
        <>
       
        <Grid  templateRows="repeat(3, 1fr)" templateColumns="repeat(4, 1fr)" gap="20px"  width="90%" margin="auto" marginTop="40px">
        {NewData10.map((el,i)=>(
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
export default Box10