import { Injectable } from '@angular/core';
import { Farm } from '../interfaces/farm.model';
import { API_URL } from '../utils/util';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private api: HttpService) { }

  public getAllFarms() {
    return this.api.get<Farm[]>(API_URL + '/farm/');
  }

  public getFarmById(id: string) {
    return this.api.get<Farm[]>(API_URL + '/farm/' + id);
  }

  public addFarm(farm: Farm) {
    return this.api.post<Farm>(API_URL + '/farm', farm);
  }

  public updateFarm(id: string, farm: Farm) {
    return this.api.put<Farm>(API_URL + '/farm/' + id, farm);
  }
}
