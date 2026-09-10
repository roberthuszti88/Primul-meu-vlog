const initialEntries = [
  { week: 'WEEK 08 · FEB 19 — 25', title: 'A very ordinary kind of freedom', body: 'The week where charging stopped feeling like an event. Plugged in at home twice, left every morning at 80%, and never thought about range once.', distance: 312, consumption: '16.2', cost: '12.40', mood: '↗' },
  { week: 'WEEK 07 · FEB 12 — 18', title: 'The winter range reality check', body: 'A colder week brought the average up a little. Still plenty for the daily loop, but pre-conditioning is now part of the departure ritual.', distance: 286, consumption: '18.1', cost: '16.80', mood: '→' },
  { week: 'WEEK 06 · FEB 05 — 11', title: 'A small road trip, a big charging stop', body: 'First longer run of the year. Found a quiet 150kW charger beside a bakery, which might be the ideal charging infrastructure after all.', distance: 418, consumption: '17.4', cost: '29.60', mood: '↗' }
];
const tableRows = [
  ['WEEK 05', '248 km', '15.9', '11.20'], ['WEEK 04', '351 km', '16.0', '14.80']
];
const currencyRates = { eurPerRon: 1 / 4.97, hufPerRon: 78.4 };
const translations = {
  en: { topics: 'Topics', electricCar: 'Electric car', livingLog: 'Living log · 2024 — present', heroTitle: 'My Electric<br><em>car</em> journal<span class="lime">.</span>', heroDescription: 'A record of the quiet switch. Weekly notes, real-world range, and what ownership actually feels like.', addUpdate: 'Add weekly update', viewEntries: 'View all entries <span>↘</span>', totalDistance: 'Total distance', thisMonth: '↗ 1,240 km this month', avgConsumption: 'Avg. consumption', lastEightWeeks: 'Last 8 weeks', totalChargingCost: 'Total charging cost', sinceWeekOne: 'Since week 01', home: 'Home <b>72%</b>', public: 'Public <b>28%</b>', theLog: 'THE LOG', weeklyUpdates: 'Weekly updates', numbers: 'NUMBERS', consumption: 'Consumption', week: 'Week', distance: 'Distance', cost: 'Cost', showingLastFive: 'Showing last 5 weeks', seeAll: 'See all <span>↗</span>', chargingHistory: 'CHARGING HISTORY', chargingSessions: 'Charging sessions', provider: 'Provider', energyAmount: 'Energy', price: 'Price', chargingProvider: 'Charging provider', selectProvider: 'Select provider', energyKwh: 'Energy (kWh)', priceRon: 'Price (RON)', periodTotals: 'PERIOD TOTALS', thisWeek: 'This week', thisMonthLabel: 'This month', thisYear: 'This year', kilometers: 'Kilometers', energy: 'Energy', totalCost: 'Total cost', fieldNote: 'FIELD NOTE', newEntry: 'NEW ENTRY', logThisWeek: 'Log this week', title: 'Title', whatHappened: 'What happened?', distanceKm: 'Distance (km)', costEuro: 'Cost (€)', mood: 'Mood', greatWeek: '↗ Great week', steadyWeek: '→ Steady week', learningWeek: '↓ A learning week', publishUpdate: 'Publish update', allWeeks: 'All weeks', recentWeeks: 'Recent weeks', updateAdded: 'Update added to your journal.', topicComing: 'Topic spaces are coming next.', goodEnergy: 'GOOD ENERGY', keepingItReal: 'KEEPING IT REAL', coldTip: 'Cold weather is showing up in the numbers. Pre-conditioning before leaving is making the biggest difference.', rangeTip: 'The best range test is a familiar route: same speed, same charge, fewer assumptions.' },
  ro: { topics: 'Subiecte', electricCar: 'Masina electrica', livingLog: 'Jurnal · 2024 — prezent', heroTitle: 'Jurnalul meu<br><em>masinii</em> electrice<span class="lime">.</span>', heroDescription: 'O inregistrare a trecerii la electric. Note saptamanale, autonomie reala si experienta de proprietar.', addUpdate: 'Adauga actualizare', viewEntries: 'Vezi toate intrarile <span>↘</span>', totalDistance: 'Distanta totala', thisMonth: '↗ 1.240 km luna aceasta', avgConsumption: 'Consum mediu', lastEightWeeks: 'Ultimele 8 saptamani', totalChargingCost: 'Cost total incarcare', sinceWeekOne: 'Din saptamana 01', home: 'Acasa <b>72%</b>', public: 'Public <b>28%</b>', theLog: 'JURNALUL', weeklyUpdates: 'Actualizari saptamanale', numbers: 'CIFRE', consumption: 'Consum', week: 'Saptamana', distance: 'Distanta', cost: 'Cost', showingLastFive: 'Ultimele 5 saptamani', seeAll: 'Vezi toate <span>↗</span>', chargingHistory: 'ISTORIC INCARCARI', chargingSessions: 'Sesiuni de incarcare', provider: 'Furnizor', energyAmount: 'Energie', price: 'Pret', chargingProvider: 'Furnizor incarcare', selectProvider: 'Alege furnizorul', energyKwh: 'Energie (kWh)', priceRon: 'Pret (RON)', periodTotals: 'TOTAL PE PERIOADA', thisWeek: 'Saptamana aceasta', thisMonthLabel: 'Luna aceasta', thisYear: 'Anul acesta', kilometers: 'Kilometri', energy: 'Energie', totalCost: 'Cost total', fieldNote: 'NOTA DE TEREN', newEntry: 'INTRARE NOUA', logThisWeek: 'Noteaza saptamana', title: 'Titlu', whatHappened: 'Ce s-a intamplat?', distanceKm: 'Distanta (km)', costEuro: 'Cost (€)', mood: 'Stare', greatWeek: '↗ Saptamana buna', steadyWeek: '→ Saptamana constanta', learningWeek: '↓ O saptamana de invatare', publishUpdate: 'Publica actualizarea', allWeeks: 'Toate saptamanile', recentWeeks: 'Saptamani recente', updateAdded: 'Actualizarea a fost adaugata in jurnal.', topicComing: 'Spatiile pentru subiecte urmeaza.', goodEnergy: 'ENERGIE BUNA', keepingItReal: 'REALITATEA DE ZI CU ZI', coldTip: 'Frigul se vede in cifre. Preincalzirea inainte de plecare face cea mai mare diferenta.', rangeTip: 'Cel mai bun test de autonomie este un traseu familiar: aceeasi viteza, aceeasi incarcare, mai putine presupuneri.' },
  hu: { topics: 'Témák', electricCar: 'Elektromos autó', livingLog: 'Napló · 2024 — jelenleg', heroTitle: 'Saját elektromos<br><em>autó</em> naplóm<span class="lime">.</span>', heroDescription: 'A csendes átállás naplója. Heti jegyzetek, valós hatótáv és a tulajdonlás valódi élménye.', addUpdate: 'Heti frissítés hozzáadása', viewEntries: 'Összes bejegyzés <span>↘</span>', totalDistance: 'Teljes távolság', thisMonth: '↗ 1 240 km ebben a hónapban', avgConsumption: 'Átlagfogyasztás', lastEightWeeks: 'Az elmúlt 8 hét', totalChargingCost: 'Teljes töltési költség', sinceWeekOne: 'Az 1. héttől', home: 'Otthoni <b>72%</b>', public: 'Nyilvános <b>28%</b>', theLog: 'NAPLÓ', weeklyUpdates: 'Heti frissítések', numbers: 'SZÁMOK', consumption: 'Fogyasztás', week: 'Hét', distance: 'Távolság', cost: 'Költség', showingLastFive: 'Az utolsó 5 hét látható', seeAll: 'Összes megtekintése <span>↗</span>', chargingHistory: 'TÖLTÉSI ELŐZMÉNYEK', chargingSessions: 'Töltési munkamenetek', provider: 'Szolgáltató', energyAmount: 'Energia', price: 'Ár', chargingProvider: 'Töltési szolgáltató', selectProvider: 'Válassz szolgáltatót', energyKwh: 'Energia (kWh)', priceRon: 'Ár (RON)', periodTotals: 'IDŐSZAK ÖSSZESEN', thisWeek: 'Ezen a héten', thisMonthLabel: 'Ebben a hónapban', thisYear: 'Ebben az évben', kilometers: 'Kilométer', energy: 'Energia', totalCost: 'Teljes költség', fieldNote: 'ÚTI JEGYZET', newEntry: 'ÚJ BEJEGYZÉS', logThisWeek: 'E heti napló', title: 'Cím', whatHappened: 'Mi történt?', distanceKm: 'Távolság (km)', costEuro: 'Költség (€)', mood: 'Hangulat', greatWeek: '↗ Jó hét', steadyWeek: '→ Nyugodt hét', learningWeek: '↓ Tanulságos hét', publishUpdate: 'Frissítés közzététele', allWeeks: 'Minden hét', recentWeeks: 'Legutóbbi hetek', updateAdded: 'A frissítés bekerült a naplóba.', topicComing: 'A témák hamarosan elérhetők.', goodEnergy: 'JÓ ENERGIA', keepingItReal: 'A VALÓSÁG', coldTip: 'A hideg idő látszik a számokon. Az indulás előtti előfűtés segít a legtöbbet.', rangeTip: 'A legjobb hatótávteszt egy ismerős útvonal: azonos sebesség, azonos töltés, kevesebb feltételezés.' }
};
const chargingProviders = ['Altele', 'Ampevo', 'E-Charge', 'E-On Drive', 'EV-GO', 'iHunt', 'Kaufland', 'Lidl', 'NGT Charge', 'OMV Emotion', 'PPC Blue', 'Petrom Electric', 'Plugpoint', 'Tesla', 'Voltrelli'];
translations.en.addChargingSession = '+ Add charging session';
translations.en.weeklyChargingTotal = 'Weekly charging total';
translations.ro.addChargingSession = '+ Adauga sesiune de incarcare';
translations.ro.weeklyChargingTotal = 'Total incarcare saptamanal';
translations.hu.addChargingSession = '+ Töltési munkamenet hozzáadása';
translations.hu.weeklyChargingTotal = 'Heti töltési összeg';
translations.en.consumablesExpense = 'Consumables expense';
translations.en.repairsExpense = 'Repairs expense';
translations.en.otherExpense = 'Other expenses';
translations.ro.consumablesExpense = 'Cheltuieli cu consumabile';
translations.ro.repairsExpense = 'Cheltuieli cu reparatii';
translations.ro.otherExpense = 'Alte cheltuieli';
translations.hu.consumablesExpense = 'Fogyóeszközök költsége';
translations.hu.repairsExpense = 'Javítási költségek';
translations.hu.otherExpense = 'Egyéb költségek';
translations.en.costPerKwh = 'COST/KWH';
translations.ro.costPerKwh = 'COST/KWH';
translations.hu.costPerKwh = 'KÖLTSÉG/KWH';
translations.en.averageCost = 'AVERAGE COST';
translations.ro.averageCost = 'COST MEDIU';
translations.hu.averageCost = 'ÁTLAGOS KÖLTSÉG';
translations.en.selectWeek = 'Please select a week first.';
translations.ro.selectWeek = 'Selecteaza mai intai saptamana.';
translations.hu.selectWeek = 'Először válassz egy hetet.';
let language = localStorage.getItem('current-language') || 'en';
const t = key => { const value = translations[language][key] || translations.en[key] || key; if (key === 'livingLog') return value.replace('2024', '2026'); if (key === 'heroTitle' && language === 'ro') return 'Jurnalul<br><em>masinii mele</em><br>electrice<span class="lime">.</span>'; return value; };
const entriesEl = document.querySelector('#entries');
const tableEl = document.querySelector('#consumptionTable');
const dialog = document.querySelector('#entryDialog');
const toast = document.querySelector('#toast');
let entries = JSON.parse(localStorage.getItem('current-electric-car-entries') || 'null') || [...initialEntries];
let showAll = false;
let searchQuery = '';
const routeMapPanel = document.createElement('div');
routeMapPanel.className = 'route-map';
routeMapPanel.innerHTML = '<div class="route-map-heading"><span class="section-kicker" data-i18n="routeMap">ROUTE MAP</span><span class="map-status" id="mapStatus"></span></div><div class="map-canvas" id="routeMap" aria-label="Route map"></div>';
document.querySelector('.table-card').append(routeMapPanel);
const locationsField = document.createElement('label');
locationsField.innerHTML = '<span class="field-label" data-i18n="locations">Locations</span><input name="locations" placeholder="Satu Mare - Soconzel - Cluj-Napoca - Satu Mare">';
document.querySelector('input[name="week"]').closest('label').after(locationsField);
const knownLocations = { 'satu mare': [47.7909, 22.8857], 'soconzel': [47.4336, 23.0281], 'cluj napoca': [46.7712, 23.6236], 'cluj-napoca': [46.7712, 23.6236] };
let routeMap;
let routeLayer;
function normalizeLocation(value) { return value.toLowerCase().trim().replace(/[,.]/g, '').replace(/\s+/g, ' '); }
function splitLocations(value) { return String(value || '').split(/\s+-\s+|,|;/).map(location => location.trim()).filter(Boolean); }
async function coordinatesFor(location) {
  const known = knownLocations[normalizeLocation(location)];
  if (known) return known;
  try { const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=ro&q=${encodeURIComponent(location)}`); const results = await response.json(); return results[0] ? [Number(results[0].lat), Number(results[0].lon)] : null; } catch { return null; }
}
async function renderRouteMap(records) {
  if (!routeMap) { routeMap = L.map('routeMap', { zoomControl: false, attributionControl: true }).setView([46.8, 24], 7); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; OpenStreetMap contributors' }).addTo(routeMap); }
  if (!routeLayer) routeLayer = L.layerGroup().addTo(routeMap); else routeLayer.clearLayers();
  const locations = records.flatMap(record => splitLocations(record.locations));
  const uniqueLocations = locations.filter((location, index, list) => index === list.findIndex(item => normalizeLocation(item) === normalizeLocation(location)));
  const periodCost = records.reduce((total, record) => total + record.cost, 0);
  if (!uniqueLocations.length) { document.querySelector('#mapStatus').textContent = language === 'ro' ? `Fără locații · ${formatCurrency(periodCost)}` : language === 'hu' ? `Nincs helyszín · ${formatCurrency(periodCost)}` : `No locations · ${formatCurrency(periodCost)}`; return; }
  const points = (await Promise.all(uniqueLocations.map(async location => ({ name: location, point: await coordinatesFor(location) })))).filter(item => item.point);
  if (!points.length) { document.querySelector('#mapStatus').textContent = language === 'ro' ? `Locațiile nu au fost găsite · ${formatCurrency(periodCost)}` : language === 'hu' ? `A helyszínek nem találhatók · ${formatCurrency(periodCost)}` : `Locations not found · ${formatCurrency(periodCost)}`; return; }
  const line = points.map(item => item.point);
  points.forEach((item, index) => L.marker(item.point).bindPopup(`<strong>${index + 1}. ${item.name}</strong>`).addTo(routeLayer));
  L.polyline(line, { color: '#94bd20', weight: 4, opacity: .9 }).addTo(routeLayer);
  routeMap.fitBounds(L.latLngBounds(line), { padding: [18, 18] });
  document.querySelector('#mapStatus').textContent = `${points.length} ${language === 'ro' ? 'locații' : language === 'hu' ? 'helyszín' : 'locations'} · ${formatCurrency(periodCost)}`;
}
function formatCurrency(ronValue) {
  const amount = Number(ronValue) || 0;
  if (language === 'en') return `€${(amount * currencyRates.eurPerRon).toFixed(2)}`;
  if (language === 'hu') return `${Math.round(amount * currencyRates.hufPerRon).toLocaleString('hu-HU')} Ft`;
  return `${amount.toFixed(2)} RON`;
}
function formatEnergy(value) { return Number(value).toFixed(2); }
const translationLanguageCodes = { en: 'en', ro: 'ro', hu: 'hu' };
async function translateText(text) {
  if (!text || language === 'ro') return text || '';
  try {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=ro&tl=${translationLanguageCodes[language]}&dt=t&q=${encodeURIComponent(text)}`);
    const result = await response.json();
    const translated = result[0]?.map(part => part[0]).join('');
    if (translated) return translated;
  } catch { /* Try the secondary service below. */ }
  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ro|${translationLanguageCodes[language]}`);
    const result = await response.json();
    return result.responseData?.translatedText || text;
  } catch { return text; }
}
async function translateEntries() {
  if (language === 'ro') return;
  await Promise.all(entries.map(async entry => {
    entry.translations ||= {};
    entry.translations[language] ||= {};
    const translated = entry.translations[language];
    if (!translated.title || translated.title === entry.title) translated.title = await translateText(entry.title);
    if (!translated.body || translated.body === entry.body) translated.body = await translateText(entry.body);
    if (entry.locations && (!translated.locations || translated.locations === entry.locations)) translated.locations = await translateText(entry.locations);
  }));
  localStorage.setItem('current-electric-car-entries', JSON.stringify(entries));
}
const yearLabels = { en: 'Year', ro: 'An', hu: 'Év' };
const monthNames = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ro: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  hu: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December']
};
const monthCodes = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const odometerBase = 167780;
function weekNumber(value) { return (String(value).match(/WEEK\s*0?(\d+)/i) || [])[1] || null; }
function normalizedWeek(value) { const number = weekNumber(value); return number ? `WEEK ${String(number).padStart(2, '0')}` : ''; }
function monthNumber(value) { const code = (String(value).match(/\b(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)\b/i) || [])[1]; return code ? monthCodes.indexOf(code.toUpperCase()) + 1 : null; }
const uniqueEntries = new Map();
entries.forEach(entry => { const key = `${String(entry.year || 2026)}|${normalizedWeek(entry.week) || `entry-${uniqueEntries.size}`}`; if (!uniqueEntries.has(key)) uniqueEntries.set(key, { ...entry, year: String(entry.year || 2026), week: normalizedWeek(entry.week) || entry.week }); });
entries = [...uniqueEntries.values()];
function populatePeriodFilters() {
  const monthSelect = document.querySelector('#summaryMonth');
  const weekSelect = document.querySelector('#summaryWeek');
  const selectedMonth = monthSelect.value === 'all' ? String(new Date().getMonth() + 1) : (monthSelect.value || String(new Date().getMonth() + 1));
  const currentYear = String(new Date().getFullYear());
  const yearSelect = document.querySelector('#summaryYear');
  const selectedYear = yearSelect.value || currentYear;
  yearSelect.innerHTML = Array.from({ length: 10 }, (_, index) => `<option value="${Number(currentYear) + index}">${Number(currentYear) + index}</option>`).join('');
  yearSelect.value = selectedYear;
  if (!yearSelect.dataset.userSelected && Array.from(yearSelect.options).some(option => option.value === currentYear)) yearSelect.value = currentYear;
  monthSelect.innerHTML = `<option value="all">-</option>${monthNames[language].map((name, index) => `<option value="${index + 1}">${name}</option>`).join('')}`;
  monthSelect.value = selectedMonth;
  weekSelect.innerHTML = '<option value="all">-</option>' + Array.from({ length: 52 }, (_, index) => `<option value="${index + 1}">WEEK ${String(index + 1).padStart(2, '0')}</option>`).join('');
  weekSelect.disabled = false;
}
const yearField = document.createElement('label');
const currentYear = new Date().getFullYear();
yearField.innerHTML = `<span class="field-label" id="entryYearLabel">${yearLabels[language]}</span><select name="year">${Array.from({ length: 10 }, (_, index) => `<option value="${currentYear + index}"${index === 0 ? ' selected' : ''}>${currentYear + index}</option>`).join('')}</select>`;
document.querySelector('input[name="week"]').closest('label').after(yearField);
const weekInput = document.querySelector('input[name="week"]');
const weekLabel = weekInput.closest('label');
const weekSelect = document.createElement('select');
weekSelect.name = 'week';
weekSelect.innerHTML = `<option value="">${language === 'ro' ? 'Alege saptamana' : language === 'hu' ? 'Válassz hetet' : 'Select week'}</option>${Array.from({ length: 52 }, (_, index) => { const value = String(index + 1).padStart(2, '0'); return `<option value="WEEK ${value}">WEEK ${value}</option>`; }).join('')}`;
weekInput.replaceWith(weekSelect);
let editingEntryIndex = -1;
function populateEntryForm(entry, preserveSelection = false) {
  editingEntryIndex = entry ? entries.indexOf(entry) : -1;
  const form = document.querySelector('#entryForm');
  if (!form) return;
  const selectedYear = form.elements.year.value;
  const selectedWeek = form.elements.week.value;
  form.elements.year.value = String(entry?.year || (preserveSelection ? selectedYear : currentYear));
  form.elements.week.value = normalizedWeek(entry?.week) || (preserveSelection ? selectedWeek : '');
  form.elements.title.value = entry?.title || '';
  form.elements.body.value = entry?.body || '';
  form.elements.distance.value = entry?.distance || '';
  form.elements.consumption.value = entry?.consumption || '';
  form.elements.consumables.value = entry?.consumables || '';
  form.elements.repairs.value = entry?.repairs || '';
  form.elements.other.value = entry?.other || '';
  document.querySelector('#chargingEntryList').innerHTML = '';
  const sessions = entry?.chargingSessions?.length ? entry.chargingSessions : [{ charger: entry?.charger || '', energy: entry?.energy || '', cost: entry?.cost || '' }];
  sessions.forEach(session => { addChargingSessionRow(); const row = document.querySelector('#chargingEntryList .charging-entry-row:last-child'); row.querySelector('[name="sessionCharger"]').value = session.charger || ''; row.querySelector('[name="sessionEnergy"]').value = session.energy || ''; row.querySelector('[name="sessionCost"]').value = session.cost || ''; });
  updateChargingFormTotal();
}
document.querySelector('select[name="year"]').addEventListener('change', () => { const selectedWeek = weekSelect.value; const selectedYear = document.querySelector('select[name="year"]').value; const index = entries.findIndex(entry => String(entry.year || currentYear) === selectedYear && normalizedWeek(entry.week) === selectedWeek); populateEntryForm(index >= 0 ? entries[index] : null, true); });
weekSelect.addEventListener('change', () => { const selected = weekSelect.value; const selectedYear = document.querySelector('select[name="year"]').value; const index = entries.findIndex(entry => String(entry.year || currentYear) === selectedYear && normalizedWeek(entry.week) === selected); populateEntryForm(index >= 0 ? entries[index] : null, true); });
function addChargingSessionRow() {
  const list = document.querySelector('#chargingEntryList');
  if (!list) return;
  const row = document.createElement('div');
  row.className = 'charging-entry-row';
  row.innerHTML = `<label><span class="field-label">${t('chargingProvider')}</span><select name="sessionCharger"><option value="">${t('selectProvider')}</option>${chargingProviders.map(provider => `<option value="${provider}">${provider}</option>`).join('')}</select></label><label><span class="field-label">${t('energyKwh')}</span><input name="sessionEnergy" type="number" min="0" step="0.01" placeholder="13.85"></label><label><span class="field-label">${t('priceRon')}</span><input name="sessionCost" type="number" min="0" step="0.01" placeholder="18.40"></label><button class="remove-charging-button" type="button" aria-label="Remove charging session">×</button>`;
  row.querySelector('.remove-charging-button').addEventListener('click', () => { row.remove(); updateChargingFormTotal(); });
  row.querySelectorAll('input').forEach(input => input.addEventListener('input', updateChargingFormTotal));
  list.append(row);
}
function updateChargingFormTotal() {
  const total = [...document.querySelectorAll('input[name="sessionCost"]')].reduce((sum, input) => sum + Number(input.value || 0), 0);
  const totalElement = document.querySelector('#chargingFormTotal');
  if (totalElement) totalElement.textContent = `${total.toFixed(2)} RON`;
}
['week', 'title', 'body', 'distance', 'consumption'].forEach(fieldName => document.querySelector(`[name="${fieldName}"]`)?.removeAttribute('required'));
addChargingSessionRow();
const moodField = document.querySelector('select[name="mood"]')?.closest('.form-row');
if (moodField) {
  const expenseFields = document.createElement('div');
  expenseFields.className = 'form-row';
  expenseFields.innerHTML = `<label><span class="field-label" data-i18n="consumablesExpense">Consumables expense</span><input name="consumables" type="number" min="0" step="0.01" placeholder="0.00"></label><label><span class="field-label" data-i18n="repairsExpense">Repairs expense</span><input name="repairs" type="number" min="0" step="0.01" placeholder="0.00"></label>`;
  moodField.before(expenseFields);
  const otherField = document.createElement('label');
  otherField.innerHTML = '<span class="field-label" data-i18n="otherExpense">Other expenses</span><input name="other" type="number" min="0" step="0.01" placeholder="0.00">';
  moodField.before(otherField);
}

function renderExpenseBars(selector, field) {
  const barsEl = document.querySelector(selector);
  if (!barsEl) return;
  const monthlyValues = Array.from({ length: 12 }, (_, monthIndex) => entries.reduce((sum, entry) => monthNumber(entry.week) === monthIndex + 1 ? sum + Number(entry[field] || 0) : sum, 0));
  const maxValue = Math.max(...monthlyValues, 1);
  barsEl.innerHTML = monthlyValues.map(value => `<i class="${value > 0 ? 'filled' : ''}" style="height:${Math.max((value / maxValue) * 100, value > 0 ? 12 : 4)}%" title="${value.toFixed(2)} RON"></i>`).join('');
}
function renderExpenseCharts() {
  renderExpenseBars('.consumables-bars', 'consumables');
  renderExpenseBars('.repairs-bars', 'repairs');
  renderExpenseBars('.other-bars', 'other');
}

function renderMileageBars() {
  const barsEl = document.querySelector('.mini-bars');
  if (!barsEl) return;
  const monthlyValues = Array.from({ length: 12 }, (_, monthIndex) => {
    const total = entries.reduce((sum, entry) => {
      const month = monthNumber(entry.week);
      if (month !== monthIndex + 1) return sum;
      return sum + Number(entry.distance || 0);
    }, 0);
    return total;
  });
  const maxValue = Math.max(...monthlyValues, 1);
  const bars = monthlyValues.map(value => {
    const height = Math.max((value / maxValue) * 100, value > 0 ? 12 : 4);
    const filled = value > 0 ? 'filled' : '';
    return `<i class="${filled}" style="height:${height}%" title="${value} km"></i>`;
  }).join('');
  barsEl.innerHTML = bars;
  const odometerTotal = entries.reduce((sum, entry) => sum + Number(entry.distance || 0), odometerBase);
  const odometerEl = document.querySelector('#odometerTotal');
  if (odometerEl) odometerEl.textContent = `${odometerTotal.toLocaleString()} km`;
}
function renderAvgConsumptionBars() {
  const barsEl = document.querySelector('.avg-bars');
  if (!barsEl) return;
  const monthlyValues = Array.from({ length: 12 }, (_, monthIndex) => {
    const monthEntries = entries.filter(entry => monthNumber(entry.week) === monthIndex + 1 && Number(entry.distance || 0) > 0);
    if (!monthEntries.length) return 0;
    const totalDistance = monthEntries.reduce((sum, entry) => sum + Number(entry.distance || 0), 0);
    const weightedTotal = monthEntries.reduce((sum, entry) => sum + Number(entry.distance || 0) * Number(entry.consumption || 0), 0);
    return totalDistance ? weightedTotal / totalDistance : 0;
  });
  const maxValue = Math.max(...monthlyValues, 20);
  const bars = monthlyValues.map(value => {
    const height = value > 0 ? Math.max((value / maxValue) * 100, 12) : 4;
    const filled = value > 0 ? 'filled' : '';
    return `<i class="${filled}" style="height:${height}%" title="${value.toFixed(2)} kWh/100"></i>`;
  }).join('');
  barsEl.innerHTML = bars;
}
function renderCostBars() {
  const barsEl = document.querySelector('.cost-bars');
  if (!barsEl) return;
  const monthlyValues = Array.from({ length: 12 }, (_, monthIndex) => {
    const total = entries.reduce((sum, entry) => {
      const month = monthNumber(entry.week);
      if (month !== monthIndex + 1) return sum;
      return sum + Number(entry.cost || 0);
    }, 0);
    return total;
  });
  const maxValue = Math.max(...monthlyValues, 1);
  const bars = monthlyValues.map(value => {
    const height = Math.max((value / maxValue) * 100, value > 0 ? 12 : 4);
    const filled = value > 0 ? 'filled' : '';
    return `<i class="${filled}" style="height:${height}%" title="€${value.toFixed(2)}"></i>`;
  }).join('');
  barsEl.innerHTML = bars;
}
function getEntryCostPerKwh(entry) {
    const sessions = entry.chargingSessions?.length ? entry.chargingSessions : (entry.charger || entry.energy ? [{ energy: entry.energy, cost: entry.cost }] : []);
  let energy = sessions.reduce((sum, session) => sum + Number(session.energy || 0), 0);
  let cost = sessions.reduce((sum, session) => sum + Number(session.cost || 0), 0);
  if (!energy) {
    energy = Number(entry.distance || 0) * Number(entry.consumption || 0) / 100;
    cost = Number(entry.cost || 0);
  }
    return energy > 0 ? cost / energy : 0;
  }
function formatCostPerKwh(value) {
    const amount = Number(value || 0);
    if (!amount) return '<span style="color:#9a9d94;font:500 10px var(--mono)">-</span>';
    const color = amount < 2.09 ? '#5d8e1b' : amount <= 2.79 ? '#c69a17' : '#c64d4d';
    return `<span style="color:${color};font:500 10px var(--mono);white-space:nowrap">${amount.toFixed(2)} RON/kWh</span>`;
  }
  function averageCostPerKwh(records) {
    let totalEnergy = 0;
    let totalCost = 0;
    records.forEach(entry => {
      const sessions = entry.chargingSessions?.length ? entry.chargingSessions : (entry.charger || entry.energy ? [{ energy: entry.energy, cost: entry.cost }] : []);
      let energy = sessions.reduce((sum, session) => sum + Number(session.energy || 0), 0);
      let cost = sessions.reduce((sum, session) => sum + Number(session.cost || 0), 0);
      if (!energy) {
        energy = Number(entry.distance || 0) * Number(entry.consumption || 0) / 100;
        cost = Number(entry.cost || 0);
      }
      if (energy) { totalEnergy += energy; totalCost += cost; }
    });
    return totalEnergy ? totalCost / totalEnergy : 0;
  }
  function renderCostKwhSummary() {
    const summary = document.querySelector('#costKwhSummary');
    if (!summary) return;
    const average = averageCostPerKwh(getSelectedRecords());
    const color = average ? (average < 2.09 ? '#5d8e1b' : average <= 2.79 ? '#c69a17' : '#c64d4d') : '#9a9d94';
    summary.innerHTML = `<span>${t('averageCost')} <strong style="color:${color}">${average ? `${average.toFixed(2)} RON/kWh` : '-'}</strong></span>`;
  }
function ensureCostPerKwhHeader() {
    const headerRow = document.querySelector('#consumptionTable')?.closest('table')?.querySelector('thead tr');
    if (!headerRow || headerRow.querySelector('[data-i18n="costPerKwh"]')) return;
    const header = document.createElement('th');
    header.dataset.i18n = 'costPerKwh';
    header.textContent = t('costPerKwh');
    headerRow.append(header);
}
function renderEntries() {
  const searchable = entry => [entry.week, entry.title, entry.body, entry.locations, entry.charger, ...(entry.chargingSessions || []).map(session => session.charger)].join(' ').toLowerCase().includes(searchQuery.toLowerCase());
  const matchingEntries = searchQuery ? entries.filter(searchable) : entries;
  const visible = showAll || searchQuery ? matchingEntries : matchingEntries.slice(0, 3);
  entriesEl.innerHTML = visible.map(entry => `
    <article class="entry">
      <div class="entry-week">${normalizedWeek(entry.week) || '—'}</div>
      <div><h3>${language === 'ro' ? entry.title || 'Charging update' : entry.translations?.[language]?.title || entry.title || 'Charging update'}</h3><p>${language === 'ro' ? entry.body || 'Charging data only.' : entry.translations?.[language]?.body || entry.body || 'Charging data only.'}</p><div class="entry-meta"><span>${entry.mood || '→'} ${entry.mood === '↗' ? t('goodEnergy') : t('keepingItReal')}</span><span>${entry.distance || 0} KM</span><span>${formatEnergy(entry.consumption || 0)} KWH/100</span><span>${formatCurrency(entry.cost)}</span></div></div>
    </article>`).join('');
}
function renderTable() {
  ensureCostPerKwhHeader();
  const matchingEntries = searchQuery ? entries.filter(entry => [entry.week, entry.title, entry.body, entry.locations, entry.charger, ...(entry.chargingSessions || []).map(session => session.charger)].join(' ').toLowerCase().includes(searchQuery.toLowerCase())) : entries;
  const entryRows = matchingEntries.map(entry => [normalizedWeek(entry.week) || '—', `${entry.distance || 0} km`, formatEnergy(entry.consumption || 0), formatCurrency(entry.cost), formatCostPerKwh(getEntryCostPerKwh(entry))]);
  const legacyRows = tableRows.map(row => [row[0], row[1], formatEnergy(row[2]), formatCurrency(row[3]), formatCostPerKwh(0)]);
  const rows = [...entryRows, ...legacyRows];
  tableEl.innerHTML = rows.slice(0, showAll ? rows.length : 5).map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td class="cost">${row[3]}</td><td>${row[4]}</td></tr>`).join('');
  renderChargingTable(getSelectedRecords());
  renderTotals();
}
function renderChargingTable(records) {
  const chargingTable = document.querySelector('#chargingTable');
  if (!chargingTable) return;
  const rows = records.flatMap(record => (record.chargingSessions || (record.charger || record.energy ? [{ charger: record.charger, energy: record.energy, cost: record.cost }] : [])).map(session => {
    const energy = Number(session.energy || 0);
    const price = Number(session.cost || 0);
    const unitPrice = energy > 0 ? ` · ${formatCurrency(price / energy)}/kWh` : '';
    return `<tr><td>WEEK ${String(record.week || '-').padStart(2, '0')}</td><td>${session.charger || '-'}</td><td>${energy > 0 ? `${energy.toFixed(2)} kWh` : '-'}</td><td class="cost">${formatCurrency(price)}${unitPrice}</td></tr>`;
  }));
  chargingTable.innerHTML = rows.slice(0, showAll ? rows.length : 5).join('') || '<tr><td colspan="4" class="empty-cell">-</td></tr>';
}
function getSelectedRecords() {
  const records = [...entries.map(entry => ({ year: String(entry.year || 2026), month: monthNumber(entry.week), week: weekNumber(entry.week), locations: entry.locations || '', distance: Number(entry.distance), consumption: Number(entry.consumption), cost: Number(entry.cost), charger: entry.charger || '', energy: Number(entry.energy || 0), chargingSessions: entry.chargingSessions || [], consumables: Number(entry.consumables || 0), repairs: Number(entry.repairs || 0), other: Number(entry.other || 0) })), ...tableRows.map(row => ({ year: '2026', month: null, week: weekNumber(row[0]), locations: '', distance: Number(row[1].replace(' km', '')), consumption: Number(row[2]), cost: Number(row[3]), charger: '', energy: 0, chargingSessions: [], consumables: 0, repairs: 0, other: 0 }))];
  const selectedYear = document.querySelector('#summaryYear').value;
  const selectedMonth = document.querySelector('#summaryMonth').value;
  const selectedWeek = document.querySelector('#summaryWeek').value;
  return records.filter(record => record.year === selectedYear && (selectedMonth === 'all' || record.month === Number(selectedMonth)) && (selectedWeek === 'all' || record.week === selectedWeek));
}
function getWeightedAverageConsumption(records) {
  const totalDistance = records.reduce((sum, record) => sum + Number(record.distance || 0), 0);
  if (!totalDistance) return 0;
  const weightedTotal = records.reduce((sum, record) => sum + Number(record.distance || 0) * Number(record.consumption || 0), 0);
  return weightedTotal / totalDistance;
}
function renderTotals() {
  const selected = getSelectedRecords();
  renderChargingTable(selected);
  const distance = selected.reduce((total, record) => total + record.distance, 0);
  const energy = selected.reduce((total, record) => total + (record.distance * record.consumption / 100), 0);
  const cost = selected.reduce((total, record) => total + record.cost, 0);
  const weightedAverage = getWeightedAverageConsumption(selected);
  const avgValueEl = document.querySelector('#avgConsumptionValue');
  if (avgValueEl) avgValueEl.innerHTML = `${weightedAverage.toFixed(2)} <span>kWh/100</span>`;
  const totalChargingCostValue = document.querySelector('#totalChargingCostValue');
  if (totalChargingCostValue) totalChargingCostValue.textContent = formatCurrency(cost);
  const totalDistanceEl = document.querySelector('#totalDistance');
  if (totalDistanceEl) totalDistanceEl.innerHTML = `${distance.toLocaleString()} <span>km</span>`;
  const totalEnergyEl = document.querySelector('#totalEnergy');
  if (totalEnergyEl) totalEnergyEl.textContent = `${energy.toFixed(2)} kWh`;
  const totalCostEl = document.querySelector('#totalCost');
  if (totalCostEl) totalCostEl.textContent = formatCurrency(cost);
  [['consumables', '#consumablesExpenseValue'], ['repairs', '#repairsExpenseValue'], ['other', '#otherExpenseValue']].forEach(([field, selector]) => {
    const value = selected.reduce((sum, record) => sum + Number(record[field] || 0), 0);
    const element = document.querySelector(selector);
    if (element) element.innerHTML = `${value.toFixed(2)} <span>RON</span>`;
  });
  renderCostKwhSummary();
  renderRouteMap(selected);
}
function showToast(message) { toast.textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 2800); }
async function applyTranslations() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = t(element.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(element => { element.innerHTML = t(element.dataset.i18nHtml); });
  document.querySelector('#filterButton').innerHTML = `${showAll ? t('recentWeeks') : t('allWeeks')} <span>⌄</span>`;
  const languageDetails = { en: ['🇬🇧', 'English'], ro: ['🇷🇴', 'Română'], hu: ['🇭🇺', 'Magyar'] }[language];
  document.querySelector('#languageCurrent').innerHTML = `<span class="language-flag">${languageDetails[0]}</span><span>${languageDetails[1]}</span><span class="language-chevron">⌄</span>`;
  document.querySelectorAll('.language-option').forEach(option => option.classList.toggle('selected', option.dataset.language === language));
  const entryYearLabel = document.querySelector('#entryYearLabel');
  if (entryYearLabel) entryYearLabel.textContent = yearLabels[language];
  locationsField.querySelector('.field-label').textContent = language === 'ro' ? 'Locații' : language === 'hu' ? 'Helyszínek' : 'Locations';
  const routeMapLabel = document.querySelector('.route-map .section-kicker');
  if (routeMapLabel) routeMapLabel.textContent = language === 'ro' ? 'HARTĂ TRASEU' : language === 'hu' ? 'ÚTVONALTÉRKÉP' : 'ROUTE MAP';
  const priceLabel = document.querySelector('[data-i18n="priceRon"]');
  if (priceLabel) priceLabel.textContent = language === 'ro' ? 'Pret (RON)' : language === 'hu' ? 'Ár (RON)' : 'Price (RON)';
  document.querySelectorAll('[data-i18n]').forEach(element => { if (element.tagName === 'OPTION') element.textContent = t(element.dataset.i18n); });
  populatePeriodFilters();
  await translateEntries();
  renderEntries(); renderTable(); renderMileageBars(); renderAvgConsumptionBars(); renderCostBars(); renderExpenseCharts();
}

