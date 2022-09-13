export function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}
