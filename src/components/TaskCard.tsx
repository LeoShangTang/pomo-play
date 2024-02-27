import { Card, ListItem, Typography, CardContent, CardActions, IconButton} from "@mui/material"
import { ITask } from "../Slices/ListOfTask"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

type Props = {
    task: ITask;
}

const TaskCard = ({ task }: Props) => {

  return (
    <ListItem sx={{ display: "flex" }}>
      <Card sx={{ width: "100%"}}>
        <CardContent sx={{ alignSelf: "center"}}>
          <Typography variant="h6" component="div">
            {task.name}
          </Typography>
          {/* <Typography variant="h5" component="div">
            {task.id}
          </Typography> */}
        </CardContent>
        <CardActions>
          <IconButton onClick={() => { console.log("edited") }}>
              <DeleteIcon />
          </IconButton>
        </CardActions>
        <IconButton onClick={() => { console.log("deleted") }}>
              <ModeEditIcon/>
          </IconButton>
      </Card>
    </ListItem>
  )
}

export default TaskCard;