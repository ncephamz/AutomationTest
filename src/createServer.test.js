const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');
 
describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });
 
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });
  
  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4); // a - b
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });
  
  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(96); // a * b
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });
  
  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 4;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(3); // a * b
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });
  
  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const server = createServer({ mathBasic: MathBasic, figureCalculator });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      console.log(responseJson);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(32);
      expect(spyRectanglePerimeter).toBeCalledWith(a, b);
    });
  });
  
  describe('when GET /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = createServer({ mathBasic: MathBasic, figureCalculator });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      console.log(responseJson);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(48);
      expect(spyRectangleArea).toBeCalledWith(a, b);
    });
  });
  
  describe('when GET /triangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 6;
      const c = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      const server = createServer({ mathBasic: MathBasic, figureCalculator });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${a}/${b}/${c}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      console.log(responseJson);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(22);
      expect(spyTrianglePerimeter).toBeCalledWith(a, b, c);
    });
  });
  
  describe('when GET /triangle/area', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 6;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      const server = createServer({ mathBasic: MathBasic, figureCalculator });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      console.log(responseJson);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(36);
      expect(spyTriangleArea).toBeCalledWith(a, b);
    });
  });

});