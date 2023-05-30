import {Button, Stack} from "@mui/material"
import { useDispatch } from "react-redux"
import { searchTerm } from "../../features/searchSlice"


const NavigationLinks = () => {
  const dispatch = useDispatch()

  return (
    <Stack spacing={2} direction="row" sx={{
        display: {
            xs: "none",
            sm: "flex"
        }
    }}>
        <Button sx={{color: "#fff"}} onClick={()=> dispatch(searchTerm("Nature"))}>Nature</Button>
        <Button sx={{color: "#fff"}} onClick={()=> dispatch(searchTerm("Animals"))}>Animals</Button>
    </Stack>
  )
}

export default NavigationLinks