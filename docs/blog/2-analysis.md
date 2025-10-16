# 2 - Analysis

Title: Blog
Date: 2025-10-16
Owner: Martinô Huỳnh Thanh Phương Võ

## Requirements (functional & non-functional)

- Functional requirements (user stories)
- Performance / latency / storage expectations

At the moment, the project has these features (functional):

- User authentication: register, login, logout, session management.
- Post creation and management: create, edit, delete posts with text only; posts include author (auto), date (auto), and body that only contains text.
- Interactions: like/unlike posts and comments, add/delete comments.
- Author profile: show author's posts.
- Basic responsive UI (templates - right now I'm using Boootstrap for the UI) and accessibility-friendly markup.

The project have expectation that those features to become like these: 

- User authentication: register, login, logout, session management (Right now, this feature is good enough).
- Post creation and management: create, edit, delete posts written in Markdown; posts include title, author (auto), date (auto), and body that can contain images and embedded media (YouTube, Facebook, Instagram embeds).
- Media handling: ability to upload and embed images (inline or attached) with file-size limits and image thumbnailing where applicable.
- Tagging: add hashtags to posts and filter/search by tags.
- Interactions: like/dislike posts and comments, add/delete comments, and like/dislike comments.
- Author profile: show basic author information and introduction on author pages.
- Search: basic search by title, tag, and content (DB-backed searches); pagination for results.
- Social sharing buttons for common platforms (share link generation).
- Basic responsive UI (templates) and accessibility-friendly markup. (The project need local CSS - not Bootstrap)

## Data model

- Entities required
- Key attributes
- Candidate ER diagram: reference `website/static/docs/er_diagram_v1.png`

## Edge cases

- No-data scenarios
- Concurrent updates

## Acceptance criteria

- How will we know this analysis is complete?

## Notes

- Links to tickets, spreadsheets, and any research.
