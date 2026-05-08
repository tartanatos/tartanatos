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
		spells : "book",
    	prepared : true
  	},
	spellcastingList : {
		list : "apothecary",
		level : [0, 9],
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
	
["Acid Burn", "Acid Splash", "Bacterial Barrage", "Chill Touch", "Guidance", "Light", "Mending", "Message", "Poison Needle", "Poison Spray", "Resistance", "Shocking Grasp", "Spare the Dying", "Thaumaturgy", //0th level
 "Acrid Orb", "Alarm", "Comprehend Languages", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Envenom", "False Life", "Feather Fall", "Floating Disk", "Fog Cloud", "Grease", "Healing Word", "Tasha's Hideous Laughter", "Identify", "Illusory Script", "Infect", "Jump", "Purify Food and Drink", "Sleep", "Stream of Consumption", "Toxic Shield", "Unseen Servant", //1st Level
 "Acid Arrow", "Aid", "Biohazard", "Blindness/Deafness", "Caustic Grip", "Enhance Ability", "Enlarge/Reduce", "Gentle Repose", "Grasping Ghost", "Hold Person", "Invigorate", "Lesser Restoration", "Ocular Necrosis", "Protection from Poison", "Ray of Enfeeblement", "See Invisibility", "Silence", "Spider Climb", "Web", //2nd level
 "Bestow Curse", "Corrosive Blast", "Dispel Magic", "Fear", "Fetid Blade", "Gaseous Form", "Glyph of Warding", "Haste", "Hypnotic Pattern", "Magic Circle", "Mass Healing Word", "Pestilence", "Purge Contamination", "Protection from Energy", "Remove Curse", "Revivify", "Sending", "Slow", "Speak with Dead", "Stinking Cloud", "Tranquilizing Toxin", "Vampiric Touch", "Venomous Aura", "Water Breathing", //3rd level 
 "Evard's Black Tentacles", "Blight", "Blood Worm", "Corpse Explosion", "Corrupting Spores", "Death Ward", "Freedom of Movement", "Last Rites", "Poison Wave", "Polymorph", "Stoneskin", "Vitriol Ichor", //4th level
 "Acid Rain", "Antilife Shell", "Cloudkill", "Contact Other Plane", "Greater Restoration", "Hold Monster", "Mass Cure Wounds", "Nerve Gas", "Raise Dead", "Scrying", "Septic Shock", "Telepathic Bond", "Teleportation Circle", "Toxic Barrage", //5th level
 "Chain Lightning", "Circle of Death", "Create Undead", "Disintegrate", "Eyebite", "Flesh to Stone", "Globe of Invulnerability", "Harm", "Heal", "Mephitic Vapors", "True Seeing", "Vile Necrosis", //6th level
 "Etherealness", "Finger of Death", "Forcecage", "Miasma", "Plane Shift", "Prismatic Spray", "Grievous Wounds", "Regenerate", "Resurrection", //7th level
 "Antimagic Field", "Antipathy/Sympathy", "Breath of Nightshade", "Clone", "Dominate Monster", "Feeblemind", "Mind Blank", "Plague Wind", "Power Word Stun", //8th level
 "Astral Projection", "Foresight", "Mass Heal", "Pandemic", "Power Word Kill", "Time Stop", "Touch of Death", "True Polymorph", "True Resurrection", //9th level
 ].forEach( function (s) {
	 if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("apothecary") === -1) SpellsList[s].classes.push("apothecary");
 }); //apothecary spell list
