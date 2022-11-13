import {Box,Image,Grid} from "@chakra-ui/react";
import  {NewData1} from "./box5"

const Box5=()=>
{
    return (
        <>
        <Grid  templateRows="repeat(3, 1fr)" templateColumns="repeat(2, 1fr)" gap="20px"  width="90%" margin="auto" marginTop="50px">
        {NewData1.map((el,i)=>(
            <Box width="100%" height={"370px"}   Key={i} cursor="pointer">
               <Box>
                <Image src={el.img} width="100%"></Image>
               </Box>
               <Box>
                 <h1 style={{fontSize:"14px", fontWeight:"700" ,marginTop:"5px", color:"grey",backgroundColor:"white"}}>{el.p}</h1>
               </Box>
            </Box>
        ))}

        </Grid>
        </>
    )
}
export default Box5