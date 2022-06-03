import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Glebe } from 'src/app/interfaces/glebe.model';
import { Production } from 'src/app/interfaces/production.model';
import { GlebeService } from 'src/app/service/glebe.service';
import { ProductionService } from 'src/app/service/production.service';

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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.glebeId = this.activatedRoute.snapshot.params['id'];

    this.getGlebe();
    this.getProductions;
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

}
