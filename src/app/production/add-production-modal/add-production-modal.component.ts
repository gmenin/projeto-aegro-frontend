import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Production } from 'src/app/interfaces/production.model';
import { ProductionService } from 'src/app/service/production.service';
import { showAlert } from 'src/app/utils/util';

@Component({
  selector: 'app-add-production-modal',
  templateUrl: './add-production-modal.component.html',
  styleUrls: ['./add-production-modal.component.css']
})
export class AddProductionModalComponent implements OnInit {
  productionData: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {glebeId: string, production: Production},
    private fb: FormBuilder,
    private productionService: ProductionService,
    private dialogRef: MatDialogRef<AddProductionModalComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.productionData = this.fb.group({
      amount: [this.data.production == null ? '' : this.data.production.amount]
    });
  }

  addProduction(): void {
    const production: Production = this.productionData.value;

    if (this.data.production == null) {
      // Create Production
      this.createProduction(production);
    } else {
      // Update Production
      if (typeof this.data.production.id != 'undefined'){
        const id = this.data.production.id;
        this.updateProduction(id, production);
      }
    }

  }

  createProduction(production: Production): void {
    this.productionService.addProduction(this.data.glebeId, production).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        showAlert(this.snackBar,'Erro ao salvar Produção');
      },
      complete: () => {
        console.log("Completed"),
        this.dialogRef.close({ button: 'salvar'});
      }
    });
  }

  updateProduction(id: string, production: Production): void {
    this.productionService.updateProduction(id, production).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        showAlert(this.snackBar, 'Erro ao atualizar Produção');
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
