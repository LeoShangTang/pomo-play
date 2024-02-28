import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Card, List } from "@mui/material";
import TaskCard from "./TaskCard";

const cardStyle = {
    borderRadius: "20px",
    p: 1,
    height: "250px",
    backgroundColor: "transparent",
    boxShadow:"none"
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