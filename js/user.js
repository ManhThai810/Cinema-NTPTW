const movies = [
  { id: 1, title: "Conan Movie 27", genre: "Hoạt hình, trinh thám", duration: "110 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie1.jpg", description: "Thám tử Conan tiếp tục phá một vụ án bí ẩn với nhiều tình tiết bất ngờ.", showtimes: ["09:30", "13:00", "19:30"] },
  { id: 2, title: "Lật Mặt 8", genre: "Hành động, gia đình", duration: "120 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie2.jpg", description: "Câu chuyện gia đình đan xen hành động và những lựa chọn khó khăn.", showtimes: ["10:00", "15:20", "20:00"] },
  { id: 3, title: "Doraemon: Nobita Và Bản Giao Hưởng Địa Cầu", genre: "Hoạt hình, phiêu lưu", duration: "105 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie1.jpg", description: "Nobita và những người bạn bước vào chuyến phiêu lưu âm nhạc đầy màu sắc.", showtimes: ["08:30", "12:45", "17:15"] },
  { id: 4, title: "Inside Out 2", genre: "Hoạt hình, hài hước", duration: "96 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie2.jpg", description: "Những cảm xúc mới xuất hiện, tạo nên một hành trình trưởng thành vui nhộn.", showtimes: ["09:00", "14:10", "18:40"] },
  { id: 5, title: "Godzilla x Kong: Đế Chế Mới", genre: "Hành động, giả tưởng", duration: "115 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie1.jpg", description: "Hai biểu tượng khổng lồ đối mặt hiểm họa mới từ lòng Trái Đất.", showtimes: ["11:00", "16:30", "21:15"] },
  { id: 6, title: "Deadpool & Wolverine", genre: "Siêu anh hùng, hành động", duration: "127 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie2.jpg", description: "Một chuyến phiêu lưu hỗn loạn, hài hước và đầy những pha hành động tốc độ.", showtimes: ["10:40", "17:00", "22:00"] },
  { id: 7, title: "Kẻ Trộm Mặt Trăng 4", genre: "Hoạt hình, gia đình", duration: "95 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie1.jpg", description: "Gia đình Gru trở lại cùng các Minions trong một nhiệm vụ mới.", showtimes: ["08:45", "13:30", "18:00"] },
  { id: 8, title: "Mai", genre: "Tâm lý, tình cảm", duration: "131 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie2.jpg", description: "Một câu chuyện tình cảm nhiều day dứt về lựa chọn và hạnh phúc.", showtimes: ["12:00", "18:30", "21:30"] },
  { id: 9, title: "Kung Fu Panda 4", genre: "Hoạt hình, võ thuật", duration: "94 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie1.jpg", description: "Po tiếp tục hành trình tìm người kế nhiệm và bảo vệ Thung lũng Bình Yên.", showtimes: ["09:15", "14:30", "19:00"] },
  { id: 10, title: "Gặp Lại Chị Bầu", genre: "Hài, gia đình", duration: "114 phút", status: "now", releaseDate: "Đang chiếu", poster: "../assets/posters/movie2.jpg", description: "Một câu chuyện hài hước, ấm áp về tuổi trẻ, gia đình và ước mơ.", showtimes: ["10:15", "16:00", "20:20"] },
  { id: 11, title: "Avatar 3", genre: "Giả tưởng, phiêu lưu", duration: "Đang cập nhật", status: "soon", releaseDate: "20/12/2026", poster: "../assets/posters/movie1.jpg", description: "Chương tiếp theo mở rộng thế giới Pandora với những vùng đất mới.", showtimes: [] },
  { id: 12, title: "Moana Live Action", genre: "Phiêu lưu, gia đình", duration: "Đang cập nhật", status: "soon", releaseDate: "10/07/2026", poster: "../assets/posters/movie2.jpg", description: "Hành trình đại dương quen thuộc được tái hiện trong phiên bản người đóng.", showtimes: [] },
  { id: 13, title: "Zootopia 2", genre: "Hoạt hình, hài hước", duration: "Đang cập nhật", status: "soon", releaseDate: "25/11/2026", poster: "../assets/posters/movie1.jpg", description: "Judy Hopps và Nick Wilde trở lại với một vụ án mới tại Zootopia.", showtimes: [] },
  { id: 14, title: "Toy Story 5", genre: "Hoạt hình, gia đình", duration: "Đang cập nhật", status: "soon", releaseDate: "19/06/2026", poster: "../assets/posters/movie2.jpg", description: "Những món đồ chơi thân quen tiếp tục bước vào một câu chuyện mới.", showtimes: [] },
  { id: 15, title: "The Batman Part II", genre: "Hành động, tội phạm", duration: "Đang cập nhật", status: "soon", releaseDate: "01/10/2026", poster: "../assets/posters/movie1.jpg", description: "Gotham tiếp tục chìm trong bóng tối với những bí mật nguy hiểm.", showtimes: [] },
  { id: 16, title: "Frozen 3", genre: "Hoạt hình, âm nhạc", duration: "Đang cập nhật", status: "soon", releaseDate: "24/11/2027", poster: "../assets/posters/movie2.jpg", description: "Elsa và Anna bước vào một chương mới của vương quốc băng giá.", showtimes: [] }
];

let favoriteViewActive = false;

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

function createMovieCard(movie) {
  const isNowShowing = movie.status === "now";
  const liked = isFavorite(movie.id);
  const bookingButton = isNowShowing
    ? `<button onclick="requireLogin('booking', ${movie.id})">Đặt vé</button>`
    : `<button disabled>Sắp chiếu</button>`;

  return `
    <div class="movie-card">
      <div class="poster-wrap">
        <img src="${movie.poster}" alt="Poster ${movie.title}">
        <button class="favorite-btn ${liked ? "active" : ""}" onclick="toggleFavorite(${movie.id})" aria-label="${liked ? "Bỏ yêu thích" : "Thêm yêu thích"}">♥</button>
      </div>
      <div class="movie-status ${movie.status === "now" ? "status-now" : "status-soon"}">
        ${movie.status === "now" ? "Đang chiếu" : "Sắp chiếu"}
      </div>
      <h3>${movie.title}</h3>
      <p>Thể loại: ${movie.genre}</p>
      <p>Thời lượng: ${movie.duration}</p>
      <p>${movie.status === "now" ? "Lịch chiếu" : "Khởi chiếu"}: ${movie.status === "now" ? movie.showtimes.join(", ") : movie.releaseDate}</p>
      <div class="movie-actions">
        <button onclick="viewMovieDetail(${movie.id})">Xem chi tiết</button>
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
    element.innerHTML = `<p class="empty-message">Chưa có phim yêu thích. Hãy bấm trái tim trên poster để thêm phim vào danh sách.</p>`;
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

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("nowShowingList")) {
    renderHomePage();
  }

  if (document.getElementById("favoriteList") && !document.getElementById("nowShowingList")) {
    const favorites = getFavoriteIds().map(id => movies.find(movie => movie.id === id)).filter(Boolean);
    renderFavoriteList(favorites);
  }
});
