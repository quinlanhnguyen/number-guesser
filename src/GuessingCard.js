import Grid from "@material-ui/core/Grid";
import './GuessingCard.css'

function GuessingCard(props) {
  return (
    <Grid container xs={8} align = {props.align} className="guessing-card" style = {{padding: 20}}>
      {props.children}
    </Grid>
  );
}

export default GuessingCard;
