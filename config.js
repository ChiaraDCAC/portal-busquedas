/**
 * config.js — Configuración del Portal de Búsquedas
 * Incluir este archivo en index.html ANTES que app.js
 * Reemplaza la variable DCAC_WEBAPP_URL que en GAS se inyectaba via template
 */
if (typeof window !== 'undefined') {
  window.DCAC_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzgMdpchl0knP0m0GFWGUvDrcLDOVxg1rXikQnJSJvNPmRvhD0oP2Pwrjdy0eRB8jZyrA/exec';
}
