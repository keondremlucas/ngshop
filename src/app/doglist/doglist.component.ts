import { Component, OnInit } from '@angular/core';
import { DogdataService } from '../dogdata.service';
import { Dog } from '../dog';
@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css']
})
export class DoglistComponent implements OnInit {

  public dogs: Dog[]
  constructor(private dogService: DogdataService) { }

  ngOnInit(): void {

     this.dogService.alldogs().subscribe(data => this.dogs = data);

  }

}
