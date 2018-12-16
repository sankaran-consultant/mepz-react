
import axios from 'axios'

let apiHost = "http://0.0.0.0:8080/api"


let Api = {
    loadProducts(type, size) {
        return axios.get(apiHost + `/products`)
            .then(response => response.data)
    },
    loadReviews(id, size) {
        return axios.get(apiHost + `/products/${id}/reviews`)
            .then(response => response.data)
    },
    addNewReview(id, review) {
        return axios.post(apiHost + `/products/${id}/reviews`, review)
            .then(response => response.data)
    }
};

export default Api;