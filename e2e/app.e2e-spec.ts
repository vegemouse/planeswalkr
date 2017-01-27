import { MtgGuildPage } from './app.po';

describe('mtg-guild App', function() {
  let page: MtgGuildPage;

  beforeEach(() => {
    page = new MtgGuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
