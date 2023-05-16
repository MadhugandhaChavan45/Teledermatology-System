import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import Navbar from "../../components/navbar/Navbar";
import {useLocation, useParams} from "react-router-dom";
import MyContext from "../../components/MyContext/MyContext";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const Home = (props) => {
    const classes = useStyles();
    // const pid=props.pid;
    const {pid}=useParams();
    console.log("Here home",pid);
    return (
        <div>
            {/*<p>{props.pid}</p>*/}
            <Navbar pid={pid}/>
            <Container className={classes.container}>
                <Typography variant="h4" className={classes.title}>
                    Welcome to Derma System!
                </Typography>
                {/*<Typography variant="body1">*/}
                {/*    Derma System*/}
                {/*</Typography>*/}
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Get Started
                </Button>
            </Container>
        </div>
    );
};

export default Home;