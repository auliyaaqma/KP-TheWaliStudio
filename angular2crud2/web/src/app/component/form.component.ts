import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Sekolah } from '../Sekolah';
import { SekolahService } from '../service/sekolah.service';


@Component({
    selector: 'form-component',
    templateUrl: 'app/view/form.component.html'
})

export class FormComponent implements OnInit{
    title : String = '';
    student : Sekolah;
    action : String;
    errorMsg : String;
    infoMsg : String;
    selectedId : number;

    constructor(
       private activeRoute : ActivatedRoute,
       private location : Location,
       private sekolahService : SekolahService
    ){ }

    ngOnInit(){
        this.activeRoute.params.forEach((param : Params) => {
            let act = param['act'];
            if(act == 'add'){
                this.title = 'Add Student';
                this.action = 'add';
            }else{
                let id = param['id'];

                this.selectedId = id;
                this.title = 'Edit Student';
                this.action = 'edit';
            }
        });

        if(this.action == 'edit') {
            this.getData(this.selectedId);
        }
    }

    getData(id : number) : void{
        this.sekolahService.getStudent(id)
            .subscribe(
                students => this.student = students,
                error => console.log(error)
            );
    }

    goBack() : void{
        this.location.back();
    }

    addStudent(nama : string, kelas : string, jurusan : string) : void{
        nama = nama.trim();
        kelas = kelas.trim();
        jurusan = jurusan.trim();

        if(!nama || !kelas || !jurusan){
            this.errorMsg = 'Ada field yang belum terisi!';
            return;
        }

        this.sekolahService.storeData(nama, kelas, jurusan)
            .subscribe(
                res => {
                    this.errorMsg = '';

                    if(JSON.parse(res).success == 'success'){
                        this.infoMsg = 'Tambah data murid berhasil!';
                    }
                });
    }

    editStudent() : void{
        let nama = this.student.nama;
        let kelas = this.student.kelas;
        let jurusan = this.student.jurusan;
        let id = this.student.id;

        if(!nama || !kelas || !jurusan){
            this.errorMsg = 'Ada field yang belum terisi!';
            return;
        }

        this.sekolahService.updateData(id, nama, kelas, jurusan)
            .subscribe(
                res => {
                    this.errorMsg = '';

                    if(JSON.parse(res).success == 'success'){
                        this.infoMsg = 'Update data murid berhasil!';
                    }
                });
    }
}
