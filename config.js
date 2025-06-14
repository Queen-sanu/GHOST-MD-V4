const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'SANU-MD=of8C3ALS#O3bBehfPNGMMaNvLWuAlhK2dB4kHX6-6LmDNq0OAGLg'
};
