![Alt text](https://github.com/pipovec/Provinces/blob/master/Screenshot-2017-10-10%20Grafy.png)
 

# Provinces

ReactJS miniapp World of tanks
Mini aplikácia, ktorá zobrazuje aktuálne územia klanu, názov mapy, dĺžku držania územia a denný zisk z územia. Ide jednoducho vložiť do stránky iba pomocov HTML tagov. Aby zobrazovala údaje pre Váš klan, treba si na stránke [Cz/Sk klany](https://fpcstat.cz/cz-sk-klany/) nájsť ID klanu a vložiť ho do javascriptu:

```
  ReactDOM.render(<Provinces clan_id = {500005844}/>,
  document.getElementById('clanProvince'));
  
```
Miniaplikácia sťahuje údaje priamo zo servera Wargamingu cez [API](https://developers.wargaming.net/reference/all/wot/globalmap/clanprovinces/?application_id=883ff6ceefb13177357ffea34d6fb06f&r_realm=eu). 

Príklad ako môže vyzerať miniaplikácia v praxi môžete nájsť [tu.](https://fpcstat.cz/rebricek-klany/history) Kedže sa zatiaľ len učím [React](https://reactjs.org/), rád urobím podobnú miniaplikaciu na stránku Vášmu klanu zadarmo. Stačí si len vybrať z [API Wargamingu](https://developers.wargaming.net/reference/all/wot/account/list/?application_id=883ff6ceefb13177357ffea34d6fb06f&r_realm=eu) aké informácie by ste chceli na Vašom webe zviditeľniť a napísať mi buď v hre alebo na info@fpcstat.cz. 
