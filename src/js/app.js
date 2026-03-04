"use strict";

/**
 * Import Modules
 */
import { ProgressBar } from "./components/ProgressBar.js";
import { StartLoading } from "./components/StartLoading.js";
import { Tooltip } from "./components/Tooltip.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Search } from "./components/Search.js";
import { Swipper } from "./components/Swipper.js";
import { ToggleFavorit } from "./components/ToggleFavorits.js";
import { addEventOnElements } from "./utils.js";
import { ToggleShoppingCart } from "./components/ToggleShoppingCart.js";

/**
 * Get Overlay & Body
 */
const $overlay = document.querySelector("[data-overlay]");
const $body = document.body;

/**
 * Progress Bar
 */
const $progressBar = document.querySelector("[data-progress-bar]");
const $actions = document.querySelectorAll("a, button[type='submit']");
if ($progressBar) ProgressBar($progressBar, $actions);

/**
 * Start Loading
 */
const $startLoading = document.querySelector("[data-start-loading]");
if ($startLoading) window.addEventListener("load", () => StartLoading($startLoading, $body));

/**
 * Tooltips
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Fixed Scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
if ($fixedScrolling.length) $fixedScrolling.forEach($elem => window.addEventListener("scroll", () => FixedScrolling($elem)));

/**
 * Search
 */
const $search = document.querySelector("[data-search]");
if ($search) Search($search);

/**
 * Swippers
 */
const $swippers = document.querySelectorAll("[data-swippers]");
if ($swippers.length) $swippers.forEach($elem => Swipper($elem));

/**
 * Add To Cart
 */
const $toggleShoppingCart = document.querySelectorAll("[data-toggle-shopping-cart]");
if ($toggleShoppingCart.length) $toggleShoppingCart.forEach($elem => ToggleShoppingCart($elem));

/**
 * Toggle Favorits
 */
const $toggleFavorits = document.querySelectorAll("[data-toggle-favorits]");
if ($toggleFavorits.length) $toggleFavorits.forEach($elem => ToggleFavorit($elem));