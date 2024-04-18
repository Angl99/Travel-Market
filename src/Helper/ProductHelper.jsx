import axios from "axios";

const index = async () => {
    try {
        const response = await axios.get("http://localhost:3015/products");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3015/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const create = async (product) => {
    try {
        const response = await axios.post("http://localhost:3015/products", product);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const updateByid = async (id, product) => {
    try {
        const response = await axios.put(`http://localhost:3015/products/${id}`, product);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const deleteById = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3015/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default { index, getById, create, updateByid, deleteById };