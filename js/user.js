const movies = typeof getVisibleMovies === "function" ? getVisibleMovies() : [];
let favoriteViewActive = false;
let selectedScheduleMovieId = null;
let selectedScheduleDate = null;

function getUserKey(key) {
  const currentUser = typeof getCurrentUser === "function" ? getCurrentUser() : null;
  return currentUser ? `${key}_${currentUser.email}` : `${key}_guest`;
}

function getStoredIds(key) {
  const storageKey = getUserKey(key);
  return JSON.parse(localStorage.getItem(storageKey)) || [];
}

function setStoredIds(key, ids) {
  const storageKey = getUserKey(key);
  localStorage.setItem(storageKey, JSON.stringify(ids));
}

function getFavoriteIds() {
  return getStoredIds("favoriteMovies");
}

function isFavorite(movieId) {
  return getFavoriteIds().includes(Number(movieId));
}

function toggleFavorite(movieId) {
  const id = Number(movieId);
  const favorites = getFavoriteIds();
  const nextFavorites = favorites.includes(id)
    ? favorites.filter(item => item !== id)
    : [...favorites, id];

  setStoredIds("favoriteMovies", nextFavorites);
  favoriteViewActive = true;

  if (typeof renderHomePage === "function" && document.getElementById("nowShowingList")) {
    renderHomePage();
  } else if (typeof renderMovieDetail === "function") {
    renderMovieDetail();
  }
}

function showFavorites() {
  window.location.href = "favorites.html";
}

function addRecentMovie(movieId) {
  if (!getCurrentUser()) return;
  const id = Number(movieId);
  const recent = getStoredIds("recentMovies").filter(item => item !== id);
  setStoredIds("recentMovies", [id, ...recent].slice(0, 6));
}

function getMovieShowtimeText(movie) {
  if (!movie.schedules || !movie.schedules.length) return "Chua co lich";
  return movie.schedules.flatMap(day => day.times.map(item => item.time)).slice(0, 4).join(", ");
}

function createMovieCard(movie) {
  const isNowShowing = movie.status === "now";
  const liked = isFavorite(movie.id);
  const bookingButton = isNowShowing
    ? `<button onclick="requireLogin('booking', ${movie.id})">Dat ve</button>`
    : `<button disabled>Sap chieu</button>`;

  return `
    <div class="movie-card">
      <div class="poster-wrap">
        <img src="${movie.poster}" alt="Poster ${movie.title}">
        <button class="favorite-btn ${liked ? "active" : ""}" onclick="toggleFavorite(${movie.id})" aria-label="${liked ? "Bo yeu thich" : "Them yeu thich"}">♥</button>
      </div>
      <div class="movie-status ${movie.status === "now" ? "status-now" : "status-soon"}">
        ${movie.status === "now" ? "Dang chieu" : "Sap chieu"}
      </div>
      <h3>${movie.title}</h3>
      <p>The loai: ${movie.genre}</p>
      <p>Thoi luong: ${movie.duration}</p>
      <p>${movie.status === "now" ? "Lich chieu" : "Khoi chieu"}: ${movie.status === "now" ? getMovieShowtimeText(movie) : movie.releaseDate}</p>
      <div class="movie-actions">
        <button onclick="viewMovieDetail(${movie.id})">Xem chi tiet</button>
        ${bookingButton}
      </div>
    </div>
  `;
}

function renderMovieList(elementId, movieItems) {
  const element = document.getElementById(elementId);
  if (element) element.innerHTML = movieItems.map(createMovieCard).join("");
}

function renderFavoriteList(movieItems) {
  const element = document.getElementById("favoriteList");
  if (!element) return;

  if (movieItems.length === 0) {
    element.innerHTML = `<p class="empty-message">Chua co phim yeu thich. Hay bam trai tim tren poster de them phim vao danh sach.</p>`;
    return;
  }

  element.innerHTML = movieItems.map(createMovieCard).join("");
}

