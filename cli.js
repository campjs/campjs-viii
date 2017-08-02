#!/usr/bin/env node

const ArgumentParser = require('argparse').ArgumentParser;
const parser = new ArgumentParser({
  addHelp: true,
  description: 'Offline version of the CampJS website'
});

parser.addArgument(
  ['-p', '--port'],
  {
    help: 'Port to run localserver on. Defaults to 3000.'
  }
);

const args = parser.parseArgs();

const express = require('express')
const app = express()

app.use(express.static('docs'))

const port = parseInt(args.port || 3000)
app.listen(port, function () {
  console.log(`Welcome to CampJS. Open up http://localhost:${port}`);
})
