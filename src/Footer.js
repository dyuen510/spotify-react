import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Footer = () => {
  return (
    <div className="footer">
      <div className ='footer__left'>
        {/* <p>Album and song details</p> */}
        <img className='footer__albumLogo' src='https://upload.wikimedia.org/wikipedia/en/1/1d/Titaniumsong.jpg' alt='' />
        <div className = 'footer__songInfo'>
          <h4>Titanium</h4>
          <p>David Guetta feat. Sia</p>
        </div>

      </div>
      <div className ='footer__center'>
        {/* <p>Player controls</p> */}
        <ShuffleIcon className ='footer__green' />
        <SkipPreviousIcon className ='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <LoopRoundedIcon className ='footer__green' />


      </div>
      <div className = 'footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>

        </Grid>

      </div>
    </div>
  );
};

export default Footer;
