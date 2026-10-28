const photo = (id, width = 720) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const dishes = [
  { id: "pho-bo", name: "Phở bò", cuisine: "Việt Nam", category: "Mì & phở", minutes: 45, description: "Nước dùng thơm, bánh phở mềm và thịt bò tái.", image: photo("photo-1569562211093-4ed0d0758f12"), badge: "MÓN QUỐC DÂN", vegetarian: false },
  { id: "bun-cha", name: "Bún chả Hà Nội", cuisine: "Việt Nam", category: "Cơm & bún", minutes: 35, description: "Thịt nướng than hoa, bún tươi và nước chấm chua ngọt.", image: photo("photo-1555939594-58d7cb561ad1"), badge: "BESTSELLER", vegetarian: false },
  { id: "banh-mi", name: "Bánh mì đặc biệt", cuisine: "Việt Nam", category: "Món Việt", minutes: 15, description: "Ổ bánh giòn rụm, pate béo và đồ chua giòn mát.", image: photo("photo-1600688640154-9619e002df30"), badge: "NHANH GỌN", vegetarian: false },
  { id: "com-tam", name: "Cơm tấm sườn bì", cuisine: "Việt Nam", category: "Cơm & bún", minutes: 30, description: "Sườn nướng đậm đà, bì thính và mỡ hành thơm.", image: photo("photo-1512058564366-18510be2db19"), badge: "ĐẬM ĐÀ", vegetarian: false },
  { id: "goi-cuon", name: "Gỏi cuốn tôm thịt", cuisine: "Việt Nam", category: "Món Việt", minutes: 20, description: "Cuốn tươi thanh mát, chấm tương đậu phộng.", image: photo("photo-1547592180-85f173990554"), badge: "TƯƠI NGON", vegetarian: false },
  { id: "bun-bo", name: "Bún bò Huế", cuisine: "Việt Nam", category: "Mì & phở", minutes: 45, description: "Nước lèo cay thơm, sả đậm vị miền Trung.", image: photo("photo-1569718212165-3a8278d5f624"), badge: "CAY THƠM", vegetarian: false },
  { id: "mi-quang", name: "Mì Quảng", cuisine: "Việt Nam", category: "Mì & phở", minutes: 35, description: "Sợi mì vàng, tôm thịt và bánh tráng giòn.", image: photo("photo-1555126634-323283e090fa"), badge: "MIỀN TRUNG", vegetarian: false },
  { id: "banh-xeo", name: "Bánh xèo miền Tây", cuisine: "Việt Nam", category: "Món Việt", minutes: 30, description: "Vỏ bánh vàng giòn, cuốn rau sống thật đã.", image: photo("photo-1601050690597-df0568f70950"), badge: "GIÒN RỤM", vegetarian: false },
  { id: "bun-rieu", name: "Bún riêu cua", cuisine: "Việt Nam", category: "Mì & phở", minutes: 40, description: "Vị cua đồng ngọt thanh cùng cà chua chín mọng.", image: photo("photo-1547592180-85f173990554"), badge: "VỊ NHÀ", vegetarian: false },
  { id: "hu-tieu", name: "Hủ tiếu Nam Vang", cuisine: "Việt Nam", category: "Mì & phở", minutes: 35, description: "Tô hủ tiếu đầy đặn với tôm, thịt và trứng cút.", image: photo("photo-1569718212165-3a8278d5f624"), badge: "ĐẦY ĐẶN", vegetarian: false },
  { id: "bun-thit-nuong", name: "Bún thịt nướng", cuisine: "Việt Nam", category: "Cơm & bún", minutes: 25, description: "Thịt nướng thơm lừng trên nền bún và rau tươi.", image: photo("photo-1555939594-58d7cb561ad1"), badge: "MÓN TỦ", vegetarian: false },
  { id: "cha-gio", name: "Chả giò giòn tan", cuisine: "Việt Nam", category: "Món Việt", minutes: 25, description: "Nhân thịt nấm thơm ngon, cuốn cùng rau sống.", image: photo("photo-1601050690597-df0568f70950"), badge: "GIÒN TAN", vegetarian: false },
  { id: "com-ga", name: "Cơm gà Hội An", cuisine: "Việt Nam", category: "Cơm & bún", minutes: 35, description: "Cơm vàng nghệ ăn cùng gà xé và rau thơm.", image: photo("photo-1512058564366-18510be2db19"), badge: "HỘI AN", vegetarian: false },
  { id: "ca-kho", name: "Cá kho tộ", cuisine: "Việt Nam", category: "Cơm & bún", minutes: 40, description: "Cá kho tiêu đậm vị, ăn với cơm trắng nóng hổi.", image: photo("photo-1547592180-85f173990554"), badge: "CƠM NHÀ", vegetarian: false },
  { id: "pho-chay", name: "Phở nấm chay", cuisine: "Việt Nam", category: "Đồ chay", minutes: 25, description: "Nước dùng rau củ thanh ngọt, nấm tươi đậm đà.", image: photo("photo-1512621776951-a57141f2eefd"), badge: "THUẦN CHAY", vegetarian: true },
  { id: "com-chay", name: "Cơm rau củ", cuisine: "Việt Nam", category: "Đồ chay", minutes: 20, description: "Bữa cơm đầy màu sắc với rau củ theo mùa.", image: photo("photo-1546069901-ba9599a7e63c"), badge: "THANH LÀNH", vegetarian: true },
  { id: "sushi", name: "Sushi cá hồi", cuisine: "Nhật Bản", category: "Món quốc tế", minutes: 25, description: "Cá hồi tươi béo mềm cùng cơm giấm dẻo thơm.", image: photo("photo-1579871494447-9811cf80d66c"), badge: "TƯƠI MỖI NGÀY", vegetarian: false },
  { id: "ramen", name: "Ramen tonkotsu", cuisine: "Nhật Bản", category: "Mì & phở", minutes: 40, description: "Nước dùng xương hầm béo ngậy, mì dai chuẩn vị.", image: photo("photo-1569718212165-3a8278d5f624"), badge: "ẤM BỤNG", vegetarian: false },
  { id: "bibimbap", name: "Bibimbap", cuisine: "Hàn Quốc", category: "Cơm & bún", minutes: 25, description: "Cơm trộn rau củ, thịt bò và tương ớt gochujang.", image: photo("photo-1512058564366-18510be2db19"), badge: "MÀU SẮC", vegetarian: false },
  { id: "tteokbokki", name: "Tokbokki phô mai", cuisine: "Hàn Quốc", category: "Món quốc tế", minutes: 20, description: "Bánh gạo dẻo cay nhẹ, phủ phô mai tan chảy.", image: photo("photo-1563245372-f21724e3856d"), badge: "HOT TREND", vegetarian: true },
  { id: "pad-thai", name: "Pad Thai", cuisine: "Thái Lan", category: "Mì & phở", minutes: 25, description: "Mì xào tôm chua ngọt, thơm lạc rang và chanh.", image: photo("photo-1555126634-323283e090fa"), badge: "CHUA NGỌT", vegetarian: false },
  { id: "green-curry", name: "Cà ri xanh Thái", cuisine: "Thái Lan", category: "Món quốc tế", minutes: 35, description: "Cốt dừa béo thơm, cà ri xanh và húng quế.", image: photo("photo-1603894584373-5ac82b2ae398"), badge: "BÉO THƠM", vegetarian: false },
  { id: "pizza", name: "Pizza Margherita", cuisine: "Ý", category: "Món quốc tế", minutes: 35, description: "Phô mai mozzarella, sốt cà chua và húng quế.", image: photo("photo-1565299624946-b28f40a0ae38"), badge: "ĐANG HOT", vegetarian: true },
  { id: "pasta", name: "Pasta sốt kem nấm", cuisine: "Ý", category: "Món quốc tế", minutes: 25, description: "Mì Ý dai mềm quyện sốt kem nấm thơm ngậy.", image: photo("photo-1473093295043-cdd812d0e601"), badge: "BÉO NGẬY", vegetarian: true },
  { id: "xoi-xeo", name: "Xôi xéo đậu xanh", cuisine: "Việt Nam", category: "Cơm & bún", minutes: 20, description: "Xôi nếp dẻo thơm, đậu xanh bùi và hành phi giòn.", image: photo("photo-1512058564366-18510be2db19"), badge: "BỮA SÁNG", vegetarian: true },
  { id: "banh-cuon", name: "Bánh cuốn nóng", cuisine: "Việt Nam", category: "Món Việt", minutes: 25, description: "Bánh mỏng mềm cuốn thịt, rắc hành phi thơm.", image: photo("photo-1601050690597-df0568f70950"), badge: "BỮA SÁNG", vegetarian: false },
  { id: "chao-ga", name: "Cháo gà nóng", cuisine: "Việt Nam", category: "Cơm & bún", minutes: 30, description: "Cháo gạo ninh mềm, gà xé và hành ngò thơm.", image: photo("photo-1547592180-85f173990554"), badge: "ẤM BỤNG", vegetarian: false },
  { id: "banh-bao", name: "Bánh bao trứng cút", cuisine: "Việt Nam", category: "Món Việt", minutes: 20, description: "Vỏ bánh mềm xốp, nhân thịt và trứng cút.", image: photo("photo-1563245372-f21724e3856d"), badge: "BỮA SÁNG", vegetarian: false }
];

