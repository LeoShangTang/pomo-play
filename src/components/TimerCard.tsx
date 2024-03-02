import { Card, ListItem, Typography, CardContent, CardActions, IconButton, Button} from "@mui/material";
import { ITask } from "../Slices/ListOfTask";
import { useEffect, useState } from "react";

type Props = {
    time: number;
}

let timerId: NodeJS.Timer | null | undefined =  null;

const TimerCard = ({time} : Props) => {
    
    const [seconds, setSeconds] = useState(6);
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = () => (
        timerId = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds == 0) {
                    stopTimer()
                    return 0; // Should change timers once finished depending on timer type
                }
                return prevSeconds - 1;
            });
        }, 1000)
    );
        
    const stopTimer = () => {
        if (timerId !== null) {
            clearInterval(timerId);
        }
    }

    useEffect(() => {
        if (isRunning) {
            startTimer();
        }
        return stopTimer;
    },  [isRunning])

    // Potentially refactor!!!
    const getFormatedMinutes = () => {
        let minutes = Math.floor(seconds / 60);
        if (minutes >= 10) {
            return `${minutes}`;
        }
        return `0${minutes}`;
    }

    const getFormatedSeconds = () => {
        let sec = seconds - Math.floor(seconds / 60) * 60;
        if (sec >= 10) {
            return `${sec}`;
        }
        return `0${sec}`;
     
    }
    // CHANGE TO A DIV NOT CARD LATER...  !!!
    // REFACTOR STYLING... !!!
    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200%",
                    width: "100%",
                    backgroundColor:"transparent",
                    boxShadow: "none"
                }}>
                <Typography fontSize={200} color="white">
                    {`${getFormatedMinutes()}:${getFormatedSeconds()}`}
                </Typography>

            </Card>
            <Button onClick={() => { setIsRunning(!isRunning) }}
            sx={{color:"white"}}>
                Pause/Start Timer
            </Button>
        </>
    )
}
// CHANGE BUTTON TO AN ICONBUTTON
export default TimerCard;