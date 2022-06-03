import { Component, OnInit } from '@angular/core';
import { Production } from 'src/app/interfaces/production.model';
import { ProductionService } from 'src/app/service/production.service';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css']
})
export class ProductionListComponent implements OnInit {

  glebeId!: string;
  productions: Production[] = [];

  constructor(
    private productionService: ProductionService
  ) { }

  ngOnInit(): void {
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
