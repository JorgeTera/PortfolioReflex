import reflex as rx
from rxconfig import config
from .proyectos import proyectos  # Importamos la nueva página de proyectos

class State(rx.State):
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

def home():
    return rx.vstack(
        rx.heading("¡Hola! Soy [Tu Nombre]"),
        rx.text("Desarrollador apasionado por la tecnología y la IA."),
        rx.button("Ver mis proyectos", href="/proyectos"),  # Cambiamos a la nueva ruta
        align="center", padding="4rem"
    )

def about():
    return rx.box(
        rx.heading("Sobre mí", id="about"),
        rx.text("Aquí puedes escribir sobre tu experiencia y habilidades."),
        padding="4rem"
    )

def contact():
    return rx.box(
        rx.heading("Contacto", id="contact"),
        rx.text("Puedes contactarme a través de LinkedIn o email."),
        padding="4rem"
    )


def index():
    return rx.vstack(
        navbar(),
        home(),
        about(),
        contact()
    )

app = rx.App()
app.add_page(index, route="/")  # Página principal
app.add_page(proyectos, route="/proyectos")  # Nueva página de proyectos
