type Team = {
  [country: string]: {
    Fixtures: string[];
    Goalkeepers: string[];
    Defenders: string[];
    Midfielders: string[];
    Forwards: string[];
  }
}

export const SoccerPlayers: Team = {
  "Ecuador": {
    "Fixtures": [
      "Qatar (Nov. 20)",
      "Netherlands (Nov. 25)",
      "Senegal (Nov. 29)"
    ],
    "Goalkeepers": [
      "Moises Ramirez",
      "Alexander Dominguez",
      "Hernan Galindez"
    ],
    "Defenders": [
      "Piero Hincapie",
      "Robert Arboleda",
      "Pervis Estupinan",
      "Angelo Preciado",
      "Jackson Porozo",
      "Xavier Arreaga",
      "Felix Torres",
      "Diego Palacios",
      "William Pacho"
    ],
    "Midfielders": [
      "Carlos Gruezo",
      "Jose Cifuentes",
      "Alan Franco",
      "Moises Caicedo",
      "Angel Mena",
      "Jeremy Sarmiento",
      "Ayrton Preciado",
      "Sebastian Mendez",
      "Gonzalo Plata",
      "Romario Ibarra"
    ],
    "Forwards": [
      "Djorkaeff Reasco",
      "Kevin Rodriguez",
      "Michael Estrada",
      "Enner Valencia"
    ]
  },
  "Netherlands": {
    "Fixtures": [
      "Senegal (Nov. 21)",
      "Ecuador (Nov. 25)",
      "Qatar (Nov. 29)"
    ],
    "Goalkeepers": [
      "Justin Bijlow",
      "Andries Noppert",
      "Remko Pasveer"
    ],
    "Defenders": [
      "Virgil van Dijk",
      "Nathan Ake",
      "Daley Blind",
      "Jurrien Timber",
      "Denzel Dumfries",
      "Stefan de Vrij",
      "Matthijs de Ligt",
      "Tyrell Malacia",
      "Jeremie Frimpong."
    ],
    "Midfielders": [
      "Frenkie de Jong",
      "Steven Berghuis",
      "Davy Klaassen",
      "Teun Koopmeiners",
      "Marten de Roon",
      "Cody Gakpo",
      "Kenneth Taylor",
      "Xavi Simons."
    ],
    "Forwards": [
      "Memphis Depay",
      "Steven Bergwijn",
      "Vincent Janssen",
      "Luuk de Jong",
      "Noa Lang",
      "Wout Weghorst."
    ]
  },
  "Qatar": {
    "Fixtures": [
      "Ecuador (Nov. 20)",
      "Senegal (Nov. 25)",
      "Netherlands (Nov. 29)"
    ],
    "Goalkeepers": [
      "Saad Al-Sheeb",
      "Meshaal Barsham",
      "Yousef Hassan"
    ],
    "Defenders": [
      "Pedro Miguel",
      "Musaab Khidir",
      "Tarek Salman",
      "Bassam Al-Rawi",
      "Boualem Khoukhi",
      "Abdelkarim Hassan",
      "Homam Ahmed",
      "Jassem Gaber"
    ],
    "Midfielders": [
      "Ali Asad",
      "Assim Madabo",
      "Mohammed Waad",
      "Salem Al-Hajri",
      "Moustafa Tarek",
      "Karim Boudiaf",
      "Abdelaziz Hatim",
      "Ismail Mohamad"
    ],
    "Forwards": [
      "Naif Al-Hadhrami",
      "Ahmed Alaaeldin",
      "Hassan Al-Haydos",
      "Khalid Muneer",
      "Akram Afif",
      "Almoez Ali",
      "Mohamed Muntari"
    ]
  },
  "Senegal": {
    "Fixtures": [
      "Netherlands (Nov. 21)",
      "Qatar (Nov. 25)",
      "Ecuador (Nov. 29)"
    ],
    "Goalkeepers": [
      "Edouard Mendy",
      "Alfred Gomis",
      "Seny Dieng"
    ],
    "Defenders": [
      "Kalidou Koulibaly",
      "Abdou Diallo",
      "Youssouf Sabaly",
      "Fode Ballo-Toure",
      "Pape Abdou Cisse",
      "Ismail Jakobs",
      "Formose Mendy",
      "Moussa N'Diaye"
    ],
    "Midfielders": [
      "Idrissa Gueye",
      "Cheikhou Kouyate",
      "Nampalys Mendy",
      "Krepin Diatta",
      "Pape Gueye",
      "Pape Matar Sarr",
      "Pathe Ciss",
      "Moustapha Name",
      "Loum Ndiaye"
    ],
    "Forwards": [
      "Ismaila Sarr",
      "Boulaye Dia",
      "Bamba Dieng",
      "Famara Diedhiou",
      "Nicolas Jackson",
      "Iliman Ndiaye"
    ]
  },
  "England": {
    "Fixtures": [
      "IR Iran (Nov. 21)",
      "United States (Nov. 25)",
      "Wales (Nov. 29)"
    ],
    "Goalkeepers": [
      "Jordan Pickford",
      "Aaron Ramsdale",
      "Nick Pope"
    ],
    "Defenders": [
      "Kieran Trippier",
      "Trent Alexander-Arnold",
      "Kyle Walker",
      "Ben White",
      "Harry Maguire",
      "John Stones",
      "Eric Dier",
      "Conor Coady",
      "Luke Shaw"
    ],
    "Midfielders": [
      "Declan Rice",
      "Jude Bellingham",
      "Kalvin Phillips",
      "Jordan Henderson",
      "Conor Gallagher",
      "Mason Mount"
    ],
    "Forwards": [
      "Harry Kane",
      "Callum Wilson",
      "Marcus Rashford",
      "Raheem Sterling",
      "Bukayo Saka",
      "Phil Foden",
      "Jack Grealish",
      "James Maddison"
    ]
  },
  "Iran": {
    "Fixtures": [
      "England (Nov. 21)",
      "Wales (Nov. 25)",
      "United States (Nov. 29)"
    ],
    "Goalkeepers": [
      "Alireza Beiranvand",
      "Amir Abedzadeh",
      "Hossein Hosseini",
      "Payam Niazmand"
    ],
    "Defenders": [
      "Ehsan Hajsafi",
      "Morteza Pouraliganji",
      "Ramin Rezaeian",
      "Milad Mohammadi",
      "Ho,ssein Kanani",
      "Shojae Khalilzadeh",
      "Sadegh Moharrami",
      "Rouzbeh Cheshmi",
      "Majid Ho[sseini",
      "Abolfazl Jalali"
    ],
    "Midfielders": [
      "Ahmad Noorollahi",
      "Saman Ghoddos",
      "Vahid Amiri",
      "Saeid Ezatolahi",
      "Alireza Jahanbakhsh",
      "Mehdi Torabi",
      "Ali Gholizadeh",
      "Ali Karimi"
    ],
    "Forwards": [
      "Karim Ansarifard",
      "Sardar Azmoun",
      "Mehdi Taremi"
    ]
  },
  "United States": {
    "Fixtures": [
      "Wales (Nov. 21)",
      "England (Nov. 25)",
      "IR Iran (Nov. 29)"
    ],
    "Goalkeepers": [
      "Matt Turner",
      "Sean Johnson",
      "Ethan Horvath"
    ],
    "Defenders": [
      "Cameron Carter-Vickers",
      "Sergino Dest",
      "Aaron Long",
      "Shaq Moore",
      "Tim Ream",
      "Antonee Robinson",
      "Joe Scally",
      "DeAndre Yedlin",
      "Walker Zimmerman"
    ],
    "Midfielders": [
      "Brenden Aaronson",
      "Kellyn Acosta",
      "Tyler Adams",
      "Luca de la Torre",
      "Weston McKennie",
      "Yunus Musah",
      "Cristian Roldan"
    ],
    "Forwards": [
      "Jesus Ferreira",
      "Jordan Morris",
      "Christian Pulisic",
      "Gio Reyna",
      "Joshua Sargent",
      "Timothy Weah",
      "Haji Wright"
    ]
  },
  "Wales": {
    "Fixtures": [
      "United States (Nov. 21)",
      "IR Iran (Nov. 25)",
      "England (Nov. 29)"
    ],
    "Goalkeepers": [
      "Wayne Hennessey",
      "Danny Ward",
      "Adam Davies"
    ],
    "Defenders": [
      "Ben Davies",
      "Ben Cabango",
      "Tom Lockyer",
      "Joe Rodon",
      "Chris Mepham",
      "Ethan Ampadu",
      "Chris Gunter",
      "Neco Williams",
      "Connor Roberts"
    ],
    "Midfielders": [
      "Sorba Thomas",
      "Joe Allen",
      "Matthew Smith",
      "Dylan Levitt",
      "Harry Wilson",
      "Joe Morrell",
      "Jonny Williams",
      "Aaron Ramsey",
      "Rubin Colwill"
    ],
    "Forwards": [
      "Gareth Bale",
      "Kieffer Moore",
      "Mark Harris",
      "Brennan Johnson",
      "Daniel James"
    ]
  },
  "Argentina": {
    "Fixtures": [
      "Saudi Arabia (Nov. 22)",
      "Mexico (Nov. 26)",
      "Poland (Nov. 30)"
    ],
    "Goalkeepers": [
      "Emiliano Martinez",
      "Geronimo Rulli",
      "Franco Armani"
    ],
    "Defenders": [
      "Nahuel Molina",
      "Gonzalo Montiel",
      "Cristian Romero",
      "German Pezzella",
      "Nicolas Otamendi",
      "Lisandro Martinez",
      "Marcos Acuna",
      "Nicolas Tagliafico",
      "Juan Foyth"
    ],
    "Midfielders": [
      "Rodrigo De Paul",
      "Leandro Paredes",
      "Alexis Mac Allister",
      "Guido Rodriguez",
      "Papu Gomez",
      "Enzo Fernandez",
      "Exequiel Palacios"
    ],
    "Forwards": [
      "Lionel Messi",
      "Angel Di Maria",
      "Lautaro Martinez",
      "Julian Alvarez",
      "Paulo Dybala",
      "Angel Correa",
      "Thiago Almada"
    ]
  },
  "Mexico": {
    "Fixtures": [
      "Poland (Nov. 22)",
      "Argentina (Nov. 26)",
      "Saudi Arabia (Nov. 30)"
    ],
    "Goalkeepers": [
      "Guillermo Ochoa",
      "Alfredo Talavera",
      "Rodolfo Cota"
    ],
    "Defenders": [
      "Kevin Alvarez",
      "Nestor Araujo",
      "Gerardo Arteaga",
      "Jesus Gallardo",
      "Hector Moreno",
      "Cesar Montes",
      "Jorge Sanchez",
      "Johan Vasquez"
    ],
    "Midfielders": [
      "Edson Alvarez",
      "Roberto Alvarado",
      "Uriel Antuna",
      "Luis Chavez",
      "Andres Guardado",
      "Erick Gutierrez",
      "Hector Herrera",
      "Orbelin Pineda",
      "Carlos Rodriguez",
      "Luis Romo"
    ],
    "Forwards": [
      "Rogelio Funes Mori",
      "Raul Jimenez",
      "Hirving Lozano , Henry Martin",
      "Alexis Vega"
    ]
  },
  "Poland": {
    "Fixtures": [
      "Mexico (Nov. 22)",
      "Saudi Arabia (Nov. 26)",
      "Argentina (Nov. 30)"
    ],
    "Goalkeepers": [
      "Wojciech Szczesny",
      "Bartlomiej Dragowski",
      "Lukasz Skorupski"
    ],
    "Defenders": [
      "Jan Bednarek",
      "Kamil Glik",
      "Robert Gumny",
      "Artur Jedrzejczyk",
      "Jakub Kiwior",
      "Mateusz Wieteska",
      "Bartosz Bereszynski",
      "Matthew Cash",
      "Nicola Zalewski"
    ],
    "Midfielders": [
      "Krystian Bielik",
      "Przemyslaw Frankowski , Kamil Grosicki",
      "Grzegorz Krychowiak",
      "Jakub Kaminski",
      "Michal Skoras",
      "Damian Szymanski",
      "Sebastian Szymanski",
      "Piotr Zielinski, , Szymon Zurkowski"
    ],
    "Forwards": [
      "Robert Lewandowski",
      "Arkadiusz Milik",
      "Krzysztof Piatek",
      "Karol Swiderski"
    ]
  },
  "Saudi Arabia": {
    "Fixtures": [
      "Argentina (Nov. 22)",
      "Poland (Nov. 26)",
      "Mexico (Nov. 30)"
    ],
    "Goalkeepers": [
      "Mohamed Al-Owais",
      "Nawaf Al-Aqidi",
      "Mohamed Al-Yami"
    ],
    "Defenders": [
      "Yasser Al-Shahrani",
      "Ali Al-Bulaihi",
      "Abdulelah Al-Amri",
      "Abdullah Madu",
      "Hassan Tambakti",
      "Sultan Al-Ghanam",
      "Mohammed Al-Breik",
      "Saud Abdulhamid"
    ],
    "Midfielders": [
      "Salman Al-Faraj",
      "Riyadh Sharahili",
      "Ali Al-Hassan",
      "Mohamed Kanno",
      "Abdulelah Al-Malki",
      "Sami Al-Najei",
      "Abdullah Otayf",
      "Nasser Al-Dawsari , Abdulrahman Al-Aboud",
      "Salem , Al-Dawsari",
      "Hattan Bahebri"
    ],
    "Forwards": [
      "Haitham Asiri",
      "Saleh Al-Shehri",
      "Firas Al-Buraikan"
    ]
  },
  "Australia": {
    "Fixtures": [
      "France (Nov. 22)",
      "Tunisia (Nov. 26)",
      "Denmark (Nov. 30)"
    ],
    "Goalkeepers": [
      "Mat Ryan",
      "Andrew Redmayne",
      "Danny Vukovic"
    ],
    "Defenders": [
      "Milos Degenek",
      "Aziz Behich",
      "Joel King",
      "Nathaniel Atkinson",
      "Fran Karacic",
      "Harry Souttar",
      "Kye Rowles",
      "Bailey Wright",
      "Thomas Deng"
    ],
    "Midfielders": [
      "Aaron Mooy",
      "Jackson Irvine",
      "Ajdin Hrustic",
      "Keanu Baccus",
      "Cameron Devlin",
      "Riley McGree"
    ],
    "Forwards": [
      "Awer Mabil",
      "Mathew Leckie",
      "Jamie Maclaren",
      "Jason Cummings",
      "Mitchell Duke",
      "Garang Kuol",
      "Craig Goodwin",
      "Marco Tilio"
    ]
  },
  "Denmark": {
    "Fixtures": [
      "Tunisia (Nov. 22)",
      "France (Nov. 26)",
      "Australia (Nov. 30)"
    ],
    "Goalkeepers": [
      "Kasper Schmeichel",
      "Oliver Christensen",
      "Frederik Ronnow"
    ],
    "Defenders": [
      "Alexander Bah",
      "Simon Kjaer",
      "Joachim Andersen",
      "Joakim Maehle",
      "Andreas Christensen",
      "Rasmus Kristensen",
      "Jens Stryger Larsen",
      "Victor Nelsson",
      "Daniel Wass"
    ],
    "Midfielders": [
      "Thomas Delaney",
      "Mathias Jensen",
      "Christian Eriksen",
      "Pierre-Emile Hojbjerg",
      "Christian Norgaard",
      "Robert Skov"
    ],
    "Forwards": [
      "Andreas Cornelius",
      "Martin Braithwaite",
      "Kasper Dolberg",
      "Mikkel Damsgaard",
      "Jesper Lindstrom",
      "Yussuf Poulsen",
      "Andreas Skov Olsen",
      "Jonas Wind"
    ]
  },
  "France": {
    "Fixtures": [
      "Australia (Nov. 22)",
      "Denmark (Nov. 26)",
      "Tunisia (Nov. 30)"
    ],
    "Goalkeepers": [
      "Alphonse Areola",
      "Hugo Lloris",
      "Steve Mandanda"
    ],
    "Defenders": [
      "Axel Disasi",
      "Lucas Hernandez",
      "Theo Hernandez",
      "Ibrahima Konate",
      "Jules Kounde",
      "Benjamin Pavard",
      "William Saliba",
      "Dayot Upamecano",
      "Raphael Varane"
    ],
    "Midfielders": [
      "Eduardo Camavinga",
      "Youssouf Fofana",
      "Matteo Guendouzi",
      "Adrien Rabiot",
      "Aurelien Tchouameni",
      "Jordan Veretout"
    ],
    "Forwards": [
      "Kingsley Coman",
      "Ousmane Dembele",
      "Olivier Giroud",
      "Antoine Griezmann",
      "Kylian Mbappe",
      "Marcus Thuram",
      "Randal Kolo Muani"
    ]
  },
  "Tunisia": {
    "Fixtures": [
      "Denmark (Nov. 22)",
      "Australia (Nov. 26)",
      "France (Nov. 30)"
    ],
    "Goalkeepers": [
      "Aymen Dahmen",
      "Bechir Ben Said",
      "Mouez Hassen",
      "Aymen Mathl,outhi"
    ],
    "Defenders": [
      "Ali Abdi",
      "Dylan Bronn",
      "Mohamed Drager",
      "Nader Ghandri",
      "Bilel Ifa",
      "Wajdi Kechrida",
      "Ali Maaloul",
      "Yassine Meriah",
      "Montassar Talbi"
    ],
    "Midfielders": [
      "Mohamed Ali Ben Romdhane",
      "Ghaylane Chaalali",
      "Aissa Laidouni",
      "Hannibal Mejbri",
      "Ferjani Sassi",
      "Elyas Skhiri"
    ],
    "Forwards": [
      "Anis Ben Slimane",
      "Seifeddine Jaziri",
      "Issam Jebali",
      "Wahbi Khazri",
      "Taha Yassine Khenissi",
      "Youssef Msakni",
      "Naim Sliti"
    ]
  },
  "Costa Rica": {
    "Fixtures": [
      "Spain (Nov. 23)",
      "Japan (Nov. 27)",
      "Germany (Dec. 1)"
    ],
    "Goalkeepers": [
      "Keylor Navas",
      "Esteban Alvarado",
      "Patrick Sequeira"
    ],
    "Defenders": [
      "Francisco Calvo",
      "Juan Pablo Vargas",
      "Kendall Waston, ,Oscar Duarte",
      "Daniel Chacon",
      "Keysher Fuller",
      "Carlos Martinez",
      "Bryan Oviedo",
      "Ronald Matarrita"
    ],
    "Midfielders": [
      "Yeltsin Tejeda",
      "Celso Borges",
      "Youstin Salas",
      "Roan Wilson",
      "Gerson Torres",
      "Douglas Lopez",
      "Jewison Bennette",
      "Alvaro Zamora",
      "Anthony Hernandez",
      "Brandon Aguilera",
      "Bryan , Ruiz"
    ],
    "Forwards": [
      "Joel Campbell",
      "Anthony Contreras",
      "Johan Venegas"
    ]
  },
  "Germany": {
    "Fixtures": [
      "Japan (Nov. 23)",
      "Spain (Nov. 27)",
      "Costa Rica (Dec. 1)"
    ],
    "Goalkeepers": [
      "Manuel Neuer",
      "Marc-Andre ter Stegen",
      "Kevin Trapp"
    ],
    "Defenders": [
      "Matthias Ginter",
      "Antonio Rudiger",
      "Niklas Sule",
      "Nico Schlotterbeck",
      "Thilo Kehrer",
      "David Raum",
      "Lukas Klostermann",
      "Armel Bella-Kotchap",
      "Christian Gunter"
    ],
    "Midfielders": [
      "Ilkay Gundogan",
      "Jonas Hofmann",
      "Leon Goretzka",
      "Serge Gnabry",
      "Leroy Sane",
      "Jamal Musiala",
      "Joshua Kimmich",
      "Thomas Muller",
      "Julian Brandt",
      "Mario Gotze"
    ],
    "Forwards": [
      "Kai Havertz",
      "Youssoufa Moukoko",
      "Niclas Fullkrug",
      "Karim Adeyemi"
    ]
  },
  "Japan": {
    "Fixtures": [
      "Germany (Nov. 23)",
      "Costa Rica (Nov. 27)",
      "Spain (Dec. 1)"
    ],
    "Goalkeepers": [
      "Shuichi Gonda",
      "Daniel Schmidt",
      "Eiji Kawashima"
    ],
    "Defenders": [
      "Miki Yamane",
      "Hiroki Sakai",
      "Maya Yoshida",
      "Takehiro Tomiyasu",
      "Shogo Taniguchi",
      "Ko Itakura",
      "Hiroki Ito",
      "Yuto Nagatomo"
    ],
    "Midfielders": [
      "Wataru Endo",
      "Hidemasa Morita",
      "Ao Tanaka",
      "Gaku Shibasaki",
      "Kaoru Mitoma",
      "Daichi Kamada",
      "Ritsu Doan",
      "Junya Ito",
      "Takumi Minamino",
      "Takefusa Kubo",
      "Yuki Soma"
    ],
    "Forwards": [
      "Daizen Maeda",
      "Takuma Asano",
      "Shuto Machino",
      "Ayase Ueda"
    ]
  },
  "Spain": {
    "Fixtures": [
      "Costa Rica (Nov. 23)",
      "Germany (Nov. 27)",
      "Japan (Dec. 1)"
    ],
    "Goalkeepers": [
      "Unai Simon",
      "Robert Sanchez",
      "David Raya"
    ],
    "Defenders": [
      "Dani Carvajal",
      "Cesar Azpilicueta",
      "Eric Garcia",
      "Hugo Guillamon",
      "Pau Torres",
      "Aymeric Laporte",
      "Jordi Alba",
      "Alex Balde"
    ],
    "Midfielders": [
      "Sergio Busquets",
      "Rodri",
      "Gavi",
      "Carlos Soler",
      "Marcos Llorente",
      "Pedri",
      "Koke"
    ],
    "Forwards": [
      "Ferran Torres",
      "Nico Williams",
      "Yeremi Pino",
      "Alvaro Morata",
      "Marco Asensio",
      "Pablo Sarabia",
      "Dani Olmo",
      "Ansu Fati"
    ]
  },
  "Belgium": {
    "Fixtures": [
      "Canada (Nov. 23)",
      "Morocco (Nov. 27)",
      "Croatia (Dec. 1)"
    ],
    "Goalkeepers": [
      "Thibaut Courtois",
      "Simon Mignolet",
      "Koen Casteels"
    ],
    "Defenders": [
      "Jan Vertonghen",
      "Toby Alderweireld",
      "Leander Dendoncker",
      "Zeno Debast",
      "Arthur Theate",
      "Wout Faes"
    ],
    "Midfielders": [
      "Hans Vanaken",
      "Axel Witsel",
      "Youri Tielemans",
      "Amadou Onana",
      "Kevin De Bruyne",
      "Yannick Carrasco",
      "Thorgan Hazard",
      "Timothy Castagne",
      "Thomas Meunier"
    ],
    "Forwards": [
      "Romelu Lukaku",
      "Michy Batshuayi",
      "Lois Openda",
      "Charles De Ketelaere",
      "Eden Hazard",
      "Jeremy Doku",
      "Dries Mertens",
      "Leandro Trossard"
    ]
  },
  "Canada": {
    "Fixtures": [
      "Belgium (Nov. 23)",
      "Croatia (Nov. 27)",
      "Morocco (Dec. 1)"
    ],
    "Goalkeepers": [
      "James Pantemis",
      "Milan Borjan",
      "Dayne St. Clair"
    ],
    "Defenders": [
      "Samuel Adekugbe",
      "Joel Waterman",
      "Alistair Johnston",
      "Richie Laryea",
      "Kamal Miller",
      "Steven Vitoria",
      "Derek Cornelius"
    ],
    "Midfielders": [
      "Liam Fraser",
      "Ismael Kone",
      "Mark-Anthony Kaye",
      "David Wotherspoon",
      "Jonathan Osorio",
      "Atiba Hutchinson",
      "Stephen Eustaquio",
      "Samuel Piette"
    ],
    "Forwards": [
      "Tajon Buchanan",
      "Liam Millar",
      "Lucas Cavallini",
      "Ike Ugbo",
      "Junior Hoilett",
      "Jonathan David",
      "Cyle Larin",
      "Alphonso Davies"
    ]
  },
  "Croatia": {
    "Fixtures": [
      "Morocco (Nov. 23)",
      "Canada (Nov. 27)",
      "Belgium (Dec. 1)"
    ],
    "Goalkeepers": [
      "Dominik Livakovic",
      "Ivica Ivusic",
      "Ivo Grbic"
    ],
    "Defenders": [
      "Domagoj Vida",
      "Dejan Lovren",
      "Borna Barisic",
      "Josip Juranovic",
      "Josko Gvardiol",
      "Borna Sosa",
      "Josip Stanisic",
      "Martin Erlic",
      "Josip Sutalo"
    ],
    "Midfielders": [
      "Luka Modric",
      "Mateo Kovacic",
      "Marcelo Brozovic",
      "Mario Pasalic",
      "Nikola Vlasic",
      "Lovro Majer",
      "Kristijan Jakic",
      "Luka Sucic"
    ],
    "Forwards": [
      "Ivan Perisic",
      "Andrej Kramaric",
      "Bruno Petkovic",
      "Mislav Orsic",
      "Ante Budimir",
      "Marko Livaja"
    ]
  },
  "Morocco": {
    "Fixtures": [
      "Croatia (Nov. 23)",
      "Belgium (Nov. 27)",
      "Canada (Dec. 1)"
    ],
    "Goalkeepers": [
      "Bono",
      "Munir El Kajoui",
      "Ahmed Tagnaouti"
    ],
    "Defenders": [
      "Nayef Aguerd",
      "Yahia Attiyat Allah",
      "Badr Benoun",
      "Achraf Dari",
      "Jawad El Yamiq",
      "Achraf Hakimi",
      "Noussair Mazraoui",
      "Romain Saiss"
    ],
    "Midfielders": [
      "Sofyan Amrabat",
      "Selim Amallah",
      "Bilal El Khannous",
      "Yahya Jabrane",
      "Azzedine Ounahi",
      "Abdelhamid Sabiri"
    ],
    "Forwards": [
      "Zakaria Aboukhlal",
      "Sofiane Boufal",
      "Ilias Chair",
      "Walid Cheddira",
      "Youssef En-Nesyri",
      "Abde Ezzalzouli",
      "Abderrazak Hamdallah",
      "Amine Harit",
      "Hakim Ziyech."
    ]
  },
  "Brazil": {
    "Fixtures": [
      "Serbia (Nov. 24)",
      "Switzerland (Nov. 28)",
      "Cameroon (Dec. 2)"
    ],
    "Goalkeepers": [
      "Alisson",
      "Ederson",
      "Weverton."
    ],
    "Defenders": [
      "Dani Alves",
      "Danilo",
      "Alex Sandro",
      "Alex Telles",
      "Bremer",
      "Eder Militao",
      "Marquinhos",
      "Thiago Silva."
    ],
    "Midfielders": [
      "Bruno Guimaraes",
      "Casemiro",
      "Everton Ribeiro",
      "Fabinho",
      "Fred",
      "Lucas Paqueta."
    ],
    "Forwards": [
      "Antony",
      "Gabriel Jesus",
      "Gabriel Martinelli",
      "Neymar",
      "Pedro",
      "Raphinha",
      "Richarlison",
      "Rodrygo",
      "Vinicius Junior."
    ]
  },
  "Cameroon": {
    "Fixtures": [
      "Switzerland (Nov. 24)",
      "Serbia (Nov. 28)",
      "Brazil (Dec. 2)"
    ],
    "Goalkeepers": [
      "Andre Onana",
      "Devis Epassy",
      "Simon Ngapandouetnbu"
    ],
    "Defenders": [
      "Jean-Charles Castelletto",
      "Enzo Ebosse",
      "Collins Fai",
      "Olivier Mbaizo",
      "Nouhou Tolo",
      "Nicolas Nkoulou",
      "Christopher Wooh"
    ],
    "Midfielders": [
      "Olivier Ntcham",
      "Gael Ondoua",
      "Martin Hongla",
      "Pierre Kunde",
      "Samuel Oum Gouet",
      "Andre-Frank Zambo Anguissa",
      "Jerome Ngom"
    ],
    "Forwards": [
      "Nicolas Ngamaleu",
      "Christian Bassogog",
      "Bryan Mbeumo",
      "Georges-Kevin Nkoudou",
      "Jean-Pierre Nsame",
      "Vincent Aboubakar",
      "Karl Toko-Ekambi",
      "Eric Maxim Choupo-Moting",
      "Souaibou Marou"
    ]
  },
  "Serbia": {
    "Fixtures": [
      "Brazil (Nov. 24)",
      "Cameroon (Nov. 28)",
      "Switzerland (Dec. 2)"
    ],
    "Goalkeepers": [
      "Marko Dmitrovic",
      "Predrag Rajkovic",
      "Vanja Milinkovic-Savic"
    ],
    "Defenders": [
      "Stefan Mitrovic",
      "Nikola Milenkovic",
      "Strahinja Pavlovic",
      "Milos Veljkovic",
      "Filip Mladenovic",
      "Strahinja Erakovic",
      "Srdjan Babic"
    ],
    "Midfielders": [
      "Nemanja Gudelj",
      "Sergej Milinkovic-Savic",
      "Sasa Lukic",
      "Marko Grujic",
      "Filip Kostic",
      "Uros Racic",
      "Nemanja Maksimovic",
      "Ivan Ilic",
      "Andrija Zivkovic",
      "Darko Lazovic"
    ],
    "Forwards": [
      "Dusan Tadic",
      "Aleksandar Mitrovic",
      "Dusan Vlahovic",
      "Filip Djuricic",
      "Luka Jovic",
      "Nemanja Radonjic"
    ]
  },
  "Switzerland": {
    "Fixtures": [
      "Cameroon (Nov. 24)",
      "Brazil (Nov. 28)",
      "Serbia (Dec. 2)"
    ],
    "Goalkeepers": [
      "Gregor Kobel",
      "Yann Sommer",
      "Jonas Omlin",
      "Philipp Kohn"
    ],
    "Defenders": [
      "Manuel Akanji",
      "Eray Comert",
      "Nico Elvedi",
      "Fabian Schar",
      "Silvan Widmer",
      "Ricardo Rodriguez",
      "Edimilson Fernandes"
    ],
    "Midfielders": [
      "Michel Aebischer",
      "Xherdan Shaqiri",
      "Renato Steffen",
      "Granit Xhaka",
      "Denis Zakaria",
      "Fabian Frei",
      "Remo Freuler",
      "Noah Okafor",
      "Fabian Rieder",
      "Ardon Jashari"
    ],
    "Forwards": [
      "Breel Embolo",
      "Ruben Vargas",
      "Djibril Sow",
      "Haris Seferovic",
      "Christian Fassnacht"
    ]
  },
  "Ghana": {
    "Fixtures": [
      "Portugal (Nov. 24)",
      "South Korea (Nov. 28)",
      "Uruguay (Dec. 2)"
    ],
    "Goalkeepers": [
      "Lawrence Ati",
      "Danlad Ibrahim",
      "Manaf Nurudeen"
    ],
    "Defenders": [
      "Joseph Aidoo",
      "Daniel Amartey",
      "Baba Rahman",
      "Alexander Djiku",
      "Tariq Lamptey",
      "Gideon Mensah",
      "Denis Odoi",
      "Mohammed Salisu",
      "Alidu Seidu"
    ],
    "Midfielders": [
      "Andre Ayew",
      "Mohammed Kudus",
      "Daniel-Kofi Kyereh",
      "Elisha Owusu",
      "Thomas Partey",
      "Salis Abdul Samed"
    ],
    "Forwards": [
      "Daniel Afriyie",
      "Jordan Ayew",
      "Osman Bukari",
      "Issahaku Abdul Fatawu",
      "Antoine Semenyo",
      "Kamal Sowah",
      "Kamaldeen Sulemana",
      "Inaki Williams"
    ]
  },
  "Portugal": {
    "Fixtures": [
      "Ghana (Nov. 24)",
      "Uruguay (Nov. 28)",
      "South Korea (Dec. 2)"
    ],
    "Goalkeepers": [
      "Diogo Costa",
      "Jose Sa",
      "Rui Patricio"
    ],
    "Defenders": [
      "Diogo Dalot",
      "Joao Cancelo",
      "Danilo Pereira",
      "Pepe",
      "Ruben Dias",
      "Antonio Silva",
      "Nuno Mendes",
      "Raphael Guerreiro"
    ],
    "Midfielders": [
      "Joao Palhinha",
      "Ruben Neves",
      "Bernardo Silva",
      "Bruno Fernandes",
      "Joao Mario",
      "Matheus Nunes",
      "Vitinha",
      "William Carvalho",
      "Otavio"
    ],
    "Forwards": [
      "Cristiano Ronaldo",
      "Joao Felix",
      "Rafael Leao",
      "Ricardo Horta",
      "Goncalo Ramos",
      "Andre Silva"
    ]
  },
  "Korea Republic": {
    "Fixtures": [
      "Uruguay (Nov. 24)",
      "Ghana (Nov. 28)",
      "Portugal (Dec. 2)"
    ],
    "Goalkeepers": [
      "Kim Seung-Gyu",
      "Jo Hyeon-Woo",
      "Song Bum-Keun"
    ],
    "Defenders": [
      "Kim Min-Jae",
      "Kim Young-Gwon",
      "Kwon Kyung-Won",
      "Cho Yu-Min",
      "Kim Moon-Hwan",
      "Yoon Jong-Gyu",
      "Kim Tae-Hwan",
      "Kim Jin-Su",
      "Hong Chul"
    ],
    "Midfielders": [
      "Jung Woo-Young",
      "Son Jun-Ho",
      "Paik Seung-Ho",
      "Hwang In-Beom",
      "Lee Jae-Sung",
      "Kwon Chang-Hoon",
      "Jeong Woo-Yeong",
      "Lee Kang-In",
      "Son Heung-Min",
      "Hwang Hee-Chan",
      "Na Sang-Ho",
      "Song Min-Kyu"
    ],
    "Forwards": [
      "Hwang Ui-Jo",
      "Cho Gue-Sung"
    ]
  },
  "Uruguay": {
    "Fixtures": [
      "South Korea (Nov. 24)",
      "Portugal (Nov. 28)",
      "Ghana (Dec. 2)"
    ],
    "Goalkeepers": [
      "Fernando Muslera",
      "Sergio Rochet",
      "Sebastian Sosa"
    ],
    "Defenders": [
      "Ronald Araujo",
      "Sebastian Coates",
      "Martin Caceres",
      "Guillermo Varela",
      "Matias Vina",
      "Mathias Olivera",
      "Jose Maria Gimenez",
      "Diego Godin",
      "Jose Luis Rodríguez"
    ],
    "Midfielders": [
      "Lucas Torreira",
      "Matias Vecino",
      "Rodrigo Bentancur",
      "Manuel Ugarte",
      "Giorgian de Arrascaeta",
      "Nicolas de la Cruz",
      "Federico Valverde , Facundo Pellistri",
      "Agustin Canobbio,Facundo Torres"
    ],
    "Forwards": [
      "Luis Suarez",
      "Darwin Nunez",
      "Maximiliano Gomez",
      "Edinson Cavani"
    ]
  }
}

