import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public email="";

  constructor() { }
  @Input() public ParentData;

  @Output() childData = new EventEmitter()

  

  ngOnInit() {
  }
  onClick(){
    this.childData.emit(this.email);
  }


}
