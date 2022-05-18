import Platform from './Platform';

describe('Platform', () => {
    test('constructor', () => {
    //Arrange
    const expectedX: number = 0;
    const expectedY: number = 0;
    const expectedLength: number = 100;
    const expectedHeight: number = 5;

    //Act
    const actualPlatform = new Platform(expectedX, expectedY, expectedLength, expectedHeight);

    //Assert
    expect(actualPlatform.x).toEqual(expectedX);
    expect(actualPlatform.y).toEqual(expectedY);
    expect(actualPlatform.length).toEqual(expectedLength);
    expect(actualPlatform.height).toEqual(expectedHeight);
    })
});