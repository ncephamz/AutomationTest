const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
    it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
        const figureCalculator = new FigureCalculator({});
    
        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateRectangleArea');
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateTriangleArea');
        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
    });

    describe('A calculateRectanglePerimeter function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
        });

        it('should throw error when given with non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
        });

        it('should return correct value based on rectangle perimeter formula', () => {
            // Arrange
            const length = 20;
            const width = 10;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic);
            // Action
            const result = figureCalculator.calculateRectanglePerimeter(length, width);
            // Assert
            expect(result).toEqual(60); // 2 x (length + width)
            expect(spyAdd).toHaveBeenCalledWith(length, width);
            expect(spyMultiply).toHaveBeenCalledWith(2, 30); // (length + width)
        });
    });

    describe('A calculateRectangleArea function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
        });

        it('should throw error when given with non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(null, '2')).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError();
        });

        it('should return correct value based on rectangle area formula', () => {
            // Arrange
            const length = 20;
            const width = 10;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic);
            // Action
            const result = figureCalculator.calculateRectangleArea(length, width);
            // Assert
            expect(result).toEqual(200); // 20 x 10
            expect(spyAdd).toHaveBeenCalledWith(length, width);
            expect(spyMultiply).toHaveBeenCalledWith(20, 10); // (length + width)
        });
    });

    describe('A calculateTrianglePerimeter function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
        });

        it('should throw error when given with non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateTrianglePerimeter(true, {})).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(null, '2')).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter([], {})).toThrowError();
        });

        it('should return correct value based on Triangle perimeter formula', () => {
            const sideA = 10;
            const sideB = 10;
            const base = 5;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const figureCalculator = new FigureCalculator(MathBasic);
            const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);
            // Assert
            expect(result).toEqual(25);
            expect(spyAdd).toHaveBeenCalledWith(sideA, sideB);
            expect(spyAdd).toHaveBeenCalledWith(5, 20);
        });
    });

    describe('A calculateTriangleArea function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
            expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
            expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
        });

        it('should throw error when given with non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
            expect(() => figureCalculator.calculateTriangleArea(null, '2')).toThrowError();
            expect(() => figureCalculator.calculateTriangleArea([], {})).toThrowError();
        });

        it('should return correct value based on Triangle area formula', () => {
            const height = 10;
            const base = 5;
            const spyDevide = jest.spyOn(MathBasic, 'divide');
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic);
            const result = figureCalculator.calculateTriangleArea(height, base);
            
            expect(result).toEqual(25);
            expect(spyDevide).toHaveBeenCalledWith(50, 2);
            expect(spyMultiply).toHaveBeenCalledWith(base, height);
        });
    });

});