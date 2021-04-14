export const fetchApi = async (url, options) => {
    try {
        const result = await fetch(url,options).then(response => response.json())
        return result;
    } catch (e) {
        console.error(e);
    }
}
