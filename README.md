# Hypermedia Applications project 2021/2022

The assignment consisted in implementing, using NuxtJS, a website for a town that is a tourist destination. 
The application specification for the website can be found in [Project.pdf](https://github.com/amangabba/HYPE-GabbaPanseriNumeroliSanti/blob/main/Project.pdf)

## Presentation and Contribution
Members of the team:
- Aman Gabba - Computer Science and Engineering
- Leonardo Panseri - Computer Science and Engineering
- Rita Numeroli - Mathematical Engineering
- Matteo Santi - Computer Science and Engineering

The work has been divided equally: each member had to implement an introductory page, a multiple topic page and a single topic page.

## Documentation

### Components
Each part of a page that could be reused has been abstracted into a component.

| Component            | Purpose                                                                                                                 |
|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| BootstrapBreadcrumbs | Dynamic breadcrumbs, styled with Bootstrap                                                                              |
| BootstrapCard        | Horizontal or vertical card, styled with Bootstrap, with thumbnail, title, subtitle, slot for content and button        |
| BootstrapCarousel    | Carousel of images with an optional title and link, styled with Bootstrap                                               |
| BootstrapGridCardPOI | Grid, styled with Bootstrap, to show multiple elements on a page                                                        |
| BootstrapIcon        | Icon from the BootstrapIcons webfont                                                                                    |
| OSMMap               | Interactive map from the Open Street Map API, centered on a given coordinate and with an optional marker                |
| PageTitle            | Row spanning the entire viewport with a background color or image, a title and, optionally, an icon and a subtitle      |
| SectionTitle         | Row spanning a column with a background color and a title for a section of the page                                     |
| TheFooter            | Footer for all pages of the website, containing links to miscellaneous pages                                            |
| TheHeader            | Header for all pages of the website, containing the website title and navigation links to all main pages of the website |

### Layouts
All layouts are children of `default` to prevent code duplication. Pages share data like the title, subtitle and icon through the store (see section below).

| Layout         | Purpose                                                                     |
|----------------|-----------------------------------------------------------------------------|
| default        | Base layout for all pages: header, content and footer                       |
| introductory   | Layout for introductory pages: title, and list of topics shown with cards   |
| multiple-topic | Layout for multiple topic pages: title, breadcrumbs and content of the page |
| single-topic   | Layout for single topic pages: title and content of the page                |

### Routes

| Route                |   Page Type    | Purpose                                                                                         |
|----------------------|:--------------:|-------------------------------------------------------------------------------------------------|
| /                    |       -        | Homepage of the website                                                                         |
| /the-town            |  Single Topic  | General description of the town                                                                 |
| /travel-info         |  Single Topic  | Information on how to reach the town, how to move around the town and where to deposit luggage  |
| /itineraries         |  Introductory  | Full list of itineraries                                                                        |
| /itineraries/\<id>   | Multiple Topic | Details about an itinerary                                                                      |
| /pois                |  Introductory  | Full list of points of interest                                                                 |
| /pois/\<id>          | Multiple Topic | Details about a point of interest                                                               |
| /service-types       |  Introductory  | Full list of service types                                                                      |
| /service-types/\<id> | Multiple Topic | List of services of that type                                                                   |
| /events              |  Introductory  | Full list of events                                                                             |
| /events/\<id>        | Multiple Topic | Details about an event                                                                          |
| /privacy             |  Single Topic  | Information about user data usage on the site                                                   |
| /contacts            |  Single Topic  | How to contact us                                                                               |
| /about-us            |  Single Topic  | Information about the team                                                                      |
| /coronavirus-update  |  Single Topic  | Updates about regulations regarding Covid-19                                                    |

### Store
The store is used only to share data between pages and layouts.

| Field                    | Purpose                                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------------------|
| pageTitle                | Title of the current page                                                                                        |
| pageSubtitle             | Subtitle of the current page, can be undefined                                                                   |
| pageImageUrl             | Image URL that will be used as background of the title row or as icon, depending on the layout, can be undefined |
| pageBreadcrumbs          | List of breadcrumbs, each breadcrumb should be an object with attributes: title and link                         |
| introductoryPageElements | List of objects that represent multiple topic instances to show in introductory pages                            |

## Description of Framework's best practices
The components have been structured to be reusable and a layout has been created for each type of page.  
This has prevented code duplication in our application and has made the development flow easier and more resistant
to bugs.
