import {
  Component, OnInit, Input, Output, EventEmitter, OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit,OnChanges {

  @Input()
  private rating:number = 0;
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();
  private start: boolean[];
  @Input()
  private readonly:boolean =true;
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.start = [];
    for (let i = 1;i<=5;i++){
      this.start.push(i>this.rating);
    }
  }
  clickStar(index:number){
    if (!this.readonly){
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
