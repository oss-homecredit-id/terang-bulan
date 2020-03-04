const express = require("express");
const app = express();

app.get("/songs", (req, res) => {
    // title, year, singer, album id
    const songsData = {
        data: [
            {
                title: "Forget My Own",
                year: "1978",
                singer: "Nadean Davana",
                albumId: 1
            },
            {
                title: " I Love She's A Gold Digger",
                year: "1992",
                singer: "Taffy Gallardo",
                albumId: 2
            },
            {
                title: "Warned And Love",
                year: "2008",
                singer: "Guy Piwall",
                albumId: 3
            },
            {
                title: "He's Going To Make It",
                year: "2004",
                singer: "Preston Touhig",
                albumId: 4
            },
            {
                title: "Wild And Chance",
                year: "2007",
                singer: "Marlena Wharfe",
                albumId: 5
            },
            {
                title: "Honey, I'm Bad",
                year: "2008",
                singer: "Chaddie Thomesson",
                albumId: 6
            },
            {
                title: "He Thinks We Won't Stop",
                year: "2008",
                singer: "Darcy Duckitt",
                albumId: 6
            },
            {
                title: "No And Promises",
                year: "2003",
                singer: "Chaddie Thomesson",
                albumId: 7
            },
            {
                title: "He Thinks He's Bad For You",
                year: "1989",
                singer: "Barron Drei",
                albumId: 8
            },
            {
                title: "Bring Tomorrow",
                year: "2000",
                singer: "Enid Blackborne",
                albumId: 8
            },
            {
                title: "I Used To Love You",
                year: "1978",
                singer: "Maddi Casin",
                albumId: 8
            },
            {
                title: "Lose His Addiction",
                year: "2004",
                singer: "Pandora Lampel",
                albumId: 8
            },
            {
                title: "Midnight And Paradise",
                year: "2004",
                singer: "Marisa Antushev",
                albumId: 9
            },
            {
                title: "Crazy And Things",
                year: "1989",
                singer: "Lisette Cabel",
                albumId: 10
            },
            {
                title: "Dreams For Another Night",
                year: "1993",
                singer: "Ginger Jennick",
                albumId: 11
            },
            {
                title: "Hour Of A Stranger",
                year: "1993",
                singer: "Ginger Jennick",
                albumId: 11
            },
            {
                title: "Times For Freedom",
                year: "1993",
                singer: "Ginger Jennick",
                albumId: 11
            },
            {
                title: "Baby, So Do I",
                year: "2005",
                singer: "Marisa Antushev",
                albumId: 12
            },
            {
                title: "Paradise Of My Broken Dreams",
                year: "2005",
                singer: "Ginger Jennick",
                albumId: 13
            },
            {
                title: "Thoughts Of My Time",
                year: "2008",
                singer: "Clarinda Frankes",
                albumId: 14
            },
            {
                title: "Babe, Come Back",
                year: "2009",
                singer: "Aurthur Whicher",
                albumId: 15
            },
            {
                title: "Baby, Stop Playing Tricks",
                year: "2004",
                singer: "Guy Piwall",
                albumId: 15
            },
            {
                title: "Hip Hop And Vibrations",
                year: "2004",
                singer: "Marlena Wharfe",
                albumId: 16
            },
            {
                title: "Welcome And Lyrics",
                year: "2008",
                singer: "Mathew Harrowell",
                albumId: 17
            },
            {
                title: "Whatever",
                year: "2011",
                singer: "Chaddie Thomesson",
                albumId: 18
            },
            {
                title: "He Loves I'm Makin' Money",
                year: "1995",
                singer: "Anastasie Ibbott",
                albumId: 19
            },
            {
                title: "I Hate I Need That Beat",
                year: "1992",
                singer: "Tana Mathew",
                albumId: 20
            },
            {
                title: "Love Of Heaven",
                year: "1998",
                singer: "Clarinda Frankes",
                albumId: 21
            },
            {
                title: "Rhythm Of A Woman",
                year: "1998",
                singer: "Clarinda Frankes",
                albumId: 21
            },
            {
                title: "Cash For My Soul",
                year: "1998",
                singer: "Clarinda Frankes",
                albumId: 21
            },
            {
                title: "Babe, What's Up?",
                year: "2003",
                singer: "Tana Mathew",
                albumId: 22
            },
            {
                title: "Endless And Chance",
                year: "1995",
                singer: "Tanney Boddington",
                albumId: 23
            },
            {
                title: "Forsaken And Game",
                year: "1995",
                singer: "Tanney Boddington",
                albumId: 23
            },
            {
                title: "Rhythm Of My Heartbeat",
                year: "2004",
                singer: "Enid Blackborne",
                albumId: 24
            },
            {
                title: "Enjoy The Show",
                year: "1999",
                singer: "Barron Drei",
                albumId: 25
            },
            {
                title: "Rebel And Mind",
                year: "2009",
                singer: "Mathew Harrowell",
                albumId: 25
            },
            {
                title: "She Thinks I'm Guilty",
                year: "1989",
                singer: "Barron Drei",
                albumId: 26
            },
            {
                title: "Babe, This'll Make You Sweat",
                year: "2007",
                singer: "Lisette Cabel",
                albumId: 27
            },
            {
                title: "I'm Innocent",
                year: "1991",
                singer: "Taffy Gallardo",
                albumId: 28
            },
            {
                title: "Baby, Love Me",
                year: "2006",
                singer: "Darcy Duckitt",
                albumId: 29
            },
            {
                title: "Babe, I Used To Love You",
                year: "1995",
                singer: "Marlena Wharfe",
                albumId: 29
            },
            {
                title: "It's Me, Myself And I",
                year: "2007",
                singer: "Mathew Harrowell",
                albumId: 30
            },
            {
                title: "Bring My Fire",
                year: "2006",
                singer: "Benton Castlake",
                albumId: 31
            },
            {
                title: "He Hates She's Crazy",
                year: "2012",
                singer: "Taffy Gallardo",
                albumId: 32
            },
            {
                title: "Wait For His Cash",
                year: "2007",
                singer: "Davis Simpole",
                albumId: 33
            },
            {
                title: "Jungle Of The Stars",
                year: "2000",
                singer: "Benton Castlake",
                albumId: 34
            },
            {
                title: "Hour Of The Hard Life",
                year: "2000",
                singer: "Benton Castlake",
                albumId: 34
            },
            {
                title: "Bring On His",
                year: "2000",
                singer: "Benton Castlake",
                albumId: 34
            },
            {
                title: "I Heard She's Been Played",
                year: "2011",
                singer: "Darcy Duckitt",
                albumId: 34
            },
            {
                title: "Running And Love",
                year: "1991",
                singer: "Marisa Antushev",
                albumId: 34
            },
            {
                title: "She Said He's A Player",
                year: "2012",
                singer: "Preston Touhig",
                albumId: 34
            },
            {
                title: "She Hopes He Did It",
                year: "2008",
                singer: "Odo O'Ruane",
                albumId: 35
            },
            {
                title: "Put Your Hands Up",
                year: "2007",
                singer: "Anastasie Ibbott",
                albumId: 36
            },
            {
                title: "Honey, Love Me",
                year: "1989",
                singer: "Maddi Casin",
                albumId: 37
            },
            {
                title: "Let's Go Wild",
                year: "2005",
                singer: "Odo O'Ruane",
                albumId: 38
            },
            {
                title: "Lyrical And Music",
                year: "2007",
                singer: "Maddi Casin",
                albumId: 39
            },
            {
                title: "She Heard I'm Makin' Money",
                year: "2012",
                singer: "Aurthur Whicher",
                albumId: 40
            },
            {
                title: "You're A Player",
                year: "2012",
                singer: "Aurthur Whicher",
                albumId: 40
            },
            {
                title: "She Hates She Got It Going",
                year: "1997",
                singer: "Barron Drei",
                albumId: 41
            },
            {
                title: "Risky And Choice",
                year: "2011",
                singer: "Mathew Harrowell",
                albumId: 42
            },
            {
                title: "Altered And Soul",
                year: "2007",
                singer: "Chaddie Thomesson",
                albumId: 43
            },
            {
                title: "Lyrical And Beats",
                year: "2005",
                singer: "Lisette Cabel",
                albumId: 44
            },
            {
                title: "Out Of My Mind",
                year: "2003",
                singer: "Pandora Lampel",
                albumId: 44
            },
            {
                title: "Kind Of Necessity",
                year: "2003",
                singer: "Pandora Lampel",
                albumId: 44
            },
            {
                title: "Lessons For The Good Times",
                year: "2003",
                singer: "Pandora Lampel",
                albumId: 44
            },
            {
                title: "Passion For You",
                year: "2007",
                singer: "Enid Blackborne",
                albumId: 45
            },
            {
                title: "Passion Of Monsters",
                year: "2007",
                singer: "Enid Blackborne",
                albumId: 45
            },
            {
                title: "Drivin' Her World",
                year: "2007",
                singer: "Enid Blackborne",
                albumId: 45
            },
            {
                title: "My Kind For An Angel",
                year: "1996",
                singer: "Davis Simpole",
                albumId: 46
            },
            {
                title: "Jungle Of A Broken Heart",
                year: "1996",
                singer: "Davis Simpole",
                albumId: 46
            },
            {
                title: "Risky And Riot",
                year: "1999",
                singer: "Maddi Casin",
                albumId: 46
            },
            {
                title: "He Heard He's A Gangsta",
                year: "2011",
                singer: "Tana Mathew",
                albumId: 47
            },
            {
                title: "He Knows He Lost His Mind",
                year: "1989",
                singer: "Anastasie Ibbott",
                albumId: 48
            },
            {
                title: "Rebel And Love",
                year: "2000",
                singer: "Marisa Antushev",
                albumId: 49
            },
            {
                title: "Finding Your Pain",
                year: "2009",
                singer: "Clarinda Frankes",
                albumId: 50
            },
            {
                title: "Life Of Midnight",
                year: "1996",
                singer: "Davis Simpole",
                albumId: 51
            },
            {
                title: "Baby, Time For Some Noise",
                year: "1995",
                singer: "Marlena Wharfe",
                albumId: 52
            },
            {
                title: "Violence Of My Heartbeat",
                year: "2003",
                singer: "Davis Simpole",
                albumId: 53
            },
            {
                title: "With My Cash",
                year: "2007",
                singer: "Zelig Witheridge",
                albumId: 54
            },
            {
                title: "Motions For A Girl Like You",
                year: "1994",
                singer: "Nadean Davana",
                albumId: 55
            },
            {
                title: "Wild For The Morning",
                year: "1994",
                singer: "Nadean Davana",
                albumId: 55
            },
            {
                title: "Dream Best Friend",
                year: "1994",
                singer: "Nadean Davana",
                albumId: 55
            },
            {
                title: "Wanted And Secrets",
                year: "2006",
                singer: "Tanney Boddington",
                albumId: 55
            },
            {
                title: "Talk For Tomorrow",
                year: "2003",
                singer: "Zelig Witheridge",
                albumId: 56
            },
            {
                title: "Heart Of The Night",
                year: "2003",
                singer: "Zelig Witheridge",
                albumId: 56
            },
            {
                title: "Lines Of The City",
                year: "2003",
                singer: "Zelig Witheridge",
                albumId: 56
            },
            {
                title: "Baby, Let's Talk About It",
                year: "1991",
                singer: "Guy Piwall",
                albumId: 57
            },
            {
                title: "Rapper's And Life",
                year: "1978",
                singer: "Lisette Cabel",
                albumId: 58
            },
            {
                title: "Violence Of His Luck",
                year: "1995",
                singer: "Benton Castlake",
                albumId: 59
            },
            {
                title: "She Said He's Crazy",
                year: "1992",
                singer: "Odo O'Ruane",
                albumId: 59
            },
            {
                title: "Money For My Mind",
                year: "1999",
                singer: "Zelig Witheridge",
                albumId: 60
            },
            {
                title: "I Hope She's Bad For You",
                year: "1992",
                singer: "Anastasie Ibbott",
                albumId: 61
            },
            {
                title: "Babe, Bring It",
                year: "2004",
                singer: "Tanney Boddington",
                albumId: 62
            },
            {
                title: "Babe, I'm Bad",
                year: "2000",
                singer: "Preston Touhig",
                albumId: 63
            },
            {
                title: "Don't Need That Life",
                year: "2008",
                singer: "Ginger Jennick",
                albumId: 64
            },
            {
                title: "You're Bad For Me",
                year: "1999",
                singer: "Tana Mathew",
                albumId: 65
            },
            {
                title: "Dear And Choice",
                year: "2005",
                singer: "Guy Piwall",
                albumId: 66
            },
            {
                title: "Violence Of Baby",
                year: "2005",
                singer: "Nadean Davana",
                albumId: 66
            },
            {
                title: "Enjoy The Show",
                year: "2008",
                singer: "Taffy Gallardo",
                albumId: 67
            },
            {
                title: "Gangs Of That Broken Dreams",
                year: "2007",
                singer: "Pandora Lampel",
                albumId: 68
            },
        ]
    };
    res.send(songsData);
})

