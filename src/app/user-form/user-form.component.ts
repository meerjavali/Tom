import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
 bname="";
 btitle="";
 bstory="";
 
 constructor(private http:HttpClient){}

 post(){
  const Api_url="https://ng-tom-default-rtdb.firebaseio.com";
  this.http.post(Api_url+'/stories.json', {name:this.bname, title:this.btitle,story:this.bstory}).subscribe(res=>{console.log(res);window.location.reload();});
  
  
 }

}
