const BASE_URL = "http://localhost:5000";

export const getHelloMessage = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/hello`);
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Error fetching message:", error);
        return "Error fetching message";
    }
};

export const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Error fetching users:", error);
        return "Error fetching users";
    }
};
