import { Dias33machismoPage } from './app.po';

describe('dias33machismo App', () => {
  let page: Dias33machismoPage;

  beforeEach(() => {
    page = new Dias33machismoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
