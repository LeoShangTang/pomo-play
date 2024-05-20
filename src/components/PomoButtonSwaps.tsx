import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeTimer } from "../Slices/PomoTimer";
import { IPomoTimer } from "../Slices/PomoTimer";
import { TTimers } from "../Slices/PomoTimer";
import { RootState } from "../store";

const PomoButtonSwaps = () => {
    // const initialState: IPomoTimer = {
    //     StudyTimer: 25,
    //     ShortBreakTimer: 5,
    //     LongBreakTimer: 15,
    //     CurrentTimer: Timers.Study
    // };
    const dispatch = useDispatch();
    const pomoTimer = useSelector((state:RootState) => {
        return state.pomoTimer;
    })
    
    return (
        <>
            <Button onClick={() => {dispatch(changeTimer({timer: {...pomoTimer, CurrentTimer: TTimers.study}}))}}>Pomodoro</Button>
            <Button onClick={() => {dispatch(changeTimer({timer: {...pomoTimer, CurrentTimer: TTimers.shortBreak}}))}}>Short Break</Button>
            <Button onClick={() => {dispatch(changeTimer({timer: {...pomoTimer, CurrentTimer: TTimers.longBreak}}))}}>Long Break</Button>
            <Button>{pomoTimer.CurrentTimer}</Button>

        </>
    )
}

export default PomoButtonSwaps;