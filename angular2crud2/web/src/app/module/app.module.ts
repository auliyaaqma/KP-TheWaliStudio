import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import component
import { AppComponent } from '../component/app.component';
import { ListComponent } from '../component/list.component';
import { FormComponent } from '../component/form.component';
import { SekolahService } from '../service/sekolah.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent;
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        {path: '', redirectTo: '/list', pathMatch: 'full'},
        {path: 'list', component: ListComponent},
        {path: 'form/:act', component: FormComponent},
        {path: 'form/:act/:id', component: FormComponent}

    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
