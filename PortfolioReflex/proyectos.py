import reflex as rx

class ProyectosState(rx.State):
    pass


def navbar():
    return rx.hstack(
        rx.text("Mi Portafolio", font_size="2xl", font_weight="bold"),
        rx.spacer(),
        rx.link("Sobre mí", href="#about"),
        rx.link("Proyectos", href="/proyectos"),  # Cambiamos href para dirigir a la página
        rx.link("Contacto", href="#contact"),
        padding="1rem",
        border_bottom="1px solid #ccc"
    )

def proyectos():
    proyectos_data = [
        {
            "titulo": "Proyecto 1",
            "descripcion": "Descripción breve del proyecto.",
            "imagen": "/assets/grafica.webapp",
            "enlace": "https://github.com/tu_usuario/proyecto1"
        },
        {
            "titulo": "Proyecto 2",
            "descripcion": "Otra descripción breve.",
            "imagen": "/assets/skillset.png",
            "enlace": "https://github.com/tu_usuario/proyecto2"
        },
        # Agrega más proyectos aquí
    ]
    

    return rx.grid(
        *[
            rx.link(
                rx.box(
                    rx.image(src=p["imagen"], width="100%", height="auto"),
                    rx.box(
                        rx.text(p["titulo"], font_size="xl", font_weight="bold"),
                        rx.text(p["descripcion"]),
                        rx.button("Ver en GitHub", href=p["enlace"], target="_blank"),
                        padding="1rem",
                        background="rgba(0,0,0,0.8)",
                        color="white",
                        border_radius="lg",
                    ),
                    padding="1rem",
                ),
                href=p["enlace"],
                width="100%",
                _hover={"transform": "scale(1.05)", "transition": "0.3s"},
            )
            for p in proyectos_data
        ],
        columns=rx.breakpoints(sm="1", md="2", lg="3"), # Responsive: 1 columna en móvil, 2 en tablet, 3 en escritorio
        gap="1rem",
        padding="2rem"
    )
