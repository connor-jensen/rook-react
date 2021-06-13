import { Server } from "boardgame.io/server";
import path from "path";
import serve from "koa-static";
import { RookGame } from "./gameLogic/game";

const server = Server({ games: [RookGame] });
const PORT = process.env.PORT || 8000;

const frontEndAppBuildBath = path.resolve(__dirname, './build');
server.app.use(serve(frontEndAppBuildBath))

server.run(PORT, () => {
   server.app.use(
      async (ctx, next) => await serve(frontEndAppBuildBath)(
         Object.assign(ctx, { path: 'index.html'}),
         next
      )
   )
});
