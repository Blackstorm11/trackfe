


export interface TrackDTO {
    _id:string;
    login:string;
    name:string;
    email:string;
    repository:number;
    status:TrackStatus;
    public_repos:number;
    public_gists:number;
    

}
export enum TrackStatus{
    Created= 0,
    InProgress=1,
    Done =2
    

}
