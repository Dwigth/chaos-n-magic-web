import { Profession } from './types/profression.type';

export const PROFESSIONS = new Map<string, Profession>([
    [
        'Vagabundo',
        {
            name: 'Vagabundo',
            description: 'Provienes de un bosque o de las partes bajas de una gran ciudad, vives de lo que encuentras y eres capaz de hacer lo que necesites para sobrevivir, ya sea cazando o resolviendo los problemas de formas elocuentes.',
            coins: 80,
            object: 'Dos armas con un valor no mayor a 20 ¢, ropa común, 6 ganzúas, una bolsa de abrojos y una bolsa de dormir. Un costal (3x4).',
            characteristics: [
                { name: 'Callejero', description: 'Sabes usar herramientas de ladrón, puedes volver a tirar 1 de los dados de Herramientas al intentar forzar cerraduras.' },
                { name: 'Superviviente', description: 'Sabes cómo y dónde conseguir comida, siempre que te encuentres en lo salvaje puedes conseguir comida para una criatura.' },
                { name: 'Mendigo', description: 'Sabes cómo llegar al corazón de las personas, ganas +2 a tus pruebas de Atributo para pedir dinero en la calle.' }
            ]
        }],
    [
        'Granjero',
        {
            name: 'Granjero',
            description: 'Naciste en una familia de granjeros, ya sea ganaderos o agrícolas, adquiriste algunos de estos conocimientos durante tu juventud.',
            coins: 100,
            object: 'Ropa Común. Un set Herramientas de tu Elección. Mochila Pequeña (4x4).',
            characteristics: [
                { name: 'Granjero', description: 'Sabes usar herramientas de botánica, puedes reintentar tu prueba una vez mientras busques flores y plantas, puedes volver a tirar un dado cuando intentes fabricar un objeto con herramientas de Botánica.' },
                { name: 'Arriero', description: 'Conoces como manejar Alimañas para trabajo, conoces sobre alimañas de granja y sabes cabalgar alimaña de carga.' },
                { name: 'Pastor', description: 'Sabes tratar con Alimañas de ganado, eres capaz de hacer que Alimañas con un :Intellect:ntelecto de -3 o inferior, hagan lo que les señalas. ' }
            ]
        },
    ],
    [
        'Artesano',
        {
            name: 'Artesano',
            description: 'Te dedicas a la manufactura de objetos como artesanías, construcción, herrería, alfarería, etc.',
            coins: 100,
            object: 'Herramientas (De tu elección), Ropa común. Mochila Mediana (5x5).',
            characteristics: [
                { name: 'Fabricación', description: 'Como un fabricante de artesanías sabes usar un set de herramientas de fabricación de tu elección, puedes volver a tirar dos dados al final del tiempo de fabricación.' },
                { name: 'Construcción', description: 'Sabes usar un set de herramientas de tu elección. Por cada ayudante que contrates para realizar una construcción, el tiempo se reduce en dos días.' },
                { name: 'Reparación', description: 'Sabes usar un set de Herramientas de fabricación y uno de utilidad de tu elección, puedes reparar un objeto empleando 1d4 horas, o puedes tomar ese tiempo para afilar un arma, aumentando su daño en 1d4 durante el siguiente combate, el bono se pierde al finalizar ese combate.' }
            ],
        }
    ],
    [
        'Noble',
        {
            name: 'Noble',
            description: ' Clase alta, noble o de alta reputación, eres respetado entre los plebeyos y algunos de tu clase. A pesar del alto respeto que se les puede tener a los nobles, algunas organizaciones criminales o tribus de Reptiles los pueden tener como objetivos principales.',
            coins: 120,
            object: ' Pieza de Joyería representativa de tu casa o familia. Ropa Fina. 2 Carteras (2x1).',
            characteristics: [
                { name: 'Valioso', 'description': 'Eres un miembro de la alta sociedad por herencia familiar, aunque no eres parte de la nobleza, la gente te reconoce, otros nobles y distinguidos te reconocen. ' },
                { name: 'Señor', 'description': 'Eres dueño de un pequeño pedazo de tierra, lo que te convierte en Lord, tienes un 20% de descuento para contratar mercenarios y trabajadores.' },
                { name: 'Duque', 'description': 'Como un miembro del linaje Real de tu reino de origen, eres respetado entre los plebeyos, pueden ayudarte a esconderte, darte asilo, otorgarte sus monturas o animales, aunque no arriesgarán su vida por ti.' },
            ]
        }
    ],
    [
        'Soldado',
        {
            name: 'Soldado',
            description: ' Has recibido entrenamiento militar de algún tipo y ocupaste o no un puesto militar durante tu vida.',
            coins: 50,
            object: ' Un arma no-mágica (con un valor no mayor a 100¢) y una armadura no-mágica (con un valor no mayor de 50 ¢). Cuerda de cáñamo (10 u), Bolsa de Dormir. Ropa Común. Mochila Mediana (5x5)',
            characteristics: [
                { name: 'Guardia', 'description': 'Tu experiencia como vigilante te permite reconocer a una persona sospechosa, reconoces cuando una persona porta un arma sutil dentro de tu campo de visión clara. Sabes usar Monturas' },
                { name: 'Militar', 'description': 'Sabes usar un tipo de armaduras (Ligera o Pesada). Sabes usar Monturas.' },
                { name: 'Oficial', 'description': 'Como un reconocido estratega, estas bien entrenado en las tácticas de combate, puedes predecir los movimientos de otro humanoide para saber como actuar. Adicionalmente, conoces la posición de todas las tropas enemigas que no estén ocultas. Sabes usar Monturas y Carruajes.' },
            ]
        }
    ],
    [
        'Artista',
        {
            name: 'Artista',
            description: ' Has desarrollado talentos para entretener a la gente, tus dones actorales, oratorios y hasta musicales son siempre un deleite para los transeúntes y los nobles.',
            coins: 60,
            object: ' Un instrumento musical o un Paquete de Disfraces, Ropa fina.',
            characteristics: [
                { name: 'Juglar', 'description': 'Como un historiador musical, un juglar es capaz de recolectar las historias más sorprendentes de las leyendas más icónicas de la historia, cuando cantas la leyenda de algún personaje conocido, la gente puede regalarte hasta 3d6 monedas. Sabes usar un instrumento musical.' },
                { name: 'Actor', 'description': 'Eres un gran intérprete, tus emociones son tan maleables como la arcilla, tus palabras son muy convincentes para la mayoría de las personas, independientemente de tu (P)ersonalidad, agrega +1d6 a tus pruebas de Atributo al actuar. Sabes usar Paquetes de Disfraces.' },
                { name: 'Orador', 'description': 'Tus palabras tienen dirección y sentido, las rimas que salen de tu boca llegan hasta el corazón, como orador puedes hacer que tu voz se escuche hasta a 12 unidades, si hablas a una multitud de al menos 5 personas, añades +1d6 a tus pruebas de (P)ersonalidad.' },
            ]
        }
    ],
    [
        'Marinero',
        {
            name: 'Marinero',
            description: ' Has trabajado una buena parte de tu vida en el mar realizando distintas labores, lo que te ha provisto con la experiencia necesaria para viajar en embarcaciones marítimas.',
            coins: 50,
            object: ' una Brújula. Una red mediana. Botella de Vino. Ropa común. Costal (3x4)',
            characteristics: [
                { name: 'Pescador', 'description': 'Has trabajado en un barco pesquero, sabes manejar vehículos marítimos, también sabes cómo localizar bancos de peces.' },
                { name: 'Naval', 'description': 'Has sido miembro de la Armada naval, por tu tiempo en combate a bordo, es difícil que pierdas el equilibrio, adquieres +1d6 a todas las pruebas de atributo en las que resistas a que te derriben.' },
                { name: 'Pirata', 'description': 'Como miembro de una tripulación que se dedicaba al robo, asalto y saqueo de  naves y pueblos costeños, sabes manejar vehículos marinos, la gente teme meterse con un pirata, así que muchas veces los civiles evitarán problemas contigo.' },
            ]
        }
    ],
    [
        'Mercader',
        {
            name: "Mercader",
            description: " Tu vida ha estado enfocada en las ventas de productos o materia prima, junto a tu escarabajo Moletodo, has viajado entre las ciudades para comprar y para vender.  ",
            coins: 10,
            object: " Un Escarabajo Arriero y una carreta. 10 raciones de Moletodo, Ropa común.",
            characteristics: [
                { name: "Elocuente", "description": "Tus palabras son suaves y ágiles como una lombriz, puedes vender prácticamente cualquier cosa a cualquier persona, añades 1d6 a tus pruebas de (P)ersonalidad al intentar vender algo." },
                { name: "Viajero", "description": "Has transitado tantas rutas comerciales que te conoces todos los caminos, te es fácil saber cómo llegar a otros poblados, asentamientos y lugares habitados, cuando se hagan las tiradas de travesía, puedes escoger la siguiente más baja mientras viajen a través de rutas de comercio." },
                { name: "Comerciante", "description": "Como un maestro/a del trueque, tienes un 60% de probabilidades de conseguir productos a mitad de precio." },
            ]
        }
    ],
    [
        'Explorador',
        {
            name: "Explorador",
            description: " Eres un profesional dedicado a la exploración de lugares inhóspitos, ya sea con el motivo de buscar lugares aptos para la civilización, descubrir nuevas criaturas o trazar mapas.",
            coins: 80,
            object: " Brújula, Herramientas de Cartografía o Binoculares. Ropa común. Mochila Mediana.",
            characteristics: [
                { name: "Cartógrafo", "description": "Sabes usar Herramientas de Cartografía, puedes conocer bien el terreno y es difícil que te pierdas, a tus pruebas de (I)ntelecto o (S)entidos para saber orientarte, puedes volver a tirar uno de los dados d12." },
                { name: "Excursionista", "description": "Tu experiencia como excursionista, escalador o explorador de minas te permite afrontar los desafíos más difíciles, recuerdas bien el camino que recorriste y eres capaz de reconocer si estás yendo en la dirección correcta así te encuentres en un laberinto o en unas cavernas." },
                { name: "Cazador", "description": "Como buscador de criaturas eres capaz de encontrar los rastros de los animales más fácilmente, puedes saber el tamaño, la cantidad de criaturas del mismo tipo y si se encuentran en temporada de apareamiento, añades 1d6 a tus pruebas de (S)entidos o (I)ntelecto al seguir rastros." },
            ]
        }
    ]
]);