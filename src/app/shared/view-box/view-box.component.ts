import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.scss']
})
export class ViewBoxComponent implements OnInit {

  @Input() data: Array<any>
  @Output() emitStatus = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
  
  emitSelect2(event){
    this.emitStatus.emit(event)
  }

}
