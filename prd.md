# Product Requirements Documentation

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | Bookmark'd |
| Description | User can add, edit, and delete personal bookmarks all on a single page |
| Developers | {Calvin Harris: Testing, Documentation}, {Rich Clarke: Flowchart, App.jsx},{ Wendy Ochoa: Item.jsx}, {Javier Delgado: Form.jsx} |
| Live Website | [Netlify](https://629be03c7ea5354f2169c5cb--fascinating-zuccutto-f14945.netlify.app/)|
| Repo | https://github.com/richclarke0/bookmark--frontend |
| Backend Deployment | [Heroku](https://bookmark--backend.herokuapp.com/bookmarks)
| Backend Repo  |[Github](https://github.com/Vanillajaviscript/bookmark--backend)|

## Problem Being Solved and Target Market

The app facilitates organization of personal bookmarks for ease of access.

## User Stories

List of stories users should experience when using your application.

- Users should be able to access, edit, and delete all bookmarks on a single page
- Users can create a new item
- Users can see all their items on the dashboard
- Users can update items
- User can delete items

## Route Tables

For backend Applications you'll want to detail the different routes and types of your request your server can receive. There are three main things to define.

- The endpoint: https://www.omdbapi.com/?apikey=ad043b17&t=
- The method: GET using $.ajax()
- The response: json data

You should also include any additional notes on any special headers that may be used and so forth.

| Endpoint | Method | Response | Other |
| -------- | ------ | -------- | ----- |
| /bookmarks | GET | JSON of all items | |
| /bookmarks/:id | POST | Create new item in MongoDB and render on page
| /bookmarks/:id | PUT |Edit existing item and render on page (updates MongoDB)
| /bookmars/:id | DELETE | Item is no longer rendered or accessible in MongoDB

[
  {
    "_id": "629b9c45aaf4fefe41ad8adb",
    "title": "test 2",
    "url": "https://www.google.com",
    "createdAt": "2022-06-04T17:54:13.650Z",
    "updatedAt": "2022-06-04T19:14:24.432Z",
    "__v": 0
  },
  {
    "_id": "629b9b96aaf4fefe41ad8ad3",
    "title": "Google",
    "url": "https://www.google.com",
    "createdAt": "2022-06-04T17:51:18.753Z",
    "updatedAt": "2022-06-04T19:15:35.978Z",
    "__v": 0
  },
  {
    "_id": "629b9b67aaf4fefe41ad8ad0",
    "title": "Test",
    "url": "https://www.google.com",
    "createdAt": "2022-06-04T17:50:31.698Z",
    "updatedAt": "2022-06-04T17:50:31.698Z",
    "__v": 0
  },
  {
    "_id": "62981f76c4ca65625ad91404",
    "title": "MongoDB",
    "url": "https://www.mongodb.com/",
    "createdAt": "2022-06-02T02:24:54.971Z",
    "updatedAt": "2022-06-02T02:24:54.971Z",
    "__v": 0
  },
  {
    "_id": "62981f54c4ca65625ad91402",
    "title": "Imgur",
    "url": "https://imgur.com/",
    "createdAt": "2022-06-02T02:24:20.074Z",
    "updatedAt": "2022-06-02T02:24:20.074Z",
    "__v": 0
  },
  {
    "_id": "629804e00c0d2714563c224b",
    "title": "google",
    "url": "www.google.com",
    "createdAt": "2022-06-02T00:31:28.288Z",
    "updatedAt": "2022-06-02T00:31:28.288Z",
    "__v": 0
  }
]

## Component Architecture

![Component Architecture](https://docs.google.com/drawings/d/1gwjxKWcQtQr5W70Zx4YCaRANZ9-MVS0x_8EGTGQf6lU/edit?usp=sharing)

## User Interface Mockups

![User Interface](https://i.imgur.com/wCJovTV.png)