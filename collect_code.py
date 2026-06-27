"""
collect_code.py
Run this from the root of your ToneCheck project:
    python collect_code.py
It writes all source code into  project_code.txt  in the same folder.
"""

import os

# ── Configuration ────────────────────────────────────────────────────────────

# Extensions to include
INCLUDE_EXTENSIONS = {
    ".js", ".jsx", ".ts", ".tsx",
    ".css", ".html",
    ".json", ".yaml", ".yml", ".env",
    ".md", ".txt",
    ".py",
}

# Files to always skip (by exact filename)
SKIP_FILES = {
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    ".env.local",
}

# Folders to skip entirely
SKIP_DIRS = {
    "node_modules",
    ".git",
    "dist",
    "build",
    ".next",
    "__pycache__",
    ".vite",
    "coverage",
}

OUTPUT_FILE = "project_code.txt"

# ── Helpers ───────────────────────────────────────────────────────────────────

def should_include(path: str) -> bool:
    filename = os.path.basename(path)
    if filename in SKIP_FILES:
        return False
    _, ext = os.path.splitext(filename)
    return ext.lower() in INCLUDE_EXTENSIONS


def collect(root: str) -> list[tuple[str, str]]:
    """Walk the project and return [(relative_path, content), ...]."""
    files = []
    for dirpath, dirnames, filenames in os.walk(root):
        # Prune skipped directories in-place so os.walk won't descend
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]

        for name in sorted(filenames):
            full_path = os.path.join(dirpath, name)
            rel_path  = os.path.relpath(full_path, root)

            if not should_include(full_path):
                continue

            try:
                with open(full_path, "r", encoding="utf-8", errors="replace") as f:
                    content = f.read()
                files.append((rel_path, content))
            except Exception as e:
                files.append((rel_path, f"[Could not read file: {e}]"))

    return files


def write_output(files: list[tuple[str, str]], output_path: str) -> None:
    separator = "=" * 70

    with open(output_path, "w", encoding="utf-8") as out:
        out.write("PROJECT CODE SNAPSHOT\n")
        out.write(f"Total files: {len(files)}\n")
        out.write(separator + "\n\n")

        for rel_path, content in files:
            out.write(f"FILE: {rel_path}\n")
            out.write(separator + "\n")
            out.write(content)
            if not content.endswith("\n"):
                out.write("\n")
            out.write("\n\n")

    print(f"✅  Wrote {len(files)} files → {output_path}")


# ── Entry point ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    project_root = os.path.dirname(os.path.abspath(__file__))
    print(f"📁  Scanning: {project_root}")

    files = collect(project_root)
    write_output(files, os.path.join(project_root, OUTPUT_FILE))