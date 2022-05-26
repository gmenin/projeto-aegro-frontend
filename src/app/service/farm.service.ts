import { Injectable } from '@angular/core';
import { Farm } from '../interfaces/farm';
import { API_URL } from '../utils/util';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private api: HttpService) { }

  public addFarm(farm: Farm) {
    return this.api.post<Farm>(API_URL + '/farm', farm);
  }
}
