const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Cấu hình CORS để cho phép yêu cầu từ React client (localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'X-Requested-With']
}));

app.use(express.json());