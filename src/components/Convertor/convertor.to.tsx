import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { IToCurrency } from '../../models';

export const ConvertorTo: FC<IToCurrency> = ({
                                                 currencyToType,
                                                 onChangeCurrencyToType,
                                                 currencies,
                                             }) => {
    return (
        <Box sx={{ width: '100px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currencyToType}
                    onChange={onChangeCurrencyToType}
                    label="Currency"
                >
                    {currencies && (
                        <MenuItem value={currencies[1]?.base_ccy}>
                            {currencies[1]?.base_ccy}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};