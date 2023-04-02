export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw Error("All values must be numbers");
  }
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length)
  const arr = new Int8Array(buffer);
  arr[position] = value;

  const dataView = new DataView(arr.buffer);
  return dataView;
}