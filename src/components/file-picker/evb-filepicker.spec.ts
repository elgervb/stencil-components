import { EvbFilepicker } from "./evb-filepicker";

describe('evb-filepicker', () => {

  let component: EvbFilepicker;

  beforeEach(() => component = new EvbFilepicker());

  it('should render', () => {
    expect(component.render()).toMatchSnapshot();
  });

  describe('validation', () => {

    describe('validate simple mimetypes', () => {

      it('should validate a mimetype', () => {
        const mimeType = 'image/jpg';
        const mockFile = jest.fn(() => ({ type: mimeType }));
        // @ts-ignore
        const result = component.validateMimes(mockFile(), mimeType);

        expect(result).toBe(true);
      });

      it('should reject a mimetype', () => {
        const mimeType = 'image/jpg';
        const mockFile = jest.fn(() => ({ type: 'image/jepg' }));
        // @ts-ignore
        const result = component.validateMimes(mockFile(), mimeType);

        expect(result).toBe(false);
      });

      it('should accept all when accept=empty', () => {
        const mockFile = jest.fn(() => ({ type: 'image/jpeg' }));
        // @ts-ignore
        const result = component.validateMimes(mockFile());

        expect(result).toBe(true);
      });
    });

    describe('validate wildcard mimetypes', () => {

      it('should validate image/*', () => {
        const mockFile = jest.fn(() => ({
          type: 'image/png'
        }));

        // @ts-ignore
        const result = component.validateMimes(mockFile(), 'image/*');
        expect(result).toBe(true);
      });

      it('should validate audio/*', () => {
        const mockFile = jest.fn(() => ({
          type: 'audio/mp4'
        }));

        // @ts-ignore
        const result = component.validateMimes(mockFile(), 'audio/*');
        expect(result).toBe(true);
      });

      it('should validate video/*', () => {
        const mockFile = jest.fn(() => ({
          type: 'video/mp4'
        }));

        // @ts-ignore
        const result = component.validateMimes(mockFile(), 'video/*');
        expect(result).toBe(true);
      });
    });

    describe('validate compound mimetypes', () => {
      it('should validate mimetypes', () => {
        const mimeTypes = 'mime/type, type/mime';
        const mockFile = jest.fn(() => ({ type: 'type/mime' }));
        // @ts-ignore
        const result = component.validateMimes(mockFile(), mimeTypes);

        expect(result).toBe(true);
      });

      it('should reject mimetypes', () => {
        const mimeTypes = 'mime/types, type/mimes';
        const mockFile = jest.fn(() => ({ type: 'type/mime' }));
        // @ts-ignore
        const result = component.validateMimes(mockFile(), mimeTypes);

        expect(result).toBe(false);
      })
    });

  });

});

