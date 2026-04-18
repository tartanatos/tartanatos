/*
Considerations: 
	This is a first, although functional, attempt of script and therefore has several shortcomings in the code writing and, especially, in the features descriptions, that overflow the frame on the second page.
	Only the base class is included WITHOUT companion options (a "ranger's companion" is used as a placeholder), nor are Heliana's optional familiars included, and neither will  be added until the base class meets a minimum acceptable quality standard, as determined by the creator (me)). 
	It is recommended to make the relevant changes to the companion page manually.
	Any suggestions for improving the script are welcome, especially regarding feature descriptions.
	It is recommended to use this dcript in conjunction with the "Heliana's Guide to Monster Hunting" and "Ryoko's Guide to the Yokai Realm" compendiums available in the MPMB index for a better experience.
Contents: 
	Tamer class, from Heliana's Guide to Monster Hunting.
	Leader, Infusioner, Necromancer (renamed "Necromantic" to avoid interfering with other alternative options), and Splicer subclasses from Heliana's Guide.
	Sensei subclass from Ryoko's Guide to the Yokai Realm.
	New familiars, suitable for companion option:
		Aboling, Dragonling, Gelatinooze, Hyphan, Mechakobold, Minimic, Peeper, Rakitten, Sunsnacker and Tarling from Heliana's Guide, 
		Brainmuncher, Caprisoul, Couatling, Death Shroud, Dire Bunny, Slaghund Pup and Tatzling from Humperdink’s Biomancy Boutique.
		Bancho-gama, Betobeto-kun, Kawawappa, Ko-inari and Senryōka from Ryoko's Guide.
*/


var iFileName = "Helianas Guide Tamer class.js";
RequiredSheetVersion("13.2.3");

SourceList["HGtMH"] = {
   name: "Heliana's Guide to Monster Hunting",
   abbreviation: "HGtMH",
   abbreviationSpellsheet : "HG",
   group: "Third Party",
   date: "2025-02-24",
};

SourceList["RGttYR"] = {
   name: "Ryoko's Guide to the Yokai Realms",
   abbreviation: "RGttYR",
   abbreviationSpellsheet : "RG",
   group: "Third Party",
   date: "2024-10-01",
};

SourceList["HBB"] = {
   name: "Humperdink’s Biomancy Boutique",
   abbreviation: "HBB",
   abbreviationSpellsheet : "HB",
   group: "Third Party",
   date: "2025-02-24",
};

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

