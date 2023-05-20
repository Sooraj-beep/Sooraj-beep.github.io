---
title: Vocabulary Explorer
summary: A website built to visually explore the cree language using interactive word graphs.
tags:
  - Data Visualization
date: '2023-01-16T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  focal_point: Smart

links:
  - icon: link
    icon_pack: fas
    name: Project Showcase
    url: https://cmput401.ca/projects/958b9d11-9e39-4ffa-be10-94cf273a45cc
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.

---

## Project overview

Vocabulary explorer was a capstone project I built alongside 5 other developers for [CMPUT 401](https://apps.ualberta.ca/catalogue/course/cmput/401) at the University of Alberta. Our clients were [ALTLab](https://altlab.ualberta.ca/); a linguistic research group based at the university. We were given access to the Cree words search api, definitions of words, and connections between words based on semantics. Our job was to build a interactive visual map of word domains based on user query over the span of four months.

## Demo
{{< youtube 0xyK7al-No4 >}}



## Utilized

![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | ![MUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white) | ![D3](https://img.shields.io/badge/d3-FFA500?style=for-the-badge&logo=d3&logoColor=white)
:-:|:-:|:-:|:-:|
![Cypress](https://img.shields.io/badge/Cypress-323330?style=for-the-badge&logo=Cypress&logoColor=white) |  ![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white) | ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) | ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Features

- Search the Cree database using both english or cree words as query.
- Hear how Cree words are pronounced.
- View an interactive map of domains that contain Cree words and [hypernym](https://dictionary.cambridge.org/dictionary/english/hypernym) and [hyponym](https://dictionary.cambridge.org/dictionary/english/hyponym) domains that connect to it.

## My Accomplishments

- Took  ownership of Project Requirements Document; Converted client requirements into atomized user stories and modified them based on clients changing needs.
- Spearheaded the interactive word map feature of the product; converting client data obtained from their API endpoints into graph built using D3.
- Acted as scrum-master throughout the whole project, ensuring agile prinicples were followed.
- Reduced graph load times from 10-15 seconds to almost instantaneous by using a design principle known as lazy loading.
