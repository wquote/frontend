import { Component, OnInit } from '@angular/core';
import { MaterialOrder } from '../../shared/dmo-footing.model';
import { DmoFrameService } from '../shared/dmo-frame.service';

@Component({
  selector: 'app-dmo-frame-list',
  templateUrl: './dmo-frame-list.component.html',
  styleUrl: './dmo-frame-list.component.css'
})
export class DmoFrameListComponent implements OnInit {
  frame: MaterialOrder = new MaterialOrder()

  constructor(
    private dmoFrameService: DmoFrameService,
  ) { }

  ngOnInit(): void {
    this.readAllFrames()
  }

  readAllFrames(): void {
    this.dmoFrameService.readAll()
      .subscribe(frame => {
        this.frame = frame[0]
        console.log(this.frame)
      })
  }
}
