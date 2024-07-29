import { Fragment } from "react";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const EXPLORER_API_ENDPOINT = process.env.NEXT_PUBLIC_EXPLORER_API_ENDPOINT;

const Success = ({ title, txHash }) => {
  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[12px] font-bold text-black">{title}</div>
          <a
            href={`${EXPLORER_API_ENDPOINT}/tx/${txHash}`}
            className="text-[12px] font-medium flex items-center mt-[10px]"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            View on Explorer <FaExternalLinkAlt className="ml-[9px]" />
          </a>
        </div>
        <div style={{ color: "#0AC23D" }}>
          <FaCheckCircle className="ml-[9px]" />
        </div>
      </div>
    </Fragment>
  );
};

export default Success;
