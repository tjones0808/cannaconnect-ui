import { Fragment } from "react";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const EXPLORER_API_ENDPOINT = process.env.NEXT_PUBLIC_EXPLORER_API_ENDPOINT;

const Fail = ({ title, txHash }) => {
  return (
    <Fragment>
      <div className="toastify-body flex justify-between items-center">
        <div>
          <div className="text-[12px] font-bold text-black">{title}</div>
          {txHash ? (
            <a
              href={`${EXPLORER_API_ENDPOINT}/transaction/${txHash}`}
              className="text-[12px] font-medium text-gray-600 flex items-center mt-[10px]"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              View on Explorer <FaExternalLinkAlt className="ml-[9px]" />
            </a>
          ) : null}
        </div>
        <div style={{ color: "red" }}>
          <FaCheckCircle className="ml-[9px]" />
        </div>
      </div>
    </Fragment>
  );
};

export default Fail;
