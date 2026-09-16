const mapUrl = (name) => `https://map.naver.com/p/search/${encodeURIComponent(name)}`;

const smoothieCafes = [
  {
    id: "pepper",
    name: "페퍼커피 밀리미터",
    menu: "블루베리스무디",
    price: "6,000원",
    address: "울산 북구 중산서로 26 101호",
    type: "로컬 카페",
    availability: "메뉴 확인",
    position: [57, 18],
    source: "https://app.passorder.co.kr/normal/1ada9bf1-b5f2-49ed-8e43-c1b12075f68e/menus",
  },
  {
    id: "blushaak",
    name: "블루샥 삼산센트럴자이점",
    menu: "블루베리 요거트 스무디",
    price: "4,800원",
    address: "울산 남구 삼산로 231 1층 124호",
    type: "프랜차이즈",
    availability: "메뉴 확인",
    position: [51, 55],
    source: "https://app.passorder.co.kr/normal/5271d0da-93f3-4abe-b0b4-ccf756ea8b82/menus",
  },
  {
    id: "breadboss",
    name: "식빵싸부",
    menu: "블루베리스무디",
    price: "4,500원",
    address: "울산 남구 삼산로 287",
    type: "로컬 카페",
    availability: "메뉴 확인",
    position: [58, 60],
    source: "https://www.diningcode.com/profile.php?rid=hxSvEAINF6cH",
  },
  {
    id: "harok",
    name: "카페 하록",
    menu: "블루베리스무디",
    price: "가격 확인",
    address: "울산 북구 신기12길 19 1층",
    type: "로컬 카페",
    availability: "메뉴 확인",
    position: [48, 27],
    source: "https://www.diningcode.com/profile.php?rid=oHGtSuR7tbDl",
  },
  {
    id: "yogerpresso",
    name: "요거프레소 울산선암점",
    menu: "블루베리 요거트스무디(R)",
    price: "5,800원",
    address: "울산 남구 두왕로190번길 46",
    type: "프랜차이즈",
    availability: "메뉴 확인",
    position: [39, 77],
    source: "https://app.passorder.co.kr/normal/b6958519-c904-4154-880f-64751f02e837/menus",
  },
  {
    id: "cafe1l",
    name: "카페일리터 울산동구점",
    menu: "블루베리요거트스무디",
    price: "4,300원",
    address: "울산 동구 학문로 53 1층",
    type: "프랜차이즈",
    availability: "메뉴 확인",
    position: [80, 58],
    source: "https://app.passorder.co.kr/normal/91e7ea63-642d-473a-91cb-82d50959f5b9/menus",
  },
  {
    id: "mega",
    name: "메가MGC커피 울산달동사거리점",
    menu: "블루베리요거트스무디",
    price: "가격·판매 확인",
    address: "울산 남구 중앙로 170-1",
    type: "프랜차이즈",
    availability: "지점별 판매 확인",
    position: [42, 59],
    source: "https://www.mega-mgccoffee.com/menu/menu.php",
  },
  {
    id: "compose",
    name: "컴포즈커피 울산신정푸르지오점",
    menu: "블루베리 스무디",
    price: "3,800원",
    address: "울산 남구 팔등로 64-1",
    type: "프랜차이즈",
    availability: "메뉴 확인",
    position: [34, 54],
    source: "https://app.passorder.co.kr/normal/57d0b8f3-c9b3-44e9-8dae-91187fff11cc/menus",
  },
  {
    id: "theventi",
    name: "더벤티 울산달동점",
    menu: "블루베리 요거트 스무디",
    price: "3,900원",
    address: "울산 남구 신정로 27",
    type: "프랜차이즈",
    availability: "메뉴 확인",
    position: [45, 65],
    source: "https://app.passorder.co.kr/normal/c25c2ad0-3650-4e38-9d1b-31f96ba10282/menus",
  },
  {
    id: "paik",
    name: "빽다방 울산타임스퀘어점",
    menu: "블루베리요거트스무디",
    price: "가격·판매 확인",
    address: "울산 남구 수암로 138 1층 121호",
    type: "프랜차이즈",
    availability: "지점별 판매 확인",
    position: [36, 68],
    source: "https://paikdabang.com/menu/menu_drink/",
  },
  {
    id: "hasamdong",
    name: "하삼동커피 꽃바위점",
    menu: "블루베리요거트스무디",
    price: "4,200원",
    address: "울산 동구 문현로 41",
    type: "프랜차이즈",
    availability: "메뉴 확인",
    position: [84, 76],
    source: "https://app.passorder.co.kr/normal/3bdec681-fa28-4ead-9585-bda2e2904165/menus",
  },
];

