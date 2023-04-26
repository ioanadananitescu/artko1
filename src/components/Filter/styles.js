import {makeStyles} from '@material-ui/core/styles'



export default makeStyles((theme) => ({
  toolbar: {
    minHeight: 170,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      minHeight: 170,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: 170,
    },
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  btn: {
    width: 300,
    height: 80, 
  
  }

}));
