/* ============================================================
   TypeSpeed — script.js
   MonkeyType-inspired word-pool typing test
   ============================================================ */

/* ── Word pools ── */
const WORD_POOLS = {
  beginner: [
    "the",
    "be",
    "to",
    "of",
    "and",
    "a",
    "in",
    "that",
    "have",
    "it",
    "for",
    "not",
    "on",
    "with",
    "he",
    "as",
    "you",
    "do",
    "at",
    "this",
    "but",
    "his",
    "by",
    "from",
    "they",
    "we",
    "say",
    "her",
    "she",
    "or",
    "an",
    "will",
    "my",
    "one",
    "all",
    "would",
    "there",
    "their",
    "what",
    "so",
    "up",
    "out",
    "if",
    "about",
    "who",
    "get",
    "which",
    "go",
    "me",
    "when",
    "make",
    "can",
    "like",
    "time",
    "no",
    "just",
    "him",
    "know",
    "take",
    "people",
    "into",
    "year",
    "your",
    "good",
    "some",
    "could",
    "them",
    "see",
    "other",
    "than",
    "then",
    "now",
    "look",
    "only",
    "come",
    "its",
    "over",
    "think",
    "also",
    "back",
    "after",
    "use",
    "two",
    "how",
    "our",
    "work",
    "first",
    "well",
    "way",
    "even",
    "new",
    "want",
    "because",
    "any",
    "these",
    "give",
    "day",
    "most",
    "us",
    "great",
    "between",
    "need",
    "large",
    "often",
    "hand",
    "high",
    "place",
    "hold",
    "turn",
    "where",
    "help",
    "such",
    "feel",
    "through",
    "before",
    "right",
    "very",
    "mean",
    "old",
    "word",
    "done",
    "set",
    "put",
    "end",
    "does",
    "another",
    "big",
    "point",
    "play",
    "small",
    "number",
    "off",
    "always",
    "move",
    "live",
    "still",
    "own",
    "part",
    "every",
    "found",
    "never",
    "under",
    "head",
    "leave",
    "few",
    "open",
    "seem",
    "together",
    "next",
    "white",
    "walk",
    "book",
    "mile",
    "car",
    "feet",
    "care",
    "second",
    "red",
    "list",
    "talk",
    "fire",
    "road",
    "age",
    "voice",
    "power",
    "town",
    "fine",
    "stand",
    "girl",
    "tree",
    "song",
    "bird",
    "rain",
    "cold",
    "warm",
    "fast",
    "slow",
    "kind",
    "dark",
    "light",
    "rock",
    "sand",
    "wave",
    "moon",
    "star",
    "wind",
    "drop",
    "leaf",
    "name",
    "face",
    "home",
    "side",
    "long",
    "run",
    "pay",
    "four",
    "form",
    "real",
    "stop",
    "ten",
    "hold",
    "keep",
    "once",
    "door",
    "pull",
    "draw",
    "let",
    "show",
    "line",
    "love",
    "bad",
    "map",
    "eat",
    "blue",
    "six",
    "soon",
    "body",
    "music",
    "color",
    "fish",
    "area",
    "mark",
    "dog",
    "horse",
    "room",
    "knew",
    "since",
    "ever",
    "piece",
    "told",
    "early",
    "order",
    "black",
    "top",
    "ship",
    "across",
    "today",
    "low",
    "hour",
    "happened",
    "whole",
    "remember",
    "reached",
    "listen",
    "covered",
    "pattern",
    "hundred",
    "against",
    "north",
    "slowly",
    "money",
    "farm",
    "step",
    "morning",
    "passed",
    "true",
    "numeral",
    "table",
    "measure",
    "waves",
    "vowel",
    "toward",
    "five",
    "space",
    "hard",
    "late",
    "land",
    "full",
    "sun",
    "back",
    "type",
    "turn",
    "late",
    "life",
    "city",
    "mean",
    "boy",
    "play",
    "eat",
    "hat",
    "dog",
    "cut",
    "happy",
    "ready",
    "above",
    "ever",
    "though",
    "hill",
    "buy",
    "hold",
    "said",
    "half",
    "sat",
    "try",
    "night",
    "ran",
    "seen",
    "help",
    "next",
    "once",
    "days",
    "plan",
    "cry",
    "fly",
    "jump",
    "kick",
    "lock",
    "pick",
    "push",
    "read",
    "ride",
    "ring",
    "send",
    "sing",
    "sit",
    "skip",
    "stay",
    "swim",
    "tell",
    "toss",
    "trip",
    "wait",
    "wake",
    "wash",
    "wear",
    "win",
    "work",
    "yell",
    "zip",
    "blog",
    "chat",
    "clip",
    "deal",
    "edit",
    "fan",
    "grab",
    "grid",
    "hire",
    "host",
    "icon",
    "idea",
    "join",
    "key",
    "link",
    "load",
    "log",
    "menu",
    "move",
    "page",
    "post",
    "pull",
    "save",
    "sign",
    "sort",
    "tag",
    "test",
    "tip",
    "tool",
    "view",
    "vote",
    "wrap",
  ],
  intermediate: [
    "because",
    "however",
    "therefore",
    "although",
    "whether",
    "consider",
    "provide",
    "require",
    "according",
    "between",
    "important",
    "different",
    "following",
    "describe",
    "necessary",
    "example",
    "possible",
    "question",
    "together",
    "everything",
    "sometimes",
    "understand",
    "experience",
    "government",
    "information",
    "education",
    "development",
    "environmental",
    "international",
    "relationship",
    "community",
    "population",
    "technology",
    "opportunity",
    "individual",
    "significant",
    "particularly",
    "including",
    "management",
    "organization",
    "performance",
    "professional",
    "responsibility",
    "traditional",
    "alternative",
    "circumstances",
    "communication",
    "established",
    "immediately",
    "involvement",
    "perspective",
    "possibility",
    "recognition",
    "representative",
    "specifically",
    "understanding",
    "approximately",
    "characteristic",
    "comprehensive",
    "consideration",
    "consequences",
    "contribution",
    "demonstration",
    "determination",
    "effectiveness",
    "fundamental",
    "identification",
    "implementation",
    "investigation",
    "recommendation",
    "significance",
    "achievement",
    "administration",
    "announcement",
    "assessment",
    "assumption",
    "atmosphere",
    "background",
    "capability",
    "celebration",
    "challenge",
    "collection",
    "commitment",
    "competition",
    "conclusion",
    "conference",
    "confidence",
    "connection",
    "construction",
    "consumption",
    "conversation",
    "cooperation",
    "corporation",
    "correspondence",
    "creativity",
    "currency",
    "decision",
    "declaration",
    "definition",
    "democracy",
    "description",
    "destination",
    "direction",
    "discovery",
    "discussion",
    "distribution",
    "diversity",
    "documentation",
    "economy",
    "efficiency",
    "election",
    "emotion",
    "employment",
    "enforcement",
    "environment",
    "equation",
    "evaluation",
    "evolution",
    "examination",
    "execution",
    "exhibition",
    "expectation",
    "explanation",
    "expression",
    "extension",
    "facilitation",
    "formation",
    "foundation",
    "generation",
    "graduation",
    "illustration",
    "imagination",
    "implementation",
    "improvement",
    "indication",
    "influence",
    "innovation",
    "installation",
    "institution",
    "integration",
    "interpretation",
    "introduction",
    "investigation",
    "investment",
    "justification",
    "knowledge",
    "leadership",
    "legislation",
    "liberation",
    "limitation",
    "maintenance",
    "measurement",
    "mechanism",
    "medication",
    "membership",
    "migration",
    "modification",
    "motivation",
    "movement",
    "navigation",
    "negotiation",
    "notification",
    "observation",
    "operation",
    "opposition",
    "organization",
    "orientation",
    "participation",
    "partnership",
    "perception",
    "population",
    "presentation",
    "preservation",
    "prevention",
    "production",
    "progress",
    "promotion",
    "protection",
    "publication",
    "qualification",
    "realization",
    "recognition",
    "recommendation",
    "reduction",
    "reflection",
    "regulation",
    "relationship",
    "representation",
    "requirement",
    "resolution",
    "responsibility",
    "revolution",
    "satisfaction",
    "selection",
    "separation",
    "simulation",
    "situation",
    "specification",
    "stabilization",
    "strategy",
    "structure",
    "submission",
    "suggestion",
    "supervision",
    "translation",
    "understanding",
    "utilization",
    "validation",
    "variation",
    "verification",
    "visualization",
    "workspace",
  ],
  advanced: [
    "epistemological",
    "paradigmatic",
    "metamorphosis",
    "quintessential",
    "philosophical",
    "philanthropist",
    "circumnavigation",
    "incomprehensible",
    "juxtaposition",
    "manifestation",
    "unprecedented",
    "extraordinary",
    "sophisticated",
    "discombobulate",
    "serendipitous",
    "melancholy",
    "ephemeral",
    "clandestine",
    "ubiquitous",
    "superfluous",
    "ostentatious",
    "sycophantic",
    "obfuscation",
    "perspicacious",
    "equivocating",
    "nefarious",
    "perfidious",
    "magnanimous",
    "loquacious",
    "fastidious",
    "meticulous",
    "idiosyncratic",
    "exacerbate",
    "ameliorate",
    "surreptitious",
    "obsequious",
    "pernicious",
    "recalcitrant",
    "obstreperous",
    "ignominious",
    "pusillanimous",
    "consternation",
    "vicissitudes",
    "ineffable",
    "inexorable",
    "immutable",
    "inscrutable",
    "intransigent",
    "indefatigable",
    "mendacious",
    "perspicuous",
    "precipitous",
    "predilection",
    "proclivity",
    "propitious",
    "recondite",
    "sagacious",
    "sanctimonious",
    "tendentious",
    "truculent",
    "verisimilitude",
    "voluminous",
    "labyrinthine",
    "machiavellian",
    "misanthropic",
    "narcissistic",
    "nihilistic",
    "pragmatic",
    "solipsistic",
    "anthropomorphic",
    "bureaucratic",
    "circumlocution",
    "colloquialism",
    "condescension",
    "conscientious",
    "contradictory",
    "controversial",
    "counterintuitive",
    "disproportionate",
    "dysfunctional",
    "ecclesiastical",
    "egalitarian",
    "entrepreneurial",
    "extemporaneous",
    "gastronomical",
    "gubernatorial",
    "hypothetical",
    "idiosyncratic",
    "imperceptible",
    "impersonation",
    "inconsequential",
    "indistinguishable",
    "ineffectual",
    "inexplicable",
    "infrastructure",
    "institutional",
    "interdisciplinary",
    "interrogative",
    "introspective",
    "irresponsible",
    "juxtaposition",
    "kaleidoscopic",
    "knowledgeable",
    "legislative",
    "metaphorical",
    "multidisciplinary",
    "neurological",
    "nomenclature",
    "nonconformist",
    "omnipresence",
    "orchestration",
    "overwhelming",
    "paradoxical",
    "paternalistic",
    "perpendicular",
    "philosophical",
    "photosynthesis",
    "physiological",
    "proclamation",
    "psychological",
    "reconnaissance",
    "rehabilitation",
    "revolutionary",
    "righteousness",
    "simultaneously",
    "straightforward",
    "subconscious",
    "transcendental",
    "transformative",
    "unconventional",
    "unprecedented",
    "vulnerabilities",
    "whimsicality",
    "xenophobia",
    "yearning",
    "zealotry",
  ],
  code: [
    "function",
    "return",
    "const",
    "let",
    "var",
    "if",
    "else",
    "for",
    "while",
    "class",
    "import",
    "export",
    "default",
    "async",
    "await",
    "try",
    "catch",
    "throw",
    "new",
    "this",
    "typeof",
    "instanceof",
    "null",
    "undefined",
    "true",
    "false",
    "switch",
    "case",
    "break",
    "continue",
    "delete",
    "void",
    "yield",
    "static",
    "extends",
    "super",
    "interface",
    "type",
    "enum",
    "namespace",
    "module",
    "require",
    "arrow",
    "promise",
    "callback",
    "closure",
    "prototype",
    "object",
    "array",
    "string",
    "number",
    "boolean",
    "symbol",
    "bigint",
    "map",
    "set",
    "weakmap",
    "weakset",
    "proxy",
    "reflect",
    "generator",
    "iterator",
    "spread",
    "destructure",
    "template",
    "computed",
    "getter",
    "setter",
    "decorator",
    "mixin",
    "singleton",
    "observer",
    "factory",
    "strategy",
    "adapter",
    "facade",
    "command",
    "composite",
    "iterator",
    "algorithm",
    "binary",
    "linear",
    "recursive",
    "dynamic",
    "greedy",
    "backtrack",
    "sort",
    "filter",
    "reduce",
    "map",
    "find",
    "every",
    "some",
    "includes",
    "indexOf",
    "slice",
    "splice",
    "concat",
    "join",
    "split",
    "trim",
    "replace",
    "match",
    "search",
    "parse",
    "stringify",
    "fetch",
    "promise",
    "resolve",
    "reject",
    "then",
    "catch",
    "finally",
    "async",
    "await",
    "timeout",
    "interval",
    "event",
    "listener",
    "emit",
    "dispatch",
    "subscribe",
    "publish",
    "queue",
    "stack",
    "heap",
    "tree",
    "graph",
    "node",
    "edge",
    "vertex",
    "path",
    "cycle",
    "depth",
    "breadth",
    "traverse",
    "search",
    "insert",
    "delete",
    "update",
    "query",
    "index",
    "schema",
    "model",
    "controller",
    "router",
    "middleware",
    "request",
    "response",
    "status",
    "header",
    "body",
    "param",
    "query",
    "session",
    "token",
    "hash",
    "encrypt",
    "decrypt",
    "authenticate",
    "authorize",
    "validate",
    "sanitize",
    "cache",
    "buffer",
    "stream",
    "pipe",
    "chunk",
    "byte",
    "bit",
    "flag",
    "mask",
    "shift",
    "rotate",
    "xor",
    "and",
    "or",
    "webpack",
    "babel",
    "eslint",
    "prettier",
    "jest",
    "mocha",
    "chai",
    "sinon",
    "docker",
    "kubernetes",
    "nginx",
    "express",
    "react",
    "vue",
    "angular",
    "svelte",
    "typescript",
    "graphql",
    "postgresql",
    "mongodb",
    "redis",
    "elasticsearch",
  ],
};

