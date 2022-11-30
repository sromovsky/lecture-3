import {Request, Response} from 'express';
import {PlayList} from './PlayList';

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const p1 = new PlayList(1, "Martin Garrix" , "The Only Way Is UP" , 3.25,"youtube/441");
const p2 = new PlayList(2, "Avicii" , "Levels" , 3.20,"youtube/942");
const p3 = new PlayList(3, "Martin Garrix", "Access" ,3.15,"youtube/264");
const p4 = new PlayList(4, "Avicii","Hey Brother",4.15,"youtube/765");
const p5 = new PlayList(5, "Tobu","Cacao",3.12,"youtube/491");
const p6 = new PlayList(6, "Tobu","Dusk",3.41,"youtube/389");
const p7 = new PlayList(7, "Tobu","Candyland",3.21,"youtube/547");
const p8 = new PlayList(8, "Tobu","Enigma",3.41,"youtube/936");

let array: PlayList[] = [p1, p2, p3, p4, p5, p6, p7, p8];

app.get('/', (req: Request, res: Response) => {
    res.send({autor: "Jakub Macuha"});
});

app.get('/PlayList', (req: Request, res: Response) => {
        res.send(array);
});

app.get('/PlayList/:trackId', (req: Request, res: Response) => {
    const trackId = Number(req.params.trackId);
    const au = array.find(au => au.getTrackId() === trackId);
    if (au) {
        res.send(au);
    } else {
        res.send({});
    }
});



app.get('/PlayList//:artistName', (req: Request, res: Response) => {
   const artistName = req.params.artistName;
   const au = array.filter(au => au.getArtistName() === artistName);
   if (au.length == 0){
    res.send('not found'); }
    else {
       if (au) {
           res.send(au);
         }
       else {
       res.send('not found error');
      }
    }
});

app.put('/PlayList/:trackId', (req: Request, res: Response) => {
    const trackId = Number(req.params.trackId);
    const autsong = array.find(autsong => autsong.getTrackId() === trackId);
   if (autsong) {
            autsong.setArtistName(req.body.artistName);
            autsong.setSongName(req.body.songName);
            autsong.setPlaytime(Number(req.body.playtime));
            autsong.setAdrUrl(req.body.adrUrl);
            res.send(autsong);
    }
    else {
      res.send('autsong not found!');
   }
});

app.delete('/PlayList/:trackId', (req: Request, res: Response) => {
    const trackId = Number(req.params.trackId);
    array = array.filter(autsong => autsong.getTrackId() !== trackId);
    res.send(`TrackId: ${trackId} DELETED!`);
});

app.post('/PlayList', (req: Request, res: Response) => {

       const pl= new PlayList( array.length + 1,
        req.body.artistName,
        req.body.songName,
        Number(req.body.playtime),
        req.body.adrUrl
        );
         array.push(pl);
         res.send(pl);

        res.send(`OK - new trackId: ${array.length + 1}`);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});
