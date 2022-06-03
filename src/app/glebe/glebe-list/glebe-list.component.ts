import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Farm } from 'src/app/interfaces/farm.model';
import { Glebe } from 'src/app/interfaces/glebe.model';
import { FarmService } from 'src/app/service/farm.service';
import { GlebeService } from 'src/app/service/glebe.service';

@Component({
  selector: 'app-glebe-list',
  templateUrl: './glebe-list.component.html',
  styleUrls: ['./glebe-list.component.css']
})
export class GlebeListComponent implements OnInit {

  farmId = this.activatedRoute.snapshot.params['id'];
  farm: Farm | undefined;
  glebes: Glebe[] = [];

  constructor(
    private glebeService: GlebeService,
    private farmService: FarmService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFarm(this.farmId);
    this.getGlebes(this.farmId);
  }

  public getFarm(id: string): void {
    if(id){
      this.farmService.getFarmById(id).subscribe({
        next: (responseData) => {
          console.log(responseData);
          this.farm = responseData;
        },
        error: (e) => console.error(e),
        complete: () => console.log("Completed")
      })
    }
  }

  public getGlebes(farmId: string): void {
    if(farmId){
      this.glebeService.getAllGlebes(farmId).subscribe({
        next: (responseData) => {
          console.log(responseData);
          this.glebes = responseData;
        },
        error: (e) => console.error(e),
        complete: () => console.log("Completed")
      })
    }
  }

}
