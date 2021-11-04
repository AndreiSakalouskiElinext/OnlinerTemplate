const Page = require('./page');

class LandingPage extends Page {
  get searchInput() {
    return $('input.fast-search__input');
  }

  get searchFrame() {
    return $('iframe.modal-iframe');
  }

  async searchForItem(itemName) {
    await this.searchInput.waitForDisplayed();
    await this.searchInput.setValue(itemName);
  }

  async clickCategoryButton(categoryName) {
    await browser.switchToFrame(await this.searchFrame);
    const categoryButton = await $(`*=${categoryName}`);
    await categoryButton.waitForClickable();
    await categoryButton.click();
  }
}

module.exports = new LandingPage();
