import { Card, ListItem, Typography, CardContent, CardActions, IconButton} from "@mui/material"
import { ITask } from "../Slices/ListOfTask"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch } from "react-redux";
import { removeTask } from "../Slices/ListOfTask";

type Props = {
    task: ITask;
}

const taskCardStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "transparent",
  border: "1px solid white"
}

const TaskCard = ({ task }: Props) => {
  const dispath = useDispatch();
  
  const handleDeleteTask = (id: string) => {
    dispath(removeTask({id}));
  }

  return (
    <ListItem sx={{ display: "flex", }}>
      <Card sx={taskCardStyle}>
        <CardContent sx={{ alignSelf: "center"}}>
          <Typography variant="h6" component="div" color="white">
            {task.name}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => { handleDeleteTask(task.id)}}>
              <DeleteIcon sx={{color: "white"}}/>
          </IconButton>
          <IconButton onClick={() => { console.log("edited") }}>
              <ModeEditIcon sx={{color: "white"}}/>
          </IconButton>
        </CardActions>
      </Card>
    </ListItem>
  )
}

export default TaskCard;