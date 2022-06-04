import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Farm } from 'src/app/interfaces/farm.model';
import { FarmService } from 'src/app/service/farm.service';
import { AddFarmModalComponent } from '../add-farm-modal/add-farm-modal.component';
import { DeleteFarmModalComponent } from '../delete-farm-modal/delete-farm-modal.component';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  farms: Farm[] = [];

  constructor(
    public dialog: MatDialog,
    private farmService: FarmService
  ) { }

  ngOnInit(): void {
    this.getFarms();
  }

  getFarms(): void {
    this.farmService.getAllFarms().subscribe({
      next: (responseData) => {
        console.log(responseData);
        this.farms = responseData;
      },
      error: (e) => console.error(e),
      complete: () => console.log("Completed")
    })
  }

  openAddFarmModal(farm?: Farm): void {
    this.dialog
      .open(AddFarmModalComponent, {
        width: '30vw',
        disableClose: true,
        data: {farm: farm}
      })
      .afterClosed()
      .subscribe(async (response) => {
        if(response.button === 'salvar'){
          this.getFarms();
        }
      })
  }

  openDeleteFarmModal(farm: Farm): void {
    this.dialog.open(DeleteFarmModalComponent, {
      width: '30vw',
      disableClose: true,
      autoFocus: false,
      data: {farm: farm}
    })
    .afterClosed()
    .subscribe(async (response) => {
      if(response.button === 'deletar'){
        this.farms = this.farms.filter(obj => obj !== farm);
      }
    })
  }

}
