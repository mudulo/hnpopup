# HN Pop-Up: Profile Overlay for HN

**Available for Chrome and Firefox.**

![Screenshot of HN Pop-Up](https://github.com/mudulo/hnpopup/raw/master/screenshot.png)

HN Pop-Up lets you quickly glance at a user's profile without leaving the page
you're on. You can quickly see a user's bio, karma, account age

HN Pop-Up is available for Chrome and Firefox. You would want to
grab a copy from the appropriate extensions / addon store.

## How it works and Security Overview

This extension finds usernames on HN Stories, and then adds a custom attribute with the username to the link tag. When a user hovers on a username, we make a request to the hackernews profile api here https://hacker-news.firebaseio.com/v0/user/[username].json?print=pretty and then parse this response for display. This extension does not read or have access to your HN Cookies

## Installation

### Chrome:

Download here: https://chrome.google.com/webstore/detail/clfaigfmebhcgofincgbmofoiomlhbfo

### Firefox

Download here: https://addons.mozilla.org/en-US/firefox/addon/hn-pop-up/

### Chrome
Clone or download this repository, open chrome://extensions (type in address bar), click "Load Unpacked", then select the chrome folder.

### Firefox
Clone or download this repository, open about:debugging (type in address bar), click "This Firefox", then "Load Temporary addon" then browse to the firefox folder and select manifest.json.

## Contributing
Think you could help debug, test and package, a Safari extension, please feel free to fork this
repository, Currently forked and rebuilt this for Chrome and Firefox using Ubuntu, unable to test for Safari.