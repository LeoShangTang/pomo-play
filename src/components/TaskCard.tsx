import { Card, ListItem, Typography, CardContent, CardActions, IconButton} from "@mui/material"
import { ITask } from "../Slices/ListOfTask"

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
          <IconButton sx={{width:"10px"}}  onClick={() => { console.log("deleted") }}>
              Del
          </IconButton>
        </CardActions>
      </Card>
    </ListItem>
  )
}

export default TaskCard;