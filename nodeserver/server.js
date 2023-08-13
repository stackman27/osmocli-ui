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
// start using http://137.184.34.49:3000/run-command
app.post('/run-command', function (req, res) {
  const { command } = req.body;
  
  exec(command, 
        { timeout: 10000 }, 
        (error, stdout, stderr) => {
          if (error) {
            if (error.killed) {
              console.log("Command execution might be taking longer than expected");
              return res.status(408).send('Command execution took too long and was stopped. Please check you localosmosis is running correctly');
            }

            console.log(`Error executing command, please check console for details: ${error}`);
            return res.status(500).send(error);
          }

          console.log('Command executed successfully');
          var formatted = stdout.replace(/\\n/g, "<br>")
          let logs = formatted.split('logs:')[1];
          res.send(`Logs:` + logs);
        }
     );
});

app.listen(3000, function () {
  console.log('Server is running on http://137.184.34.49:3000/');
});