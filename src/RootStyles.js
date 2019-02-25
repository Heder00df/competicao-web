import { createMuiTheme } from "@material-ui/core/styles/index";
import grey from "@material-ui/core/colors/grey";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#054672"
    },
    secondary: grey
  },
  overrides: {
    MuiFormHelperText: {
      root: {
        color: "red"
      }
    }
  }
});

const styles = theme => ({
  root: theme.typography.body1
});

export default styles;
