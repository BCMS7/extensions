(function() {
    'use strict';
    var script = document.createElement("script");
    script.src = "https://drbranestawm.github.io/BCAR/script/bcarBeta.js";
    document.head.appendChild(script);
})();

(function() {
    'use strict';
    var script = document.createElement("script");
    script.src = "https://agicitag.github.io/BCTweaks/beta/extension/bct.js";
    document.head.appendChild(script);
})();

(function () {
	"use strict";

	const script = document.createElement("script");
	script.src = `https://sidiousious.gitlab.io/bce/bce.user.js?v=${(
		Date.now() / 10000
	).toFixed(0)}`;
	document.head.appendChild(script);
})();




setTimeout(
	function () {
		if (window.BCX_Loaded === undefined) {
			const n = document.createElement("script");
			n.setAttribute("language", "JavaScript");
			n.setAttribute("crossorigin", "anonymous");
			n.setAttribute("src", "https://jomshir98.github.io/bondage-club-extended/bcx.js?_=" + Date.now());
			n.onload = () => n.remove();
			document.head.appendChild(n);
		}
	},
	2000
);


setTimeout(
    () => {
        const n = document.createElement("script");
        n.language = "JavaScript";
        n.crossorigin = "anonymous";
        n.src = "https://bananarama92.github.io/MBS/main/mbs.js";
        document.head.appendChild(n);
    },
    2000,
);
