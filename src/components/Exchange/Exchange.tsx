import { AiFillEdit, AiOutlineCheckCircle } from 'react-icons/ai';
import { ChangeEvent, FC, LegacyRef, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { updateExchangeRate } from '../../store/converterSlice';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { ExchangeRateItemInterface } from '../../models';
import { calculatePercentages } from '../../helpers';
import { useAppDispatch } from '../../hooks';

import './Exchange.css';

export const Exchange: FC<ExchangeRateItemInterface> = ({
  value,
  type,
}) => {
  const [showEditIcon, setShowEditIcon] = useState<boolean>(false);
  const [editAllowed, setEditAllowed] = useState<boolean>(false);
  const [saveAllowed, setSaveAllowed] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const basicExchangeRateValue = +value[type];

  const [newExchangeRate, setNewExchangeRate] = useState<number | string>(
    basicExchangeRateValue
  );

  const onInputClick = (): void => {
    setShowEditIcon(false);
    setEditAllowed(true);
    setSaveAllowed(false);
  };

  const onOutsideClick = (): void => {
    setNewExchangeRate(basicExchangeRateValue);
    setShowEditIcon(false);
    setEditAllowed(false);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const allowedAmount: number = calculatePercentages(basicExchangeRateValue);
    const targetValue = e.target.value;

    const isSaveBlocked =
      basicExchangeRateValue + allowedAmount <= +targetValue ||
      basicExchangeRateValue - allowedAmount >= +targetValue;

    setSaveAllowed(!isSaveBlocked);
    setNewExchangeRate(targetValue);
  };

  const saveExchangeRate = (): void => {
    if (saveAllowed) {
      setEditAllowed(false);
      dispatch(updateExchangeRate({ ...value, [type]: newExchangeRate }));
    }
  };

  const ref: LegacyRef<HTMLTableDataCellElement> =
    useOutsideClick(onOutsideClick);

  const closeExchangeRate = (): void => {
    setEditAllowed(false);
  };

  return (
    <td
      ref={ref}
      className="relative"
      onMouseEnter={() => setShowEditIcon(true)}
      onMouseLeave={() => setShowEditIcon(false)}
    >
      <input
        type="number"
        value={newExchangeRate}
        onClick={onInputClick}
        onChange={onInputChange}
        placeholder="Exchange Rate"
      />

      {showEditIcon && !editAllowed && (
        <i className="edit-icon">
          <AiFillEdit />
        </i>
      )}

      {editAllowed && (
        <div className="confirm-edit-buttons">
          <i
            onClick={saveExchangeRate}
            style={{ opacity: saveAllowed ? 1 : '0.5' }}
          >
            <AiOutlineCheckCircle size={17} color="green" />
          </i>

          <i onClick={closeExchangeRate}>
            <MdOutlineCancel size={17} color="red" />
          </i>
        </div>
      )}
    </td>
  );
};