const smoothieSlot = Object.freeze({ smoothieSlot: true });
let currentSmoothieCafe = smoothieCafes[Math.floor(Math.random() * smoothieCafes.length)];

const routeSets = {
  ocean: {
    title: "울산 바다 여행 코스",
    summary: "대왕암공원에서 정자항까지 해안 명소를 순서대로 방문합니다.",
    label: "바다 · 산책",
    stops: [
      {
        name: "대왕암공원",
        description: "해송 숲길을 지나 대왕암과 바다를 바라보며 천천히 걸어요.",
        address: "울산 동구 등대로 95",
        tags: ["해안 산책", "사진 명소"],
        map: mapUrl("울산 대왕암공원"),
      },
      {
        name: "주전몽돌해변",
        description: "동글동글한 몽돌 위로 파도가 굴러가는 소리를 들으며 쉬어가요.",
        address: "울산 동구 주전동 일대",
        tags: ["바다", "느린 여행"],
        map: mapUrl("울산 주전몽돌해변"),
      },
      smoothieSlot,
      {
        name: "정자항",
        description: "항구의 잔잔한 풍경과 노을을 보며 하루를 마무리해요.",
        address: "울산 북구 정자동 일대",
        tags: ["항구", "노을"],
        map: mapUrl("울산 정자항"),
      },
    ],
  },
  nature: {
    title: "울산 자연 여행 코스",
    summary: "태화강 국가정원과 십리대숲을 중심으로 구성했습니다.",
    label: "자연 · 휴식",
    stops: [
      {
        name: "태화강 국가정원",
        description: "계절 정원과 강변을 둘러보며 울산의 여유로운 아침을 시작해요.",
        address: "울산 중구 태화강국가정원길 154",
        tags: ["국가정원", "산책"],
        map: mapUrl("태화강 국가정원"),
      },
      {
        name: "십리대숲",
        description: "대나무 사이로 이어지는 산책길을 걸어보세요.",
        address: "울산 중구 태화동 107",
        tags: ["대나무숲", "힐링"],
        map: mapUrl("울산 십리대숲"),
      },
      smoothieSlot,
      {
        name: "달천철장",
        description: "철의 도시 울산이 시작된 야외 유적에서 한적한 산책을 이어가요.",
        address: "울산 북구 달천동 1-7",
        tags: ["야외 유적", "북구"],
        map: mapUrl("울산 달천철장"),
      },
    ],
  },
  family: {
    title: "울산 가족 여행 코스",
    summary: "장생포 고래문화마을과 울산대공원을 포함한 가족 코스입니다.",
    label: "가족 · 고래",
    stops: [
      {
        name: "장생포 고래문화마을",
        description: "옛 장생포 풍경과 고래 이야기가 이어지는 마을을 함께 둘러봐요.",
        address: "울산 남구 장생포고래로 271-1",
        tags: ["고래", "체험"],
        map: mapUrl("장생포 고래문화마을"),
      },
      {
        name: "울산대공원",
        description: "넓은 공원에서 아이도 어른도 부담 없이 쉬고 걸을 수 있어요.",
        address: "울산 남구 대공원로 94",
        tags: ["가족 산책", "휴식"],
        map: mapUrl("울산대공원"),
      },
      smoothieSlot,
      {
        name: "정자항",
        description: "바닷바람이 부는 항구에서 가족 사진과 함께 하루를 마무리해요.",
        address: "울산 북구 정자동 일대",
        tags: ["바다", "가족 사진"],
        map: mapUrl("울산 정자항"),
      },
    ],
  },
  culture: {
    title: "울산 문화·역사 여행 코스",
    summary: "울산박물관과 울산시립미술관을 중심으로 구성했습니다.",
    label: "문화 · 역사",
    stops: [
      {
        name: "울산박물관",
        description: "선사시대부터 산업도시까지 이어진 울산의 시간을 한눈에 만나보세요.",
        address: "울산 남구 두왕로 277",
        tags: ["역사", "실내"],
        map: mapUrl("울산박물관"),
      },
      {
        name: "울산시립미술관",
        description: "중구 원도심에서 동시대 미술을 감상하며 여행의 속도를 낮춰요.",
        address: "울산 중구 미술관길 72",
        tags: ["미술", "원도심"],
        map: mapUrl("울산시립미술관"),
      },
      smoothieSlot,
      {
        name: "달천철장",
        description: "철 생산의 역사가 남은 야외 유적에서 울산의 또 다른 뿌리를 만나요.",
        address: "울산 북구 달천동 1-7",
        tags: ["산업 역사", "산책"],
        map: mapUrl("울산 달천철장"),
      },
    ],
  },
  sunrise: {
    title: "울산 남부 드라이브 코스",
    summary: "간절곶과 외고산 옹기마을을 방문하는 드라이브 코스입니다.",
    label: "일출 · 드라이브",
    stops: [
      {
        name: "간절곶",
        description: "수평선이 넓게 펼쳐지는 곶에서 상쾌한 바닷바람으로 시작해요.",
        address: "울산 울주군 서생면 대송리 일대",
        tags: ["일출", "바다"],
        map: mapUrl("울산 간절곶"),
      },
      {
        name: "외고산 옹기마을",
        description: "옹기가 모여 있는 마을을 걸으며 울산의 생활문화를 만나보세요.",
        address: "울산 울주군 온양읍 외고산3길 36",
        tags: ["옹기", "문화"],
        map: mapUrl("울산 외고산 옹기마을"),
      },
      smoothieSlot,
      {
        name: "정자항",
        description: "긴 드라이브 끝, 북쪽 항구 풍경을 바라보며 천천히 마무리해요.",
        address: "울산 북구 정자동 일대",
        tags: ["드라이브", "노을"],
        map: mapUrl("울산 정자항"),
      },
    ],
  },
  night: {
    title: "울산 야경 여행 코스",
    summary: "태화강 국가정원과 울산대교 전망대의 저녁 풍경을 포함합니다.",
    label: "노을 · 야경",
    stops: [
      {
        name: "태화강 국가정원",
        description: "해가 기울기 전 강변과 정원을 가볍게 산책해요.",
        address: "울산 중구 태화강국가정원길 154",
        tags: ["강변", "산책"],
        map: mapUrl("태화강 국가정원"),
      },
      smoothieSlot,
      {
        name: "울산대교 전망대",
        description: "도시와 산업단지의 불빛, 울산대교가 어우러진 야경을 바라봐요.",
        address: "울산 동구 봉수로 155-1",
        tags: ["전망", "야경"],
        map: mapUrl("울산대교 전망대"),
      },
      {
        name: "일산해수욕장",
        description: "일산해수욕장의 밤바다를 따라 짧게 걸어보세요.",
        address: "울산 동구 해수욕장10길 일대",
        tags: ["밤바다", "산책"],
        map: mapUrl("울산 일산해수욕장"),
      },
    ],
  },
};

