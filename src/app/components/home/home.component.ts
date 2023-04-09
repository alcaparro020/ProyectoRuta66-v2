import { Component} from '@angular/core';
import { SQLserviceService } from '../../services/sqlservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public userService: SQLserviceService) { }
}
