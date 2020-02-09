import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const marks = [
  {
    value: 4,
    label: "4"
  },
  {
    value: 5,
    label: "5"
  },
  {
    value: 6,
    label: "6"
  },
  {
    value: 7,
    label: "7"
  },
  {
    value: 8,
    label: "8"
  },
  {
    value: 9,
    label: "9"
  },
  {
    value: 10,
    label: "10"
  }
];

function valuetext(value) {
  return `${value} spelare`;
}

export default function PlayerAmountChooser(props) {
  const [count, setCount] = useState(6);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="number-of-players" gutterBottom>
        Antal spelare
      </Typography>
      <Slider
        defaultValue={6}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={4}
        max={10}
        onChange={(e, val) => setCount(val)}
      />

      <div className={classes.margin} />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<PlayArrow />}
        onClick={() => props.onPlayerNumberCoosen(count)}
      >
        Starta
      </Button>
    </div>
  );
}
