var dtla_places = new Array("Skid Row", "Fashion District", "Little Tokyo", "Toy District", "Warehouse District","Arts District","Broadway Theater","Commercial District","Bunker Hill","ChinaTown","Civic Center","Financial District","Flower District", "Gallery Row", "Historic Core","Jewlery District","Old Bank Distict","South Park","Gold Line", "Blue Line","Silver Line","Grand Park","Grand-Hope Park","The Down and Out","The Bloc","La Cita","Spring Street Park","La Petit Paris","Terroni","The Standard","Crocker Club","Exchange","The Bloc","Honeycut","Target","El Dorado","The Rowan","The Alexandria","Rosslyn","Gateways","Barclay","Douglas","Grand Central Market","Precinct","Clifton\'s","King Eddy Saloon","Botega Louie","Wilshire Grand","SugarFish","Continental","Hellman","Seven Grand","Hank\'s Bar","Crane's Bar","Bolt Barbers","Perch","Raw Materials","Vibiana","Bar 107","Artisan House","The Escondite","Whole Foods","Ralph\'s","The market in the Rosslyn that\'s taking forever to open","US Bank Building")

var random_things = new Array("Jay Walking Sting", "Dog Poop", "Jay Walking", "Suburbs", "Drug Dealers", "Hipsters","Skaterboader","Biker","Developer","Filming","Blocked","Homeless","piss smell","shit smell","Trader Joes","LAoki","Helicopters","Tacos","Crimson Unicorn Vandalism","Rocco Espinoza\'s Diary Posts","Main Street Masturbator", "Dylan\'s Thor Hammer","Tacogate","Treasture","Bako","Burning Palmer Apartments","Pruning Trees","Gentrifixation","Occupy LA","Fake Profiles","LACAN disruption of Mike Feuer\'s DTLA Town Hall meeting","Tagging Buildings","Metro assaults","Art Walk","Buying Drugs from Skidrow","Black Lives Matter","Rascist Isreal People","Shitty Indian Food","Shitty Sushi","Shitty Thai Food", "Shitty Mexican Food","Food Prices","Encampments","Dog Vets","Man Buns","Street Shit","Street Piss","CicLAvia","Assualt","Indecent Exposure","Rent","Bicycle Lanes","Littering","Hollywood DJ Forum Posts","Metro Regional Connector","Construction","Women Smiling","Kirk Gaw","Street Venor Carts","Kirking","Weird Odors","Kirk Gaw\'s Greasy Camera Lens","DTLA Trolls","Bike Thefts","Selfies","Selfies at the Broad","DTLA","Bako","Weak Sauce","Strong Sauce","Farmers Market","Googley Eyes", "Gentrification","\'poeple\'","Moving to the Suburbs","Sheeple","The Walking Dead","Game of Thrones","Shitty Presidential Debate")

var things_to_do = new Array("ordering bottomless mimosas", "Shopping","Going to Art Walk","Jay Walking","Brunch","Walking my Dog","Enjoying Sunday Sessions", "Going to First Sundays", "Street Pooping","Street Peeing","Bringing Back Broadway","Arguing with Heath","Getting Blocked by Heath","Meeting at a Bar","Riding with CicLAvia","Riding with Critical Mass","Gentrifying","Standing in Line at Egg Slut","Riding Bikes on Sidewalks","Littering","Getting Ticketed","Complaining about change","Bragging about residency","opening a business","closing a business","getting wasted","eating ramen","eating sushi","Blocking the Eastern Columbia Clock","Asking Women to Smile","Valuing Pets More Than Humans","Kirking","Complaining about how DTLA complains","Telling people to move to the suburbs","Netflix and Chill","Bikram Yoga","complain to Huizar","cry to Deon Joseph","being stalked","cleaning","being a little rapey","asking what happened to a tree","Talking about The Walking Dead","Talking about Game of Thrones")

