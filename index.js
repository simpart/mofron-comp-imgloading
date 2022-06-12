/**
 * @file mofron-comp-imgloading/index.js
 * @brief jspreadsheet component for mofron
 * @license MIT
 */
const Loading  = require("mofron-comp-loading");
const Frame    = require("mofron-comp-frame");
const ConfArg  = mofron.class.ConfArg;
const Image    = require("mofron-comp-image");
const HrzPos   = require("mofron-effect-hrzpos");
const comutl   = mofron.util.common;
const Text     = require("mofron-comp-text");

module.exports = class extends Loading {
    /**
     * initialize component
     * 
     * @param (mixed) string: label text
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("ImgLoading");
	    
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            let frame = new Frame({
                size: new ConfArg("2rem","1.5rem"),
                baseColor: "white",
                accentColor: "white",
                child: [this.image(), this.text()]
            });
            this.child(frame);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    image (prm, cnf) {
        try {
            if ("string" === typeof prm) {
                this.image().path(prm);
		this.image().config(cnf);
		return;
	    } else if (true === comutl.isinc(prm, "Image")) {
                prm.effect(new HrzPos("center"));
		prm.size("1rem","1rem");
		prm.style({ "margin-top" : "0.1rem" });
		prm.config(cnf);
	    }
            return this.innerComp("image", prm, Image);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    text (prm, cnf) {
        try {
            if ("string" === typeof prm) {
                this.text().text(prm);
		this.text().config(cnf);
		return;
	    } else if (true === comutl.isinc(prm, "Text")) {
                prm.effect(new HrzPos("center"));
		prm.size("0.2rem");
	    }
	    return this.innerComp("text", prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    size (wid, hei) {
        try {
            return this.child()[0].size(wid, hei);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
