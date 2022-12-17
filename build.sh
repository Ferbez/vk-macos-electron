#!/bin/bash
cd "$(dirname "$0")"
nativefier https://vk.com \
	--arch universal \
	--platform darwin \
	--name VK \
	--icon VK.icns \
	--disable-old-build-warning-yesiknowitisinsecure \
	--darwin-dark-mode-support true \
	--title-bar-style hidden \
	--inject vk.css \
	--zoom 1 \
	--inject vk.js \
	--counter \
	--width 1130 \
	--height 655 \
	--min-width 1130 \
	--min-height 655 \
	--browserwindow-options '{"trafficLightPosition": { "x": 16, "y": 16 }}' \
	--strict-internal-urls \
	--internal-urls '.*?(id.vk.com|vk.com/login.php.*?|login.vk.com|vk.com/feed|vk.com/al_im.php.*?).*?'
cd VK-darwin-universal
ln -s /Applications Applications