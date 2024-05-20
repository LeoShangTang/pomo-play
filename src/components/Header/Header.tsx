import { IconButton, Typography } from "@mui/material";
import { Settings } from "@mui/icons-material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Header = () => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width:"100%"
            }}>
            <Typography sx={{color: "white"}}>
                PomoPlay
            </Typography>
            <IconButton>
                <Settings sx={{color: "white"}}/>
            </IconButton>
            <IconButton>
                <SwapHorizIcon sx={{color: "white"}}/>
            </IconButton>
        </div>
    )
}

export default Header;