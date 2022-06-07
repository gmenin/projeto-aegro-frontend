import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Farm } from 'src/app/interfaces/farm.model';
import { FarmService } from 'src/app/service/farm.service';
import { showAlert } from 'src/app/utils/util';

@Component({
  selector: 'app-add-farm-modal',
  templateUrl: './add-farm-modal.component.html',
  styleUrls: ['./add-farm-modal.component.css']
})
export class AddFarmModalComponent implements OnInit {
  farmData: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {farm: Farm},
    private fb: FormBuilder,
    private farmService: FarmService,
    private dialogRef: MatDialogRef<AddFarmModalComponent>,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.farmData = this.fb.group({
      name: [this.data.farm == null ? '' : this.data.farm.name]
    });
  }

  addFarm(): void {
    const farm: Farm = this.farmData.value;

    if (this.data.farm == null) {
      // Create Farm
      this.createFarm(farm);
    } else {
      // Update Farm
      if (typeof this.data.farm.id != 'undefined'){
        const id = this.data.farm.id;
        this.updateFarm(id, farm);
      }
    }
  }

  createFarm(farm: Farm): void {
    this.farmService.addFarm(farm).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        showAlert(this.snackBar, 'Erro ao salvar Fazenda');
      },
      complete: () => {
        console.log("Completed"),
        this.dialogRef.close({ button: 'salvar'});
      }
    });
  }

  updateFarm(id: string, farm: Farm): void {
    this.farmService.updateFarm(id, farm).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        showAlert(this.snackBar, 'Erro ao atualizar Fazenda');
      },
      complete: () => {
        console.log("Completed"),
        this.dialogRef.close({ button: 'salvar'});
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close({ button: 'cancelar'});
  }

}
