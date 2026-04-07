# 🚀 JavaScript Concepts — Mini Projects Roadmap

> **Goal:** JS concepts ko sirf padhna nahi — banate banate samajhna.  
> Har project ek specific concept area cover karta hai. Level 1 se shuru karo, upar jaate jao.

---

## 📁 Folder Structure

```
js-mini-projects/
├── level-1-fundamentals/
│   ├── calculator/
│   ├── number-guess-game/
│   └── marks-management/
├── level-2-dom-events/
│   ├── todo-app/
│   ├── expense-tracker/
│   └── form-validation/
├── level-3-async-apis/
│   ├── weather-app/
│   ├── movie-search/
│   └── infinite-scroll/
└── level-4-advanced/
    ├── custom-map-polyfill/
    ├── custom-promise/
    ├── utility-library/
    ├── drag-and-drop/
    ├── modal-component/
    └── dynamic-table-filter/
```

---

## 🟢 Level 1 — JS Fundamentals

**Concepts:** Variables, data types, operators, conditionals, loops, functions, arrays, objects

### Projects

#### 1. Calculator
- **Kya banega:** Basic arithmetic operations karne wala calculator
- **Key Concepts:**
  - Functions aur parameters
  - if/else conditionals
  - Switch statements
  - Basic operators (+, -, *, /, %)
- **Challenge:** Division by zero handle karo. History feature add karo.

#### 2. Number Guess Game
- **Kya banega:** Computer ek random number sochta hai, user guess karta hai
- **Key Concepts:**
  - `Math.random()` aur `Math.floor()`
  - while/for loops
  - User input (`prompt` ya DOM)
  - Comparison operators
- **Challenge:** Attempts count karo. "Too high / Too low" hint do.

#### 3. Marks Management Program
- **Kya banega:** Students ke marks store karo, average nikalo, grade do
- **Key Concepts:**
  - Arrays aur array methods (`push`, `filter`, `map`, `reduce`)
  - Objects (`{ name, marks, grade }`)
  - Sorting (`sort()`)
  - Grade logic with conditionals
- **Challenge:** Pass/fail count nikalo. Highest scorer find karo.

---

## 🔵 Level 2 — DOM & Events

**Concepts:** `querySelector`, `addEventListener`, DOM manipulation, `localStorage`, form handling

### Projects

#### 4. To-Do App
- **Kya banega:** Tasks add karo, complete karo, delete karo
- **Key Concepts:**
  - DOM elements create/update/delete karna
  - `addEventListener` (click, keypress)
  - `localStorage.setItem / getItem`
  - `JSON.stringify / JSON.parse`
- **Challenge:** Filter karo (all / active / completed). Drag to reorder.

#### 5. Expense Tracker
- **Kya banega:** Income/expense add karo, balance dekho
- **Key Concepts:**
  - Dynamic list rendering
  - Running total calculate karna
  - Event delegation
  - CSS class toggle for colors
- **Challenge:** Category-wise filter. Monthly summary.

#### 6. Form Validation System
- **Kya banega:** Registration form with real-time validation
- **Key Concepts:**
  - Regular expressions (Regex) — email, phone, password
  - `input` event for real-time feedback
  - Error message DOM manipulation
  - Form submit prevent default
- **Challenge:** Password strength meter. Custom error messages.

---

## 🟡 Level 3 — Async JS & APIs

**Concepts:** `fetch()`, Promises, `async/await`, JSON parsing, error handling, Intersection Observer

### Projects

#### 7. Weather App (API)
- **Kya banega:** City name dalo, current weather dekho
- **Key Concepts:**
  - `fetch()` aur `async/await`
  - OpenWeatherMap API integration
  - JSON response parse karna
  - Error handling (`try/catch`)
