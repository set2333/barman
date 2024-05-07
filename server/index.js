const express = require('express');
const cors = require('cors')
const https = require('https');
const fetch = require('node-fetch-commonjs');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const { config } = require('dotenv');
const  { gigaChatOptions, AUTH_URL, MESSAGE_URL, HEADERS, PROMPT } = require('./consts.js');
const { fakeMiddleware } = require('./fakeMiddleware.js');

config();
const port = process.env.VUE_APP_SERVER_PORT;
const authToken = process.env.TOKEN;
const isUsedFakeData = process.env.USE_FAKE_DATA === 'yes';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(fakeMiddleware);

let accessToken = null;
let expiresAt = null;
const prompt = [{ role: 'system', content: PROMPT }];

const auth = async () => {
  if (!accessToken || !expiresAt) {
    const response = await fetch(AUTH_URL, {
      agent: httpsAgent,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'RqUID': uuidv4(),
        'Authorization': `Basic ${authToken}`,
      },
      body:'scope=GIGACHAT_API_PERS',
    });
    const { access_token, expires_at } = await response.json();
    accessToken = access_token;
    expiresAt = expires_at;
  }
}

const getRecipes = async (content ) => {
  const response = await fetch(MESSAGE_URL, {
    agent: httpsAgent,
    method: 'POST',
    headers: {
      ...HEADERS,
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      ...gigaChatOptions,
      messages: [...prompt, { role: 'user', content }],
    }),
  });
  try {
    const json = await response.json();
  
    return json?.choices?.[0]?.message?.content;
  } catch (e) {
    return 'error';
  }
}

app.post('/generate', async (req, res) => {
  await auth();
  const response = await getRecipes(req.body.ingredients.join(','));
  res.send(response);
});

app.listen(port, () => {
  console.log(`Started on ${port} port`);
  console.log('Use fake data:', isUsedFakeData)
})