function renderHomePage() {
  const nowShowingMovies = movies.filter(movie => movie.status === "now");
  const comingSoonMovies = movies.filter(movie => movie.status === "soon");
  const favorites = getFavoriteIds().map(id => movies.find(movie => movie.id === id)).filter(Boolean);
  const recentMovies = getStoredIds("recentMovies").map(id => movies.find(movie => movie.id === id)).filter(Boolean);

  renderMovieList("nowShowingList", nowShowingMovies);
  renderMovieList("comingSoonList", comingSoonMovies);
  renderFavoriteList(favorites);
  renderMovieList("recentList", recentMovies);

  toggleSection("favoriteSection", favoriteViewActive || favorites.length > 0);
  toggleSection("recentSection", recentMovies.length > 0 && Boolean(getCurrentUser()));
}

function toggleSection(sectionId, shouldShow) {
  const section = document.getElementById(sectionId);
  if (section) section.style.display = shouldShow ? "block" : "none";
}

function viewMovieDetail(movieId) {
  addRecentMovie(movieId);
  window.location.href = `movie-detail.html?movieId=${movieId}`;
}

function scrollMovies(listId, direction) {
  const movieList = document.getElementById(listId);
  if (!movieList) return;
  const card = movieList.querySelector(".movie-card");
  const cardWidth = card ? card.offsetWidth + 24 : 274;
  movieList.scrollBy({ left: direction * cardWidth * 2, behavior: "smooth" });
}

function ensureScheduleModal() {
  if (document.getElementById("scheduleModal")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div id="scheduleModal" class="schedule-modal">
      <div class="schedule-content">
        <div class="schedule-header">
          <h2 id="scheduleTitle">Lich chieu</h2>
          <button class="schedule-close" onclick="closeScheduleModal()" aria-label="Dong">&times;</button>
        </div>
        <h3 id="scheduleCinema">Rap Beta Xuan Thuy</h3>
        <div class="schedule-days" id="scheduleDays"></div>
        <div class="schedule-format">2D PHU DE</div>
        <div class="schedule-times" id="scheduleTimes"></div>
        <div class="late-note"><span></span> Suat chieu muon tu 22h00</div>
      </div>
    </div>
  `);
}

function openScheduleModal(movieId) {
  const movie = movies.find(item => item.id === Number(movieId));
  if (!movie || !movie.schedules || !movie.schedules.length) {
    alert("Phim nay chua co lich chieu.");
    return;
  }

  ensureScheduleModal();
  selectedScheduleMovieId = movie.id;
  selectedScheduleDate = movie.schedules[0].date;
  document.getElementById("scheduleTitle").textContent = `LICH CHIEU - ${movie.title}`;
  renderScheduleModal();
  document.getElementById("scheduleModal").style.display = "flex";
}

function closeScheduleModal() {
  const modal = document.getElementById("scheduleModal");
  if (modal) modal.style.display = "none";
}

function selectScheduleDate(date) {
  selectedScheduleDate = date;
  renderScheduleModal();
}

function renderScheduleModal() {
  const movie = movies.find(item => item.id === selectedScheduleMovieId);
  if (!movie) return;

  document.getElementById("scheduleDays").innerHTML = movie.schedules.map(day => `
    <button class="schedule-day ${day.date === selectedScheduleDate ? "active" : ""}" onclick="selectScheduleDate('${day.date}')">
      <strong>${day.label.split("/")[0]}</strong><span>/${day.label.split("/").slice(1).join("/")}</span>
    </button>
  `).join("");

  const selectedDay = movie.schedules.find(day => day.date === selectedScheduleDate) || movie.schedules[0];
  document.getElementById("scheduleTimes").innerHTML = selectedDay.times.map(item => `
    <button class="schedule-time ${item.late ? "late" : ""}" onclick="bookSelectedShowtime('${selectedDay.date}', '${item.time}')">
      <strong>${item.time}</strong>
      <small>${item.seats} ghe trong</small>
    </button>
  `).join("");
}

function bookSelectedShowtime(date, time) {
  closeScheduleModal();
  window.location.href = `booking.html?movieId=${selectedScheduleMovieId}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("nowShowingList")) {
    renderHomePage();
  }

  if (document.getElementById("favoriteList") && !document.getElementById("nowShowingList")) {
    const favorites = getFavoriteIds().map(id => movies.find(movie => movie.id === id)).filter(Boolean);
    renderFavoriteList(favorites);
  }
});
