import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import numeral from 'numeral';

dayjs.extend(duration);

import memoize from 'lodash/memoize';

import { CHAINS } from '../config/chains';

export const isChainSupported = memoize((chainId) => CHAINS.includes(chainId));

export const ChainId = {
  // ETHEREUM: 1,
  // SEPOLIA: 11155111,
  // BASE: 8453,
  BASE_SEPOLIA: 84532,
};

export class WalletSwitchChainError extends Error {}
export class WalletConnectorNotFoundError extends Error {}

export const walletLocalStorageKey = 'wallet';

export function formatStakingDuration(startTime) {
  const now = dayjs(); // Current time
  const durationInSeconds = now.diff(dayjs.unix(startTime), 'second'); // Calculate the duration in seconds
  const durationObject = dayjs.duration(durationInSeconds, 'seconds'); // Convert duration to Day.js duration object

  // Extract individual components of the duration
  const days = durationObject.days();
  const hours = durationObject.hours();
  const minutes = durationObject.minutes();

  // Construct the formatted string
  let formattedDuration = '';
  if (days > 0) {
    formattedDuration += `${days} days, `;
  }
  if (hours > 0) {
    formattedDuration += `${hours} hours, `;
  }
  if (minutes > 0) {
    formattedDuration += `${minutes} minutes`;
  }

  return formattedDuration;
}

export const displayNumeralNoDecimal = (amount) =>
  numeral(amount).format('0,0');
