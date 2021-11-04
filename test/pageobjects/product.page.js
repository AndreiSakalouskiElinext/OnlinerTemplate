const Page = require('./page');

class ProductsPage extends Page {
  get listOfDiaplayedProducts() {
    return $$(`span[data-bind *='product.extended_name']`);
  }

  get loadingBar() {
    return $('div.schema-filter-button__state_animated');
  }

  getCheckboxLocator(checkboxValue) {
    return `//span[text() = 'Производитель']/../following-sibling::div//span[text() = '${checkboxValue}']/parent::label`;
  }

  async markCheckbox(checkboxValue) {
    const checkBox = await $(this.getCheckboxLocator(checkboxValue));
    await checkBox.waitForClickable();
    await checkBox.click();
    await this.waitForLoadingToDisappear();
  }

  async waitForLoadingToDisappear() {
    await this.loadingBar.waitForExist({
      timeout: 10000,
      reverse: true,
    });
  }

  async validateProductsLoadedCorrectly(productsBrand) {
    return await this.listOfDiaplayedProducts
      .map(async (product) => await product.getText())
      .every(async (productText) => await productText.includes(productsBrand));
  }
}

module.exports = new ProductsPage();
