import reflex as rx
from .proyectos import proyectos  # Importamos la nueva página de proyectos
from .footer import *

class State(rx.State):
    proyectoslink = rx.link("Proyectos", href="/proyectos")
    pass

def navigatetoproyectos():
    rx.link("proyectos")

def navbar():
    return rx.hstack(
        rx.text("Mi Portafolio", font_size="2xl", font_weight="bold"),
        rx.spacer(),
        rx.link("Sobre mí", href="#about"),
        rx.link("Proyectos", href="proyectos"),  # Cambiamos href para dirigir a la página
        rx.link("Contacto", href="#contact"),
        padding="1rem",
        border_bottom="1px solid #ccc",
        width="100vw",  # Asegura que use todo el ancho de la pantalla
        
    )
    

def home():
    return rx.vstack(
        rx.heading("¡Hola! Soy [Tu Nombre]"),
        rx.text("Desarrollador apasionado por la tecnología y la IA."),
        rx.button(
            "Proyectos!",
            border_radius="1em",
            box_shadow="rgba(151, 65, 252, 0.8) 0 15px 30px -10px",
            background_image="linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)",
            box_sizing="border-box",
            color="white",
            opacity=1, 
            href="/proyectos"),  # Cambiamos a la nueva ruta
        align="center", padding="4rem",
        width="100vw",  # Asegura que use todo el ancho de la pantalla
        
    )

def about():
    return rx.box(
        rx.heading("Sobre mí", id="about"),
        rx.text("Aquí puedes escribir sobre tu experiencia y habilidades."),
        padding="4rem",
        width="100%",  # Asegura que use todo el ancho de la pantalla
        
    )

def contact():
    return rx.box(
        rx.heading("Contacto", id="contact"),
        rx.text("Puedes contactarme a través de LinkedIn o email."),
        padding="4rem",
        width="100%",  # Asegura que use todo el ancho de la pantalla
        
        
    )


def index():
    return rx.center(rx.vstack(
        navbar(),
        home(),
        about(),
        contact(),
        footer_three_columns(), # Asegura que use todo el ancho de la pantalla
        height="100vh",
        

    ))

app = rx.App()
app.add_page(index, route="/")  # Página principal
app.add_page(proyectos, route="proyectos")  # Nueva página de proyectos
