 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CatService } from '../../cat.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private catService: CatService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: '',
      age: '',
      sexe: '',
      description: '',
    });
  }

  addCat(name, age, sexe, description) {
    this.catService.addCat(name, age, sexe, description).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}