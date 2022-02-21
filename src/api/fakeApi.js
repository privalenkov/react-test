async function saveData(data) {
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve(localStorage.setItem('data', JSON.stringify(data)))
    }, 1000));
}

async function getData() {
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve(JSON.parse(localStorage.getItem('data')))
    }, 1000));
}

export const api = { getData, saveData };