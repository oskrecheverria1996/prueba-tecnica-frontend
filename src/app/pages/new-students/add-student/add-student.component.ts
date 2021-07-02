import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UtilitiesService } from '../../../shared/api/utilities.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    protected ref: NbDialogRef<AddStudentComponent>,
    private utilitiesService: UtilitiesService,
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: new FormControl('', Validators.required),
      actor: new FormControl('', Validators.required),
      dateBirth: new FormControl('',Validators.required)
    })
  }

  fnAddStudent() {
    let data_save = {
      'name': this.myForm.value['name'],
      'actor': this.myForm.value['actor'],
      'dateBirth': this.myForm.value['dateBirth'],
      'dateSolicitude': Date.now(),
    }
    let coleccion = JSON.parse(localStorage.getItem('solicitudes')) != null ? JSON.parse(localStorage.getItem('solicitudes')) : [];
    coleccion.push(data_save);
    localStorage.setItem('solicitudes', JSON.stringify(coleccion));
    this.utilitiesService.showToast('top-right', 'success', 'Se ha agregado la solicitud con exito');
    this.ref.close();
  }

}
