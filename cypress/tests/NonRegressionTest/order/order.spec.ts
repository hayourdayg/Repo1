import { addressModal } from "../../../components/addressModal/addressModal";
import { predictiveSearchProduction } from "../../../components/predictiveSearch/predictiveSearchProduct";
import { searchInput } from "../../../components/searchInput/searchInput";
import { proceedtocheckoutPage } from "../../../pages/basket/basket";
import { checkOutPage } from "../../../pages/checkout/checkout";
import { navbar } from "../../../pages/navbar/navbar";
import { productPage } from "../../../pages/product/product";
import { loginPage } from "../../../pages/identification/loginPage";
import { orderEmail } from "../../../components/orderIndentification/orderEmail";
import { deliveryOptions } from "../../../components/orderIndentification/orderDeliveryOptions";
import { paymentPage } from "../../../components/orderpayment/paymentPage";
import { countryRegion } from "../../../pages/country/country";

const testData = {
  email: "",
  number: "",
};

describe("shippingaddress", () => {
  beforeEach(() => {
    cy.visit("https://us-i3f.louisvuitton.com//", { timeout: 10000 });
    countryRegion.selectCountry("USA");
  });

  it("loginCredentials", () => {
    navbar.searchButton.click();
    searchInput.enterSearchInput("LP0001");
    cy.wait(2000);
    predictiveSearchProduction.clickFirstProduction();
    productPage.addToCart();
    productPage.viewBasket();
    proceedtocheckoutPage.clickFirstProceedToCheckout();
    orderEmail.enterEmailOnOrder("Twistt2iNRT@yahoo.com");
    orderEmail.clickContinueOnOrder();
    orderEmail.enterPasswordOnOrder("Sam_son002&@%");
    orderEmail.clickSubmitOnOrder();
    deliveryOptions.enterPostalCode("11201");
    deliveryOptions.clickContinue();
    deliveryOptions.selectShippingOption();
    checkOutPage.addressForm();
    addressModal.enterDescription("Home");
    addressModal.enterFirstName("Ralph");
    addressModal.selectTitle("Mr");
    addressModal.enterLastName("Elizabeth");
    addressModal.enterAddressNumberOne("1 Main St");
    addressModal.enterCity("New York");
    addressModal.enterPostalCode("11201");
    addressModal.selectState("New York");
    addressModal.selectPhoneType("Home");
    addressModal.enterPhoneNumber("2127778888");
    addressModal.clickBillingAddressBox();
    addressModal.clickContinue();
    paymentPage.clickCreditCard();
    paymentPage.creditcardNumber("5555555555554444");
    paymentPage.creditcardName("james Cookington");
    paymentPage.creditCardExpirationdate("09/24");
    paymentPage.creditCardCode("123");
    paymentPage.clickContinue();
  });
});
