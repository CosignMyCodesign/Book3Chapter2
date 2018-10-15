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
  healthCare: "Affordable healthcare for all. No freebies!",
  crimeAndEnforcement: "Prison-reform is a must, our system is flawed"
}

let donationForm = "https://giveMeAllYoMoney.com"

let calendarOfEvents = [
  {date: "8-15-18",
   event: "Campaign 1"},
  {date: "8-21-18",
   event: "Charity Work" },
  {date: "9-1-18",
   event:"Campaign 2" },
  {date: "9-8-18",
   event:"Save the world"},
  {date: "9-19-18",
  event: "Campaign 3"}]

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

let candidateInfo = {
  
  biography: "Wonderwoman is a superhero appearing in American comic books published by DC Comics. She is a founding member of the Justice League, and an ambassador of the Amazon people. She has a strong interest in politics and has finally decided to accept the challenge.",

  imageGallery: ["CandidatePics/Headshot1.jpg", "CandidatePics/Family-Pic.jpg", "CandidatePics/Constituents.jpg"],

  missionStatement: "JUSTICE! One congressional district at a time."
}

let registerHere = "https://sos.tn.gov/products/elections/register-vote"