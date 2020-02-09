import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Moment from "moment";
import PlayArrow from "@material-ui/icons/PlayArrow";

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

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default function Timer(props) {
  const [stopTime, setStopTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [playing, toggle] = useAudio("fail-trombone-03.mp3");

  console.log(stopTime);
  const calculateTimeLeft = () => {
    const difference = stopTime - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  if (timeLeft && !playing && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
    toggle();
    props.onFinished();
  }

  const classes = useStyles();

  if (isRunning)
    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          {timeLeft.minutes} minuter {timeLeft.seconds} sekunder
        </Typography>
      </div>
    );
  else
    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<PlayArrow />}
          onClick={() => {
            setStopTime(Moment(new Date()).add(20, "s"));
            setIsRunning(true);
          }}
        >
          Börja
        </Button>
      </div>
    );
}
