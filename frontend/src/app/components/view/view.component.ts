import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../../cat.model';
import { CatService } from '../../cat.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  cats : any = [];


  constructor( private catService: CatService, private router: Router) { }

  ngOnInit() {
    this.catService.getCats().subscribe(data=>{
      for(const d of (data as any)){
        this.cats.push({
          name: d.name,
          age: d.age,
          sexe: d.sexe,
          description: d.description
        })
      }
      console.log(this.cats)

   });
  }

}