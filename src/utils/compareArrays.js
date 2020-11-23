export default function compareArrays(array1, array2) {
  if (array1.length !== array2.length) return false;
  if (array1.length === 0) return true;
  return array1.every((item, index) => item === array2[index]);
}
