const checkFrame = (func, timeFrame) => {
  let lastTime = 0;

  return () => {
    const now = new Date();

    if (now - lastTime >= timeFrame) {
      func();

      lastTime = now;
    }
  };
};

export default checkFrame;
