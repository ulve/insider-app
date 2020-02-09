import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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

export default function PlayerAmountChooser() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Röstning
      </Typography>
      <Typography className={classes.text} gutterBottom>
        Har ni mislsycaks att gissa rätt på ordet? I sådana fall har ni tyvärr
        förlorat.
      </Typography>
      <Typography className={classes.text} gutterBottom>
        Har ni gissat rätt ord? I sådan fall skall alla utom ledare rösta om vem
        som är förrädare (ledaren har utslagsröst). Gissar ni rätt så vinner
        alla utom förrädaren. Gissar ni fel så vinner förrädaren.
      </Typography>
    </div>
  );
}
