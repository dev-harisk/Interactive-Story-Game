const storyContainer=document.getElementById('story-container')
const storyTitle=document.getElementById('title');
const storyElement = document.getElementById('scene');
const choicesElement = document.getElementById('choices');
const audio = document.getElementById('theme-music');
const playBtn=document.getElementById('play-theme');
const playIcon=document.getElementById('play-icon');
const muteBtn=document.getElementById('mute-theme');
const muteIcon=document.getElementById('mute-icon');
var isPlay=false;
var isMuted=false;
/* const story = {
    start: {
        text: "You wake up in a dark forest. Do you want to go left or right?",
        choices: {
            left: 'leftPath',
            right: 'rightPath'
        }
    },
    leftPath: {
        text: "You encounter a river. Do you want to swim across or walk along the bank?",
        choices: {
            swim: 'swimPath',
            walk: 'walkPath'
        }
    },
    rightPath: {
        text: "You find a cave. Do you want to enter or go back?",
        choices: {
            enter: 'cavePath',
            back: 'start'
        }
    },
    swimPath: {
        text: "You swam across and found treasure! You win!",
        choices: {}
    },
    walkPath: {
        text: "You walked along the bank and got lost. Game over.",
        choices: {}
    },
    cavePath: {
        text: "Inside the cave, you find a sleeping dragon. Do you want to sneak out or wake it up?",
        choices: {
            sneak: 'sneakPath',
            wake: 'wakePath'
        }
    },
    sneakPath: {
        text: "You successfully sneaked out! You win!",
        choices: {}
    },
    wakePath: {
        text: "The dragon wakes up and chases you. Game over.",
        choices: {}
    }
}; */

/* const story = {
    start: {
        text: "You find yourself at the edge of a mysterious forest known as the Enchanted Forest. Tales of magical creatures and hidden treasures fill the air, but so do warnings of dangers lurking within. As you stand at the entrance, you feel a mix of excitement and fear. Will you:",
        choices: {
            Enter: 'enterForest',
           // Back: null
        }
    },
    enterForest: {
        text: "You take a deep breath and step into the forest. The trees tower above you, their leaves shimmering with an otherworldly glow. As you walk deeper, you hear a rustling sound.",
        choices: {
            Investigate: 'investigateSound',
            Ignore: 'ignoreSound'
        }
    },
    investigateSound: {
        text: "You cautiously approach the source of the rustling and discover a small, frightened fairy caught in a spider's web.",
        choices: {
            Help: 'helpFairy',
            Leave: 'leaveFairy'
        }
    },
    ignoreSound: {
        text: "You choose to ignore the sound and walk deeper into the forest. Suddenly, you stumble upon a clearing filled with sparkling water and flowers.",
        choices: {
            Drink: 'drinkWater',
            Pick: 'pickFlowers'
        }
    },
    helpFairy: {
        text: "You gently free the fairy from the web. Grateful, she grants you a wish. You wish for the ability to communicate with animals.",
        choices: {
            Continue: 'findOwl'
        }
    },
    leaveFairy: {
        text: "You decide not to get involved and continue walking. However, the forest seems to darken around you. You hear whispers of the creatures that inhabit this place, warning you that kindness is the key to survival.",
        choices: {
            Continue: 'lostInForest'
        }
    },
    drinkWater: {
        text: "You take a sip of the sparkling water and feel a rush of energy. You gain the ability to run faster than ever!",
        choices: {
            Continue: 'heroOfForest'
        }
    },
    pickFlowers: {
        text: "As you pick the flowers, you hear a low growl behind you. You turn to see a large, angry bear.",
        choices: {
            Run: 'runAway',
            Calm: 'calmBear'
        }
    },
    findOwl: {
        text: "As you continue your journey, you meet a wise old owl who becomes your guide, helping you navigate the enchanted forest.",
        choices: {
            Explore: 'treasureFound'
        }
    },
    lostInForest: {
        text: "Feeling lost and alone, you wander the forest forever, haunted by the choices you didn’t make.",
        choices: {}
    },
    heroOfForest: {
        text: "With your newfound speed, you race through the forest, discovering hidden paths and treasures, eventually becoming a hero of the Enchanted Forest.",
        choices: {}
    },
    runAway: {
        text: "You turn and sprint as fast as you can, narrowly escaping the bear's grasp.",
        choices: {}
    },
    calmBear: {
        text: "You remember the stories of how animals can sense kindness. You speak softly and extend your hand. The bear sniffs your hand and surprisingly calms down.",
        choices: {
            Explore: 'friendWithBear'
        }
    },
    treasureFound: {
        text: "Together with the owl, you find a hidden treasure and become the protectors of the forest. The fairy visits you often, and together, you maintain peace in the Enchanted Forest.",
        choices: {}
    },
    friendWithBear: {
        text: "You form a bond with the bear, who becomes your protector in the forest. Together, you explore the wonders of the Enchanted Forest, making friends with other creatures along the way.",
        choices: {
            Return: 'fairyAdventures',
            Seek: 'hiddenTreasure'
        }
    },
    fairyAdventures: {
        text: "You and the bear return to the fairy, who introduces you to more magical creatures and teaches you about the secrets of the forest.",
        choices: {
            Guardian: 'guardianOfForest',
            Help: 'fairyTasks'
        }
    },
    hiddenTreasure: {
        text: "With the bear by your side, you follow clues that lead you to a hidden treasure chest filled with gold and jewels.",
        choices: {
            Share: 'shareTreasure',
            Keep: 'selfishTreasure'
        }
    },
    guardianOfForest: {
        text: "You become a guardian of the forest, ensuring that peace and harmony reign. The forest flourishes under your watchful eye.",
        choices: {}
    },
    fairyTasks: {
        text: "The fairy tasks you with helping the creatures of the forest. You embark on various quests, learning about the magical ecosystem and forming lasting friendships.",
        choices: {
            Continue: 'forestUnity'
        }
    },
    shareTreasure: {
        text: "You decide to share the treasure with the creatures of the forest. They celebrate your generosity and appoint you as their leader, fostering a new era of cooperation and friendship.",
        choices: {
            Celebrate: 'forestUnity'
        }
    },
    selfishTreasure: {
        text: "You keep the treasure for yourself, but the forest grows dark and unwelcoming. The creatures shun you, and you realize that true wealth lies in friendship, not gold.",
        choices: {
            Reflect: 'lostInForest'
        }
    },
    forestUnity: {
        text: "With your newfound role, you bring together all the creatures of the Enchanted Forest. Together, you create a sanctuary where magic thrives and everyone is treated with kindness.",
        choices: {
            Continue: 'happilyEverAfter'
        }
    },
    happilyEverAfter: {
        text: "As the years pass, you become a legend in the Enchanted Forest. Tales of your bravery and kindness are told for generations, and the forest remains a place of wonder and magic.",
        choices: {}
    }
}; */

