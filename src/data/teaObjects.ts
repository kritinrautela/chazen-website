import { audioAssets, videoAssets } from "@/lib/media";

export type TeaObject = {
  number: string;
  english: string;
  chinese: string;
  purpose: string;
  meaning: string;
  used: string;
  note: string;
  sound: string;
  soundLabel: string;
  video: string;
  brewingRole: string;
  x: string;
  y: string;
};

export const teaObjects: TeaObject[] = [
  {
    number: "01",
    english: "Gaiwan",
    chinese: "蓋碗",
    purpose: "A lidded bowl used to brew loose-leaf tea with precision, fragrance, and speed.",
    meaning: "The lid gathers aroma, the bowl reveals colour, and the saucer carries heat with respect.",
    used: "Used during warming, receiving leaves, brewing, controlling aroma, and pouring.",
    note: "Its open form lets the host observe colour, steam, leaf expansion, and timing.",
    sound: audioAssets.teaPour,
    soundLabel: "Tea Pouring",
    video: videoAssets.gaiwanRitual,
    brewingRole: "The host reads heat, colour, fragrance, and time through one open vessel.",
    x: "48%",
    y: "42%"
  },
  {
    number: "02",
    english: "Fairness Cup",
    chinese: "公道杯",
    purpose: "Receives brewed liquor before serving so every cup has equal strength.",
    meaning: "Hospitality becomes an ethic designed into the pour.",
    used: "Used immediately after each infusion leaves the gaiwan.",
    note: "Its name carries fairness. The vessel makes equality visible before the first sip.",
    sound: audioAssets.teaPour,
    soundLabel: "Tea Pouring",
    video: videoAssets.gaiwanRitual,
    brewingRole: "It equalises the infusion so the first guest and last guest receive the same tea.",
    x: "63%",
    y: "34%"
  },
  {
    number: "03",
    english: "Tasting Cup",
    chinese: "品茗杯",
    purpose: "A small cup that concentrates aroma, warmth, and texture.",
    meaning: "The cup asks the drinker to pause before judgment.",
    used: "Used after the fairness cup distributes each infusion.",
    note: "Small volume keeps the tea alive through repeated infusions rather than one large serving.",
    sound: audioAssets.teaPour,
    soundLabel: "Tea Pouring",
    video: videoAssets.gaiwanRitual,
    brewingRole: "It turns tasting into attention: aroma first, warmth second, texture last.",
    x: "72%",
    y: "58%"
  },
  {
    number: "04",
    english: "Tea Scoop",
    chinese: "茶則",
    purpose: "Transfers dry leaves cleanly and measures abundance with restraint.",
    meaning: "Generosity without excess, precision without harshness.",
    used: "Used when moving leaves from presentation vessel into gaiwan.",
    note: "The scoop is a discipline of proportion: enough leaf to speak, not enough to shout.",
    sound: audioAssets.teaPour,
    soundLabel: "Tea Pouring",
    video: videoAssets.gaiwanRitual,
    brewingRole: "It sets proportion before water arrives, shaping intensity without spectacle.",
    x: "28%",
    y: "60%"
  },
  {
    number: "05",
    english: "Tea Needle",
    chinese: "茶針",
    purpose: "Clears spouts and opens compressed leaves with delicacy.",
    meaning: "Precision without force.",
    used: "Used when a vessel, spout, or compressed tea needs gentle opening.",
    note: "The needle reminds the host that force is rarely elegance.",
    sound: audioAssets.teaPour,
    soundLabel: "Tea Pouring",
    video: videoAssets.gaiwanRitual,
    brewingRole: "It solves obstruction with delicacy, preserving the vessel and the leaf.",
    x: "18%",
    y: "66%"
  },
  {
    number: "06",
    english: "Tea Tray",
    chinese: "茶盤",
    purpose: "A drained stage for water, vessels, and controlled movement.",
    meaning: "It contains overflow so the room can remain visually still.",
    used: "Used throughout the full brewing sequence.",
    note: "The tray makes abundance quiet. Water can move freely while the ritual remains composed.",
    sound: audioAssets.teaPour,
    soundLabel: "Tea Pouring",
    video: videoAssets.gaiwanRitual,
    brewingRole: "It gives water a hidden path so the table can remain calm and exact.",
    x: "50%",
    y: "52%"
  },
  {
    number: "07",
    english: "Kettle",
    chinese: "水壺",
    purpose: "Carries hot water and gives the host control over height, speed, and heat.",
    meaning: "Water is the invisible guest. The kettle makes its arrival deliberate.",
    used: "Used during warming, rinsing, awakening, and brewing.",
    note: "A good pour is quiet architecture: temperature, angle, and confidence.",
    sound: audioAssets.teaPour,
    soundLabel: "Tea Pouring",
    video: videoAssets.gaiwanRitual,
    brewingRole: "It sets the pace of water, and the water sets the pace of the room.",
    x: "24%",
    y: "30%"
  },
  {
    number: "08",
    english: "Tea Towel",
    chinese: "茶巾",
    purpose: "Wipes water marks and restores calm between gestures.",
    meaning: "Cleanliness is visual stillness.",
    used: "Used between pours and whenever the table needs a quiet reset.",
    note: "The towel is the rhythm nobody notices until it is missing.",
    sound: audioAssets.teaPour,
    soundLabel: "Tea Pouring",
    video: videoAssets.gaiwanRitual,
    brewingRole: "It erases excess water, allowing each gesture to begin from quiet again.",
    x: "34%",
    y: "75%"
  }
];
