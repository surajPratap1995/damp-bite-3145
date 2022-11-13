


import {Box,Image,Heading} from "@chakra-ui/react"
const Box17=()=>
{
    return (
    <Box style={{width:"90%",height:"820px",margin:"auto",marginTop:"40px",}}>
        <Heading>EDITOR'S CHOICE</Heading>
        <Box style={{width:"80%",height:"400px", display:"flex",margin:"auto",gap:"15px"}} >
             <Box style={{width:"50%",height:"400px"}}>
                 <Box>
                  <Image src="https://images-static.nykaa.com/uploads/28975467-ff57-4894-94c0-195c310abe24.jpg?tr=w-300,cm-pad_resize" height="400px" width="100%">
                    
                  </Image>
                 </Box>
                 

             </Box>
             <Box style={{width:"50%",height:"400px"}}>
               <Box>
                <Image src="https://images-static.nykaa.com/uploads/5f2b0d78-0529-4962-8bdd-a1cfc3216e82.jpg?tr=w-300,cm-pad_resize" width="100%" height="400px"></Image>
               </Box>
               
             </Box>
        </Box>
        <Box style={{width:"80%",height:"400px",display:"flex",margin:"auto",gap:"15px",marginTop:"20px"}}>
            <Box  style={{width:"50%",height:"400px"}}>
                <Box>
                    <Image src="https://images-static.nykaa.com/uploads/3ed5bd3d-8ff0-4e04-8968-a284ba5dc05e.jpg?tr=w-300,cm-pad_resize" width="100%" height="400px">
                    </Image>
                    </Box>
                
               </Box>
            <Box  style={{width:"50%",height:"400px"}}>
                  <Box>
                    <Image src="https://images-static.nykaa.com/uploads/7c7893aa-b6f3-4ae1-bddd-0db959740188.jpg?tr=w-300,cm-pad_resize" width="100%" height="400px"></Image>
                    </Box>
                 
               </Box> 
        </Box>
        

    </Box>

    )
}
export default Box17