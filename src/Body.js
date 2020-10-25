import React from "react";
import "./Body.css";
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizon from '@material-ui/icons/MoreHorizOutlined';
import SongRow from './SongRow';

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      {/* <h1>I am the body</h1> */}
      <Header spotify={spotify} />
      
      <div className ='body__info'>
        <img src={discover_weekly?.images[0].url} alt=''/>
        <div className ='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          {/* <p>description...</p> */}
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className ='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='body__shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizon />
        </div>
        {/* List of Songs */}
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
