import React, { useMemo, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import cn from "classnames";

import { createWallets } from "../../config/wallet";
import { useAppState } from "../../store/app/hooks";
import useAuth from "../../hooks/useAuth";

const AccountDropdown = ({ account, isMobile = false }) => {
  const { logout } = useAuth();
  const { wallet } = useAppState();

  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const wallets = useMemo(() => createWallets(), []);
  const selectedWallet = wallets.find((w) => w.title === wallet);

  const accountEllipsis = account
    ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}`
    : null;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleDisconnect = async () => {
    logout();
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      setShowNotification(true);
      await navigator.clipboard.writeText(copyMe);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={cn(
          "uk-button uk-button-medium@m uk-button-default uk-button-outline uk-margin-left",
          { "uk-visible@l": !isMobile },
        )}
      >
        {accountEllipsis}
      </button>
      {isOpen && (
        <div className="absolute right-0 w-64 mt-2 bg-white overflow-hidden rounded-[16px] shadow-lg p-4 border border-[#86B6F6]">
          <div className="text-gray-600 dark:text-[#FAF0FA] text-[12px]">
            My account
          </div>
          <div className="flex items-center justify-between mt-[10px] cursor-pointer">
            <div className="flex items-center">
              {selectedWallet ? (
                <div className="w-[27px] h-[27px]">
                  <img src={selectedWallet?.icon} alt="ethereum" />
                </div>
              ) : null}

              <div className="ml-[12px] text-black">{accountEllipsis}</div>
            </div>
            <div
              className="relative cursor-pointer text-black"
              onClick={() => copyToClipBoard(account)}
            >
              {showNotification && (
                <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#176B87] dark:text-white">
                  Copied
                </div>
              )}
              <MdContentCopy />
            </div>
          </div>
          <button
            className="text-[18px] font-semibold border border-[#000] py-1 px-2 mt-[22px] w-full hover:bg-[#CB25F1] hover:text-white rounded-2xl text-black"
            onClick={() => {
              toggleDropdown();
              handleDisconnect();
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