/*  const story = {
    title:'The Path of Innocence',
    start: {
        text: "You are a young boy named Alder, living in the peaceful village of Greymoor, nestled at the edge of the Mystic Mountains. One day, while playing in the fields, you overhear villagers talking about dark forces rising in the kingdom. As you ponder this, your father calls you to help with farm work. Will you:",
        choices: {
            Help: 'helpFather',
            Investigate: 'investigateVillage'
        }
    },
    helpFather: {
        text: "You decide to help your father on the farm. While working, you learn important skills about hard work, patience, and dedication. As the sun sets, your father praises you for your effort. He gives you advice about the importance of responsibility in a changing world.",
        choices: {
            Explore: 'villageFestival',
            Talk: 'talkWithFather'
        }
    },
    investigateVillage: {
        text: "You sneak away from the farm to investigate the strange talk in the village. There, you overhear the village elder speaking of a distant king’s call for soldiers to fight the rising evil in the north. Will you:",
        choices: {
            Enlist: 'enlistInArmy',
            Return: 'returnHome'
        }
    },
    talkWithFather: {
        text: "You sit with your father after dinner. He tells you stories about the times when the kingdom was threatened before, how people had to unite to protect what they loved. His words leave you with a sense of duty.",
        choices: {
            Sleep: 'nextMorning',
            Ask: 'askAboutWar'
        }
    },
    nextMorning: {
        text: "The next morning, you wake up with a clearer sense of purpose. You hear the village bells ringing. Something has happened, and you can feel the tension in the air.",
        choices: {
            Investigate: 'investigateVillage',
            Stay: 'stayAndHelpFather'
        }
    },
    villageFestival: {
        text: "Days later, the village hosts its annual festival. The usual joy is tempered by rumors of war spreading across the land. Villagers are whispering about the king’s army recruiting young men. At the festival, you encounter a recruiter. Do you:",
        choices: {
            Enlist: 'enlistInArmy',
            Decline: 'stayInVillage'
        }
    },
    enlistInArmy: {
        text: "You decide to enlist in the king's army. Your father is proud but worried. You are sent to the capital for training under the royal soldiers. You are taught the art of combat and strategy, learning from seasoned warriors. After months of training, you are sent on your first mission. Do you:",
        choices: {
            Fight: 'fightInBattle',
            Question: 'questionOrders'
        }
    },
    returnHome: {
        text: "You return home and help your father with the farm, but you feel uneasy, like you're missing something bigger. Your days are filled with routine, but the thought of what’s happening outside the village haunts you.",
        choices: {
            Continue: 'villageFestival',
            Explore: 'exploreForest'
        }
    },
    stayInVillage: {
        text: "You choose to stay in the village, helping your family as you always have. One day, you hear war drums in the distance. The army is coming, not to recruit, but to defend the village from an impending attack. Will you:",
        choices: {
            Defend: 'defendVillage',
            Hide: 'hideFromArmy'
        }
    },
    fightInBattle: {
        text: "You are sent to the front lines, where the chaos of battle consumes you. You fight bravely, but the horrors of war leave you scarred. Your leadership and bravery earn you respect, but the weight of lost comrades stays with you.",
        choices: {
            Continue: 'battleAftermath',
            Return: 'returnHome'
        }
    },
    questionOrders: {
        text: "You begin to question the orders you receive. Some of the tactics seem ruthless, and you feel a moral conflict brewing inside you. Will you:",
        choices: {
            Follow: 'followOrders',
            Rebel: 'rebelAgainstCommander'
        }
    },
    defendVillage: {
        text: "You gather the villagers and lead the defense against the approaching army. Your quick thinking and bravery inspire others, and together you manage to repel the attackers. The village is damaged, but safe for now.",
        choices: {
            Rebuild: 'rebuildVillage',
            Pursue: 'pursueEnemy'
        }
    },
    hideFromArmy: {
        text: "You hide with your family in a secret cellar as the army approaches. You hear the sounds of battle above, and when the dust settles, the village is in ruins. Emerging from your hiding place, you must now face a new, uncertain reality.",
        choices: {
            Rebuild: 'rebuildVillage',
            Leave: 'leaveVillage'
        }
    },
    exploreForest: {
        text: "You venture into the forest near your village, seeking solace from the thoughts of war. Deep within, you stumble upon an ancient relic, glowing with a faint, mystical light. This discovery could change your fate. Will you:",
        choices: {
            Take: 'takeRelic',
            Leave: 'leaveRelic'
        }
    },
    rebelAgainstCommander: {
        text: "You defy your commander, refusing to carry out a ruthless order. Your actions lead to conflict within your unit. You are jailed for insubordination, but soon, others begin to support your cause.",
        choices: {
            Escape: 'escapePrison',
            Wait: 'waitForTrial'
        }
    },
    followOrders: {
        text: "You suppress your doubts and carry out the orders, though it leaves a stain on your conscience. Over time, you rise in rank, but the moral burden weighs heavily on your soul.",
        choices: {
            Continue: 'becomeGeneral',
            Retire: 'returnHome'
        }
    },
    rebuildVillage: {
        text: "You lead the effort to rebuild your village after the battle. Your leadership unites the villagers, and together, you create a stronger, more fortified community.",
        choices: {
            Defend: 'defendVillageAgain',
            Leave: 'leaveVillage'
        }
    },
    pursueEnemy: {
        text: "Driven by a desire for justice, you lead a group of villagers in pursuit of the enemy. You track them to a nearby camp, where you must make a difficult choice: attack and risk everything, or return and protect your home.",
        choices: {
            Attack: 'enemyCamp',
            Return: 'returnVillage'
        }
    },
    takeRelic: {
        text: "You take the relic, feeling a surge of power flow through you. As you return to the village, strange events begin to occur. The relic gives you strength, but also brings attention from forces beyond your understanding.",
        choices: {
            Investigate: 'investigateRelic',
            Hide: 'hideRelic'
        }
    },
    leaveRelic: {
        text: "You decide to leave the relic where it lies. As you walk away, you feel a sense of peace, knowing that some things are not meant to be disturbed. However, you can't shake the feeling that you left something important behind.",
        choices: {
            Return: 'exploreForestAgain',
            Forget: 'moveOn'
        }
    },
    battleAftermath: {
        text: "After the battle, you find yourself haunted by memories of the war. The battlefield is littered with fallen comrades, and you question the cost of the fight.",
        choices: {
            Heal: 'seekHealer',
            Fight: 'continueBattles'
        }
    },
    escapePrison: {
        text: "You escape from the prison with the help of sympathetic soldiers. Now, you must choose: flee the kingdom, or continue your rebellion from the shadows.",
        choices: {
            Flee: 'fleeKingdom',
            Rebel: 'organizeRebellion'
        }
    },
    waitForTrial: {
        text: "You wait for your trial, where you plan to make a stand against the injustice you’ve seen. The king himself may hear your case, but your fate is uncertain.",
        choices: {
            Trial: 'faceKing',
            Escape: 'escapePrison'
        }
    },
    becomeGeneral: {
        text: "Over time, you rise to the rank of general. Your strategic mind wins many battles, but the cost of your decisions leaves you isolated and feared by many. Do you:",
        choices: {
            Continue: 'legendOfWar',
            StepDown: 'retireAsGeneral'
        }
    },
    returnHome: {
        text: "After years in the army, you return to your village, where the fields are quiet and the air is calm. You try to find peace, but the memories of battle haunt you.",
        choices: {
            Rebuild: 'rebuildVillage',
            Reflect: 'reflectOnLife'
        }
    },
    legendOfWar: {
        text: "Your name becomes legend, both for your victories and your ruthless efficiency. People speak your name with awe and fear. Though you have secured the kingdom's future, your personal legacy remains clouded by your choices.",
        choices: {}
    },
    retireAsGeneral: {
        text: "You decide to retire from the army and spend the rest of your days in quiet contemplation, away from the battlefield. Though peace eludes you at times, you find solace in knowing you did what you could for the kingdom.",
        choices: {}
    },
    faceKing: {
        text: "You stand before the king, making your case for justice and honor. The court listens intently, and the king is moved by your words. He grants you a pardon and offers you a place in his council.",
        choices: {
            Accept: 'councilMember',
            Decline: 'leaveKingdom'
        }
    },
    councilMember: {
        text: "As a member of the king's council, you help shape the future of the kingdom. Your wisdom is respected, and your decisions bring prosperity and peace to the land.",
        choices: {}
    },
    leaveKingdom: {
        text: "You choose to leave the kingdom, seeking a new life far from the politics and battles of your homeland. Your future is uncertain, but the horizon holds the promise of new adventures.",
        choices: {}
    }
};  */

