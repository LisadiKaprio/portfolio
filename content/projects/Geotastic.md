---
title: Internship at Geotastic
subtitle: Browser-Based Game Development
created: 2022-09-30
cover: geotastic-cover

goal: Internship focused on developing a browser-based game.
skills:
  - Web Development
  - 2D Art
tools:
  - Vue.js
  - Typescript
  - Paint Tool SAI
  - QGIS
duration: 6 months

website: geotastic.net
---


### What is it about?

Geotastic is a Google Street View based browser game, known as a free alternative to another established browser game called Geoguessr. The basic concept is to guess where on the map you are based on a random Street View footage the player is given.Various game modes, single- and multiplayer, highscore records and community events are added on top of that, making it a sophisticated game project with large fanbase.

I initially got to know about this project through Twitch streams, in which the developer AnnoyingEdu himself was present either as a chatter, a guest or the streamer himself. I enjoyed getting to see the development process up close, and constantly contributed by providing bug reports and even creating artworks that got featured on the website as game assets.Naturally, when it was time to get my mandatory internship, spending this time contributing to Geotastic's code and design was my first choice.

### What tasks did I get to accomplish?

I have spent most of the internship improving user interface and fixing bugs. This was a smooth way to get used to working on a large established project and to learn to work confidently with Vue.js and Typescript.

::lightbox-images{:items='["/geotastic-login.png", "geotastic-login"]'}
::

My favourite part was finding cluttered UI and making it more clear and more spacious. In the redesigned login/register window I focused on making it more familiar and closer to how such modals are usually designed and modeled, because I noticed myself as a user of this website getting confused whenever I opened this window.

::lightbox-images{:items='["/geotastic-multiplayer.png"]'}
::

The multiplayer lobby settings display was also always confusing to me. And I wasn't the only one, as players often kept forgetting what settings were set up by the host, or didn't realize that the host has changed a certain setting. This happened because of the text clutter that was easy to gloss over, especially for casual players like myself. Because of this major flaw, redesigning this component was my top priority. Every setting got its dedicated descriptive icon on the panel, which can be hovered over to reveal details in a tooltip.

::lightbox-images{:items='["geotastic-states", "geotastic-wiki-photo"]'}
::

Other tasks that I accomplished included:
- improving country and state borders as geo-json files in QGIS
- implementing capital marker when selecting a country or a state on the map
- fetching and inserting a photo from the related wikipedia article on the results page
- adding hotkeys on pages where they were missing
- making sure the button labels and colors are consistent across pages to avoid user confusion
- implementing new libraries to the project to add some features, such as lightbox and color picker
- implementing new player information indicators
- testing and recording bugs or impromevent suggestions on any new features added

I also got to accomplish some design tasks, like creating vector banners, flags and icons.

Many minor bug fixes were accomplished, thanks to the new tool that I found and helped implement into the website, which is canny.io. It is located directly inside the browser, and users are able to leave bug reports or feature suggestions there. The posts that are being written can collect up- and down-votes, and initiate discussions between the community members and the developers.

### What did I learn?

The most important learning experience was getting to work on a large-scale project, study and imitate the existing code, adapt to coding conventions established by the main developer and learn from mistakes that I made and that were immediately pointed out to me.