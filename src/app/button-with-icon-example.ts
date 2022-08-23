import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * @title Button With Icon Example
 * @order 20
 */
@Component({
  selector: 'sbb-button-with-icon-example',
  templateUrl: 'button-with-icon-example.html',
  styleUrls: ['button-with-icon-example.css'],
})
export class ButtonWithIconExample {
  constructor(public translate: TranslateService) {
    this.initTranslation();
  }

  private initTranslation() {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