app.get("/albums", (req, res) => {
    // title, year, singer, album id
    const albumsData = {
        data: [
            {
                album: "All doubt",
                image: "https://dummyimage.com/600x400/000/fff&text=Nadean Davana-All doubt-1978",
                id: 1
            },
            {
                album: "Animal kingdom",
                image: "https://dummyimage.com/600x400/000/fff&text=Taffy Gallardo-Animal kingdom-1992",
                id: 2
            },
            {
                album: "Apparatus",
                image: "https://dummyimage.com/600x400/000/fff&text=Guy Piwall-Apparatus-2008",
                id: 3
            },
            {
                album: "Around the bush",
                image: "https://dummyimage.com/600x400/000/fff&text=Preston Touhig-Around the bush-2004",
                id: 4
            },
            {
                album: "Badge of honor",
                image: "https://dummyimage.com/600x400/000/fff&text=Marlena Wharfe-Badge of honor-2007",
                id: 5
            },
            {
                album: "Barrage of noise",
                image: "https://dummyimage.com/600x400/000/fff&text=Chaddie Thomesson-Barrage of noise-2008",
                id: 6
            },
            {
                album: "Baseless",
                image: "https://dummyimage.com/600x400/000/fff&text=Chaddie Thomesson-Baseless-2003",
                id: 7
            },
            {
                album: "Battle with myself",
                image: "https://dummyimage.com/600x400/000/fff&text=Barron Drei-Battle with myself-1989",
                id: 8
            },
            {
                album: "Beasts of beauty",
                image: "https://dummyimage.com/600x400/000/fff&text=Marisa Antushev-Beasts of beauty-2004",
                id: 9
            },
            {
                album: "Bent out of shape",
                image: "https://dummyimage.com/600x400/000/fff&text=Lisette Cabel-Bent out of shape-1989",
                id: 10
            },
            {
                album: "Birthday suit",
                image: "https://dummyimage.com/600x400/000/fff&text=Ginger Jennick-Birthday suit-1993",
                id: 11
            },
            {
                album: "Bittersweet",
                image: "https://dummyimage.com/600x400/000/fff&text=Marisa Antushev-Bittersweet-2005",
                id: 12
            },
            {
                album: "Bloodlust",
                image: "https://dummyimage.com/600x400/000/fff&text=Ginger Jennick-Bloodlust-2005",
                id: 13
            },
            {
                album: "Bold fortune",
                image: "https://dummyimage.com/600x400/000/fff&text=Clarinda Frankes-Bold fortune-2008",
                id: 14
            },
            {
                album: "Bonus",
                image: "https://dummyimage.com/600x400/000/fff&text=Aurthur Whicher-Bonus-2009",
                id: 15
            },
            {
                album: "Bottom's up",
                image: "https://dummyimage.com/600x400/000/fff&text=Marlena Wharfe-Bottom's up-2004",
                id: 16
            },
            {
                album: "Breaking bread",
                image: "https://dummyimage.com/600x400/000/fff&text=Mathew Harrowell-Breaking bread-2008",
                id: 17
            },
            {
                album: "Bursting bubbles",
                image: "https://dummyimage.com/600x400/000/fff&text=Chaddie Thomesson-Bursting bubbles-2011",
                id: 18
            },
            {
                album: "Bursting out of my skin",
                image: "https://dummyimage.com/600x400/000/fff&text=Anastasie Ibbott-Bursting out of my skin-1995",
                id: 19
            },
            {
                album: "Cherry",
                image: "https://dummyimage.com/600x400/000/fff&text=Tana Mathew-Cherry-1992",
                id: 20
            },
            {
                album: "Class act",
                image: "https://dummyimage.com/600x400/000/fff&text=Clarinda Frankes-Class act-1998",
                id: 21
            },
            {
                album: "Climate changed",
                image: "https://dummyimage.com/600x400/000/fff&text=Tana Mathew-Climate changed-2003",
                id: 22
            },

            {
                album: "Code word",
                image: "https://dummyimage.com/600x400/000/fff&text=Tanney Boddington-Code word-1995",
                id: 23
            },

            {
                album: "Collar of bones",
                image: "https://dummyimage.com/600x400/000/fff&text=Enid Blackborne-Collar of bones-2004",
                id: 24
            },

            {
                album: "Commercial break",
                image: "https://dummyimage.com/600x400/000/fff&text=Barron Drei-Commercial break-1999",
                id: 25
            },

            {
                album: "Committee of despair",
                image: "https://dummyimage.com/600x400/000/fff&text=Barron Drei-Committee of despair-1989",
                id: 26
            },

            {
                album: "Company of two",
                image: "https://dummyimage.com/600x400/000/fff&text=Lisette Cabel-Company of two-2007",
                id: 27
            },

            {
                album: "Creative director",
                image: "https://dummyimage.com/600x400/000/fff&text=Taffy Gallardo-Creative director-1991",
                id: 28
            },

            {
                album: "Crocodile tears",
                image: "https://dummyimage.com/600x400/000/fff&text=Darcy Duckitt-Crocodile tears-2006",
                id: 29
            },

            {
                album: "Crowd control",
                image: "https://dummyimage.com/600x400/000/fff&text=Mathew Harrowell-Crowd control-2007",
                id: 30
            },

            {
                album: "Crowd funding",
                image: "https://dummyimage.com/600x400/000/fff&text=Benton Castlake-Crowd funding-2006",
                id: 31
            },

            {
                album: "Cutting corners",
                image: "https://dummyimage.com/600x400/000/fff&text=Taffy Gallardo-Cutting corners-2012",
                id: 32
            },

            {
                album: "Death's dead",
                image: "https://dummyimage.com/600x400/000/fff&text=Davis Simpole-Death's dead-2007",
                id: 33
            },

            {
                album: "Decisions decisions",
                image: "https://dummyimage.com/600x400/000/fff&text=Benton Castlake-Decisions decisions-2000",
                id: 34
            },

            {
                album: "Devil's details",
                image: "https://dummyimage.com/600x400/000/fff&text=Odo O'Ruane-Devil's details-2008",
                id: 35
            },

            {
                album: "Double trouble",
                image: "https://dummyimage.com/600x400/000/fff&text=Anastasie Ibbott-Double trouble-2007",
                id: 36
            },

            {
                album: "Dream big",
                image: "https://dummyimage.com/600x400/000/fff&text=Maddi Casin-Dream big-1989",
                id: 37
            },

            {
                album: "Easy doesn't do it",
                image: "https://dummyimage.com/600x400/000/fff&text=Odo O'Ruane-Easy doesn't do it-2005",
                id: 38
            },

            {
                album: "Election perfection",
                image: "https://dummyimage.com/600x400/000/fff&text=Maddi Casin-Election perfection-2007",
                id: 39
            },

            {
                album: "Emergency",
                image: "https://dummyimage.com/600x400/000/fff&text=Aurthur Whicher-Emergency-2012",
                id: 40
            },

            {
                album: "Emotional wreckage",
                image: "https://dummyimage.com/600x400/000/fff&text=Barron Drei-Emotional wreckage-1997",
                id: 41
            },

            {
                album: "Eye for an eye",
                image: "https://dummyimage.com/600x400/000/fff&text=Mathew Harrowell-Eye for an eye-2011",
                id: 42
            },

            {
                album: "Eye to eye",
                image: "https://dummyimage.com/600x400/000/fff&text=Chaddie Thomesson-Eye to eye-2007",
                id: 43
            },

            {
                album: "Fault of treasures",
                image: "https://dummyimage.com/600x400/000/fff&text=Lisette Cabel-Fault of treasures-2005",
                id: 44
            },

            {
                album: "Final straw",
                image: "https://dummyimage.com/600x400/000/fff&text=Enid Blackborne-Final straw-2007",
                id: 45
            },

            {
                album: "Glass house",
                image: "https://dummyimage.com/600x400/000/fff&text=Davis Simpole-Glass house-1996",
                id: 46
            },

            {
                album: "Greener grass",
                image: "https://dummyimage.com/600x400/000/fff&text=Tana Mathew-Greener grass-2011",
                id: 47
            },

            {
                album: "Hand in hand",
                image: "https://dummyimage.com/600x400/000/fff&text=Anastasie Ibbott-Hand in hand-1989",
                id: 48
            },

            {
                album: "Honesty",
                image: "https://dummyimage.com/600x400/000/fff&text=Marisa Antushev-Honesty-2000",
                id: 49
            },

            {
                album: "Intervention",
                image: "https://dummyimage.com/600x400/000/fff&text=Clarinda Frankes-Intervention-2009",
                id: 50
            },

            {
                album: "Just the beginning",
                image: "https://dummyimage.com/600x400/000/fff&text=Davis Simpole-Just the beginning-1996",
                id: 51
            },

            {
                album: "Kicked buckets",
                image: "https://dummyimage.com/600x400/000/fff&text=Marlena Wharfe-Kicked buckets-1995",
                id: 52
            },

            {
                album: "Life knowledge",
                image: "https://dummyimage.com/600x400/000/fff&text=Davis Simpole-Life knowledge-2003",
                id: 53
            },

            {
                album: "Long story short",
                image: "https://dummyimage.com/600x400/000/fff&text=Zelig Witheridge-Long story short-2007",
                id: 54
            },

            {
                album: "Louder actions",
                image: "https://dummyimage.com/600x400/000/fff&text=Nadean Davana-Louder actions-1994",
                id: 55
            },

            {
                album: "Midnight oil",
                image: "https://dummyimage.com/600x400/000/fff&text=Zelig Witheridge-Midnight oil-2003",
                id: 56
            },

            {
                album: "Missed the boat",
                image: "https://dummyimage.com/600x400/000/fff&text=Guy Piwall-Missed the boat-1991",
                id: 57
            },

            {
                album: "Nemesis",
                image: "https://dummyimage.com/600x400/000/fff&text=Lisette Cabel-Nemesis-1978",
                id: 58
            },

            {
                album: "No boundaries",
                image: "https://dummyimage.com/600x400/000/fff&text=Benton Castlake-No boundaries-1995",
                id: 59
            },

            {
                album: "No choice",
                image: "https://dummyimage.com/600x400/000/fff&text=Zelig Witheridge-No choice-1999",
                id: 60
            },

            {
                album: "No guarantees",
                image: "https://dummyimage.com/600x400/000/fff&text=Anastasie Ibbott-No guarantees-1992",
                id: 61
            },

            {
                album: "Pushing buttons",
                image: "https://dummyimage.com/600x400/000/fff&text=Tanney Boddington-Pushing buttons-2004",
                id: 62
            },

            {
                album: "Special delivery",
                image: "https://dummyimage.com/600x400/000/fff&text=Preston Touhig-Special delivery-2000",
                id: 63
            },
            {
                album: "Sweetbitter",
                image: "https://dummyimage.com/600x400/000/fff&text=Ginger Jennick-Sweetbitter-2008",
                id: 64
            },

            {
                album: "The fat lady sings",
                image: "https://dummyimage.com/600x400/000/fff&text=Tana Mathew-The fat lady sings-1999",
                id: 65
            },

            {
                album: "Wild goose chase",
                image: "https://dummyimage.com/600x400/000/fff&text=Guy Piwall-Wild goose chase-2005",
                id: 66
            },

            {
                album: "Your graciousness",
                image: "https://dummyimage.com/600x400/000/fff&text=Taffy Gallardo-Your graciousness-2008",
                id: 67
            },

            {
                album: "Zero experience",
                image: "https://dummyimage.com/600x400/000/fff&text=Pandora Lampel-Zero experience-2007",
                id: 68
            },
        ]
    };
    res.send(albumsData);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);