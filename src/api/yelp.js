import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
        'Bearer kjJLqClBLfopOvWIu_Mlp7rK8waDuy9_EBHeD8Vy4PlJNNxoSOdeL-FUGKCx5PkiLBjjTr_qGIcoe2FyjlNmY9pJEC-qgfyeVwa1FPcI3QK79Ql8Q21MG2T-LdqtXnYx'
    }
});