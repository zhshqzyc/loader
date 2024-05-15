import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { LoaderType } from './loader/models/loader-type.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, LoaderComponent],
})
export class AppComponent {
  title = 'loader';
  isLoading: boolean = true;
  loaderType: LoaderType = LoaderType.Loading;
}
