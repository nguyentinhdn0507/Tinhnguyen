import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Employee } from '../shared/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService { 
  
  formData: any;
    id: string ;
    fullName: string;
    empCode: string;
    position: string;
    mobile: 0;
  
  constructor(private firestore: AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
}
