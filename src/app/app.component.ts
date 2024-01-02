import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClient } from '@angular/common/http';
import {pipe,map} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'Tom';
  bname="";
  showModal=false;
  constructor(public dialog: MatDialog, private http:HttpClient){}

   a:any[] =[
    {name:"bittu",
     title:"Story of Bittu",
     story:"one day it was raining. when i came back from my work i saw a cat fully vet and looking very dirty. it was sitting on my door mat as soon as i saw it i yelled on it coz all the dirt it is having is sticking to my mat. The cat ran away after I yelled it I saw a blood strain on my mat. I thought what i did was wrong i took the torch and came outside looking for the cat and found it shivering in road basement. I took it and wraped in my blanket brought home cleaned his wound applied turmeric and it was calling 'mmii mmii'. I thought it was feeling hungry I gave milk in bowel. it drank like small kid who is very thirsty that quickk. This made me smile i felt very Proud. From then it stayed with me. I named it bittu. Everytime I came from work it eagerly welcomes me hugs me, cheerfully jumps moves his tile. shows his love towards me in every possible way it can express. Bittu always calls me 'mmii mmii' whenever it needs food. I feel it is calling me as 'Ammi Ammi' means mother. I feel touched."
    }
  ];

  ngOnInit(): void {
    const Api_url="https://ng-tom-default-rtdb.firebaseio.com";
    this.http.get(Api_url+'/stories.json').
    pipe(map(res=>{
         for (let b in res){
          // console.log({...res[b as keyof typeof res]});
          // console.log(res[b as keyof typeof res]);
          const c = {...res[b as keyof typeof res]};
          this.a.push(c);

         }
    })).subscribe();
    
  }
  onClick(){
    this.showModal = true;

  }
  openDialog(){
    const dialogRef = this.dialog.open(UserFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
interface storyObject{
  name:string;
  title:string;
  story:string;
}