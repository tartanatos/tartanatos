ClassList["tamer"] = {
	regExpSearch : /^(?=.*tamer).*$/i,
	name : "Tamer",
	source : [["HGtMH", 194]],
	primaryAbility : "Wisdom, Intelligence, or Charisma and Constitution",
	prereqs : "Intelligence, Wisdom, or Charisma 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  	die : 8,
	saves : ["Con", "Cha"],
	skillstxt : {
		primary : "Choose two from Animal Handling, Insight, Medicine, Nature, Perception, and Persuasion",
		secondary : "Choose one from Animal Handling, Insight, Medicine, Nature, Perception, and Persuasion"
	},
  	armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, false, false, true]
	},
  	weaponProfs : {
		primary : [true, false, ["net"]],
		secondary : [true, false, ["net"]]
	},
	equipment : "Ranger starting equipment:" +
		"\n \u2022 Scale mail -or- leather armor;" +
    	"\n \u2022 A simple melee weapon, a net, and a shield;" +
		"\n \u2022 A light crossbow and 20 bolts;" +
		"\n \u2022 A dungeoneer’s pack -or- an explorer’s pack." +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Training Paradigm", []],
	abilitySave : [4, 5, 6],
	spellcastingAbility : [4, 5, 6],
	spellcastingFactor : 2,
	spellcastingKnown : {
		cantrips : [0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
		spells : [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
		prepared : false,
	},
	spellcastingList : {
		class : "druid",
		level : [1, 5],
	},
	features : {
		"01.pocket familiar" : {
			name : "Pocket Familiar",
			source : [["HGtMH", 194]],
			minlevel : 1,
			description : desc([
				"I can only have one companion summoned at a time. It takes a turn on my initiative.",
				"As I hold its vessel, I can summon and dismiss it in an space that I can see within 30 feet.",
			]),
			toNotesPage : [{
				name : "Lost Traits.",
				source : [["HGtMH", 199]],
				note : [
					"When a creature becomes my companion, stops being able to use following traits:",
					" \u2022 The Multiattack action, recovering it when I reach level 5.",
					" \u2022 The ability to cast any spells (though it retains its spells known, see Psychic Bond, page 201).",
					" \u2022 Any summoning actions or actions that create additional creatures",
					" \u2022 The Regeneration, Rejuvenation, and Legendary Resistance traits.",
					" \u2022 Any legendary actions and legendary action options.",
					" \u2022 Any lair actions and regional effects.", 
					" \u2022 Any mythic traits and mythic action options." 
				],
			}], //toNotesPage
			additional : ["at most 1 Small or smaller creature, CR: 1/2 or less", //1th
						  "at most 1 Small or smaller creature, CR: 1/2", //2nd
						  "at most 2 Small or smaller creature, CR: 1/2", //3rd
						  "at most 2 Small or smaller creature, CR: 1", //4th
						  "at most 2 Medium or smaller creature, CR: 1", //5th
						  "at most 2 Medium or smaller creature, CR: 1", //6th
						  "at most 3 Medium or smaller creature, CR: 2", //7th
						  "at most 3 Medium or smaller creature, CR: 2", //8th
						  "at most 3 Medium or smaller creature, CR: 2", //9th
						  "at most 3 Medium or smaller creature, CR: 3", //10th
						  "at most 4 Large or smaller creature, CR: 3", //11th
						  "at most 4 Large or smaller creature, CR: 3", //12th
						  "at most 4 Large or smaller creature, CR: 4", //13th
						  "at most 4 Large or smaller creature, CR: 4", //14th
						  "at most 5 Large or smaller creature, CR: 4", //15th
						  "at most 5 Large or smaller creature, CR: 5", //16th
						  "at most 5 Huge or smaller creature, CR: 5", //17th
						  "at most 5 Huge or smaller creature, CR: 5", //18th
						  "at most 6 Huge or smaller creature, CR: 6", //19th
						  "at most 6 Huge or smaller creature, CR: 6" //20th
						 ],
			action : [
				["action", "Command companion"],
				["action", "Summon/dismiss companion"],
				["bonus action", "Dismiss companion"],
					  ],
			creaturesAdd : [["Ranger's Companion", false, false, "companion"]], //companion placeholder
		}, //pocket familiar
		"02.soul bond" : {
			name : "Soul Bond",
			source : [["HGtMH", 197]],
			minlevel : 1,
			description : desc([
				"Whenever I finish a short rest, I can restore a total number of hit points amongst my companions"
			]),
			limfeaname: "Healing Power",
			usages: levels.map(function(n) { return n * 5 }),
            recovery: "long rest",
		}, //soul bond
		"03.monster trainer" : {
			name : "Monster Trainer",
			source : [["HGtMH", 197]],
			minlevel : 1,
			description : desc([
				"My companions use my proficiency bonus instead of their own."
			]),
			toNotesPage : [{
				name : " Companion Improvement Training Table",
				source : [["HGtMH", 197]],
				note : [
						" \u2022 Speed Training.",
						"      Increase one existing speed by 15 feet up to a maximum of 150% of the creature’s base speed, rounded up to the nearest 5-foot increment.",
						" \u2022 Toughen Up.",
						"      My companion gains an additional Hit Die, increasing its hit point maximum. My companion’s hit point maximum increase by rolling this Hit Die and adding (minimum of 0). My companion’s Constitution modifier",
						" \u2022 Ability Boost",
						"      Increase one of my companion's ability scores by 1, to a maximum of 20 (once per companion until 5th level, twice until 9th level and thrice as maximum).",
						" \u2022 Go For the Throat.",
						"      My companion gains a +1 bonus to its attack and damage rolls made with its natural weapons or unarmed strikes.",
						" \u2022 Survival Instincts.", 
						"      My companion gains proficiency in one saving throw.",
						" \u2022 War Training.", 
						"      My companion gains proficiency with one armour type or two weapons (proficiency in the previous armor tier is required to acquire the following one)."
					],
			}], //toNotesPage
			toNotesPage : [{ //placeholder
				name : " Compaion's feats",
				source : [["HGtMH", 197]],
				note : [
				" \u2022 When I reach 4th, 8th, 12th, 16th, and 19th level, my companions gains 1 aditional Hit Dice.",
				" \u2022 Whenever I gain a Tamer level beyond 1st, each bonded companion gains one improvement.",
				" \u2022 All of this feature are applied retroactively to future companions.",
				" \u2022 If i'm not incapacitated, it takes the Dodge action unless I command it otherwise.",
			   	" \u2022 I can command it take any action it posses on its turn. Check the Notes page for exceptions.",
				]
			}],
		}, //monster trainer
		"04.tame creature" : {
			name : "Tame Creature",
			source : [["HGtMH", 198]],
			minlevel : 1,
			description : desc([
				"I can tame additional creatures to make them my companions."
				]),
			toNotesPage : [{
				name : " Tame Creature",
				source : [["HGtMH", 198]],
				note : [
					" \u2022 The creature cant be a humanoid, giant, or swarm",
					" \u2022 The maximum number, size, and CR of the creatures I can tame will increase as I level up.",
					" \u2022 Before taming a creature, I must invest 8 hours of work and 100 gp by the creature's CR creating a vessel.",
					" \u2022 If the creature meets the conditions, I can throw the vessel up to 30 feet and force it to make a Charisma saving throw against my tamer spell save DC or be trapped.",
					" \u2022 If the creature has either fewer than ten hit points or one-quarter of its hit points, it automatically fails the saving throw.",
					" \u2022 I cannot tame a creature with a higher CR than the one for which a vessel was created.",
				],
				page3notes : true,
			}],
		}, //tame creature
		"05.spellcasting" : {
			name : "Spellcasting",
			source : [["HGtMH", 199]],
			minlevel : 2,
			description : desc([
				"I can cast tamer cantrips/spells, using Intelligence, Wisdom, or Charisma as my spellcasting ability. I can use a companion's vessel as a spellcasting focus for my tamer spells.",
				]),
			additional : ["0 cantrips known", 
						  "2 cantrips known", 
						  "2 cantrips known", 
						  "2 cantrips known", 
						  "2 cantrips known", 
						  "2 cantrips known", 
						  "2 cantrips known", 
						  "2 cantrips known", 
						  "2 cantrips known", 
						  "3 cantrips known", 
						  "3 cantrips known", 
						  "3 cantrips known",
						  "3 cantrips known", 
						  "4 cantrips known", 
						  "4 cantrips known", 
						  "4 cantrips known", 
						  "4 cantrips known", 
						  "4 cantrips known", 
						  "4 cantrips known", 
						  "4 cantrips known"],
		}, //spellcasting
		"06.bolster" : {
			name : "Bolster",
			source : [["HGtMH", 199]],
			minlevel : 2,
			description : desc([
				"At a distance of 100 feet or inside its vessel, I can an use an action to expend one spell slot to restore hit points to my companion."
			]),
			additional : [
				"Spellcasting Ability Modifier + 2d4 per SS level"
				],
		}, //bolster
		"07.psychic bond" : {
			name : "Psychic Bond",
			source : [["HGtMH", 201]],
			minlevel : 2,
			description : desc([
				"I can telepathically communicate with my companion while it is within 100 feet.",
				"As an action, I can use it's eyes and hears until the start my next turn.",
			]),
			action : ["action", "Psychic Bond"],
			toNotesPage : [{
				name : "Psychic Bond",
				source : [["HGtMH", 201]],
				note : [
					" \u2022 While is summoned, any spells my companion knows are added to my known spells.",
				],
				amendTo : "Compaion's feats",
			}],
		}, //psychic bond
		"subclassfeature3" : { 
			name : "Training Paradigm",
			source : [["HGtMH", 201]],
			minlevel : 3,
			description : desc([
				"Choose a Training Paradigm in the \"Class\" field."
				])
		},
		"09.malleable presence" : {
			name : "Malleable Presence",
			source : [["HGtMH", 201]],
			minlevel : 5,
			description : desc([
				"With my companion 100 feet away or less, I can command it to adopt a behavior.",
				]),
            usages : 1,
			recovery: "short rest",
			toNotesPage : [{
				limfeaname : "Adopt behavior",
				name : "Malleable Presence behaviours",
				note : [
					"I need to be able to see the objective creature must succeed on a Wisdom saving throw against my spell save DC or suffer the effects of the chosen behavior.",
					" \u2022 Aggressive. The creature has disadvantage on attack rolls it makes against creatures other than my companion.",
					" \u2022 Cautious. The creature has disadvantage on attack rolls against my companion if there is another creature hostile towards the attacker within 5 feet of the attacker.",
				],
				page3notes : true,
			}],
        },//malleable presence
		"10.alpha strike" : {
			name : "Alpha Strike",
			source : [["HGtMH", 201]],
			minlevel : 6,
			description : desc([
				"I can give a command to my partner at the same time as I summon it."
			]),
			usages : "Spellcastin Ability modifier per ",
			recovery: "long rest",
		},
		"11.wilful blows" : {
			name : "Wilful Blows",
			source : [["HGtMH", 202]],
			minlevel : 6,
			description : desc([
					"My companions’ attacks count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
			]),
		},
		"12.switcheroo" : {
			name : "Switcheroo",
			source : [["HGtMH", 202]],
			minlevel : 13,
			description : desc([
				"Within my companion 100 feet, I can magically switch places with it as a bonus action or when one of us is the target of an attack by an attacker I can see.",
			]),
			action : [
				["action", "Switcheroo"],
				["reaction", "Switcheroo"]
			],
			usages : "Spellcastin Ability modifier per ",
			recovery: "short rest",
		}, //switcheroo
		"13.magnificent presence" : {
			name : "Magnificent Presence",
			source : [["HGtMH", 202]],
			minlevel : 17,
			description : desc([
				"I can command my companion to adopt new behaviors."
					]),
				toNotesPage : [{
					name : "Magnificent Presence behaviours",
					note : [
						" \u2022 Provoking Poise. For the next minute, my companion draws the attention of nearby creatures. While within 15 feet of my companion, any creature that is hostile towards my companion and that can see it has disadvantage on attack rolls it makes against creatures other than my companion.",
						" \u2022 Shrinking Violet. For the next minute, my companion appears small and unassuming, making little noise. Any creature that is hostile towards my companion has disadvantage on attack rolls against my companion if there is another creature hostile towards the attacker within 15 feet of the attacker.",
						],
					page3notes : true,
				}],
		}, //magnificent presence
		"14.summon the horde" : {
			name : "Summon the Horde",
			source : [["HGtMH", 202]],
			minlevel : 20,
			description : desc([
				"I can summon additional companions to a total of 3 which remain summoned for 1 minute. I can command all my companions at once. When the minute ends, all aditional companion return to their vessels and a I can’t move or take actions until the end of my next turn."
			]),
			usages : 1,
			recovery: "long rest",
			action : ["action", "Summon the Horde"],
		},
	}, //features
}; //tamer
AddSubClass("tamer", "leaderpar", {
	regExpSearch : /leaderpar/i,
	subname : "Leader Paradigm",
	source : [["HGtMH", 202]],
	spellcastingExtra : ["divine favor", "protection from evil and good", "inequality", "warding bond", "beacon of hope", "haste", "death ward", "freedom of movement", "dispel evil and good", "endure"],
	features : {
		"leader spells3" : {
			minlevel : 3,
			spellcastingBonus : [{
				name : "Leader Spells (level 3)",
				spells : ["divine favor", "protection from evil and good"],
				selection : ["divine favor", "protection from evil and good"],
				times : 2,
			}]
		},
		"leader spells5" : {
			minlevel : 5,
			spellcastingBonus : [{
				name : "Leader Spells (level 5)",
				spells : ["inequality", "warding bond"],
				selection : ["inequality", "warding bond"],
				times : 2,
			}]
		},
		"leader spells9" : {
			minlevel : 9,
			spellcastingBonus : [{
				name : "Leader Spells (level 9)",
				spells : ["beacon of hope", "haste"],
				selection : ["beacon of hope", "haste"],
				times : 2,
			}]
		},
		"leader spells13" : {
			minlevel : 13,
			spellcastingBonus : [{
				name : "Leader Spells (level 13)",
				spells : ["death ward", "freedom of movement"],
				selection : ["death ward", "freedom of movement"],
				times : 2,
			}]
		},
		"leader spells17" : {
			minlevel : 17,
			spellcastingBonus : [{
				name : "Leader Spells (level 17)",
				spells : ["dispel evil and good", "endure"],
				selection : ["dispel evil and good", "endure"],
				times : 2,
			}]
		},
		"subclassfeature3" : { 
			name : "Inpsire",
			source : [["HGtMH", 202]],
			minlevel : 3,
			description : desc([
				"As an action, I can inspire my companion, adding a bonus to its saving throw or attack roll."
			]),
			usages : "Spellcastin Ability modifier per ",
			recovery: "long rest",
			additional : ["", "", "1d6", "1d6", "1d6", "1d8", "1d8", "1d8", "1d8", "1d10", "1d10", "1d10", "1d10", "1d12", "1d12", "1d12", "1d12", "1d12", "1d12", "1d12"],
			action : [
				["action", "Inpsire"],
			],
		}, //subclassfeature3
		"subclassfeature3.1" : { 
			name : "Action Burst",
			source : [["HGtMH", 203]],
			minlevel : 7,
			description : desc([
				"When command, my companion can perform one more action on its turn. At 18th level, it can do so twice between rests, but once per turn."
			]),
			usages : ["", "", "", "", "", "", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2"],
			recovery: "short rest",
		}, //subclassfeature3.1
		"subclassfeature3.2" : { 
			name : "Leader’s Fortitude",
			source : [["HGtMH", 203]],
			minlevel : 10,
			description : desc([
				"Using both my and my companion's reaction, I can halve damage it receives."
			]),
			action : [
				["reaction", "Leader’s Fortitude"],
			],
		},//subclassfeature3.2
		"subclassfeature3.3" : { 
			name : "Combo",
			source : [["HGtMH", 203]],
			minlevel : 14,
			description : desc([
				"I can summon a second companion which remain for 1 minute. I can command all my companions at once. When the minute ends, the second companion return to its vessels."
			]),
			usages : 1,
			recovery: "long rest",
		},
	}, //features
}); //leader subclass
AddSubClass("tamer", "infuserpar", {
	regExpSearch : /infuserpar/i,
	subname : "Infuser Paradigm",
	source : [["HGtMH", 204]],
	spellcastingExtra : ["hellish rebuke", "peppermint plate", "eelskin", "riptide", "protection from energy", "wind wall", "control water", "fire shield", "feverskin", "wall of stone"],
	features : {
		"infuser spells3" : {
			minlevel : 3,
			spellcastingBonus : [{
				name : "Infuser Spells (level 3)",
				spells : ["hellish rebuke", "peppermint plate"],
				selection : ["hellish rebuke", "peppermint plate"],
				times : 2,
			}]
		},
		"infuser spells5" : {
			minlevel : 5,
			spellcastingBonus : [{
				name : "Infuser Spells (level 5)",
				spells : ["eelskin", "riptide"],
				selection : ["eelskin", "riptide"],
				times : 2,
			}]
		},
		"infuser spells9" : {
			minlevel : 9,
			spellcastingBonus : [{
				name : "Infuser Spells (level 9)",
				spells : ["protection from energy", "wind wall"],
				selection : ["protection from energy", "wind wall"],
				times : 2,
			}]
		},
		"infuser spells13" : {
			minlevel : 13,
			spellcastingBonus : [{
				name : "Infuser Spells (level 13)",
				spells : ["control water", "fire shield"],
				selection : ["control water", "fire shield"],
				times : 2,
			}]
		},
		"infuser spells17" : {
			minlevel : 17,
			spellcastingBonus : [{
				name : "Infuser Spells (level 17)",
				spells : ["feverskin", "wall of stone"],
				selection : ["feverskin", "wall of stone"],
				times : 2,
			}]
		},
		"subclassfeature3" : { 
			name : "Infuse",
			source : [["HGtMH", 204]],
			minlevel : 3,
			description : desc([
				"By finishing a long rest, I can infuse my companion with an element. The first time it hits a target with an attack on its turn, it deals additional damage."
			]),
			additional : ["", "", "1d4", "1d4", "1d4", "1d6", "1d6", "1d6", "1d6", "1d8", "1d8", "1d8", "1d8", "1d10", "1d10", "1d10", "1d10", "1d10", "1d10", "1d10"],
			extraname: "Infuse",
			extrachoices : ["Acid", "Cold", "Fire", "Lightning"],
			"acid" : {
				name : "Acid",
				description : "",
			},	//acid
			"cold" : {
				name : "Cold",
				description : "",
			}, //cold
			"fire" : {
				name : "Fire",
				description : "",
			}, //fire
			"lightning" : {
				name : "Lightning",
				description : "",
			}, //lightning
		}, //subclassfeature3
		"subclassfeature3.1" : { 
			name : "Elemental Discharge",
			source : [["HGtMH", 204]],
			minlevel : 7,
			description : desc([
				"By infusing my companion after finishing a long rest, it gains an element-related action option to use once. At 18th level, it can do so twice between rests, but once per turn.",
			]),
			usages : ["", "", "", "", "", "", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2"],
			recovery: "short rest",
			toNotesPage : [{
				name : "Elemental Discharge",
				note : [
					"The DC for the saving throw equals my tamer spell save DC.",
					" \u2022 Acid: Caustic Mist. Your companion disperses an acidic vapour into a 20-foot cube originating from it that lasts for 1 minute, or until dispersed by a wind of moderate or greater speed (at least 10 miles per hour). Each other creature that starts its turn in the area must make a Constitution saving throw, taking 4d4 acid damage on a failure, or half as much damage on a success.",
					" \u2022 Cold: Snap Freeze. Your companion absorbs the heat in a 10-foot-radius sphere around it. Each other creature in the area must make a Constitution saving throw. On a failed save, a creature takes 4d8 cold damage and its speed is halved until the end of its next turn. On a successful save, it takes half as much damage and its speed isn’t affected.",
					" \u2022 Fire: Flametongue. Your companion unleashes a raging inferno in a 25-foot cone. Each creature in the area must make a Dexterity saving throw, taking 6d6 fire damage on a failure, or half as much damage on a success. The fire ignites any flammable objects in the area that aren’t being worn or carried.",
					" \u2022 Lightning: Sparkstep. Your companion discharges lightning in a 10-foot-radius sphere centred on itself. Each other creature in the area must make a Dexterity saving throw. On a failure, a creature takes 4d6 lightning damage and it can’t take reactions until the start of its next turn. On a success, it takes half as much damage and can take reactions as normal. After the saving throws are resolved, your companion can immediately fly up to 30 feet as part of this action.",
				],
			}],
		}, //subclassfeature3.1
		"subclassfeature3.2" : { 
			name : "Primordial Shield",
			source : [["HGtMH", 205]],
			minlevel : 10,
			description : desc([
				"When my companion takes the same damage as it infusion, as a reaction, I can grant it immunity until the start of my next turn."
			]),
			recovery: "short rest",
			usages : 1,
			action : [
				["reaction", "Primordial Shield"],
			],
			toNotesPage : [{
				name : "Primordial Shield",
				source : [["HGtMH", 205]],
				note : [
					" \u2022 My companion gains resistance to the infused element", 
				],
				amendTo : "Compaion's feats",
			}],
		}, //subclassfeature3.2
		"subclassfeature3.3" : { 
			name : "Unstable Fusion",
			source : [["HGtMH", 205]],
			minlevel : 14,
			description : desc([
				"I can infuse my companion with a second element and its previus features for 1 minute."
			]),
			recovery: "long rest",
			usages : 1,
			action : [
				["action", "Unstable Fusion"]
				],
		}, //subclassfeature3.3
	}, //features
}); //infuser subclass
AddSubClass("tamer", "necromanticpar", {
	regExpSearch : /necromanticpar/i,
	subname : "Necromancer Paradigm",
	source : [["HGtMH", 205]],
	spellcastingExtra : ["false life", "inflict wounds", "blindness/deafness", "ray of enfeeblement", "influenza", "vampiric touch", "confusion", "death ward", "bone cage", "endure"],
	selection : ["false life", "inflict wounds", "blindness/deafness", "ray of enfeeblement", "influenza", "vampiric touch", "confusion", "death ward", "bone cage", "endure"],
	features : {
		"necromancer spells3" : {
			minlevel : 3,
			spellcastingBonus : [{
				name : "Necromancer Spells (level 3)",
				spells : ["false life", "inflict wounds"],
				selection : ["false life", "inflict wounds"],
				times : 2,
			}]
		},
		"necromancer spells5" : {
			minlevel : 5,
			spellcastingBonus : [{
				name : "Necromancer Spells (level 5)",
				spells : ["blindness/deafness", "ray of enfeeblement"],
				selection : ["blindness/deafness", "ray of enfeeblement"],
				times : 2,
			}]
		},
		"necromancer spells9" : {
			minlevel : 9,
			spellcastingBonus : [{
				name : "Necromancer Spells (level 9)",
				spells : ["influenza", "vampiric touch"],
				selection : ["influenza", "vampiric touch"],
				times : 2,
			}]
		},
		"necromancer spells13" : {
			minlevel : 13,
			spellcastingBonus : [{
				name : "Necromancer Spells (level 13)",
				spells : ["confusion", "death ward"],
				selection : ["confusion", "death ward"],
				times : 2,
			}]
		},
		"necromancer spells17" : {
			minlevel : 17,
			spellcastingBonus : [{
				name : "Necromancer Spells (level 17)",
				spells : ["bone cage", "endure"],
				selection : ["bone cage", "endure"],
				times : 2,
			}]
		},
		"subclassfeature3" : { 
			name : "Life Hack",
			source : [["HGtMH", 205]],
			minlevel : 3,
			description : desc([
				"Once per turn, when my companion deals damage to a creature, it can takes necrotic damage, gaining equal temporary hit points and dealing equal damage as a bonus."
			]),
			additional : ["", "", "1d4", "1d4", "1d4", "1d6", "1d6", "1d6", "1d6", "1d8", "1d8", "1d8", "1d8", "1d10", "1d10", "1d10", "1d10", "1d10", "1d10", "1d10"],
		}, //subclassfeature3	
		"subclassfeature3.1" : { 
			name : "Post-Mortem",
			source : [["HGtMH", 205]],
			minlevel : 3,
			description : desc([
				"I can attempt to tame one creature within 1 minute of it dying. Check 3rd page Notes for additional rules."
			]),
			toNotesPage : [{
				name : "Post-Mortem",
				note : [
					" \u2022 When I attempt to tame a dead creature, its soul makes a Charisma saving throw against my tamer spell save DC.",
					"Humanoids and giants don’t automatically succeed on this saving throw.",
					"On a failure, the creature’s soul becomes bound to its body; its type changes to undead and it becomes one of your companions.",
					"On a success, you fail to tame the creature and you can’t attempt to tame the creature again until it has been brought back to life by other means.",
				],
				page3notes : true,
			}],
		}, //subclassfeature3.1
		"subclassfeature3.2" : { 
			name : "Animate Dead",
			source : [["HGtMH", 206]],
			minlevel : 7,
			description : desc([
				"I learn the Animate Dead spell and I can cast it once without using a spell slot, but can control 1 creature per casting."
			]),
			recovery: "long rest",
			usages : 1,
			action : [
				["action", "Animate Dead"]
				],
			spellcastingBonus : [{
				name : "Animate Dead",
				spells : ["animate dead"],
				selection : ["animate dead"],
				spellChanges : {
					description : "Turn corpses into 1+2/SL Skeletons or Zombies, or 1 Ghast or Minotaur Skeleton from 18th level; control for 24h; bns a command within 18 m",
					changes : "Starting from 18th level, when I cast this spell using Animate Dead Necromancer's feature, the creature I animate has the statistics of a ghast (if Medium or smaller corpse) or a minotaur skeleton (if Large or larger corpse). When I reassert my control over these creatures, I can maintain control of only 1 creature per casting of the spell, instead of 4."
				},
			}],
		}, //subclassfeature3.2
		"subclassfeature3.3" : { 
			name : "Patata",
			source : [["HGtMH", 999]],
			minlevel : 10,
			description : desc([
				"Patata"
			]),
		}, //subclassfeature3.3
	}, //features
}); //necromancer subclass
AddSubClass("tamer", "splicerp", {
	regExpSearch : /splicerp/i,
	subname : "Splicer Paradigm",
	source : [["HGtMH", 207]],
	spellcastingExtra : [],
	features : {
		"subclassfeature3" : { 
			name : "Patata",
			source : [["HGtMH", 999]],
			minlevel : 3,
			description : desc([
				"Patata"
			]),
		}, //subclassfeature3
	}, //features
}); //splicer subclass


//ayuda
"subclassfeature3.1.2.3.4.5.6" : { 
	name : "Patata",
	source : [["HGtMH", 999]],
	minlevel : 3,
	description : desc([
		"Patata"
	]),
},
