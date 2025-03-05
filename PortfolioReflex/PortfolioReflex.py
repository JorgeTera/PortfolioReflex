import reflex as rx

class State(rx.State):
    pass

def navbar():
    return rx.hstack(
        rx.text("Mi Portafolio", font_size="2xl", font_weight="bold"),
        rx.spacer(),
        rx.link("Sobre mí", href="#about"),
        rx.link("Proyectos", href="#proyectos"),  # Cambiado para que todo esté en una sola página
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
            href="#proyectos"),  # Ahora redirige a la sección en la misma página
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

def proyectos():
    proyectos_data = [
        {
            "titulo": "Proyecto 1",
            "descripcion": "Descripción breve del proyecto.",
            "imagen": "/grafica.png",
            "enlace": "https://github.com/tu_usuario/proyecto1"
        },
        {
            "titulo": "Proyecto 2",
            "descripcion": "Otra descripción breve.",
            "imagen": "/skillset.png",
            "enlace": "https://github.com/tu_usuario/proyecto2"
        },
        {
            "titulo": "Proyecto 3",
            "descripcion": "Otra descripción breve.",
            "imagen": "/skillset.png",
            "enlace": "https://github.com/tu_usuario/proyecto2"
        },
        # Agrega más proyectos aquí
    ]
    
    return rx.box(
        rx.heading("Proyectos", id="proyectos"),
        rx.grid(
            *[
                rx.link(
                    rx.box(
                        rx.box(
                            rx.image(
                                src=p["imagen"],
                                width="100%",
                                height="200px",
                                object_fit="cover",
                                border_radius="md",
                            ),
                            width="100%",
                            height="200px",
                            overflow="hidden",
                        ),
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
            columns=rx.breakpoints(sm="1", md="2", lg="3"), # Responsive
            gap="1rem",
            padding="2rem"
        ),
    )

def contact():
    return rx.box(
        rx.heading("Contacto", id="contact"),
        rx.text("Puedes contactarme a través de LinkedIn o email."),
        padding="4rem",
        width="100%",  # Asegura que use todo el ancho de la pantalla
    )

def footer_item(text: str, href: str) -> rx.Component:
    return rx.link(rx.text(text, size="3"), href=href)

def footer_items_1() -> rx.Component:
    return rx.flex(
        rx.heading("PRODUCTS", size="4", weight="bold", as_="h3"),
        footer_item("Web Design", "/#"),
        footer_item("Web Development", "/#"),
        footer_item("E-commerce", "/#"),
        footer_item("Content Management", "/#"),
        footer_item("Mobile Apps", "/#"),
        spacing="4",
        text_align=["center", "center", "start"],
        flex_direction="column",
    )

def footer_items_2() -> rx.Component:
    return rx.flex(
        rx.heading("RESOURCES", size="4", weight="bold", as_="h3"),
        footer_item("Blog", "/#"),
        footer_item("Case Studies", "/#"),
        footer_item("Whitepapers", "/#"),
        footer_item("Webinars", "/#"),
        footer_item("E-books", "/#"),
        spacing="4",
        text_align=["center", "center", "start"],
        flex_direction="column",
    )

def footer_items_3() -> rx.Component:
    return rx.flex(
        rx.heading("ABOUT US", size="4", weight="bold", as_="h3"),
        footer_item("Our Team", "/#"),
        footer_item("Careers", "/#"),
        footer_item("Contact Us", "/#"),
        footer_item("Privacy Policy", "/#"),
        footer_item("Terms of Service", "/#"),
        spacing="4",
        text_align=["center", "center", "start"],
        flex_direction="column",
    )

def social_link(icon: str, href: str) -> rx.Component:
    return rx.link(rx.icon(icon), href=href)

def socials() -> rx.Component:
    return rx.flex(
        social_link("instagram", "/#"),
        social_link("twitter", "/#"),
        social_link("facebook", "/#"),
        social_link("linkedin", "/#"),
        spacing="3",
        justify_content=["center", "center", "end"],
        width="100%",
    )

def footer_three_columns() -> rx.Component:
    return rx.el.footer(
        rx.vstack(
            rx.flex(
                footer_items_1(),
                footer_items_2(),
                footer_items_3(),
                justify="between",
                spacing="6",
                flex_direction=["column", "column", "row"],
                width="100%",
            ),
            rx.divider(),
            rx.flex(
                rx.hstack(
                    rx.image(src="/logo.jpg", width="2em", height="auto", border_radius="25%"),
                    rx.text("© 2024 Reflex, Inc", size="3", white_space="nowrap", weight="medium"),
                    spacing="2",
                    align="center",
                    justify_content=["center", "center", "start"],
                    width="100%",
                ),
                socials(),
                spacing="4",
                flex_direction=["column", "column", "row"],
                width="100%",
            ),
            spacing="5",
            width="100%",
        ),
        width="100%",
    )

def index():
    return rx.center(
        rx.vstack(
            navbar(),
            home(),
            about(),
            proyectos(),
            contact(),
            footer_three_columns(),
            height="100vh",
        )
    )

app = rx.App()
app.add_page(index, route="/")  # Página principal, sin rutas adicionales necesarias

