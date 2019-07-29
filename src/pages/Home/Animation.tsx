import React from "react";
import { useWindowSize } from "react-use";
import useSprintRepeat from "../../hooks/useSprintRepeat";
import AnimatedImage from "./AnimatedImage";

const { PUBLIC_URL } = process.env;
const rotateConfig = { mass: 1, tension: 0.5, friction: 1 };
const floatConfig = { mass: 1, tension: 0.2, friction: 0.1 };

export default () => {
  const rotateProps = useSprintRepeat({
    from: { transform: "translate(-50%, -50%) rotate(0deg)" },
    to: { transform: "translate(-50%, -50%) rotate(360deg)" },
    config: rotateConfig,
  });
  const floatingProps = useSprintRepeat({
    from: { transform: "translate(0, 0px)" },
    to: { transform: "translate(0, -20px)" },
    config: floatConfig,
  });
  const floating2Props = useSprintRepeat({
    from: { transform: "translate(0, -10px)" },
    to: { transform: "translate(0, 10px)" },
    config: floatConfig,
    delay: 2000,
  });
  const floating3Props = useSprintRepeat({
    from: { transform: "translate(0, 0px)" },
    to: { transform: "translate(0, -20px)" },
    config: floatConfig,
    delay: 4000,
  });
  const { width } = useWindowSize();
  return (
    <>
      <AnimatedImage
        className="rotating-coin"
        top={533.83 + 86.67 / 2}
        left={width / 2 - 720 + (744.1 + 86.61 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin.svg`}
        alt="Coin"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={458.38 + 34.74 / 2}
        left={width / 2 - 720 + (616.09 + 41.54 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin-1.svg`}
        alt="Coin-1"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={448.73 + 49.39 / 2}
        left={width / 2 - 720 + (381.18 + 37.98 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin-2.svg`}
        alt="Coin-2"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={417.72 + 102.93 / 2}
        left={width / 2 - 720 + (1018.15 + 102.85 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin-3.svg`}
        alt="Coin-3"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={456.83 + 87.64 / 2}
        left={width / 2 - 720 + (929.44 + 87.58 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin-4.svg`}
        alt="Coin-4"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={681.26 + 28.4 / 2}
        left={width / 2 - 720 + (621.06 + 36.44 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin-5.svg`}
        alt="Coin-5"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={645 + 68.59 / 2}
        left={width / 2 - 720 + (777 + 67.13 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin ETH.svg`}
        alt="Coin ETH"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={649.82 + 89.3 / 2}
        left={width / 2 - 720 + (321 + 88.65 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin ETH-1.svg`}
        alt="Coin ETH-1"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={674.11 + 143.55 / 2}
        left={width / 2 - 720 + (464.66 + 143.45 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin-6.svg`}
        alt="Coin-6"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        className="rotating-coin"
        top={702.72 + 70.53 / 2}
        left={width / 2 - 720 + (933.33 + 78.49 / 2)}
        src={`${PUBLIC_URL}/assets/HEADER02/Coin B.svg`}
        alt="Coin B"
        sprintProps={rotateProps}
      />
      <AnimatedImage
        top={473.16}
        left={width / 2 - 720 + 367.9}
        src={`${PUBLIC_URL}/assets/HEADER02/BOY.png`}
        alt="BOY"
        sprintProps={floatingProps}
      />
      <img
        className="animated-image"
        style={{
          position: "absolute",
          top: 479.28,
          left: width / 2 - 720 + 733.01,
        }}
        src={`${PUBLIC_URL}/assets/HEADER02/Chart.svg`}
        alt="Chart"
      />
      <img
        className="animated-image"
        style={{
          position: "absolute",
          top: 528.12,
          left: width / 2 - 720 + 586.28,
        }}
        src={`${PUBLIC_URL}/assets/HEADER02/Chart-1.svg`}
        alt="Chart-1"
      />
      <img
        className="animated-image"
        style={{
          position: "absolute",
          top: 637.13,
          left: width / 2 - 720 + 507.97,
        }}
        src={`${PUBLIC_URL}/assets/HEADER02/Chart-2.svg`}
        alt="Chart-2"
      />
      <img
        className="animated-image"
        style={{
          position: "absolute",
          top: 610.31,
          left: width / 2 - 720 + 867.78,
        }}
        src={`${PUBLIC_URL}/assets/HEADER02/Chart-3.svg`}
        alt="Chart-3"
      />
      <AnimatedImage
        top={507.85}
        left={width / 2 - 720 + 836.44}
        src={`${PUBLIC_URL}/assets/HEADER02/Girl.svg`}
        alt="Girl"
        sprintProps={floating2Props}
      />
      <AnimatedImage
        top={512.96}
        left={width / 2 - 720 + 634.44}
        src={`${PUBLIC_URL}/assets/HEADER02/Boy Mid.svg`}
        alt="Boy Mid"
        sprintProps={floating3Props}
      />
    </>
  );
};
