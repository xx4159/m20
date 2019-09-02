import { M20Page } from './app.po';

describe('m20 App', () => {
  let page: M20Page;

  beforeEach(() => {
    page = new M20Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
