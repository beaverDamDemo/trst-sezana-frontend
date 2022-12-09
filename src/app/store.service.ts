import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Store } from './data/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url: string = "https://sezana-trst.herokuapp.com";
  constructor(private httpClient: HttpClient) {

  }

  getStoresAll(): Observable<Store> {
    return this.httpClient.get(`${this.url}/store/all`)
  }

  getObrazecLast() {
    return this.httpClient.get(`${this.url}/obrazec/last`)
  }

  getObrazecAll() {
    return this.httpClient.get(`${this.url}/obrazec/all`)
  }

  postForm(selectedStore: Store, formGroup: any) {
    return this.httpClient.post(`${this.url}/obrazec/new`, {
      "storeName": selectedStore.name,
      "date": formGroup.get("currentDate")?.value,
      "servedBy": formGroup.get("servedBy")?.value,
      "email": formGroup.get("email")?.value,
      "sportPackage": formGroup.get("sportPackageDate")?.value,
      "monthlyCharge": formGroup.get("monthlyCharge")?.value,
      "upfrontFee": formGroup.get("upfrontFee")?.value,
      "installmentsOfPayment": formGroup.get("installmentsOfPayment")?.value,
      "otherHandyInformation": formGroup.get("otherHandyInformation")?.value,
    })
  }
}
