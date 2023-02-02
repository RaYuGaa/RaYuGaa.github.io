const initialSection = document.querySelector("#initial");

const initialPrompt = "<span class='prompt'>PS F:\\web\\RayugaNub></span> <input type='text' id='userInput' placeholder='Type a command!' autofocus autocomplete='off'><br/><div class='systemOutput'></div>";
initialSection.innerHTML = initialPrompt;

let inputField = document.querySelector("#userInput");
let outputField = document.querySelectorAll(".systemOutput");

let keepValue = inputField.value;

const terminalCommands = {
    "help": "Use commands like <strong>whoami</strong>, <strong>intro</strong>, <strong>age</strong>, <strong>birthday</strong>, <strong>address</strong>, <strong>education</strong>, <strong>hobbies</strong>, <strong>skills</strong>, <strong>career</strong>, <strong>projects</strong>,  <strong>email</strong>, <strong>phone</strong>, <strong>social</strong>, <strong>form</strong>, <strong>font</strong>, and some other system commands!",

    "whoami": "<strong>Samuel Karki<strong> (RayugaNub)",

    "intro": "Hi there! I'm <strong>Samuel Karki</strong>, a student pursuing +2 Science, I am thoroughly invested in the realm of technology. My passion for technology has motivated me to continuously seek out new avenues for self-improvement and knowledge expansion. My areas of focus include web development, cybersecurity, cloud computing, web3, networking, and actually anything tech-related<strong><em>(Jack of all trades, master in none)</em></strong>. I am a driven self-starter who is unwavering in my commitment to honing my skills and staying ahead of the curve in my field. I have taken part in various technologically-focused initiatives, and I am always eager to seize new opportunities to advance my expertise. My ultimate aspiration is to become a recognized thought leader in the technology industry, making a significant positive impact through my work.",

    "age": "Seventeen (17)",
    "birthday": "March 10, 2005",
    "address": "Address Line 1: Biratnagar, Bargachhi, Morang<br>City: Biratnagar<br>Province: 1<br>ZIP Code: 56613<br>Country: Nepal",
    
    "education": "Studying Computer Science at <a onclick=\"window.open('https://arnikoplustwo.arnikofoundation.edu.np/home', '_blank')\">Arniko Awasiya Secondary School</a>,  Biratnagar, Nepal!",

    "hobbies": "Reading articles and watching tutorials on new technology-related topics; playing games, both fast-paced action games and strategic role-playing games; listening music from classical to alternative rock and loves to discover new artists and genres; dedicated cinephile and binge watcher.",

    "skills": "<ul><li>Learning full-stack web development with LAMP, LEMP and JAM stacks</li> <li>Web programming with HTML5, CSS3, JavaScript, PHP and MySQL,</li> <li>Learning Linux/UNIX (RedHat, Debian, Fedora),</li> <li>Learning Cloud, Serverless and Containerized Computing,</li> <li>Scripting in Bash, Batch, PowerShell and Python,</li> <li>Programming in C & C++ ,</li><li>Git and GitHub Version Control System,</li><li>Networking and Network Administration,</li> <li>Cryptography,</li><li>Learning Web3 and dApps</li></ul>",

    "career": "Establishing and following my <strong>Curiosity</strong> for building my Technology career!",

    "projects":"<ul><li><strong>Snake Game</strong> - <a onclick=\"window.open('https://github.com/RaYuGaa/snake-game', '_blank')\">GitHub</a></li><li><strong>Bash Scripts</strong> - <a onclick=\"window.open('https://github.com/RaYuGaa/bash-scripts', '_blank')\">GitHub</a></li><li><strong>Hangman</strong> - <a onclick=\"window.open('https://github.com/RaYuGaa/hangman', '_blank')\">GitHub</a></li><li><strong>Restaurant Billing System</strong> - <a onclick=\"window.open('https://github.com/RaYuGaa/billing-system', '_blank')\">GitHub</a></li><li>Plus, many more! Find the public repositories on <a onclick=\"window.open('https://github.com/RaYuGaa', '_blank')\">GitHub</a>!</li></ul>",


    "email": "karkisamuel45@gmail.com",
    "phone": "+977-9815326092",
    "social": "<span>Facebook</span>: <a onclick=\"window.open('https://www.facebook.com/mimi.karki', '_blank')\">Samuel Karki</a><br><span>Twitter</span>: <a onclick=\"window.open('https://twitter.com/mimi_nub', '_blank')\">Samuel Karki(@mimi_nub)</a><br><span>GitHub</span>: <a onclick=\"window.open('https://github.com/RaYuGaa/', '_blank')\">RayugaN00b (@RaYuGaa)</a><br><span>Telegram</span>: <a onclick=\"window.open('https://t.me/RayugaNub', '_blank')\">@DRAGON EMPEROR</a><br><span>Instagram</span>: <a onclick=\"window.open('https://www.instagram.com/samueln00b_69/', '_blank')\">@samueln00b_69</a>",


    "font": "<strong>Fira Code</strong> <<a onclick=\"window.open('https://fonts.google.com/specimen/Fira+Code', '_blank')\">Find on Google Fonts!</a>>",
    "uname": "SamuelOS",
    "uname -a": "SamuelOS | RayugaNub",
    "hostname": "RayugaNub",
    "pwd": "F:\\web\\RayugaNub",
    "ls": "<p><strong>Directory:</strong> F:\\web\\RayugaNub</p><strong>Elements:</strong> assets/, samuel.webmanifest, index.html, terminal.html",
    "sudo": "This isn't a UNIX-based Operating System.",
    "cd": "You aren't allowed you to change directories.",
    "rm": "Before running this command, make sure you know that the web front-end can't perform actions in the server."
}

