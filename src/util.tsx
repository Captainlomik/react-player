import { v4 as uuidv4 } from "uuid";

export default function chillHop() {
  return [
    {
      name: "Early Rise",
      artist: "illiterate, Mr Slipz",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#bfccae", "#c2d2d1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=48087",
    },
  ];
}
