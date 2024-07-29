import BigNumber from 'bignumber.js';
import memoize from 'lodash/memoize';

export const BIG_ZERO = new BigNumber(0);
export const BIG_TEN = new BigNumber(10);

export const getFullDecimalMultiplier = memoize((decimals) => {
  return BIG_TEN.pow(decimals);
});

export const getBalanceAmount = (amount, decimals = 18) => {
  return amount.dividedBy(getFullDecimalMultiplier(decimals));
};

export const getBalanceNumber = (balance, decimals = 18) => {
  return getBalanceAmount(balance || BIG_ZERO, decimals).toNumber();
};
