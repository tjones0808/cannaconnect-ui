import { FaRegArrowAltCircleDown } from "react-icons/fa";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import _get from "lodash/get";
import { toast } from "react-toastify";
import { parseUnits } from "viem";
import BigNumber from "bignumber.js";
import PuffLoader from "react-spinners/PuffLoader";

import ProgressBar from "./ProgressBar";
import { useExchangeContract, useTokenContract, usePresaleNFTContract } from "../hooks/useContract";
import useDebounce from "../hooks/useDebounce";
import { getBalanceNumber } from "../utils/formatBalance";
import Success from "./ToastContent/Success";
import { useCallWithGasPrice } from "../hooks/useCallWithGasPrice";
import useCatchTxError from "../hooks/useCatchTxError";
import { TOKEN_ADDRESS } from "../utils/setup";
import { useDispatch } from "react-redux";
import { setAppState } from "../store/app";
import styled from "styled-components";
import { getTimeDifference } from "../utils/countdown";

const FormStyle = styled.div`
	width: 100%;
	margin-top: 10px;
	.input-token {
		border: 1px solid rgba(8, 64, 37, 0.3);
		color: #084025;
		transition: all 0.1s ease-in-out;
	}
	.input-token:focus-within {
		border: 1px solid #084025;
	}
	.rate-cct {
		position: relative;
		&::before {
			content: "";
			width: 20%;
			height: 1px;
			background: #084025;
			position: absolute;
			left: 0;
			top: 50%;
		}
		&::after {
			content: "";
			width: 20%;
			height: 1px;
			background: #084025;
			position: absolute;
			right: 0;
			top: 50%;
		}
	}
	.tooltip {
		position: relative;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 250px;
		background-color: #e3ffef;
		color: #154428;
		text-align: center;
		border-radius: 6px;
		padding: 10px;

		/* Position the tooltip */
		position: absolute;
		z-index: 10;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
	.countdown-item {
		background-color: #084025;
		color: #fff;
		font-weight: 700;
		padding: 10px;
		border-radius: 8px;
		flex: 1;
		text-align: center;
		&-number {
			font-size: 25px;
			border-bottom: 1px solid #fff;
			padding-bottom: 5px;
			line-height: normal;
		}
		&-time {
			font-size: 14px;
			margin-top: 8px;
		}
	}
	@media (max-width: 480px) {
		.tooltip .tooltiptext {
			transform: unset;
			right: 0;
			left: unset;
		}
	}
`;

const DEBOUNCE_DELAY = 700;
const COUNT_DOWN = process.env.NEXT_PUBLIC_COUNT_DOWN;
const displayNumeralNoDecimal = (amount) => numeral(amount).format("0,0");
const decimals = 18;

