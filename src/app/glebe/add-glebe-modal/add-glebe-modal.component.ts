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
    @Inject(MAT_DIALOG_DATA) public data: {farmId: string, glebe: Glebe},
    private fb: FormBuilder,
    private glebeService: GlebeService,
    private dialogRef: MatDialogRef<AddGlebeModalComponent>
  ) { }

  ngOnInit(): void {
    this.glebeData = this.fb.group({
      name: [this.data.glebe == null ? '' : this.data.glebe.name],
      area: [this.data.glebe == null ? '' : this.data.glebe.area]
    });
  }

  addGlebe(): void {
    const glebe: Glebe = this.glebeData.value;

    if (this.data.glebe == null) {
      // Create Glebe
      this.createGlebe(glebe);
    } else {
      // Update Glebe
      if (typeof this.data.glebe.id != 'undefined'){
        const id = this.data.glebe.id;
        this.updateGlebe(id, glebe);
      }
    }
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

  updateGlebe(id: string, glebe: Glebe): void {
    this.glebeService.updateGlebe(id, glebe).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        alert('Erro ao atualizar Talhão');
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
