import api from "../services/api"

export async function signInWithEmail(formData) {

    return new Promise((resolve, reject) => {
        api
            .post(`/auth/login`, formData)
            .then(response => {
                const token = `Bearer ${response.data.token}`;
                api.defaults.headers.common["Authorization"] = token;

                resolve(response.data);
            })
            .catch(error => reject(error));
    });
}