import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from './data/store';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private storeService: StoreService, private toastrService: NbToastrService) {

  }
  selectedStore?: Store = undefined;
  myFormGroup = new FormGroup({
    currentDate: new FormControl({
      value: (new Date()).toISOString().substring(0, 10),
      disabled: true,
    }),
    servedBy: new FormControl(""),
    email: new FormControl(""),
    sportPackageDate: new FormControl(""),
    monthlyCharge: new FormControl(""),
    upfrontFee: new FormControl(""),
    installmentsOfPayment: new FormControl(""),
    otherHandyInformation: new FormControl(""),
  })
  existingStores: Store[] = [];

  ngOnInit(): void {
    this.storeService.getStoresAll().subscribe(res => {

      if (res) {
        this.toastrService.show("Success", `Stores succesfully loaded.`, { status: "success" });
        const c = Object.assign(res)
        for (let i = 0; i < c.length; i++) {
          this.existingStores.push(c[i]);
        }
      } else {
        this.toastrService.show("Info", `Stores empty.`, { status: "info" });
      }
    }, err => {
    console.log("⛳ ~ err", err)

      this.toastrService.show(err.message, `Unable to load stores.`, { status: "danger" });
    })
  }

  onSubmit() {
    console.log("⛳ ~ this.myFormGroup.get().value", this.myFormGroup.get("servedBy")?.value)
    this.storeService.postForm(this.selectedStore as any, this.myFormGroup).subscribe(res => {
      this.toastrService.show("Success", `Data saved on server.`, { status: "success" });
      console.log("⛳ ~ postForm", res)
      this.onResetForm()
    }, err => {
      this.toastrService.show("Error", `Error saving to server.`, { status: "danger" });
    })
  }

  onResetForm() {
    this.myFormGroup.reset()
    this.myFormGroup.get("currentDate")?.setValue((new Date()).toISOString().substring(0, 10))
    this.selectedStore = undefined
  }

  onGetObrazecLast() {
    this.storeService.getObrazecLast().subscribe(res => {
      console.log("⛳ ~ getObrazecLast", res)
    })
  }

  onGetObrazecAll() {
    this.storeService.getObrazecAll().subscribe(res => {
      console.log("⛳ ~ getObrazecAll", res)
    })
  }
}
