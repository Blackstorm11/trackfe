import { TrackDTO, TrackStatus } from "./track.dto";

export class TrackAPI{
    public static async  getAll():Promise<TrackDTO[]>{
        const resp= await fetch("http://localhost:3001/track",{
            method:"GET"
        })
        const data= await resp.json();

        return data;
    }

}