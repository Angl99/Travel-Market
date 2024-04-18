import axios from "axios";

const index = async () => {
    try {
        const response = await axios.get("http://localhost:3015/vendors");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3015/vendors/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const create = async (vendor) => {
    try {
        const response = await axios.post("http://localhost:3015/vendors", vendor);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const updateByid = async (id, vendor) => {
    try {
        const response = await axios.put(`http://localhost:3015/vendors/${id}`, vendor);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const deleteById = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3015/vendors/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export { index, getById, create, updateByid, deleteById };