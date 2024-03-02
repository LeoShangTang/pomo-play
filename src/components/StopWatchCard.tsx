import { Card, CardActions, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";

let timerId: NodeJS.Timer | null | undefined =  null;

const StopWatchCard = () => {
    const [seconds, setSeconds] = useState(60 * 9 + 55);
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = () => (
        timerId = setInterval(() => {
            setSeconds((prevSeconds) => {
                return prevSeconds + 1;
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
        <Card style={{
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
            <CardActions>
                <Button onClick={() => { setIsRunning(!isRunning) }}
                sx={{color:"white"}}>
                    Pause/Start Timer
                </Button>
            </CardActions>
        </Card>
    )
} 

export default StopWatchCard;