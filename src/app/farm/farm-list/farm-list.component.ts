import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFarmModalComponent } from '../add-farm-modal/add-farm-modal.component';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAddFarmModal() {
    this.dialog
      .open(AddFarmModalComponent, {
        width: '600px',
      });
      // .afterClosed()
      // .subscribe(async (response) => {
      //   if(response.button === 'salvar'){
      //     alert('Farm Saved!');
      //   }
      // })
  }

}
