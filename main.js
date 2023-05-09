export function stringLength(string) {
  const strLength = string.length;

  if (strLength <= 0 || strLength > 10) {
    throw new Error('The string must be from 1 to 10 characters long!');
  }

  return string.length;
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export function capitalizeString(string) {
  const stringAsArr = string.split('');
  stringAsArr[0] = stringAsArr[0].toUpperCase();
  return stringAsArr.join('');
}