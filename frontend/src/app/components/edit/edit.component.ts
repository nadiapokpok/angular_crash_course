import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { CatService } from '../../cat.service';
import { Cat } from '../../cat.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  cat: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private catService: CatService, 
    private router: Router, private route: ActivatedRoute, 
    private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: '',
      age: '',
      sexe: '',
      description: ''
    });
  }

 


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.catService.getCatById(this.id).subscribe(res => {
        this.cat= res;
        this.updateForm.get('name').setValue(this.cat.name);
        this.updateForm.get('age').setValue(this.cat.age);
        this.updateForm.get('sexe').setValue(this.cat.sexe);
        this.updateForm.get('description').setValue(this.cat.description);
      });
    });
  }
 
  updateCat(name, age, sexe, description) {
   

    this.catService.updateCat(this.id, name, age, sexe, description).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

}
 