const form = document.querySelector("#planner");
const promptInput = document.querySelector("#tripPrompt");
const result = document.querySelector("#result");
const loadingState = document.querySelector("#loading-state");
const timeline = document.querySelector("#timeline");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const routeMeta = document.querySelector("#route-meta");
const generateButton = document.querySelector(".generate-button span");
const selectedCafe = document.querySelector("#selected-cafe");
const selectedCafeType = document.querySelector("#selected-cafe-type");
const selectedCafeName = document.querySelector("#selected-cafe-name");
const selectedCafeMenu = document.querySelector("#selected-cafe-menu");
const cafeMap = document.querySelector("#cafe-map");
const cafeMapCount = document.querySelector("#cafe-map-count");
const featuredCafeName = document.querySelector("#featured-cafe-name");
const featuredCafeDetails = document.querySelector("#featured-cafe-details");
const featuredCafeMenu = document.querySelector("#featured-cafe-menu");
const featuredCafePrice = document.querySelector("#featured-cafe-price");
const featuredCafeLink = document.querySelector("#featured-cafe-link");

const companionLabels = {
  solo: "혼자",
  couple: "둘이",
  family: "가족과",
  friends: "친구들과",
};

const durationConfig = {
  day: { label: "하루", times: ["09:30", "12:10", "15:20", "17:20"], count: 4 },
  half: { label: "반나절", times: ["12:30", "14:40", "16:30"], count: 3 },
  evening: { label: "오후·저녁", times: ["14:30", "16:20", "18:30", "20:10"], count: 4 },
};

