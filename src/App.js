import "./App.css";
import GuessingCard from "./GuessingCard";
import Grid from "@material-ui/core/Grid";
import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

function App() {
  const [guessingNumber, setGuessingNumber] = useState("");
  const [secretNumber, setSecretNumber] = useState(Math.round(Math.random() * 100) + 1);
  const [validationText, setValidationText] = useState("");
  const [textColor, setTextColor] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <GuessingCard>
          <Typography style={{ color: "black", fontSize: 50, textAlign: "center", margin: "auto" }}>
            Guess the mystery number from 1 to 100!
          </Typography>
          <Grid item xs={12}>
            <Typography style={{ color: "black", fontSize: 110 }}>
              {guessingNumber}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ color: textColor, fontSize: 30 }}>
              {validationText}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{
                width: "50%",
                marginBottom: "3%",
                backgroundColor: "#c7c1c1",
                borderRadius: 15,
              }}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                style: { fontSize: 25, padding: 10 },
              }}
              InputProps={{ disableUnderline: true }}
              rows={1}
              multiline
              backgroundColor="#E5E5E5"
              onChange={(e) => setGuessingNumber(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Button
              style={{
                color: "white",
                backgroundColor: "#5AA1FF",
                borderRadius: 10,
                fontSize: 20,
                padding: 13,
              }}
              onClick={() => {
                const min = 1;
                const max = 100;
                const randomNumber = Math.round(
                  min + Math.random() * (max - min)
                );
                setSecretNumber(randomNumber);
                setValidationText("");
              }}
            >
              RESET
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              style={{
                color: "white",
                backgroundColor: "#5AA1FF",
                borderRadius: 10,
                fontSize: 20,
                padding: 13,
              }}
              onClick={() => {
                if (guessingNumber === secretNumber) {
                  setTextColor("green");
                  setValidationText("Correct Guess!");
                } else if (guessingNumber < secretNumber) {
                  setTextColor("red");
                  setValidationText("Incorrect Guess! Your guess is too low.");
                } else if (guessingNumber > secretNumber) {
                  setTextColor("red");
                  setValidationText("Incorrect Guess! Your guess is too high.");
                }
              }}
            >
              SUBMIT
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              style={{
                color: "white",
                backgroundColor: "#5AA1FF",
                borderRadius: 10,
                fontSize: 20,
                padding: 13,
              }}
              onClick={() => {
                setValidationText(
                  "The Correct Number is " + secretNumber + "."
                );
                setTextColor("purple");
              }}
            >
              DEBUG
            </Button>
          </Grid>
        </GuessingCard>
      </header>
    </div>
  );
}

export default App;
