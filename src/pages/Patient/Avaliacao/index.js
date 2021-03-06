import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Slider from '@material-ui/core/Slider'
//import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';
import imagem from '../../../assets/images/Corpo_numerado.png';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import './styles.css';



const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0, 0, .5, 0),
    padding: '30px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  slider: {
    width: 300,
    margin: '35px 0px 50px 0px',
  },
  root: {
    flexGrow: 0,
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '50px',
    '& > *': {
      margin: theme.spacing(0.5),
    }
  },
  button: {
    margin: '15px 0px 50px 0px',
  },
  Typography: {
    margin: '10px 0px 30px 0px',
  }
}));

function valuetext(value) {
  return `${value}°C`;
}

export default function Avaliação() {
  const classes = useStyles();
  const initialArray = [];

  const [text, setText] = useState(0);
  const [text2, setText2] = useState(0);
  const [pain, setPain] = useState(false);
  const [painLocation, setPainLocation] = useState(initialArray);
  const [worstPain, setWorstPain] = useState(0);
  const [painAverage, setPainAverage] = useState(0);
  const [moodInfluence, setMoodInfluence] = useState(0);
  const [habitualActivities, setHabitualActivities] = useState(0);
  const [influenceRelationship, setInfluenceRelationship] = useState(false);
  const [sleep, setSleep] = useState(0);
  const [sexBehavior, setSexBehavior] = useState(0);
  const [selfEsteem, setSelfEsteem] = useState(0);
  const [anguish, setAnguish] = useState(0);
  const [anxious, setAnxious] = useState(0);





  const sendAssessement = () => {

  };

  const handleDelete = index => {
    const arrayChips = [...painLocation];
    arrayChips.splice(index, 1);
    setPainLocation(arrayChips);
  };


  return (


    <div align="center">
      <div id="page-cuidadores" className="container">

        <header className="page-header">
          <div className="top-bar-container">
            <Link to="/AppMenu">
              <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="Cuidador" />
          </div>

          <div className="header-content">
            <strong>Avaliação Diária
              <div align="center">
                {new Date().getUTCDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
              </div>
            </strong>
          </div>
        </header>

        <Paper className={classes.paper}>


          <Typography component="h2" variant="h6" align="center">
            Você está sentindo dor hoje?
          </Typography>
          <div className={classes.root}>
            <Box>
              <ButtonGroup className={classes.button} disableElevation variant="contained" color="primary" >

                <Button onClick={() => { setPain(true) }}>Sim</Button>
                <Button onClick={() => { setPain(false) }}>Não</Button>


              </ButtonGroup>
            </Box>
          </div>


          <Typography component="h2" variant="h6" align="center" >
            Onde está localizada sua dor? digite o(s) número(s).
          </Typography>
          <img src={imagem} />
          <h2>Locais</h2>
          <div className={classes.chips}>
            {painLocation.map((element, index) =>
              <Chip key={index}
                size="small"
                label={element}
                // value={painLocation}
                onDelete={index => {
                  const arrayChips = [...painLocation];
                  arrayChips.splice(index, 1);
                  setPainLocation(arrayChips);
                }}
                color="primary"
              />
            )
            }
          </div>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button

                style={{ height: 50 }}
                onClick={() => {
                  setPainLocation(painLocation => [...painLocation, text])
                }}>
                Inserir
              </Button>

            </ButtonGroup>
          </form>



          <Typography className={classes.Typography} component="h2" variant="h6" align="center" >
            Onde está a dor que mais te encomoda? digite apenas um número.
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={text2}
              onChange={e => setText2(e.target.value)}
            />
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button

                style={{ height: 50 }}
                onClick={(text2) => setWorstPain(text2)}>
                Inserir
              </Button>

            </ButtonGroup>
          </form>


          <Typography className={classes.Typography} component="h2" variant="h6" align="center" >
            Qual é a media de intensidade desta dor nas últimas 24hs?
          </Typography>
          <div className={classes.slider}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={10}
              value={painAverage}
              onChange={(event, newValue) => { setPainAverage(newValue) }}
              valueLabelDisplay="auto"
            />
          </div>


          <h3 style={{ margin: "0px 0px 50px 0px" }}>
            Nas últimas 24 horas
          </h3>
          <Typography component="h2" variant="h6" align="center">
            Quanto a dor está influenciando no seu humor?
          </Typography>
          <div className={classes.slider}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={10}
              value={moodInfluence}
              onChange={(event, newValue) => { setMoodInfluence(newValue) }}
              valueLabelDisplay="auto"
            />
          </div>


          <Typography component="h2" variant="h6" align="center" >
            Quanto a dor está atrapalhando seu desempenho nas atividades habituais?
          </Typography>
          <div className={classes.slider}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={10}
              value={habitualActivities}
              onChange={(event, newValue) => { setHabitualActivities(newValue) }}
              valueLabelDisplay="auto"
            />
          </div>


          <Typography component="h2" variant="h6" align="center">
            A dor que você está sentindo tem influenciado a sua relação com as outras pessoas?
          </Typography>
          <div >
            <Box >
              <ButtonGroup className={classes.button} disableElevation variant="contained" color="primary" >
                <Button onClick={() => { setInfluenceRelationship(true) }}>Sim</Button>
                <Button onClick={() => { setInfluenceRelationship(false) }}>Não</Button>
              </ButtonGroup>
            </Box>
          </div>


          <Typography component="h2" variant="h6" align="center" >
            Quanto o seu sono está sendo prejudicado pela dor?
          </Typography>
          <div className={classes.slider}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={10}
              value={sleep}
              onChange={(event, newValue) => { setSleep(newValue) }}
              valueLabelDisplay="auto"
            />
          </div>


          <Typography component="h2" variant="h6" align="center" >
            Quanto a dor está influeniando no seu comportamento sexual?
          </Typography>
          <div className={classes.slider}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={10}
              value={sexBehavior}
              onChange={(event, newValue) => { setSexBehavior(newValue) }}
              valueLabelDisplay="auto"
            />
          </div>


          <Typography component="h2" variant="h6" align="center" >
            A dor está afetando a sua autoestima?
          </Typography>
          <div className={classes.slider}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={10}
              value={selfEsteem}
              onChange={(event, newValue) => { setSelfEsteem(newValue) }}
              valueLabelDisplay="auto"
            />
          </div>


          <Typography component="h2" variant="h6" align="center" >
            Quanto a angústia pode estar relacionada à sua dor?
          </Typography>
          <div className={classes.slider}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={10}
              value={anguish}
              onChange={(event, newValue) => { setAnguish(newValue) }}
              valueLabelDisplay="auto"
            />
          </div>


          <Typography component="h2" variant="h6" align="center" >
            Quanto você está ansioso para que a dor pare?
          </Typography>
          <div className={classes.slider}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={10}
              value={anxious}
              onChange={(event, newValue) => { setAnxious(newValue) }}
              valueLabelDisplay="auto"
            />
          </div>

          <Fab onclick={sendAssessement} variant="extended" color="primary" aria-label="add" className={classes.margin}>
            <NavigationIcon className={classes.extendedIcon} />
          Enviar Avaliação
        </Fab>


        </Paper>
      </div>



    </div>

  );
}