export type SongProps = {
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs = [
  {
    title: "Jess",
    artist: "Jess",
    image: require(".//../../public/songs/Jesse.png"),
    link: "https://jesse-zhou.com/",
  },
  {
    title: "Brian",
    artist: "Brian",
    image: require(".//../../public/songs/Brian.png"),
    link: "https://bryantcodes.art/",
  },
  {
    title: "Bruno Simon",
    artist: "Bruno Simon",
    image: require(".//../../public/songs/bruno-simon.jpg"),
    link: "https://bruno-simon.com/",
  },
  {
    title: "One Direction",
    artist: "One Direction",
    image: require(".//../../public/songs/one-direction.png"),
    link: "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq",
  },
  {
    title: "Dennis",
    artist: "Dennis",
    image: require(".//../../public/songs/dennis.png"),
    link: "https://dennissnellenberg.com/",
  },
  {
    title: "Rafael",
    artist: "Rafael Conde",
    image: require(".//../../public/songs/Rafael-conde.png"),
    link: "https://rafa.design/",
  },
  {
    title: "Jorn",
    artist: "Jorn",
    image: require(".//../../public/songs/jorn.png"),
    link: "https://jornvandijk.com/",
  }
  
];
