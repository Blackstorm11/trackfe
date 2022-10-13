import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TrackAPI } from './api/track.api';
import { TrackDTO } from './api/track.dto';
import { Grid } from '@mui/material';
import Track from './api/components/Track';
import { SusersAPI } from './api/suser.api';
import { SuserDTO } from './api/susers.dto';
import Suser from './api/components/Susers';
import {Routes,Route} from 'react-router-dom';

function App() {
  const [tracks, setTracks] =useState<TrackDTO[]>([])
 
  useEffect(() => {
   async function fetchAll(){
      const resp = await TrackAPI.getAll();
      
      setTracks(resp);  
      
   }
   fetchAll();
  
  }, [])

  
  return (
    
    <div className="App">
     
      <Grid container spacing={1}>
        
      
      {
        tracks.map(track=>{
          return <Grid item xs={5}>
            <Track data={track}/>
          </Grid>
        })
      }
        
      </Grid>
    </div>
  );

}


function Susers(): JSX.Element{
     const [susers, setSusers]= useState<SuserDTO[]>([])
     useEffect(() => {
      async function fetchAll(){
         
         const resp1 = await SusersAPI.getAll();
       
         setSusers(resp1)
      }
      fetchAll();
     
     }, [])

     return(
      <div className="System users">
      <Grid container spacing={1}>
        
      
      {
        susers.map(suser=>{
          return <Grid item xs={5}>
            <Suser data={suser}/>
          </Grid>
        })
      }
        
      </Grid>
    </div>
  );
     
}

export default App;
