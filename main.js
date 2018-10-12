// Practice #1
let pet = {
  name: "Lilly",
  species: "Boxer",
  nickname: ["Silly", "Sissy", "Willy"],
  age: 5
}


// Practice #2
const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
      formed: 1960,
      disbanded: 1970
  },
  members: [
      {
          name: "George Harrison",
          birth: 1943,
          death: 2001
      },
      {
          name: "Paul McCartney",
          birth: 1942,
          death: null
      },
      {
          name: "John Lennon",
          birth: 1940,
          death: 1980
      },
      {
          name: "Ringo Starr",
          birth: 1940,
          death: null
      }
  ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);

// Challenge #1 (challenges should only be done after practices are done)
// Wonder Woman Example
let herDistrict = "Tennessee's 5th Congressional District";

let platformStatements = {
  taxes: "Lower taxes for the middle class",
  jobs: "We need to bring jobs back on-shore",
  infrastructure: "Transportation development is the top priority",
  healthCare: "Affordable healthcare for all. No free shit",
  crimeAndEnforcement: "Prison-reform is a must, our system is incredibly flawed"
}

let donationForm = "https://giveMeAllYoMoney.com"

let calendarOfEvents = ["Campaign 1", "Charity-work", "Campaign 2", "Save the world", "Campaign 3"]

let volunteerInformation  = { 
  name: "Gary",
  address: "123 industrial blvd",
  email: "iliketurtles@gmail.com",
  phoneNumber: "615-555-5555",
  availability: ["Monday", "Wednesday", "Friday"],
  willingToDo: {
    answerCalls: true,
    takePolls: false,
    getCoffee: true
  }
}

let biography = "A bunch of text about candidate. A bunch of text about candidate. A bunch of text about candidate. A bunch of text about candidate. A bunch of text about candidate. A bunch of text about candidate. A bunch of text about candidate."

let imageGallery = ["headshot1", "family-pic", "constituents-pic"]

let missionStatement = "blahblahblahblahblah"

let registerHere = "link to register here"