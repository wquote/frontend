import { Component, Input, OnChanges } from '@angular/core';
import { Area, Layout, Stair } from 'src/app/decking-quotes/shared/decking-quote.model';

@Component({
  selector: 'app-dqe-take-off-layout',
  templateUrl: './dqe-take-off-layout.component.html',
  styleUrls: ['./dqe-take-off-layout.component.css']
})
export class DqeTakeOffLayoutComponent implements OnChanges {
  @Input() layout: Layout = new Layout()

  beamGradeSelected: boolean = false

  stairRisers: number[] = []
  stairTreads: number[] = []
  stairHandRails: number[] = []

  ngOnChanges(): void {
    this.layout.stairs.forEach((_, index) => {
      this.calculateStairRiserTreadHandRail(index)
    })

    if (this.layout.stairs[0]?.beamGrade) {
      this.beamGradeSelected = true
    }
  }

  addArea() {
    this.layout.mainAreas.push(new Area())
  }

  removeArea(mainArea: Area) {
    this.layout.mainAreas = this.layout.mainAreas.filter(a => a != mainArea)
  }

  addLandingArea() {
    this.layout.ladingAreas.push(new Area())
  }

  removeLandingArea(landingArea: Area) {
    this.layout.ladingAreas = this.layout.ladingAreas.filter(a => a != landingArea)
  }

  addStair() {
    this.layout.stairs.push(new Stair())
  }

  removeStair(stair: Stair) {
    this.layout.stairs = this.layout.stairs.filter(a => a != stair)
  }

  calculateStairBeamGrade(index: number) {
    if (this.beamGradeSelected) {
      this.layout.stairs[index].beamGrade.size = 'double by 6 (2x6)'
      this.layout.stairs[index].beamGrade.qty = this.layout.stairs[index].width

      this.layout.stairs[index].supportPostGrade.size = '4x4'
      this.layout.stairs[index].supportPostGrade.qty = this.layout.stairs[index].riser
    }
  }

  toggleStairBeamGrade(index: number) {
    this.beamGradeSelected = !this.beamGradeSelected

    if (this.beamGradeSelected) {
      this.calculateStairBeamGrade(index)
    }
    else {
      this.layout.stairs[index].beamGrade.size = undefined
      this.layout.stairs[index].beamGrade.qty = undefined

      this.layout.stairs[index].supportPostGrade.size = undefined
      this.layout.stairs[index].supportPostGrade.qty = undefined
    }
  }

  calculateStairRiserTreadHandRail(index: number) {
    const totalRiser: number = this.layout.stairs[index].riser as number
    const riser: number = Math.ceil(totalRiser * 12 / 7.5)
    this.stairRisers[index] = riser

    const treads: number = riser - 1
    this.stairTreads[index] = treads

    this.stairHandRails[index] = Math.ceil(((treads * 10 / 12) ** 2 + (totalRiser) ** 2) ** 0.5)
  }
}
