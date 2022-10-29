import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/nbaIcon/:_team', (req, res) => {
  const request = req.params._team;

  let image = "";
  switch (request) {
    case 'warriors':
      image = "goldenstate_warriors.png";
      break;
    case 'celtics':
      image = "boston_celtics.png"
      break;
    case 'nets':
      image = "brooklyn_nets.png"
      break;
    case 'knicks':
      image = "newyork_nets.png"
      break;
    case '76ers':
      image = "philadelphia_76ers.png"
      break;
    case 'raptors':
      image = "toronto_raptors.png"
      break;
    case 'bulls':
      image = "chicago_bulls.png"
      break;
    case 'cavaliers':
      image = "cleveland_cavaliers.png"
      break;
    case 'pistons':
      image = "detroit_pistons.png"
      break;
    case 'pacers':
      image = "indiana_pacers.png"
      break;
    case 'bucks':
      image = "milwaukee_bucks.png"
      break;
    case 'hawks':
      image = "atlanta_hawks.png"
      break;
    case 'hornets':
      image = "charlotte_hornets.png"
      break;
    case 'heat':
      image = "miami_heat.png"
      break;
    case 'magic':
      image = "orlando_magic.png"
      break;
    case 'wizards':
      image = "washington_wizards.png"
      break;
    case 'nuggets':
      image = "denver_nuggets.png"
      break;
    case 'timberwolves':
      image = "minnesota_timberwolves.png"
      break;
    case 'thunder':
      image = "oklahomacity_thunder.png"
      break;
    case 'trailblazers':
      image = "portrland_trailblazers.png"
    case 'jazz':
      image = "utah_jazz.png"
      break;
    case 'clippers':
      image = "losangeles_clippers.png"
      break;
    case 'lakers':
      image = "losangeles_lakers.png"
      break;
    case 'suns':
      image = "phoenix_suns.png"
      break;
    case 'kings':
      image = "sacramento_kings.png"
      break;
    case 'mavericks':
      image = "dallas_mavericks.png"
      break;
    case 'rockets':
      image = "houston_rockets.png"
      break;
    case 'grizzlies':
      image = "memphis_grizzlies.png"
      break;
    case 'pelicans':
      image = "neworleans_pelicans.png"
      break;
    case 'spurs':
      image = "sanantonio_spurs.png"
      break;
  }

  try {
    res.status(200).json({
      image
    })
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ Error: 'Request Failed' });
  }


  app.get('/nflIcon/:_team', (_, res) => {
    const request = req.params._team

    switch (request) {
      case 'cardinals':
        image = "arizona_cardinals.png"
        break;
      case 'falcons':
        image = "atlanta_falcons.png"
        break;
      case 'ravens':
        image = "baltimore_ravens.png";
        break;
      case 'panthers':
        image = "caronlina_panthers.png";
        break;
      case 'bills':
        image = "buffalo_bills.png";
        break;
      case 'bengals':
        image = "cincinatti_bengals.png";
        break;
      case 'bears':
        image = "chicago_bears.png";
        break;
      case 'browns':
        image = "cleveland_browns.png";
        break;
      case 'cowboys':
        image = "dallas_cowboys.png";
        break;
      case 'broncos':
        image = "denver_broncos.png";
        break;
      case 'lions':
        image = "detroit_lions.png";
        break;
      case 'texans':
        image = "houston_texans.png";
        break;
      case 'packers':
        image = "greenbay_packers.png";
        break;
      case 'colts':
        image = "indianapolis_colts.png";
        break;
      case 'rams':
        image = "losangeles_rams.png";
        break;
      case 'jaguars':
        image = "jacksonville_jaguars.png";
        break;
      case 'vikings':
        image = "minnesota_vikings.png";
        break;
      case 'chiefs':
        image = "kansascity_chiefs.png";
        break;
      case 'saints':
        image = "neworleans_saints.png";
        break;
      case 'raiders':
        image = "oakland_raiders.png";
        break;
      case 'giants':
        image = "newyork_giants.png";
        break;
      case 'chargers':
        image = "losangeles_chargers.png";
        break;
      case 'eagles':
        image = "philadelphia_eagles.png";
        break;
      case 'dolphins':
        image = "miami_dolphins.png";
        break;
      case '49ers':
        image = "sanfrancisco_49ers";
        break;
      case 'patriots':
        image = "newengland_patriots.png";
        break;
      case 'seahawks':
        image = "seattle_seahawks.png";
        break;
      case 'jets':
        image = "newyork_jets.png";
        break;
      case 'buccaneers':
        image = "tampabay_buccaneers.png";
        break;
      case 'steelers':
        image = "pittsburgh_steelers.png";
        break;
      case 'commanders':
        image = "washington_commanders.png";
        break;
      case 'titans':
        image = "tennessee_titans.png";
        break;

    }

  });


})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})