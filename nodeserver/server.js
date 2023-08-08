const express = require('express');
const { exec } = require('child_process');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

// echo "notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius" | osmosisd keys add lo-test1 --recover --keyring-backend test
// Example route handler
app.post('/run-command', function (req, res) {
  const { command } = req.body;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error executing command, please check console for details: ${error}`);
      res.status(500).send(error);
      return;
    } 

    console.log('Command executed successfully'); 
 
    var formatted = stdout
    .replace(/\\n/g, "<br>")     
    let logs = formatted.split('logs:')[1];
    res.send(`Logs:` + logs);
  });

  setTimeout(function() {
    console.log("Command execution might be taking longer than expected");
    res.status(408).send('Command execution took too long and was stopped. Please check you localosmosis is running correctly');
      }, 15000);  
});

app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});
