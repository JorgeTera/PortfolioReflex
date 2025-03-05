import reflex as rx
from .proyectos import proyectos  # Importamos la nueva página de proyectos
from .footer import *

class State(rx.State):
    pass


def navbar():
    return rx.hstack(
        rx.text("Portafolio", font_size="2xl", font_weight="bold"),
        rx.spacer(),
        rx.link("Sobre mí", href="#about"),
        rx.link("Proyectos", href="#proyectos"),
        rx.link("Contacto", href="#footer"),
        padding="1rem",
        border_bottom="1px solid #ccc",
        width="100%",  # Usamos 100% para que respete el contenedor
    )

def home():
    return rx.vstack(
        rx.heading("¡Hola! Soy Jorge"),
        rx.text("Desarrollador apasionado por la tecnología y la IA que se hace una pregunta..."),
        background_image="linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)",
        align="center",
        padding="4rem",
        width="100%",  # Usamos 100%
    )

def about():
    return rx.box(
        rx.heading("... ¿Por qué?", id="about"),
        rx.text("Es la mejor forma de demostrar mis capacidades y la posibilidad de mezclar mis 2 pasiones, las webs y los datos!"),
        padding="4rem",
        width="100%",
    )

def index():
    return rx.center(
        rx.box(
            rx.vstack(
                navbar(),
                home(),
                about(),
                # Envolvemos los proyectos para forzar que ocupen todo el ancho
                rx.box(
                    proyectos(),
                    background_image="linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)",
                    width="100%",  # Proyectos ocupa todo el espacio horizontal
                ),
                footer_three_columns(),
            ),
            # Agregamos márgenes horizontales para que los elementos no toquen la "pared"
            padding="0 1rem",
            margin_bottom="1rem",  
            width="100%",
            max_width="1000000px",
            max_heigth="1000px"  # Opcional: limitar el ancho máximo para centrar el contenido en pantallas grandes
        )
    )

app = rx.App()
app.add_page(index, route="/")  # Página principal
