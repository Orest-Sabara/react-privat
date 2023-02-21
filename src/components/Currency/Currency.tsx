import { useEffect, useState } from 'react';
import axios from 'axios';
// import { getCurrencies } from '../../services/apiBank';
import {FaExchangeAlt} from 'react-icons/fa';
import './Currency.css'


interface Currency {
    ccy: string;
    buy: number;
    sale: number;
}

const PRIVAT_API = process.env.REACT_APP_PRIVAT_API_URL || 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const ExchangeCalculator: React.FC  = () => {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [amount, setAmount] = useState<number>(0);
    const [fromCurrency, setFromCurrency] = useState<string>('');
    const [toCurrency, setToCurrency] = useState<string>('');
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);
    const [result, setResult] = useState<number | null>(null);

    useEffect(() => {
        const getCurrencies = async () => {
            try {
                const response = await axios.get(`https://api.allorigins.win/raw?url=${encodeURIComponent(PRIVAT_API)}`);
                const data: Currency[] = response.data;
                setCurrencies(data);
            } catch (error) {
                console.error(error);
            }
        };
        getCurrencies();
    }, []);

    useEffect(() => {
        if (!fromCurrency || !toCurrency) {
            setExchangeRate(null);
            setResult(null);
            return;
        }

        let from: Currency | undefined;
        let to: Currency | undefined;

        if (fromCurrency === 'UAH') {
            from = { ccy: 'UAH', buy: 1, sale: 1 };
        } else {
            from = currencies.find((currency: Currency) => currency.ccy === fromCurrency);
        }

        if (toCurrency === 'UAH') {
            to = { ccy: 'UAH', buy: 1, sale: 1 };
        } else {
            to = currencies.find((currency: Currency) => currency.ccy === toCurrency);
        }

        if (!from || !to) {
            setExchangeRate(null);
            setResult(null);
            return;
        }

        setExchangeRate(to.buy / from.buy);
    }, [fromCurrency, toCurrency, currencies]);

    useEffect(() => {
        if (!exchangeRate || !amount) {
            setResult(null);
            return;
        }

        setResult(amount * exchangeRate);
    }, [exchangeRate, amount]);

    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
            <div className='target'>
                <input type="text" className='input' value={amount}
                       onChange={(e) => {
                           const value = e.target.value;
                           if (value === '') {
                               setAmount(0);
                           } else {
                               setAmount(parseInt(value));
                           }
                       }}/>
                <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} style={{fontSize: "medium"}}>
                    <option value="">Select currency</option>
                    <option key="UAH" value="UAH">UAH</option>
                    {currencies.map(currency => (
                        <option key={currency.ccy} value={currency.ccy}>
                            {currency.ccy}
                        </option>
                    ))}

                </select>
                <FaExchangeAlt onClick={swapCurrencies}/>
                <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}
                        style={{fontSize: "medium"}}>
                    <option value="">Select currency</option>
                    <option key="UAH" value="UAH">UAH</option>
                    {currencies.map(currency => (
                        <option key={currency.ccy} value={currency.ccy}>
                            {currency.ccy}
                        </option>
                    ))}
                </select>
                {exchangeRate !== null && (
                    <div>
                        Exchange rate: {exchangeRate.toFixed(2)}
                    </div>
                )}
                {result !== null && (
                    <div style={{marginTop: "20px", fontSize: "18px"}}>
                        Result: {result.toFixed(2)}
                    </div>
                )}
            </div>

        </div>
    );
};

export {ExchangeCalculator};