const grid = document.querySelector("#dish-grid");
const searchInput = document.querySelector("#search-input");
const resultSummary = document.querySelector("#results-summary");
const categoryRow = document.querySelector("#category-row");
const dock = document.querySelector("#selection-dock");
const dialog = document.querySelector("#result-dialog");
const resultContent = document.querySelector("#result-content");
const toast = document.querySelector("#toast");
const reel = document.querySelector("#food-reel");
const reelViewport = document.querySelector("#reel-viewport");
const wheelResult = document.querySelector("#wheel-result");
const state = {
  category: "Tất cả",
  query: "",
  sort: "popular",
  time: "any",
  cuisine: "any",
  diet: "any",
  selected: new Set(),
  visible: 12,
  remote: [],
  remoteCatalog: new Map(),
  remoteMessage: "",
  request: 0,
  meal: "all",
};
let isSpinning = false;

const breakfastIds = new Set(["pho-bo", "bun-bo", "banh-mi", "bun-cha", "bun-rieu", "hu-tieu", "mi-quang", "com-ga", "goi-cuon", "xoi-xeo", "banh-cuon", "chao-ga", "banh-bao"]);
const dinnerOnlyIds = new Set(["sushi", "ramen", "tteokbokki", "green-curry", "pizza", "pasta"]);
const locations = {
  all: ["Quán ăn địa phương", "Quán ăn gia đình", "Khu ẩm thực", "Quán nướng", "Quán lẩu", "Quán ăn đường phố"],
  breakfast: ["Quán ăn sáng gần nhà", "Tiệm bánh & cà phê", "Quán phở / bún buổi sáng", "Quán ăn sáng địa phương"],
  lunch: ["Quán cơm trưa", "Quán ăn gia đình", "Khu ẩm thực gần bạn", "Quán bún / phở"],
  dinner: ["Quán nướng", "Quán lẩu", "Quán ăn gia đình", "Phố ẩm thực buổi tối", "Nhà hàng địa phương"],
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.toggle("error", isError);
  toast.classList.add("visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("visible"), 2800);
}

function filteredDishes() {
  const search = state.query.trim().toLocaleLowerCase("vi");
  const all = [...dishes, ...state.remoteCatalog.values()];
  const matching = all.filter((dish) => {
    const text = `${dish.name} ${dish.cuisine} ${dish.description} ${dish.category}`.toLocaleLowerCase("vi");
    const categoryMatch = state.category === "Tất cả"
      || (state.category === "Món Việt" && dish.cuisine === "Việt Nam")
      || (state.category === "Món quốc tế" && dish.cuisine !== "Việt Nam")
      || (state.category === "Đồ chay" && dish.vegetarian)
      || dish.category === state.category;
    return categoryMatch
      && (!search || text.includes(search))
      && (state.time === "any" || dish.minutes <= Number(state.time))
      && (state.cuisine === "any" || (state.cuisine === "Khác" ? !["Việt Nam", "Nhật Bản", "Hàn Quốc", "Ý", "Thái Lan"].includes(dish.cuisine) : dish.cuisine === state.cuisine))
      && (state.diet !== "vegetarian" || dish.vegetarian);
  });
  if (state.sort === "quick") matching.sort((a, b) => a.minutes - b.minutes);
  if (state.sort === "name") matching.sort((a, b) => a.name.localeCompare(b.name, "vi"));
  return matching;
}

function cardTemplate(dish, index) {
  const selected = state.selected.has(dish.id);
  return `<article class="dish-card${selected ? " is-selected" : ""}" style="animation-delay:${Math.min(index, 12) * 28}ms">
    <div class="card-photo">
      <img src="${escapeHTML(dish.image)}" alt="${escapeHTML(dish.name)}" loading="lazy" />
      <span class="dish-badge">${escapeHTML(dish.badge || dish.cuisine.toLocaleUpperCase("vi"))}</span>
    </div>
    <div class="dish-body">
      <div class="dish-meta"><span class="cuisine">${escapeHTML(dish.cuisine)}</span><span>${dish.vegetarian ? "🥬 Có món chay" : "✦ Món được yêu thích"}</span></div>
      <h3 class="dish-title">${escapeHTML(dish.name)}</h3>
      <p class="dish-description">${escapeHTML(dish.description)}</p>
      <div class="card-bottom"><span class="card-time">◷ ${dish.minutes} phút</span>
        <button class="select-dish" type="button" data-select="${escapeHTML(dish.id)}" aria-pressed="${selected}" aria-label="${selected ? "Bỏ chọn" : "Chọn"} ${escapeHTML(dish.name)}">
          ${selected ? "Đã chọn" : "Chọn món"} <span class="plus" aria-hidden="true">${selected ? "×" : "+"}</span>
        </button>
      </div>
    </div>
  </article>`;
}

function render() {
  const matches = filteredDishes();
  const visible = matches.slice(0, state.visible);
  if (!visible.length) {
    grid.innerHTML = `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">🍽️</span><h3>Chưa tìm thấy món này</h3><p>Thử một từ khóa khác hoặc bỏ bớt bộ lọc nhé.</p></div>`;
  } else {
    grid.innerHTML = visible.map(cardTemplate).join("");
  }
  const count = matches.length;
  resultSummary.innerHTML = state.remoteMessage
    ? `<strong>${count}</strong> món phù hợp · ${escapeHTML(state.remoteMessage)}`
    : `<strong>${count}</strong> món trong bộ sưu tập · Khám phá món ngon từ Việt Nam và thế giới`;
  document.querySelector("#load-more").hidden = state.visible >= count || count === 0;
  document.querySelector("#clear-filters").hidden = !(state.category !== "Tất cả" || state.query || state.time !== "any" || state.cuisine !== "any" || state.diet !== "any");
  document.querySelector("#filter-count").textContent = [state.time !== "any", state.cuisine !== "any", state.diet !== "any"].filter(Boolean).length;
  document.querySelector("#category-count").textContent = dishes.length + state.remoteCatalog.size;
  renderDock();
  renderWheel();
}

function wheelDishes() {
  const all = [...dishes, ...state.remoteCatalog.values()];
  if (state.meal === "breakfast") return all.filter((dish) => breakfastIds.has(dish.id));
  if (state.meal === "lunch") return all.filter((dish) => !dinnerOnlyIds.has(dish.id));
  if (state.meal === "dinner") return all;
  return all;
}

function renderWheel() {
  if (isSpinning) return;
  const options = wheelDishes();
  reel.innerHTML = options.map((dish, index) => reelCard(dish, index)).join("");
  reelViewport.scrollLeft = 0;
  reel.style.transition = "none";
  reel.style.transform = "translate3d(0, 0, 0)";
  reelViewport.setAttribute("aria-label", `Danh sách ${options.length} món trong vòng quay`);
  document.querySelector("#wheel-count").textContent = `${options.length} món ${state.meal === "all" ? "đang chờ bạn" : `cho ${state.meal === "breakfast" ? "bữa sáng" : state.meal === "lunch" ? "bữa trưa" : "bữa tối"}`}`;
  document.querySelector("#spin-button").disabled = options.length === 0;
  document.querySelector("#wheel-description").textContent = state.meal === "all"
    ? "Vòng quay sẽ chọn ngẫu nhiên trong toàn bộ món ăn — rồi tìm kiểu địa điểm hợp với buổi ăn."
    : `Vòng quay đang lọc ${options.length} món hợp với ${state.meal === "breakfast" ? "bữa sáng" : state.meal === "lunch" ? "bữa trưa" : "bữa tối"} của bạn.`;
}

function reelCard(dish, index, isWinner = false) {
  const rarity = index === 0 ? "MÓN TỦ" : dish.vegetarian ? "THUẦN CHAY" : "MÓN NGON";
  return `<article class="reel-card${isWinner ? " reel-winner" : ""}" data-reel-index="${index}">
    <div class="reel-photo-wrap">
      <img class="reel-photo" src="${escapeHTML(dish.image)}" alt="${escapeHTML(dish.name)}" ${index < 6 ? 'loading="eager"' : 'loading="lazy"'} />
      <span class="reel-rarity">${rarity}</span>
    </div>
    <div class="reel-card-copy"><span>${escapeHTML(dish.cuisine)}</span><h4>${escapeHTML(dish.name)}</h4></div>
  </article>`;
}

function spinWheel() {
  if (isSpinning) return;
  const options = wheelDishes();
  if (!options.length) {
    showToast("Chưa có món phù hợp cho buổi ăn này.", true);
    return;
  }
  isSpinning = true;
  wheelResult.hidden = true;
  const button = document.querySelector("#spin-button");
  button.disabled = true;
  button.innerHTML = '<span class="spin-icon" aria-hidden="true">⟳</span> Đang quay…';

  const winnerIndex = Math.floor(Math.random() * options.length);
  const targetIndex = 23;
  const reelItems = Array.from({ length: targetIndex }, () => options[Math.floor(Math.random() * options.length)]);
  reelItems.push(options[winnerIndex]);
  reel.innerHTML = reelItems.map((dish, index) => reelCard(dish, index)).join("");
  reelViewport.scrollLeft = 0;
  reel.style.transition = "none";
  reel.style.transform = "translate3d(0, 0, 0)";
  const targetCard = reel.querySelector(`[data-reel-index="${targetIndex}"]`);
  const destination = reelViewport.clientWidth / 2 - (targetCard.offsetLeft + targetCard.offsetWidth / 2);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reducedMotion ? 1 : 4200;
  void reel.offsetWidth;
  requestAnimationFrame(() => {
    reel.style.transition = `transform ${duration}ms cubic-bezier(.12,.75,.2,1)`;
    reel.style.transform = `translate3d(${destination}px, 0, 0)`;
  });

  setTimeout(() => {
    const winner = options[winnerIndex];
    const place = locations[state.meal][Math.floor(Math.random() * locations[state.meal].length)];
    const mapsQuery = encodeURIComponent(`${winner.name} ${place} gần đây`);
    targetCard.classList.add("reel-winner");
    wheelResult.innerHTML = `<img class="wheel-result-photo" src="${escapeHTML(winner.image)}" alt="${escapeHTML(winner.name)}" /><div class="wheel-result-copy"><span class="wheel-result-label">KÈO NÀY CHỐT RỒI</span><h4>${escapeHTML(winner.name)}</h4><p>${escapeHTML(winner.cuisine)} · ${escapeHTML(place)}</p><a class="maps-link" href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}" target="_blank" rel="noopener noreferrer">Tìm quán gần bạn trên Google Maps <span aria-hidden="true">↗</span></a></div>`;
    wheelResult.hidden = false;
    wheelResult.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest" });
    button.disabled = false;
    button.innerHTML = '<span class="spin-icon" aria-hidden="true">⟳</span> Quay lại <span aria-hidden="true">↗</span>';
    isSpinning = false;
  }, duration + 80);
}

function renderDock() {
  const selected = [...dishes, ...state.remoteCatalog.values()].filter((dish) => state.selected.has(dish.id));
  dock.hidden = selected.length === 0;
  document.querySelector("#dock-count").textContent = `${selected.length} món đã chọn`;
  document.querySelector("#dock-dishes").innerHTML = selected.slice(0, 4).map((dish) => `<img class="dock-dish" src="${escapeHTML(dish.image)}" alt="" title="${escapeHTML(dish.name)}" />`).join("");
  if (selected.length > 4) document.querySelector("#dock-dishes").insertAdjacentHTML("beforeend", `<span class="dock-dish dock-more">+${selected.length - 4}</span>`);
}

function toggleDish(id) {
  if (state.selected.has(id)) state.selected.delete(id);
  else state.selected.add(id);
  render();
}

async function searchGlobal(query) {
  const request = ++state.request;
  state.remoteMessage = "";
  state.remote = [];
  if (query.trim().length < 2) {
    render();
    return;
  }
  state.remoteMessage = "đang tìm thêm món toàn cầu…";
  render();
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query.trim())}`);
    if (!response.ok) throw new Error(`TheMealDB trả về mã ${response.status}`);
    const data = await response.json();
    if (request !== state.request) return;
    state.remote = (data.meals || []).map((meal) => ({
      id: `mealdb-${meal.idMeal}`,
      name: meal.strMeal,
      cuisine: meal.strArea || "Ẩm thực thế giới",
      category: "Món quốc tế",
      minutes: 30,
      description: meal.strCategory ? `${meal.strCategory} · Khám phá công thức từ ${meal.strArea || "thế giới"}.` : `Món ngon từ ${meal.strArea || "thế giới"}, xem công thức tại TheMealDB.`,
      image: meal.strMealThumb,
      badge: "THEMEALDB",
      vegetarian: /vegetarian|vegan/i.test(meal.strCategory || ""),
      sourceUrl: meal.strSource || meal.strYoutube || "",
    }));
    state.remote.forEach((dish) => state.remoteCatalog.set(dish.id, dish));
    state.remoteMessage = state.remote.length ? "có kết quả từ TheMealDB" : "TheMealDB không có kết quả cho từ khóa này";
  } catch (error) {
    if (request !== state.request) return;
    state.remoteMessage = "không thể kết nối TheMealDB; đang hiển thị bộ sưu tập có sẵn";
    console.error("Không thể tìm món từ TheMealDB:", error);
    showToast("Không kết nối được nguồn món toàn cầu. Bạn vẫn có thể chọn trong bộ sưu tập.", true);
  }
  render();
}

let searchTimer;
searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  state.visible = 12;
  ++state.request;
  state.remote = [];
  state.remoteMessage = "";
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => searchGlobal(state.query), 320);
  render();
});

categoryRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.visible = 12;
  categoryRow.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  render();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-select]");
  if (button) toggleDish(button.dataset.select);
});

document.querySelector("#filter-toggle").addEventListener("click", (event) => {
  const panel = document.querySelector("#filter-panel");
  const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!expanded));
  panel.hidden = expanded;
});

for (const [selector, key] of [["#sort-select", "sort"], ["#time-select", "time"], ["#cuisine-select", "cuisine"], ["#diet-select", "diet"]]) {
  document.querySelector(selector).addEventListener("change", (event) => {
    state[key] = event.target.value;
    state.visible = 12;
    render();
  });
}

document.querySelector("#clear-filters").addEventListener("click", () => {
  state.category = "Tất cả";
  state.query = "";
  state.time = "any";
  state.cuisine = "any";
  state.diet = "any";
  state.visible = 12;
  searchInput.value = "";
  for (const selector of ["#time-select", "#cuisine-select", "#diet-select"]) document.querySelector(selector).value = "any";
  categoryRow.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.category === "Tất cả"));
  ++state.request;
  state.remote = [];
  state.remoteMessage = "";
  render();
});

document.querySelector("#load-more").addEventListener("click", () => {
  state.visible += 12;
  render();
});

document.querySelector("#meal-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-meal]");
  if (!button || isSpinning) return;
  state.meal = button.dataset.meal;
  document.querySelectorAll(".meal-tab").forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  wheelResult.hidden = true;
  reel.style.transition = "transform 300ms cubic-bezier(.16,1,.3,1)";
  reel.style.transform = "translate3d(0, 0, 0)";
  reelViewport.scrollLeft = 0;
  renderWheel();
});

function pickWinner() {
  const knownDishes = [...dishes, ...state.remoteCatalog.values()];
  const options = [...state.selected].map((id) => knownDishes.find((dish) => dish.id === id)).filter(Boolean);
  if (!options.length) {
    showToast("Chọn ít nhất một món để bắt đầu chốt kèo nhé.");
    document.querySelector("#kham-pha").scrollIntoView({ behavior: "smooth" });
    return;
  }
  document.querySelector("#dock-pick").disabled = true;
  document.querySelector("#dock-pick").textContent = "Đang bốc thăm…";
  resultContent.innerHTML = `<div class="drawing-animation"><span>✦</span><p>HỘI ĐANG CHỌN MÓN</p></div>`;
  dialog.showModal();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  setTimeout(() => {
    const winner = options[Math.floor(Math.random() * options.length)];
    resultContent.innerHTML = `<img class="result-photo" src="${escapeHTML(winner.image)}" alt="${escapeHTML(winner.name)}" /><span class="result-kicker">KÈO NÀY CHỐT RỒI!</span><h2>${escapeHTML(winner.name)}</h2><p>${escapeHTML(winner.cuisine)} · Sẵn sàng trong khoảng ${winner.minutes} phút</p>${winner.sourceUrl ? `<a class="result-source" href="${escapeHTML(winner.sourceUrl)}" target="_blank" rel="noopener noreferrer">Xem thêm về món này ↗</a>` : ""}<button class="result-again" id="pick-again" type="button">Bốc thăm lại</button>`;
    document.querySelector("#pick-again").addEventListener("click", () => {
      if (options.length === 1) showToast("Chỉ có một món trong kèo này — nghe cũng hợp lý đó!");
      dialog.close();
      if (options.length > 1) setTimeout(pickWinner, reducedMotion ? 0 : 130);
    });
    document.querySelector("#dock-pick").disabled = false;
    document.querySelector("#dock-pick").innerHTML = 'Chốt kèo <span aria-hidden="true">↗</span>';
  }, reducedMotion ? 0 : 1150);
}

document.querySelector("#dock-pick").addEventListener("click", pickWinner);
document.querySelector("#spin-button").addEventListener("click", spinWheel);
for (const selector of ["#header-pick", "#callout-pick"]) {
  document.querySelector(selector).addEventListener("click", () => document.querySelector("#vong-quay").scrollIntoView({ behavior: "smooth" }));
}
document.querySelector("#dock-clear").addEventListener("click", () => { state.selected.clear(); render(); });
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

render();
