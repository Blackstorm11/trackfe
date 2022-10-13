import { SuserDTO } from "./susers.dto";



export class SusersAPI{
     public static async getAll():Promise<SuserDTO[]>{
          const resp1 =await fetch("localhost:3002/susers",{
          method:"GET"
     })
        const data= await resp1.json();
        return data;
     }
}