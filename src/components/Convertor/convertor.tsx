import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { currencyExchange } from '../../helpers';

import {
    ConvertorPropsInterface,
    CurrencyInterface,
    CurrencyType,
} from '../../models';
import { ConvertorFrom } from './convertor.from';
import './convertor.style.css';
import { ConvertorTo } from './convertor.to';
import { StyledTextField } from './styled';

export const Convertor: FC<ConvertorPropsInterface> = ({ currencies }) => {
    const [currencyFromType, setCurrencyFromType] = useState<string>('USD');
    const [currencyFromValue, setCurrencyFromValue] = useState<string | number>(
        0
    );

    const [currencyToType, setCurrencyToType] = useState<string>('UAH');
    const [currencyToValue, setCurrencyToValue] = useState<number>(0);

    const [currencyType, setCurrencyType] = useState<string>(CurrencyType.BUY);

    useEffect(() => {
        const rate: CurrencyInterface | undefined = currencies.find(
            (currency) => currency.ccy === currencyFromType
        );

        currencyExchange(rate, currencyType, currencyFromValue, setCurrencyToValue);
    }, [currencyFromValue, currencyFromType, currencyType, currencies]);

    const swipeCurrency = (): void => {
        setCurrencyType(
            currencyType === CurrencyType.BUY ? CurrencyType.SALE : CurrencyType.BUY
        );
    };

    const onChangeFromCurrency = (event: ChangeEvent<HTMLInputElement>): void => {
        setCurrencyFromValue(event.target.value);
    };

    const onChangeCurrencyToType = (event: SelectChangeEvent<string>): void => {
        setCurrencyToType(event.target.value);
    };

    return (
        <div>
            <div className="changeCurrencyContainer">
                <div>
                    <StyledTextField
                        id="outlined-basic"
                        label="From"
                        variant="outlined"
                        type="number"
                        placeholder="Currency"
                        value={currencyFromValue}
                        onChange={onChangeFromCurrency}
                    />
                </div>
                <div>
                    {currencyType === CurrencyType.BUY ? (
                        <ConvertorFrom
                            currencyFromType={currencyFromType}
                            setCurrencyFromType={setCurrencyFromType}
                            currencies={currencies}
                        />
                    ) : (
                        <ConvertorTo
                            currencyToType={currencyToType}
                            onChangeCurrencyToType={onChangeCurrencyToType}
                            currencies={currencies}
                        />
                    )}
                </div>
            </div>
            <div>
                <div className="swipeButton">
                    <MdOutlineChangeCircle
                        size={30}
                        color="black"
                        onClick={swipeCurrency}
                    />
                </div>
                <div className="changeCurrencyContainer">
                    <div >
                        <StyledTextField
                            id="outlined-basic"
                            label="To"
                            variant="outlined"
                            type="number"
                            disabled
                            sx={{
                                '& .MuiInputBase-input.Mui-disabled': {
                                    color: 'black !important',
                                    '-webkit-text-fill-color': 'black !important',
                                    borderColor: 'black !important',
                                },
                                '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'black !important',
                                },
                            }}
                            className="currencyInput"
                            placeholder="Currency"
                            value={currencyToValue.toFixed(1)}
                        />
                    </div>
                    <div>
                        {currencyType === CurrencyType.BUY ? (
                            <ConvertorTo
                                currencyToType={currencyToType}
                                onChangeCurrencyToType={onChangeCurrencyToType}
                                currencies={currencies}
                            />
                        ) : (
                            <ConvertorFrom
                                currencyFromType={currencyFromType}
                                setCurrencyFromType={setCurrencyFromType}
                                currencies={currencies}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};