var people = new Array("Kirk Gaw","Heath Satow","Josh Albrekson","Jose Huizar","Spartacus", "The Kirk Army", "The Ian Army","Leander","Keri Freeman","The Masturbator","Oil Slick Dancer","Blair Besten","Tom Gilmore","Hatter guy","Ricky The Pirate","The Middle Finger Bicycle guy","Art Hunter","Patti Berman","Jessica Rey","Jaywalk sting cops","Grumpy cat homeless lady","Tom Nguyen","Chris Berta","Chris Nelson","DON GARZA","Dylan Patrick O\'Donoghue","Katherine McNenny","Treasture","The Confederate flag guys","Randy Herr","Glen Primm","Rocko Espinoza","Beto Lopez","Jack Marshall","Gerren Kelsaw","Aryn Blaque","Victoria Black","Jason Campos","Megan Costello","Betsy Starman","Ian Stikeleather","Anthony Bejarono","Gina Acuna","Deisy Suarez","Carmen Toledo","Keith Giles","Bowie","Sara Hernandez","Roommate Selfie Girl","Kennard Lilly","Noemi Gil","Youtube Creep Accosting Women","Candy","Protesters","Nancy-Jean Carlson","Donna Huffaker-Evans","Franklin Gonad","Catherine Salliant","David Rolland","Bill Stevenson","Alisa Rivera","Kazuko Previsich","Nick Previsich","Joey Garcia","Ean Moore","Skirk Gaw","Jesus Christ","Thomas Leamy","Keri Freeman","Rhett","Leandor Knowels","The Dog Vet","Andrew Meisner","Priscilla Broadway","Eric Garcia","Kathy Menzies","Dorthy Michelle Treasure","Robert Vargas","Kirk Gaw","Rich Jesmer","Eric Garcetti","Racist Irealites","Dama Gazelle","Racist Hipsters","Mildred Von","Dawn Davis","Natasha Olleia","Stalker Film Boy","Sheeple","Confederate Flag Guys","Donald Trump")

var topic_starter = new Array("I love how","I\'m so tired of","There\'s a new building called","There\'s a new restaurant called")

var east_west_st = new Array('1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11','12','13th','14th','15th','16th','17th','Venice','18th','Washington','Temple','Aliso','Arcadia','Cesar Chavez','Ord','Alphine','College','Winston')

var north_south_st = new Array('Bixel','Beaudry','Figueroa','Lebanon','Flower','Hope','Grand','Olive','Hill','Broadway','Spring','Main','Los Angeles','Maple','Wall','San Julian','San Pedro','Crocker','Towne','Stanford','Gladys','Ceres','Central','Alameda','Mateo','Santa Fe')

/// Store all DTLA arrays in single Array for a generator of generators
var DTLA_ITEMS = new Array(dtla_places,random_things,things_to_do,people,topic_starter,east_west_st,north_south_st);

function rand_indice(arry) //use to generate random array element from arbituary array.  number should be less than or equal to length of array
{
	return Math.floor(Math.random() * arry.length);
}

function DTLA_gen(indice) //argument should be number that reflects index in DTLA_ITEMS array
{
	var chosen = DTLA_ITEMS[indice];
	var item = rand_indice(chosen);
	return (typeof chosen[item] === 'undefined') ? chosen[0] : chosen[item];
	
}

function topic_gen() //Generate Random Topics
    { 
	topic = topic_starter[Math.floor((Math.random() * topic_starter.length) -1)];
	topic = (topic == undefined) ? topic_starter[0] : topic;
	return topic;
	}
	
function people_gen() //Generate Random DTLA people in the community, pets and figures included
{
	folks =	people[Math.floor((Math.random() * people.length)-1)];
	folks = (folks == undefined) ? people[0] : folks;	
    return folks;
}
	
function activity_gen() //Generic things to do in DTLA
{
	act_d = things_to_do[Math.floor((Math.random()* things_to_do.length)-1)];
	act_d = (act_d == undefined) ? things_to_do[0] : act_d;
    return act_d;
}

function random_gen() //Completely Random DTLA subjects
{
	rand_d = random_things[Math.floor((Math.random()* random_things.length)-1)];
	rand_d = (rand_d == undefined) ? random_things[0] : rand_d;
	return rand_d;
}

function ew_street_gen() //Generate East and West facing DTLA roads
{
	esws = east_west_st[Math.floor((Math.random()* east_west_st.length)-1)];
	esws = (esws == undefined) ? east_west_st[0] : esws;
	return esws;
}

function ns_street_gen() //Generate North and South facing DTLA roads
{
	noso = north_south_st[Math.floor((Math.random()* north_south_st.length)-1)];
	noso = (noso == undefined) ? north_south_st[0] : noso;
	return noso;	
}


