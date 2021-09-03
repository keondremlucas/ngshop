import { Injectable } from "@angular/core";
import { Dog } from "./dog";
import DOGS from "./dogdata.json";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DogdataService {
   dogData: Dog[] = DOGS;

  constructor() {}

  getdog(key: string): Dog {
    return this.dogData[key];
  }

  alldogs(): Observable<Dog[]> {
    return of(this.dogData);
  }
}
