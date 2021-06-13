import * as path from 'path';
const serve = require('koa-static');
const { Server } = require('boardgame.io/server');
const { RookGame } = require('./gameLogic/game')

// const server = Server({ games: [RookGame]})

// server.run(8000)

const server = Server({ games: [RookGame] });
const PORT = process.env.PORT == null ? 8000 : parseInt(process.env.PORT);

const frontEndAppBuildBath = path.resolve(__dirname, '../build');
server.app.use(serve(frontEndAppBuildBath))

server.run(PORT, () => {
   server.app.use(
      async (ctx, next) => await serve(frontEndAppBuildBath)(
         Object.assign(ctx, { path: 'index.html'}),
         next
      )
   )
});
