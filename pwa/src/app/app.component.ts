import { APP_INITIALIZER, Component, NgZone } from '@angular/core';
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
import { AppUpdateService } from './shared/services/AppUpdate.service';
import { SwUpdate } from '@angular/service-worker';
import Swal from "sweetalert2";

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
  private readonly EVERY_HOUR = 3600 * 1000

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform,
    private zone: NgZone,
    public swUpdate: SwUpdate
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

  ngOnInit(): void {
    // running the interval outside of Zone.js allows the app to eventually get stable:
    // https://angular.io/api/core/ApplicationRef#isstable-examples-and-caveats
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.swUpdate.checkForUpdate()
      }, this.EVERY_HOUR)
    })
    // subscribe for app updates available
    this.swUpdate.versionUpdates.subscribe(async (event) => {

      if (event.type === "VERSION_READY") {
        Swal.fire({
          icon: "info",
          title: "Atención",
          text: "Existe una nueva versión de la aplicación, por favor actualiza para continuar.",
          allowOutsideClick: false
        }).then(
          async (result) => {
            await this.swUpdate.activateUpdate()
            // refresh the page so that the new files become active
            document.location.reload()
          }
        );
      }
      // const updateNow = window.confirm(
      //   `New version available! Update now and restart the app?`
      // )
      // if (updateNow) {
      //   // trigger the update - this will download all changed files
      //   await this.swUpdate.activateUpdate()
      //   // refresh the page so that the new files become active
      //   document.location.reload()
      // }
    })
  }

  openPromptComponent(mobileType: 'ios' | 'android') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() => this.bottomSheet.open(PromptComponentComponent, { data: { mobileType, promptEvent: this.promptEvent } }));
  }
  
}

