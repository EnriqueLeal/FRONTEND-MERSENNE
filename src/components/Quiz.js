import React, { useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPOINTS, BASE_URL } from '../api'
import useStateContext from '../hooks/useStateContext'
import { Card, CardContent, CardMedia, CardHeader, List, ListItemButton, Typography, Box, LinearProgress,FormControl,OutlinedInput,InputAdornment,FormHelperText,FormControlLabel,CardActionArea } from '@mui/material'
import { getFormatedTime } from '../helper';
import { useNavigate } from 'react-router';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import axios from 'axios'
import Table from './Table';
// import { Modal } from 'react-bootstrap';

export default function Quiz() {
    const [checked, setChecked] = React.useState(false);
    const [qnTableColums, setColumns] = useState([])
    const [qns, setQns] = useState([])
    const [qnIndex, setQnIndex] = useState(0)
    const [timeTaken, setTimeTaken] = useState(0)
    const { context, setContext } = useStateContext()
    const navigate = useNavigate()
    const [qnNombre, setQnNombre] = useState([])
    const [NumeroPrimo, setNumeroPrimo] = useState(0)
    const [inputValue, setInputValue] = useState('');

    let timer;
    
    const handleChange = () => {
        setChecked((prev) => !prev);
      };

    
    const getFreshModel = () => ({
        name: '',
        email: ''
    })


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

      const headers = {
        'Content-Type': 'application/json', // Establece el encabezado Content-Type como application/json
      };


    const handleClick = (e) => {
            createAPIEndpoint(ENDPOINTS.getMersenne)
                  .fetchById(inputValue)
                  .then(res => {
                    console.log(res);

                    let values = [{id:"",cantidad:"",activo:""}]
                    setNumeroPrimo(res.data);
                    values[0].id = 0;
                    values[0].cantidad = Number(res.data);
                    values[0].activo = true;
                    var json = JSON.stringify(values);
                    json = json.replaceAll("[","");
                    json = json.replaceAll("]","");
                    console.log(json);
                    // createAPIEndpoint(ENDPOINTS.postMersenne)
                    // .post({id:0,cantidad:Number(res.data),activo:true})
                    // .then(navigate("/Portafolio"))    
                    // .catch(err => console.log(err))


                    createAPIEndpoint(ENDPOINTS.getMersenneAll)
                        .fetch()
                        //.then((res) => res.json())
                        .then((res) => setColumns(res.data))    
                        .catch(err => console.log(err))

                        
        
                  })
                  .catch(err => console.log(err))
    }

   

   

    
    const icon = (
        <Card style={{ width: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                alt="GeeksforGeeks"
                                component="img"
                                title="GeeksforGeeks"
                                height="150"
                                image=
                                "https://matematicasynegocios.files.wordpress.com/2017/03/41081-numeros-primos.png?w=382"
                            />
                        </CardActionArea>
                    </Card>
    );

    return (
        <>
        
        <Card
                sx={{
                    maxWidth: 640, mx: 'auto', mt: 5,
                    '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' }
                }}>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                        endAdornment={<InputAdornment position="end"></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <Box sx={{ height: 180 }}>
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label="Mostrar números primos"
                        />
                        <Box sx={{ display: 'flex' }}>
                            <Fade in={checked}>{icon}</Fade>
                        </Box>
                    </Box>
                    <FormHelperText id="outlined-weight-helper-text">Número primo</FormHelperText>

                    <Button onClick={(e)=>{
                        handleClick();
                    }} variant="outlined">Enviar</Button>
                </FormControl>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '100%', maxWidth: '140'
                }}>
                    <Table qnTableColums={qnTableColums} />
                </Box>

            </Card>
        
        
        
        </>

        
    )
}
