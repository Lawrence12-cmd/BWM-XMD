const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7ziOSBytaqrBhBRUURFW3pqaiqScFFuhiBil/8+Rdtd3Q9zzvTwlErI2itrrb1fQV4kFbZxC4avoCTJBVLcLWlbYjAEeh2GmIAeQJBCMATPy8It01qgEzQbO5ymmdZkdLwGR1JkqYq5dTSpdQbtRnv/Cdx7oKwPaRL8BjAmS2+W1raWZdauUNm139QqOnNHNEPl6Rwt2PFh6c9ItjWfwL1DhAlJ8sgsY5xhAlMbty5MyPfotxpBB5fXN5DfcyrcpUYwnTBscdXC+fx0sIwZEhfy2Na56nv00QqNt44a09W5UHVXNUvzme3rcIawUxoxNpesxKfCxuMXD/pVEuUYTRHOaULbb+u+cJhM2u6O4ybeNZOIJ3OHN/HLvM12HusvxqOjuZhl0vPeir5H3IcuRwXdi1bxdAmXc9PTr26dzVNpG2qsN1IiWzXUyF7uza/EXfKRldP/0X05fuFtNzJOsgAra0rWe8zxx11I/Ipng63jPxd2CDlhzk+/R1+arX324DJ4JO73rO6bmrGSNbYe1w5jtqlW9md4VbFrLRY+6UNak9+xpC8xubmFZi0VZTDho8iuxtfD3ubdiamwmIGzpmZO0rQ1FQauVy63WtX1uUz2rWSLEi+wFtlh63S+CqzorFNZL8NGi57eXnTC7RSBYf/eAwRHSUUJpEmRd3uS0AMQXTY4IJi+qQvULB2vy51a+ZocMN7a7A+CkJ0x0zPxXpaW2e7KsMrO5i2dPoEeKEkR4KrCaJJUtCDtAlcVjHAFhn/+1QM5vtKHb121Qb8HwoRUdJvXZVpA9GHqxyEMgqLO6abNA6NbYAKG3Oc2pjTJo6qTsc4hCeLkgo0Y0goMQ5hW+N4DCF+SAHd4QIvnL3xAQq+F3lzSdLPKr383HeW4yB+/KIMDluBh8ENAkvRDCFT5xyFQpB/9IJBEGPJKH0HQA8l7y3R3fungSts3Os5liI63SOXJch84Rptsx/7izYWH9JhgBIaU1LgHDjA41aVXnHD+G9zM8rbMRW/8uXy9TkeQD2FYHLE+j7kvuA9LwfD1c0wZBerwXHdvarKwAT2QvSUw6V7ODwbiQJBlSRWEIT/4o/rZdELCsvyZY9rhvove3UCYwiStwBAYTl6RF21iurl9nTeWpZmRZkQa+DTpI+yPNNmDeCIL01OJrYM1VflaOTbcgT3K1WS2y059tTQW4mgqOrHy9C8gYAiEm0C5MshmkZjfkHPaotTLRpDoWCqFeG2x5LL1jYWElM3RPq6ykvFWirOdJtfnWZCvORsuM0X0a3lsRCQwTjE+b0arp67aIyxfi0Uq0m9Csx3NlSYciGuRH9Rtf3RqlEtB0bFVDa7IT8q6Mq/jQtmvsmiv3EZzt9jp1saHh1ubsM7OT2QD3frmBKONq4yaRxu+jYH0ffwmbx3y+h6tMMFv0yyHnUX/Zc7XlHP33heM9/n4iyTpGyqsGcaY2fs4uyYuIpep4liswMh6u3spnRCujstVu/T8ENzvf/VAmUIaFiQDQwBzRIoEgR5IYUW1z0b1kgxXFGYlGPblgSxKoigLPZC1WlluKKQf/Q207pt7Crj/AywwWnX6BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

