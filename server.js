#!/usr/bin/env node
const http = require('http');
const express = require('express');

let app = express(); 
app.use('/', express.static('./'));
app.listen(8082);
 
