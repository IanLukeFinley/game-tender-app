import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SetupScreen from './components/SetupScreen';
import StatusBarSpacer from './components/StatusBarSpacer';
import RatingScreen from './components/RatingScreen';
// import Logo from './Logo';
// import SortFunction from '../utils/SortFunction';
// import reformatBGGData from '../utils/reformatBGGData';

// const AppContainer = styled.div`
// display: grid;
// grid-template-rows: auto 1fr;
// `

function App() {

  //States and Initial Variables

  let initialFormState = {
    playername: "",
    playercount: "2",
    playtime: "99",
    error: '',
    gamesReturned: "1500"
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [presentList, setPresentList] = useState(['test']);


  //Handle functions

  const handleChange = ({ target }) => {
    // const value = target.value;
    // setFormData({
    //   ...formData,
    //   [target.name]: value.trim(),
    // });
  };

  const sampleGameData = [
    {
      "name": "Viticulture",
      "thumbnail": "https://cf.geekdo-images.com/WrnWFA1Sysm3-nQyBe1sUA__thumb/img/udscIXtuApQ6rFYHjfAM5zMKfFs=/fit-in/200x150/filters:strip_icc()/pic2619743.jpg",
      "minplayers": "2",
      "maxplayers": "6",
      "playingtime": "90",
      "id": "128621",
      "image": "https://cf.geekdo-images.com/WrnWFA1Sysm3-nQyBe1sUA__original/img/cGg9S0AH41VxczdybvFsb81AKWw=/0x0/filters:format(jpeg)/pic2619743.jpg",
      "description": "In Viticulture, the players find themselves in the roles of people in rustic, pre-modern Tuscany who have inherited meager vineyards. They have a few plots of land, an old crushpad, a tiny cellar, and three workers. They each have a dream of being the first to call their winery a true success.&amp;#10;&amp;#10;The players are in the position of determining how they want to allocate their workers throughout the year. Every season is different on a vineyard, so the workers have different tasks they can take care of in the summer and winter. There's competition over those tasks, and often the first worker to get to the job has an advantage over subsequent workers.&amp;#10;&amp;#10;Fortunately for the players, people love to visit wineries, and it just so happens that many of those visitors are willing to help out around the vineyard when they visit as long as you assign a worker to take care of them. Their visits (in the form of cards) are brief but can be very helpful.&amp;#10;&amp;#10;Using those workers and visitors, players can expand their vineyards by building structures, planting vines (vine cards), and filling wine orders (wine order cards). Players work towards the goal of running the most successful winery in Tuscany.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Burgle Bros.",
      "thumbnail": "https://cf.geekdo-images.com/cPZZhbehOr-cXE1HRa6T3w__thumb/img/snQ34rjbfQk96R_-pljlOetsYC4=/fit-in/200x150/filters:strip_icc()/pic2439102.png",
      "minplayers": "1",
      "maxplayers": "4",
      "playingtime": "90",
      "id": "172081",
      "image": "https://cf.geekdo-images.com/cPZZhbehOr-cXE1HRa6T3w__original/img/GAmiCfqQ1UdkVxYw4LAkryGW4dY=/0x0/filters:format(png)/pic2439102.png",
      "description": "Burgle Bros. is a cooperative game for 1-&amp;shy;4 players. Players are unique members of a crew trying to pull off a robbery of a highly secure building &amp;mdash; without getting caught. The building has three floors (4x4 tiles), each with its own safe to crack. Players start on the first floor and have to escape to their helicopter waiting on the roof.&amp;#10;&amp;#10;Players each have three stealth tokens. Whenever they are on the same tile with a guard, they lose one. If any player is caught without a stealth token, the game is over. If players can open all three safes, and escape through the stairs to the roof they win.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Arkham Horror: The Card Game",
      "thumbnail": "https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__thumb/img/L8ouPl5jv2Ye9MC4R_Os2zSGigE=/fit-in/200x150/filters:strip_icc()/pic3122349.jpg",
      "minplayers": "1",
      "maxplayers": "2",
      "playingtime": "120",
      "id": "205637",
      "image": "https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__original/img/guEKCewM_2e5ugltSN3dTSwdZJI=/0x0/filters:format(jpeg)/pic3122349.jpg",
      "description": "Something evil stirs in Arkham, and only you can stop it. Blurring the traditional lines between role-playing and card game experiences, Arkham Horror: The Card Game is a Living Card Game of Lovecraftian mystery, monsters, and madness!&amp;#10;&amp;#10;In the game, you and your friend (or up to three friends with two Core Sets) become characters within the quiet New England town of Arkham. You have your talents, sure, but you also have your flaws. Perhaps you've dabbled a little too much in the writings of the Necronomicon, and its words continue to haunt you. Perhaps you feel compelled to cover up any signs of otherworldly evils, hampering your own investigations in order to protect the quiet confidence of the greater population. Perhaps you'll be scarred by your encounters with a ghoulish cult.&amp;#10;&amp;#10;No matter what compels you, no matter what haunts you, you'll find both your strengths and weaknesses reflected in your custom deck of cards, and these cards will be your resources as you work with your friends to unravel the world's most terrifying mysteries.&amp;#10;&amp;#10;Each of your adventures in Arkham Horror LCG carries you deeper into mystery. You'll find cultists and foul rituals. You'll find haunted houses and strange creatures. And you may find signs of the Ancient Ones straining against the barriers to our world...&amp;#10;&amp;#10;The basic mode of play in Arkham LCG is not the adventure, but the campaign. You might be scarred by your adventures, your sanity may be strained, and you may alter Arkham's landscape, burning buildings to the ground. All your choices and actions have consequences that reach far beyond the immediate resolution of the scenario at hand&amp;mdash;and your actions may earn you valuable experience with which you can better prepare yourself for the adventures that still lie before you.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "XCOM: The Board Game",
      "thumbnail": "https://cf.geekdo-images.com/1E7ghRKcegsb941W1QwrOw__thumb/img/OQe2YrchPfNyh_LvUx6vCEWGei4=/fit-in/200x150/filters:strip_icc()/pic2247621.jpg",
      "minplayers": "1",
      "maxplayers": "4",
      "playingtime": "120",
      "id": "163602",
      "image": "https://cf.geekdo-images.com/1E7ghRKcegsb941W1QwrOw__original/img/f73J1UFyuBzmOAU8Lt-hy0NkiKs=/0x0/filters:format(jpeg)/pic2247621.jpg",
      "description": "Game description from the publisher:&amp;#10;&amp;#10;You are humanity's last hope.&amp;#10;&amp;#10;In XCOM: The Board Game, you and up to three friends assume the roles of the leaders of the elite, international organization known as XCOM. It is your job to defend humanity, quell the rising panic, and turn back the alien invasion.&amp;#10;&amp;#10;Where the world's militaries have failed to stand against the alien invaders, you must succeed. To do so, you must make strategic use of the resources available to you. You must launch Interceptors to shoot down alien UFOs, assign soldiers to key missions, research alien technology, and use that technology to defend your base &amp;mdash; all while trying to keep the world from collapsing just long enough that you can coordinate one final mission to repel the invaders for good.&amp;#10;&amp;#10;One of the more notable aspects of XCOM: The Board Game is the way that it incorporates a free and innovative digital app into the core of its gameplay. This digital companion will be available both as a downloadable app and as an online tool.&amp;#10;&amp;#10;The app's primary function is to coordinate the escalating alien invasion, randomly selecting from one of five different invasion plans. Each invasion plan represents a general outline that the alien commanders will use to coordinate the arrival of new UFOs, plan strikes against your base, and respond to your successes or failures as it seeks to conquer Earth. The app manages all of these tasks and heightens the game's tension as it forces you to respond in real-time. Then, after you move quickly to coordinate your response, you engage the enemy in the untimed resolution phase and feed the results to the app. Based upon these results, the app launches the invasion's next strikes.&amp;#10;&amp;#10;Additionally, the app teaches you the rules, controls the information that your satellites provide you, and tracks the progress of your resistance efforts, even as it allows you to enjoy the game at any of three levels of difficulty: Easy, Normal, or Hard.&amp;#10;&amp;#10;The use of this app does more than simply streamline your play experience and track your turns in real-time; it also permits a uniquely dynamic turn structure. While the variety of game phases remains the same from round to round, the order in which you and your friends must play through them may change, as may the number of a given phase. As a result, while you'll want to know where UFOs appear before you deploy your Interceptors, the alien invaders may be able to disrupt your satellite intel and force you to deploy your Interceptors on patrol with limited or no knowledge of the UFOs current whereabouts. Similarly, you may be forced to think about the costs of resolving the world&amp;rsquo;s crises before you know how many troops you&amp;rsquo;ll need to commit to your base defense.&amp;#10;&amp;#10;The effect of the app is to immerse you deep into the dramatic tension at the core of XCOM: The Board Game, and it ensures that the game presents a challenging and cooperative (or solo) experience like no other. Just like the XCOM department heads that you represent, you'll need to keep cool heads in order to prevail.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Robinson Crusoe: Adventures on the Cursed Island",
      "thumbnail": "https://cf.geekdo-images.com/FbFnaTx3aT5dM18K_bR_Pg__thumb/img/K1ZUx-QNGg-Kkm2D9iUX4bL0-IM=/fit-in/200x150/filters:strip_icc()/pic3165731.jpg",
      "minplayers": "1",
      "maxplayers": "4",
      "playingtime": "120",
      "id": "121921",
      "image": "https://cf.geekdo-images.com/FbFnaTx3aT5dM18K_bR_Pg__original/img/TB2dGHOnuUr54jQYIJZDIMilOJE=/0x0/filters:format(jpeg)/pic3165731.jpg",
      "description": "Robinson Crusoe: Adventures on the Cursed Island is a game created by Ignacy Trzewiczek, the author of Stronghold. This time Trzewiczek takes the players to a deserted island, where they'll play the parts of shipwreck survivors confronted by an extraordinary adventure. They'll be faced with the challenges of building a shelter, finding food, fighting wild beasts, and protecting themselves from weather changes. Building walls around their homes, animal domestication, constructing weapons and tools from what they find, and much more await them on the island. The players decide in which direction the game will unfold and &amp;ndash; after several in-game weeks of hard work &amp;ndash; how their settlement will look. Will they manage to discover the secret of the island in the meantime? Will they find a pirate treasure, or an abandoned village? Will they discover an underground city or a cursed temple at the bottom of a volcano? Answers to these questions lie in hundreds of event cards and hundreds of object and structure cards that can be used during the game...&amp;#10;&amp;#10;Robinson Crusoe: Adventures on the Cursed Island is an epic game from Portal. You will build a shelter, palisade, weapons, you will create tools like axes, knives, sacks, you will do everything you can to&amp;hellip; to survive. You will have to find food, fight wild beasts, protect yourself from weather changes&amp;hellip;&amp;#10;&amp;#10;Take the role of one of four characters from the ship crew (cook, carpenter, explorer, or soldier) and face the adventure. Use your determination skills to help your teammates, discuss with them your plan, and put it into practice. Debate, discuss, and work on the best plan you all can make.&amp;#10;&amp;#10;Search for treasures. Discover mysteries. Follow goals of six different, engaging scenarios. Start by building a big pile of wood and setting it on fire to call for help, and then start new adventures. Become an exorcist on cursed Island. Become a treasure hunter on Volcano Island. Become a rescue team for a young lady who&amp;rsquo;s stuck on rock island&amp;hellip;&amp;#10;&amp;#10;Let the adventure live!&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Millennium Blades",
      "thumbnail": "https://cf.geekdo-images.com/fqNRfH1NRnnhiIJisZjEoQ__thumb/img/88CPRQuwAZN7TCr9UYNKkLT3SGQ=/fit-in/200x150/filters:strip_icc()/pic2468179.jpg",
      "minplayers": "2",
      "maxplayers": "5",
      "playingtime": "120",
      "id": "151347",
      "image": "https://cf.geekdo-images.com/fqNRfH1NRnnhiIJisZjEoQ__original/img/8dQbVNL60rGtZX71LU1yocQD9Ro=/0x0/filters:format(jpeg)/pic2468179.jpg",
      "description": "Millennium Blades is a CCG-Simulator -- A game in which you play as a group of friends who play the fictional CCG &amp;quot;Millennium Blades&amp;quot;.&amp;#10;&amp;#10;In this game you will build decks, play the meta, acquire valuable collections, crack open random boosters, and compete in tournaments for prizes and fame. The game takes you from Starter Deck to Regionals in about 2-3 hours.&amp;#10;&amp;#10;Multiple games can also be chained together to form a Campaign, going from Regionals to Nationals in game 2 and from Nationals to Worlds in game 3, with each game introducing ever more powerful cards and higher stakes, but also resetting the power of the game so that each player has a fair chance to win each 'season' of the campaign.&amp;#10;&amp;#10;The game draws heavily on Manga/Anime inspiration for its art, and parodies Magic: the Gathering, Yugioh, and many other collectible games.&amp;#10;&amp;#10;At its heart, it&amp;rsquo;s a commodity trading game, except that instead of cubes or stocks, the things you&amp;rsquo;ll be buying, selling, and speculating on are trading cards that can be used throughout the game in periodic tournaments. By trading wisely, playing the market, working together with friends, building collections, and winning tournaments, you&amp;rsquo;ll secure points and become the Millennium Blades World Champion.&amp;#10;&amp;#10;The game features a system of card pods, where you will play with about 400 of the base game&amp;rsquo;s 600 cards every game.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Terraforming Mars",
      "thumbnail": "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__thumb/img/BTxqxgYay5tHJfVoJ2NF5g43_gA=/fit-in/200x150/filters:strip_icc()/pic3536616.jpg",
      "minplayers": "1",
      "maxplayers": "5",
      "playingtime": "120",
      "id": "167791",
      "image": "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__original/img/thIqWDnH9utKuoKVEUqveDixprI=/0x0/filters:format(jpeg)/pic3536616.jpg",
      "description": "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.&amp;#10;&amp;#10;The players acquire unique project cards (from over two hundred different ones) by buying them to their hand. The projects (cards) can represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, to mining the moons of Jupiter and establishing greenhouse gas industries to heat up the atmosphere. The cards can give you immediate bonuses, as well as increasing your production of different resources. Many cards also have requirements and they become playable when the temperature, oxygen, or ocean coverage increases enough. Buying cards is costly, so there is a balance between buying cards (3 megacredits per card) and actually playing them (which can cost anything between 0 to 41 megacredits, depending on the project). Standard Projects are always available to complement your cards.&amp;#10;&amp;#10;Your basic income, as well as your basic score, is based on your Terraform Rating (starting at 20), which increases every time you raise one of the three global parameters. However, your income is complemented with your production, and you also get VPs from many other sources.&amp;#10;&amp;#10;Each player keeps track of their production and resources on their player boards, and the game uses six types of resources: MegaCredits, Steel, Titanium, Plants, Energy, and Heat. On the game board, you compete for the best places for your city tiles, ocean tiles, and greenery tiles. You also compete for different Milestones and Awards worth many VPs. Each round is called a generation (guess why) and consists of the following phases:&amp;#10;&amp;#10;1) Player order shifts clockwise.&amp;#10;2) Research phase: All players buy cards from four privately drawn.&amp;#10;3) Action phase: Players take turns doing 1-2 actions from these options: Playing a card, claiming a Milestone, funding an Award, using a Standard project, converting plant into greenery tiles (and raising oxygen), converting heat into a temperature raise, and using the action of a card in play. The turn continues around the table (sometimes several laps) until all players have passed.&amp;#10;4) Production phase: Players get resources according to their terraform rating and production parameters.&amp;#10;&amp;#10;When the three global parameters (temperature, oxygen, ocean) have all reached their goal, the terraforming is complete, and the game ends after that generation. Count your Terraform Rating and other VPs to determine the winning corporation!&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Spirit Island",
      "thumbnail": "https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__thumb/img/aUlIih2_R7P8IYKeyNl2heLQbu8=/fit-in/200x150/filters:strip_icc()/pic7013651.jpg",
      "minplayers": "1",
      "maxplayers": "4",
      "playingtime": "120",
      "id": "162886",
      "image": "https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__original/img/9uLd9C3XAvInLCLhAoXqKVk56zs=/0x0/filters:format(jpeg)/pic7013651.jpg",
      "description": "In the most distant reaches of the world, magic still exists, embodied by spirits of the land, of the sky, and of every natural thing. As the great powers of Europe stretch their colonial empires further and further, they will inevitably lay claim to a place where spirits still hold power - and when they do, the land itself will fight back alongside the islanders who live there.&amp;#10;&amp;#10;Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders. Players are different spirits of the land, each with its own unique elemental powers. Every turn, players simultaneously choose which of their power cards to play, paying energy to do so. Using combinations of power cards that match a spirit's elemental affinities can grant free bonus effects. Faster powers take effect immediately, before the Invaders spread and ravage, but other magics are slower, requiring forethought and planning to use effectively. In the Spirit phase, spirits gain energy, and choose how / whether to Grow: to reclaim used power cards, to seek for new power, or to spread presence into new areas of the island.&amp;#10;&amp;#10;The Invaders expand across the island map in a semi-predictable fashion. Each turn they explore into some lands (portions of the island); the next turn, they build in those lands, forming settlements and cities. The turn after that, they ravage there, bringing blight to the land and attacking any native islanders present. The islanders fight back against the Invaders when attacked, and lend the spirits some other aid, but may not always do so exactly as you'd hoped. Some Powers work through the islanders, helping them (eg) drive out the Invaders or clean the land of blight.&amp;#10;&amp;#10;The game escalates as it progresses: spirits spread their presence to new parts of the island and seek out new and more potent powers, while the Invaders step up their colonization efforts. Each turn represents 1-3 years of alternate-history. At game start, winning requires destroying every last settlement and city on the board - but as you frighten the Invaders more and more, victory becomes easier: they'll run away even if some number of settlements or cities remain. Defeat comes if any spirit is destroyed, if the island is overrun by blight, or if the Invader deck is depleted before achieving victory.&amp;#10;&amp;#10;The game includes different adversaries to fight against (eg: a Swedish Mining Colony, or a Remote British Colony). Each changes play in different ways, and offers a different path of difficulty boosts to keep the game challenging as you gain skill.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Agricola",
      "thumbnail": "https://cf.geekdo-images.com/dDDo2Hexl80ucK1IlqTk-g__thumb/img/GHGdnCfeysoP_34gLnofJcNivW8=/fit-in/200x150/filters:strip_icc()/pic831744.jpg",
      "minplayers": "1",
      "maxplayers": "5",
      "playingtime": "150",
      "id": "31260",
      "image": "https://cf.geekdo-images.com/dDDo2Hexl80ucK1IlqTk-g__original/img/toobKoejPiHpfpHk4SYd1UAJafw=/0x0/filters:format(jpeg)/pic831744.jpg",
      "description": "Description from BoardgameNews&amp;#10;&amp;#10;In Agricola, you're a farmer in a wooden shack with your spouse and little else. On a turn, you get to take only two actions, one for you and one for the spouse, from all the possibilities you'll find on a farm: collecting clay, wood, or stone; building fences; and so on. You might think about having kids in order to get more work accomplished, but first you need to expand your house. And what are you going to feed all the little rugrats?&amp;#10;&amp;#10;The game supports many levels of complexity, mainly through the use (or non-use) of two of its main types of cards, Minor Improvements and Occupations. In the beginner's version (called the Family Variant in the U.S. release), these cards are not used at all. For advanced play, the U.S. release includes three levels of both types of cards; Basic (E-deck), Interactive (I-deck), and Complex (K-deck), and the rulebook encourages players to experiment with the various decks and mixtures thereof. Aftermarket decks such as the Z-Deck and the L-Deck also exist.&amp;#10;&amp;#10;Agricola is a turn-based game. There are 14 game rounds occurring in 6 stages, with a Harvest at the end of each stage (after Rounds 4, 7, 9, 11, 13, and 14).&amp;#10;Each player starts with two playing tokens (farmer and spouse) and thus can take two turns, or actions, per round. There are multiple options, and while the game progresses, you'll have more and more: first thing in a round, a new action card is flipped over.&amp;#10;Problem: Each action can be taken by only one player each round, so it's important to do some things with high preference.&amp;#10;Each player also starts with a hand of 7 Occupation cards (of more than 160 total) and 7 Minor Improvement cards (of more than 140 total) that he/she may use during the game if they fit in his/her strategy. Speaking of which, there are countless strategies, some depending on your card hand. Sometimes it's a good choice to stay on course, and sometimes it is better to react to your opponents' actions...&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Fury of Dracula (Third/Fourth Edition)",
      "thumbnail": "https://cf.geekdo-images.com/iLiUp891Wqb5EE0gBqjBaA__thumb/img/Jg01alIAt8H1KI6gFhS-naLJans=/fit-in/200x150/filters:strip_icc()/pic4411188.jpg",
      "minplayers": "2",
      "maxplayers": "5",
      "playingtime": "180",
      "id": "181279",
      "image": "https://cf.geekdo-images.com/iLiUp891Wqb5EE0gBqjBaA__original/img/XowehLK_AtTFigFRNeLqCMmVXNo=/0x0/filters:format(jpeg)/pic4411188.jpg",
      "description": "The third edition of Fury of Dracula features all-new art and graphic design crafted to complement the game's intuitive, thematic mechanisms. Rounds are now broken into day and night, with hunters taking actions during both, while Dracula can act only at night. Combat is more streamlined and decisive, and new rumor tokens allow Dracula to mislead hunters and extend the terrible reach of his influence. Count Dracula triumphs if he advances his influence track to thirteen; if the hunters can defeat him before then, they save the continent of Europe and win the game.&amp;#10;&amp;#10;The fourth edition of Fury of Dracula contains pre-painted miniatures instead of unpainted figures, a different rulebook and different card sizes.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "World of Warcraft: The Boardgame",
      "thumbnail": "https://cf.geekdo-images.com/G18hq7ONuqIyeGgU0Zlorw__thumb/img/GV3udB51DgNFOIdKBxCdo9hi9kY=/fit-in/200x150/filters:strip_icc()/pic756989.jpg",
      "minplayers": "2",
      "maxplayers": "6",
      "playingtime": "180",
      "id": "17223",
      "image": "https://cf.geekdo-images.com/G18hq7ONuqIyeGgU0Zlorw__original/img/pWOqse-imzY6eijXyGwD1cRo2JI=/0x0/filters:format(jpeg)/pic756989.jpg",
      "description": "Take on the role of a chivalrous paladin or a wise shaman, a holy priest or a vile warlock, a mighty mage or a crafty rogue. Play as a savage orc, a mighty tauren, a tribal troll, or one of the Forsaken undead; become an ingenious gnome, a doughty dwarf, a mysterious Night Elf, or a noble human.&amp;#10;&amp;#10;Based on the popular World of Warcraft Massively Multiplayer Online Game from Blizzard Entertainment, World of Warcraft: the Board Game invites the players to choose from 16 characters, drawn from the eight races and nine character classes of the Warcraft universe, and take up arms for the glory of the Horde ... or the Alliance. Travel across Lordaeron, vanquish monsters, gain experience and power, and earn honor for your faction.&amp;#10;&amp;#10;World of Warcraft: the Board Game is a team-based fantasy adventure. The Horde and the Alliance factions must compete to be the first to defeat the invincible Overlord &amp;ndash; be it the lich Kel'Thuzad, the dragon Nefarian, or the demon Kazzak &amp;ndash; or, failing that, to be the last faction standing when it comes to all-out war!&amp;#10;&amp;#10;&amp;mdash;description from the publisher&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Mage Knight Board Game",
      "thumbnail": "https://cf.geekdo-images.com/DUO2hz9AlLOH8p9ED-lCWg__thumb/img/0bWDfnjzYebauQZrHmjyHkuUttI=/fit-in/200x150/filters:strip_icc()/pic1083380.jpg",
      "minplayers": "1",
      "maxplayers": "4",
      "playingtime": "240",
      "id": "96848",
      "image": "https://cf.geekdo-images.com/DUO2hz9AlLOH8p9ED-lCWg__original/img/PDDH38Vf9NEB_4ODURxcJKNBfVQ=/0x0/filters:format(jpeg)/pic1083380.jpg",
      "description": "The Mage Knight board game puts you in control of one of four powerful Mage Knights as you explore (and conquer) a corner of the Mage Knight universe under the control of the Atlantean Empire. Build your army, fill your deck with powerful spells and actions, explore caves and dungeons, and eventually conquer powerful cities controlled by this once-great faction! In competitive scenarios, opposing players may be powerful allies, but only one will be able to claim the land as their own. In cooperative scenarios, the players win or lose as a group. Solo rules are also included.&amp;#10;&amp;#10;Combining elements of RPGs, deck-building, and traditional board games the Mage Knight board game captures the rich history of the Mage Knight universe in a self-contained gaming experience.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Arkham Horror",
      "thumbnail": "https://cf.geekdo-images.com/9cJf4kd_HZQo6NunfJlo9w__thumb/img/6VzhMMmGOxNTCHQ-8iFdn5vINis=/fit-in/200x150/filters:strip_icc()/pic175966.jpg",
      "minplayers": "1",
      "maxplayers": "8",
      "playingtime": "240",
      "id": "15987",
      "image": "https://cf.geekdo-images.com/9cJf4kd_HZQo6NunfJlo9w__original/img/YA5R2ZUV2Zwt_fgXIxu8bii3OJ0=/0x0/filters:format(jpeg)/pic175966.jpg",
      "description": "&amp;#10; The year is 1926, and it is the height of the Roaring Twenties. Flappers dance till dawn in smoke-filled speakeasies drinking alcohol supplied by rum runners and the mob. It's a celebration to end all celebrations in the aftermath of the war to end all wars.&amp;#10;&amp;#10;&amp;#10;&amp;#10; Yet a dark shadow grows in the city of Arkham. Alien entities known as Ancient Ones lurk in the emptiness beyond space and time, writhing at the gates between worlds. These gates have begun to open and must be closed before the Ancient Ones make our world their ruined domination.&amp;#10;&amp;#10;&amp;#10;&amp;#10; Only a handful of investigators stand against the Arkham Horror. Will they Prevail? &amp;#10;&amp;#10;&amp;#10;Arkham Horror is a cooperative adventure game themed around H.P Lovecraft's Cthulhu Mythos. Players choose from 16 Investigators and take to the streets of Arkham. Before the game, one of the eight Ancient Ones is chosen and it's up to the Investigators to prevent it from breaking into our world. During the course of the game, players will upgrade their characters by acquiring skills, allies, items, weapons, and spells. It's up to the players to clean out the streets of Arkham by fighting many different types of monsters, but their main goal is to close gates to other dimensions that are opening up around town. With too many gates open the Ancient One awakens and the players only have one last chance to save the world - defeat the Ancient One in combat!&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Diplomacy",
      "thumbnail": "https://cf.geekdo-images.com/Fdo4FMnX7KsPx23LigwRBw__thumb/img/DNwmZml-NTgySd-rxenVZa-AAdI=/fit-in/200x150/filters:strip_icc()/pic7163611.jpg",
      "minplayers": "2",
      "maxplayers": "7",
      "playingtime": "360",
      "id": "483",
      "image": "https://cf.geekdo-images.com/Fdo4FMnX7KsPx23LigwRBw__original/img/OhsiBEz5peDXKaVQU_0LtkuJDmQ=/0x0/filters:format(jpeg)/pic7163611.jpg",
      "description": "This classic game of pure negotiation has taken many forms over the years.&amp;#10;&amp;#10;The first The Avalon Hill Game Co version has perhaps the widest release, but Avalon Hill re-released the game in 1999, complete with a colorful new map and metal pieces. In 2008, Avalon Hill released a 50th anniversary edition with a new map and cardboard pieces representing the armies and navies.&amp;#10;&amp;#10;In the game, players represent one of the seven &amp;quot;Great Powers of Europe&amp;quot; (Great Britain, France, Austria-Hungary, Germany, Italy, Russia or Turkey) in the years prior to World War I. Play begins in the Spring of 1901, and players make both Spring and Autumn moves each year. There are only two kinds of military units: armies and fleets. On any given turn, each of your military units has limited options: they can move into an adjoining territory, support an allied unit in an attack on an adjoining territory, support an allied unit in defending an adjoining territory, or hold their position. Players instruct each of their units by writing a set of &amp;quot;orders.&amp;quot; The outcome of each turn is determined by the rules of the game. There are no dice rolls or other elements of chance. With its incredibly simplistic movement mechanics fused to a significant negotiation element, this system is highly respected by many gamers.&amp;#10;&amp;#10;Avalon Hill Complexity rating - 3&amp;#10;&amp;#10;Re-implemented by:&amp;#10;&amp;#10; Colonial Diplomacy&amp;#10; Diplomacy: Classical Variant&amp;#10; Diplomacy: Hundred Variant&amp;#10;&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Pandemic Legacy: Season 2",
      "thumbnail": "https://cf.geekdo-images.com/Qtkb-UTvHa0-kxt_MK1nKw__thumb/img/MfKsnJUTx9IQV-o12Fahxx5IaDQ=/fit-in/200x150/filters:strip_icc()/pic3763549.jpg",
      "minplayers": "2",
      "maxplayers": "4",
      "playingtime": "60",
      "id": "221107",
      "image": "https://cf.geekdo-images.com/Qtkb-UTvHa0-kxt_MK1nKw__original/img/wJiRr7lBmWSKcRS3lPpvKIPMgQQ=/0x0/filters:format(jpeg)/pic3763549.jpg",
      "description": "Description from the publisher:&amp;#10;&amp;#10;The world almost ended 71 years ago...&amp;#10;&amp;#10;The plague came out of nowhere and ravaged the world. Most died within a week. Nothing could stop it. The world did its best. It wasn't good enough.&amp;#10;&amp;#10;For three generations, we, the last fragments of humanity have lived on the seas, on floating stations called &amp;quot;havens.&amp;quot; Far from the plague, we are able to provide supplies to the mainland to keep them (and us) from succumbing completely.&amp;#10;&amp;#10;We've managed to keep a network of the largest known cities in the world alive. Things have been tough the past few years. Cities far away from the havens have fallen off our grid...&amp;#10;&amp;#10;Tomorrow, a small group of us head out into what's left of the world. We don't know what we'll find.&amp;#10;&amp;#10;Pandemic Legacy: Season 2 is an epic cooperative game for 2 to 4 players. Unlike most other games, this one is working against you. What's more, some of the actions you take in Pandemic Legacy will carry over to future games. No two worlds will ever be alike!&amp;#10;&amp;#10;Part of the Pandemic series.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Harry Potter: Hogwarts Battle",
      "thumbnail": "https://cf.geekdo-images.com/ugYBvYxyWyx8_BqaFKZlGw__thumb/img/dMUeyEvlaSp_x0EoQBuCHfwFCtM=/fit-in/200x150/filters:strip_icc()/pic3518231.jpg",
      "minplayers": "2",
      "maxplayers": "4",
      "playingtime": "60",
      "id": "199042",
      "image": "https://cf.geekdo-images.com/ugYBvYxyWyx8_BqaFKZlGw__original/img/7ifajkbPyvyn8GUavbNOjWZbNYU=/0x0/filters:format(jpeg)/pic3518231.jpg",
      "description": "The forces of evil are threatening to overrun Hogwarts castle in Harry Potter: Hogwarts Battle, a cooperative deck-building game, and it's up to four students to ensure the safety of the school by defeating villains and consolidating their defenses. In the game, players take on the role of a Hogwarts student: Harry, Ron, Hermione or Neville, each with their own personal deck of cards that's used to acquire resources.&amp;#10;&amp;#10;By gaining influence, players add more cards to their deck in the form of iconic characters, spells, and magical items. Other cards allow them to regain health or fight against villains, keeping them from gaining power. The villains set back players with their attacks and Dark Arts. Only by working together will players be able to defeat all of the villains, securing the castle from the forces of evil.&amp;#10;&amp;#10;&amp;mdash;description from the publisher&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Ticket to Ride",
      "thumbnail": "https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__thumb/img/a9rsFV6KR0aun8GobhRU16aU8Kc=/fit-in/200x150/filters:strip_icc()/pic38668.jpg",
      "minplayers": "2",
      "maxplayers": "5",
      "playingtime": "60",
      "id": "9209",
      "image": "https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__original/img/LgzEsQlF3xkSEQLoorc8ntiYiIY=/0x0/filters:format(jpeg)/pic38668.jpg",
      "description": "With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes. Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn. Additional points come to those who fulfill Destination Tickets &amp;ndash; goal cards that connect distant cities; and to the player who builds the longest continuous route.&amp;#10;&amp;#10;&amp;quot;The rules are simple enough to write on a train ticket &amp;ndash; each turn you either draw more cards, claim a route, or get additional Destination Tickets,&amp;quot; says Ticket to Ride author, Alan R. Moon. &amp;quot;The tension comes from being forced to balance greed &amp;ndash; adding more cards to your hand, and fear &amp;ndash; losing a critical route to a competitor.&amp;quot;&amp;#10;&amp;#10;Ticket to Ride continues in the tradition of Days of Wonder's big format board games featuring high-quality illustrations and components including: an oversize board map of North America, 225 custom-molded train cars, 144 illustrated cards, and wooden scoring markers.&amp;#10;&amp;#10;Since its introduction and numerous subsequent awards, Ticket to Ride has become the BoardGameGeek epitome of a &amp;quot;gateway game&amp;quot; -- simple enough to be taught in a few minutes, and with enough action and tension to keep new players involved and in the game for the duration.&amp;#10;&amp;#10;Part of the Ticket to Ride series.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Memoir '44",
      "thumbnail": "https://cf.geekdo-images.com/2AjxTtgBtZVst8wOAk1NAA__thumb/img/ymrloLOMqIyQYu4JkYkB5T16W1I=/fit-in/200x150/filters:strip_icc()/pic6974498.jpg",
      "minplayers": "2",
      "maxplayers": "8",
      "playingtime": "60",
      "id": "10630",
      "image": "https://cf.geekdo-images.com/2AjxTtgBtZVst8wOAk1NAA__original/img/Ro6pGYz0WFmCOP5ytZ6Z40KhoZ4=/0x0/filters:format(jpeg)/pic6974498.jpg",
      "description": "Memoir '44 is a historical boardgame where players face-off in stylized battles of some of the most famous historic battles of World War II including Omaha Beach, Pegasus Bridge, Operation Cobra and the Ardennes.&amp;#10;&amp;#10;Memoir '44 includes over 15 different battle scenarios and features a double-sided hex game board for both beach landings and countryside combat. Each scenario mimics the historical terrain, troop placements and objectives of each army. Commanders deploy troops through Command and Tactic cards, applying the unique skills of his units -- infantry, paratrooper, tank, artillery, and even resistance fighters -- to their greatest strength.&amp;#10;&amp;#10;&amp;quot;By design, the game is not overly complex&amp;quot;, says Memoir '44 designer, Richard Borg. &amp;quot;The game mechanics, although simple, still require strategic card play, timely dice rolling and an aggressive yet flexible battle plan to achieve victory.&amp;quot; In addition to the large, double-sided gameboard, Memoir '44 includes 144 amazingly detailed army miniatures - including historically accurate infantry, tanks and artillery; 36 Obstacle pieces, 60 illustrated Command cards, 44 Special Terrain tiles, and 8 Custom Wooden dice.&amp;#10;&amp;#10;Memoir '44 is designed for 2 players but easily accommodates team play. And with Memoir '44 Overlord scenarios, players can use multiple boards and up to 8 players to conduct large scale operations, experiencing the challenges of troop coordination and military chain of command on a large scale battlefield. Average game length is between 30 and 60 minutes, encouraging match play where players can command first one side and then the other.&amp;#10;&amp;#10;The Memoir '44 series consists of the base game and a number of expansions.&amp;#10;&amp;#10;This game is based upon Richard Borg's Command and Colors system.&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Libertalia",
      "thumbnail": "https://cf.geekdo-images.com/LeUx57CGYdnIEsnGebOB0A__thumb/img/BRF-D_TW7oHr7t6Yh0F9wx_zFI4=/fit-in/200x150/filters:strip_icc()/pic1326136.jpg",
      "minplayers": "2",
      "maxplayers": "6",
      "playingtime": "60",
      "id": "125618",
      "image": "https://cf.geekdo-images.com/LeUx57CGYdnIEsnGebOB0A__original/img/ZMdpuswDvVy-I97-ws45isBIRO4=/0x0/filters:format(jpeg)/pic1326136.jpg",
      "description": "Captain Swallow has always dreamed of pocketing a large nest egg in order to retire on a remote island &amp;ndash; but he never counted on stiff competition from Captains Stanley Rackum, Dirk Chivers and others, greedy and cruel enemies who always manage to attack the same ships as him. If he wants to finally sink back and enjoy peaceful days in the sun, he must become the most cunning pirate!&amp;#10;&amp;#10;In Libertalia, you must thwart the plans of competitive pirates over the course of three rounds while using cards that show the same crew members as your piratical comrades-in-arms. Yes, not only do they attack the same ships, but they employ the same type of ravenous scum that you do! Can you take advantage of the powers of your characters at the right time? Will you be outdone by a pirate smarter than you? Jump into the water and prove your tactical skills!&amp;#10;&amp;#10;",
      "votes": 0
    },
    {
      "name": "Pandemic Legacy: Season 1",
      "thumbnail": "https://cf.geekdo-images.com/-Qer2BBPG7qGGDu6KcVDIw__thumb/img/NQQcjS31TO0DE246N9rpt0hd9eo=/fit-in/200x150/filters:strip_icc()/pic2452831.png",
      "minplayers": "2",
      "maxplayers": "4",
      "playingtime": "60",
      "id": "161936",
      "image": "https://cf.geekdo-images.com/-Qer2BBPG7qGGDu6KcVDIw__original/img/PlzAH7swN1nsFxOXbfUvE3TkE5w=/0x0/filters:format(png)/pic2452831.png",
      "description": "Pandemic Legacy is a co-operative campaign game, with an overarching story-arc played through 12-24 sessions, depending on how well your group does at the game. At the beginning, the game starts very similar to basic Pandemic, in which your team of disease-fighting specialists races against the clock to travel around the world, treating disease hotspots while researching cures for each of four plagues before they get out of hand.&amp;#10;&amp;#10;During a player's turn, they have four actions available, with which they may travel around in the world in various ways (sometimes needing to discard a card), build structures like research stations, treat diseases (removing one cube from the board; if all cubes of a color have been removed, the disease has been eradicated), trade cards with other players, or find a cure for a disease (requiring five cards of the same color to be discarded while at a research station). Each player has a unique role with special abilities to help them at these actions.&amp;#10;&amp;#10;After a player has taken their actions, they draw two cards. These cards can include epidemic cards, which will place new disease cubes on the board, and can lead to an outbreak, spreading disease cubes even further. Outbreaks additionally increase the panic level of a city, making that city more expensive to travel to.&amp;#10;&amp;#10;Each month in the game, you have two chances to achieve that month's objectives. If you succeed, you win and immediately move on to the next month. If you fail, you have a second chance, with more funding for beneficial event cards.&amp;#10;&amp;#10;During the campaign, new rules and components will be introduced. These will sometimes require you to permanently alter the components of the game; this includes writing on cards, ripping up cards, and placing permanent stickers on components. Your characters can gain new skills, or detrimental effects. A character can even be lost entirely, at which point it's no longer available for play.&amp;#10;&amp;#10;Part of the Pandemic series&amp;#10;&amp;#10;",
      "votes": 0
    }
  ]

  //Returns:

  if (presentList.length >= 1) {
    return (
      // <Text>Rating Screen will go here</Text>
      <View>
        <StatusBarSpacer />
        <RatingScreen gamesList={sampleGameData} formData={formData} />
      </View>
    )
  } else {
    return (
      <View>
        <StatusBarSpacer />
        <SetupScreen formData={formData} />
      </View>
    )
  }
}

export default App;
