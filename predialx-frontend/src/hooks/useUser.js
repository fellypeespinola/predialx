import { api } from "../services/api"

export async function listUser(formData) {
    return new Promise((resolve, reject) => {
        api
            .post(`user/list/all`, formData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => reject(error));
    });
}

export async function createUser(formData) {
    return new Promise((resolve, reject) => {
        api
            .post(`user/create`, formData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => reject(error));
    });
}

// export async function visualizarEvento(eventoId) {
//     return new Promise((resolve, reject) => {
//         api
//             .get(`evento/visualizar/${eventoId}`)
//             .then(response => {
//                 resolve(response.data);
//             })
//             .catch(error => reject(error.response.data));
//     });
// }


// export async function criarEvento(evento) {
//     return new Promise((resolve, reject) => {
//         api
//             .post(`evento/criar`, evento)
//             .then(response => {

//                 // let data = response.data;

//                 // if (data && data.success) {
//                 //     let evento = {
//                 //         key: data.data._id,
//                 //         nome: data.data.nome,
//                 //         finalizado: data.data.finalizado,
//                 //         data_inicio: new Date(data.data_inicio).toLocaleDateString(),
//                 //         url: `http://localhost:3000/${data.data._id}`,
//                 //     };

//                 //     data.data = evento;
//                 // };

//                 resolve(response.data);
//             })
//             .catch(error => reject(error.response.data));
//     });
// }


// export async function deletarEvento(eventoId) {
//     return new Promise((resolve, reject) => {
//         api
//             .delete(`evento/deletar/${eventoId}`)
//             .then(response => {
//                 resolve(response.data);
//             })
//             .catch(error => reject(error.response.data));
//     });
// }

// export async function atualizarEstadoEvento(eventoId, estado) {
//     return new Promise((resolve, reject) => {
//         api
//             .post(`/evento/atualizar/${eventoId}/estado`, { estado })
//             .then(response => {
//                 resolve(response.data);
//             })
//             .catch(error => reject(error.response.data));
//     });
// }