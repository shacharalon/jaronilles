# Angular + Firebase – Getting Started

Repository:  
https://github.com/shacharalon/jaronilles.git

---

## 1. Projekt holen

```bash
git clone https://github.com/shacharalon/jaronilles.git
cd jaronilles
```

---

## 2. Dependencies installieren

Einfach ausführen:

```bash
npm install
```

Fertig ✔️

---

## 3. Projekt lokal starten

```bash
npm start
```

oder

```bash
ng serve
```

App läuft dann unter:

http://localhost:4200

---

## 4. Änderungen machen

Code anpassen → speichern → Browser updated automatisch.

Angular Doku:  
https://angular.io/docs

Wichtige Ordner:

| Ordner | Bedeutung |
|--------|----------|
| src/app | Komponenten |
| src/environments | Firebase Config (dont touch!) |
| angular.json | Build Settings (dont touch) |

---

## 5. Deploy auf Firebase

Firebase ist bereits verbunden.

Einfach:

Login (nur einmal nötig mit deinem Konto):

```bash
firebase login
```

Build erstellen:
"Dist" Orderner falls vorhanden löschen.

```bash
ng build
```

Deploy:

```bash
firebase deploy
```

---

## Quick Start

```bash
git clone https://github.com/shacharalon/jaronilles.git
cd jaronilles
npm install
npm start
ng build
firebase login
firebase deploy
```