function chooseRoute(text, companion, duration) {
  const value = text.replace(/\s/g, "").toLowerCase();
  if (/간절곶|일출|해돋이|드라이브/.test(value)) return "sunrise";
  if (/야경|밤|저녁|노을/.test(value) || duration === "evening") return "night";
  if (/고래|아이|키즈|체험/.test(value) || companion === "family") return "family";
  if (/역사|문화|미술|박물관|유적/.test(value)) return "culture";
  if (/바다|해변|파도|해안|사진/.test(value)) return "ocean";
  return "nature";
}

function toSmoothieStop(cafe) {
  return {
    ...cafe,
    description: cafe.availability === "메뉴 확인"
      ? `메뉴에서 확인된 ${cafe.menu}를 마시며 잠깐 쉬어가요.`
      : `프랜차이즈 메뉴의 ${cafe.menu}입니다. 이 지점은 방문 전에 판매 여부를 확인해주세요.`,
    tags: [cafe.menu, "필수 일정"],
    map: mapUrl(`울산 ${cafe.name}`),
    smoothie: true,
  };
}

function materializeStops(stops, cafe) {
  return stops.map((stop) => stop.smoothieSlot ? toSmoothieStop(cafe) : stop);
}

function updateSmoothieCafe(cafe) {
  currentSmoothieCafe = cafe;
  selectedCafe.href = cafe.source;
  selectedCafe.setAttribute("aria-label", `${cafe.name} ${cafe.menu} 메뉴 확인`);
  selectedCafeType.textContent = `${cafe.type} · ${cafe.availability}`;
  selectedCafeName.textContent = cafe.name;
  selectedCafeMenu.textContent = `${cafe.menu} · ${cafe.price}`;
  featuredCafeName.textContent = cafe.name;
  featuredCafeDetails.textContent = cafe.address;
  featuredCafeMenu.textContent = cafe.menu;
  featuredCafePrice.textContent = cafe.price;
  featuredCafeLink.href = cafe.source;
  cafeMap.querySelectorAll("[data-cafe-id]").forEach((marker) => {
    const active = marker.dataset.cafeId === cafe.id;
    marker.classList.toggle("active", active);
    marker.setAttribute("aria-pressed", String(active));
  });
}

