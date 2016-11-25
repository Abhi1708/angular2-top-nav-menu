import { TopNavPage } from './app.po';

describe('top-nav App', function() {
  let page: TopNavPage;

  beforeEach(() => {
    page = new TopNavPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
