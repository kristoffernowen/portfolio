---
title: "ContrlStatusChecker - uppdrag hos Contrl AB"
description: "Ett automatiserat övervakningssystem som kontrollerar driftsstatus hos finansiella tjänsteleverantörer och skickar e-postnotifieringar vid störningar."
summary: "Ett proof-of-concept för driftövervakning som samlar status från flera leverantörer och gör det enkelt att upptäcka samt kommunicera störningar snabbt."
date: 2026-04-02
tags:
  [
    "react",
    "typescript",
    "dotnet",
    "aspnet-core",
    "ef-core",
    "clean-architecture",
    "azure",
    "xunit",
    "webscraping",
    "ci-cd",
  ]
---

## Overview

Contrl ville ha en proof-of-concept som övervakar driftsstatus hos underleverantörers tjänster och presenterar läget i en vy, med möjlighet för användare att prenumerera på e-postnotifieringar vid störningar.

Lösningen byggdes som en tjänst som kombinerar web scraping och API-anrop mot flera leverantörer, körd som en background service med konfigurerbara intervall för kontinuerlig uppdatering.

## Features

- Kontinuerlig statusövervakning av flera externa leverantörer
- Kombinerad datainsamling via web scraping och API-anrop
- E-postprenumerationer och notifieringar vid driftstörningar
- Strategimönster där varje leverantör har egen scraping-strategi
- Testfokus kring leverantörsspecifik logik

## Tech Stack

- React
- TypeScript
- .NET 8 / ASP.NET Core Web API
- Entity Framework Core
- Clean Architecture
- HtmlAgilityPack
- Serilog
- xUnit
- Azure
- CI/CD via GitHub
