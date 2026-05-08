var iFileName = "Drakkenheim's Apothecary.js";
RequiredSheetVersion("13.2.3");

SourceList["SCGtD"] = {
	name : "Sebastian Crowe’s Guide to Drakkenheim",
	abbreviation : "SCGtD",
	group : "Drakkenheim",
	url : "https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-pdf/",
	date : "2023/09/01"
};

ClassList["apothecary"] = {
	regExpSearch : /apothecary/i,
	name : "Apothecary",
	source : ["SCGtD", 132],
	primaryAbility : "Intelligence",
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Int", "Wis"],
	skillstxt : {
    	primary : "Choose two from Arcana, History, Investigation, Medicine, Nature, and Religion",
		secondary : "Choose one from Arcana, History, Investigation, Medicine, Nature, and Religion"
	},
  	toolProfs : {
	    primary : [["Any tool", 1], ["poisoner’s kit, herbalism kit, or alchemist’s supplies", 1]],
	},
	armorProfs : {
	    primary : [true, true, false, false],
	    secondary : [true, false, false, false]
	},
	weaponProfs : {
    	primary : [true, false, ["short sword", "hand crossbow"]],
    	secondary : [false, false]
	},
	equipment : "Apothecary starting equipment:" +
		"\n \u2022 A light crossbow and 20 bolts, a shortsword, -or- any simple weapon;" +
	    "\n \u2022 A component pouch -or- an arcane focus;" +
	    "\n \u2022 A scholar’s pack -or- a dungeoneer’s pack;" +
	    "\n \u2022 Hide armor, any simple weapon, and two daggers;" +
		"\n \u2022 A healer’s kit.",
	subclasses : ["Occult Practic", []],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingTable : [ 
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl 5
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl 6
		[0, 0, 0, 3, 0, 0, 0, 0, 0], //lvl 7
		[0, 0, 0, 3, 0, 0, 0, 0, 0], //lvl 8
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl 9
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl10
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl11
		[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl12
		[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl13
		[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl14
		[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl15
		[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl16
		[0, 0, 0, 0, 6, 0, 0, 0, 0], //lvl17
		[0, 0, 0, 0, 6, 0, 0, 0, 0], //lvl18
		[0, 0, 0, 0, 6, 0, 0, 0, 0], //lvl19
		[0, 0, 0, 0, 6, 0, 0, 0, 0] //lvl20
	],		
  	spellcastingKnown : {
    	cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells : "list",
    	prepared : true
  	},
	spellcastingList : {
		class : "apothecary",
	},
	features : {
	    "spellcasting" : {
	    	name : "Apothecary Magic",
	    	source : ["SCGtD", 135],
	    	minlevel : 1,
	    	description : desc([
	        	"I can cast prepared apothecary cantrips/spells, using Intelligence as my spellcasting ability",
	        	"I can use an arcane focus as a spellcasting focus for my wizard spells",
	        	"I can cast all wizard spells in my formula book as rituals if they have the ritual tag",
	        	"After a long rest, I can replace one apothecary cantrip I know with another cantrip from the apothecary spell list."
	    	]),
	    },
		"subclassfeature3" : {
			name : "Occult Practices",
			source : ["SCGtD", 136],
			minlevel : 1,
			description : desc([
		    	"Choose a Occult Practic in the \"Class\" field."
		    ]),
	    },
	    "esoteric theories" : {
			name : "Esoteric Theories",
			source : ["SCGtD", ],
			minlevel : 1,
			description : desc([
				"patata"
		  	]),
	    },
	  }, //features
	}; //apothecary class
	
	/*
	    "" : {
	      name : "",
	      source : ["SCGtD", ],
	      minlevel : ,
	      description : desc([
	        ""
	      ]),
	    },  
	*/
[
	"acid burn", "acid splash", "bacterial barrage", "chill touch", "guidance", "light", "mending", "message", "poison needle", "poison spray", "resistance", "shocking grasp", "spare the dying", "thaumaturgy", //0th level
	"acrid orb", "alarm", "comprehend languages", "create or destroy water", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "envenom", "false life", "feather fall", "floating disk", "fog cloud", "grease", "healing word", "tasha's hideous laughter", "identify", "illusory script", "infect", "jump", "purify food and drink", "sleep", "stream of consumption", "toxic shield", "unseen servant", //1st level
	"acid arrow", "aid", "biohazard", "blindness/deafness", "caustic grip", "enhance ability", "enlarge/reduce", "gentle repose", "grasping ghost", "hold person", "invigorate", "lesser restoration", "ocular necrosis", "protection from poison", "ray of enfeeblement", "see invisibility", "silence", "spider climb", "web", //2nd level
	"bestow curse", "corrosive blast", "dispel magic", "fear", "fetid blade", "gaseous form", "glyph of warding", "haste", "hypnotic pattern", "magic circle", "mass healing word", "pestilence", "purge contamination", "protection from energy", "remove curse", "revivify", "sending", "slow", "speak with dead", "stinking cloud", "tranquilizing toxin", "vampiric touch", "venomous aura", "water breathing", //3rd level 
	"evard's black tentacles", "blight", "blood worm", "corpse explosion", "corrupting spores", "death ward", "freedom of movement", "last rites", "poison wave", "polymorph", "stoneskin", "vitriol ichor", //4th level
	"acid rain", "antilife shell", "cloudkill", "contact other plane", "greater restoration", "hold monster", "mass cure wounds", "nerve gas", "raise dead", "scrying", "septic shock", "telepathic bond", "teleportation circle", "toxic barrage", //5th level
	"chain lightning", "circle of death", "create undead", "disintegrate", "eyebite", "flesh to stone", "globe of invulnerability", "harm", "heal", "mephitic vapors", "true seeing", "vile necrosis", //6th level
	"etherealness", "finger of death", "forcecage", "miasma", "plane shift", "prismatic spray", "grievous wounds", "regenerate", "resurrection", //7th level
	"antimagic field", "antipathy/sympathy", "breath of nightshade", "clone", "dominate monster", "feeblemind", "mind blank", "plague wind", "power word stun", //8th level
	"astral projection", "foresight", "mass heal", "pandemic", "power word kill", "time stop", "touch of death", "true polymorph", "true resurrection", //9th level
 ].forEach( function (s) {
	 if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("apothecary") === -1) SpellsList[s].classes.push("apothecary");
 }); //apothecary spell list
