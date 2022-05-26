import { Component, OnInit } from '@angular/core';
import { FarmService } from 'src/app/service/farm.service';

@Component({
  selector: 'app-add-farm-modal',
  templateUrl: './add-farm-modal.component.html',
  styleUrls: ['./add-farm-modal.component.css']
})
export class AddFarmModalComponent implements OnInit {

  constructor(
    private farmService: FarmService) { }

  ngOnInit(): void {
  }

  addFarm(): void {
    const farm = {'name': 'Fazenda DO zé'};
    this.farmService.addFarm(farm).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        alert('Erro ao salvar Fazenda');}
    });
  }

}
