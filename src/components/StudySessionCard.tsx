import { Card, ListItem, Typography, CardContent, CardActions, IconButton} from "@mui/material"
import { IStudySession } from "../Slices/ListOfStudySession"

type Props = {
    studySession: IStudySession;
}

const StudySessionCard = ({studySession} : Props) => {
    
    return (
        <ListItem sx={{ display: "flex" }}>
        <Card>
          <CardContent sx={{ alignSelf: "center" }}>
            <Typography variant="h5" component="div">
              {studySession.name}
            </Typography>
            <Typography variant="h5" component="div">
              {studySession.duration}
            </Typography>
          </CardContent>
            <CardActions>
              <IconButton onClick={() => {console.log("deleted")}}>
                
              </IconButton>
            </CardActions>
        </Card>
    </ListItem>
    )
}