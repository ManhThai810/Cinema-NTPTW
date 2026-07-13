const DEFAULT_MOVIES = [
  {
    id: 1,
    title: "Conan Movie 27",
    genre: "Hoat hinh, trinh tham",
    duration: "110 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie1.jpg",
    description: "Tham tu Conan tiep tuc pha mot vu an bi an voi nhieu tinh tiet bat ngo.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "15:45", seats: 123 }, { time: "16:30", seats: 140 }, { time: "18:15", seats: 164 }, { time: "20:15", seats: 113 }, { time: "22:15", seats: 155, late: true }] },
      { date: "2026-07-14", label: "14/07 - T3", times: [{ time: "09:30", seats: 120 }, { time: "13:00", seats: 98 }, { time: "19:30", seats: 156 }] },
      { date: "2026-07-15", label: "15/07 - T4", times: [{ time: "10:00", seats: 88 }, { time: "14:20", seats: 132 }, { time: "21:00", seats: 101 }] }
    ]
  },
  {
    id: 2,
    title: "Lat Mat 8",
    genre: "Hanh dong, gia dinh",
    duration: "120 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie2.jpg",
    description: "Cau chuyen gia dinh dan xen hanh dong va nhung lua chon kho khan.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "10:00", seats: 150 }, { time: "15:20", seats: 126 }, { time: "20:00", seats: 114 }] },
      { date: "2026-07-14", label: "14/07 - T3", times: [{ time: "11:30", seats: 142 }, { time: "18:10", seats: 103 }, { time: "22:20", seats: 90, late: true }] }
    ]
  },
  {
    id: 3,
    title: "Doraemon: Nobita Va Ban Giao Huong Dia Cau",
    genre: "Hoat hinh, phieu luu",
    duration: "105 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie1.jpg",
    description: "Nobita va nhung nguoi ban buoc vao chuyen phieu luu am nhac day mau sac.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "08:30", seats: 160 }, { time: "12:45", seats: 121 }, { time: "17:15", seats: 115 }] },
      { date: "2026-07-15", label: "15/07 - T4", times: [{ time: "09:10", seats: 144 }, { time: "16:40", seats: 99 }] }
    ]
  },
  {
    id: 4,
    title: "Inside Out 2",
    genre: "Hoat hinh, hai huoc",
    duration: "96 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie2.jpg",
    description: "Nhung cam xuc moi xuat hien, tao nen mot hanh trinh truong thanh vui nhon.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "09:00", seats: 116 }, { time: "14:10", seats: 130 }, { time: "18:40", seats: 104 }] },
      { date: "2026-07-14", label: "14/07 - T3", times: [{ time: "10:30", seats: 119 }, { time: "19:15", seats: 87 }] }
    ]
  },
  {
    id: 5,
    title: "Godzilla x Kong: De Che Moi",
    genre: "Hanh dong, gia tuong",
    duration: "115 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie1.jpg",
    description: "Hai bieu tuong khong lo doi mat hiem hoa moi tu long Trai Dat.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "11:00", seats: 100 }, { time: "16:30", seats: 92 }, { time: "21:15", seats: 80 }] },
      { date: "2026-07-15", label: "15/07 - T4", times: [{ time: "13:30", seats: 111 }, { time: "22:00", seats: 77, late: true }] }
    ]
  },
  {
    id: 6,
    title: "Deadpool & Wolverine",
    genre: "Sieu anh hung, hanh dong",
    duration: "127 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie2.jpg",
    description: "Mot chuyen phieu luu hon loan, hai huoc va day nhung pha hanh dong toc do.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "10:40", seats: 118 }, { time: "17:00", seats: 93 }, { time: "22:00", seats: 65, late: true }] }
    ]
  },
  {
    id: 7,
    title: "Ke Trom Mat Trang 4",
    genre: "Hoat hinh, gia dinh",
    duration: "95 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie1.jpg",
    description: "Gia dinh Gru tro lai cung cac Minions trong mot nhiem vu moi.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "08:45", seats: 154 }, { time: "13:30", seats: 129 }, { time: "18:00", seats: 108 }] }
    ]
  },
  {
    id: 8,
    title: "Mai",
    genre: "Tam ly, tinh cam",
    duration: "131 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie2.jpg",
    description: "Mot cau chuyen tinh cam nhieu day dut ve lua chon va hanh phuc.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "12:00", seats: 97 }, { time: "18:30", seats: 83 }, { time: "21:30", seats: 68 }] }
    ]
  },
  {
    id: 9,
    title: "Kung Fu Panda 4",
    genre: "Hoat hinh, vo thuat",
    duration: "94 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie1.jpg",
    description: "Po tiep tuc hanh trinh tim nguoi ke nhiem va bao ve Thung lung Binh Yen.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "09:15", seats: 140 }, { time: "14:30", seats: 112 }, { time: "19:00", seats: 99 }] }
    ]
  },
  {
    id: 10,
    title: "Gap Lai Chi Bau",
    genre: "Hai, gia dinh",
    duration: "114 phut",
    status: "now",
    visible: true,
    releaseDate: "Dang chieu",
    poster: "../assets/posters/movie2.jpg",
    description: "Mot cau chuyen hai huoc, am ap ve tuoi tre, gia dinh va uoc mo.",
    schedules: [
      { date: "2026-07-13", label: "13/07 - T2", times: [{ time: "10:15", seats: 131 }, { time: "16:00", seats: 105 }, { time: "20:20", seats: 91 }] }
    ]
  },
  { id: 11, title: "Avatar 3", genre: "Gia tuong, phieu luu", duration: "Dang cap nhat", status: "soon", visible: true, releaseDate: "20/12/2026", poster: "../assets/posters/movie1.jpg", description: "Chuong tiep theo mo rong the gioi Pandora voi nhung vung dat moi.", schedules: [] },
  { id: 12, title: "Moana Live Action", genre: "Phieu luu, gia dinh", duration: "Dang cap nhat", status: "soon", visible: true, releaseDate: "10/07/2026", poster: "../assets/posters/movie2.jpg", description: "Hanh trinh dai duong quen thuoc duoc tai hien trong phien ban nguoi dong.", schedules: [] },
  { id: 13, title: "Zootopia 2", genre: "Hoat hinh, hai huoc", duration: "Dang cap nhat", status: "soon", visible: true, releaseDate: "25/11/2026", poster: "../assets/posters/movie1.jpg", description: "Judy Hopps va Nick Wilde tro lai voi mot vu an moi tai Zootopia.", schedules: [] },
  { id: 14, title: "Toy Story 5", genre: "Hoat hinh, gia dinh", duration: "Dang cap nhat", status: "soon", visible: true, releaseDate: "19/06/2026", poster: "../assets/posters/movie2.jpg", description: "Nhung mon do choi than quen tiep tuc buoc vao mot cau chuyen moi.", schedules: [] },
  { id: 15, title: "The Batman Part II", genre: "Hanh dong, toi pham", duration: "Dang cap nhat", status: "soon", visible: true, releaseDate: "01/10/2026", poster: "../assets/posters/movie1.jpg", description: "Gotham tiep tuc chim trong bong toi voi nhung bi mat nguy hiem.", schedules: [] },
  { id: 16, title: "Frozen 3", genre: "Hoat hinh, am nhac", duration: "Dang cap nhat", status: "soon", visible: true, releaseDate: "24/11/2027", poster: "../assets/posters/movie2.jpg", description: "Elsa va Anna buoc vao mot chuong moi cua vuong quoc bang gia.", schedules: [] }
];

