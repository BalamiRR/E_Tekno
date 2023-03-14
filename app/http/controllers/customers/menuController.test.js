const MenuController = require('./MenuController');
const Technologies = require('../../../models/technologies');

describe('MenuController', () => {
  describe('index', () => {
    test('should render the menu page with a list of technologies', async () => {
      const mockTechnologies = [        { name: 'Technology 1', price: 10 },        { name: 'Technology 2', price: 20 },      ];
      jest.spyOn(Technologies, 'find').mockResolvedValue(mockTechnologies);

      const req = {};
      const res = {
        render: jest.fn(),
      };

      await MenuController().index(req, res);

      expect(Technologies.find).toHaveBeenCalled();
      expect(res.render).toHaveBeenCalledWith('customers/menu', {appareils : mockTechnologies });
    });
  });
});
