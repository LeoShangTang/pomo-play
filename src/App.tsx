import TaskCard from "./components/TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Card } from "@mui/material";
import tasksSample from "./SampleData/tasksSample";
import ListOfTaskCard from "./components/ListOfTaskCard";
import TimerCard from "./components/TimerCard";
import backgroundImage from './Images/CurrWallpaper.png';



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

    return (
        <div>
            <div style={backgroundStyles}></div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <TimerCard time={25} />
                <ListOfTaskCard />
            </div>
        </div>
    )
}

  export default App;