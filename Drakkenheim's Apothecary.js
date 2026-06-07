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
		"subclassfeature1" : {
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
			extrachoices : ["acquired tolerance", "adrenaline surge (prereq: level 6 apothecary)", "anatomical precision", "anesthesiology (prereq: level 14 apothecary)", "bedside manner", "caustic formulae (prereq: level 6 apothecary)", "clinical conditioning (prereq: level 6 apothecary)", "combat medic", "corrosive compound (prereq: level 6 apothecary)", "cosmetic surgery", "critical condition (prereq: level 6 apothecary)", "diagnosis", "doctor’s note (prereq: level 6 apothecary)", "double dose (prereq: level 10 apothecary)", "extracurricular research", "inoculation", "interdisciplinary practice (prereq: level 14 apothecary)", "laboratory assistant", "liability insurance (prereq: level 14 apothecary)", "medical expertise", "medical lexicon", "nerve agent (prereq: level 6 apothecary)", "noxious blood (prereq: level 6 apothecary)", "pharmacology", "physiological analysis", "practical resuscitation (prereq: level 10 apothecary)", "putrefaction", "rapid response", "routine procedure (prereq: level 10 apothecary)", "stolen secrets (prereq: level 10 apothecary)", "subject preparation (prereq: level 10 apothecary)", "surgeon’s instinct", "surgical strikes (prereq: level 6 apothecary)", "toxicology (prereq: level 6 apothecary)", "triage", "unfailing focus (prereq: level 6 apothecary)", "venomous instruments (prereq: level 10 apothecary)", "virulence", "vital signs", "vivisection (prereq: level 6 apothecary)"],
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
				submenu : "[apothecary level 06+]",
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
				submenu : "[apothecary level 14+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 14; },
				spellcastingBonus : [{
					selection : ["hold person"],
					name : "Anesthesiology",
					firstCol : "oncelr"
			    }],
            },
			"bedside manner" : {
				name : "Bedside Manner",
				description : desc([
					"I gain proficiency in Insight and Persuasion."
				]),
				source : ["SCGtD", 137],
				skills : ["Insight", "Persuasion"]
			},
			"caustic formulae (prereq: level 6 apothecary)" : {
				name : "Caustic Formulae",
				description : desc([
					"Once per turn when I deal damage to a creature or object with an apothecary spell, I can expend an apothecary spell slot to deal 2d4 extra acid damage to that target, plus another 2d4 per level of the spell slot."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level 06+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
			},
			"clinical conditioning (prereq: level 6 apothecary)" : {
				name : "Clinical Conditioning",
				description : desc([
					"I gain proficiency in Constitution saving throws."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level 06+]",
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
				submenu : "[apothecary level 06+]",
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
				submenu : "[apothecary level 06+]",
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
				submenu : "[apothecary level 06+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
				spellcastingBonus : [{
					selection : ["sending"],
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
				submenu : "[apothecary level 10+]",
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
					level: [0, 0],
				}],
			},
			"inoculation" : {
				name : "Inoculation",
				description : desc([
					"I have resistance to necrotic damage, and my hit point maximum can’t be reduced. In addition, I'm immune to diseases."
				]),
				source : ["SCGtD", 137],
				dmgres : ["necrotic"],
			},
			"interdisciplinary practice (prereq: level 14 apothecary)" : {
				name : "Interdisciplinary Practice",
				description : desc([
					"When I use my action to cast a spell, I can make one weapon attack as a bonus action."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level 14+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 14; },
				action : ["bonus action", "Attack (after spell)"],
			},
			"laboratory assistant" : {
				name : "Laboratory Assistant",
				description : desc([
					"I learn the spell Find Familiar, and I always have it prepared. It doesn’t count against the number of apothecary spells I can prepare."
				]),
				source : ["SCGtD", 137],
				spellcastingBonus : [{
					selection : ["find familiar"],
					name : "Laboratory Assistant",
					firstCol : "markedbox"
				}],
			},
			"liability insurance (prereq: level 14 apothecary)" : {
				name : "Liability Insurance",
				description : desc([
					"I can cast Contingency once on myself without material components. I can’t do so again until you finish a long rest."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level 14+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 14; },
				spellcastingBonus : [{
					selection : ["contingency"],
					name : "Liability Insurance",
					firstCol : "oncelr",
					}],
				spellChanges : {
					"contingency" : {
						components : "V,S",
					}
				}
			},
			"medical expertise" : {
				name : "Medical Expertise",
				description : desc([
					"I gain proficiency in the Medicine and Nature skills. My proficiency bonus is doubled for any ability check I make that uses either of these skills."
				]),
				source : ["SCGtD", 137],
				skills : ["Medicine", "Nature"]
			},
			"medical lexicon" : {
				name : "Medical Lexicon",
				description : desc([
					"I learn six languages of my choice. You can cast Detect Poison and Disease at will."
				]),
				source : ["SCGtD", 137],
				spellcastingBonus : [{
					selection : ["detect poison and disease"],
					name : "Medical Lexicon",
					firstCol : "atwill",
					}],
				languageProfs : [6]
			},
			"nerve agent (prereq: level 6 apothecary)" : {
				name : "Nerve Agent",
				description : desc([
					"When I deal poison damage with my apothecary spells, I can choose to deal psychic damage instead."
				]),
				source : ["SCGtD", 137],
				submenu : "[apothecary level 06+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
			},
			"noxious blood (prereq: level 6 apothecary)" : {
				name : "Noxious Blood",
				description : desc([
					"When a creature hits me with a melee attack while within 5 feet of me, it takes poison damage equal to 1d6 + my Constitution modifier."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 06+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
			},
			"pharmacology" : {
				name : "Pharmacology",
				description : desc([
					"When I cast a spell using an apothecary spell slot or my Greater Formula feature which restores hit points to a creature, the creature regains additional hit points equal to my Intelligence modifier."
				]),
				source : ["SCGtD", 138],
			},
			"physiological analysis" : {
				name : "Physiological Analysis",
				description : desc([
					"If I spend at least 1 minute observing or interacting with another creature outside combat, I can learn certain information about its physiology. The Game Master reveals to me two of the following characteristics of my choice:",
					" \u2022 Any one ability score",
					" \u2022 Armor Class",
					" \u2022 Current hit points",
					" \u2022 Resistances (if any)",
					" \u2022 Immunities (if any)",
					" \u2022 Vulnerabilities (if any)",
					"   Alternatively, I can spend 1 minute observing a corpse. After 1 minute, I determine the cause of death."
				]),
				source : ["SCGtD", 138],
			},
			"practical resuscitation (prereq: level 10 apothecary)" : {
				name : "Practical Resuscitation",
				description : desc([
					"When I cast a spell that has the sole effect of restoring a creature to life (but not undeath), such as Raise Dead, I don’t need material components to cast the spell if the creature has died within the past hour."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 10+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 10; },
			},
			"putrefaction" : {
				name : "Putrefaction",
				description : desc([
					"My apothecary spells and abilities ignore undead creatures’ resistance or immunity to poison damage and immunity to the poisoned condition."
				]),
				source : ["SCGtD", 138]
			},
			"rapid response" : {
				name : "Rapid Response",
				description : desc([
					"When I cast an apothecary spell that restores hit points to a creature, before or after casting the spell, I can move up to my speed without provoking opportunity attacks."
				]),
				source : ["SCGtD", 138],
			},
			"routine procedure (prereq: level 10 apothecary)" : {
				name : "Routine Procedure",
				description : desc([
					"I can cast Lesser Restoration at-will without expending a spell slot."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 10+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 10; },
				spellcastingBonus : [{
					selection : ["lesser restoration"],
					name : "Routine Procedure",
					firstCol : "atwill",
				}],
			},
			"stolen secrets (prereq: level 10 apothecary)" : {
				name : "Stolen Secrets",
				description : desc([
					"I learn one spell from any class’s spell list. It must be of a level for which I have apothecary spell slots or lower. The spell is treated as an apothecary spell for me, and doesn’t count against the number of apothecary spells you know."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 10+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 10; },
				spellcastingBonus : [{
					name : "Stolen Secrets",
					times : 1,
					level: [1, 9],
				}],
			},
			"subject preparation (prereq: level 10 apothecary)" : {
				name : "Subject Preparation",
				description : desc([
					"When I hit a creature with a melee weapon attack, that creature has disadvantage on the next saving throw it makes against an apothecary spell I cast before the end of my next turn."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 10+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 10; },
			},
			"surgeon’s instinct" : {
				name : "Surgeon’s Instinct",
				description : desc([
					"I have blindsight out to a range of 10 feet."
				]),
				source : ["SCGtD", 138],
				vision : ["Blindsight", "+10"]
			},
			"surgical strikes (prereq: level 6 apothecary)" : {
				name : "Surgical Strikes",
				description : desc([
					"I can attack twice, instead of once, when I take the Attack action on my turn."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 06+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
				action : ["action", "Surgical Strikes (2 attacks per action)"],
			},
			"toxicology (prereq: level 6 apothecary)" : {
				name : "Toxicology",
				description : desc([
					"I add my Intelligence modifier to the damage rolls of spells that deal poison damage."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 06+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
			},
			"triage" : {
				name : "Triage",
				description : desc([
					"I learn the Spare the Dying cantrip if I don’t know it already. When I cast this cantrip, it has a range of 60 feet."
				]),
				source : ["SCGtD", 138],
				spellcastingBonus : [{
					selection : ["spare the dying"],
					name : "Triage",
					}],
				spellChanges : {
					"spare the dying" : {
						range : "60 ft"
					}
				}
			},
			"unfailing focus (prereq: level 6 apothecary)" : {
				name : "Unfailing Focus",
				description : desc([
					"When I fail a Constitution saving throw to maintain concentration on an apothecary spell, I can choose to succeed instead. Once I use this feature, I can’t do so again until I finish a short or long rest."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 06+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
				usages : 1,
				recovery : "short rest",
			},
			"venomous instruments (prereq: level 10 apothecary)" : {
				name : "Venomous Instruments",
				description : desc([
					"When I hit a creature with a weapon attack, the creature takes extra poison damage equal to my Intelligence modifier."
				]),
				source : ["SCGtD", 138],
				submenu : "[apothecary level 10+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 10; },
			},
			"virulence" : {
				name : "Virulence",
				description : desc([
					"When I roll a 1 on a damage die for an apothecary spell that deals poison damage, I can reroll the die. I must use the new result, even if the new roll is a 1."
				]),
				source : ["SCGtD", 138]
			},
			"vital signs" : {
				name : "Vital Signs",
				description : desc([
					"When a creature I can see within 30 feet of me fails a saving throw or death saving throw, I can use my reaction to add my Intelligence modifier to the creature’s roll, potentially turning a failure into a success. I must finish a short rest before I can use this theory on the same creature again."
				]),
				source : ["SCGtD", 138],
				action : ["reaction", "Vital Signs"]
			},
			"vivisection (prereq: level 6 apothecary)" : {
				name : "Vivisection",
				description : desc([
					"My weapon attacks score a critical hit on a 19 or 20."
				]),
				source : ["SCGtD", ],
				submenu : "[apothecary level 06+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= 6; },
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isSpell && !v.CritChance && !v.isDC && classes.known.fighter && classes.known.fighter.level < 15) {
								fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
								v.CritChance = 19;
							};
						},
						"My weapon attacks score a critical on a to hit roll of both 19 and 20.",
						19
					]
				}
			},
			/*
			"" : {
				name : "",
				description : desc([
					""
				]),
				source : ["SCGtD", ],
				submenu : "[apothecary level X+]",
				prereqeval : function(v) { return classes.known.apothecary.level >= X; },
			},
			*/

			/*
			Agregar cambio de ataque/daño a:
			- Anatomical Precision
			- Caustic Formulae
			- Corrosive Compound
			- Critical Condition
			- Nerve Agent
			- Putrefaction
			- Toxicology
			- Venomous Instruments
			- Virulence
			*/

	    }, //esoteric theories
		"greater formula" : {
	    	name : "Greater Formula",
	    	source : ["SCGtD", 136],
	    	minlevel : 11,
	    	description : desc([
	    		"I add a 6th-level spell from the apothecary spell.",
				"I can cast this spell once without expending a spell slot.",
				"I must finish a long rest before you can do so again.",
				"Whenever I finish a long rest, I can replace one Greater Formula spell with another spell of the same level."
			]),
			additional : [
				"spells: 1x6th-lvl", //lvl1
				"spells: 1x6th-lvl", //lvl2
				"spells: 1x6th-lvl", //lvl3
				"spells: 1x6th-lvl", //lvl4
				"spells: 1x6th-lvl", //lvl5
				"spells: 1x6th-lvl", //lvl6
				"spells: 1x6th-lvl", //lvl8
				"spells: 1x6th-lvl", //lvl9
				"spells: 1x6th-lvl", //lvl10
				"spells: 1x6th-lvl", //lvl11
				"spells: 1x6th-lvl", //lvl12
				"spells: 1x6th-lvl, 1x7th-lvl", //lvl13
				"spells: 1x6th-lvl, 1x7th-lvl", //lvl14
				"spells: 1x6th-lvl, 1x7th-lvl, 1x8th-lvl", //lvl15
				"spells: 1x6th-lvl, 1x7th-lvl, 1x8th-lvl", //lvl16
				"spells: 1x6th-lvl, 1x7th-lvl, 1x8th-lvl, 1x9th-lvl", //lvl17
				"spells: 1x6th-lvl, 1x7th-lvl, 1x8th-lvl, 1x9th-lvl", //lvl18
				"spells: 2x6th-lvl, 1x7th-lvl, 1x8th-lvl, 1x9th-lvl", //lvl19
				"spells: 2x6th-lvl, 2x7th-lvl, 1x8th-lvl, 1x9th-lvl", //lvl20
			],
			spellcastingBonus : [{
		        name : "Greater Formula (6th-level)",
		        times : 1,
		        level : [6, 6],
		        firstCol : "oncelr",
		    }, {
		        name : "Greater Formula (7th-level)",
		        times : levels.map(function(n) { return n < 13 ? 0 : 1; }),
		        level : [7, 7],
		        firstCol : "oncelr",
		    }, {
		        name : "Greater Formula (8th-level)",
		        times : levels.map(function(n) { return n < 15 ? 0 : 1; }),
		        level : [8, 8],
		        firstCol : "oncelr",
		    }, {
		        name : "Greater Formula (9th-level)",
		        times : levels.map(function(n) { return n < 17 ? 0 : 1; }),
		        level : [9, 9],
		        firstCol : "oncelr",
		    }, {
		        name : "Greater Formula (2nd 6th-level)",
		        times : levels.map(function(n) { return n < 19 ? 0 : 1; }),
		        level : [6, 6],
		        firstCol : "oncelr",
		    }, {
		        name : "Greater Formula (2nd 7th-level)",
		        times : levels.map(function(n) { return n < 20 ? 0 : 1; }),
		        level : [7, 7],
		        firstCol : "oncelr",
		    }],
		},
		"miraculous recovery" : {
			name : "Miraculous Recovery",
			source : ["SCGtD", 136],
			minlevel : 20,
			description : desc([
				"Spending 5 minutes, I can make a number of creatures regain its hit points, spell slots, hit dice, and other abilities as if they completed a long rest.",
				"A creature can only benefit from one Miraculous Recovery in a 24-hour period.",
			]),
			usages: 1,
			recovery : "long rest",
			additional : ["Up to Int mod creatures"]
		},
	}, //features
}; //apothecary class

AddSubClass("apothecary", "alienist", {
	regExpSearch : /^(?=.*alienist).*$/i,
	subname : "Alienist",
	source : ["SCGtD", 140],
	fullname : "Alienist",
	spellcastingExtra : ["charm person", "tasha's hideous laughter", "detect thoughts", "suggestion", "hypnotic pattern", "major image", "arcane eye", "dimension door", "animate objects", "modify memory"],
	features : {
		"subclassfeature1" : {
			name : "Advanced Psychology",
			source : ["SCGtD", 140],
			minlevel : 1,
			description : desc([
				"I learn the eldritch blast cantrip.",
				"I gain proficiency in the Arcana skill, or another skill of I'm already proficient."
			]),
			spellcastingBonus : [{
		        name : "Advanced Psychology",
		        times : 1,
				selection : ["eldritch blast"],
			}],
			skills : ["Arcana"]
		},
		"subclassfeature2" : {
			name : "Alienist Spells",
			source : ["SCGtD", 140],
			minlevel : 1,
			description : desc([
				"I gain additional spells that I always have prepared. These spells count as apothecary spells, but they don't count against the number of apothecary spells I prepare."
			]),
		},
		"subclassfeature3" : {
			name : "Mental Influence",
			source : ["SCGtD", 140],
			minlevel : 3,
			description : desc([
				"I have pull psychic points, which I can expend to use the various psionic powers. Check notes page."
			]),
			usages : [4, 4, 4, 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10],
			recovery : "short rest",
			limfeaname : "Psychic Points",
			toNotesPage : [{
				name : "Mental Influence",
				note: [
					" \u2022 Cerebral Breakthrough. When I cast an apothecary spell that deals damage, I can expend a Psychic Point to re-roll any number of the dice. I must use the new rolls.",
					" \u2022 Mind Over Matter. Whenever I take damage, I can use my reaction and expend a Psychic Point, reducing the damage taken by an amount equal to your apothecary level.", 
					" \u2022 Mind Whisperer. When I cast an apothecary spell which does not deal damage, I may spend a psychic point to cast it without any somatic or verbal components."
				],
			}],
			action : ["reaction" , "Mental Influence (Mind Over Matter)"]
		}, //Mental Influence feature
		"subclassfeature4" : {
			name : "Metaphysical Tether",
			source : ["SCGtD", 140],
			minlevel : 3,
			description : desc([
				"As an action, I can touch a willing creature to create a psychic link up to 100 feet",
				"The link lasts my Apothecary level x hours or until I end the link.",
				"The maximum number of links I can have at any time is equal to my proficiency bonus."
			]),
			action : ["action", "Psychic Link (start)"]
		},
		"subclassfeature5" : {
			name : "Force Manipulation",
			source : ["SCGtD", 141],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can expend a psychic point to give myself a flying speed equal to my walking speed for 1 minute, during which I can hover."
			]),
		},
		"subclassfeature6" : {
			name : "Mental Magic",
			source : ["SCGtD", 141],
			minlevel : 10,
			description : desc([
				"I gain three new ways to use my Psychic Points. Check notes page."
			]),
			toNotesPage : [{
				name : "Mental Magic",
				amendTo : "Mental Influence",
				note: [
					" \u2022 Prescribed Effects. Once per turn when a target I can see within 30 feet of me succeeds on an Intelligence, Wisdom, or Charisma saving throw against a spell I cast, I can expend a Psychic Point to fill its mind with scrambled psionic energy, forcing it to reroll the d20 and use the lower roll for its saving throw, possibly turning a success into a failure.",
					" \u2022 Mentally Prepared. Once per turn, when a target I can see within 30 feet of me, including myself, fails an Intelligence, Wisdom, or Charisma saving throw, I can use a Psychic Point and add my Intelligence modifier to the creature’s saving throw, potentially turning the failure into a success.", 
					" \u2022 Fight or Flight Response. As a bonus action, I can expend a Psychic Point and teleport up to 30 feet to an unoccupied space I can see. I immediately gain temporary hit points equal to twice my intelligence modifier."
				],
			}],
		},
		"subclassfeature7" : {
			name : "Self-Diagnosis",
			source : ["SCGtD", 141],
			minlevel : 14,
			description : desc([
				"If I have no Psychic Points remaining, I can use an bonus action and expend a spell slot to regain 1d4 Psychic Points.",
				"You also gain two additional psychic features."
			]),
			action : ["bonus action", "Self-Diagnosis (1d4)"],
			toNotesPage : [{
				name : "Self-Diagnosis",
				amendTo : "Mental Influence",
				note: [
					" \u2022 Careful Examination. Whenever I cast a spell which restores hit points to a creature, I may expend a Psychic Point. If I do, all creatures targeted by the spell regain an additional amount of hit points equal to twice my Intelligence modifier.",
					" \u2022 Enhanced Cerebellum. When I cast any spell of 1st level or higher from your Alienist Spells feature, I can cast it by expending a spell slot as normal or by spending a number of psychic points equal to the spell’s level."
				],
			}],
		},
		"subclassfeature8" : {
			name : "Impenetrable Mind",
			source : ["SCGtD", 141],
			minlevel : 18,
			description : desc([
				"I'm resistant to psychic damage and immune to being charmed or frightened.", 
				"Magic cannot put me to sleep and I have advantage on saving throws against spells that attempt to read my thoughts or control my mind or actions.",
				"When I use the Self-Diagnosis feature to regain Psychic Points using a spell slot, I regain Psychic Points equal to the spell’s level."
			]),
			dmgres : ["Psychic"],
			savetxt : {
				immune : ["charmed", "frightened", "magic cannot put me to sleep"],
				adv_vs : ["spells that attempt to read my thoughts or control my mind or actions"]
			},
		},
	}, //alienist features
}); //alienist subclass

AddSubClass("apothecary", "chemist", {
	regExpSearch : /^(?=.*chemist).*$/i,
	subname : "Chemist",
	source : ["SCGtD", 141],
	fullname : "Chemist",
	spellcastingExtra : ["burning hands", "grease", "acid arrow", "flaming sphere", "fireball", "stinking cloud", "ice storm", "wall of fire", "cloudkill", "cone of cold"],
	features : {
		"subclassfeature1" : {
			name : "Chemical Compound",
			source : ["SCGtD", 141],
			minlevel : 1,
			description : desc([
				"I gain proficiency in alchemist’s supplies if I do not already have it.",
				"I learn the firebolt cantrip and one additional evocation cantrip of my choice from the wizard spell list.",
			]),
			spellcastingBonus : [{
		        name : "Chemical Compound",
		        times : 1,
				selection : ["fire bolt"],
			}, {
		        name : "Chemical Compound",
		        times : 1,
				class : "wizard",
				level : [0, 0],
			}],
			toolProfs : ["Alchemist’s supplies"]
		},
		"subclassfeature2" : {
			name : "Chemist Spells",
			source : ["SCGtD", 141],
			minlevel : 1,
			description : desc([
				"I gain additional spells that I always have prepared. These spells count as apothecary spells, but they don't count against the number of apothecary spells I prepare."
			]),
		},
		"subclassfeature3" : {
			name : "Precise Application",
			source : ["SCGtD", 142],
			minlevel : 3,
			description : desc([
				"If I cast a spell that deals acid, cold, fire, lightning, or poison damage to cratures I see, I can choose up to my Intelligence modifier to automatically succeed on their saving throws against the spell and take no damage."
			]),
		},
		"subclassfeature4" : {
			name : "Chain Reaction",
			source : ["SCGtD", 142],
			minlevel : 6,
			description : desc([
				"My apothecary cantrips that targets only one creature and deals acid, cold, fire, lightning, or poison damage, can target two instead."
			]),
		},
		"subclassfeature5" : {
			name : "Chemical Conditioning",
			source : ["SCGtD", 142],
			minlevel : 6,
			description : desc([
				"As an action, I give one creature I touch resistance to acid, cold, fire, lightning, or poison damage for 1 hour or until I use this feature again."
			]),
			action : ["action", "Chemical Conditioning"]
		},
		"subclassfeature6" : {
			name : "Bottled Spells",
			source : ["SCGtD", 142],
			minlevel : 10,
			description : desc([
				"I can store a spell from my Chemist Spells feature in a small vial or bottle I touch when I cast the spell. Check 3rd page for details",
			]),
			toNotesPage : [{
				name : "Bottled Spells",
				note: [
				" \u2022 The spell has no effect other than to be stored in the bottle.",
				" \u2022 The spell remains stored inside until a creature opens the bottle.",
				" \u2022 Once I use this feature, any unused bottled spell I previously created becomes inert, and I can’t bottle another spell until you finish a short rest.",
				" \u2022 Any creature holding the bottle may spend an action to open it and cast the spell inside.",
				" \u2022 The spell uses my spell attack bonus and save DC, but treats the creature who released it as the caster in all other respects."
				],
				page3notes : true,
			}],
		}, //Bottled Spells feature
		"subclassfeature7" : {
			name : "Elemental Adjustment",
			source : ["SCGtD", 142],
			minlevel : 14,
			description : desc([
				"When I cast a spell using an apothecary spell slot which deals acid, cold, fire, lightning, or poison damage, I can change it to one of the previous ones."
			]),
		},
		"subclassfeature8" : {
			name : "Chemical Cataclysm",
			source : ["SCGtD", 142],
			minlevel : 18,
			description : desc([
				"When I cast a spell that deals acid, cold, fire, lighting, or poison damage using an apothecary spell slot, it is treated as if it was cast using a 7th-level spell slot."
			]),
		},
	}, //chemist features
}); //chemist subclass

AddSubClass("apothecary", "exorcist", {
	regExpSearch : /^(?=.*exorcist).*$/i,
	subname : "Exorcist",
	source : ["SCGtD", 142],
	fullname : "Exorcist",
	spellcastingExtra : ["bless", "protection from evil and good", "spiritual weapon", "zone of truth", "counterspell", "spirit guardians", "banishment", "last rites", "dispel evil and good", "flame strike"],
	features : {
		"subclassfeature1" : {
			name : "Spiritual Study",
			source : ["SCGtD", 142],
			minlevel : 1,
			description : desc([
				"I gain proficiency in heavy armor and the Religion Skill. If I already have this proficiency, I gain another.",
				"I can use a holy symbol as an arcane focus and I gain a cantrip of your choice from the cleric spell list."
			]),
			skills : ["Religion"],
			armorProfs : [true, true, true, false],
			spellcastingBonus : [{
		        name : "Spiritual Study",
		        times : 1,
				class : "cleric",
				level : [0, 0],
			}],
		},
		"subclassfeature2" : {
			name : "Exorcist Spells",
			source : ["SCGtD", 142],
			minlevel : 1,
			description : desc([
				"I gain additional spells that I always have prepared. These spells count as apothecary spells, but they don't count against the number of apothecary spells I prepare."
			]),
		},
		"subclassfeature3" : {
			name : "Exorcism",
			source : ["SCGtD", 142],
			minlevel : 3,
			description : desc([
				"Using my sacred symbol, I can create an effect.",
				"The DC of my Exorcisms is the same as my Apothecary spell save DC"
			]),
			usages : 0,
			recovery : "short rest",
			usagescalc : "event.value = What('Proficiency Bonus') / 2;",
			toNotesPage : [{
				name : "Exorcism effect",
				note : [
					" \u2022 Expel Evil. As an action, I present my holy symbol and speak a prayer censuring creatures that mean me harm. Each undead, celestial, fey, or fiend that can see or hear me within 30 feet of me must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. A turned creature must spend its turns trying to move as far away from me as it can, and it can’t willingly move to a space within 30 feet of me. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.",
				" \u2022 Purge Corruption. I touch a creature or item and can end either one condition afflicting it. The condition can be blinded, charmed, deafened, frightened, paralyzed, or poisoned. Additionally, if a creature is possessed or mind controlled by a spirit or foreign entity, I can use this feature to remove any traits or other features related to the possession. If possessed, the creature possessing it is shunted out of its host to an unoccupied space within 5 feet and takes psychic damage equal to 2d8 + my apothecary level.",	
				]
			}],
		},
		"subclassfeature4" : {
			name : "Sacred Vessel",
			source : ["SCGtD", 143],
			minlevel : 6,
			description : desc([
				"I'm immune to the frightened condition, and cannot be possessed or cursed. I also have advantage on saving throws against being charmed."
			]),
			savetxt : {
				text : ["Adv. against charmed"],
				immune : ["immune", "frightened", "possessed", "cursed"]
			},
		},
		"subclassfeature5" : {
			name : "Negation",
			source : ["SCGtD", 143],
			minlevel : 10,
			description : desc([
				"As a reaction when a hostile creature I  see targets an ally, I can expend an spell slot to force it to make a Charisma saving throw. On a failure, the action fails and resources wasted."
			]),
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : ["SCGtD", 143],
			minlevel : 14,
			description : desc([
				"Whenever I cast a spell that heals a creature, that spell deals maximum healing and the creature immediately gains temporary hit points equal to my apothecary level."
			]),
		},
		"subclassfeature7" : {
			name : "Devout Witness",
			source : ["SCGtD", 143],
			minlevel : 18,
			description : desc([
				"Creatures who fail against Expel Evil take an additional 4d8 damage.",
				"Creatures who are aided by Purge Corruption gain 4d8 temporary hit points."
			]),
		},
	}, //exorcist features
}); //exorcist subclass

AddSubClass("apothecary", "mutagenist", {
	regExpSearch : /^(?=.*mutagenist).*$/i,
	subname : "Mutagenist",
	source : ["SCGtD", 143],
	fullname : "Mutagenist",
	spellcastingExtra : ["jump", "toxic shield", "alter self", "enhance ability", "haste", "water breathing", "polymorph", "stoneskin", "reincarnate", "septic shock"],
	features : {
		"subclassfeature1" : {
			name : "Natural Philosophy",
			source : ["SCGtD", 143],
			minlevel : 1,
			description : desc([
				"I gain proficiency with alchemist’s supplies; and herbalism kit / poisoner’s kit.",
				"I gain proficiency in two additional languages and Nature Skill.",
				"If already have this proficiency, I gain proficiency with another."
			]),
			skills : ["Nature"],
			toolProf : : [["alchemist’s supplies", 1], ["herbalism kit or poisoner’s kit", 1]],	
		},
		"subclassfeature2" : {
			name : "Mutagenist Spells",
			source : ["SCGtD", 143],
			minlevel : 1,
			description : desc([
				"I gain additional spells that I always have prepared. These spells count as apothecary spells, but they don't count against the number of apothecary spells I prepare."
			]),
		},
		"subclassfeature3" : {
			name : "Transmogrifying Elixir",
			source : ["SCGtD", 144],
			minlevel : 3,
			description : desc([
				""
			]),
		},
	}, //mutagenist features
}); //mutagenist subclass

AddSubClass("apothecary", "pathogenist", {
	regExpSearch : /^(?=.*pathogenist).*$/i,
	subname : "Pathogenist",
	source : ["SCGtD", 145],
	fullname : "Pathogenist",
	spellcastingExtra : [],
	features : {
		"subclassfeature2" : {
			name : "Pathogenist Spells",
			source : ["SCGtD", 145],
			minlevel : 1,
			description : desc([
				"I gain additional spells that I always have prepared. These spells count as apothecary spells, but they don't count against the number of apothecary spells I prepare."
			]),
		},
	}, //pathogenist features
}); //pathogenist subclass

AddSubClass("apothecary", "reanimator", {
	regExpSearch : /^(?=.*reanimator).*$/i,
	subname : "Reanimator",
	source : ["SCGtD", 146],
	fullname : "Reanimator",
	spellcastingExtra : [],
	features : {
		"subclassfeature2" : {
			name : "Reanimator Spells",
			source : ["SCGtD", 146],
			minlevel : 1,
			description : desc([
				"I gain additional spells that I always have prepared. These spells count as apothecary spells, but they don't count against the number of apothecary spells I prepare."
			]),
		},
	}, //reanimator features
}); //reanimator subclass

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