function renderCafeMap() {
  cafeMapCount.textContent = `${smoothieCafes.length}곳`;
  cafeMap.innerHTML = `
    <span class="map-district map-district--north">북구</span>
    <span class="map-district map-district--center">중구</span>
    <span class="map-district map-district--south">남구</span>
    <span class="map-district map-district--east">동구</span>
    ${smoothieCafes.map((cafe, index) => `
      <button
        class="cafe-marker"
        type="button"
        role="listitem"
        data-cafe-id="${cafe.id}"
        data-cafe-index="${index}"
        style="--map-x: ${cafe.position[0]}%; --map-y: ${cafe.position[1]}%"
        aria-label="${cafe.name}, ${cafe.menu}"
        aria-pressed="false"
        title="${cafe.name}"
      >${index + 1}</button>
    `).join("")}
  `;

  cafeMap.querySelectorAll("[data-cafe-index]").forEach((marker) => {
    marker.addEventListener("click", () => {
      updateSmoothieCafe(smoothieCafes[Number(marker.dataset.cafeIndex)]);
    });
  });
}

function chooseRandomSmoothieCafe() {
  const candidates = smoothieCafes.filter((cafe) => cafe !== currentSmoothieCafe);
  const cafe = candidates[Math.floor(Math.random() * candidates.length)] || currentSmoothieCafe;
  updateSmoothieCafe(cafe);
  return cafe;
}

function stopsForDuration(stops, duration) {
  if (duration !== "half") return stops;
  const smoothie = stops.find((stop) => stop.smoothie);
  const regular = stops.filter((stop) => !stop.smoothie).slice(0, 2);
  return [...regular, smoothie];
}

function timelineIcon(isSmoothie) {
  return isSmoothie
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2h8l-1 4h3l-2 16H8L6 6h3L8 2Zm1.3 6 .9 12h4.6l1-12H9.3Z"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 5.7 7 11.3 7.3 11.6a1 1 0 0 0 1.4 0C13 21.3 20 15.7 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>';
}

function renderRoute(routeKey, duration, companion, transport, smoothieCafe = currentSmoothieCafe) {
  const selected = routeSets[routeKey];
  const config = durationConfig[duration];
  const stops = stopsForDuration(materializeStops(selected.stops, smoothieCafe), duration);

  resultTitle.textContent = selected.title;
  resultSummary.textContent = `${selected.summary} 선택한 ${config.label}, ${companionLabels[companion]}, ${transport === "car" ? "자동차" : "대중교통"} 조건을 반영했습니다.`;
  routeMeta.replaceChildren();
  [config.label, companionLabels[companion], transport === "car" ? "자동차 추천" : "대중교통 중심", selected.label]
    .forEach((label) => {
      const tag = document.createElement("span");
      tag.textContent = label;
      routeMeta.appendChild(tag);
    });

  timeline.innerHTML = stops.map((stop, index) => `
    <li class="timeline-item${stop.smoothie ? " smoothie" : ""}">
      <time class="timeline-time">${config.times[index]}</time>
      <span class="timeline-dot">${timelineIcon(stop.smoothie)}</span>
      <article class="timeline-card">
        <div>
          <h3>${index + 1}. ${stop.name}</h3>
          <p>${stop.description}</p>
          <p class="address">${stop.address}</p>
          <div class="place-tags">${stop.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
        <a class="map-link" href="${stop.map}" target="_blank" rel="noreferrer" aria-label="${stop.name} 지도에서 보기">지도 보기 ↗</a>
      </article>
    </li>
  `).join("");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const duration = data.get("duration");
  const companion = data.get("companion");
  const transport = data.get("transport");
  const prompt = String(data.get("tripPrompt") || "").trim();
  const routeKey = chooseRoute(prompt, companion, duration);
  const smoothieCafe = chooseRandomSmoothieCafe();

  result.hidden = false;
  result.classList.remove("revealed");
  timeline.innerHTML = "";
  loadingState.hidden = false;
  generateButton.textContent = "코스를 고르는 중…";
  result.scrollIntoView({ behavior: "smooth", block: "start" });

  window.setTimeout(() => {
    renderRoute(routeKey, duration, companion, transport, smoothieCafe);
    loadingState.hidden = true;
    generateButton.textContent = "울산 여행 코스 만들기";
    result.classList.add("revealed");
  }, 850);
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    promptInput.value = button.dataset.prompt;
    document.querySelectorAll("[data-prompt]").forEach((item) => item.classList.toggle("active", item === button));
    promptInput.focus();
  });
});

