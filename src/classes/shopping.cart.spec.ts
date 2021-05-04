import { Discount } from './discount';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return {sut, discountMock};
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
}

describe('ShoppingCart', () =>{
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });


  it('should have 2 cart items', () => {
    const { sut } = createSut();
    expect(sut.items.length).toBe(true);
  });
});