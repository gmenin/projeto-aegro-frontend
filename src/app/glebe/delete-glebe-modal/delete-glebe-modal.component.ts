import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Glebe } from 'src/app/interfaces/glebe.model';
import { GlebeService } from 'src/app/service/glebe.service';

@Component({
  selector: 'app-delete-glebe-modal',
  templateUrl: './delete-glebe-modal.component.html',
  styleUrls: ['./delete-glebe-modal.component.css']
})
export class DeleteGlebeModalComponent implements OnInit {

  glebe!: Glebe;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {glebe: Glebe},
    private glebeService: GlebeService,
    private dialogRef: MatDialogRef<DeleteGlebeModalComponent>
  ) { }

  ngOnInit(): void {
    this.glebe = this.data.glebe;
  }

  deleteGlebe(): void {
    this.glebeService.deleteGlebe(this.glebe.id!).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.error(e),
        alert('Erro ao deletar Talhão');
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
