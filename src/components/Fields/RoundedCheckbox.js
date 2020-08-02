import React, { Component } from 'react'
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    checkmark: {
        height: '17px',
        width: '17px',
    },
    container: {
        borderRadius: '50%',
        background: '#15D895',
        color: 'white',
        padding: '2px',
        display: 'flex',
    }
}));

export const RoundedCheckbox = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <CheckIcon className={classes.checkmark} />
        </div>
    )
}

export default RoundedCheckbox;
