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
