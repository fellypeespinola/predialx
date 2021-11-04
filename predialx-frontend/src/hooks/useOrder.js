import { api } from "../services/api"

export async function listOrder(formData) {
    return new Promise((resolve, reject) => {
        api
            .post(`order/list/all`, formData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => reject(error));
    });
}

export async function createOrder(formData) {
    return new Promise((resolve, reject) => {
        api
            .post(`order/create`, formData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => reject(error));
    });
}

export async function countOrderByMonth(formData) {
    return new Promise((resolve, reject) => {
        api
            .post(`order/count/bymonth`, formData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => reject(error));
    });
}