function normalizeMovie(movie) {
  return {
    ...movie,
    visible: movie.visible !== false,
    schedules: movie.schedules || (movie.showtimes ? [{ date: "2026-07-13", label: "13/07 - T2", times: movie.showtimes.map(time => ({ time, seats: 120 })) }] : [])
  };
}

function getMovies() {
  const storedMovies = JSON.parse(localStorage.getItem("movies"));
  const movies = storedMovies && storedMovies.length ? storedMovies : DEFAULT_MOVIES;
  return movies.map(normalizeMovie);
}

function saveMovies(movies) {
  localStorage.setItem("movies", JSON.stringify(movies.map(normalizeMovie)));
}

function getVisibleMovies() {
  return getMovies().filter(movie => movie.visible !== false);
}

function renderAdminMovies() {
  const tableBody = document.getElementById("adminMovieTable");
  if (!tableBody) return;

  const movies = getMovies();
  tableBody.innerHTML = movies.map(movie => `
    <tr>
      <td>${movie.id}</td>
      <td>${movie.title}</td>
      <td>${movie.genre}</td>
      <td>${movie.duration}</td>
      <td>${movie.status === "now" ? "Dang chieu" : "Sap chieu"}</td>
      <td>${movie.visible ? "Hien" : "An"}</td>
      <td>${formatScheduleSummary(movie)}</td>
      <td class="admin-actions">
        <button onclick="editMovie(${movie.id})">Sua</button>
        <button onclick="toggleMovieVisibility(${movie.id})">${movie.visible ? "An" : "Hien"}</button>
        <button class="danger-btn" onclick="deleteMovie(${movie.id})">Xoa</button>
      </td>
    </tr>
  `).join("");
}

