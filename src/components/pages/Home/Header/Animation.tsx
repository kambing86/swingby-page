import AnimatedImage from "components/common/AnimatedImage";
import React from "react";
import { useWindowSize } from "react-use";

const { PUBLIC_URL } = process.env;
const rotateConfig = { mass: 1, tension: 0.5, friction: 1 };
const floatConfig = { mass: 1, tension: 100, friction: 200 };

export default () => {
  const rotateProps = {
    from: { transform: "translate(-50%, -50%)" },
    to: { transform: "translate(-50%, -50%)" },
    config: rotateConfig,
  };
  const floatingProps = {
    from: { transform: "translate(0, 0px)" },
    to: async (next: Function) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ transform: "translate(0, 20px)" });
        await next({ transform: "translate(0, 0px)" });
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    },
    config: floatConfig,
  };
  const floating2Props = {
    from: { transform: "translate(0, -10px)" },
    to: async (next: Function) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ transform: "translate(0, 10px)" });
        await next({ transform: "translate(0, -10px)" });
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    },
    config: floatConfig,
    delay: 2000,
  };
  const floating3Props = {
    from: { transform: "translate(0, 0px)" },
    to: async (next: Function) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ transform: "translate(0, -20px)" });
        await next({ transform: "translate(0, 0px)" });
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    },
    config: floatConfig,
    delay: 4000,
  };
  const { width } = useWindowSize();
  const startX = width >= 1200 ? width - 950 : width / 2 - 720;
  const startY = width >= 1200 ? -120 : width >= 576 ? 120 : 270;
  return (
    <div>
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 533.83 + 86.67 / 2,
          left: startX + 744.1 + 86.61 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin.svg`}
        alt="Coin"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 458.38 + 34.74 / 2,
          left: startX + 616.09 + 41.54 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin-1.svg`}
        alt="Coin-1"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 448.73 + 49.39 / 2,
          left: startX + 381.18 + 37.98 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin-2.svg`}
        alt="Coin-2"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 417.72 + 102.93 / 2,
          left: startX + 1018.15 + 102.85 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin-3.svg`}
        alt="Coin-3"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 456.83 + 87.64 / 2,
          left: startX + 929.44 + 87.58 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin-4.svg`}
        alt="Coin-4"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 681.26 + 28.4 / 2,
          left: startX + 621.06 + 36.44 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin-5.svg`}
        alt="Coin-5"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 645 + 68.59 / 2,
          left: startX + 777 + 67.13 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin ETH.svg`}
        alt="Coin ETH"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 649.82 + 89.3 / 2,
          left: startX + 321 + 88.65 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin ETH-1.svg`}
        alt="Coin ETH-1"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 674.11 + 143.55 / 2,
          left: startX + 464.66 + 143.45 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin-6.svg`}
        alt="Coin-6"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        style={{
          top: startY + 702.72 + 70.53 / 2,
          left: startX + 933.33 + 78.49 / 2,
        }}
        src={`${PUBLIC_URL}/assets/home/Coin B.svg`}
        alt="Coin B"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        style={{
          top: startY + 473.16,
          left: startX + 367.9,
        }}
        src={`${PUBLIC_URL}/assets/home/BOY.png`}
        alt="BOY"
        sprintProps={floatingProps}
      />
      <img
        className="animated-image position-absolute"
        style={{
          top: startY + 479.28,
          left: startX + 733.01,
        }}
        src={`${PUBLIC_URL}/assets/home/Chart.svg`}
        alt="Chart"
      />
      <img
        className="animated-image position-absolute"
        style={{
          top: startY + 528.12,
          left: startX + 586.28,
        }}
        src={`${PUBLIC_URL}/assets/home/Chart-1.svg`}
        alt="Chart-1"
      />
      <img
        className="animated-image position-absolute"
        style={{
          top: startY + 637.13,
          left: startX + 507.97,
        }}
        src={`${PUBLIC_URL}/assets/home/Chart-2.svg`}
        alt="Chart-2"
      />
      <img
        className="animated-image position-absolute"
        style={{
          top: startY + 610.31,
          left: startX + 867.78,
        }}
        src={`${PUBLIC_URL}/assets/home/Chart-3.svg`}
        alt="Chart-3"
      />
      <AnimatedImage
        style={{
          top: startY + 507.85,
          left: startX + 836.44,
        }}
        src={`${PUBLIC_URL}/assets/home/Girl.svg`}
        alt="Girl"
        sprintProps={floating2Props}
      />
      <AnimatedImage
        style={{
          top: startY + 512.96,
          left: startX + 634.44,
        }}
        src={`${PUBLIC_URL}/assets/home/Boy Mid.svg`}
        alt="Boy Mid"
        sprintProps={floating3Props}
      />
    </div>
  );
};
