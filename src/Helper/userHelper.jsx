import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const index = async () => {
    try {
        const response = await axios.get("http://localhost:3015/users");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3015/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const create = async (user) => {
    try {
        const response = await axios.post("http://localhost:3015/users", user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const updateByid = async (id, user) => {
    try {
        const response = await axios.put(`http://localhost:3015/users/${id}`, user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const deleteById = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3015/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default { index, getById, create, updateByid, deleteById };