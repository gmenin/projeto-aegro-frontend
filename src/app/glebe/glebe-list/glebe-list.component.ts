import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Glebe } from 'src/app/interfaces/glebe.model';
import { GlebeService } from 'src/app/service/glebe.service';

@Component({
  selector: 'app-glebe-list',
  templateUrl: './glebe-list.component.html',
  styleUrls: ['./glebe-list.component.css']
})
export class GlebeListComponent implements OnInit {

  farmId = this.activatedRoute.snapshot.params['id'];
  glebes: Glebe[] = [];

  constructor(
    private glebeService: GlebeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getGlebes(this.farmId);
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
