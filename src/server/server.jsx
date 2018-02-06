import path from 'path';
import App from 'Shared/App.jsx';
import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import fs from 'fs';


const app = express();
app.use('/', express.static(path.resolve(__dirname, 'assets')));
app.get('*', (req, res) => {
  const context = {};
  const application = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // don't need to know when this functions ends cause this is the last one
  fs.readFile(path.resolve(__dirname, 'assets/page.html'), 'utf-8', (err, html) => {
    const finalHtml = html
      .replace('<!--application-->', application);
    res.status(200).send(finalHtml);
  });
});


const PORT = process.env.port || '3000';
app.listen(PORT, () => console.log(`server is listening to the port ${PORT}`))
