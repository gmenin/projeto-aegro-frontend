import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Farm } from 'src/app/interfaces/farm.model';
import { Glebe } from 'src/app/interfaces/glebe.model';
import { FarmService } from 'src/app/service/farm.service';
import { GlebeService } from 'src/app/service/glebe.service';
import { AddGlebeModalComponent } from '../add-glebe-modal/add-glebe-modal.component';
import { DeleteGlebeModalComponent } from '../delete-glebe-modal/delete-glebe-modal.component';

@Component({
  selector: 'app-glebe-list',
  templateUrl: './glebe-list.component.html',
  styleUrls: ['./glebe-list.component.css']
})
export class GlebeListComponent implements OnInit {

  farmId!: string;
  farm!: Farm;
  glebes: Glebe[] = [];

  constructor(
    private glebeService: GlebeService,
    private farmService: FarmService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.farmId = this.activatedRoute.snapshot.params['id'];

    this.getFarm();
    this.getGlebes();
  }

  getFarm(): void {
    if(this.farmId){
      this.farmService.getFarmById(this.farmId).subscribe({
        next: (responseData) => {
          console.log(responseData);
          this.farm = responseData;
        },
        error: (e) => console.error(e),
        complete: () => console.log("Completed")
      })
    }
  }

  getGlebes(): void {
    if(this.farmId){
      this.glebeService.getAllGlebes(this.farmId).subscribe({
        next: (responseData) => {
          console.log(responseData);
          this.glebes = responseData;
        },
        error: (e) => console.error(e),
        complete: () => console.log("Completed")
      })
    }
  }

  openAddGlebeModal(glebe?: Glebe): void {
    this.dialog
      .open(AddGlebeModalComponent, {
        width: '30vw',
        disableClose: true,
        data: {farmId: this.farmId, glebe: glebe}
      })
      .afterClosed()
      .subscribe(async (response) => {
        if(response.button === 'salvar'){
          this.getFarm();
          this.getGlebes();
        }
      })
  }

  openDeleteGlebeModal(glebe: Glebe): void {
    this.dialog.open(DeleteGlebeModalComponent, {
      width: '30vw',
      disableClose: true,
      autoFocus: false,
      data: {glebe: glebe}
    })
    .afterClosed()
    .subscribe(async (response) => {
      if(response.button === 'deletar'){
        this.glebes = this.glebes.filter(obj => obj !== glebe);
        this.getFarm();
      }
    })
  }

  goBack(): void {
    this.location.back();
  }

}
