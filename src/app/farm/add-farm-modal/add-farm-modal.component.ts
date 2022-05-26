import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Farm } from 'src/app/interfaces/farm.model';
import { FarmService } from 'src/app/service/farm.service';

@Component({
  selector: 'app-add-farm-modal',
  templateUrl: './add-farm-modal.component.html',
  styleUrls: ['./add-farm-modal.component.css']
})
export class AddFarmModalComponent implements OnInit {
  farmData: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private farmService: FarmService) { }

  ngOnInit(): void {
    this.farmData = this.fb.group({
      name: ['']
    });
  }

  addFarm(): void {
    const farm: Farm = this.farmData.value;
    
    this.farmService.addFarm(farm).subscribe({
      next: (responseData) => console.log(responseData),
      error: (e) => {
        console.log(e);
        alert('Erro ao salvar Fazenda');}
    });
  }

}
