import TaskCard from "./components/TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Card } from "@mui/material";
import tasksSample from "./SampleData/tasksSample";

const App = () => {
    
    const listOfTask = useSelector((state: RootState) => {
        return state.listOfTask.listOfTask;
    })
    
    return (
            <TaskCard task={tasksSample[0]}/>
    )
}

export default App;