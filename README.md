# search-with-sequelize
Simple  app connecting node, react and redux with sequlize.

Go to server folder and run npm install
Go to client folder and run npm install


Go to server - config/config.json (Change username and password for mysql)
Create database named - database_development 
Run - node_modules/.bin/sequelize db:migrate


Go to server - npm start -s

To create random data hit localhost:3001/api/v1/search/generate_random_item in browser
Go to client - npm start -s
