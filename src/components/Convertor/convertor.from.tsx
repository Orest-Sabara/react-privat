import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { IFrom } from '../../models';

export const ConvertorFrom: FC<IFrom> = ({
                                             currencyFromType,
                                             setCurrencyFromType,
                                             currencies,
                                         }) => {
    return (
        <Box sx={{ width: '100px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currencyFromType}
                    label="Currency"
                    onChange={(e) => {
                        setCurrencyFromType(e.target.value);
                    }}
                >
                    {currencies.map((el) => (
                        <MenuItem key={el.ccy} value={el.ccy}>
                            {el.ccy}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};