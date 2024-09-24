import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ChildService } from '../services/child.service';
import { CustomerService } from '../services/customer.service';
import { ICustomers } from '../interface/customer';


// export interface ICustomer {
//   no: number;
//   name: string;
//   email: number;
//   address: string;
//   phone: string;
// }

// const CUSTOMER_DATA: ICustomer[] = [
//   { no: 1, name: 'Hydrogen', email: 1.0079, address: 'H', phone: ''},
//   { no: 2, name: 'Helium', email: 4.0026, address: 'He', phone: ''},
//   { no: 3, name: 'Lithium', email: 6.941, address: 'Li', phone: ''},
//   { no: 5, name: 'Boron', email: 10.811, address: 'B', phone: ''},
//   { no: 6, name: 'Carbon', email: 12.0107, address: 'C', phone: ''},
//   { no: 7, name: 'Nitrogen', email: 14.0067, address: 'N', phone: ''},
//   { no: 8, name: 'Oxygen', email: 15.9994, address: 'O', phone: ''},
//   { no: 9, name: 'Fluorine', email: 18.9984, address: 'F', phone: ''},
//   { no: 10, name: 'Neon', email: 20.1797, address: 'Ne', phone: ''},
// ];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})

export class CustomerComponent implements OnInit {
  // customer: string = 'chiamaka'
  constructor(private router: Router, private childService: ChildService, private customerService: CustomerService) {}
  customer: string = 'Yemisi'
  displayedColumns: string[] = ['no', 'name', 'email', 'address', 'phone']
  dataSource! : ICustomers
  myName !: string //without the exclamation, it'll scream that the string is not initialized
  message: string = 'Got this message from customer componenet'

  ngOnInit(): void {
    this.onGetCustomer()
  }
  goTo(){
    this.router.navigateByUrl('/new-customer')
  }

  setName($event: string) {  //$ is to show an event driven param. //setter function
    this.myName = $event;
  }

  sendName(){
    this.childService.setName("New Name is Django")
  }

  onGetCustomer(){
    this.customerService.getCustomers().subscribe (
      (data) => {
        this.dataSource = data
      })
  }
 }



