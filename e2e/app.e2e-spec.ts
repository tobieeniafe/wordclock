import { WordclockPage } from './app.po';

describe('wordclock App', () => {
  let page: WordclockPage;

  beforeEach(() => {
    page = new WordclockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