/* ── Punctuation characters and number generator ── */
const PUNCT_CHARS = [",", ".", "!", "?", ";", ":"];
const RANDOM_NUMBER_MAX = 1000; // upper bound for number-mode random integers
const NUMBER_INSERTION_PROBABILITY = 0.2; // 20 % of words replaced by a number
const PUNCT_INSERTION_PROBABILITY = 0.15; // 15 % of words get trailing punctuation
const CARET_BLINK_RESUME_MS = 500; // ms after last keystroke before caret blinks again
const CHART_VERTICAL_SCALE = 0.85; // fraction of chart height used for the data range
const CHART_VERTICAL_PADDING = 0.08; // bottom-padding fraction kept below the lowest point

const randNum = () => String(Math.floor(Math.random() * RANDOM_NUMBER_MAX));

/* ── Main class ── */
class TypingTest {
  constructor() {
    /* -- Mode state -- */
    this.mode = "time"; // 'time' | 'words'
    this.timeLimit = 30;
    this.wordCount = 25;
    this.difficulty = "beginner";
    this.punctuation = false;
    this.numbers = false;
    this.theme = "serika";

    /* -- Test state -- */
    this.words = []; // target word strings
    this.typedHistory = []; // what was typed per completed word
    this.wordEls = []; // word DOM elements

    this.currentWordIdx = 0;
    this.currentInput = "";
    this.isActive = false;
    this.startTime = null;
    this.timeLeft = 30;
    this.timer = null;
    this.caretBlinkTimer = null;

    this.correctWords = 0;
    this.incorrectWords = 0;
    this.extraChars = 0;
    this.missedChars = 0;
    this.correctChars = 0;
    this.incorrectChars = 0;

    this.wpmHistory = []; // [{second, wpm}]
    this.lineOffset = 0; // current px translateY applied to container

    /* -- DOM refs -- */
    this.wordsWrapper = document.getElementById("wordsWrapper");
    this.wordsContainer = document.getElementById("wordsContainer");
    this.wordInput = document.getElementById("wordInput");
    this.caretEl = document.getElementById("caret");
    this.liveStats = document.getElementById("liveStats");
    this.liveWpm = document.getElementById("liveWpm");
    this.liveAcc = document.getElementById("liveAcc");
    this.liveCounter = document.getElementById("liveCounter");
    this.liveCounterLbl = document.getElementById("liveCounterLabel");
    this.restartBtn = document.getElementById("restartBtn");
    this.resultsEl = document.getElementById("results");
    this.finalWpmEl = document.getElementById("finalWpm");
    this.finalAccEl = document.getElementById("finalAcc");
    this.finalRawEl = document.getElementById("finalRaw");
    this.finalCharsEl = document.getElementById("finalChars");
    this.finalTimeEl = document.getElementById("finalTime");
    this.finalModeEl = document.getElementById("finalMode");
    this.wpmChartEl = document.getElementById("wpmChart");
    this.pbBanner = document.getElementById("pbBanner");
    this.tryAgainBtn = document.getElementById("tryAgainBtn");
    this.capsWarning = document.getElementById("capsWarning");

    this._bindEvents();
    this._loadTheme();
    this.resetTest();
  }

