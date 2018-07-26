import { Component, onInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sekolah } from '../Sekolah';
import { SekolahService } from '../service/sekolah.service';

@Component{[
    selector: 'list-component',
    templateUrl: 'app/view/list.component.html'
  ]}

export class ListComponent implements onInit{
  students : Sekolah[];
  infoMsg : string;
  errorMsg : string;

  constructor()
      private sekolahService : SekolahService,
      private router : Router
  ) { }

  ngOnInit() {
      this.getStudents();
  }

  getStudents() : void{
      this.sekolahService.getStudents()
          .subscribe(
              student => this.students = student,
              error => console.log(error)
          );
  }

  editStudent(student : Sekolah) : void{
      let link = ['/form/edit', student.id];
      this.router.navigate(link);
  }

  deleteStudent(id : number) : void{
      this.sekolahService.deleteData(id)
          .subscribe(res => {
            if (res.success == 'success' ) {
                this.infoMsg = 'Data siswa berhasil dihapus!';
                this.getStudents();
            } else {
                this.errorMsg = 'Data siswa gagal dihapus!';
            }
          });
  }
}
