const cartController = require('./cartController');

describe('cartController', () => {
  describe('add', () => {
    test('should add the cart with a new item', () => {
      const req = {
        session: {
          cart: null,
        },
        body: {
          _id: 'product1',
          price: 10,
        },
      };
      const res = {
        json: jest.fn(),
      };

      cartController().update(req, res);

      expect(req.session.cart).toEqual({
        items: {
          product1: {
            item: {
              _id: 'product1',
              price: 10,
            },
            qty: 1,
          },
        },
        totalQty: 1,
        totalPrice: 10,
      });
      expect(res.json).toHaveBeenCalledWith({ totalQty: 1 });
    });
  });
});
