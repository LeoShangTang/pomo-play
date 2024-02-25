import { Card, ListItem, Typography, CardContent, CardActions, IconButton, Button} from "@mui/material";
import { ITask } from "../Slices/ListOfTask";
import { useEffect, useState } from "react";

type Props = {
    time: number;
}

const TimerCard = ({time} : Props) => {
    
    const [seconds, setSeconds] = useState(60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: number | null = null;

        if (isRunning) {
            timer = setInterval(()=> {
                setSeconds((prevSeconds) => (prevSeconds - 1))
            }, 1000) as any;
        }
    
        return () => {
            if (timer !== null) {
                clearInterval(timer);
            }
          };

    },[isRunning])
 
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