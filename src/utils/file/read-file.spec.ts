import { readImage } from './read-file';
jest.useFakeTimers();

interface WindowWithFileReader extends Window {
  FileReader: any;
}

interface MockFileReader {
  result: string;
  onerror(): void;
  onload(): void;
  readAsDataURL(): void;
}

class MockFileReader {
  onerror() { }
  onload() { }
  readAsDataURL() {
    this.result = 'result';
    this.onload();
  }
}

describe('file-read', () => {
  let originalFileReader: FileReader;

  beforeEach(() => {
    originalFileReader = (window as WindowWithFileReader).FileReader;
    (window as WindowWithFileReader).FileReader = MockFileReader;
  });

  afterEach(() => {
    (window as WindowWithFileReader).FileReader = originalFileReader;
  });

  it('should return a promise', () => {

    const file: File = {
      name: 'test.png',
      lastModified: Date.now(),
      size: 1024,
      slice: () => ({ ...file }),
      type: 'image/png'
    };
    const result = readImage(file);
    jest.runAllTicks();

    expect(result instanceof Promise).toBe(true);
  });
});
