import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NewVersionCheckerService } from '../../services/NewVersionChecker.service';

@Component({
  selector: 'app-NewVersionChecker',
  templateUrl: './NewVersionChecker.component.html',
  styleUrls: ['./NewVersionChecker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewVersionCheckerComponent {
  @Input() containerClasses: string;

  constructor(
      public newVersionCheckerService: NewVersionCheckerService
  ) { }

  applyUpdate(): void {
      this.newVersionCheckerService.applyUpdate();
  }

}
