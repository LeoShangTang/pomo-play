import TaskCard from "./components/TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Card } from "@mui/material";
import tasksSample from "./SampleData/tasksSample";
import ListOfTaskCard from "./components/ListOfTaskCard";
import TimerCard from "./components/TimerCard";

const App = () => {
    
    const listOfTask = useSelector((state: RootState) => {
        return state.listOfTask.listOfTask;
    })
    
    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            }}>
            <TimerCard time={25}/>
            <ListOfTaskCard />
        </div>
            
    )
}

export default App;