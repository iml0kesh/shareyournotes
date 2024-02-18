const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userNotes: [
    {
      title: String,
      content: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

async function createUser() {
  const user = new User({
    userName: "Bill gates",
    userId: "Bill@123",
    userEmail: "Bill@gmail.com",
    userPassword: "Bill@0101",
    userNotes: [
      {
        title: "The Stars",
        content:
          "Stars, those luminous beacons scattered across the cosmic canvas, are captivating celestial entities that have fascinated humanity for eons. Composed primarily of hydrogen and helium, stars illuminate the vastness of space through the intricate dance of nuclear fusion in their cores. Their radiance, visible from astronomical distances, allows us to peer into the depths of the cosmos and explore the secrets of our universe.Diverse in size, temperature, and color, stars span a vast spectrum of cosmic diversity. From the scorching blue brilliance of massive O-type stars to the cool, reddish glow of smaller M-type stars, each point of light in the night sky tells a unique tale of its composition and life cycle. Our own Sun, a middle-aged star, serves as the radiant heart of our solar system, nurturing life on Earth with its benevolent warmth and light. Stars, like cosmic alchemists, forge elements in their cores, seeding the universe with the building blocks of planets, moons, and life itself. Their life cycles, determined by mass, range from the quiet glow of long-lived dwarf stars to the explosive grandeur of supernovae, heralding the end of massive stellar journeys. Binary and multiple star systems, where stars orbit one another, add complexity to the cosmic ballet, painting constellations in the night sky that have guided and inspired cultures throughout history. In the vast expanse of the cosmos, the study of stars, astronomy, becomes a key to unlocking the mysteries of our existence. It unveils the origins of galaxies, the formation of elements, and the ever-expanding story of the universe. Stars, in their brilliant radiance, continue to beckon humanity to gaze upwards, inviting us to contemplate the cosmic wonders that lie beyond our terrestrial abode.",
      },
    ],
  });

  const result = await user.save();
  console.log(result);
}

// createUser();

module.exports = mongoose.model("Users", userSchema);
