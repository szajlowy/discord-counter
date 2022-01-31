/*
Copyright (C) 2022  Dawid Tobaj

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/



const userId = ""; // Put your User Id here
const delay = 10000; // Put your delay here [milliseconds]

const userToken = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();
const channelId = pathArray = window.location.pathname.split('/').slice(-1);

function sendMessage(mess) {
    fetch(`https://discord.com/api/v9/channels/${channelId}/messages`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en",
            "authorization": userToken,
            "content-type": "application/json",
            "x-debug-options": "bugReporterEnabled",
            "x-discord-locale": "en",
        },
        "referrer": `https://discord.com/channels/${userId}/${channelId}`,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"content\":\"${mess}\",\"tts\":false}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
    .then(res => res.json())
    .then(data => {
        console.log('Sent!', data);
        setTimeout(() => count(), delay);
    })
    .catch(e => { throw new Error("Couldn't send your message! Check your delay and User Id!!!", e) });
}

function getLastMess () {
    const lastMessDiv = document.querySelector('ol[data-list-id="chat-messages"]').lastChild.previousElementSibling.querySelector('div[id^=message-content]');
    return lastMessDiv.innerText;
}

function count () {
    let lastMess, lastNum;
    lastMess = getLastMess();
    lastNum = parseInt(lastMess);
    if (lastNum === NaN) {
        throw new Error("Last message isn't a valid number!");
    }
    sendMessage(++lastNum);
}

count();