CreatureList["aboling"] = {
	name : "Aboling",
	source : ["HGtMH", 225],
	size : 5,
	type : "Aberration",
	companion : "familiar",
	alignment: "Neutral Evil",
	ac : 12,
	hp : 4,
	hd : [1, 4],
	speed : "25 ft, swim 40 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [13, 9, 14, 14, 11, 13],
	senses : "Darkvision 120 ft",
	attacksAction : 1,
	attacks : [{
		name : "Tentacle",
		ability : 1,
		damage : [1, 6, "bludgeoning"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Arcana" : 4, 
		"History" : 4, 
		"Insight" : 2, 
		"Perception" : 2,
	},
	languages : "understands emotions and imagery but doesn’t speak, telepathy 30 ft",
	actions : [{
		name : " Detect Thoughts (1/Day)",
		description : " The aboling learns the surface thoughts of one creature it can see within 30 feet of it for the next minute. It can attempt to probe deeper into the same creature’s mind, using an action to force the target to make a DC 12 Wisdom saving throw. If it fails, the aboling gains insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the effect ends. Either way, the target knows that the aboling was probing deep into its mind."
	}],
};

CreatureList["dragonling"] = {
	name : "Dragonling",
	source : ["HGtMH", 228],
	size : 5,
	type : "Dragon",
	companion : "familiar",
	alignment : "Lawful Good",
	ac : 14,
	hp : 3,
	hd : [1, 4],
	speed : "25 ft, fly 30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [14, 10, 12, 9, 11, 13],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Perception" : 2,
	},
	damage_resistances : "As stated in Metallic Character trait",
	features : [{
		name : "Greedy",
		description: "Greedy. Whenever the dragonling first detects treasure worth 100 gp or more that isn’t being worn or carried, it must succeed on a DC 11 Wisdom saving throw or get distracted. While distracted, it spends its movement and actions trying to get close to, and frolic in, the treasure. A distracted dragonling repeats the saving throw at the end of each of its turns, ending the effect on a success and becoming immune to the allure of that treasure for the next 24 hours."},
		{
		name : "Metallic Character",
		description: "When the dragonling’s tamer finishes a long rest, the dragonling gains an affinity for the element associated with the first precious metal it touches. This affinity grants the dragonling resistance to that damage type and lasts until its tamer next finishes a long rest. Copper gives acid affinity, gold gives fire, and magnetite & silver give cold."
	}],
};

CreatureList["gelatinooze"] = {
	name : "Gelatinooze",
	source : ["HGtMH", 231],
	size : 5,
	type : "Ooze",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 5,
	hd : [1, 4],
	speed : "25 ft, climb 25 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [13, 6, 16, 4, 8, 4],
	senses : "Blindsight 60 ft. (blind beyond this radius)", 
	attacksAction : 1,
	attacks : [{
		name : "Pseudopod",
		ability : 1,
		damage : [1, 4, "acid"],
		range : "Melee (5 ft)",
	}],
	damage_immunities : "acid",
	features : [{
		name : "Acidic Touch.",
		description: "At the start of the gelatinooze’s turn, it can choose to secrete a small dose of acid (no action required). Each creature that is grappling it or that it is grappling takes acid damage equal to the gelatinooze’s Constitution modifier."},
		{
		name : "Dissolve Metal (Recharges after a Short or Long Rest).",
		description: "Over the course of 1 minute, the gelatinooze can dissolve up to 1 pound of nonmagical metal it is touching."
	}]
};

CreatureList["hyphan"] = {
	name : "Hyphan",
	source : ["HGtMH", 234],
	size : 5,
	type : "Plant",
	companion : "familiar",
	alignment : "Neutral Good",
	ac : 11,
	hp : 4,
	hd : [1, 4],
	speed : "25 ft, climb 25 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [7, 10, 14, 12, 13, 10],
	senses : "Darkvision 120 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Poison Spray",
		damage : [1, 12, "poison"],
		range : "15 ft",
		description : "Con save, success - no damage; 1 creature",
		abilitytodamage : false,
		dc : true,
		modifiers : [2, ""],
	}],
	skills : {
		"Medicine" : 3,
		"Nature" : 3
	},
	damage_resistances : "necrotic",
	features : [{
		name : "Spider Climb",
		description: "The hyphan can climb difficult surfaces, including  upside down on ceilings, without needing to make an ability check."}, 
	{
		name : "Sunlight Sensitivity",
		description: " While in sunlight, the hyphan has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
	}],
	actions : [{
		name : "Calming Spores (1/Day)",
		description : "One creature within 30 feet of the hyphan must succeed on a DC 12 Charisma saving throw or have its emotions calmed for the next minute. A willing creature can choose to fail this saving throw. The hyphan can choose to suppress any effect causing the target to be charmed or frightened. When this effect ends, any suppressed effect resumes, provided that its duration hasn't expired in the meantime. Alternatively, the hyphan can make the target indifferent about creatures of its choice that the target is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the effect ends, the creature becomes hostile again, unless the GM rules otherwise."
	}],
};

