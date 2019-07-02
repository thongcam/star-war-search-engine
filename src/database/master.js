import films from './films';
import people from './people';
import planets from './planets';
import species from './species';
import starships from './starships';
import vehicles from './vehicles';

const master =
[
  {
    type: 'people',
    assocArray: people.results,
    tachColor: 'yellow',
    hexColor: 'FFD700',
  },
  {
    type: 'films',
    assocArray: films.results,
    tachColor: 'blue',
    hexColor: '357EDD',
  },
  {
    type: 'starships',
    assocArray: starships.results,
    tachColor: 'red',
    hexColor: 'FF4136',
  },
  {
    type: 'vehicles',
    assocArray: vehicles.results,
    tachColor: 'light-purple',
    hexColor: 'A463F2',
  },
  {
    type: 'species',
    assocArray: species.results,
    tachColor: 'green',
    hexColor: '19A974',
  },
  {
    type: 'planets',
    assocArray: planets.results,
    tachColor: 'light-pink',
    hexColor: 'FFA3D7',
  },

]

export default master;

// {
//   type: 'unselected',
//   tachColor: 'moon-gray',
//   hexColor: 'CCC',
// }
