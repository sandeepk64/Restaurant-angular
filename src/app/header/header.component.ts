import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private api:ApiService){}
  
  updateSearchKey(event:any){
    this.api.searchKey=event.target.value
  }
}