function formatScheduleSummary(movie) {
  if (!movie.schedules.length) return movie.releaseDate || "Chua co lich";
  return movie.schedules.map(day => `${day.label}: ${day.times.map(item => item.time).join(", ")}`).join(" | ");
}

function readScheduleInput() {
  const rawValue = document.getElementById("movieSchedules").value.trim();
  if (!rawValue) return [];

  return rawValue.split("\n").map(line => {
    const parts = line.split("|").map(part => part.trim());
    const times = (parts[2] || "").split(",").map(item => {
      const [time, seats] = item.trim().split(":");
      return { time, seats: Number(seats) || 120, late: Number(time.replace(":", "")) >= 2200 };
    }).filter(item => item.time);

    return { date: parts[0], label: parts[1] || parts[0], times };
  }).filter(day => day.date && day.times.length);
}

function fillMovieForm(movie = null) {
  document.getElementById("movieId").value = movie ? movie.id : "";
  document.getElementById("movieTitle").value = movie ? movie.title : "";
  document.getElementById("movieGenre").value = movie ? movie.genre : "";
  document.getElementById("movieDuration").value = movie ? movie.duration : "";
  document.getElementById("movieStatus").value = movie ? movie.status : "now";
  document.getElementById("movieVisible").checked = movie ? movie.visible !== false : true;
  document.getElementById("movieReleaseDate").value = movie ? movie.releaseDate : "";
  document.getElementById("moviePoster").value = movie ? movie.poster : "../assets/posters/movie1.jpg";
  document.getElementById("movieDescription").value = movie ? movie.description : "";
  document.getElementById("movieSchedules").value = movie ? movie.schedules.map(day => `${day.date}|${day.label}|${day.times.map(item => `${item.time}:${item.seats}`).join(",")}`).join("\n") : "";
}

function editMovie(movieId) {
  const movie = getMovies().find(item => item.id === Number(movieId));
  if (!movie) return;
  fillMovieForm(movie);
  document.getElementById("movieTitle").focus();
}

function toggleMovieVisibility(movieId) {
  const movies = getMovies().map(movie => movie.id === Number(movieId) ? { ...movie, visible: !movie.visible } : movie);
  saveMovies(movies);
  renderAdminMovies();
}

function deleteMovie(movieId) {
  if (!confirm("Ban co chac muon xoa phim nay?")) return;
  saveMovies(getMovies().filter(movie => movie.id !== Number(movieId)));
  renderAdminMovies();
}

function saveMovieFromForm(event) {
  event.preventDefault();

  const movies = getMovies();
  const movieId = Number(document.getElementById("movieId").value);
  const movie = {
    id: movieId || Math.max(0, ...movies.map(item => item.id)) + 1,
    title: document.getElementById("movieTitle").value.trim(),
    genre: document.getElementById("movieGenre").value.trim(),
    duration: document.getElementById("movieDuration").value.trim(),
    status: document.getElementById("movieStatus").value,
    visible: document.getElementById("movieVisible").checked,
    releaseDate: document.getElementById("movieReleaseDate").value.trim(),
    poster: document.getElementById("moviePoster").value.trim(),
    description: document.getElementById("movieDescription").value.trim(),
    schedules: readScheduleInput()
  };

  if (!movie.title || !movie.genre) {
    alert("Vui long nhap ten phim va the loai.");
    return;
  }

  const nextMovies = movieId ? movies.map(item => item.id === movieId ? movie : item) : [...movies, movie];
  saveMovies(nextMovies);
  fillMovieForm();
  renderAdminMovies();
}

document.addEventListener("DOMContentLoaded", function () {
  const movieForm = document.getElementById("movieForm");
  if (movieForm) {
    saveMovies(getMovies());
    movieForm.addEventListener("submit", saveMovieFromForm);
    document.getElementById("resetMovieForm").addEventListener("click", function () {
      fillMovieForm();
    });
    renderAdminMovies();
  }
});
