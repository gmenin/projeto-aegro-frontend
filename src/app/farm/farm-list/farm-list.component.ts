import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Farm } from 'src/app/interfaces/farm.model';
import { FarmService } from 'src/app/service/farm.service';
import { AddFarmModalComponent } from '../add-farm-modal/add-farm-modal.component';

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

  public getFarms() {
    this.farmService.getAllFarms().subscribe({
      next: (responseData) => {
        console.log(responseData);
        this.farms = responseData;
      },
      error: (e) => console.error(e)
    })
  }

  openAddFarmModal() {
    this.dialog
      .open(AddFarmModalComponent, {
        width: '600px',
      })
      .afterClosed()
      .subscribe(async (response) => {
        if(response.button === 'salvar'){
          this.getFarms();
        }
      })
  }



}
