# Personal Discord Bot 

A little rewrite of my old Discord bot this time in JavaScript as opposed to Python.
Anyone is free to add to it or test it if they want to. I'm still in the process of
learning the Discord.js library so there are definitely things that I will be changing
as time goes on.

## Steps for running

create a config.json file in the root directory.
the format should look like this...
```
{
    "clientId": "YOUR-CLIENT_ID",
    "guildId": "YOUR-GUILD_ID",
    "token" : "YOUR-TOKEN-HERE"
}
```

then you can just open a terminal, make sure you are running Node.js version 16 or above.
run ```$ npm install``` to fetch dependencies, and use ```$ npm run start``` to run the bot.
