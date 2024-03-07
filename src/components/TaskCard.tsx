import { Card, ListItem, Typography, CardContent, CardActions, IconButton, TextField} from "@mui/material"
import { ITask } from "../Slices/ListOfTask"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch } from "react-redux";
import { removeTask } from "../Slices/ListOfTask";
import zIndex from "@mui/material/styles/zIndex";

type Props = {
    task: ITask;
}

const taskCardStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "transparent",
  border: "2px solid white"
}

const textFieldSx = {
    sx: {
      height: "40px",
      width: "140%", 
      fontSize: "20px", 
      color: "white", 
      border: "none"
    }
  }

const textFieldBorderSx = {
  width: "110%",
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none', // Remove border here
    },
    '&.Mui-focused fieldset': { // Corrected selector
      background: "rgba(255, 255, 255, 0.3)",
      zIndex:"-1"
    },
  },
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
          <TextField 
            InputProps={textFieldSx}
            sx={textFieldBorderSx}
          defaultValue={task.name}/>
          
        </CardContent>
        <CardActions>
          <IconButton onClick={() => { handleDeleteTask(task.id)}}>
              <DeleteIcon sx={{color: "white"}}/>
          </IconButton>
        </CardActions>
      </Card>
    </ListItem>
  )
}

export default TaskCard;