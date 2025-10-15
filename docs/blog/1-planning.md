# 1 - Planning

Title: Blog
Date: 2025-10-15
Owner: Martinô Huỳnh Thanh Phương Võ

## Goal

What problem are we solving? Short, measurable acceptance criteria.

A blog that users can:

- Log in
- Log out
- Register
- Create post with title, author name (auto add), date created (auto add) and content using Markdown, content can have images or embedded images and the post can embed YouTube videos or Facebook, Instagram posts
- Tag a post using hashtags (like this: #tag/something)
- See a post
- Share a post on multimedia like Facebook, Instagram, Zalo diary, X,...
- Like a post
- Dislike a post
- Comment on a post
- Like a comment
- Dislike a comment
- See a author's basic information and his/her introduction
- Search for posts using title, tag, or content of the post

## Scope

What is in-scope and out-of-scope for this change or feature.

In-scope

- User authentication: register, login, logout, session management.
- Post creation and management: create, edit, delete posts written in Markdown; posts include title, author (auto), date (auto), and body that can contain images and embedded media (YouTube, Facebook, Instagram embeds).
- Media handling: ability to upload and embed images (inline or attached) with file-size limits and image thumbnailing where applicable.
- Tagging: add hashtags to posts and filter/search by tags.
- Interactions: like/dislike posts and comments, add/delete comments, and like/dislike comments.
- Author profile: show basic author information and introduction on author pages.
- Search: basic search by title, tag, and content (DB-backed searches); pagination for results.
- Social sharing buttons for common platforms (share link generation).
- Basic responsive UI (templates) and accessibility-friendly markup.

Out-of-scope (initial release)

- Advanced moderation workflows (automated moderation, content queues).
- Scheduled publishing, multi-language/localization, or email notification systems.
- Full-text search with external index (e.g., Elasticsearch) — initial search will use DB queries and simple text matching.
- Large-file hosting (use external storage / CDN or Git LFS for diagrams); heavy media streaming.
- Advanced analytics and A/B testing.

## Stakeholders

List owners, reviewers, and stakeholders.

- Owner: Martinô Huỳnh Thanh Phương Võ (product owner, final approver)
- Contributors / Developers: project contributors who will implement features and reviews
- Reviewers: designated code reviewers on GitHub (maintainers)
- Users: site visitors and registered users (provide feedback / acceptance testing)
- Ops/Hosting: person(s) responsible for deployment and storage configuration
- Designer (optional): responsible for wireframes and UI/UX review

## Deliverables

- Feature list / user stories
- Rough timeline
- Success criteria

- Feature list and user stories documented in `docs/blog/` and tracked as issues/tickets.
- Analysis document (`docs/blog/2-analysis.md`) with data model, edge cases, and acceptance criteria.
- Design artifacts: ER diagram (`website/static/docs/blog/er_diagram_v1.png`), UI wireframes, and API contract (endpoints + payloads).
- Implementation branch with completed features, unit and integration tests, and a pull request containing the PR checklist.
- Documentation updates: README, changelog entry, and in-repo docs for operations (uploads, backups, and media storage policy).
- Deployment plan and rollback instructions.

Acceptance criteria (minimum measurable)

- Users can register, log in, and log out successfully.
- Authenticated users can create posts with Markdown content and embedded images/videos; posts render correctly in the UI.
- Users can like/dislike posts and comments; the counts update correctly and are reflected in the UI without full page reloads.
- Comments can be added and deleted with authorization checks (only author or post owner can delete as appropriate).
- Search returns relevant results for title, tag, and content queries and supports pagination.
- Basic automated tests cover core flows (auth, create post, comment, like) and CI passes.

## Risks & Constraints

- Known dependencies
- Any regulatory, storage, or privacy constraints

- Dependencies:
  - Flask ecosystem: `Flask`, `Flask-Login`, `Flask-SQLAlchemy`.
  - Markdown rendering library (e.g., `markdown`, `Marko`, or `python-markdown2`) and an HTML sanitizer (e.g., `bleach`).
  - Image processing (Pillow) for thumbnails; optional external storage (S3) for scale.

- Security constraints:
  - Markdown content may include unsafe HTML; must sanitize to prevent XSS.
  - Protect endpoints with CSRF tokens and proper auth checks.

- Storage / performance constraints:
  - Limit upload size and store media efficiently; consider offloading to external storage for larger media.
  - DB searches on large text fields may be slow; consider pagination and later indexing.

- Privacy / legal:
  - User-generated content must respect privacy policies; consider takedown workflows.

- Operational risks:
  - Spam and abusive content — implement rate limits and simple anti-spam checks (honeypot/CAPTCHA if needed).
  - Migration complexity for future schema changes — design migrations with rollbacks.

## Next Steps / Actions

- [ ] Create Analysis doc
- [ ] Draft initial design (low-fi)

- [ ] Create `docs/blog/2-analysis.md` and populate data model, edge cases, and detailed acceptance tests.
- [ ] Produce ER diagram and add to `website/static/docs/` as `er_diagram_v1.png`.
- [ ] Choose Markdown renderer and sanitizer and document the chosen libraries and configuration.
- [ ] Decide on media storage strategy (local store with limits vs. external S3/Cloud storage) and implement uploader.
- [ ] Draft UI wireframes and component list; review with a designer (if available).
- [ ] Implement database models and create migration scripts; write unit tests for models.
- [ ] Implement core views/routes: create post, view post, comment, like/unlike; add tests and PRs.
- [ ] Update README and CHANGELOG, and prepare a release note for version bump when ready.
- [ ] Plan deployment and monitoring (metrics to watch for first 72 hours).
