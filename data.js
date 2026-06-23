// MVER Official Data Matrix Configuration

// 1. THE TOP 10 LEADERBOARD (Home Page View)
const leaderboardData = [
    { rank: "#1", id: "confuxion", name: "confuxion", tier: "A-", colorClass: "color-a", borderColor: "#55efc4" },
    { rank: "#2", id: "sxmple", name: "sxmple", tier: "B+", colorClass: "color-b", borderColor: "#f1c40f" },
    { rank: "#3", id: "TimmyLoal", name: "TimmyLoal", tier: "B+", colorClass: "color-b", borderColor: "#f1c40f" },
    { rank: "#4", id: "Game1k", name: "Game1K", tier: "B+", colorClass: "color-b", borderColor: "#f1c40f" },
    { rank: "#5", id: "Vorthexis", name: "Vorthexis", tier: "B", colorClass: "color-b", borderColor: "#f1c40f" },
    { rank: "#6", id: "Normal", name: "Normal", tier: "B-", colorClass: "color-b", borderColor: "#f1c40f" },
    { rank: "#7", id: "x9jm", name: "x9jm", tier: "C+", colorClass: "color-c", borderColor: "#ff9f43" },
    { rank: "#8", id: "Possessed_YT", name: "Possessed_YT", tier: "C+", colorClass: "color-c", borderColor: "#ff9f43" },
    { rank: "#9", id: "Blade", name: "Blade", tier: "C+", colorClass: "color-c", borderColor: "#ff9f43" },
    { rank: "#10", id: "unknown", name: "???", tier: "?", colorClass: "color-w", borderColor: "#555" }
];

// 2. ACTIVE ROSTER MEMBERS (Editors Page Matrix Grid View)
const assignments = {
    "A-": ["confuxion"],
    "B+": ["sxmple", "TimmyLoal", "Game1k"],
    "B": ["Vorthexis"],
    "B-": ["Normal"],
    "C+": ["x9jm", "Blade", "Possessed_YT"],
    "D": ["ItzFroco"],
    "WAITLIST": ["system1117", "aston", "chillpotato"]
};

// 3. DISPLAY NAMES CONFIGURATION
const nameMapping = {
    "confuxion": "confuxion", "sxmple": "sxmple", "timmyloal": "TimmyLoal",
    "game1k": "Game1K", "vorthexis": "Vorthexis", "normal": "Normal",
    "x9jm": "x9jm", "blade": "Blade", "possessed_yt": "Possessed_YT",
    "system1117": "system1117", "aston": "Aston", "itzfroco": "ItzFroco", 
    "chillpotato": "ChillPotato"
};

// 4. SUBTEXT STATUS LABELS
const rankMapping = {
    "confuxion": "Rank #1", "sxmple": "Rank #2", "timmyloal": "Rank #3",
    "game1k": "Rank #4", "vorthexis": "Rank #5", "normal": "Rank #6",
    "x9jm": "Rank #7", "possessed_yt": "Rank #8", "blade": "Rank #9",
    "itzfroco": "Pending Eval", "system1117": "Waitlist", "aston": "Waitlist", 
    "chillpotato": "Waitlist"
};

// 5. COLOR SCHEMES
const colorClasses = {
    "A-": "color-a", "B+": "color-b", "B": "color-b", "B-": "color-b",
    "C+": "color-c", "D": "color-d", "WAITLIST": "color-w"
};
