import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Card, List } from "@mui/material";

const cardStyle = {
    borderRadius: "20px",
    p: 1,
    width: "100%",
    height: 540,
    "@media (max-width: 600px)": {
      width: "95%",
      height: 400,
    },
    "@media (max-height: 600px)": {
      height: 350,
    },
  };

const ListOfStudySessionCard = () => {

    const listOfStudySession = useSelector((state: RootState) => {
        return state.listOfStudySession.ListOfStudySession;
    })

    return (
        <Card>
            {listOfStudySession.map((studySession) => (
                <List>
                    {studySession.name}
                </List>
            ))}
        </Card>
    )
}

export default ListOfStudySessionCard;