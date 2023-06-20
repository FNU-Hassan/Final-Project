// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-studentcrud',
//   templateUrl: './studentcrud.component.html',
//   styleUrls: ['./studentcrud.component.css']
// })
// export class StudentcrudComponent {
//   StudentArray: any[] = [];
//   currentStudentID = '';

//   name: string = '';
//   address: string = '';
//   phone: string = '';

//   constructor(private http: HttpClient) {
//     this.getAllStudent();
//   }

//   getAllStudent() {
//     this.http.get('http://localhost:8000/user/getAll')
//       .subscribe((resultData: any) => {
//         console.log(resultData);
//         this.StudentArray = resultData.data;
//       });
//   }

//   setUpdate(data: any) {
//     this.name = data.name;
//     this.address = data.address;
//     this.phone = data.phone;

//     this.currentStudentID = data._id;
//   }

//   UpdateRecords() {
//     const bodyData = {
//       name: this.name,
//       address: this.address,
//       phone: this.phone,
//     };

//     this.http.patch('http://localhost:8000/user/update/' + this.currentStudentID, bodyData)
//       .subscribe((resultData: any) => {
//         console.log(resultData);
//         alert('Player Updated');
//         this.getAllStudent();
//       });
//   }

//   setDelete(data: any) {
//     this.http.delete('http://localhost:8000/user/delete/' + data._id)
//       .subscribe((resultData: any) => {
//         console.log(resultData);
//         alert('player Deleted');
//         this.getAllStudent();
//       });
//   }

//   save() {
//     if (this.currentStudentID === '') {
//       this.register();
//     } else {
//       this.UpdateRecords();
//     }
//   }

//   register() {
//     const bodyData = {
//       name: this.name,
//       address: this.address,
//       phone: this.phone,
//     };

//     this.http.post('http://localhost:8000/user/create', bodyData)
//       .subscribe((resultData: any) => {
//         console.log(resultData);
//         alert('Player Registered Successfully');
//         this.name = '';
//         this.address = '';
//         this.phone = '';
//         this.getAllStudent();
//       });
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.scss']
})
export class StudentcrudComponent implements OnInit {
  StudentArray: any[] = [];
  currentStudentID = '';

  name: string = '';
  address: string = '';
  phone: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.http.get<any>('http://localhost:8000/user/getAll').subscribe(
      (resultData: any) => {
        console.log(resultData);
        this.StudentArray = resultData.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getPhoneNumbers() {
    this.http.get<any>('http://localhost:8000/phoneNumbers').subscribe(
      (resultData: any) => {
        console.log(resultData);
        // Assuming the API response contains an array of phone numbers
        // You can modify this based on the actual API response format
        const phoneNumbers = resultData.phoneNumbers;
        this.phone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getAddresses() {
    this.http.get<any>('http://localhost:8000/addresses').subscribe(
      (resultData: any) => {
        console.log(resultData);
        // Assuming the API response contains an array of addresses
        // You can modify this based on the actual API response format
        const addresses = resultData.addresses;
        this.address = addresses[Math.floor(Math.random() * addresses.length)];
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentStudentID = data._id;
  }

  updateRecords() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone
    };

    this.http.patch('http://localhost:8000/user/update/' + this.currentStudentID, bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Student Updated');
        this.getAllStudent();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  setDelete(data: any) {
    this.http.delete('http://localhost:8000/user/delete/' + data._id).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Student Deleted');
        this.getAllStudent();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  save() {
    if (this.currentStudentID === '') {
      this.register();
    } else {
      this.updateRecords();
    }
  }

  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone
    };

    this.http.post('http://localhost:8000/user/create', bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Student Registered Successfully');
        this.name = '';
        this.address = '';
        this.phone = '';
        this.getAllStudent();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
