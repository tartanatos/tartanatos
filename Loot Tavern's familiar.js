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
	languages : "Understands emotions and imagery but doesn’t speak, telepathy 30 ft.",
	actions : [{
		name : " Detect Thoughts (1/Day)",
		description : " The aboling learns the surface thoughts of one creature it can see within 30 feet of it for the next minute. It can attempt to probe deeper into the same creature’s mind, using an action to force the target to make a DC 12 Wisdom saving throw. If it fails, the aboling gains insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the effect ends. Either way, the target knows that the aboling was probing deep into its mind."
	}],
};
