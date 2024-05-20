import TaskCard from "./components/TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Card } from "@mui/material";
import tasksSample from "./SampleData/tasksSample";
import ListOfTaskCard from "./components/ListOfTaskCard";
import TimerCard from "./components/TimerCard";
import StopWatchCard from "./components/StopWatchCard";
import backgroundImage from './Images/CurrWallpaper.png';
import Header from "./components/Header/Header";
import "./App.css";
import { TTimers } from "./Slices/PomoTimer";
import { useEffect, useState } from "react";

const backgroundStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  
 
const App = () => {

    const listOfTask = useSelector((state: RootState) => {
        return state.listOfTask.listOfTask;
    })
    const pomoTimer = useSelector((state: RootState) => {
        return state.pomoTimer;
    })
 
     // string timer
  const getNumericalTime = () => {
    if (pomoTimer.CurrentTimer == TTimers.study) {
        return pomoTimer.StudyTimer;
    }
    if (pomoTimer.CurrentTimer == TTimers.shortBreak) {
        return pomoTimer.ShortBreakTimer;
    }
    return pomoTimer.LongBreakTimer;
  }

  const [time, setTime] = useState(getNumericalTime());

  useEffect(() => {
      console.log("useEffect works");
      console.log(getNumericalTime());
      setTime(getNumericalTime());
      console.log(time);
  }, [pomoTimer]);


    return (
        <div>
            <div style={backgroundStyles}></div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Header/>
                <TimerCard time={time} />
                {/* <StopWatchCard /> */}
                <ListOfTaskCard />
                <>
                   
                </>
            </div>
        </div>
    )
}

  export default App;