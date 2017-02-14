import { browser, element, by } from 'protractor';

export class AxaUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('axa-root h1')).getText();
  }
}
