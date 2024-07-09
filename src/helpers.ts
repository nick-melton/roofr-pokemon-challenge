export function getRandomNumber(start: number, end: number) {
    return Math.floor(start * end);
}

export function capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
} 

export async function fetchData(url: string) {
    return fetch(url).then(response => response.json());
}