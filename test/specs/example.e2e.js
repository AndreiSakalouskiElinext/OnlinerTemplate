const LandingPage = require('../pageobjects/landing.page');
const ProductgPage = require('../pageobjects/product.page');

const categoryName = 'Умные часы';
const brandToFilter = 'Apple';

describe('Onliner products test', () => {
  it('should filter products correctly', async () => {
    await LandingPage.open();
    await LandingPage.searchForItem(categoryName);
    await LandingPage.clickCategoryButton(categoryName);
    await ProductgPage.markCheckbox(brandToFilter);
    expect(
      ProductgPage.validateProductsLoadedCorrectly(brandToFilter)
    ).toBeTruthy();
    await browser.pause(2000);
  });
});
