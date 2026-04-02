---
title: "Grammatikapp - hobbyprojekt"
description: "En app för att träna svensk grammatik med fokus på ordföljd, numerus och tempus, byggd med .NET API och Blazor WebAssembly."
date: 2026-04-02
tags:
  [
    "dotnet",
    "aspnet-core",
    "ef-core",
    "clean-architecture",
    "cqrs",
    "mediatr",
    "xunit",
    "moq",
    "blazor",
  ]
github: "https://github.com/kristoffernowen/LanguageSkeleton"
---

## Overview

Appen utgår från erfarenhet av svenskundervisning och fokuserar på att visualisera mönster i svensk grammatik, särskilt ordföljd och tempus. Backend genererar meningar utifrån valda ord och instruktioner för numerus, bestämdhet, tempus och meningstyp.

Lösningen hanterar bland annat utmaningar kring hjälpverb i futurum och perfekt samt skillnader mellan påståenden och frågor, och presenteras i en Blazor-klient där användaren kan växla mellan olika grammatiska val.

## Features

- Generering av meningar utifrån grammatiska regler
- Stöd för singular/plural och bestämd/obestämd form
- Hantering av tempus inklusive hjälpverbslogik
- Växling mellan påstående och frågeform
- Blazor-klient för interaktiv träning och direkt resultat

## Tech Stack

- .NET 10 / ASP.NET Core Web API
- Entity Framework Core
- Clean Architecture
- CQRS med MediatR
- xUnit med Moq
- Blazor WebAssembly
