import { RoyDemoPage } from './app.po';

describe('roy-demo App', () => {
  let page: RoyDemoPage;

  beforeEach(() => {
    page = new RoyDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
