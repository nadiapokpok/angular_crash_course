import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Cat } from '../../cat.model';
import { CatService } from '../../cat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Cat[];
  displayedColumns = ['name', 'age', 'sexe', 'description', 'actions'];
  cats: Cat[];

  constructor(private catService: CatService, private router: Router) { }

  ngOnInit() {
    //on s'abonne pour voir ce qu'on a sollicité à l'uri correspondante ds catservice
    /*this.catService.getCats().subscribe((cats) =>{
      console.log(cats);
    })*/

    this.fetchCats();
  }

  fetchCats() {
    this.catService
      .getCats()
      .subscribe((data: Cat[]) => {
        this.cats = data;
        console.log('Data requested ...');
        console.log(this.cats);
      });
  }

  editCat(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteCat(id) {
    this.catService.deleteCat(id).subscribe(() => {
      this.fetchCats();
    });
  }

}