- **API:** [openweathermap.org](https://openweathermap.org/api) — free tier available
- **Challenge:** 5-day forecast. Geolocation se current city auto-detect.

#### 8. Movie Search App
- **Kya banega:** Movie name se search karo, cards mein results dekho
- **Key Concepts:**
  - Query parameters ke saath API call
  - Dynamic card rendering
  - Debounce (search input optimize karna)
  - Loading states handle karna
- **API:** [OMDB API](http://www.omdbapi.com/) — free key milta hai
- **Challenge:** Favorites save karo localStorage mein. Detail modal.

#### 9. Infinite Scroll Project
- **Kya banega:** Scroll karo aur automatically naya content load ho
- **Key Concepts:**
  - `Intersection Observer API`
  - Paginated API calls
  - Sentinel element technique
  - Skeleton loaders
- **Challenge:** Pull to refresh. Scroll position restore.

---

## 🟣 Level 4 — Advanced JS Concepts

**Concepts:** Polyfills, closures, custom Promises, higher-order functions, event internals

### Projects

#### 10. Custom `map()` Polyfill
- **Kya banega:** `Array.prototype.myMap` khud banana
- **Key Concepts:**
  - `Array.prototype` pe function add karna
  - `this` context samajhna
  - Higher-order functions
  - Polyfill pattern
- **Code Goal:**
  ```js
  Array.prototype.myMap = function(callback) {
    // aapko likhna hai
  };
  [1, 2, 3].myMap(x => x * 2); // [2, 4, 6]
  ```
- **Challenge:** `filter`, `reduce`, `find` bhi khud banao.

#### 11. Custom Promise Implementation
- **Kya banega:** JS Promise ki internals samajhne ke liye apna `MyPromise` class
- **Key Concepts:**
  - Promise states: `pending`, `fulfilled`, `rejected`
  - `.then()` chaining
  - Microtask queue (`queueMicrotask`)
  - `Promise.all` / `Promise.race` implement karna
- **Challenge:** `async/await` ka internal mechanism samjho. `Promise.allSettled` banao.

#### 12. Utility Functions Library
- **Kya banega:** Lodash jaise ek chota utility library
- **Key Concepts:**
  - `debounce` — function calls delay karna
  - `throttle` — calls limit karna per interval
  - `curry` — function currying
  - `pipe` / `compose` — function chaining
  - `memoize` — result cache karna
- **Challenge:** `deepClone`, `flatten`, `groupBy` implement karo.

#### 13. Drag & Drop App
- **Kya banega:** Cards ko drag karke different columns mein drop karo (Kanban style)
- **Key Concepts:**
  - `dragstart`, `dragover`, `drop` events
  - `dataTransfer` API
  - `dragenter` / `dragleave` visual feedback
  - DOM reordering
- **Challenge:** Touch support (mobile). Persist order in localStorage.

#### 14. Modal Component
- **Kya banega:** Reusable modal/dialog component
- **Key Concepts:**
  - Focus trap (Tab key modal ke andar rakho)
  - `Escape` key se close
  - Event delegation
  - `aria-modal`, accessibility attributes
- **Challenge:** Animation. Stack multiple modals.

#### 15. Dynamic Table Filter
- **Kya banega:** Large dataset wali table ko live search aur sort karo
- **Key Concepts:**
  - Live search with debounce
  - Multi-column sort (`sort()` comparator)
  - Column filter (dropdown)
  - Pagination
- **Challenge:** Export to CSV. Resizable columns.

---

## 📌 Tips for Each Project

1. **Pehle bina dekhe banane ki koshish karo** — bhale 30 minute lag jaayein
2. **Console.log tera dost hai** — har step pe output check karo
3. **MDN docs padhna seekho** — Google nahi, MDN
4. **Ek project complete karo phir aagla** — jumping mat karo
5. **Git use karo** — har project ka commit history rakho

---

## 🔗 Resources

- [MDN Web Docs](https://developer.mozilla.org) — best JS reference
- [javascript.info](https://javascript.info) — best free JS course
- [OpenWeatherMap API](https://openweathermap.org/api) — Level 3 ke liye
- [OMDB API](http://www.omdbapi.com/) — Movie search ke liye

---

*Happy coding! Ek ek concept pakad ke strong bano.* 💪