import Description from './components/Description';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className='root'>
      <header class="header">
        <div class="header__menu">
          <a class="header__web" href="https://marshakbooks.ru"><img class="header__logo" src=""
            alt="Логотип" /></a>
          <button class="header__button button">Стриминги</button>
          <nav class="header__links">
            <a class="header__link" target="_blank" href="#">Яндекс.Музыка</a>
            <a class="header__link" target="_blank" href="#">Spotify</a>
            <a class="header__link" target="_blank" href="#">Apple Music</a>
            <a class="header__link" target="_blank" href="#">VK Music</a>
          </nav>
        </div>
        <h1 class="header__title">
          <img class="header__image" src="" alt="Турбина" />
        </h1>
        <section class="player">
          <button class="button__play button"></button>
          <div class="song current">
            <div class="song__progress"></div>
            <div class="song__title animated">№6 Поезия — Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров
					<div class="song__time">0:24</div>
            </div>
          </div>
          <button class="button button__text">Tекст песни</button>
          <button class="button button__toggle"></button>
        </section>
        <section class="playlist">
          <h4 class="song__subtitle">Релизы/Текст песни</h4>
          <div class="song__title playlist_song">№6 Поезия — Мукулатура feat. Саша Петров</div>
          <div class="song__title playlist_song">№5 Лодка — СБПЧ feat. Маруся Романова</div>
          <div class="song__title playlist_song">№4 Кирпичи — Инди группа feat. Пётр Сковородников</div>
          <div class="song__title playlist_song">№6 Поезия — Мукулатура feat. Саша Петров</div>
          <div class="song__title playlist_song">№5 Лодка — СБПЧ feat. Маруся Романова</div>
          <div class="song__title playlist_song">№4 Кирпичи — Инди группа feat. Пётр Сковородников</div>
        </section>
      </header>
      <main className="content">
        <Description />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
