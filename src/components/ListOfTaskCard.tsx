import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Card, List } from "@mui/material";
import TaskCard from "./TaskCard";

const cardStyle = {
    borderRadius: "20px",
    p: 1,
    width: "50%",
    height: "400px",
    
    // "@media (max-width: 600px)": {
    //   width: "95%",
    //   height: 400,
    // },
    // "@media (max-height: 600px)": {
    //   height: 350,
    // },
  };

const ListOfTaskCard = () => {

    const listOfTask = useSelector((state: RootState) => {
        return state.listOfTask.listOfTask;
    })

    return (
        <Card  sx={{   borderRadius: "20px",
        p: 1,
        width: "50%",
        height: "400px",
        backgroundColor: "transparent",
        }}>
            {listOfTask.map((task) => (
                <List>
                    <TaskCard task={task}/>
                </List>
            ))}
        </Card>
    )
}

export default ListOfTaskCard;