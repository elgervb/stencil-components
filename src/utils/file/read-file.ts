
/**
 * Reads a file and returns the dataUri through the Promise.resolve
 */
export function readImage(file: File): Promise<string> {

  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const dataUrl = reader.result.toString();
      resolve(dataUrl);
    };

    reader.onerror = () => {
      reject('File read error');
    };

    reader.readAsDataURL(file);
  });
}
