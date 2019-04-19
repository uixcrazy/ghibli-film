import http from "http";
import app from "./server";

const server = http.createServer(app);
let currentApp = app;
server.listen(3000);

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept("./server", () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener("request", currentApp);
    server.on("request", app);
    currentApp = app;
  });
}
