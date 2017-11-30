import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-complex-column-ordering',
  styleUrls: [
    'columnOrder.demo.css',
  ],
  template: `
    <mat-card class="card-demo">
      <mat-card-title><a
          href="http://stackoverflow.com/questions/36988183/flex-box-out-of-borders?rq=1"
          target="_blank">StackOverflow</a></mat-card-title>
      <mat-card-subtitle>Complex column ordering to wrap items to align to items above
      </mat-card-subtitle>
      <mat-card-content>
        <div class="containerX" (click)="toggleDirection()" [fxLayout]="direction + ' wrap'"
             style="cursor: pointer;">
          <div class="one   flexitem "> 1
            <div class="markup">&lt;div fxFlexOrder="1"&gt;</div>
          </div>
          <div class="two   flexitem " fxFlexOrder="3"> 2
            <div class="markup">&lt;div fxFlexOrder="3"&gt;</div>
          </div>
          <div class="three flexitem " fxFlexOrder="5"> 3
            <div class="markup">&lt;div fxFlexOrder="5"&gt;</div>
          </div>
          <div class="four  flexitem "> 4
            <div class="markup">&lt;div fxFlexOrder="2"&gt;</div>
          </div>
          <div class="five  flexitem " fxFlexOrder="4"> 5
            <div class="markup">&lt;div fxFlexOrder="4"&gt;</div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer class="bottomPad">
        <div class="hint">&lt;fxLayout="{{ direction }}"&gt;</div>
      </mat-card-footer>
    </mat-card>
  `
})
export class DemoComplexColumnOrder {
  direction = 'column';

  toggleDirection() {
    let next = (DIRECTIONS.indexOf(this.direction) + 1) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
}

const DIRECTIONS = ['column', 'column-reverse'];
