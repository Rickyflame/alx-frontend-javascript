export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

export function getLast() {
    return ' is okay';
}

export function tastNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}
