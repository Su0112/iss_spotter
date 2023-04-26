/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 * IPv4
$ curl 'https://api.ipify.org?format=json'
{"ip":"192.80.174.26"}
 */
const request = require('request');

const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';
  request(url, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(new Error(`Unexpected status code ${response.statusCode}`), null);
    } else {
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    }
  });
};

module.exports = { fetchMyIP };
