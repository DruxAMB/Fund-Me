"use client";

import React, { useState } from "react";
import Confetti from 'react-confetti';
import { FundButton, getOnrampBuyUrl } from "@coinbase/onchainkit/fund";
interface ButtonPosition {
  top: string;
  left: string;
}

export default function ButtonComponent() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState<ButtonPosition>({ top: '50%', left: '50%' });

  const moveNoButton = () => {
    const randomTop = Math.random() * 80 + 10; // Random top position (10% to 90%)
    const randomLeft = Math.random() * 80 + 10; // Random left position (10% to 90%)
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleCheckClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
  };

  const projectId =process.env.NEXT_PUBLIC_CDP_PROJECT_ID as string;
  const address = "0x434d6c335a1739f6d18362Dd13B282930aBbdCDe";

  const onrampBuyUrl = getOnrampBuyUrl({
    projectId,
    addresses: { [address]: ["base"] },
    assets: ["ETH"],
    presetFiatAmount: 8,
    fiatCurrency: "USD",
  });

  return (
    <div className="">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={["#818cf8", "#2563eb"]}
        />
      )}
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex gap-2 justify-center items-center">
            <button
              className={`bg-indigo-400 hover:bg-indigo-300 text-black font-semibold px-8 py-2 rounded-lg transition-colors ${
                noButtonPosition ? "absolute" : "relative"
              }`}
              style={noButtonPosition || {}}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
            >
              No
            </button>
            <button onClick={handleCheckClick}>
              <FundButton
                className="bg-indigo-400 hover:bg-indigo-300 text-black font-semibold px-8 py-2 rounded-lg transition-colors"
                text={"Yes"}
                hideText={false}
                hideIcon={true}
                fundingUrl={onrampBuyUrl}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
