<?php
require_once './includes/header.php';
require_once '../Includes/load.php';
?>



<main class="app-content">
    <div class="custom-menu">
        <nav class="custom-nav">
            <div class="menu-group">
                <ul class="custom-menu-list">
                    <!-- Carreras -->
                    <li class="custom-menu-item">
                        <a class="custom-menu-link" href="/instituto/Adman/carreras.php">Nuestras Carreras</a>

                    </li>
                </ul>
            </div>

            <div class="menu-group">
                <ul class="custom-menu-list">
                    <!-- Planes de Estudio -->
                    <li class="custom-menu-item">
                        <a class="custom-menu-link" href="/instituto/Adman/lista_planes.php">Planes de Estudio</a>
                       
                    </li>
                </ul>
            </div>

            <div class="menu-group">
                <ul class="custom-menu-list">
                    <!-- Materias -->
                    <li class="custom-menu-item">
                        <a class="custom-menu-link" href="/instituto/Adman/lista_materia.php">Materias</a>
                        
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <section id="carrers">
        <div class="container-carrera">
            <div class="row">
                <div class="col-md-6" id="columna1">
                    <a href="/instituto/Adman/plan_carrera_analista.php" class="card">
                        <img src="/instituto/Imagenes/analista.jpeg" alt="Analista de Sistemas" />
                        <div class="centrado">
                            <h3>Analista de Sistemas</h3> <!-- Título centrado -->
                            <span class="button button__secundary">Ver más</span>
                        </div>
                    </a>
                </div>
                <div class="col-md-6" id="columna2">
                    <a href="/instituto/Imagenes/redes.jpeg" class="card" target="_blank">
                        <img src="/instituto/Imagenes/redes.jpeg" alt="Redes Informáticas" />
                        <div class="centrado">
                            <h3>Redes Informáticas</h3> <!-- Título centrado -->
                            <span class="button button__secundary">Ver más</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
require_once 'includes/footer.php';
?>