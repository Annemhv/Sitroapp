import React from 'react';
import {Typography, withStyles} from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
    root      : {
        '& .logo-icon': {
            width     : 24,
            height    : 24,
            transition: theme.transitions.create(['width', 'height'], {
                duration: theme.transitions.duration.shortest,
                easing  : theme.transitions.easing.easeInOut
            })
        }
    },
    reactBadge: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color          : '#61dafb'
    }
});

function Logo({classes})
{
    return (
        <div className={classNames(classes.root, "flex items-center")}>
            
            <Typography className="text-16 ml-8 font-light logo-text"></Typography>
            <div className={classNames(classes.reactBadge, "react-badge flex items-center ml-12 mr-8 py-4 px-8 rounded")}>
                <img
                   
                    src="assets/images/logos/Sitro_Keltainen.png"
                    alt="react"
                    width="48"
                />
                
            </div>
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(Logo);
