import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Production } from 'src/app/interfaces/production.model';
import { ProductionService } from 'src/app/service/production.service';

@Component({
  selector: 'app-add-production-modal',
  templateUrl: './add-production-modal.component.html',
  styleUrls: ['./add-production-modal.component.css']
})
export class AddProductionModalComponent implements OnInit {
  productionData: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {glebeId: string},
    private fb: FormBuilder,
    private productionService: ProductionService,
    private dialogRef: MatDialogRef<AddProductionModalComponent>
  ) { }

  ngOnInit(): void {
    this.productionData = this.fb.group({
      amount: ['']
    });
  }

  addProduction(): void {
    const production: Production = this.productionData.value;

    // Create Glebe
    this.createProduction(production);

  }

  createProduction(production: Production): void {
    this.productionService.addProduction(this.data.glebeId, production).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        alert('Erro ao salvar Produção');
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
