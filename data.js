// data.js

const assignments = {
    "P+": [], "P": [], "P-": [],
    "O+": [], "O": [], "O-": [],
    "S+": [], "S": [], "S-": [],
    "A+": [], "A": ["confuxion"], "A-": [],
    "B+": ["sxmple", "TimmyLoal", "Game1k"], "B": ["Vorthexis"], "B-": ["Normal"],
    "C+": ["x9jm", "Blade", "Possessed_YT"], "C": [], "C-": [],
    "D+": [], "D": ["husky_multicraft", "ItzFroco"], "D-": [],
    "E+": [], "E": [], "E-": [],
    "F+": [], "F": [], "F-": [],
    "WAITLIST": ["aston", "system1117", "chillpotato"]
};

const nameMapping = {
    "confuxion": "confuxion", "sxmple": "sxmple", "timmyloal": "TimmyLoal",
    "game1k": "Game1K", "vorthexis": "Vorthexis", "normal": "Normal",
    "x9jm": "x9jm", "blade": "Blade", "possessed_yt": "Possessed_YT",
    "husky_multicraft": "Husky_MultiCraft", "system1117": "system1117",
    "aston": "Aston", "itzfroco": "ItzFroco", "chillpotato": "ChillPotato"
};

const editorsData = {
    "confuxion": { rank: "#1", mainTier: "A",  kf: "A",  ct: "A-", ve: "B+", te: "B"  },
    "sxmple":    { rank: "#2", mainTier: "B+", kf: "D",  ct: "B+", ve: "B+", te: "C+" },
    "timmyloal": { rank: "#3", mainTier: "B+", kf: "B",  ct: "B+", ve: "B",  te: "B-" },
    "game1k":    { rank: "#4", mainTier: "B+", kf: "C+", ct: "B+", ve: "B",  te: "B"  },
    "vorthexis": { rank: "#5", mainTier: "B",  kf: "E",  ct: "B",  ve: "B",  te: "B+" },
    "normal":    { rank: "#6", mainTier: "B-", kf: "C",  ct: "C+", ve: "B-", te: "B-" },
    "x9jm":      { rank: "#7", mainTier: "C+", kf: "D",  ct: "C+", ve: "C",  te: "C+" },
    "possessed_yt":  { rank: "#8", mainTier: "C+", kf: "C",  ct: "C",  ve: "D+", te: "C+" },
    "blade":     { rank: "#9", mainTier: "C+", kf: "C-", ct: "C+", ve: "C",  te: "D"  },
    
    "husky_multicraft": { rank: "", mainTier: "D", kf: "-", ct: "-", ve: "-", te: "-" },
    "system1117":       { rank: "", mainTier: "-", kf: "-", ct: "-", ve: "-", te: "-" },
    "aston":            { rank: "", mainTier: "-", kf: "-", ct: "C", ve: "-", te: "-" },
    "itzfroco":         { rank: "", mainTier: "D", kf: "C-", ct: "D", ve: "D+", te: "D" },
    "chillpotato":      { rank: "-", mainTier: "-", kf: "-", ct: "-", ve: "-", te: "-" },
    
    "unknown":   { rank: "#10", mainTier: "?",  kf: "-",  ct: "-",  ve: "-",  te: "-"  }
};
