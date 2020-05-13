import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements=[{type:'', name:'' , content:''}];
  
  onserverAdded(sd:{servername:string,servercontent:string}){
    this.serverElements.push({

      type:'server',
      name:sd.servername,
      content:sd.servercontent

    });
  
  }

  onblueprintAdded(bp:{servername:string,servercontent:string}){

this.serverElements.push({
  type:'blueprint',
  name:bp.servername,
  content:bp.servercontent
})

  }

}
