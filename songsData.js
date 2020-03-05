const songsData = {
  data: [
    {
      title: "Forget My Own",
      year: "1978",
      singer: "Nadean Davana",
      albumId: 1
    },
    {
      title: "I Love She's A Gold Digger",
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
    }
  ]
};

module.exports = songsData;
