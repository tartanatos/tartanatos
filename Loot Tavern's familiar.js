CompanionList["tamer’s companion"] = {
	name : "Tamer’s Companion",
	nameMenu : "Companion (Tamer’s Companion class feature)",
	nameTooltip : "the Tamer’s Companion class feature",
	source : ["HGtMH", 999],
	includeCheck : function(sCrea, objCrea, iCreaCR, bIsAL) {
		return objCrea.type.toLowerCase() === "beast", "aberration" && objCrea.size >= 3 && iCreaCR <= 1/4 ? true : false;
	},
	attributesAdd : {
		header : "Companion",
		proficiencyBonusLinked : true,
	},
	notes : [{
		name : "Compaion's feats",
		source : [["HGtMH", 197]],
		description : desc([
			"When I reach 4th, 8th, 12th, 16th, and 19th level my companions gains 1 aditional Hit Dice.", 
			"Whenever I gain a Tamer level beyond 1st, each bonded companion gains one improvement.", 
			"All of this feature are applied retroactively to future companions.",
			"If i'm not incapacitated, it takes the Dodge action unless I command it otherwise.",
			"I can command it take any action it posses on its turn. Check the Notes page for exceptions.",
			])
	}, {
		name : "Wilful Blows",
		minlevel : 6,
		description : "My companions’ attacks count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
		joinString : "\n   "
	}],
};

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
	name : "",
	source : ["HGtMH", 237],
	size : ,
	type : "",
	companion : "familiar",
	alignment : "",
	ac : ,
	hp : ,
	hd : [],
	speed : "",
	proficiencyBonus : ,
	challengeRating : "",
	scores : [],
	senses : "", 
	attacksAction : ,
	attacks : [{
		name : "",
		ability : ,
		damage : [, , ""],
		range : "",
	}],
	skills : {
		"" :,
	},
	languages : ,
	damage_resistances : "",
	features : [{
		name : "",
		description: ""},
		{
		name : "",
		description: ""
	}],
	actions : [{
		name : "",
		description : ""
	}],
};

/* 
CreatureList[""] = {
	name : "",
	source : ["HGtMH", 999],
	size : ,
	type : "",
	companion : "familiar",
	alignment : "",
	ac : ,
	hp : ,
	hd : [],
	speed : "",
	proficiencyBonus : ,
	challengeRating : "",
	scores : [],
	senses : "", 
	attacksAction : ,
	attacks : [{
		name : "",
		ability : ,
		damage : [, , ""],
		range : "",
	}],
	skills : {
		"" :,
	},
	languages : ,
	damage_resistances : "",
	features : [{
		name : "",
		description: ""},
		{
		name : "",
		description: ""
	}],
	actions : [{
		name : "",
		description : ""
	}],
};
*/