renderEntries(); renderTable(); renderExpenseCharts();
applyTranslations();
document.querySelector('#openEntryButton').addEventListener('click', () => { populateEntryForm(null); dialog.showModal(); });
const searchButton = document.querySelector('.icon-button[aria-label="Search"]');
document.querySelector('.icon-button[aria-label="Notifications"]')?.remove();
document.querySelector('.online-dot')?.remove();
document.querySelector('.breadcrumb')?.remove();
if (searchButton) {
  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.placeholder = 'Search journal';
  searchInput.setAttribute('aria-label', 'Search journal');
  searchInput.style.cssText = 'display:none;width:150px;border:1px solid var(--line);background:var(--card);color:var(--ink);padding:7px 9px;font:500 11px var(--sans);outline:none';
  searchButton.before(searchInput);
  searchButton.addEventListener('click', () => { const open = searchInput.style.display === 'none'; searchInput.style.display = open ? 'block' : 'none'; if (open) searchInput.focus(); else { searchInput.value = ''; searchQuery = ''; renderEntries(); renderTable(); } });
  searchInput.addEventListener('input', event => { searchQuery = event.target.value.trim(); renderEntries(); renderTable(); });
  searchInput.addEventListener('keydown', event => { if (event.key === 'Escape') { searchButton.click(); } });
}
document.querySelector('#languageCurrent').addEventListener('click', () => { const picker = document.querySelector('#languagePicker'); const isOpen = picker.classList.toggle('open'); document.querySelector('#languageCurrent').setAttribute('aria-expanded', String(isOpen)); });
document.querySelectorAll('.language-option').forEach(option => option.addEventListener('click', event => { language = event.currentTarget.dataset.language; localStorage.setItem('current-language', language); document.querySelector('#languagePicker').classList.remove('open'); document.querySelector('#languageCurrent').setAttribute('aria-expanded', 'false'); applyTranslations(); }));
document.addEventListener('click', event => { if (!event.target.closest('#languagePicker')) { document.querySelector('#languagePicker').classList.remove('open'); document.querySelector('#languageCurrent').setAttribute('aria-expanded', 'false'); } });
document.querySelector('#newTopicButton').addEventListener('click', () => showToast(t('topicComing')));
document.querySelector('#filterButton').addEventListener('click', () => { showAll = !showAll; applyTranslations(); });
document.querySelector('#addChargingSession').addEventListener('click', addChargingSessionRow);
document.querySelector('#summaryYear').addEventListener('change', event => { event.target.dataset.userSelected = 'true'; renderTotals(); });
document.querySelector('#summaryMonth').addEventListener('change', renderTotals);
document.querySelector('#summaryWeek').addEventListener('change', renderTotals);
document.querySelector('#entryForm').addEventListener('submit', event => { event.preventDefault(); const data = new FormData(event.target); const selectedWeek = normalizedWeek(data.get('week')); const selectedYear = String(data.get('year') || currentYear); if (!selectedWeek) { showToast(t('selectWeek')); return; } const chargingSessions = [...document.querySelectorAll('.charging-entry-row')].map(row => ({ charger: row.querySelector('[name="sessionCharger"]').value, energy: Number(row.querySelector('[name="sessionEnergy"]').value || 0).toFixed(2), cost: Number(row.querySelector('[name="sessionCost"]').value || 0).toFixed(2) })).filter(session => session.charger || Number(session.energy) || Number(session.cost)); const totalCost = chargingSessions.reduce((sum, session) => sum + Number(session.cost), 0); const updatedEntry = { year: selectedYear, week: selectedWeek, locations: data.get('locations'), title: data.get('title'), body: data.get('body'), distance: data.get('distance'), consumption: data.get('consumption'), charger: chargingSessions[0]?.charger || '', energy: chargingSessions[0]?.energy || '', chargingSessions, cost: totalCost.toFixed(2), consumables: Number(data.get('consumables') || 0).toFixed(2), repairs: Number(data.get('repairs') || 0).toFixed(2), other: Number(data.get('other') || 0).toFixed(2), mood: data.get('mood'), translations: {} }; const duplicateIndex = entries.findIndex((entry, index) => String(entry.year || currentYear) === selectedYear && normalizedWeek(entry.week) === selectedWeek && index !== editingEntryIndex); if (duplicateIndex >= 0) entries.splice(duplicateIndex, 1); const targetIndex = entries.findIndex((entry, index) => String(entry.year || currentYear) === selectedYear && normalizedWeek(entry.week) === selectedWeek && index === editingEntryIndex); if (targetIndex >= 0) entries[targetIndex] = updatedEntry; else entries.unshift(updatedEntry); localStorage.setItem('current-electric-car-entries', JSON.stringify(entries)); renderEntries(); renderTable(); renderMileageBars(); renderAvgConsumptionBars(); renderCostBars(); renderExpenseCharts(); dialog.close(); event.target.reset(); editingEntryIndex = -1; document.querySelector('#chargingEntryList').innerHTML = ''; addChargingSessionRow(); updateChargingFormTotal(); showToast(t('updateAdded')); document.querySelector('#history').scrollIntoView({ behavior: 'smooth' }); });
