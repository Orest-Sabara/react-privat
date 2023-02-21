import { useEffect, FC } from 'react';

import { CurrencyInterface, CurrencyType } from '../../models';
import { useGetCurrency } from '../../hooks/useGetCurrency';
import { Exchange } from '../Exchange';
import { throwFakeError } from '../../helpers';
import { useAppSelector } from '../../hooks';

import './TableDate.style.css';
import {Convertor} from "../Convertor/convertor";

export const TableDate: FC = () => {
    const { getCurrency } = useGetCurrency();
    const { currencies } = useAppSelector((state) => state.converter);

    useEffect(() => {
        throwFakeError();
        getCurrency();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="container">
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Currency/Current <br/>Date</th>
                            <th>Buy</th>
                            <th>Sell</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currencies.map((currency: CurrencyInterface) => (
                            <tr key={currency.ccy}>
                                <td>
                                    <p>
                                        {currency.ccy}/{currency.base_ccy}
                                    </p>
                                </td>
                                <Exchange value={currency} type={CurrencyType.BUY} />
                                <Exchange value={currency} type={CurrencyType.SALE} />
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <Convertor currencies={currencies} />
            </div>
        </>
    );
};
