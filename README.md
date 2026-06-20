Aplikace, kde uživatel zadá klíčové slovo, aplikace zavolá backendový endpoint "/search", ten přes SerpApi získá organické výsledky z první stránky Googlu a vrátí je zpět na frontend. Výsledky se zobrazí na stránce a dají se stáhnout jako JSON soubor.

Frontend jsem udělal v čistém HTML, CSS a JavaScriptu.
"index.html" obsahuje strukturu stránky, "style.css" řeší vzhled a "app.js" řeší logiku v prohlížeči – načtení hodnoty z inputu, zavolání backendu přes "fetch", zobrazení výsledků a vytvoření JSON souboru ke stažení.

Backend běží na Node.js s Expressem.
"server.js" spouští server, servíruje statické soubory z frontendu a obsahuje endpoint "/search". Ten přijme dotaz od uživatele, zavolá funkci z "googleService.js" a vrátí výsledky jako JSON.

"googleService.js" je oddělená služba pro komunikaci se SerpApi. Tam je samotná logika volání externího API a zpracování výsledků do jednodušší struktury, například title, link a snippet.

API klíč mám uložený přes ".env", aby nebyl přímo ve zdrojovém kódu. ".gitignore" ignoruje ".env" a "node_modules", aby se na GitHub neposílaly citlivé údaje ani stažené balíčky.

Testy jsem napsal v Jestu. V "googleService.test.js" mockuju odpověď z API a ověřuju, že moje funkce vrací správně naformátovaný výstup a že správně zpracuje i prázdné výsledky.
