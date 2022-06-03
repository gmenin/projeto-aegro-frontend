import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Production } from 'src/app/interfaces/production.model';
import { ProductionService } from 'src/app/service/production.service';

@Component({
  selector: 'app-delete-production-modal',
  templateUrl: './delete-production-modal.component.html',
  styleUrls: ['./delete-production-modal.component.css']
})
export class DeleteProductionModalComponent implements OnInit {

  production!: Production

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {production: Production},
    private productionService: ProductionService,
    private dialogRef: MatDialogRef<DeleteProductionModalComponent>
  ) { }

  ngOnInit(): void {
    this.production = this.data.production;
  }

  deleteProduction(): void {
    this.productionService.deleteProduction(this.production.id!).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.error(e),
        alert('Erro ao deletar Produção');
      },
      complete: () => {
        console.log("Completed"),
        this.dialogRef.close({ button: 'deletar'});
      }
    });
  }

  closeDialog() {
    this.dialogRef.close({ button: 'cancelar'});
  }

}
