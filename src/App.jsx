function App() {
  return (
    <div className="bg-customBlack min-h-screen flex flex-col items-center p-6">
      <header className="text-center mb-8 text-marbelWhite">
        <h1 className="text-3xl font-bold">Anime and Manga Reference</h1>
        <p className="text-lg mt-2">
          Your go-to resource for anime and manga related content.
        </p>
      </header>

      <main className="flex-grow w-full max-w-4xl">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-marbelWhite">
            Anime Streaming Sites
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <a
                href="https://everythingmoe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://cdn.animixplay.to/s/fav/everything.png"
                  alt="EverythingMoe"
                  className="mr-2"
                />
                EverythingMoe
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://animepahe.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/pahe.png"
                  alt="Animepahe"
                  className="mr-2"
                />
                Animepahe
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://hianime.to/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/hianime.png"
                  alt="HiAnime"
                  className="mr-2"
                />
                HiAnime
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://aniplaynow.live/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/aniplaynow.png"
                  alt="Aniplay"
                  className="mr-2"
                />
                Aniplay
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.crunchyroll.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://external-content.duckduckgo.com/ip3/www.crunchyroll.com.ico"
                  alt="Crunchyroll"
                  className="mr-2"
                />
                Crunchyroll
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-marbelWhite">
            Additional Resources
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <a
                href="https://www.livechart.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/lchart.png"
                  alt="Livechart - Airing schedule"
                  className="mr-2"
                />
                Livechart - Airing schedule
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://chiaki.site/?/tools/watch_order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/chiaki.png"
                  alt="Chiaki - Series release order"
                  className="mr-2"
                />
                Chiaki - Series release order
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://myanimelist.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/mal.png"
                  alt="MyAnimeList - Anime data"
                  className="mr-2"
                />
                MyAnimeList - Anime data
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://jikan.moe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://cdn.animixplay.to/s/fav/jikan.png"
                  alt="Jikan - MAL Search"
                  className="mr-2"
                />
                Jikan - MAL Search
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://anilist.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/anilist.png"
                  alt="AniList - Genre tags"
                  className="mr-2"
                />
                AniList - Genre tags
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://disqus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://cdn.animixplay.to/s/fav/disqus.png"
                  alt="Disqus - Comments section"
                  className="mr-2"
                />
                Disqus - Comments section
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://allmanga.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/allani.png"
                  alt="Allmanga - AL Manga"
                  className="mr-2"
                />
                Allmanga - AL Manga
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://mangareader.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://cdn.animixplay.to/s/fav/mangar.png"
                  alt="Manga reader - Manga links"
                  className="mr-2"
                />
                Manga reader - Manga links
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://comick.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <img
                  src="https://static.everythingmoe.com/icons/comick.png"
                  alt="ComicK - Manga links"
                  className="mr-2"
                />
                ComicK - Manga links
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Anime and Manga Reference. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
