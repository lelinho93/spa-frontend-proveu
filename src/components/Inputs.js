import React, { useState } from "react";
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

 
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(5),
      
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function Inputs() {

    const [name, setName] = useState("")
    const [startDate, setStartDate] = useState("")
    const [startHour, setStartHour] = useState("")
    const [endDate, setEndDate] = useState("")
    const [endHour, setEndHour] = useState("")
    const [response, setResponse] = useState("")    


      const onSubmitInputs = () => {
        const body = {
          name: name,
          startDate: startDate,
          startHour: startHour,
          endDate:endDate,
          endHour: endHour
        }
        if(!name || !startDate || !startHour || !endDate || !endHour) {
          alert("Preencha todos os campos")
        }
        axios.post("http://localhost:3003/calcularHoras", body)
        .then(response => {
          setResponse(response.data)
        })
        .catch(response => {
          console.log(response);
        })
      }
  
    function handleStartDate(event) {
      setStartDate(event.target.value)
      }
    
    function handleStartHour(event) {
      setStartHour(event.target.value)
    }
  
    function handleEndDate(event) {
    setEndDate(event.target.value)
    }
  
    function handleEndHour(event) {
      setEndHour(event.target.value)
      }
  
    function  handleNameInput(event) {
      setName(event.target.value)
    }
      
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccessTimeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Jornada de trabalho
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <TextField
                autoComplete="Nome"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome"
                value={name}
                onChange={handleNameInput}
                autoFocus
                />
               <Grid item xs={12} sm={6}>
                  <TextField
                  id="date"
                  label="Dia de Entrada"
                  type="date"
                  value={startDate}
                  onChange={handleStartDate}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
              </Grid>     
              <Grid item xs={12} sm={6}>
                <TextField
                  id="time"
                  label="Horário"
                  type="time"
                  value={startHour}
                  onChange={handleStartHour}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  inputProps={{
                  step: 300,
                  }}
                />
              </Grid>             
              <Grid item xs={12} sm={6}>
                  <TextField
                  id="date"
                  label="Dia de Saída"
                  type="date"  
                  value={endDate}
                  onChange={handleEndDate}              
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="time"
                  label="Horário"
                  type="time"
                  value={endHour}
                  onChange={handleEndHour}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  inputProps={{
                  step: 300,
                  }}
                />
              </Grid>     
            </Grid>            
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmitInputs}
            >
              Calcular
            </Button>        
            </form>
          <h2>{response}</h2> 
        </div>
        
      </Container>
    );
  }