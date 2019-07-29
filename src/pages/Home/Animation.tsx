import React from "react";
import { useWindowSize } from "react-use";
import Coin from "./Coin";

export default () => {
  const { width } = useWindowSize();
  return (
    <>
      <Coin
        top={533.83 + 86.67 / 2}
        left={width / 2 - 720 + (744.1 + 86.61 / 2)}
        src="/assets/HEADER02/Coin.svg"
        alt="Coin"
      />
      <Coin
        top={458.38 + 34.74 / 2}
        left={width / 2 - 720 + (616.09 + 41.54 / 2)}
        src="/assets/HEADER02/Coin-1.svg"
        alt="Coin-1"
      />
      <Coin
        top={448.73 + 49.39 / 2}
        left={width / 2 - 720 + (381.18 + 37.98 / 2)}
        src="/assets/HEADER02/Coin-2.svg"
        alt="Coin-2"
      />
      <Coin
        top={417.72 + 102.93 / 2}
        left={width / 2 - 720 + (1018.15 + 102.85 / 2)}
        src="/assets/HEADER02/Coin-3.svg"
        alt="Coin-3"
      />
      <Coin
        top={456.83 + 87.64 / 2}
        left={width / 2 - 720 + (929.44 + 87.58 / 2)}
        src="/assets/HEADER02/Coin-4.svg"
        alt="Coin-4"
      />
      <Coin
        top={681.26 + 28.4 / 2}
        left={width / 2 - 720 + (621.06 + 36.44 / 2)}
        src="/assets/HEADER02/Coin-5.svg"
        alt="Coin-5"
      />
      <Coin
        top={645 + 68.59 / 2}
        left={width / 2 - 720 + (777 + 67.13 / 2)}
        src="/assets/HEADER02/Coin ETH.svg"
        alt="Coin ETH"
      />
      <Coin
        top={649.82 + 89.3 / 2}
        left={width / 2 - 720 + (321 + 88.65 / 2)}
        src="/assets/HEADER02/Coin ETH-1.svg"
        alt="Coin ETH-1"
      />
      <Coin
        top={674.11 + 143.55 / 2}
        left={width / 2 - 720 + (464.66 + 143.45 / 2)}
        src="/assets/HEADER02/Coin-6.svg"
        alt="Coin-6"
      />
      <Coin
        top={702.72 + 70.53 / 2}
        left={width / 2 - 720 + (933.33 + 78.49 / 2)}
        src="/assets/HEADER02/Coin B.svg"
        alt="Coin B"
      />
      <img
        style={{
          position: "absolute",
          top: 473.16,
          left: width / 2 - 720 + 367.9,
        }}
        src="/assets/HEADER02/BOY.png"
        alt="BOY"
      />
      <img
        style={{
          position: "absolute",
          top: 479.28,
          left: width / 2 - 720 + 733.01,
        }}
        src="/assets/HEADER02/Chart.svg"
        alt="Chart"
      />
      <img
        style={{
          position: "absolute",
          top: 528.12,
          left: width / 2 - 720 + 586.28,
        }}
        src="/assets/HEADER02/Chart-1.svg"
        alt="Chart-1"
      />
      <img
        style={{
          position: "absolute",
          top: 637.13,
          left: width / 2 - 720 + 507.97,
        }}
        src="/assets/HEADER02/Chart-2.svg"
        alt="Chart-2"
      />
      <img
        style={{
          position: "absolute",
          top: 610.31,
          left: width / 2 - 720 + 867.78,
        }}
        src="/assets/HEADER02/Chart-3.svg"
        alt="Chart-3"
      />
      <img
        style={{
          position: "absolute",
          top: 507.85,
          left: width / 2 - 720 + 836.44,
        }}
        src="/assets/HEADER02/Girl.svg"
        alt="Girl"
      />
      <img
        style={{
          position: "absolute",
          top: 512.96,
          left: width / 2 - 720 + 634.44,
        }}
        src="/assets/HEADER02/Boy Mid.svg"
        alt="Boy Mid"
      />
    </>
  );
};