  /* ────────────────── Event binding ────────────────── */
  _bindEvents() {
    /* Input */
    this.wordInput.addEventListener("keydown", (e) => this._onKeyDown(e));
    this.wordInput.addEventListener("input", (e) => this._onInput(e));

    /* Click on text area focuses hidden input */
    this.wordsWrapper.addEventListener("click", () => this.wordInput.focus());

    /* Global keys */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        this.resetTest();
        return;
      }
      if (!this.isActive && e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        this.wordInput.focus();
      }
      /* Caps lock warning */
      if (e.getModifierState && e.getModifierState("CapsLock")) {
        this.capsWarning.classList.remove("hidden");
      } else {
        this.capsWarning.classList.add("hidden");
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.getModifierState && !e.getModifierState("CapsLock")) {
        this.capsWarning.classList.add("hidden");
      }
    });

    /* Restart */
    this.restartBtn.addEventListener("click", () => this.resetTest());
    this.tryAgainBtn.addEventListener("click", () => this.resetTest());

    /* Theme toggle */
    const themeBtn = document.getElementById("themeBtn");
    const themeMenu = document.getElementById("themeMenu");
    themeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      themeMenu.classList.toggle("hidden");
    });
    document.addEventListener("click", () => themeMenu.classList.add("hidden"));
    document.querySelectorAll(".theme-option").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._setTheme(btn.dataset.theme);
        themeMenu.classList.add("hidden");
      });
    });

    /* Mode type: time / words */
    document.querySelectorAll(".mode-type-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".mode-type-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.mode = btn.dataset.mode;
        document
          .getElementById("timeOptions")
          .classList.toggle("hidden", this.mode !== "time");
        document
          .getElementById("wordCountOptions")
          .classList.toggle("hidden", this.mode !== "words");
        this.resetTest();
      });
    });

    /* Time value buttons */
    document.querySelectorAll("#timeOptions .value-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll("#timeOptions .value-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.timeLimit = parseInt(btn.dataset.value);
        this.resetTest();
      });
    });

    /* Word count buttons */
    document.querySelectorAll("#wordCountOptions .value-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll("#wordCountOptions .value-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.wordCount = parseInt(btn.dataset.value);
        this.resetTest();
      });
    });

    /* Difficulty */
    document.querySelectorAll(".diff-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".diff-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.difficulty = btn.dataset.difficulty;
        this.resetTest();
      });
    });

    /* Toggles: punctuation, numbers */
    document.getElementById("punctuationBtn").addEventListener("click", (e) => {
      this.punctuation = !this.punctuation;
      e.currentTarget.classList.toggle("active", this.punctuation);
      this.resetTest();
    });
    document.getElementById("numbersBtn").addEventListener("click", (e) => {
      this.numbers = !this.numbers;
      e.currentTarget.classList.toggle("active", this.numbers);
      this.resetTest();
    });
  }

  /* ────────────────── Theme ────────────────── */
  _setTheme(theme) {
    this.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("typespeed-theme", theme);
    document.querySelectorAll(".theme-option").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });
  }

  _loadTheme() {
    const saved = localStorage.getItem("typespeed-theme");
    const allowed = new Set(["serika", "ocean"]);
    const theme = allowed.has(saved) ? saved : "serika";
    this._setTheme(theme);
  }

  /* ────────────────── Word generation ────────────────── */
  _generateWords() {
    const count = this.mode === "words" ? this.wordCount : 200;
    const pool = WORD_POOLS[this.difficulty] || WORD_POOLS.beginner;
    const result = [];

    for (let i = 0; i < count; i++) {
      let word = pool[Math.floor(Math.random() * pool.length)];

      if (this.numbers && Math.random() < NUMBER_INSERTION_PROBABILITY) {
        word = randNum();
      }

      if (this.punctuation && Math.random() < PUNCT_INSERTION_PROBABILITY) {
        word += PUNCT_CHARS[Math.floor(Math.random() * PUNCT_CHARS.length)];
      }

      result.push(word);
    }
    return result;
  }

  /* ────────────────── DOM building ────────────────── */
  _buildWordEls() {
    this.wordsContainer.innerHTML = "";
    this.wordEls = [];

    this.words.forEach((word, wi) => {
      const wordEl = document.createElement("div");
      wordEl.className = "word";
      wordEl.dataset.wi = wi;

      Array.from(word).forEach((ch) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = ch;
        wordEl.appendChild(span);
      });

      this.wordsContainer.appendChild(wordEl);
      this.wordEls.push(wordEl);
    });
  }

  /* ────────────────── Caret ────────────────── */
  _moveCaret() {
    const wordEl = this.wordEls[this.currentWordIdx];
    if (!wordEl) return;

    const letters = wordEl.querySelectorAll(".letter");
    const typedLen = this.currentInput.length;
    const wrapRect = this.wordsWrapper.getBoundingClientRect();

    let refEl, placeAfter;
    if (typedLen < letters.length) {
      refEl = letters[typedLen];
      placeAfter = false;
    } else {
      refEl = letters[letters.length - 1];
      placeAfter = true;
    }
    if (!refEl) return;

    const rect = refEl.getBoundingClientRect();
    const left = placeAfter
      ? rect.right - wrapRect.left
      : rect.left - wrapRect.left;
    const rawTop = rect.top - wrapRect.top;
    const rawHeight = rect.height;
    const caretHeight = Math.max(10, rawHeight * 0.7);
    const top = rawTop + (rawHeight - caretHeight) / 2;

    this.caretEl.style.left = left + "px";
    this.caretEl.style.top = top + "px";
    this.caretEl.style.height = caretHeight + "px";

    this._scrollIfNeeded();
  }

  _flashCaret() {
    /* Pause blink while user is actively typing */
    this.caretEl.classList.add("typing");
    clearTimeout(this.caretBlinkTimer);
    this.caretBlinkTimer = setTimeout(() => {
      this.caretEl.classList.remove("typing");
    }, CARET_BLINK_RESUME_MS);
  }

  /* ────────────────── Scrolling ────────────────── */
  _scrollIfNeeded() {
    const wordEl = this.wordEls[this.currentWordIdx];
    if (!wordEl || !this.wordEls[0]) return;

    const lineH = this.wordEls[0].offsetHeight;
    if (lineH === 0) return;

    const firstTop = this.wordEls[0].offsetTop;
    const currentTop = wordEl.offsetTop;
    const absLine = Math.round((currentTop - firstTop) / lineH);

    /* Keep cursor on line 1 (0-indexed) by scrolling when it hits line 2 */
    const targetOffset = Math.max(0, absLine - 1) * lineH;
    if (targetOffset !== this.lineOffset) {
      this.lineOffset = targetOffset;
      this.wordsContainer.style.transform = `translateY(-${targetOffset}px)`;
    }
  }

  /* ────────────────── Input handling ────────────────── */
  _onKeyDown(e) {
    if (!this.isActive && e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      this._startTest();
    }

    /* Backspace on empty input → go back to previous word */
    if (
      e.key === "Backspace" &&
      this.wordInput.value === "" &&
      this.currentWordIdx > 0
    ) {
      e.preventDefault();
      this._goBack();
    }
  }

  _onInput() {
    if (!this.isActive) this._startTest();

    const value = this.wordInput.value;

    /* Space → complete word */
    if (value.endsWith(" ")) {
      const typed = value.trim();
      if (typed.length > 0) this._completeWord(typed);
      this.wordInput.value = "";
      this.currentInput = "";
      this._moveCaret();
      this._updateLiveStats();
      return;
    }

    this.currentInput = value;
    this._updateCurrentWordDisplay();
    this._moveCaret();
    this._flashCaret();
    this._updateLiveStats();

    /* Words mode: auto-end if last word fully typed */
    if (
      this.mode === "words" &&
      this.currentWordIdx === this.words.length - 1
    ) {
      const target = this.words[this.currentWordIdx];
      if (value === target) {
        this._completeWord(value);
        this.wordInput.value = "";
        this.currentInput = "";
        this._endTest();
      }
    }
  }

  _completeWord(typed) {
    const target = this.words[this.currentWordIdx];
    this.typedHistory[this.currentWordIdx] = typed;

    const wordEl = this.wordEls[this.currentWordIdx];
    const letters = wordEl.querySelectorAll(".letter");
    let hasError = false;

    /* Colour each letter */
    Array.from(letters).forEach((lEl, i) => {
      lEl.classList.remove("correct", "incorrect", "extra");
      if (i < typed.length) {
        const ok = typed[i] === target[i];
        lEl.classList.add(ok ? "correct" : "incorrect");
        if (!ok) hasError = true;
      } else {
        /* Missing character — leave dimmed, counts as error */
        hasError = true;
        this.missedChars++;
      }
    });

    /* Extra characters beyond word length */
    for (let i = target.length; i < typed.length; i++) {
      const extra = document.createElement("span");
      extra.className = "letter extra";
      extra.textContent = typed[i];
      wordEl.appendChild(extra);
      hasError = true;
      this.extraChars++;
    }

    if (hasError) {
      wordEl.classList.add("word-error");
      this.incorrectWords++;
    } else {
      this.correctWords++;
    }

    /* Per-character stats */
    for (let i = 0; i < Math.min(typed.length, target.length); i++) {
      if (typed[i] === target[i]) this.correctChars++;
      else this.incorrectChars++;
    }

    this.currentWordIdx++;

    /* Words mode done? */
    if (this.mode === "words" && this.currentWordIdx >= this.words.length) {
      this._endTest();
    }
  }

  _goBack() {
    this.currentWordIdx--;
    const wordEl = this.wordEls[this.currentWordIdx];
    const letters = wordEl.querySelectorAll(".letter");

    /* Remove any extra letter spans added during completion */
    wordEl.querySelectorAll(".letter.extra").forEach((el) => el.remove());
    wordEl.classList.remove("word-error");

    /* Reset letter colours */
    letters.forEach((l) => l.classList.remove("correct", "incorrect", "extra"));

    /* Undo stats from the word we're going back to */
    const prevTyped = this.typedHistory[this.currentWordIdx] || "";
    const prevTarget = this.words[this.currentWordIdx];
    let wasError = false;
    for (let i = 0; i < Math.min(prevTyped.length, prevTarget.length); i++) {
      if (prevTyped[i] === prevTarget[i]) this.correctChars--;
      else {
        this.incorrectChars--;
        wasError = true;
      }
    }
    if (prevTyped.length > prevTarget.length) {
      this.extraChars -= prevTyped.length - prevTarget.length;
      wasError = true;
    }
    /* Fix: undo missedChars regardless of whether prevTyped is empty */
    if (prevTyped.length < prevTarget.length) {
      this.missedChars -= prevTarget.length - prevTyped.length;
      wasError = true;
    }
    if (wasError) this.incorrectWords--;
    else this.correctWords--;

    this.typedHistory[this.currentWordIdx] = "";
    this.currentInput = "";
    this.wordInput.value = "";

    this._moveCaret();
    this._updateLiveStats();
  }

  _updateCurrentWordDisplay() {
    const wordEl = this.wordEls[this.currentWordIdx];
    if (!wordEl) return;
    const target = this.words[this.currentWordIdx];
    const letters = wordEl.querySelectorAll(".letter");
    const typed = this.currentInput;

    letters.forEach((lEl, i) => {
      lEl.classList.remove("correct", "incorrect");
      if (i < typed.length) {
        lEl.classList.add(typed[i] === target[i] ? "correct" : "incorrect");
      }
    });
  }

  /* ────────────────── Test lifecycle ────────────────── */
  _startTest() {
    if (this.isActive) return;
    this.isActive = true;
    this.startTime = Date.now();
    this.liveStats.classList.add("visible");

    if (this.mode === "time") {
      this.timeLeft = this.timeLimit;
      this.timer = setInterval(() => {
        this.timeLeft--;
        this.liveCounter.textContent = this.timeLeft;

        /* Snapshot WPM every second */
        const elapsed = (Date.now() - this.startTime) / 1000 / 60;
        const wpm = Math.round(this.correctWords / elapsed) || 0;
        this.wpmHistory.push({ second: this.timeLimit - this.timeLeft, wpm });

        if (this.timeLeft <= 0) this._endTest();
      }, 1000);
    }
  }

  _updateLiveStats() {
    if (!this.isActive || !this.startTime) return;

    const elapsed = (Date.now() - this.startTime) / 1000 / 60;
    const wpm = Math.round(this.correctWords / elapsed) || 0;
    this.liveWpm.textContent = wpm;

    const totalW = this.correctWords + this.incorrectWords;
    const acc =
      totalW > 0 ? Math.round((this.correctWords / totalW) * 100) : 100;
    this.liveAcc.textContent = acc + "%";

    if (this.mode === "words") {
      this.liveCounter.textContent = this.words.length - this.currentWordIdx;
    }
  }

  _endTest() {
    this.isActive = false;
    clearInterval(this.timer);
    this.wordInput.disabled = true;

    const timeElapsed = (Date.now() - this.startTime) / 1000;
    const timeMin = timeElapsed / 60;

    const finalWpm = Math.round(this.correctWords / timeMin) || 0;
    const rawWpm =
      Math.round((this.correctWords + this.incorrectWords) / timeMin) || 0;
    const totalW = this.correctWords + this.incorrectWords;
    const acc =
      totalW > 0 ? Math.round((this.correctWords / totalW) * 100) : 100;

    const correctC = this.correctChars;
    const incorrectC = this.incorrectChars + this.extraChars + this.missedChars;

    this.finalWpmEl.textContent = finalWpm;
    this.finalAccEl.textContent = acc + "%";
    this.finalRawEl.textContent = rawWpm;
    this.finalCharsEl.textContent = `${correctC}/${correctC + incorrectC}`;
    this.finalTimeEl.textContent = Math.round(timeElapsed) + "s";
    this.finalModeEl.textContent =
      this.mode === "time"
        ? `${this.difficulty} · ${this.timeLimit}s`
        : `${this.difficulty} · ${this.wordCount} words`;

    this._checkPersonalBest(finalWpm, acc);
    this._drawChart();

    /* Add final WPM snapshot for words mode chart */
    if (this.mode === "words") {
      this.wpmHistory.push({ second: Math.round(timeElapsed), wpm: finalWpm });
    }

    this.resultsEl.classList.remove("hidden");
  }

  /* ────────────────── Personal best ────────────────── */
  _checkPersonalBest(wpm, acc) {
    const key = `pb-${this.difficulty}-${this.mode}-${this.mode === "time" ? this.timeLimit : this.wordCount}`;
    const current = JSON.parse(localStorage.getItem(key) || '{"wpm":0}');

    if (wpm > current.wpm) {
      localStorage.setItem(
        key,
        JSON.stringify({ wpm, acc, date: new Date().toISOString() }),
      );
      this.pbBanner.classList.remove("hidden");
    } else {
      this.pbBanner.classList.add("hidden");
    }
  }

  /* ────────────────── WPM Chart ────────────────── */
  _drawChart() {
    const svg = this.wpmChartEl;
    const W = svg.clientWidth || 480;
    const H = svg.clientHeight || 80;
    svg.innerHTML = "";

    const data = this.wpmHistory;
    if (data.length < 2) return;

    const maxWpm = Math.max(...data.map((d) => d.wpm), 1);
    const maxSec = data[data.length - 1].second || 1;

    const xS = (s) => (s / maxSec) * W;
    const yS = (v) =>
      H - (v / maxWpm) * H * CHART_VERTICAL_SCALE - H * CHART_VERTICAL_PADDING;

    const ns = "http://www.w3.org/2000/svg";

    /* Filled area under line */
    const areaCoords =
      data
        .map((d) => `${xS(d.second).toFixed(1)},${yS(d.wpm).toFixed(1)}`)
        .join(" ") + ` ${xS(maxSec).toFixed(1)},${H} 0,${H}`;
    const area = document.createElementNS(ns, "polygon");
    area.setAttribute("points", areaCoords);
    area.setAttribute("fill", "var(--main)");
    area.setAttribute("opacity", "0.12");
    svg.appendChild(area);

    /* Line */
    const lineCoords = data
      .map((d) => `${xS(d.second).toFixed(1)},${yS(d.wpm).toFixed(1)}`)
      .join(" ");
    const polyline = document.createElementNS(ns, "polyline");
    polyline.setAttribute("points", lineCoords);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke", "var(--main)");
    polyline.setAttribute("stroke-width", "1.8");
    polyline.setAttribute("stroke-linecap", "round");
    polyline.setAttribute("stroke-linejoin", "round");
    svg.appendChild(polyline);

    /* Dots */
    data.forEach((d) => {
      const c = document.createElementNS(ns, "circle");
      c.setAttribute("cx", xS(d.second).toFixed(1));
      c.setAttribute("cy", yS(d.wpm).toFixed(1));
      c.setAttribute("r", "3");
      c.setAttribute("fill", "var(--main)");
      svg.appendChild(c);
    });
  }

  /* ────────────────── Reset ────────────────── */
  resetTest() {
    this.isActive = false;
    this.startTime = null;
    this.currentWordIdx = 0;
    this.currentInput = "";
    this.typedHistory = [];
    this.correctWords = 0;
    this.incorrectWords = 0;
    this.correctChars = 0;
    this.incorrectChars = 0;
    this.extraChars = 0;
    this.missedChars = 0;
    this.wpmHistory = [];
    this.lineOffset = 0;

    clearInterval(this.timer);
    clearTimeout(this.caretBlinkTimer);

    this.wordInput.value = "";
    this.wordInput.disabled = false;

    this.liveWpm.textContent = "0";
    this.liveAcc.textContent = "100%";
    this.liveCounter.textContent =
      this.mode === "time" ? this.timeLimit : this.wordCount;
    this.liveCounterLbl.textContent = this.mode === "time" ? "s" : " left";
    this.liveStats.classList.remove("visible");

    this.wordsContainer.style.transform = "translateY(0)";
    this.resultsEl.classList.add("hidden");

    this.words = this._generateWords();
    this._buildWordEls();

    /* Position caret after layout — use rAF so DOM is painted */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this._moveCaret();
        this.caretEl.classList.remove("typing");
      });
    });

    this.wordInput.focus();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new TypingTest();
});
