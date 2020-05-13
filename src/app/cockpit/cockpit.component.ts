import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated =new EventEmitter<{servername:string,servercontent:string}>();
 @Output() blueprintCreated =new EventEmitter<{servername:string,servercontent:string}>();
  newservername="";
  newservercontent="";
  constructor() { }

  ngOnInit(): void {
  }
  OnAddServer(){
    this.serverCreated.emit({servername:this.newservername,
    servercontent:this.newservercontent

    });

    // this.serverElements.push({
    
    // type:'server',
    // name:this.newservername,
    // content:this.newservercontent
    
    // });
      }
    
    OnAddBlueprint(){
    this.blueprintCreated.emit({servername:this.newservername,servercontent:this.newservercontent});
    //   this.serverElements.push({
    // type:'blueprint',
    // name:this.newservername,
    // content:this.newservercontent
    
    //   });
    
    
    }
}
