import { TedushopAngular2Page } from './app.po';

describe('tedushop-angular2 App', () => {
  let page: TedushopAngular2Page;

  beforeEach(() => {
    page = new TedushopAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
