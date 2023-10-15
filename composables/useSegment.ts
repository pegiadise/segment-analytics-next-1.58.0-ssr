import { AnalyticsBrowser } from "@segment/analytics-next";

const segment = new AnalyticsBrowser();
let isReady = false;
segment.on("ready", () => {
  isReady = true;
});

export default () => {
  if (!isReady) {
    segment.load(
      {
        writeKey: "ADD_YOUR_WRITE_KEY_HERE",
      },
      {
        initialPageview: true,
      }
    );
  }

  return segment;
};
