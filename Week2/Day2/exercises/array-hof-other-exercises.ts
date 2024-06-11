// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}

// Reduce the array to only the total age in months of all the doggie Academites
// TODO

const totalAgeInMonths  = someAcademitesWithAges.reduce ((total, ageInMonths) => total + ageInMonths.age,0);

console.log(`ageInMonths: ${totalAgeInMonths}`);

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it

// Sorting function
const sortByName = (a: Academite, b: Academite): number => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  return a.name > b.name ? 1 : b.name > a.name ? -1 : 0
}

// Sort the array
someAcademitesWithAges.sort(sortByName);

// Output the sorted array
console.log(someAcademitesWithAges);

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
//const sortByAges = 'TODO'
// TODO

const sortByAges = (a: Academite, b: Academite): number => b.age - a.age;
// Sort the array
someAcademitesWithAges.sort(sortByAges);

// Output the sorted array
console.log(someAcademitesWithAges);

// EOF
