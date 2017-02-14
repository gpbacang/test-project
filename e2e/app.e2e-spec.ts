import { AxaUiPage } from './app.po';

describe('axa-ui App', function() {
  let page: AxaUiPage;

  beforeEach(() => {
    page = new AxaUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('axa works!');
  });
});
