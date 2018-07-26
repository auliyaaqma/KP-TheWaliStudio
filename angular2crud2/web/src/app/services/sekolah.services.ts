import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Sekolah } from '../Sekolah';
import { Observable } from 'rxjs/observable';
import '../rxjs-operators';

@Injectable()
export class SekolahService {
    sekolahUrl : string = 'http://127.0.0.1:8000/api/v1/siswa';
    //tokenUrl : string = 'http://127.0.0.1:8000/get-token';

    constructor(
        private http : Http
    ){ }

    getStudents() : Observable<Sekolah[]> {
        return this.http.get(this.sekolahUrl)
            .map(res => <Sekolah[]> res.json());
    }

    getStudent(id : any) : Observable<Sekolah> {
        let url = this.sekolahUrl+'/'+id;
        return this.http.get(url)
            .map(res => <Sekolah> res.json());
    }

    // getToken() : Observable<string> {
    //     return this.http.get(this.tokenUrl)
    //         .map(response => <string> response.json());
    // }

    storeData(nama : string, kelas : string, jurusan : string) : Observable<string> {
        let body = JSON.stringify({ nama : nama, kelas : kelas, jurusan : jurusan});
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers: headers});

        return this.http.post(this.sekolahUrl, body, options)
            .map(res => (res.json()));
    }

    updateData(id : number, nama : string, kelas : string, jurusan : string) : Observable<string> {
        let body = JSON.stringify({ nama : nama, kelas : kelas, jurusan : jurusan});
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers: headers});
        let url = this.sekolahUrl+'/'+id;

        return this.http.post(url, body, options)
            .map(res => (res.json()));
    }

    deleteData(id : number) : Observable<string>{
        let body = JSON.stringify({ id : id });
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers : headers});
        let url = this.sekolahUrl+'/delete';

        return this.http.post(url, body, options)
            .map(res => (res.json()));
    }
}