const story = {
    title: 'MONEY HEIST',
    start: {
        text: "You are the mastermind of a group planning a heist on a high-security bank. Your crew is loyal, but trust is fragile. As the day of the heist approaches, tensions rise. What will you do?",
        choices: {
            Review: 'reviewPlan',
            KeepSecrets: 'keepSecrets'
        }
    },
    reviewPlan: {
        text: "You gather everyone to go over the details. The crew feels more united after discussing the plan openly. What do you do next?",
        choices: {
            AddHacker: 'addHacker',
            StickWithTeam: 'stickWithTeam'
        }
    },
    keepSecrets: {
        text: "Your crew feels left out, creating a rift. What do you do next?",
        choices: {
            MendRelationships: 'mendRelationships',
            PushForward: 'pushForward'
        }
    },
    addHacker: {
        text: "You recruit a skilled hacker, but some crew members are wary of this stranger. What do you do?",
        choices: {
            TrustHacker: 'trustHacker',
            TrialRun: 'trialRun'
        }
    },
    stickWithTeam: {
        text: "You feel confident, but your crew seems a bit anxious. What do you do next?",
        choices: {
            TeamBuilding: 'teamBuilding',
            PracticeDrills: 'practiceDrills'
        }
    },
    mendRelationships: {
        text: "You have a heart-to-heart with your crew, and they agree to trust you for the heist. What do you do next?",
        choices: {
            FocusContingency: 'focusContingency',
            ReviewTimeline: 'reviewTimeline'
        }
    },
    pushForward: {
        text: "The crew is tense and skeptical as the heist day approaches. What do you do?",
        choices: {
            ReassureCrew: 'reassureCrew',
            ProceedWithPlan: 'proceedWithPlan'
        }
    },
    trustHacker: {
        text: "You trust the hacker and proceed. The night of the heist arrives. As you enter the bank, alarms go off. The hacker accidentally triggered them. What do you do?",
        choices: {
            SplitCrew: 'splitCrew',
            FightWayOut: 'fightWayOut'
        }
    },
    trialRun: {
        text: "You hold a trial run to test the hacker's skills. The crew feels more secure. What do you do next?",
        choices: {
            FinalizePlan: 'finalizePlan',
            DoubleCheckIntel: 'doubleCheckIntel'
        }
    },
    teamBuilding: {
        text: "You organize a team-building exercise, and it helps build morale. The crew feels connected and ready for the challenge. What do you do next?",
        choices: {
            ReviewEscapeRoutes: 'reviewEscapeRoutes',
            GatherIntel: 'gatherIntel'
        }
    },
    practiceDrills: {
        text: "You focus on practice drills, sharpening your crew's skills. They feel more confident. What do you do next?",
        choices: {
            TestSecuritySystems: 'testSecuritySystems',
            PlanCommunications: 'planCommunications'
        }
    },
    focusContingency: {
        text: "You focus on contingency plans, preparing for every possible outcome. What do you do next?",
        choices: {
            FinalizeDetails: 'finalizeDetails',
            ReviewTeamRoles: 'reviewTeamRoles'
        }
    },
    reviewTimeline: {
        text: "You review the heist timeline with the crew, ensuring everyone knows their roles. What do you do next?",
        choices: {
            ConductFinalChecks: 'conductFinalChecks',
            DiscussEscapePlan: 'discussEscapePlan'
        }
    },
    reassureCrew: {
        text: "You attempt to reassure your crew, but some remain skeptical. What do you do?",
        choices: {
            ShowConfidence: 'showConfidence',
            OfferIncentives: 'offerIncentives'
        }
    },
    proceedWithPlan: {
        text: "You go ahead with the plan despite their discomfort. Tensions run high. What do you do next?",
        choices: {
            PrepareForChaos: 'prepareForChaos',
            ChangePlan: 'changePlan'
        }
    },
    splitCrew: {
        text: "You split the crew to divert attention, but it creates confusion. What do you do?",
        choices: {
            Regroup: 'regroup',
            ContinueOnYourOwn: 'continueOnYourOwn'
        }
    },
    fightWayOut: {
        text: "You choose to fight your way out, but the police are closing in. What do you do?",
        choices: {
            MakeAStand: 'makeAStand',
            Retreat: 'retreat'
        }
    },
    finalizePlan: {
        text: "You finalize the plan with everyone feeling secure. The heist goes smoothly, and you escape with the loot.",
        choices: {}
    },
    doubleCheckIntel: {
        text: "You double-check the intel, and everything seems in place. The heist goes off without a hitch.",
        choices: {}
    },
    reviewEscapeRoutes: {
        text: "You review escape routes and find a perfect getaway. The heist is successful!",
        choices: {}
    },
    gatherIntel: {
        text: "You gather intel on security systems and find a flaw. This helps you during the heist.",
        choices: {}
    },
    testSecuritySystems: {
        text: "You test security systems and discover a vulnerability. You exploit it during the heist.",
        choices: {}
    },
    planCommunications: {
        text: "You plan communications meticulously. Everything runs like clockwork.",
        choices: {}
    },
    finalizeDetails: {
        text: "You finalize every detail with the crew, and they feel prepared. The heist goes according to plan.",
        choices: {}
    },
    reviewTeamRoles: {
        text: "You review everyone's roles, ensuring everyone is ready. The heist is successful.",
        choices: {}
    },
    conductFinalChecks: {
        text: "You conduct final checks, and everyone feels prepared. The heist runs smoothly.",
        choices: {}
    },
    discussEscapePlan: {
        text: "You discuss the escape plan in detail, ensuring no one gets left behind. The heist is a success.",
        choices: {}
    },
    showConfidence: {
        text: "You show confidence, and the crew starts to believe in the plan. The heist proceeds as planned.",
        choices: {}
    },
    offerIncentives: {
        text: "You offer incentives to the crew, which boosts morale. The heist goes smoothly.",
        choices: {}
    },
    prepareForChaos: {
        text: "You prepare for chaos, and your crew is ready to handle anything. The heist is a success.",
        choices: {}
    },
    changePlan: {
        text: "You change the plan last minute, and it leads to confusion. The heist faces complications.",
        choices: {}
    },
    regroup: {
        text: "You manage to regroup, but time is running out. You must make a quick decision.",
        choices: {
            Rush: 'rush',
            SlowDown: 'slowDown'
        }
    },
    continueOnYourOwn: {
        text: "You continue on your own but face obstacles. What will you do next?",
        choices: {
            Fight: 'fight',
            Hide: 'hide'
        }
    },
    makeAStand: {
        text: "You make a stand against the police but realize it's a losing battle. What do you do?",
        choices: {
            Surrender: 'surrender',
            Escape: 'escape'
        }
    },
    retreat: {
        text: "You retreat to safety but lose some of the loot. What do you do next?",
        choices: {
            PlanAgain: 'planAgain',
            LayLow: 'layLow'
        }
    },
    rush: {
        text: "You rush to the exit, but a security guard spots you. You must act quickly.",
        choices: {
            Confront: 'confront',
            Distract: 'distract'
        }
    },
    slowDown: {
        text: "You slow down and think, allowing the crew to regroup. You exit successfully.",
        choices: {}
    },
    fight: {
        text: "You fight bravely but get injured in the process. The heist was partially successful.",
        choices: {}
    },
    hide: {
        text: "You hide and avoid detection. You manage to escape, but the crew's fate is uncertain.",
        choices: {}
    },
    surrender: {
        text: "You surrender, and while the crew escapes, you face consequences alone.",
        choices: {}
    },
    escape: {
        text: "You escape successfully, but at the cost of your reputation. The heist goes down in history.",
        choices: {}
    },
    planAgain: {
        text: "You plan again for a bigger score, but the risk is higher. What do you do?",
        choices: {
            RecruitMore: 'recruitMore',
            UseExistingCrew: 'useExistingCrew'
        }
    },
    layLow: {
        text: "You lay low for a while, allowing tensions to cool. You contemplate your next move.",
        choices: {}
    },
    confront: {
        text: "You confront the guard, managing to intimidate him into letting you pass.",
        choices: {}
    },
    distract: {
        text: "You create a distraction, allowing yourself and your crew to escape without detection.",
        choices: {}
    },
    recruitMore: {
        text: "You recruit more crew members, but it adds complexity to the heist. What do you do?",
        choices: {
            Reassess: 'reassess',
            KeepItSimple: 'keepItSimple'
        }
    },
    useExistingCrew: {
        text: "You decide to use your existing crew, leading to a familiar but potentially less effective outcome.",
        choices: {}
    },
    reassess: {
        text: "You reassess your plans and find new ways to ensure success. The next heist will be even more epic.",
        choices: {}
    },
    keepItSimple: {
        text: "You keep it simple, leading to a straightforward but effective heist. Your reputation grows.",
        choices: {}
    }
};