const BuyTokenForm = () => {
	const { address: account } = useAccount();
	const exchangeContract = useExchangeContract();
	const tokenContract = useTokenContract(TOKEN_ADDRESS);
	const presaleNFTContract = usePresaleNFTContract(); // Import PresaleNFT contract
	const { callWithGasPrice } = useCallWithGasPrice();
	const { fetchWithCatchTxError } = useCatchTxError();

	const dispatch = useDispatch();

	const [ethBalance, setEthBalance] = useState(null);

	const {
		data: balanceData,
		isError,
		isLoading,
		refetch,
    failureReason
	} = useBalance({
		address: account
	});

	const [amountSource, setAmountSource] = useState(0);
	const debouncedAmountSource = useDebounce(amountSource, DEBOUNCE_DELAY);
	const [displayValue, setDisplayValue] = useState("");
	const [amountDest, setAmountDest] = useState(0);
	const [loadingBuy, setLoadingBuy] = useState(false);
	const [totalSale, setTotalSale] = useState(0);
	const [totalPresale, setTotalPresale] = useState(0);
	const [tokenBalance, setTokenBalance] = useState(0);
	const [price, setPrice] = useState(0);
	const [timeRemaining, setTimeRemaining] = useState(getTimeDifference(COUNT_DOWN));
	const [nfts, setNfts] = useState(0); // Ensure nfts is defined
	const [nftQuantity, setNftQuantity] = useState(1); // Quantity of NFTs to buy
	const [nftPrice, setNftPrice] = useState(0); // Price of a single NFT

	const onChangeSource = (value) => {
		setAmountSource(value);
	};

	const onChange = (val) => {
		const regex = /^-?\d*[.,]?\d*$/;
		const value = val.split(",").join("");

		if (regex.test(value) && value.length < 13) {
			onChangeSource(numeral(value).value());

			if (val.length >= 2 && val.charAt(0) === "0" && val.charAt(1) === "0") {
				return setDisplayValue("0");
			}
			if (value.indexOf(".") > -1) {
				const decimal = value.substring(value.indexOf(".") + 1, value.indexOf(".") + decimals + 1);
				const int = value.substring(0, value.indexOf("."));
				const data = displayNumeralNoDecimal(int) + "." + decimal;
				return setDisplayValue(data);
			}
			setDisplayValue(value ? numeral(value).format("0,0") : "");
		}
	};

	const estimateAmountDest = async () => {
		console.log("debouncedAmountSource", debouncedAmountSource);
		const amountBN = await exchangeContract?.read?.getTokenCanBuy([parseUnits(amountSource.toString(), 18)]);

		const amountDestValue = getBalanceNumber(new BigNumber(amountBN?.toString()), decimals);

		setAmountDest(amountDestValue);
	};

	const getData = async () => {
		const tokenSaleBN = await exchangeContract?.read?.tokenSale();
		const totalPresaleBN = await exchangeContract?.read?.totalPresale();
		const tokenBalanceBN = await tokenContract?.read?.balanceOf([account]);
		const priceBN = await exchangeContract?.read?.price();
		const nftPriceBN = await presaleNFTContract?.read?.price();

		const tokenBalanceNumber = getBalanceNumber(new BigNumber(tokenBalanceBN?.toString()), decimals);
		const tokenSaleNumber = getBalanceNumber(new BigNumber(tokenSaleBN?.toString()), decimals);
		const totalPresaleNumber = getBalanceNumber(new BigNumber(totalPresaleBN?.toString()), decimals);
		const priceNumber = getBalanceNumber(new BigNumber(priceBN?.toString()), decimals);
		const nftPriceNumber = getBalanceNumber(new BigNumber(nftPriceBN?.toString()), decimals);

		setTokenBalance(tokenBalanceNumber);
		setTotalSale(tokenSaleNumber);
		setTotalPresale(totalPresaleNumber);
		setPrice(priceNumber);
		setNftPrice(nftPriceNumber);
	};

	const handleBuy = async () => {
		try {
			setLoadingBuy(true);
			const value = parseUnits(amountSource.toString(), 18);
			const receipt = await fetchWithCatchTxError(() =>
				callWithGasPrice(exchangeContract, "buy", undefined, {
					value,
				})
			);
			if (receipt?.status) {
				await getData();
				await ethBalance.refetch();
				toast.success(<Success title="Buy Success" txHash={receipt.transactionHash} />, {
					icon: false,
					hideProgressBar: true,
					autoClose: 5000,
				});

				setLoadingBuy(false);
			}
		} catch (error) {
			console.log(error);
			toast.error("Buy token failed! Please try again.");
		} finally {
			setLoadingBuy(false);
		}
	};

	const handleBuyNFT = async () => {
		try {
			setLoadingBuy(true);
			const totalPrice = nftPrice * nftQuantity;
			const value = parseUnits(totalPrice.toString(), 18);
			const receipt = await fetchWithCatchTxError(() =>
				callWithGasPrice(presaleNFTContract, "buy", [nftQuantity], {
					value,
				})
			);
			if (receipt?.status) {
				await getData();
				await ethBalance.refetch();
				toast.success(<Success title="Buy NFT Success" txHash={receipt.transactionHash} />, {
					icon: false,
					hideProgressBar: true,
					autoClose: 5000,
				});

				setLoadingBuy(false);
			}
		} catch (error) {
			console.log(error);
			toast.error("Buy NFT failed! Please try again.");
		} finally {
			setLoadingBuy(false);
		}
	};

	useEffect(() => {
		if (debouncedAmountSource) {
			estimateAmountDest();
		} else {
			setAmountDest(0);
		}
	}, [debouncedAmountSource]);

	useEffect(() => {
		if (account) {
			getData();
			refetch();
		}
	}, [account, presaleNFTContract]);

	useEffect(() => {
		if (balanceData) {
			console.log("Balance Data:", balanceData);
			setEthBalance(balanceData);
		}
	}, [balanceData]);

	useEffect(() => {
		if (isError) {
			console.error("Error fetching balance");
      console.log(failureReason);
		}
	}, [isError]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeRemaining(getTimeDifference(COUNT_DOWN));
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);
	return (
		<FormStyle>
			<div className="flex justify-center text-[18px] text-white mb-3 font-bold">Pre-sale finish in</div>
			<div className="rounded-[8px] p-[12px] text-primary bg-white mb-3 flex gap-2 w-full">
				<div className="countdown-item">
					<div className="countdown-item-number">
						{timeRemaining.days < 10 && "0"}
						{timeRemaining.days}
					</div>
					<div className="countdown-item-time">Days</div>
				</div>
				<div className="countdown-item">
					<div className="countdown-item-number">
						{timeRemaining.hours < 10 && "0"}
						{timeRemaining.hours}
					</div>
					<div className="countdown-item-time">Hours</div>
				</div>
				<div className="countdown-item">
					<div className="countdown-item-number">
						{timeRemaining.minutes < 10 && "0"}
						{timeRemaining.minutes}
					</div>
					<div className="countdown-item-time">Minutes</div>
				</div>
				<div className="countdown-item">
					<div className="countdown-item-number">
						{timeRemaining.seconds < 10 && "0"}
						{timeRemaining.seconds}
					</div>
					<div className="countdown-item-time">Seconds</div>
				</div>
			</div>
			<div className="rounded-[8px] p-[12px] text-primary bg-white mb-3">
				<div className="flex justify-between w-full font-bold border-b border-solid border-x-slate-700 pb-3 text-[14px]">
					<div>RAISED:</div>
					<div>${totalSale.toLocaleString()}</div>
				</div>
				<div className="flex justify-between w-full items-center mb-1 mt-3">
					<div className=" font-bold text-[14px]">Presale</div>
					<div className="">
						<span className="text-[14px] -mt-[10px] mr-2">TARGET:</span>
						<span className="font-bold text-[14px]">${totalPresale * price}</span>
					</div>
				</div>
				<ProgressBar timeWatched={totalSale} timeTotal={totalPresale} />
				<div className="text-center text-[12px] font-semibold mt-3">
					<div className="mb-1 rate-cct">1$CCT = ${price}</div>
					<div className="flex items-center gap-1 justify-center">
						<div>YOUR PURCHASED $CCT = {tokenBalance}</div>
						<div className="tooltip">
							<img src="images/info-icon.svg" />
							<span className="tooltiptext">Your total purchased tokens are all tokens purchased using the connected wallet.</span>
						</div>
					</div>
					<div className="flex items-center gap-1 justify-center">
						<div>YOUR SWAP FOUNDERS NFTs = {nfts}</div>
						<div className="tooltip">
							<img src="images/info-icon.svg" />
							<span className="tooltiptext">This NFT grants rights to a percentage of the profits.</span>
						</div>
					</div>
				</div>
			</div>
			<div
				className="uk-panel min-h-[200px] rounded-[8px] p-[12px] text-primary"
				data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
				style={{
					border: "0.5px solid rgba(255, 255, 255, 0.13)",
					background: "#fff",
				}}
			>
				<div className="flex flex-col items-center">
					<div className="w-full relative">
						<div>
							<div className="flex justify-between">
								<div className="mb-1 text-[14px]">ETH you pay</div>
								<div className="mb-1 text-[14px]">Balance: {Number(ethBalance?.formatted).toFixed(4) || 0} ETH</div>
							</div>
							<div className="py-2 px-3 rounded-[8px] w-full flex items-center input-token relative">
								<input
									className="text-[24px] bg-transparent font-bold outline-none pr-8"
									placeholder="0"
									inputMode="decimal"
									autoComplete="off"
									autoCorrect="off"
									type="text"
									spellCheck="false"
									value={displayValue}
									onChange={(e) => onChange(e.target.value)}
								/>
								<div className="absolute right-3 text-[14px] font-bold">ETH</div>
							</div>
						</div>

						<div className="flex justify-center mt-3">
							<FaRegArrowAltCircleDown />
						</div>

						<div>
							<div className="mb-1 text-[14px]">$CCT you receive</div>
							<div className="input-token py-2 px-4 rounded-[8px] w-full flex justify-between items-center">
								<div className="text-[24px] font-bold">{amountDest}</div>
								<div className="font-bold text-[14px]">CCT</div>
							</div>
						</div>
						<div>
							<div className="mb-1 text-[14px]">NFTs you swap</div>
							<div className="py-2 px-3 rounded-[8px] w-full flex items-center input-token relative">
								<input
									className="text-[24px] bg-transparent font-bold outline-none pr-8"
									placeholder="0"
									inputMode="decimal"
									autoComplete="off"
									autoCorrect="off"
									type="text"
									spellCheck="false"
									value={nfts}
									onChange={(e) => setNfts(e.target.value)}
								/>
								<div className="absolute right-3 text-[14px] font-bold">ETH</div>
							</div>
							<div className="mt-1 text-[14px]">
								<b>Note: </b>max founders NFTs exchange:
								<b>
									50
									<br /> (1 NFT = 200 $CCT)
								</b>
							</div>
						</div>
					</div>

					<div className="w-full relative">
						<div className="flex justify-between">
							<div className="mb-1 text-[14px]">NFTs you buy</div>
							<div className="mb-1 text-[14px]">Price per NFT: {nftPrice} ETH</div>
						</div>
						<div className="py-2 px-3 rounded-[8px] w-full flex items-center input-token relative">
							<input
								className="text-[24px] bg-transparent font-bold outline-none pr-8"
								placeholder="1"
								inputMode="decimal"
								autoComplete="off"
								autoCorrect="off"
								type="number"
								spellCheck="false"
								value={nftQuantity}
								onChange={(e) => setNftQuantity(e.target.value)}
							/>
							<div className="absolute right-3 text-[14px] font-bold">NFTs</div>
						</div>
					</div>

					{account ? (
						<>
							<button className="uk-button uk-button-medium@m uk-button-gradient m-0 w-full mt-2" disabled={loadingBuy || !amountSource} onClick={handleBuy}>
								{loadingBuy ? (
									<div className="flex items-center justify-center">
										<PuffLoader color="#000" size={20} />
									</div>
								) : (
									<span className="font-semibold">Buy Now</span>
								)}
							</button>
							<button className="uk-button uk-button-medium@m uk-button-gradient m-0 w-full mt-4" disabled={loadingBuy || !nftQuantity} onClick={handleBuyNFT}>
								{loadingBuy ? (
									<div className="flex items-center justify-center">
										<PuffLoader color="#000" size={20} />
									</div>
								) : (
									<span className="font-semibold">Buy NFT</span>
								)}
							</button>
						</>
					) : (
						<button
							className="uk-button uk-button-medium@m uk-button-default mt-6 m-0 w-full uk-button-gradient"
							onClick={() => dispatch(setAppState({ isOpenConnectWallet: true }))}
						>
							Connect Wallet
						</button>
					)}

					<a href="#how_to_buy" className="font-bold uppercase text-[14px] mt-4 text-primary">
						How to buy?
					</a>
				</div>
			</div>
		</FormStyle>
	);
};

export default BuyTokenForm;
