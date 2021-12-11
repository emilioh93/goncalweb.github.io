const datos = [
  {
    enlace: "https://open.spotify.com/artist/0AgV5f8reGCw563caRiW6x",
    icono: "spotify",
    nombre: "Spotify",
  },
  {
    enlace: "https://www.youtube.com/c/chukahurtado",
    icono: "youtube",
    nombre: "YouTube",
  },
  {
    enlace: "https://music.youtube.com/channel/UC99ZJsmerzTwFw5-3sA1qMw",
    icono: "youtube-square",
    nombre: "YouTube Music",
  },
  {
    enlace: "https://music.apple.com/co/artist/chuka-hurtado/1455257992",
    icono: "apple",
    nombre: "Apple Music",
  },
  {
    enlace: "https://music.amazon.com/artists/B07PDJX36J/chuka-hurtado",
    icono: "amazon",
    nombre: "Amazon Music",
  },
  {
    enlace: "https://www.deezer.com/us/artist/61012442",
    icono: "deezer",
    nombre: "Deezer",
  },
  {
    enlace: "https://www.instagram.com/chukahurtado/",
    icono: "instagram",
    nombre: "Instagram",
  },
];

datos?.map(
  (dato) =>
    (document.getElementById("LinkTree").innerHTML += `
      <div class="contenedorLinkTree">
        <a class="enlaceLinkTree" target="_blank" href=${dato.enlace}>
            <div class="botonLinkTree">
                <div class="col-1">
                    <i class="fab fa-${dato.icono} fa-2x"></i>
                </div>
                <div class="col-11 text-center">
                    <span class="nombreLinkTree">${dato.nombre}</span>
                </div>
            </div>
        </a>
      </div>
    `)
);
