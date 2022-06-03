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
}
