import { Component, Input } from '@angular/core';
import { LoaderType } from './models/loader-type.enum';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;

  public get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }

  private loading = 'Loading';
  private loadingPeriods = '.\0\0';

  public ngOnInit(): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  private updateLoaderPeriods() {
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..\0';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.\0\0';
          currentStep = 0;
          break;
      }
    }, 500);
  }
}
