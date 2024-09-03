import { Injectable } from '@angular/core';
import { DmoService } from '../shared/dmo.service';


@Injectable({
  providedIn: 'root'
})
export class DmoFootingsService extends DmoService {

  override endpoint: string = '/decking/material-order/footings/'

}
