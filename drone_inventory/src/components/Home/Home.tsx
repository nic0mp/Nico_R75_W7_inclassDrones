// import { homedir } from 'os';
import React from 'react';
import { makeStyles} from '@mui/styles';
import { Button } from '@mui/material';
import drone_image from '../../assets/images/sample_drone_image.jpg'

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0',
    },
    navbar_container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo:{
        margin: '0 0 0  0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main:{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${drone_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top:'50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }

})

export const Home = ( props:Props) =>{

    const classes = useStyles();

    return(
        <div className={classes.root}>

        </div>
        
    )
}