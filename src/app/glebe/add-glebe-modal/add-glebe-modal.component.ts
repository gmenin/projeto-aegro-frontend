import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Glebe } from 'src/app/interfaces/glebe.model';
import { GlebeService } from 'src/app/service/glebe.service';

@Component({
  selector: 'app-add-glebe-modal',
  templateUrl: './add-glebe-modal.component.html',
  styleUrls: ['./add-glebe-modal.component.css']
})
export class AddGlebeModalComponent implements OnInit {
  glebeData: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {farmId: string},
    private fb: FormBuilder,
    private glebeService: GlebeService,
    private dialogRef: MatDialogRef<AddGlebeModalComponent>
  ) { }

  ngOnInit(): void {
    this.glebeData = this.fb.group({
      name: [''],
      area: ['']
    });
  }

  addGlebe(): void {
    const glebe: Glebe = this.glebeData.value;

    // Create Glebe
    this.createGlebe(glebe);

  }

  createGlebe(glebe: Glebe) {
    this.glebeService.addGlebe(this.data.farmId, glebe).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        alert('Erro ao salvar Talhão');
      },
      complete: () => {
        console.log("Completed"),
        this.dialogRef.close({ button: 'salvar'});
      }
    });
  }

  closeDialog() {
    this.dialogRef.close({ button: 'cancelar'});
  }

}
