import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleQuestionsAmountChange, handleScoreChange } from "../store/actions";
import Confetti from "react-confetti";
import '../App.css';
import '../styles/yourscore.css';



const ScorePage = () => {
  const disptach = useDispatch();
  const navigate = useNavigate()
  const { score } = useSelector((state) => state);

  const handleGoSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleQuestionsAmountChange(50));
    navigate("/");
  };

  return (
    <><div className="up"><Confetti /></div>
   
    <div className="center middle">
      <Box mt={5}>
        your score is: {score}
      </Box>
      <Button color="error" onClick={handleGoSettings} variant="outlined">
        Again?
       </Button>
    </div>
    </>
  );
};

export default ScorePage