CreatureList["mechakobold"] = {
	name : "Mechakobold",
	source : ["HGtMH", 237],
	size : 5,
	type : "Construct",
	companion : "familiar",
	alignment : "Neutral Good",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed :  "25 ft, climb 25 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [7, 14, 11, 12, 9 , 15],
	senses : "Darkvision 120 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Slingshot.",
		ability : 2,
		damage : [1, 4, "bludgeoning"],
		range : "20/60 ft",
	}],
	skills : {
		"Deception" : 4, 
		"Investigation" : 3,
		"Sleight of Hand" : 4,
		"Stealth" : 4,
	},
	features : [{
		name : "Helpful-ish",
		description: "The mechakobold desires to help other creatures on their ability checks and will always try to take the Help action in non-combat situations. However, if the check on which the mechakobold helps is a failure, the consequences are always catastrophic (GM’s discretion)."
	}, {
		name : "Sunlight Sensitivity.",
		description: "While in sunlight, the mechakobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
	}],
	actions : [{
		name : "Tie Laces",
		description : "The mechakobold attempts to tie together the lower limbs of a creature within 5 feet of it using a pair of spare laces. It makes a Dexterity (Sleight of Hand) check contested by the target’s Dexterity (Acrobatics) or Strength (Athletics) check. On a success, the target’s walking and climbing speeds are halved until it unties its laces as an action, or cuts them with an attack with a slashing weapon."
	}],
};
CreatureList["minimic"] = {
	name : "Minimic",
	source : ["HGtMH", 240],
	size : 5,
	type : "Monstrosity",
	subtype : "shapechanger",
	companion : "familiar",
	alignment : "unaligned",
	ac : 12,
	hp : 4,
	hd : [1, 4],
	speed : "25 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [12, 11, 14, 4, 10, 6],
	senses : "darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Pseudopod",
		ability : 1,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "The target is subjected to the minimic’s Adhesive trait."
	}, {
		name : "Bite",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "Additional 1d4 acid damage.",
	}],
	skills : {
		"Stealth" : 2,
	},
	damage_immunities : "acid",
	condition_immunities : "prone",
	features : [{
		name : "Adhesive.",
		description: "The minimic adheres to anything that touches it. A creature no more than one size larger than the minimic that is adhered to the minimic is also grappled by it (escape DC 12)." //Not statet in the manual. Assumed based on the Save DC rules on page 239 (8 + minimic's proficiency bonus + minimic’s Constitution modifier)
	}, {
		name : "False Appearance (Object Form Only)",
		description: "While the minimic remains motionless, it is indistinguishable from an ordinary object."
	}, {
		name : "Shapechanger",
		description: "The minimic can use its action to polymorph into an object equal to it in size, or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies."
	}],
};
CreatureList["peeper"] = {
	name : "Peeper",
	source : ["HGtMH", 243],
	size : 5,
	type : "Aberration",
	companion : "familiar",
	alignment : "Neutral Good",
	ac : 12,
	hp : 4,
	hd : [1, 4],
	speed : "0 f., fly 30 ft (hover)",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [5, 14, 14, 13, 10, 7],
	senses : "Darkvision 60 ft.", 
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Perception" : 4,
	},
	languages : "Common",
	condition_immunities : "prone",
	features : [{
		name : "Cone of Encouragement",
		description: "The peeper’s central eye emits a beatific gaze, creating an area of encouragement in a 30-foot cone. At the end of each of its turns, the peeper decides which way the cone faces. See Reactions for more details."
	}, {
		name : "Scaredy",
		description: "The peeper has disadvantage on ability checks and saving throws against the frightened condition, and automatically fails these saving throws if it can see the source of its fear and the source is two or more size categories larger than it."
	}],
	reactions : [{
		name : "Encourage (2/Day)",
		description : "As a reaction when a creature within the peeper’s cone of encouragement makes an attack roll or saving throw, the peeper can emit verbal or psychic encouragement, granting the target a bonus d4 to its roll."
	}],
};
CreatureList["rakitten"] = {
	name : "Rakitten",
	source : ["HGtMH", 246],
	size : 5,
	type : "fiend",
	companion : "familiar",
	alignment : "Lawful Evil",
	ac : 13,
	hp : 3,
	hd : [1, 4],
	speed : "35 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [11, 14, 13, 12, 13, 15],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Deception" : 4, 
		"Insight" : 3,
	},
	features : [{
		name : "Cat’s Grace",
		description: "When the rakitten falls and isn’t incapacitated, it can subtract up to 30 feet from the fall when calculating falling damage. In addition, it has advantage on ability checks and saving throws made to avoid the prone condition."
	}, {
		name : "Swipey",
		description: "While not in combat, the rakitten takes any opportunity it can to knock things off shelves and ledges."
	}],
	actions : [{
		name : "Ethereal Paw",
		description : desc (["A spectral, magical, floating paw appears at a point the rakitten chooses within 30 feet of it. The paw lasts for 1 minute or until the rakitten dismisses it as a bonus action. The paw vanishes if it is ever more than 30 feet away from the rakitten or if the rakitten uses this action again.",
"The rakitten can use its action to control the paw. It can use the paw to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. It can move the paw up to 30 feet each time it uses it. The paw can’t attack, activate magic items, or carry more than 10 pounds."])
	}],
};
CreatureList["sunsnacker"] = {
	name : "Sunsnacker",
	source : ["HGtMH", 249],
	size : 5,
	type : "Fey",
	companion : "familiar",
	alignment : "Chaotic Neutral",
	ac : 13,
	hp : 3,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [14, 10, 12, 7, 11, 14],
	attacksAction : 1,
	attacks : [{
		name : "Beak",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Intimidation" : 4,
	},
	damage_resistances : "radiant",
	features : [{
		name : "Hungry",
		description: "Whenever the sunsnacker first detects the presence of sweet food that isn’t being worn or carried, it must succeed on a DC 11 Wisdom saving throw or get distracted. While distracted, it spends its movement and actions trying to get close to the food and eat it. A distracted sunsnacker repeats the saving throw at the end of each of its turns, ending the effect on a success and becoming immune to the allure of that source of food for the next 24 hours."
	}, {
		name : "Keen Smell",
		description: "The sunsnacker has advantage on Wisdom (Perception) checks that rely on smell."
	}],
	actions : [{
		name : "Light",
		description : "The sunsnacker creates a glowing orb that hovers in the air within 5 feet of it for the next minute, moving with it. The orb sheds bright light in a 10-foot radius, and dim light for an additional 10 feet."
	}],
};
CreatureList["tarling"] = {
	name : "Tarling",
	source : ["HGtMH", 252],
	size : 5,
	type : "Elemental",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 4,
	hd : [1, 4],
	speed : "30 ft, swim 30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [14, 10, 15, 4, 10, 8],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
	}],
	damage_resistances : "acid, piercing, poison",
	features : [{
		name : "Flammable",
		description: "If the tarling takes fire damage, it ignites. It and any creature it is grappling take 2 (1d4) fire damage at the start of each of its turns and its weapon attacks deal an additional 2 (1d4) fire damage on a hit. If the tarling is subject to heavy rainfall or it takes 5 or more cold damage in a single instance, the flames are extinguished."
	}, {
		name : "Oil Form",
		description: "When the tarling tries to move through water, it instead uses its swimming speed to skim along the water’s surface; it can’t submerge below the surface of water without a powerful detergent."
	}]
};
CreatureList["bancho-gama"] = {
	name : "Bancho-gama",
	source : ["RGttYR", 227],
	size : 5,
	type : "Monstrosity",
	companion : "familiar",
	subtype : "yokai",
	alignment : "Lawful Neutral",
	ac : 12,
	hp : 3,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [10, 15, 13, 8, 10, 14],
	attacksAction : 1,
	attacks : [{
		name : "Dagger",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft), 20/60 ft",
	}],
	skills : {
		"Intimidation" : 4,
	},
	languages : "Common",
	features : [{
		name : "Amphibious",
		description: "The bancho-gama can breathe air and water"
	}, {
		name : "Standing Leap",
		description: "The bancho-gama’s long jump is 20 feet and its high jump is up to 10 feet, with or without a running start."
	}, {
		name : "Superiority Complex",
		description: "The bancho-gama can’t benefit from the Help action"
	}]
};
CreatureList["betobeto-kun"] = {
	name : "Betobeto-kun",
	source : ["RGttYR", 230],
	size : 5,
	type : "Fey",
	subtype : "yokai",
	companion : "familiar",
	alignment : "Chaotic Neutral",
	ac : 12,
	hp : 3,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [1, 14, 13, 7, 11, 14],
	senses : "darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Frighten",
		damage : [1, 8, "psychic"],
		range : "5 ft",
		description : "Wis save, success - no damage; 1 creature; if roll 1, creature is frightened of betobeto-kun's untils next turn's end.",
		dc : true,
		modifiers : [2, ""],
		abilitytodamage : false
	}],
	skills : {
		"Stealth" : 4,
	},
	languages : "understands Common but can’t speak",
	condition_immunities : "frightened",
	features : [{
		name : "Audiophile",
		description: "Whenever the betobeto-kun hears a creature that it hasn’t encountered before, it must make a DC 11 Wisdom saving throw. On a failed save, the betobeto-kun loudly mimics the creature's noises for the next 10 minutes, automatically failing Stealth checks against creatures that can hear it."
	}]
};
CreatureList["kawawappa"] = {
	name : "Kawawappa",
	source : ["RGttYR", 233],
	size : 5,
	type : "Fey",
	subtype : "yokai",
	companion : "familiar",
	alignment : "Neutral Good",
	ac : 13,
	hp : 3,
	hd : [1, 4],
	speed : "30 ft, swim 30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [1, 4],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
	}],
	languages : "Common",
	features : [{
		name : "Amphibious",
		description: "The kawawappa can breathe air and water."
	}, {
		name : "Water Bowl",
		description: "When the kawawappa is knocked prone against its will, it must succeed on a DC 11 Dexterity saving throw or spill some of the water it keeps in its head, which disorients the kawawappa and gives it disadvantage on the next attack roll it makes before the end of its next turn."
	}]
};
CreatureList["ko-inari"] = {
	name : "Ko-inari",
	source : ["RGttYR", 236],
	size : 5,
	type : "Celestial",
	subtype : "yokai",
	companion : "familiar",
	alignment : "Lawful Good",
	ac : 12,
	hp : 3,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [9, 14, 13, 10, 14, 12],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Radiant Strike",
		ability : 5,
		damage : [1, 4, "radiant"],
		range : "Melee (5 ft), 20 ft",
	}],
	languages : "Common,Celestial, Kitsune",
	damage_immunities : "radiant",
	features : [{
		name : "Divine Reproach",
		description: "When a ko-inari witnesses one of its allies commit an evil deed, it takes the earliest possible opportunity to scold them (typically waiting until a combat concludes). The ko-inari’s scolding takes 1 minute and requires the ko-inari to be within 10 feet of its ally for the duration, after which the ally must succeed on a DC 11 Wisdom saving throw or take 4 (1d8) psychic damage. Once a creature has failed this saving throw, it can’t be affected by this trait again until it finishes a long rest."
	}, {
		name : "Fortified Mind",
		description: " The ko-inari is immune to magic that allows other creatures to read its thoughts, determine whether it’s lying, know its alignment, or know its creature type."
	}],
};
CreatureList["senryōka"] = {
	name : "senryōka",
	source : ["RGttYR", 239],
	size : 5,
	type : "Undead",
	subtype : "yokai",
	companion : "familiar",
	alignment : "Neutral",
	ac : 12,
	hp : 4,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [14, 10, 14, 8, 13, 9],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Salvaged Weapon",
		ability : 1,
		damage : [1, 4,  "bludgeoning, piercing, or slashing"],
		range : "Melee (5 ft), 20/60 ft",
	}],
	languages : " understands Common but can’t speak",
	damage_immunities : "poison",
	condition_immunities : "poisoned",
	features : [{
		name : "Kleptomaniac",
		description: " The senryōka feels compelled to acquire tools and weapons to store in its bag. Whenever it sees a creature carrying a weapon or tool that it hasn’t seen before, it must make a DC 11 Wisdom saving throw. On a failed save, the senryōka must try to steal the tool or weapon, stopping after one attempt regardless of whether it succeeds or fails."
	}],
	actions : [{
		name : "Incorporeal Form (1/Day)",
		description : "The senryōka becomes partially incorporeal until the end of its turn. While in this state, it can move through other creatures and objects as if they were difficult terrain. If it ends its turn in the same space as another creature or object, it takes 5 (1d10) force damage and is shunted into the nearest unoccupied space."
	}],
};
CreatureList["brainmuncher"] = {
	name : "Brainmuncher",
	source : ["HBB", 2],
	size : 5,
	type : "Aberration",
	companion : "familiar",
	alignment : "Lawful Evil",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [9, 10, 11, 15, 13, 13],
	senses : "Darkvision 60 ft", 
	attacksAction : 2,
	attacks : [{
		name : "Tentacles",
		ability : 4,
		damage : [1, 4, "psychic"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Arcana" : 4,
		"Deception" : 3,
		"Insight" : 3,
		"Perception" : 3,
	},
	languages : " Deep Speech, telepathy 30 ft",
	features : [{
		name : "Brainmuncher",
		description: "The brainmuncher likes to eat the brains of Tiny beasts, like household pets. If left unattended, it will attempt to do so (GM’s discretion)."
	}],
	actions : [{
		name : "Levitate",
		description : "The brainmuncher casts the levitate spell on itself."
	}],
};
CreatureList["caprisoul"] = {
	name : "Caprisoul",
	source : ["HBB", 5],
	size : 5,
	type : "Undead",
	companion : "familiar",
	alignment : "neutral",
	ac : 13,
	hp : 3,
	hd : [1, 4],
	speed : " 10 ft, fly 30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [4, 16, 13, 8, 9, 7],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Soul Drain",
		ability : 2,
		damage : [1, 6, "necrotic"],
		range : "Melee (5 ft)",
		description : "(Check features)",
	}],
	skills : {
		"Stealth" : 5,
	},
	damage_resistances : "necrotic",
	damage_immunities : "poison",
	condition_immunities : "charmed, poisoned",
	features : [{
		name : "Death Burst",
		description: "When the caprisoul dies, it explodes in a burst of soul energy. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 5 (2d4) psychic damage on a failure, or half as much damage on a success."
	}, {
		name : "Soul Drain",
		description: "As part of its Soul Drain attack, the Caprisoul deals additionally 1 piercing damage. The caprisoul gains temporary hit points equal to half the necrotic damage dealt. The target must succeed on a DC 11 Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
	}],
};
CreatureList["couatling"] = {
	name : "Couatling",
	source : ["HBB", 8],
	size : 5,
	type : "Celestial",
	companion : "familiar",
	alignment : "Lawful Good",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "20 ft, fly 30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [6, 15, 11, 10, 12, 15],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Perception" : 3,
	},
	languages : "telepathy 30 ft",
	damage_resistances : "psychic, radiant",
	features : [{
		name : "Shielded Mind",
		description: "The couatling is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
	}],
	actions : [{
		name : "Goodsense (1/Day)",
		description : "The couatling casts detect evil and good, requiring no material components."
	}],
};
CreatureList["death shroud"] = {
	name : "Death Shroud",
	source : ["HBB", 11],
	size : 5,
	type : "Undead",
	companion : "familiar",
	alignment : "Lawful Neutral",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [9, 13, 11, 14, 13, 8],
	senses : "Blindsight 60 ft (blind beyond this radius)", 
	attacksAction : 1,
	attacks : [{
		name : "Slap",
		ability : 2,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
	}, {
		name : "Lich Slap",
		ability : 4,
		damage : [1, 6, "necrotic"],
		range : "Melee (5 ft)",
		abilitytodamage : false,
		description : "Target can’t regain hit points until the start of the death shroud’s next turn.",
	}],
	skills : {
		"Medicine" : 3,
		"Thieves’ tools" : 3,
	},
	languages : "understands Common but can’t speak",
	damage_immunities : "poison",
	damage_immunities : "blinded, charmed, poisoned",
	features : [{
		name : "Morbid Curiosity",
		description: "The death shroud is easily distracted by fresh corpses. Whenever it first detects a corpse that has been dead for less than 1 hour (and that it didn’t witness die), it must succeed on a DC 11 Wisdom saving throw or get distracted. While distracted, it spends its movement and actions trying to get close to, and inspect, the corpse for a cause of death. A distracted death shroud in a corpse’s space uses its action to make Intelligence (Medicine) checks (DC decided by the GM). On a success, it stops being distracted and becomes immune to the allure of that corpse forever."
	}, {
		name : "Turn Immunity",
		description: "The death shroud is immune to effects that turn undead."
	}]
};
CreatureList["dire bunny"] = {
	name : "Dire Bunny",
	source : ["HBB", 15],
	size : 5,
	type : "Aberration",
	companion : "familiar",
	alignment : "neutral",
	ac : 13,
	hp : 4,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [10, 13, 14, 8, 14, 11],
	senses : "darkvision 90 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Insight" :4,
		"Perception" : 4,
	},
	languages : "Common, Deep Speech, telepathy 30 ft",
	features : [{
		name : "Bonemonger",
		description: "Whenever the dire bunny first sees a bone, it must succeed on a DC 12 Wisdom saving throw or become distracted until it possesses the bone or the bone is no longer in its line of sight. While distracted, it spends its movement and actions trying to get closer to the bone and sequester it. A distracted dire bunny whose owner issues a command to it repeats the saving throw at the end of its next turn, ending the effect on a success and becoming immune to the allure of any bone for the next hour."
	}],
	actions : [{
		name : "Detect Thoughts (1/Day)",
		description : "The dire bunny learns the surface thoughts of one creature it can see within 30 feet of it for 1 minute. It can attempt to probe deeper into the creature’s mind, using an action to force the target to make a DC 12 Wisdom saving throw, per the detect thoughts spell."
	}],
};
CreatureList["slaghund"] = {
	name : "Slaghund",
	source : ["HBB", 17],
	size : 5,
	type : "Fiend",
	companion : "familiar",
	alignment : "Chaotic Neutral",
	ac : 13,
	hp : 4,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [13, 12, 14, 6, 11, 10],
	senses : "Darkvision 60 ft",
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "Additional 1d4 fire damage.",
	}, {
		name : "Claws",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "Additional 1d4 fire damage.",
	}],
	skills : {
		"Perception" : 2,
	},
	damage_vulnerabilities : "cold",
	damage_immunities : "fire",
	features : [{
		name : "Heated Weapons",
		description: "When the slaghund hits with a weapon attack, it deals an extra 2 (1d4) fire damage (included in attacks)."
	}, {
		name : "Heatable Body",
		description: "As a bonus action, the slaghund can cause its body to heat up, or return to a normal warm temperature. While its body is heated in this way, a creature that touches the slaghund or hits it with a melee attack while within 5 feet of it takes 2 (1d4) fire damage."
	}, {
		name : "Reactionary Flame",
		description : "When the slaghund is surprised, it ignites everything flammable within 1 foot of it that isn’t being carried or worn."
	}],
};
CreatureList["tatzlings"] = {
	name : "",
	source : ["HBB", 20],
	size : 5,
	type : "Dragon",
	companion : "familiar",
	alignment : "Lawful good",
	ac : 14,
	hp : 3,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "1/8",
	scores : [11, 14, 12, 11, 10, 12],
	senses : "Darkvision 60 ft", 
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
	}, {
		name : "Claw",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
	}],
	skills : {
		"Perception" : 2,
	},
	damage_resistances : "cold",
	features : [{
		name : "Disaster Prone",
		description: "When the tatzling makes an ability check or attack roll and rolls a 1 on the d20, the results are often disastrous. The GM has great latitude when deciding the consequences of this trait triggering."
	}],
	reactions : [{
		name : "Protect (3/Day)",
		description : "When a creature the tatzling can see attacks a target that is within 5 feet of the tatzling, it can impose disadvantage on the attack roll provided the attack is against a creature other than the tatzling."
	}],
};
