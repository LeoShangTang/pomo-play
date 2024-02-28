import { Card, ListItem, Typography, CardContent, CardActions, IconButton, Button} from "@mui/material";
import { ITask } from "../Slices/ListOfTask";
import { useEffect, useState } from "react";

type Props = {
    time: number;
}

const TimerCard = ({time} : Props) => {
    
    const [seconds, setSeconds] = useState(3);
    const [isRunning, setIsRunning] = useState(false);

    let timerId: NodeJS.Timer | null | undefined =  null;

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

    // Ideas to display the timer!!!
    const test = () => {
        let minutes: number = Math.floor(seconds / 60);
        let secondsToDisplay:number = seconds - minutes*60;
        if (secondsToDisplay == 0) {
            secondsToDisplay = 59;
            minutes--;
        }
        // 00:00
    }

    // Another way is to have minutes and seconds as seperate states...
    // We can pass minutes into TimerCard. If so, seconds = seconds - minutes*60;
    // such that minutes = math.floor(seconds/60) if user puts in a fraction

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
                }}>
                <Typography fontSize={200} color="white">
                    {/* {time} */}
                    00:00
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