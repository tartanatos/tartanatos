ClassList["tamer"] = {
	regExpSearch : /^(?=.*tamer).*$/i,
	name : "Tamer",
	source : [["HGtMH", 194]],
	primaryAbility : "Wisdom, Intelligence, or Charisma; and Constitution",
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
		list : "tamer",
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
			limfeaname : "Healing Power",
			usages : levels.map(function(n) { return n * 5 }),
            recovery : "long rest",
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
	regExpSearch : /^(?=.*leader)(?=.*paradigm).*$/i,
	subname : "Leader Paradigm",
	source : [["HGtMH", 202]],
	spellcastingExtra : ["divine favor", "protection from evil and good", "inequality", "warding bond", "beacon of hope", "haste", "death ward", "freedom of movement", "dispel evil and good", "endure"],
	spellcastingExtraApplyNonconform : true,
	features : {
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
	regExpSearch : /^(?=.*infuser)(?=.*paradigm).*$/i,
	subname : "Infuser Paradigm",
	source : [["HGtMH", 204]],
	spellcastingExtra : ["hellish rebuke", "peppermint plate", "eelskin", "riptide", "protection from energy", "wind wall", "control water", "fire shield", "feverskin", "wall of stone"],
	spellcastingExtraApplyNonconform : true,
	features : {
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
			usages : [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
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
	regExpSearch : /^(?=.*necromantic)(?=.*paradigm).*$/i,
	subname : "Necromantic Paradigm",
	source : [["HGtMH", 205]],
	spellcastingExtra : ["false life", "inflict wounds", "blindness/deafness", "ray of enfeeblement", "influenza", "vampiric touch", "confusion", "death ward", "bone cage", "endure"],
	spellcastingExtraApplyNonconform : true,
	features : {
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
				"I can attempt to tame one creature within 1 minute of it dying. Check 3rd page Notes for additional rules.",
			]),
			toNotesPage : [{
				name : "Post-Mortem",
				note : [
					" \u2022 When I attempt to tame a dead creature, its soul makes a Charisma saving throw against my tamer spell save DC.",
					" \u2022 Humanoids and giants don’t automatically succeed on this saving throw.",
					" \u2022 On a failure, the creature’s soul becomes bound to its body; its type changes to undead and it becomes one of your companions.",
					" \u2022 On a success, you fail to tame the creature and you can’t attempt to tame the creature again until it has been brought back to life by other means.",
				],
				page3notes : true,
			}],
		}, //subclassfeature3.1
		"subclassfeature3.2" : { 
			name : "Animate Dead",
			source : [["HGtMH", 206]],
			minlevel : 7,
			description : desc([
				"I learn the Animate Dead spell and I can cast it once without using a spell slot, but can control 1 creature per casting.",
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
			name : "Enervate",
			source : [["HGtMH", 207]],
			minlevel : 10,
			description : desc([
				"While my companion is within 100 feet, I can deal necrotic damage to me or my companion to twice My tamer level, then restore hit points equal to the damage."
			]),
			action : [
				["action", "Enervate"],
			]
		}, //subclassfeature3.3
		"subclassfeature3.4" : { 
			name : "Aura of Undeath",
			source : [["HGtMH", 207]],
			minlevel : 14,
			description : desc([
				"I imbui my companion with a 15-foot aura of undeath for 1 minute.",
				]),
			toNotesPages : [{
				name : "Aura of Undeath",
				source : [["HGtMH", 207]],
				note : [
					"While Aura of Undeath efects, my companion can, as a bonus action, force one creature within the aura to make a Constitution saving throw against my tamer spell save DC. On a failure, the creature takes 4d8 necrotic damage and my companion gains number of temporary hit points equal to half the damage. In addition, when my companion would be reduced to 0 hit points, it is reduced to 1 hit point and gains one failed death saving throw. If my companion gains three failed death saving throws, or five if it has the undead type, it immediately dies. At the end of the minute, your companion drops to 0 hit points, falls unconscious, and is stable.",
					],
				amendTo : "Compaion's feats",
			}],
		}, //subclassfeature3.4
	}, //features
}); //necromancer subclass
AddSubClass("tamer", "splicerpar", {
	regExpSearch : /^(?=.*splicer)(?=.*paradigm).*$/i,
	subname : "Splicer Paradigm",
	source : [["HGtMH", 207]],
	spellcastingExtra : ["chameleon skin", "disguise self", "barkskin", "eelskin", "mass leech", "zippit!", "frogskin", "stoneskin", "contagion", "feverskin"],
	spellcastingExtraApplyNonconform : true,
	features : {
		"subclassfeature3" : { 
			name : "Splicer Points",
			source : [["HGtMH", 207]],
			minlevel : 3,
			description : desc([
				"At the end of a long rest, I can use Surgeon’s Tools spending Splicer Points to modify my companions."
			]),
			limfeaname : "Splicer Points",
			additional : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
			toolProfs : [
				"Surgeon’s Tools"
			],
			toNotesPage : [{
				name : "Companion's augments",
				note : [
					"Augments can be gained only once unless otherwise stated.",
					"Splicer points are shared across all your companions.",
					"A companion can benefit from only one type of ‘touch’ augment at a time.",
					"I can regain the points by releasing the companion or spending 1 h. removing all augments from it.",
					" \u2022 (Augment | Effect Summary | Splicer Point Cost)",
					" \u2022 Water Breathing | Can only breathe water | 0",
					" \u2022 Amphibious | Can breathe air and water | 1",
					" \u2022 Darkvision | Gains or extends darkvision | 1",
					" \u2022 Extra Limb (max. 4) | Can grapple more creatures | 1 per limb",
					" \u2022 Fins & Webbing | Gains 30-foot swimming speed | 1",
					" \u2022 Illumination | Sheds light (10 ft./10 ft.) | 1",
					" \u2022 Keen Hearing | Advantage on hearing | 1",
					" \u2022 Keen Sight | Advantage on sight | 1",
					" \u2022 Keen Smell | Advantage on smell | 1",
					" \u2022 Powerful Build | Can push, drag, and carry more | 1",
					" \u2022 Prehensile Tail | Gains 30-foot climbing speed | 1",
					" \u2022 Slippery | Advantage to avoid grapples | 1",
					" \u2022 Sure-Footed | Advantage to resist prone | 1",
					" \u2022 Web Sense + Web Walk | Can sense and walk on webs | 1",
					" \u2022 Burrowing Claws | Gains 15-foot burrowing speed | 2",
					" \u2022 Long Limbed | Increases reach of attacks | 2",
					" \u2022 Mimicry | Can mimic sounds | 2",
					" \u2022 Natural Armour (max. 4) | Gains a +1 bonus to AC | 2 per +1",
					" \u2022 Poisonous Touch (max. 2) | Deals bonus poison damage | 2",
					" \u2022 Spider Climb | Can climb without checks | 2",
					" \u2022 Camouflage | Has advantage to hide while motionless | 3",
					" \u2022 Corrosive Touch max. 2) | Deals bonus acid damage | 3",
					" \u2022 Tremorsense | Gains or extends tremorsense | 3 per 15 ft.",
					" \u2022 Wings | Gains 30-foot flying speed | 3",
					" \u2022 Blindsight + Echolocation | Gains or extends blindsight | 4 per 15 ft.",
					" \u2022 Decaying Touch | Deals bonus necrotic damage | 4",
					" \u2022 Flyby | Doesn't provoke opportunity attacks | 4",
					" \u2022 Growth Hormone | Increases size category (limited by tamer level) and HP | 4"
				],
			}],
		}, //subclassfeature3
		"subclassfeature3.1" : { 
			name : "Modular Upgrades",
			source : [["HGtMH", 209]],
			minlevel : 7,
			description : desc([
				"During a long rest, I can improve a companion with a special organ."
			]),
			toNotesPage: [{
				name : "Special organs",
				note : [
					"The DC for the saving throw equals my tamer spell save DC",
					"Once a companion uses one of these actions, it can’t do so again until it finishes a short or long rest. Starting at 18th level, a companion can use this action twice before a rest.",
					" \u2022 Compelling Plumage. Each creature in a 25-foot cone that can see my companion must succeed on a Wisdom saving throw or be charmed by my companion for the next minute. While charmed, the creature is incapacitated and has a speed of 0 feet. The effect ends for an affected creature if it takes any damage, if someone else uses an action to shake the creature out of its stupor, if it no longer has line of sight to my companion, or is ever more than 25 feet away from it.",
					" \u2022 Phosphoburst. Each other creature in a 10-foot-radius sphere centred on my companion must make a Constitution saving throw against the dizzying burst of light my companion emits. On a failure, a creature takes 2d10 radiant damage and is blinded until the end of its next turn. On a success, a creature takes half as much damage and isn’t blinded.",
					" \u2022 Poison Web. Your companion launches an unfurling web of sticky silk in a 20-foot cube originating from it. All surfaces in the area become lined with webbing for the next minute. Each creature that touches one of these surfaces for the first time on its turn or starts its turn doing so must succeed on a Dexterity saving throw or become restrained for the duration, or until it breaks free. A creature restrained by the webs takes 2d4 poison damage when it becomes restrained and at the start of each of its turns. A creature can use its action to make a Strength check against your tamer spell save DC, freeing itself or another creature restrained by this web on a success.",
					" \u2022 Sirenshriek. Each other creature in a 15-foot-radius sphere centred on your companion must make an Intelligence saving throw as your companion lets forth a brain-curdling mental shriek. On a failure, a creature takes 3d8 psychic damage and, if it is concentrating on a spell, loses its concentration. On a success, a creature takes half as much damage and makes saving throws to maintain its concentration as normal.",
				], //notes
			amendTo : "Modular Upgrades",
			}], //toNotesPage
		}, //subclassfeature3.1
		"subclassfeature3.2" : { 
			name : "Battlefield Harvester",
			source : [["HGtMH", 210]],
			minlevel : 10,
			description : desc([
				"My companion consume consume the corpse of a non-swarm creature that has been dead for less than 1 minute. All my companions gain one of the creature's damage resistance or a damage or condition immunity until another creature it's consumed."
			]),
			usages : 1,
			recovery: "long rest",
		}, //subclassfeature3.2
		"subclassfeature3.3" : { 
			name : "Adrenal Overload",
			source : [["HGtMH", 210]],
			minlevel : 14,
			description : desc([
				"For one minute, my companion earns the benefits of Adrenal Overload for 1 minute."
			]),
			toNotesPage : [{
				name : "Adrenal Overload",
				note : [
					" \u2022 It immediately grows to Huge size (if it isn’t already).",
					" \u2022 Its weight increases by a factor of 8 per size category increased.",
					" \u2022 It gains temporary hit points equal to ten times your tamer level.",
					" \u2022 Its Strength score increases to 22 (if it isn’t already higher).",
					" \u2022 It gains proficiency in the Athletics skill.",
					" \u2022 It sprouts an appendage with which it can make melee weapon attacks with a reach of 5 feet that deal bludgeoning, piercing, or slashing damage (your choice when you take the action) equal to 3d6 plus its Strength modifier (+6) on a hit.",
					" \u2022 It gains the Multiattack action option: My companion makes three attacks with its appendage.",
					"*After the minute elapses, my companion falls unconscious for 1d4 hours and gains 2 levels of exhaustion."
				],
				amendTo : "Compaion's feats",
			}], //toNotesPage
			action : [
				["action", "Adrenal Overload"]
			],
		}, //subclassfeature3.3
	}, //features
}); //splicer subclass
AddSubClass("tamer", "senseipar", {
	regExpSearch : /^(?=.*sensei)(?=.*paradigm).*$/i,
	subname : "Sensei Paradigm",
	source : [["RGttYR", 207]],
	spellcastingExtra : ["flash", "repulsing palm", "earthskin", "wind strike", "create food and water", "haste", "freedom of movement", "steelskin", "endure", "greater restoration"],
	spellcastingExtraApplyNonconform : true,
	features : {
		"subclassfeature3" : { 
			name : "Martial Strikes",
			source : [["RGttYR", 201]],
			minlevel : 3,
			description : desc([
				"My companion gains Martial Strike as a attack. It can use Strength or Dexterity. It can make two attacks at 5th level and three at 14th level."
			]),
		}, //subclassfeature3
		"subclassfeature3.1" : { 
			name : "Martial Techniques",
			source : [["RGttYR", 201]],
			minlevel : 3,
			extraTimes : [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5],
			description : desc([
				"I can teach three Martial Techniques to each of my companions."
			]),
			extrachoices : ["Avoid", "Block", "Charge", "Dancing Feet", "Grapple", "Sweep", "Throw", "People's Elbow", "Uppercut"],
			"avoid" : {
				name : "Avoid" ,
				description : " \u2022 As a bonus action, your companion can take the Dodge action."
			},
			"block" : {
				name : "Block",
				description : " \u2022 As a reaction when your companion is attacked by a creature it can see and that attack deals bludgeoning, piercing, or slashing damage, your companion can add your proficiency bonus to its AC against that attack, potentially turning a hit into a miss. If the attack still hits, the damage dealt is reduced by an amount equal to 1d6 plus your proficiency bonus."
			},
			"charge" : {
				name : "Charge",
				description : " \u2022 As an action, your companion gains additional movement equal to its speed, and it can make one Martial Strike attack. If your companion moves up to 20 feet straight towards a creature and then hits it with a Martial Strike, the attack deals an extra 1d10 damage, and the target must succeed on a Strength saving throw (DC equals 8 + your companion’s Strength modifier + your proficiency bonus) or be knocked prone. A creature more than one size larger than your companion automatically succeeds on this saving throw."
			},
			"dancing feet" : {
				name : "Dancing Feet",
				description : " \u2022 As a bonus action, your companion can take the Disengage action."
			},
			"grapple" : {
				name : "Grapple",
				description : " \u2022 As a bonus action, your companion can attempt to grapple one creature within its reach by making a grapple check."
			},
			"sweep" : {
				name : "Sweep",
				description : " \u2022 As a bonus action, your companion can attempt to sweep a creature’s legs (or other anatomy) to knock it prone using the Shoving a Creature rules. The companion can choose to make a Strength (Athletics) or Dexterity (Athletics) check for the contest. A creature more than one size larger than your companion automatically succeeds on this check."
			},
			"throw" : {
				name : "Throw",
				description : " \u2022 Once per turn, when your companion has a creature grappled and takes the Attack action, it can replace one of its attacks with a special melee attack. Instead of an attack roll, it makes a Strength or Dexterity (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check (target’s choice). If your companion succeeds, it can move the creature to an unoccupied space within 5 feet of it and can knock it prone, dealing bludgeoning damage to it equal to two rolls of your companion’s Martial Strikes damage dice."
			},
			"people's elbow" : {
				name : "People's Elbow",
				description : " \u2022 Once per turn, when your companion takes the Attack action, it can replace one of its attacks with a special melee attack, which must be against a prone target. Your companion leaps into the air and places its full bodyweight behind a particularly hard or sharp part of its anatomy. It makes a melee attack roll against the target. The critical hit threshold (see page 83) for this attack is reduced by 1 for each size category that your companion is larger than the target. On a hit, the target takes damage equal to two rolls of your companion’s Martial Strikes damage dice, of the same type as your companion’s Martial Strike attacks. Hit or miss, your companion falls prone.",
			},
			"uppercut" : {
				name : "Uppercut",
				description : " \u2022 Once per turn, when your companion takes the Attack action, it can replace one of its attacks with a special melee attack, which must be against a target that isn’t prone. It makes a melee attack roll against the target. The critical hit threshold (see page 83) for this attack is reduced by 1 for each size category that your companion is smaller than the target. On a hit, the target takes damage equal to two rolls of your companion’s Martial Strikes damage dice, of the same type as your companion’s Martial Strike attacks.",
			}
		}, //subclassfeature3.1
		"subclassfeature3.2" : { 
			name : "Unleash",
			source : [["RGttYR", 201]],
			minlevel : 7,
			description : desc([
				"My companion moves up to its speed and make up to six Martial Strike attacks, each against a different target. My companion’s movement does not provoke opportunity attacks."
			]),
			action : [
				["action", "Unleash"]
			],
			usages : [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
			recovery: "short rest",
		}, //subclassfeature3.2
		"subclassfeature3.3" : { 
			name : "Shrug It Off",
			source : [["RGttYR", 201]],
			minlevel : 10,
			description : desc([
				"I can reduce the bludgeoning, piercing, or slashingby damage my companion take by my tamer spellcasting ability modifier (minimum reduction of 1)."
			]),
		}, //subclassfeature3.3
		"subclassfeature3.4" : { 
			name : "Martial Prodigy",
			source : [["RGttYR", 201]],
			minlevel : 14,
			description : desc([
				"For 1 minute, my companion can make four Martial Strike attacks, it can take two bonus actions on each turn, and it gains temporary hit points equal to my spellcasting ability modifier at the start of each of its turns."
			]),
			action : [
				["action", "Martial Prodigy"]
			],
			usages : 1,
			recovery: "long rest",
		}, //subclassfeature3.4
	}, //features
}); //sensei subclass
["can’t trip", "ferocious strike", "guidance", "howl", "light", "primal scent", "resistance", "smokescreen", "spare the dying", "stalker’s eye", "vicious mockery",
//1st Level
"chameleon skin", "cure wounds", "detect magic", "expeditious retreat", "faerie fire", "false life", "feather fall", "flipperform", "grease", "healing word", "heroism", "identify", "initiative", "jump", "longstrider", "peppermint plate", "protection from evil and good", "purify food and drink", "sanctuary", "shield of faith", "silent image", "sleep", "speak with animals",
//2nd level" 
"aid", "alter self", "animal messenger", "barkskin", "blur", "calm emotions", "darkvision", "detect thoughts", "eelskin", "enhance ability", "enlarge/reduce", "inequality", "invisibility", "lesser restoration", "levitate", "locate animals or plants", "locate object", "mirror image", "pass without trace", "preserve", "protection", "protection from poison", "see invisibility", "shielding word", "silence", "spider climb", "sugar rush", "warding bond",
 //3rd level 
 "blink", "create food and water", "daylight", "dispel magic", "fear", "fly", "food coma", "haste", "mass leech", "nondetection", "protection from energy", "remove curse", "switcheroo", "tongues", "water breathing", "water walk",
 //4th level
"aura of impurity", "control water", "death ward", "dimension door", "dominate beast", "fire shield", "freedom of movement", "frogskin*", "greater invisibility", "locate creature", "resilient sphere", "stoneskin",
 //5th level
"antilife shell", "awaken", "dispel evil and good", "dominate person", "endure", "feverskin", "geas", "greater restoration", "incorporeality", "legend lore", "mislead", "telepathic bond", "scrying"
].forEach( function (s) {
    if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("tamer") === -1) SpellsList[s].classes.push("tamer");
}); //tamer spell list