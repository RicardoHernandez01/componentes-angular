import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Autocomplit2Component } from './autocomplit2/autocomplit2.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgePositionComponent } from './badge-position/badge-position.component';
import { ButtonComponent } from './button/button.component';
import { SelectionComponent } from './selection/selection.component';
import { ButtonTogglesComponent } from './button-toggles/button-toggles.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { BasicChecboxesComponent } from './basic-checboxes/basic-checboxes.component';
import { BasicChipComponent } from './basic-chip/basic-chip.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { BasicDividerComponent } from './basic-divider/basic-divider.component';
import { MatExpansionPanelComponent } from './mat-expansion-panel/mat-expansion-panel.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    Autocomplit2Component,
    AutocompleteComponent,
    BadgePositionComponent,
    ButtonComponent,
    SelectionComponent,
    ButtonTogglesComponent,
    BasicCardComponent,
    BasicChecboxesComponent,
    BasicChipComponent,
    DatepickerComponent,
    DialogOverviewComponent,
    BasicDividerComponent,
    MatExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnidadDos';
}