const examples = [
  "바다를 보며 천천히 걷고 사진을 많이 찍고 싶어요",
  "아이와 고래 이야기를 즐기고 넓은 공원에도 가고 싶어요",
  "박물관과 미술관을 둘러보는 차분한 문화 여행을 원해요",
  "일몰부터 울산의 야경까지 보고 싶어요",
];
let exampleIndex = 0;
document.querySelector(".voice-button").addEventListener("click", () => {
  promptInput.value = examples[exampleIndex % examples.length];
  exampleIndex += 1;
  promptInput.focus();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

renderCafeMap();
updateSmoothieCafe(currentSmoothieCafe);

function registerWebMcpTool() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const allowedDurations = Object.keys(durationConfig);
  const allowedCompanions = Object.keys(companionLabels);
  const allowedTransports = ["car", "transit"];

  try {
    Promise.resolve(context.registerTool({
      name: "generate_ulsan_route",
      title: "울산 맞춤 여행 코스 만들기",
      description: "여행 취향과 조건을 받아 실제 울산 장소로 구성된 코스를 화면에 생성합니다. 블루베리 스무디 일정은 항상 포함됩니다.",
      inputSchema: {
        type: "object",
        properties: {
          prompt: { type: "string", minLength: 1, maxLength: 300, description: "원하는 울산 여행의 분위기나 활동" },
          duration: { type: "string", enum: allowedDurations, description: "half는 반나절, day는 하루, evening은 오후·저녁" },
          companion: { type: "string", enum: allowedCompanions },
          transport: { type: "string", enum: allowedTransports },
        },
        required: ["prompt", "duration", "companion", "transport"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        if (!input || typeof input !== "object") throw new Error("여행 조건을 객체로 입력해주세요.");
        const { prompt, duration, companion, transport } = input;
        if (typeof prompt !== "string" || !prompt.trim() || prompt.length > 300) throw new Error("prompt는 1~300자의 문장이어야 합니다.");
        if (!allowedDurations.includes(duration)) throw new Error("duration 값이 올바르지 않습니다.");
        if (!allowedCompanions.includes(companion)) throw new Error("companion 값이 올바르지 않습니다.");
        if (!allowedTransports.includes(transport)) throw new Error("transport 값이 올바르지 않습니다.");

        promptInput.value = prompt.trim();
        document.querySelector(`input[name="duration"][value="${duration}"]`).checked = true;
        document.querySelector("#companion").value = companion;
        document.querySelector("#transport").value = transport;
        const routeKey = chooseRoute(prompt, companion, duration);
        const smoothieCafe = chooseRandomSmoothieCafe();
        result.hidden = false;
        loadingState.hidden = true;
        renderRoute(routeKey, duration, companion, transport, smoothieCafe);
        result.classList.add("revealed");

        const visibleStops = stopsForDuration(materializeStops(routeSets[routeKey].stops, smoothieCafe), duration);
        return {
          title: routeSets[routeKey].title,
          stops: visibleStops.map((stop) => stop.name),
          blueberrySmoothieCafe: smoothieCafe.name,
          blueberrySmoothieMenu: smoothieCafe.menu,
          blueberrySmoothieIncluded: visibleStops.some((stop) => stop.smoothie),
        };
      },
    })).catch(() => {});
  } catch (_) {
    // WebMCP 미지원 환경에서도 일반 화면 기능은 그대로 동작합니다.
  }
}

registerWebMcpTool();
