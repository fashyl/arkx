async function fetchData(url, id = '') {
    try {
        const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
            throw new Error('Failed to fetch data');
                }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

module.exports = {
    fetchData
}