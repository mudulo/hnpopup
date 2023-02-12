# HN Pop-Up: Profile Overlay for HN

![](screenshot.png)

Hacker News User Link Pop-up lets you quickly glance at a user's profile without
leaving the page you're on.

You can quickly see a user's about, karma and sign up date.

## Inspiration

This repository is a fork of the upstream at https://github.com/mudulo/hnpopup.
All credit goes to *mudulo* for coming up with the idea and executing on it.

My fork uses a simpler mechanism to display the title and simplifes the code as
well in addition to adapting it to my preferred style of coding.

## Installation

This fork doesn't publish browser extension store packages yet.
See the upstream https://github.com/mudulo/hnpopup for Chrome and Firefox or
use the offline install method:

### Firefox

- Clone or download this repository
- Go to `about:debugging` (type in the address bar)
- Click *This Firefox* > *Load Temporary Add-On*
- Browse to the extension folder and select `manifest.json`
- Click *Reload* after making any code changes

### Chrome

- Clone or download this repository
- Go to `chrome://extensions` (type in the address bar)
- Click "Load Unpacked" and select the extension folder

## Functionality

This extension enumerates all user links on a page and attaches a one-shot
`mouseover` event handler to each one.

When the link is hovered over for the first time, it hits the Hacker News API to
obtain the profile information:
`https://hacker-news.firebaseio.com/v0/user/${id}.json`

Once downloaded, the profile information is formatted into a multi-line string
and used as a `title` of the link `a` element.
Subsequent hovering over the link won't make another network request, instead
the existing `title` attribute value is presented by the browser.

The extension is supported by Chrome and Firefox.
Safari support is untested.

## Security & Privacy

This extension only has access to `https://news.ycombinator.com/*` and
`https://hacker-news.firebaseio.com/*` and only accesses the page DOM.

It does not access your Hacker News cookies or other personal data in any way.

## Community

Feel free to open issues or submit PRs.

## To-Do

### Sync with the upstream maintainer and see if they are interested in merging

I have forked the extension and rewrote it heavily to suit my coding style and
preferences.

I will reach out the the upstream maintainer, thank them for their idea and ask
them whether they'd be interested in merging.
If so, we'll merge the fork into the upstream.

### Package for the Chrome Extension Store and the Mozilla Add-On Store

In case the upstream maintainer is not interested in merging, I might decide to
submit my fork as an alternative extension, in which case I will need to bundle
it and submit it to the two stores.

The same source code and manifest will work for both stores as the extension is
written in and uses the Web Extension format and APIs.

### Test the extension in Safari and submit to Apple's extension store

Safari should support Web Extensions so without any code changes, the same code
should work in Safari, too.
I have access to macOS Safari so I will test the extension and publish it for
the Apple Safari extension store if it indeed works and doesn't cost too much.
(I am not sure if the Safari extension store is subject to the Developer fee.)

### Come up with a new icon

I am thinking a nicer icon could be possible to make.
Something with the HN letters with a masked out silhouette or similar.
