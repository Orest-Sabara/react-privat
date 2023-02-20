import { FC } from 'react';

import {Header, Footer, TableDate, ExchangeCalculator} from "../../components";

export const BankPage: FC = () => {
    return (
        <>
            <Header />
            <div>
                <TableDate/>
                <ExchangeCalculator />
            </div>
            <Footer/>
        </>
    );
};