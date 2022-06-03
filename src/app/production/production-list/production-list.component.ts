import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Glebe } from 'src/app/interfaces/glebe.model';
import { Production } from 'src/app/interfaces/production.model';
import { GlebeService } from 'src/app/service/glebe.service';
import { ProductionService } from 'src/app/service/production.service';
import { AddProductionModalComponent } from '../add-production-modal/add-production-modal.component';

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
    public dialog: MatDialog
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

  openAddProductionModal(): void {
    this.dialog
      .open(AddProductionModalComponent, {
        width: '30vw',
        disableClose: true,
        data: {glebeId: this.glebeId}
      })
      .afterClosed()
      .subscribe(async (response) => {
        if(response.button === 'salvar'){
          this.getProductions();
        }
      })
  }

}
