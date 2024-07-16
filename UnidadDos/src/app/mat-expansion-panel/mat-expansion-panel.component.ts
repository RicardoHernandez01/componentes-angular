import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-mat-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mat-expansion-panel.component.html',
  styleUrl: './mat-expansion-panel.component.css'
})
export class MatExpansionPanelComponent {
  readonly panelOpenState = signal(false);
}
