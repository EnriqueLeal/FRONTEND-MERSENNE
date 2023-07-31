import React, { useEffect } from 'react'
import { Button, Card, CardContent, TextField, Typography,Avatar,CardMedia,CardActionArea,CardActions } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router'
import { green,deepOrange,deepPurple } from '@mui/material/colors';


const getFreshModel = () => ({
    name: '',
    email: ''
})

export default function Login(props) {

    const { context, setContext, resetContext } = useStateContext();
    const navigate = useNavigate()

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    useEffect(() => {
        resetContext()
    }, [])


    const login = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.participant)
                .post(values)
                .then(res => {
                    setContext({ participantId: res.data.participantId })
                    navigate('/portafolio')
                })
                .catch(err => console.log(err)  )
    }

    const Formulario = e => {
        e.preventDefault();
        if (validate())
            navigate('/Forms')
          
    }
    const styles = {
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9,
          marginTop:'30'
        }
    };

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }
    const { classes } = props;
    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                   
                    <Card style={{ width: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                alt="GeeksforGeeks"
                                component="img"
                                title="GeeksforGeeks"
                                height="100"
                                image=
                                "https://prolec.energy/wp-content/uploads/2021/01/Prolec%C2%AE_Logo_RGB.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Proyecto
                                </Typography>
                                <Typography variant="body2"
                                    color="textSecondary"
                                    component="p">
                                   Enrique Leal Isla
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="off" onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.email && { error: true, helperText: errors.email })} />
                            <TextField
                                label="Name"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.name && { error: true, helperText: errors.name })} />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%' }}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>

            <a href="https://www.linkedin.com/in/luis-enrique-leal-isla-garcia-bab378141/" target={'_blank'} > LUIS ENRIQUE LEAL ISLA GARCIA</a>  
        </Center>

        


    )
}
