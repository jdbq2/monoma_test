const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Error en la solicitud a ${endpoint}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchAllData = async (endpoints: string[]) => {
    try {
        const results = await Promise.all(
            endpoints.map((endpoint) => fetchData(endpoint))
        );
        return results;
    } catch (error) {
        console.error("Error en al menos una de las solicitudes.");
        throw error;
    }
};
