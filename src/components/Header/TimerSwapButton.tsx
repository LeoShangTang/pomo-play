import { Card, CardContent, CardActions, IconButton,  } from "@mui/material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useDispatch } from "react-redux";

type Props = {
    toggleTimer: (timerType: string) => {}
}

const TimerSwapButton = ({toggleTimer}: Props) => {

    return (
        <IconButton onClick={() => {toggleTimer}}>
            <SwapHorizIcon sx={{color: "white"}}/>
        </IconButton>
    )
}

export default TimerSwapButton;