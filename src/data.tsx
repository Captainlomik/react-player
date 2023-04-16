import { v4 as uuidv4 } from "uuid";

export default function chillHop() {
  return [
    {
      name: "Early Rise",
      artist: "illiterate, Mr Slipz",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#27633f", "#a6b892"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=48087",
    },
    {
      name: "About It",
      artist: "Felty",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#e7c993", "#692824"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45233",
    },
    {
      name: "Cloud Zone",
      artist: "Evil Needle, Misha",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#c4a054", "#a36a63"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45231",
    },
    {
      name: "Oh Let's Ride",
      artist: "Teddy Roxpin",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#dfbb89", "#7a5430"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45229",
    },
  ];
}
