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
	        	"I can use an arcane focus or my formula book as a spellcasting focus for my apothecary spells",
	        	"I can cast all apothecary spells in my formula book as rituals if they have the ritual tag",
	        	"After a long rest, I can replace one apothecary cantrip I know with another cantrip from the apothecary spell list."
	    	]),
			additional : ["3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"],
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
			minlevel : 2,
			description : desc([
				"I gain two esoteric theories of my choice."
		  	]),
			additional : ["0 theories known", "2 theories known", "2 theories known", "3 theories known", "3 theories known", "4 theories known", "4 theories known", "5 theories known", "5 theories known", "6 theories known", "6 theories known", "7 theories known", "7 theories known", "8 theories known", "8 theories known", "9 theories known", "9 theories known", "10 theories known", "10 theories known", "11 theories known"],
			/*
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			*/
			extrachoices : ["acquired tolerance", "adrenaline surge (prereq: level 6 apothecary)", "anatomical precision", "anesthesiology (prereq: level 14 apothecary)", "bedside manner", "caustic formulae (prereq: level 6 apothecary)", "clinical conditioning  (prereq: level 6 apothecary)", "combat medic", "corrosive compound (prereq: level 6 apothecary)", "cosmetic surgery", "critical condition (prereq: level 6 apothecary)", "diagnosis", "doctor’s note (prereq: level 6 apothecary)", "double dose (prereq: level 10 apothecary)", "extracurricular research"],
			/*
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			BORRAR
			*/
			extraTimes : levels.map(function(n) {
				return n < 2 ? 2 : n < 4 ? 3 : n < 6 ? 4 : n < 8 ? 5 : n < 10 ? 6 : n < 12 ? 7 : n < 14 ? 8 : n < 16 ? 9 : n < 18 ? 10 : 11;
			}),
			"acquired tolerance" : {
				name : "Acquired Tolerance",
				description : desc([
					"Advantage on saving throws against poison and resistance to poison damage. ",
					"I automatically succeed on saving throws against my apothecary spells, and never take damage from my apothecary spells."
								   ]),
				source : ["SCGtD", 136],
				dmgres : ["poison"],
			},
			"adrenaline surge (prereq: level 6 apothecary)" : {
				name : "Adrenaline Surge",
				description : desc([
					"A creature at 0 hit points who regains hit points from a spell I cast using an apothecary spell slot gains resistance to all damage and has advantage on saving throws until the end of its next turn. It gains advantage on the first attack roll it makes on its next turn."
				]),
				source : ["SCGtD", ],
				submenu : "[apothecary level  6+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
			},
			"anatomical precision" : {
				name : "Anatomical Precision",
				description : desc([
					"When I make a weapon attack, I can use your Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls."
				]),
				source : ["SCGtD", 136],
			},
			"anesthesiology (prereq: level 14 apothecary)" : {
				name : "Anesthesiology",
				description : desc([
					"I can cast Hold Person without expending a spell slot or material components. I must finish a long rest before I can use this theory on the same creature."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level  14+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 14; },
				spellcastingBonus : [{
					spells : ["hold person"],
					name : "Anesthesiology",
					firstCol : "oncelr"
			}],
			"bedside manner" : {
				name : "Bedside Manner",
				description : desc([
					"I gain proficiency in Insight and Persuasion."
				]),
				source : ["SCGtD", 137],
				skills : [
					"Insight", "Persuasion"
				]
			},
			"caustic formulae (prereq: level 6 apothecary)" : {
				name : "Caustic Formulae",
				description : desc([
					"Once per turn when I deal damage to a creature or object with an apothecary spell, I can expend an apothecary spell slot to deal 2d4 extra acid damage to that target, plus another 2d4 per level of the spell slot."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level  6+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
			},
			"clinical conditioning  (prereq: level 6 apothecary)" : {
				name : "Clinical Conditioning",
				description : desc([
					"I gain proficiency in Constitution saving throws."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level  6+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
				saves : ["Con"]
			},
			"combat medic" : {
				name : "Combat Medic",
				description : desc([
					"I gain proficiency with martial weapons and shields."
				]),
				source : ["SCGtD", 137],
				armorProfs : [true, true, false, true],
				weaponProfs : [true, true]
			},
			"corrosive compound (prereq: level 6 apothecary)" : {
				name : "",
				description : desc([
					"When I deal poison damage with my apothecary spells, I can deal half the spell’s damage as poison damage and acid damage instead."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level  6+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
			},
			"cosmetic surgery" : {
				name : "Cosmetic Surgery",
				description : desc([
					"I can spend 8 hours performing an occult surgical procedure upon a willing creature, permanently transforming its appearance. I decide what the creature looks like, including facial features, the sound of its voice, hair length, coloration, and distinguishing characteristics, but none of its game statistics change. I can’t alter the size of a creature, and its basic shape stays the same. The resulting transformation is non-magical, however, a greater restoration spell or similar magic cast upon the creature can restore it to its original appearance."
				]),
				source : ["SCGtD", 137],
			},
			"critical condition (prereq: level 6 apothecary)" : {
				name : "Critical Condition",
				description : desc([
					"When a creature rolls a natural 1 on a saving throw made against one of my apothecary spells that deals damage, I roll all of the spell’s damage dice twice and add them together. Then I add any relevant modifiers as normal to determine the damage that creature takes from the spell."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level  6+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
			},
			"diagnosis" : {
				name : "Diagnosis",
				description : desc([
					"I can take the Help action as a bonus action on my turn."
				]),
				source : ["SCGtD", 137],
				action : ["bonus action", "Help"],
			},
			"doctor’s note (prereq: level 6 apothecary)" : {
				name : "Doctor’s Note",
				description : desc([
					"I can cast the Sending spell at-will. I must finish a long rest before I can use this theory to contact the same creature again."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level  6+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
				spellcastingBonus : [{
					spells : ["sending"],
					name : "Doctor’s Note",
					firstCol : "oncelr"
				}],
			},
			"double dose (prereq: level 10 apothecary)" : {
				name : "Double Dose",
				description : desc([
					"When I cast an apothecary spell using an apothecary spell slot that targets a single creature and restores hit points to that creature, I can target an additional creature within range."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level  10+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 10; },
			},
			"extracurricular research" : {
				name : "Extracurricular Research",
				description : desc([
					"I learn two additional cantrips of my choice from any class’s spell list."
				]),
				source : ["SCGtD", 137],
				spellcastingBonus : [{
					name : "Extracurricular Research",
					times : 2,
				}],
			},
			/*
			"" : {
				name : "",
				description : desc([
					""
				]),
				source : ["SCGtD", ],
				submenu : "[apothecary level  X+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= X; },
			},
			*/

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
