export const baseURL = "http://localhost:8000";
export const baseAppURL = "http://localhost:3000";

export const app_id = 'dljxDutpNiUAcVWDrQvmTB9HOw4rh3Dd4Si9RX4i';
export const app_secret = 'X2UUK3uL82JDKkyWVuhebSXiUO1104sTfFBPCEJBTPgkCyTJ6doWQTUGuFmJcqcYoxhAMdtP9l30x0WporPZIXAqdC0L99DZm6RBKfpLBfrH7k2qXdVd6M3pfPI27hfc';

export const accessToken = getAccessToken();

function getAccessToken () {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('AuthAccessToken');
    }
};