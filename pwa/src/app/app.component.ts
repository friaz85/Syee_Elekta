import { APP_INITIALIZER, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { TapToTopComponent } from './shared/component/tap-to-top/tap-to-top.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PwaService } from './shared/services/pwa.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Platform } from '@angular/cdk/platform';
import { timer, take } from 'rxjs';
import { PromptComponentComponent } from './shared/component/prompt-component/prompt-component.component';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent, TapToTopComponent, NgxSpinnerModule],
  providers: [{ provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent('android');
      });
    }
    if (this.platform.IOS) {
      const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
      if (!isInStandaloneMode) {
        this.openPromptComponent('ios');
      }
    }
  }

  openPromptComponent(mobileType: 'ios' | 'android') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() => this.bottomSheet.open(PromptComponentComponent, { data: { mobileType, promptEvent: this.promptEvent } }));
  }
  
}

