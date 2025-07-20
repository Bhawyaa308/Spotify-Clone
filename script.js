
document.addEventListener("DOMContentLoaded", () => {
  // Map song data: [selector, songTitle, artist, songSrc, coverImageSrc]
  const songData = [
    {
      selector: ".card:nth-child(1)",
      title: "Ran it up",
      artist: "Hanumankind",
      src: "music/Hanumankind - Run It Up.mp3", // Replace this path with your local or hosted audio file
      cover: "https://m.media-amazon.com/images/I/51o0YM-NKTL.jpg"
    },
    {
      selector: ".card:nth-child(2)",
      title: "Vartmaan",
      artist: "UNIYAT, Soumya Rawat",
      src: "music/Vartman Aankhon Ka Dhoka Hai - SoundWorldz.mp3",
      cover: "https://i.ytimg.com/vi/hO6Q6MRTSjg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH8CYAC0AWKAgwIABABGGUgZShlMA8=&amp;rs=AOn4CLAB5jrCgeg215nqJ2XbXvJmcCR9tQ"
    },
    {
      selector: ".card:nth-child(3)",
      title: "Passo Bem Solto",
      artist: "Atlxs",
      src: "music/ATLXS - PASSO BEM SOLTO.mp3",
      cover: "https://upload.wikimedia.org/wikipedia/en/3/34/Passo_Bem_Solto_-_Atlxs.jpg"
    },
    {
      selector: ".card:nth-child(4)",
      title: "Aasa Kooda",
      artist: "Sai Abhyankkar, Sai Smriti",
      src: "music/Aasa Kooda - PagalHits.mp3",
      cover: "https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/vKXrXMvVWm/size_m.jpg"
    },
    {
      selector: ".card:nth-child(5)",
      title: "Ishq",
      artist: "Faheem Abdullah, Rauhan Malik",
      src: "music/Main Ishq Likhu Tujhe Ho Jaye - PagalWorld.mp3",
      cover: "https://a10.gaanacdn.com/gn_img/albums/qaLKY623pO/LKYABvkzKp/size_m_1710579769.jpg"
    }
  ];

  
  // Create a single audio element for playback
  let audio = new Audio();
  
  // Playbar info
  const trackImg = document.querySelector(".track-img");
  const trackTextTitle = document.querySelector(".track-text h4");
  const trackTextArtist = document.querySelector(".track-text p");
  const playBtn = document.getElementById("play");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const volumeSlider = document.querySelector('.volume input[type="range"]');
  let currentSongIndex = 0;
  let isPlaying = false;

  // Set up playbar with song info
  function setPlaybar(index) {
    const song = songData[index];
    trackImg.src = song.cover;
    trackTextTitle.textContent = song.title;
    trackTextArtist.textContent = song.artist;
    audio.src = song.src;
    audio.load();
  }
  // Play current song
  function playSong(index) {
    setPlaybar(index);
    audio.play();
    isPlaying = true;
    playBtn.textContent = "⏸️";
    currentSongIndex = index;
  }
  // Pause song
  function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶️";
  }
  // Play/pause toggle
  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong(currentSongIndex);
    }
  });
  // Previous/Next controls
  prevBtn.addEventListener("click", () => {
    let prev = (currentSongIndex - 1 + songData.length) % songData.length;
    playSong(prev);
  });
  nextBtn.addEventListener("click", () => {
    let next = (currentSongIndex + 1) % songData.length;
    playSong(next);
  });
  // Volume control
  volumeSlider.addEventListener("input", function () {
    audio.volume = this.value / 100;
  });

  // Click on song card image: play respective song
  songData.forEach((song, i) => {
    const cards = document.querySelectorAll(song.selector);
    cards.forEach(card => {
      const img = card.querySelector('.img_set');
      if (img) {
        img.style.cursor = "pointer";
        img.addEventListener('click', () => {
          playSong(i);
        });
      }
      // Optionally, clicking play button overlay can also trigger
      const playOverlay = card.querySelector('.spotify-play-button');
      if (playOverlay) {
        playOverlay.style.cursor = "pointer";
        playOverlay.addEventListener('click', (e) => {
          e.stopPropagation();
          playSong(i);
        });
      }
    });
  });

  // Set initial song info
  setPlaybar(currentSongIndex);
});
// Place this before </body>
document.getElementById("year").textContent = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", () => {
  // Map song data: [selector, songTitle, artist, songSrc, coverImageSrc]
  const songData = [
    {
      selector: ".card2:nth-child(1)",
      title: "Raanjhan",
      artist: "	Sachet-Parampara, Tanishk Bagchi, Khan Muhammad",
      src: "music/Raanjhan-128kbps.mp3", 
      cover: "https://a10.gaanacdn.com/gn_img/albums/JD2KJyAbOL/2KJ56XLdbO/size_m.jpg"
    },
    {
      selector: ".card2:nth-child(2)",
      title: "Uska Hi Banana",
      artist: "Arijit Singh",
      src: "music/Uska Hi Banana - SirfJatt.Com.mp3",
      cover: "https://c.saavncdn.com/256/1920-Evil-Returns-Hindi-2012-20221213041144-500x500.jpg"
    },
    {
      selector: ".card2:nth-child(3)",
      title: "Kalank Title Track",
      artist: "Amaal Mallik",
      src: "music/Kalank Title Track-320kbps.mp3",
      cover: "https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1554014148/srch_zeemusic_INZ031405230.jpg"
    },
    {
      selector: ".card2:nth-child(4)",
      title: "Perfect ",
      artist: "	Ed Sheeran",
      src: "music/Perfect(PagaiWorld.com).mp3",
      cover: "https://41s.musify.club/img/68/13170354/34008464.jpg"
    },
    {
      selector: ".card2:nth-child(5)",
      title: "Dhadak Title Track",
      artist: "Ajay-Atul",
      src: "music/Dhadak Title Track-128kbps.mp3",
      cover: "https://images1.hungama.com/tr:n-a_11_m/c/1/015/54e/36870507/36870507_800x800.jpg?version=8_11"
    }
  ];

  
  // Create a single audio element for playback
  let audio = new Audio();
  
  // Playbar info
  const trackImg = document.querySelector(".track-img");
  const trackTextTitle = document.querySelector(".track-text h4");
  const trackTextArtist = document.querySelector(".track-text p");
  const playBtn = document.getElementById("play");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const volumeSlider = document.querySelector('.volume input[type="range"]');
  let currentSongIndex = 0;
  let isPlaying = false;

  // Set up playbar with song info
  function setPlaybar(index) {
    const song = songData[index];
    trackImg.src = song.cover;
    trackTextTitle.textContent = song.title;
    trackTextArtist.textContent = song.artist;
    audio.src = song.src;
    audio.load();
  }
  // Play current song
  function playSong(index) {
    setPlaybar(index);
    audio.play();
    isPlaying = true;
    playBtn.textContent = "⏸️";
    currentSongIndex = index;
  }
  // Pause song
  function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶️";
  }
  // Play/pause toggle
  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong(currentSongIndex);
    }
  });
  // Previous/Next controls
  prevBtn.addEventListener("click", () => {
    let prev = (currentSongIndex - 1 + songData.length) % songData.length;
    playSong(prev);
  });
  nextBtn.addEventListener("click", () => {
    let next = (currentSongIndex + 1) % songData.length;
    playSong(next);
  });
  // Volume control
  volumeSlider.addEventListener("input", function () {
    audio.volume = this.value / 100;
  });

  // Click on song card image: play respective song
  songData.forEach((song, i) => {
    const cards = document.querySelectorAll(song.selector);
    cards.forEach(card => {
      const img = card.querySelector('.img_set');
      if (img) {
        img.style.cursor = "pointer";
        img.addEventListener('click', () => {
          playSong(i);
        });
      }
      // Optionally, clicking play button overlay can also trigger
      const playOverlay = card.querySelector('.spotify-play-button');
      if (playOverlay) {
        playOverlay.style.cursor = "pointer";
        playOverlay.addEventListener('click', (e) => {
          e.stopPropagation();
          playSong(i);
        });
      }
    });
  });

  // Set initial song info
  setPlaybar(currentSongIndex);
});
// Place this before </body>
document.getElementById("year").textContent = new Date().getFullYear();
