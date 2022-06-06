import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Farm } from 'src/app/interfaces/farm.model';
import { FarmService } from 'src/app/service/farm.service';

@Component({
  selector: 'app-delete-farm-modal',
  templateUrl: './delete-farm-modal.component.html',
  styleUrls: ['./delete-farm-modal.component.css']
})
export class DeleteFarmModalComponent implements OnInit {

  farm!: Farm;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {farm: Farm},
    private farmService: FarmService,
    private dialogRef: MatDialogRef<DeleteFarmModalComponent>
  ) { }

  ngOnInit(): void {
    this.farm = this.data.farm;
  }

  deleteFarm(): void {
    this.farmService.deleteFarm(this.farm.id!).subscribe({
      next: (responseData) => {
        console.log(responseData),
        this.dialogRef.close({ button: 'deletar'});
      },
        error: (e) => {
        console.error(e),
        alert('Erro ao deletar Fazenda');
        this.closeDialog();
      },
      complete: () => console.log("Completed")
    });
  }

  closeDialog(): void {
    this.dialogRef.close({ button: 'cancelar'});
  }

}
