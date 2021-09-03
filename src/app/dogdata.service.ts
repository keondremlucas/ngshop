import { Injectable } from "@angular/core";
import { Dog } from "./dog";
import DOGS from "./dogdata.json";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DogdataService {
   dogData: Dog[] = DOGS;
   public favorites: Dog[]
  constructor() {}

  getdog(key: string): Dog {
   for(let x = 0; x< this.dogData.length; x++)
   {
      if(this.dogData[x].id === key)
      {
        return this.dogData[x];
      }
   }

  }

  alldogs(): Observable<Dog[]> {
    return of(this.dogData);
  }

  likeclick (index: number) {

    if(!this.dogData[index].likes )
    {
      this.dogData[index].likes = 1;
    }
    else
    {
      this.dogData[index].likes ++;
    }
 }

 favoriteclick (index: number)

 {
     if(!this.dogData[index].favorite)
     {
      this.dogData[index].favorite = true;
      
     }
     else
     {
        this.dogData[index].favorite = false;

     };


 }

}
