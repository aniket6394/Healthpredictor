import api from "../api/api";

export const predictDiabetes = async (data) => {

    const response = await api.post(
        "/predict/diabetes",
        data
    );

    return response.data;
};

export const predictHeart = async (data) => {

    const response = await api.post(
        "/predict/heart",
        data
    );

    return response.data;
};

export const getHistory = async () => {

    const response = await api.get(
        "/history"
    );

    return response.data;
};