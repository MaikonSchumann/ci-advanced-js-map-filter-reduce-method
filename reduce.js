// acc stands for accumulator
// curr stands for current value

// Summing an array of numbers
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const teamMembers = [
  {
    name: "Andrew",
    profession: "Developer",
    yrsExperience: 5,
  },
  {
    name: "Ariel",
    profession: "Developer",
    yrsExperience: 7,
  },
  {
    name: "Andrew",
    profession: "Designer",
    yrsExperience: 1,
  },
];
