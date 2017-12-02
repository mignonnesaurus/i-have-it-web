import axios from 'axios'

const HOST = 'http://localhost:3000';

export const fetchItems = () => {
    return axios.get(`${HOST}/item`)
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const saveItem = (item) => {
    return axios.post(`${HOST}/item/${item.id}/quantity`, { quantity: item.quantity })
        .then(res => {
            return res.data;
        });
}