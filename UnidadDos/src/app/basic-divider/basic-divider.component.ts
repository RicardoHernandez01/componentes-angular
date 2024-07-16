import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-basic-divider',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basic-divider.component.html',
  styleUrl: './basic-divider.component.css'
})
export class BasicDividerComponent {

}
