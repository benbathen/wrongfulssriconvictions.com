import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
        <p>Input Value: {{ data }}</p>
      `,
})
export class TestComponent implements OnChanges {
  @Input() data: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('Data input changed:', changes['data'].currentValue);
      this.performAction(changes['data'].currentValue);
    }
  }

  performAction(newValue: string): void {
    // Your logic to run when the input updates
    console.log('Method executed with new value:', newValue);
  }
}