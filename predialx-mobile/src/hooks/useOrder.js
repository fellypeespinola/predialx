import api from "../services/api"

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