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

    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200%",
                    width: "50%",
                }}>
                <Typography fontSize={100}>
                    {/* {time} */}
                    {seconds}
                </Typography>

            </Card>
            <Button onClick={() => { setIsRunning(!isRunning) }}>
                Pause/Start Timer
            </Button>
        </>
    )
}

export default TimerCard;