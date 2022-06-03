import { Injectable } from '@angular/core';
import { Production } from '../interfaces/production.model';
import { API_URL } from '../utils/util';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private api: HttpService) { }

  public getAllProductions(glebeId: string) {
    return this.api.get<Production[]>(API_URL + '/glebe/' + glebeId + '/production');
  }

  public addProduction(glebeId: string, production: Production) {
    return this.api.post<Production>(API_URL + '/glebe/' + glebeId + '/production', production);
  }

  public updateProduction(id: string, production: Production) {
    return this.api.put<Production>(API_URL + '/production/' + id, production);
  }
}
