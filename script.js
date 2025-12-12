<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Nani — Student Portfolio</title>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">


    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">


    <link href="style.css" rel="stylesheet">
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div class="container">
            <a class="navbar-brand" href="#home">Nani</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navmenu" class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
                    <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>


                    <li class="nav-item ms-3">
                        <button id="themeBtn" class="btn btn-sm btn-outline-dark">
                            <i class="fa-solid fa-moon"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <section id="home" class="container py-5 reveal">
        <div class="row align-items-center">
            <div class="col-md-7">
                <h1>Hey — I'm Nani.</h1>
                <p>I am a student learning web development and building small projects to practice.</p>
                <a href="#projects" class="btn btn-primary btn-sm">My Projects</a>
                <a href="#contact" class="btn btn-outline-secondary btn-sm">Say Hi</a>
            </div>

            <div class="col-md-5 text-center">
                <img src="Chocolate.png" width="300px" class="rounded-circle mb-2" alt="profile">
                <p><strong>Course:</strong> Computer Science</p>
                <p>Learning: HTML, CSS, JS, Git,</p>
            </div>
        </div>
    </section>


    <section id="about" class="container py-4 reveal">
        <h2>About Me</h2>
        <p>I enjoy building small websites and simple interactive pages. I am still learning and improving every day.
        </p>
    </section>


    <section id="skills" class="container py-4 reveal">
        <h2>Skills (Beginner Level)</h2>
        <ul>
            <li class="S1">HTML - Basic</li>
            <li class="S1">CSS - Basic</li>
            <li class="S1">JavaScript - Basic</li>
            <li class="S1">Git - Basic</li>
            <li class="S1">C - Intermediate</li>
            <li class="S1">Python - Intermediate</li>
            <li class="S1">Java - Basic</li>
            <li class="S1">DataStructure - Basic</li>
            <li class="S1">OperatingSystem - Basic</li>
        </ul>
    </section>


    <section id="projects" class="container py-4 reveal">
        <h2>Projects</h2>

        <div class="row g-3">

            <div class="col-md-4">
                <div class="card p-3">
                    <h5>Student Details</h5>
                    <p>A simple list to add and remove StudentNames.</p>
                    <a href="https://jishnucv2409.github.io/StudentDetails1/"
                        class="btn btn-outline-primary btn-sm">View</a>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card p-3">
                    <h5>SmartWaterTracker</h5>
                    <p>This portfolio page created while learning Bootstrap.</p>
                    <a href="https://jishnucv2409.github.io/WaterConsumptionTracker/"
                        class="btn btn-outline-primary btn-sm">Code</a>
                </div>
            </div>

        </div>
    </section>


    <section id="contact" class="container py-4 reveal">
        <h2>Contact</h2>

        <form id="contactForm" class="row g-3">

            <div class="col-md-6">
                <label class="form-label">Name</label>
                <input id="name" type="text" class="form-control">
            </div>

            <div class="col-md-6">
                <label class="form-label">Email</label>
                <input id="email" type="email" class="form-control">
            </div>

            <div class="col-12">
                <label class="form-label">Message</label>
                <textarea id="message" class="form-control" rows="4"></textarea>
            </div>

            <div class="col-12">
                <button class="btn btn-primary btn-sm">Send</button>
            </div>

        </form>
    </section>


    <footer class="container text-center py-4 reveal">
        <p>Made by a learning student — thanks for visiting.</p>
    </footer>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <script src="script.js"></script>

</body>

</html>
