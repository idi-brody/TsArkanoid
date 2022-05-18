import Platform from './Platform';

describe('Platform', () => {
  test('constructor', () => {
    // Arrange
    const expectedX: number = 50;
    const expectedY: number = 0;
    const expectedLength: number = 10;
    const expectedHeight: number = 5;

    // Act
    const actualPlatform = new Platform(expectedX, expectedY, expectedLength, expectedHeight);

    // Assert
    expect(actualPlatform.x).toEqual(expectedX);
    expect(actualPlatform.y).toEqual(expectedY);
    expect(actualPlatform.length).toEqual(expectedLength);
    expect(actualPlatform.height).toEqual(expectedHeight);
  });

  test('moveLeft', () => {
    // Arrange
    const expectedX: number = 50;
    const expectedY: number = 0;
    const expectedLength: number = 10;
    const expectedHeight: number = 5;
    const expectedNewX: number = 45;

    const platform = new Platform(expectedX, expectedY, expectedLength, expectedHeight);
    // Act
    platform.moveLeft();

    // Assert
    expect(platform.x).toEqual(expectedNewX);
  });

  test('moveRight', () => {
    // Arrange
    const expectedX: number = 50;
    const expectedY: number = 0;
    const expectedLength: number = 10;
    const expectedHeight: number = 5;
    const expectedNewX: number = 55;

    const platform = new Platform(expectedX, expectedY, expectedLength, expectedHeight);
    // Act
    platform.moveRight();

    // Assert
    expect(platform.x).toEqual(expectedNewX);
  });
});
