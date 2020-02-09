import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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

export default function PlayerPresenter(props) {
  const [presenting, setPresenting] = useState(false);

  const classes = useStyles();

  const showPreparing = playerNo => {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Spelare {playerNo + 1}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<PlayArrow />}
          onClick={() => setPresenting(true)}
        >
          Visa din roll
        </Button>
      </div>
    );
  };

  const showPresenting = (role, word, onNext) => {
    let data = {};
    switch (role) {
      case "master":
        data = {
          text: `Ordet du skall förklara är "${word}". Du får endast svara "ja", "nej" eller "jag vet inte".`,
          title: "Ledare"
        };
        break;
      case "traitor":
        data = {
          text: `Du är förrädaren. Du vet att ordet är "${word}". Du skall hjälpa dom andra att gissa rätt men du får inte avslöja att du vet svaret.`,
          title: "Förrädare"
        };
        break;
      default:
        data = {
          text:
            "Du skall lista ut vilket ord ledaren känner till. Du måste även lista ut vem som är förrädare.",
          title: "Förhörare"
        };
    }
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          {data.title}
        </Typography>

        <Typography className={classes.text} gutterBottom>
          {data.text}
        </Typography>

        <Typography className={classes.text} gutterBottom>
          Ni har fem minuter på er att ställa ja- och nejfrågor till ledaren.
          När tiden är ute så måste alla utom ledaren komma överens om vilket
          ordet är och komma överens om vem som är förrädaren som visste ordet
          hela tiden.
        </Typography>

        <Typography className={classes.text} gutterBottom>
          Om ni gissar rätt på ordet och gissar rätt på vem som är förrädaren så
          vinner alla utom förrädaren.
        </Typography>

        <Typography className={classes.text} gutterBottom>
          Om ni gissar rätt på ordet och fel på förrädaren vinner förrädaren.
        </Typography>

        <Typography className={classes.text} gutterBottom>
          Om ni gissar fel på ordet förlorar alla.
        </Typography>

        <div className={classes.margin} />
        <Typography className={classes.text}>Lycka till!</Typography>
        <div className={classes.margin} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<PlayArrow />}
          onClick={() => onNext()}
        >
          Okej jag fattar!
        </Button>
      </div>
    );
  };

  const c = presenting
    ? showPresenting(props.role, props.word, props.onNext)
    : showPreparing(props.playerNo);

  return <div className={classes.root}>{c}</div>;
}
