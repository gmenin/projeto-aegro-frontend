import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Glebe } from 'src/app/interfaces/glebe.model';
import { Production } from 'src/app/interfaces/production.model';
import { GlebeService } from 'src/app/service/glebe.service';
import { ProductionService } from 'src/app/service/production.service';
import { AddProductionModalComponent } from '../add-production-modal/add-production-modal.component';
import { DeleteProductionModalComponent } from '../delete-production-modal/delete-production-modal.component';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css']
})
export class ProductionListComponent implements OnInit {

  glebeId!: string;
  glebe!: Glebe;
  productions: Production[] = [];

  constructor(
    private productionService: ProductionService,
    private glebeService: GlebeService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.glebeId = this.activatedRoute.snapshot.params['id'];

    this.getGlebe();
    this.getProductions();
  }

  getGlebe(): void {
    if(this.glebeId){
      this.glebeService.getGlebeById(this.glebeId).subscribe({
        next: (responseData) => {
          console.log(responseData);
          this.glebe = responseData;
        },
        error: (e) => console.error(e),
        complete: () => console.log("Completed")
      })
    }
  }

  getProductions(): void {
    if(this.glebeId){
      this.productionService.getAllProductions(this.glebeId).subscribe({
        next: (responseData) => {
          console.log(responseData);
          this.productions = responseData;
        },
        error: (e) => console.error(e),
        complete: () => console.log("Completed")
      })
    }
  }

  openAddProductionModal(production?: Production): void {
    this.dialog
      .open(AddProductionModalComponent, {
        width: '30vw',
        disableClose: true,
        data: {glebeId: this.glebeId, production: production}
      })
      .afterClosed()
      .subscribe(async (response) => {
        if(response.button === 'salvar'){
          this.getGlebe();
          this.getProductions();
        }
      })
  }

  openDeleteProductionModal(production: Production): void {
    this.dialog.open(DeleteProductionModalComponent, {
      width: '30vw',
      disableClose: true,
      autoFocus: false,
      data: {production: production}
    })
    .afterClosed()
    .subscribe(async (response) => {
      if(response.button === 'deletar'){
        this.productions = this.productions.filter(obj => obj !== production);
        this.getGlebe();
      }
    })
  }

  goBack(): void {
    this.location.back();
  }

}
