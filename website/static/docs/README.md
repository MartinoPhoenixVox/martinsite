# Public diagrams and docs (website/static/docs)

Place public images that will be embedded in site pages here.

Guidelines:
- Use clear filenames, e.g. `er_diagram_v1.png`, `class_uml_v2.svg`.
- Reference from templates with Jinja:
  `{{ url_for('static', filename='docs/er_diagram_v1.png') }}`
- Prefer SVG/PNG for diagrams. Avoid huge raster images; keep sizes reasonable (<2-5MB) or use external storage.
- If you add many large binaries, consider Git LFS.

