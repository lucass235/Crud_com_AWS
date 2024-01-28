import axios from "axios";


export async function getApiUrl() {
    try {
        const response = await axios.get("/api/clients");
        console.log(response);
        
        return response.data; 
    } catch (error) {
        console.error("Erro ao obter vídeos:", error);
        throw error; 
    }
}