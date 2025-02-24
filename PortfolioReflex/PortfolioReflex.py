"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config


class State(rx.State):
    pass

def navbar():
    return rx.hstack(
        rx.text("Mi Portafolio", font_size="2xl", font_weight="bold"),
        rx.spacer(),
        rx.link("Sobre mí", href="#about"),
        rx.link("Proyectos", href="#projects"),
        rx.link("Contacto", href="#contact"),
        padding="1rem",
        border_bottom="1px solid #ccc"
    )

def home():
    return rx.vstack(
        rx.heading("¡Hola! Soy [Tu Nombre]"),
        rx.text("Desarrollador apasionado por la tecnología y la IA."),
        rx.button("Ver mis proyectos", href="#projects"),
        align="center", padding="4rem"
    )

def about():
    return rx.box(
        rx.heading("Sobre mí", id="about"),
        rx.text("Aquí puedes escribir sobre tu experiencia y habilidades."),
        padding="4rem"
    )

def projects():
    return rx.box(
        rx.heading("Proyectos", id="projects"),
        rx.text("Lista de proyectos con capturas y enlaces."),
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
        projects(),
        contact()
    )


app = rx.App()
app.add_page(index)
