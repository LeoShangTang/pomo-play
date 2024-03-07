import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Card, List } from "@mui/material";
import TaskCard from "./TaskCard";

const cardStyle = {
    borderRadius: "20px",
    p: 1,
    height: "270px",
    backgroundColor: "transparent",
    boxShadow:"none",
    minWidth: "510px"
  };

const ListOfTaskCard = () => {

    const listOfTask = useSelector((state: RootState) => {
        return state.listOfTask.listOfTask;
    })

    return (
        <Card sx={cardStyle}>

            <List sx={{ height: "100%", overflow: "auto" }}>
                {listOfTask.map((task) => (
                    <TaskCard task={task} />

                ))}
            </List>
        </Card>
    )
}

export default ListOfTaskCard;