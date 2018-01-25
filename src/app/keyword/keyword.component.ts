import { Component, OnInit,Input } from '@angular/core';
import {Keyword} from '../models/keyword.model';
import{Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {
@Input() keyword:Keyword;//iterating the object
  constructor(private myRoute:Router) { }

  ngOnInit() {
  }
display(){
  this.myRoute.navigateByUrl('/DisplayImage')
}
}
