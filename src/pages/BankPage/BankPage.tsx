import { FC } from 'react';

import {Header, Footer, TableDate} from "../../components";


export const BankPage: FC = () => {


    return (
        <>
            <Header />
            <div>
                <TableDate/>
            </div>
            <Footer/>
        </>
    );
};