Object.assign(terminalCommands, {
    "main": terminalCommands["about"],
    "who": terminalCommands["about"],

    "get skills": terminalCommands["skills"],
    "get --skills": terminalCommands["skills"],
    "find skills": terminalCommands["skills"],
    "find --skills": terminalCommands["skills"],
    "know skills": terminalCommands["skills"],
    "know --skills": terminalCommands["skills"],
    "your skills": terminalCommands["skills"],
    "my skills": terminalCommands["skills"],

    "what are you studying": terminalCommands["education"],
    "study": terminalCommands["education"],
    "your education": terminalCommands["education"],
    "my education": terminalCommands["education"],
    
    "what are you doing": terminalCommands["career"],
    "current work": terminalCommands["career"],
    "involvement": terminalCommands["career"],
    "your involvement": terminalCommands["career"],
    "my involvement": terminalCommands["career"],

    "see projects": terminalCommands["projects"],
    "find projects": terminalCommands["projects"],
    "find --projects": terminalCommands["projects"],
    "your projects": terminalCommands["projects"],
    "my projects": terminalCommands["projects"],

    "get font": terminalCommands["font"],
    "get --font": terminalCommands["font"],
    "which font": terminalCommands["font"],
    "which --font": terminalCommands["font"],

    "get email": terminalCommands["email"],
    "get --email": terminalCommands["email"],
    "contact email": terminalCommands["email"],
    "contact --email": terminalCommands["email"],
    "your email": terminalCommands["email"],
    "my email": terminalCommands["email"],

    "get phone": terminalCommands["phone"],
    "get --phone": terminalCommands["phone"],
    "contact phone": terminalCommands["phone"],
    "contact --phone": terminalCommands["phone"],
    "contact number": terminalCommands["phone"],
    "contact --number": terminalCommands["phone"],
    "your phone": terminalCommands["phone"],
    "my phone": terminalCommands["phone"],

    "get social": terminalCommands["social"],
    "get --social": terminalCommands["social"],
    "contact social": terminalCommands["social"],
    "contact --social": terminalCommands["social"],
    "get profile": terminalCommands["social"],
    "get --profile": terminalCommands["social"],
    "contact profile": terminalCommands["social"],
    "contact --profile": terminalCommands["social"],
});

const eventListener = () => {
    inputField.addEventListener("keyup", (event) => {
        if(event.keyCode === 13) {
            inputField.setAttribute("readonly", "true");
            keepValue = inputField.value;
            event.preventDefault();
            inputField.disabled = true;
            inputField.setAttribute("value", keepValue);
            inputField.removeAttribute("id");
            if(keepValue.toLowerCase() == "clear" || keepValue.toLowerCase() == "cls") initialSection.innerHTML = initialPrompt;
            else {
                let systemOutput = executeCommand(keepValue.toLowerCase());
                outputField[outputField.length - 1].innerHTML = systemOutput;
                initialSection.innerHTML += "<br />" + initialPrompt;
            }
            inputField = document.querySelector("#userInput");
            outputField = document.querySelectorAll(".systemOutput");
            inputField.focus();
            eventListener();
        } else if(event.keyCode === 38){
            inputField.value = keepValue;
        }
    });
}

eventListener();

document.body.addEventListener('click', () => {
    inputField.focus();
}, true);

const executeCommand = (userInput) => {
    if(userInput == "exit" || userInput == "quit"){
        window.parent.postMessage("closeTerminal", '*');
        return "Now, the Terminal will be closed.";
    } else if(terminalCommands.hasOwnProperty(userInput)){
        return terminalCommands[userInput];
    } else{
        return "The term isn't recognized as the name of a cmdlet, function, script file, or operable program."
    }
}