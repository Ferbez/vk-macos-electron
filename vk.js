function counterTools() {
	var x = document.querySelector('.side_bar_ol').getElementsByClassName('inl_bl left_count');
	var i;
	var total = 0;
	for (i = 0; i < x.length; i++) {
		total = total + parseInt(x[i].innerHTML, 10);
	}
	if (total) {
		document.title = 'VK (' + total + ')';
	}
};

function adjustLogo() {
	if (window.innerHeight == screen.height && window.innerWidth == screen.width) {
		document.querySelector('.HeaderNav__item.HeaderNav__item--logo').style.left = '0px';
		document.querySelector('.PortalNavigation').style.left = '14px';
	} else {
		document.querySelector('.HeaderNav__item.HeaderNav__item--logo').style.left = '-10000px';
		document.querySelector('.PortalNavigation').style.left = '232px';
	}
};

function onLoad() {
	// notification sounds
	curNotifier.sound = '';
	curNotifier.sound_im = '';
	curNotifier.sound_im_current = '';

	// header logo and menu
	if (window.innerHeight == screen.height && window.innerWidth == screen.width) {
		document.querySelector('.HeaderNav__item.HeaderNav__item--logo').style.left = '0px';
		document.querySelector('.PortalNavigation').style.left = '14px';
	} else {
		document.querySelector('.PortalNavigation').style.left = '232px';
	}

	// counter, _blank and away.php
	var fixTarget = document.querySelector('.scroll_fix');
	const fixManagement = function() {
		// counter
		counterTools();
		// _blank and away.php
		var a = document.getElementsByTagName('a');
		for (i = 0; i < a.length; i++) {
			if (a[i].target == '_blank') {
				a[i].target = '';
			}
			if (a[i].href.includes('vk.com/away.php') && !a[i].href.includes('m.vk.com/away.php')) {
				a[i].href = a[i].href.replace('vk.com/away.php', 'm.vk.com/away.php');
			}
		}
	};
	const fixObserver = new MutationObserver(fixManagement);
	fixObserver.observe(fixTarget, {
		childList: true,
		subtree: true,
		characterData: true,
		attributes: true
	});

	// header fixes
	var titleTarget = document.querySelector('title');
	const titleFixes = function() {
		if (!document.title.includes('VK')) {
			counterTools();
		}
	};
	const headerObserver = new MutationObserver(titleFixes);
	headerObserver.observe(titleTarget, {
		childList: true,
		subtree: true,
		characterData: true
	});
};

window.addEventListener('resize', adjustLogo);
window.addEventListener('load', onLoad);