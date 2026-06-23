<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MVER - MultiCraft Visual Editing Rankings</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            color: #ffffff;
            font-family: 'VT323', monospace;
        }

        /* HEADER & NAVIGATION */
        .header-banner {
            width: 100%;
            height: 180px;
            background: url('mver-bg.png') center/cover no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            border-bottom: 4px solid #55efc4;
        }

        .main-title {
            font-size: 72px;
            letter-spacing: 4px;
            margin: 0;
            text-shadow: 3px 3px #000;
        }

        .sub-banner-text {
            font-size: 18px;
            color: #b2bec3;
            margin-top: -5px;
            letter-spacing: 1px;
        }

        .nav-bar {
            position: absolute;
            top: 10px;
            right: 20px;
            display: flex;
            gap: 15px;
        }

        .nav-bar a {
            color: #ffffff;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
            font-family: sans-serif;
            font-weight: bold;
        }

        .nav-bar a:hover {
            color: #55efc4;
        }

        /* INTRO WELCOME BOX */
        .welcome-box {
            background-color: #050505;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #222;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }

        .welcome-icon {
            width: 32px;
            height: 32px;
        }

        .welcome-text h2 {
            margin: 0;
            font-size: 24px;
            color: #ffffff;
            letter-spacing: 1px;
        }

        .welcome-text p {
            margin: 5px 0 0 0;
            font-size: 16px;
            color: #a0a0a0;
        }

        /* VIEW CONTAINER SYSTEM */
        .view-content {
            display: none;
            max-width: 900px;
            margin: 30px auto;
            padding: 0 20px;
        }

        .active-view {
            display: block;
        }

        .section-title {
            text-align: center;
            font-size: 36px;
            letter-spacing: 2px;
            border-bottom: 2px dashed #333;
            padding-bottom: 10px;
            margin-bottom: 25px;
            text-transform: uppercase;
        }

        /* LEADERBOARD ROW STYLING */
        .leaderboard-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .leaderboard-row {
            display: flex;
            align-items: center;
            background: linear-gradient(90deg, #0a1128 0%, #000000 100%);
            border: 2px solid #3498db;
            padding: 10px 20px;
            text-decoration: none;
            color: #ffffff;
            font-size: 28px;
            transition: transform 0.2s, border-color 0.2s;
        }

        .leaderboard-row:hover {
            transform: scale(1.02);
            border-color: #ffffff;
        }

        .rank-num {
            color: #f1c40f;
            width: 60px;
            font-weight: bold;
        }

        .divider-pipe {
            color: #444;
            margin: 0 15px;
        }

        .editor-name {
            flex-grow: 1;
            letter-spacing: 1px;
        }

        .rank-badge-label {
            font-size: 16px;
            color: #888;
            margin-right: 10px;
            font-family: sans-serif;
        }

        .tier-tag {
            padding: 2px 12px;
            border-radius: 4px;
            font-weight: bold;
            font-size: 22px;
            min-width: 45px;
            text-align: center;
            border: 1px solid;
        }

        /* TIERS VIEW VISUAL BLOCKS */
        .tier-list-vertical {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .tier-card-block {
            width: 100%;
            max-width: 450px;
            border: 2px solid #111;
            padding: 12px;
            text-align: center;
            background: #050505;
        }

        .tier-card-title {
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 2px;
            margin: 0 0 4px 0;
        }

        .tier-card-desc {
            font-size: 14px;
            color: #888;
            margin: 0;
            font-family: sans-serif;
        }

        /* CREDITS STYLING */
        .credits-container {
            background: #050505;
            border: 2px solid #222;
            padding: 30px;
            text-align: center;
        }

        .credit-item {
            margin-bottom: 20px;
        }

        .credit-item:last-child {
            margin-bottom: 0;
        }

        .credit-name {
            font-size: 28px;
            color: #fff;
            margin: 0;
        }

        .credit-role {
            font-size: 16px;
            color: #888;
            margin: 4px 0 0 0;
            font-family: sans-serif;
        }

        /* TIER COLORS */
        .t-a  { background: rgba(85,239,196,0.1);  color: #55efc4; border-color: #55efc4; }
        .t-b  { background: rgba(255,242,0,0.1);   color: #fff200; border-color: #fff200; }
        .t-c  { background: rgba(255,159,67,0.1);  color: #ff9f43; border-color: #ff9f43; }
        .t-d  { background: rgba(255,127,80,0.1);  color: #ff7f50; border-color: #ff7f50; }
        .t-e  { background: rgba(255,71,87,0.1);   color: #ff4757; border-color: #ff4757; }
        .t-f  { background: rgba(255,71,87,0.1);   color: #ff4757; border-color: #ff4757; }
        .t-w  { background: rgba(255,255,255,0.05);color: #cccccc; border-color: #7f8c8d; }
    </style>
</head>
<body>

    <div class="header-banner">
        <div class="nav-bar">
            <a onclick="switchView('home')">Leaderboard / Home Page</a>
            <a onclick="switchView('tiers')">[Tiers]</a>
            <a onclick="switchView('editors')">[Editors]</a>
            <a onclick="switchView('submit')">[Submit Edits]</a>
            <a onclick="switchView('credits')">[Credits]</a>
        </div>
        <h1 class="main-title">MVER</h1>
        <div class="sub-banner-text">MultiCraft Visual Editing Rankings</div>
    </div>

    <div class="welcome-box">
        <img class="welcome-icon" src="mver-logo.png" alt="*">
        <div class="welcome-text">
            <h2>Welcome to MultiCraft Visual Editing Rankings (MVER)</h2>
            <p>The MultiCraft Visual Editing Ranking is a tier list system to rank your editing skills and compete against others on a top 10 Leaderboard.</p>
        </div>
    </div>

    <div class="view-content" id="view-home">
        <div class="section-title">Editors Leaderboard</div>
        <div class="leaderboard-container" id="leaderboard-root"></div>
    </div>

    <div class="view-content" id="view-tiers">
        <div class="section-title">Tiers Architecture</div>
        <div class="tier-list-vertical">
            <div class="tier-card-block" style="border-color: #55efc4;"><h3 class="tier-card-title" style="color: #55efc4;">P | PREEMINENT</h3><p class="tier-card-desc">Absolute Best / Top Globally</p></div>
            <div class="tier-card-block" style="border-color: #55efc4;"><h3 class="tier-card-title" style="color: #55efc4;">O | OPTIMAL</h3><p class="tier-card-desc">Top Globally</p></div>
            <div class="tier-card-block" style="border-color: #55efc4;"><h3 class="tier-card-title" style="color: #55efc4;">S | MASTERY</h3><p class="tier-card-desc">Exceeding Average / Mastery</p></div>
            <div class="tier-card-block" style="border-color: #55efc4;"><h3 class="tier-card-title" style="color: #55efc4;">A | ADVANCED</h3><p class="tier-card-desc">Well Above Average</p></div>
            <div class="tier-card-block" style="border-color: #fff200;"><h3 class="tier-card-title" style="color: #fff200;">B | UPPER INTERMEDIATE</h3><p class="tier-card-desc">Above Average</p></div>
            <div class="tier-card-block" style="border-color: #ff9f43;"><h3 class="tier-card-title" style="color: #ff9f43;">C | INTERMEDIATE</h3><p class="tier-card-desc">Average</p></div>
            <div class="tier-card-block" style="border-color: #ff7f50;"><h3 class="tier-card-title" style="color: #ff7f50;">D | DEVELOPING</h3><p class="tier-card-desc">Developing Towards Average</p></div>
            <div class="tier-card-block" style="border-color: #ff4757;"><h3 class="tier-card-title" style="color: #ff4757;">E | BASIC</h3><p class="tier-card-desc">Below Average / Knowledge is limited to basic sync and cuts</p></div>
            <div class="tier-card-block" style="border-color: #ff4757;"><h3 class="tier-card-title" style="color: #ff4757;">F | ENTRY</h3><p class="tier-card-desc">Novice / Has not developed a knowledge on editing</p></div>
        </div>
    </div>

    <div class="view-content" id="view-editors">
        <div class="section-title">Active Roster Encyclopedia</div>
        <div class="leaderboard-container" id="roster-root"></div>
    </div>

    <div class="view-content" id="view-submit">
        <div class="section-title">Submit Evaluation Requests</div>
        <div class="credits-container">
            <p style="font-size: 20px; margin-bottom: 20px;">Ready to submit your edits for ranking or promotions?</p>
            <a href="https://forms.google.com" target="_blank" style="background: #3498db; color: white; padding: 10px 30px; text-decoration: none; font-size: 22px; border-radius: 4px;">Open Submission Form</a>
        </div>
    </div>

    <div class="view-content" id="view-credits">
        <div class="section-title">Credits</div>
        <div class="credits-container">
            <div class="credit-item">
                <h3 class="credit-name">TimmyLoal (MVER Founder/Creator)</h3>
                <p class="credit-role">The creator of MVER, the tier system and the website</p>
            </div>
            <div class="credit-item" style="margin-top: 25px;">
                <h3 class="credit-name">Vorthexis (MVER Helper)</h3>
                <p class="credit-role">MVER Assistant, helped with the website and developing website pages</p>
            </div>
        </div>
    </div>

    <script>
        // OFFICIAL RE-ALIGNED DATABASE FROM SCREENSHOTS
        const nameMapping = {
            "confuxion": "confuxion", "sxmple": "Sxmple", "timmyloal": "TimmyLoal",
            "game1k": "Game1K", "vorthexis": "Vorthexis", "normal": "Normal",
            "x9jm": "x9jm", "possessed_yt": "Possessed_YT", "khibietnoi": "KhiBietNoi",
            "husky_multicraft": "Husky_MultiCraft", "system1117": "system1117",
            "aston": "Aston", "itzfroco": "ItzFroco", "chillpotato": "ChillPotato"
        };

        const editorsData = [
            { id: "confuxion", rank: "#1", tier: "A-", cls: "t-a" },
            { id: "sxmple", rank: "#2", tier: "B+", cls: "t-b" },
            { id: "timmyloal", rank: "#3", tier: "B+", cls: "t-b" },
            { id: "game1k", rank: "#4", tier: "B+", cls: "t-b" },
            { id: "vorthexis", rank: "#5", tier: "B",  cls: "t-b" },
            { id: "normal", rank: "#6", tier: "B-", cls: "t-b" },
            { id: "x9jm", rank: "#7", tier: "C+", cls: "t-c" },
            { id: "possessed_yt", rank: "#8", tier: "C",  cls: "t-c" },
            { id: "khibietnoi", rank: "#9", tier: "C",  cls: "t-c" },
            { id: "husky_multicraft", rank: "#10", tier: "C-", cls: "t-c" }
        ];

        const waitlistData = [
            { id: "itzfroco", rank: "Pending", tier: "D", cls: "t-d" },
            { id: "system1117", rank: "Waitlist", tier: "-", cls: "t-w" },
            { id: "aston", rank: "Waitlist", tier: "-", cls: "t-w" },
            { id: "chillpotato", rank: "Waitlist", tier: "-", cls: "t-w" }
        ];

        function switchView(viewId) {
            document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active-view'));
            const target = document.getElementById('view-' + viewId);
            if(target) target.classList.add('active-view');
            window.scrollTo(0,0);
        }

        document.addEventListener("DOMContentLoaded", function() {
            const leaderboardRoot = document.getElementById("leaderboard-root");
            const rosterRoot = document.getElementById("roster-root");

            // RENDER HOME LEADERBOARD (TOP 10 ONLY)
            if(leaderboardRoot) {
                editorsData.forEach(item => {
                    const displayName = nameMapping[item.id] || item.id;
                    const rowHTML = `
                        <a href="profiles.html?user=${item.id}" class="leaderboard-row">
                            <span class="rank-num">${item.rank}</span>
                            <span class="divider-pipe">|</span>
                            <span class="editor-name">${displayName}</span>
                            <span class="rank-badge-label">RANK:</span>
                            <span class="tier-tag ${item.cls}">${item.tier}</span>
                        </a>
                    `;
                    leaderboardRoot.insertAdjacentHTML('beforeend', rowHTML);
                });
            }

            // RENDER FULL ENCYCLOPEDIA ROSTER (RANKED + WAITLIST)
            if(rosterRoot) {
                // Main ranked
                editorsData.forEach(item => {
                    const displayName = nameMapping[item.id] || item.id;
                    const rowHTML = `
                        <a href="profiles.html?user=${item.id}" class="leaderboard-row" style="border-color: #222;">
                            <span class="rank-num" style="font-size:20px; color:#888;">${item.rank}</span>
                            <span class="divider-pipe">|</span>
                            <span class="editor-name">${displayName}</span>
                            <span class="rank-badge-label">TIER:</span>
                            <span class="tier-tag ${item.cls}">${item.tier}</span>
                        </a>
                    `;
                    rosterRoot.insertAdjacentHTML('beforeend', rowHTML);
                });
                // Waitlist accounts
                waitlistData.forEach(item => {
                    const displayName = nameMapping[item.id] || item.id;
                    const rowHTML = `
                        <a href="profiles.html?user=${item.id}" class="leaderboard-row" style="border-color: #111; background: #020202;">
                            <span class="rank-num" style="font-size:16px; color:#555; width:80px;">${item.rank}</span>
                            <span class="divider-pipe">|</span>
                            <span class="editor-name" style="color:#aaa;">${displayName}</span>
                            <span class="rank-badge-label">TIER:</span>
                            <span class="tier-tag ${item.cls}">${item.tier}</span>
                        </a>
                    `;
                    rosterRoot.insertAdjacentHTML('beforeend', rowHTML);
                });
            }

            // Default view init
            switchView('home');
        });
    </script>
</body>
</html>
