import { SGTTPage } from './app.po';

describe('sgtt App', () => {
  let page: SGTTPage;

  beforeEach(() => {
    page = new SGTTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
