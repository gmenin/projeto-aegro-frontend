import { Injectable } from '@angular/core';
import { Glebe } from '../interfaces/glebe.model';
import { API_URL } from '../utils/util';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GlebeService {

  constructor(private api: HttpService) { }

  public getAllGlebes(farmId: string) {
    return this.api.get<Glebe[]>(API_URL + '/farm/' + farmId + '/glebe');
  }

  public addGlebe(farmId: string, glebe: Glebe) {
    return this.api.post<Glebe>(API_URL + '/farm/' + farmId + '/glebe', glebe);
  }

  public updateGlebe(id: string, glebe: Glebe) {
    return this.api.put<Glebe>(API_URL + '/glebe/' + id, glebe);
  }
}