/* // Function to display the current scene
function displayScene(sceneKey) {
    const scene = story[sceneKey];
    console.log(scene.text);
    if (scene.choices.length > 0) {
        scene.choices.forEach((choice, index) => {
            console.log(`${index + 1}: ${choice.text}`);
        });
    } else {
        console.log("The story has come to an end.");
    }
}
 */
/* // Example of starting the story
displayScene('start'); */

window.onload = () => {
    startGame();

};
function formatButtonText(choice) {
    return choice.replace(/([A-Z])/g, ' $1') // Add space before capital letters
                 .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
}
function showStory(sceneKey) {
    const currentStory = story[sceneKey];
    storyContainer.classList.remove('zoom', 'in');
    //setTimeout(() => {
        storyElement.innerText = currentStory.text;
        choicesElement.innerHTML = '';

        for (const choice in currentStory.choices) {
            const button = document.createElement('button');
            button.innerText = formatButtonText(choice);
            button.onclick = () => showStory(currentStory.choices[choice]);
            choicesElement.appendChild(button);
            
        }
        storyContainer.classList.add('zoom', 'in'); // Add classes for zoom in
   // }, 1000);
}

function startGame() {
    storyTitle.innerText=story.title;
    showStory('start');
}

playBtn.addEventListener('click',()=>{
    if(!isPlay){
        audio.play();
        isPlay=true;
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
    else{
        audio.pause();
        isPlay=false;
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
    
});

muteBtn.addEventListener('click',()=>{
    if(!isMuted){
        audio.muted=true;
        isMuted=true;
        muteIcon.classList.remove('fa-volume-high');
        muteIcon.classList.add('fa-volume-xmark');
    }
    else{
        audio.muted=false;
        isMuted=false;
        muteIcon.classList.remove('fa-volume-xmark');
        muteIcon.classList.add('fa-volume-high');
    }
});


