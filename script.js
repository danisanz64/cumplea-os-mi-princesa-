document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MÚSICA AMBIENTE
    ========================================= */

    const musica = document.getElementById("musica");

    if (musica) {

        /* Volumen de la música */
        musica.volume = 0.35;

    }


    /* =========================================
       BOTÓN DE INICIO
    ========================================= */

    const comenzar =
        document.getElementById("comenzar");

    if (comenzar) {

        comenzar.addEventListener("click", () => {

            /* =================================
               INICIAR MÚSICA
            ================================= */

            if (musica) {

                musica.play()
                    .then(() => {

                        console.log(
                            "La música comenzó correctamente."
                        );

                    })
                    .catch((error) => {

                        console.log(
                            "No se pudo reproducir la música:",
                            error
                        );

                    });

            }


            /* =================================
               IR A LA PRIMERA CARTA
            ================================= */

            const siguiente =
                document.querySelector(".carta");

            if (siguiente) {

                siguiente.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =========================================
       APARICIÓN DE LOS TEXTOS
    ========================================= */

    const contenidos =
        document.querySelectorAll(".contenido");


    const observador =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add(
                            "visible"
                        );

                    }

                });

            },

            {
                threshold: 0.18
            }

        );


    contenidos.forEach((contenido) => {

        /*
         * La portada ya está visible desde el principio.
         * Los demás contenidos aparecen al entrar
         * en pantalla.
         */

        if (!contenido.closest(".intro")) {

            observador.observe(contenido);

        }

    });


    /* =========================================
       PÉTALOS
    ========================================= */

    function crearPetalo() {

        const petalo =
            document.createElement("div");

        petalo.classList.add("petalo");

        petalo.textContent = "🌸";


        /* Posición horizontal aleatoria */

        petalo.style.left =
            Math.random() * 100 + "vw";


        /* Tamaño aleatorio */

        petalo.style.fontSize =
            (Math.random() * 10 + 12) + "px";


        /* Velocidad aleatoria */

        petalo.style.animationDuration =
            (Math.random() * 5 + 6) + "s";


        document.body.appendChild(petalo);


        /* Eliminar después de la animación */

        setTimeout(() => {

            petalo.remove();

        }, 12000);

    }


    /* =========================================
       CREAR PÉTALOS
    ========================================= */

    setInterval(
        crearPetalo,
        1800
    );

});