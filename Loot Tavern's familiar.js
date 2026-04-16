CompanionList["tamer’s companion"] = {
	name : "Tamer’s Companion",
	nameMenu : "Companion (Tamer’s Companion class feature)",
	nameTooltip : "the Tamer’s Companion class feature",
	source : ["HGtMH", 999],
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
		range : "Additional 1d4 acid damage.",
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
	attacksAction 1: ,
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
	attacksAction : ,
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
	attacksAction : ,
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
	name : "",
	source : ["HBB", 2],
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
		description: ""
	}, {
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
	source : ["HBB", 999],
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
		description: ""
	}, {
		name : "",
		description: ""
	}],
	actions : [{
		name : "",
		description : ""
	}],
};
*/
