
import {Box,Image,Stack} from "@chakra-ui/react";
import {NewData12} from "./Box12"
const Box12=()=>
{
    return (
        <>
        <h1 style={{fontSize:"20px",marginTop:"20px"}}>Luxe</h1>
        <Stack direction="vertical"  width="95%" height="260px" gap="10px" margin={"auto"} marginTop="10px">
                
        {NewData12.map((el,i)=>(
            <Box width="100%" height={"210px"}   Key={i} cursor="pointer">
               <Box>
                <Image src={el.img} width="100%" borderRadius="10%"></Image>
               </Box>
               <Box>
                 <h1 style={{fontSize:"13px", fontWeight:"700" ,marginTop:"5px",color:"pink"}}>{el.p}</h1>
               </Box>
               <Box>
                 <h2 style={{fontSize:"13px", fontWeight:"700" ,marginTop:"5px"}}>{el.r}</h2>
               </Box>
            </Box>
        ))}

        </Stack>
        </>
    )
}
export default Box12