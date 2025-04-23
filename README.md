# bunJs

# 🚀 Bun Project Setup

This project uses [Bun](https://bun.sh), an ultra-fast JavaScript runtime, bundler, transpiler, and package manager all in one.

---

## 📦 Prerequisites

Make sure your system has:

- Ubuntu (or similar Linux distro)
- `curl` installed

---

## 🔧 Installing Bun

Run the following command to install Bun:

```bash
curl -fsSL https://bun.sh/install | bash


# ⚡ Bun Server with Routing & ASCII Art

A simple web server built using [Bun](https://bun.sh), featuring:
- Route handling (`/`, `/about`, `/contact`, `/greet`)
- ASCII art with `figlet`
- Basic file and HTML serving
- (Optional) PostgreSQL database setup (commented)

---

## 🚀 Getting Started

### 📦 Prerequisites

- [Bun installed](https://bun.sh/docs/installation)
- (Optional) PostgreSQL if you want to use the database part


## 📄 How It Works

### Main Routes

| Route        | Method | Description                                |
|--------------|--------|--------------------------------------------|
| `/`          | GET    | Returns "Hello guys" in ASCII using figlet |
| `/about`     | GET    | Returns plain text "About Me"              |
| `/contact`   | POST   | Returns plain text "Contact Us"            |
| `/greet`     | GET    | Serves `greet.txt` from file system        |
| `/error`     | Any    | Throws and displays an error with stack    |
| Any other    | Any    | Returns 404 response                       |

### Error Handling

Custom error handler that returns an HTML `<pre>` with the error and stack trace.

---

## 🛠 Install Dependencies

```bash
bun install

