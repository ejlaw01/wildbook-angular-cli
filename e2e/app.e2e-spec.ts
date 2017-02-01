import { AngularCliWildbookPage } from './app.po';

describe('angular-cli-wildbook App', function() {
  let page: AngularCliWildbookPage;

  beforeEach(() => {
    page = new AngularCliWildbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
