window.i18n_es = {
    "head": {
        "title": "Documentación BotPromo \u2014 IUT Bayonne",
        "description": "Guía de instalación y uso para el Bot de Discord del IUT de Bayonne."
    },
    "ui": {
        "themeToggleTitle": "Cambiar Tema",
        "copy": "Copiar",
        "copied": "¡Copiado!"
    },
    "sidebar": {
        "doc": "Documentación",
        "campus": "IUT Bayonne - Anglet"
    },
    "hero": {
        "start": "Empezar la lectura",
        "tech": "Documentación Técnica"
    },
    "nav": {
        "intro": "Introducción",
        "prerequis": "Requisitos",
        "config": "Configuración",
        "installation": "Instalación",
        "commandes": "Comandos",
        "autresCommandes": "Otros Comandos",
        "troubleshoot": "Solución de Problemas"
    },
    "intro": {
        "titre": "Introducción",
        "p1": "Bienvenido a la documentación de <strong>BotPromo Jinx</strong>. Este bot de Discord es una herramienta desarrollada específicamente para facilitar la vida estudiantil en el IUT de Bayonne y del País Vasco.",
        "p2": "El proyecto es una mejora y la continuación de un proyecto similar desarrollado en años anteriores. Fue creado para facilitar el acceso a la información sobre los horarios y la disponibilidad de las salas, así como los horarios de los profesores.",
        "p3": "Centraliza información esencial en tiempo real: sincronización de horarios (vía archivos ICS), verificación de disponibilidad de salas de informática y de talleres, y consulta de horarios de profesores.",
        "alertIntelligent": "<strong>Inteligente:</strong> El bot gestiona automáticamente las semanas pares/impares y los grupos de TD/TP para mostrar la información pertinente."
    },
    "prerequis": {
        "titre": "Requisitos Técnicos",
        "p1": "Antes de comenzar la instalación, asegúrese de contar con los siguientes elementos:",
        "liToken": "<strong>Token de Discord:</strong> Debe haber creado una aplicación y un bot en el <a href=\"https://discord.com/developers/applications\" target=\"_blank\">Discord Developer Portal</a> para obtener este token.",
        "liSources": "<strong>Archivos fuente:</strong> Toda la carpeta del proyecto (incluyendo las carpetas <code>Cogs</code>, <code>EDT</code>, etc.).",
        "liEnvStrong": "Entorno de Ejecución:",
        "liDocker": "Recomendado: <strong>Docker</strong> y <strong>Docker Compose</strong>.",
        "liPython": "Alternativa: <strong>Python 3.9</strong> o superior y <strong>pip</strong>."
    },
    "config": {
        "titre": "Configuración Inicial (Obligatoria)",
        "p1": "Este paso es crucial para que el bot funcione correctamente, sin importar el método de instalación elegido.",
        "h3Secret": "1. Creación del archivo confidencial",
        "pSecret": "Por razones de seguridad, el token del bot nunca debe ser compartido. Cree un archivo llamado <code>confidentiel.py</code> en la raíz del proyecto.",
        "h3Semestre": "2. Configuración del Semestre",
        "pSemestre1": "El bot necesita conocer el semestre actual para cargar los horarios correctos (S1/S3 vs S2/S4).",
        "pSemestre2": "Debe definir una variable de entorno llamada <code>SEMESTER</code>:",
        "liSem1": "Valor <code>1</code>: Para un semestre impar (Otoño).",
        "liSem2": "Valor <code>2</code>: Para un semestre par (Primavera)."
    },
    "install": {
        "titre": "Instalación y Ejecución",
        "p1": "Elija uno de los dos métodos a continuación. El método Docker es altamente recomendado por su simplicidad y estabilidad.",
        "methodeA": "Método A: Vía Docker (Recomendado)",
        "pA1": "El archivo <code>docker-compose.yaml</code> ya está preparado. Simplemente configure las variables de entorno directamente en ese archivo o en un archivo <code>.env</code>.",
        "pA2": "<strong>1. Configuración en docker-compose.yaml:</strong>",
        "pA3": "<strong>2. Ejecución:</strong>",
        "pA4": "Abra un terminal en la carpeta del proyecto y ejecute:",
        "methodeB": "Método B: Instalación Manual (Python)",
        "liB1": "Instale las dependencias: <code>pip install -r requirements.txt</code>",
        "liB2": "Defina la variable de entorno <code>SEMESTER</code> en su sistema (ej: <code>export SEMESTER=1</code> en Linux).",
        "liB3": "Inicie el bot: <code>python main.py</code>"
    },
    "cmds": {
        "titre": "Comandos Disponibles",
        "p1": "El bot utiliza modernos \"Slash Commands\" de Discord. Escriba <code>/</code> en un canal autorizado para ver la lista.",
        "p2": "A continuación se muestra el detalle de uso y el resultado de cada comando.",
        "salles": {
            "p1": "Este comando analiza los horarios en tiempo real para encontrar aulas desocupadas.",
            "li1": "Muestra una lista de las salas actualmente libres.",
            "li2": "Ordena los resultados: las aulas libres por más tiempo aparecen primero.",
            "li3": "Indica la hora hasta la cual el aula permanecerá libre.",
            "caption": "Ejemplo: El comando muestra que el aula 124 está libre hasta las 15:30."
        },
        "infosalle": {
            "p1": "Obtenga el estado detallado de un aula específica. Debe proporcionar el número o nombre del aula como parámetro (ej: <code>124</code>, <code>15</code>, <code>Info 1</code>).",
            "li1": "Indica si el aula está actualmente ocupada o libre.",
            "li2": "Si está ocupada: especifica qué clase se imparte y hasta qué hora.",
            "li3": "Si está libre: especifica cuándo comienza la próxima clase.",
            "li4": "Muestra el horario de las próximas franjas horarias del día.",
            "caption": "Ejemplo: Solicitud de información sobre la sala \"Info 3\"."
        },
        "infoprof": {
            "p1": "Localice a un profesor en el IUT según su horario.",
            "li1": "Búsqueda parcial: escribir \"Dondi\" encontrará a \"M. Dondin\".",
            "li2": "Indica si el profesor está actualmente dando clase.",
            "li3": "Si es así, especifica la asignatura, el aula y la hora de finalización.",
            "li4": "Indica el aula y la hora de su próxima clase.",
            "caption": "Ejemplo: Comprobación del estado actual del Sr. Roose."
        },

        "autres": {
            "titre": "Otros / Utilidades",
            "p1": "También hay algunos comandos de utilidad disponibles:",
            "ping": "Comprueba si el bot está en línea y muestra su latencia en ms.",
            "ball": "Haga una pregunta, la bola mágica responderá.",
            "clear": "(Admin/Mod) Elimina el número especificado de mensajes."
        }
    },
    "faq": {
        "titre": "Solución de Problemas / FAQ",
        "note": "<strong>Nota importante:</strong> El bot está configurado para restingir ciertos comandos a canales de Discord específicos.",
        "msg1Titre": "Mensaje: \"Utilisez les bons salons j'ai dit\" (Use los canales adecuados)",
        "msg1Texte": "Si recibe esta respuesta, significa que está intentando utilizar un comando en un canal no autorizado por la configuración del bot. Inténtelo de nuevo en el canal dedicado a comandos de bot.",
        "msg2Titre": "El bot se inicia y se detiene inmediatamente",
        "msg2Texte": "El error más frecuente es la ausencia de la variable de entorno <code>SEMESTER</code>. El bot no puede funcionar sin saber si debe cargar los horarios pares o impares. Revise su <code>docker-compose.yaml</code> o sus variables de sistema.",

    },
    "footer": {
        "text": "\u00a9 2023 - Documentación BotPromo IUT Bayonne | Generado para GitHub Pages"
    },
    "tech": {
        "head": {
            "title": "Documentación Técnica - BotPromo"
        },
        "sidebar": {
            "doc": "Documentación Técnica"
        },
        "nav": {
            "retour": "Volver al Tutorial",
            "architecture": "Arquitectura Global",
            "moteur": "Motor EDT",
            "interface": "Interfaz de Discord",
            "main": "Punto de entrada"
        },
        "architecture": {
            "titre": "Introducción y Contexto Técnico",
            "desc": "Bienvenido a la documentación técnica de <strong>BotPromo</strong> Jinx. Este documento está dirigido a desarrolladores, posibles colaboradores y estudiantes curiosos.",
            "choixTitre": "Opciones Tecnológicas y Arquitectura",
            "choixDesc": "El proyecto se basa en varios pilares técnicos:",
            "liPython": "<strong>Python 3 y <code>interactions.py</code>:</strong> El bot está completamente codificado en Python. El uso de la moderna biblioteca <code>interactions.py</code> permite una gestión nativa, asíncrona y optimizada de los <em>Slash Commands</em> de Discord.",
            "liModulaire": "<strong>Arquitectura Modular (Cogs):</strong> El código está estrictamente separado según el principio de responsabilidad única. La interfaz con Discord y las declaraciones de comandos están aisladas en la carpeta <code>Cogs/</code> (ej: <code>Salles.py</code>), mientras que la lógica de negocio y el análisis de datos residen en <code>Cogs/src/</code> (ej: <code>TrouveTaSalle.py</code>).",
            "liAsync": "<strong>Programación Concurrente (Multihreading):</strong> Para evitar latencia durante las actualizaciones de horarios, las fuertes solicitudes HTTP a los servidores del IUT y el análisis de calendarios se delegan a un grupo de hilos secundarios (vía <code>concurrent.futures.ThreadPoolExecutor</code>).",
            "liDocker": "<strong>Contenedorización:</strong> El bot está empaquetado con <code>Docker</code>, asegurando un entorno de ejecución estable independiente de la máquina host."
        },
        "moteur": {
            "titre": "Motor EDT",
            "desc": "Este archivo contiene el núcleo lógico del bot. Se encarga de obtener y analizar los horarios del IUT de Bayonne.",
            "recupTitre": "Recuperación de Datos (ICS)",
            "recupDesc": "El bot realiza solicitudes GET a la URL de horarios del IUT para descargar datos en formato estándar iCalendar (.ics). Las aulas se dividen en dos categorías: <code>listeSallesPC</code> (salas de informática) y <code>listeSallesTD</code> (salas clásicas).",
            "algoTitre": "Algoritmo de Procesamiento",
            "algo1": "<strong>Paralelización:</strong> El método <code>refresh()</code> utiliza un grupo de hilos para descargar los horarios de todas las promociones simultáneamente.",
            "algo2": "<strong>Filtrado Temporal:</strong> Los eventos pasados del día o de los próximos días se ignoran para optimizar la memoria y el rendimiento.",
            "algo3": "<strong>Deduplicación:</strong> Si varios grupos tienen clases a la misma hora en la misma aula (ej: conferencia compartida), el algoritmo fusiona inteligentemente los eventos.",
            "algo4": "<strong>Detección de Franjas Libres:</strong> El método <code>detecter_creneaux_libres_salle()</code> calcula los 'huecos' entre clases durante el día (generalmente de 7:45 a 18:30) para determinar la disponibilidad exacta de las salas.",
            "algo5": "<strong>Búsqueda de Profesores:</strong> El método <code>get_prof()</code> procesa las descripciones de los eventos ICS para localizar a un profesor específico (asignatura, aula, horario)."
        },
        "interface": {
            "titre": "Interfaz de Discord",
            "desc": "Esta extensión carga comandos relacionados con salas y profesores. También gestiona la configuración según el semestre académico (par/impar).",
            "configTitre": "Configuración del Semestre (<code>SEMESTER</code>)",
            "configDesc": "Una variable de entorno <code>SEMESTER</code> dicta qué diccionario <code>ID_PROMOS</code> se utiliza. Los ID del calendario ICS chanmbian entre semestres impares (S1/S3) y pares (S2/S4).",

            "taskTitre": "Tarea en Segundo Plano",
            "taskDesc": "El módulo inicializa un Hilo independiente en la función <code>setup()</code> que ejecuta <code>refresh_edt()</code>. Este hilo activa la actualización del horario cada 10 minutos durante el día. Por la noche, duerme durante horas prolongadas para ahorrar solicitudes."
        },
        "main": {
            "titre": "Punto de entrada",
            "desc": "El archivo principal orquesta la inicialización del bot:",
            "liToken": "Carga segura del Token desde las variables de entorno mediante <code>dotenv</code> o un archivo local <code>confidentiel.py</code>.",
            "liIntents": "Definición de <em>Intents</em> de Discord (limitados estrictamente a lo esencial: mensajes del servidor y miembros).",
            "liCogs": "Carga dinámica de la extensión principal <code>Cogs.Salles</code>.",
            "liCmds": "Definición de comandos utilitarios globales básicos (<code>/ping</code>, <code>/clear</code>, <code>/8ball</code>)."
        },
        "footer": {
            "text": "\u00a9 2026 - Documentación BotPromo IUT Bayonne"
        }
    }
};
