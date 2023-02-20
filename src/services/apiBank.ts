import axios from 'axios';

const PRIVAT_API = process.env.REACT_APP_PRIVAT_API_URL || 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const getCurrencies = async (): Promise<any> => {
    try {
        const response = await axios.get(`https://api.allorigins.win/raw?url=${encodeURIComponent(PRIVAT_API)}`);
        const dani = response.data;
        return dani;
    } catch (error) {
        console.error(error);
    }
};

export { getCurrencies };
