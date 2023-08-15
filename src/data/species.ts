import { SpeciesDiet } from "./enum/specie-diet.enum";
import { Specie } from "./types/specie.type";

export const SPECIES = new Map<string, Specie>([
    ['Arsus', {
        type: SpeciesDiet.OMNIVORO,
        characteristic: `Los Ursus son guerreros feroces, pueden consumir 2 Energía para aumentar 1d8+(C)ombate o (F)ortaleza su defensa Máxima y este exceso se mantiene haste que se reduzca por ataques, una vez que usan esta habilidad, deben descansar 1 hora para hacerlo de nuevo.
        `,
        description: `Los Ursus son gente Oso, han construído sus ciudades usando una arquitectura cruda y tosca, siempre haciendo que sus edificios luzcan resistentes e intimidante, su fuerza les otorga la habilidad de cargar enormes troncos pesados y rocas pesadas para construir sus fortalezas y torres.
        Muchas ciudades Ursus han sido construidas en lugares nevados y rocosos, algunas etnias Ursus han construído asentamientos en el interior de las montañas.`,
        talents: [
            {
                description: `Aprendes a utilizar la potencia natural de tus garras, usando 2 Energía puedes infligir 1d4 de Desangre a un objetivo. Puede usarse un número de veces igual a tu (C)ombate antes de descansar 1 hora.
                `,
                level: 3,
                name: 'Ursus Minus'
            },
            {
                description: `Los Ursus son resilientes y su ventaja en la batalla recae en su capacidad para desgastar al oponente a medida que se hacen más fuertes, mientras hagas ataques contra un mismo objetivo, el AD de tus ataques subsiguientes aumenta en +1, si realizas un ataque contra un nuevo enemigo, el bono se reinicia.`,
                level: 6,
                name: 'Ursus Major'
            }
        ],
        velocities: {
            values: [
                {
                    label: 'climbing',
                    value: 1
                },
                {
                    label: 'swimming',
                    value: 1
                },
                {
                    label: 'running',
                    value: 2
                }
            ]
        },
    }],
    ['Rabbir', {
        type: SpeciesDiet.HERBIVORO,
        characteristic: `Los Rabbir se adaptaron para escapar de sus depredadores y recorrer grandes distancias, sus piernas se adaptaron para saltar grandes alturas, puede saltar tres veces su velocidad sin tomar vuelo y cinco veces tomando vuelo.`,
        description: `Los Rabbires son gente Conejo muy ágiles, rápidos e inteligentes, sus invenciones han viajado a través del mundo y su sistema político exótico ha sido imitado por algunas otras etnias foráneas. Toman una gran importancia a sus comités decisivos que son dirigidos por los miembros con mayor descendencia, aquellos con la mayor cantidad de hijos vivos son capaces de tomar las decisiones tan importantes, después de todo, si fuiste capaz de mantener vivos a tantos jóvenes, entonces eres capaz de dirigir una ciudad ¿no es así?
        La alta tasa de reproducción de los rabbir ha llevado a que sean superpoblados y con una alta tasa de mortalidad.
        `,
        talents: [
            {
                description: `Oído Agudizado: Las enormes orejas super desarrolladas de los Rabbir vuelven tu distancia para escucha a [6 / 10] veces tus (S)entidos (Mínimo 1).`,
                level: 3,
                name: 'Oído Agudizado'
            },
            {
                description: `Tus agudos sentidos de Rabbir son especialmente poderosos para detectar los peligros, detectas todas las trampas que se encuentren a 2 u de ti.`,
                level: 6,
                name: 'Rabbir al Peligro'
            }
        ],
        velocities: {
            values: [
                {
                    label: 'running',
                    value: 3
                },
                {
                    label: 'swimming',
                    value: 1
                }
            ]
        },
    }],
    ['Cerdil', {
        type: SpeciesDiet.OMNIVORO,
        characteristic: `Los Cerdiles son especies balanceadas en fuerza, destreza y carisma, adquieren +1 en todos los Atributos. (Al seleccionar esta raza los atributos no pueden ser mayores a +3).`,
        description: `El Cerdil tiene una cultura de gente trabajadora, son muy buenos trabajando juntos, han construído grandes estructuras alrededor del mundo gracias a su excelente comunicación y colaboración, muchos de ellos son conocidos por su impresionante paciencia y temple, sin mencionar su valentía digna de galardonar.`,
        talents: [
            {
                name: 'Orientación Cerdil',
                level: 3,
                description: `Los Cerdiles son reconocidos por su gran capacidad de orientación, los mercaderes experimentados más exitosos pertenecen a esta cultura. Reconoces el camino de vuelta a alguna ciudad, que se encuentre más cercana, en que se hable el mismo idioma que tu hablas sin importar lo lejos que estés.`
            },
            {
                name: 'Cerdimplacable',
                level: 6,
                description: `Los Cerdiles son difíciles de doblegar, cuando un grupo se encuentre en un dilema de vida o muerte, es más probable que el Cerdil sobreviva, pueden aguantar algunos días sin comer y sin dormir. Te toma días adicionales igual a tu (F)ortaleza o (M)ente (Mínimo 1) recibir un nivel de Fatiga.`
            }
        ],
        velocities: {
            values: [
                {
                    label: 'running',
                    value: 2,
                }
            ]
        },
    }],
    ['Ratta', {
        type: SpeciesDiet.OMNIVORO,
        characteristic: `Los Rata son criaturas usualmente despreciados, viven en las profundidades subterráneas, el daño Venenoso recibido es reducido a la mitad.`,
        description: `Los habitantes de lo profundo, los Ratta son gente Rata que han construído su civilización en las cloacas abandonadas de las antiguas ciudades dejadas atrás, las leyendas hablan de gente con cuerpos cubiertos de alas, capaces de volar fueron quienes construyeron estas antiguas estructuras laberínticas, estos seres conocidos como Ave. 
        Los Ratta siendo expertos en la orientación y en lo oculto construyeron sus pueblos en las profundidades de estos túneles que en ocasiones se extienden por kilómetros.`,
        talents: [
            {
                name: 'Mordida Tóxica',
                level: 3,
                description: `Como un Ratta que vive en las alcantarillas, puedes usar 4 Energía para realizar una mordida tóxica que inflige 2d6 daño tóxico.`
            },
            {
                name: 'Organismo Adaptado',
                level: 6,
                description: `Por tu tiempo expuesto a los antigüos desechos de las razas de la superficie, has adquirido inmunidad a todo tipo de enfermedades.`
            }
        ],
        velocities: {
            values: [
                {
                    label: 'running',
                    value: 2,
                },
                {
                    label: 'climbing',
                    value: 1,
                },
                {
                    label: 'swimming',
                    value: 1,
                }
            ]
        },
    }],
    ['Kabren', {
        type: SpeciesDiet.HERBIVORO,
        characteristic: `Gracias a su cornamenta hecha para embestir, puedes usar 3 Energía para embestir a otra criatura si te has movido al menos 2 unidades, tu ataque inflige 1d8 + (F)ortaleza o (C)ombate de daño explosivo.`,
        description: `Los Kabren habitan las montañas, los picos elevados y rocosos, han construído enormes ciudades y pueblos en la cima de estas, lugares difíciles de alcanzar, ellos deciden vivir vidas pacíficas, lejos de la guerra y de las grandes ciudades, el conflicto que reina en las tierras salvajes, son devotos a algunas deidades creadoras del mundo. Algunos de ellos deciden dejar la vida pacífica por ir en busca de aventura, riquezas o algo de emoción.`,
        talents: [
            {
                name: 'Kabrevisión',
                level: 3,
                description: `Los Kabren más entrenados suelen desarrollar una vista mucho más aguda, el rango de visión básico se convierte en [6/18] veces tus (S)entidos.`
            },
            {
                name: 'De las Montañas',
                level: 6,
                description: `Los Kabren provienen de zonas montañosas frías, lo que te aporta +5 de Resistencia al daño de frío. El estado Frío extremo ya no puede afectarte.`
            }
        ],
        velocities: {
            values: [
                {
                    label: 'running',
                    value: 2
                },
                {
                    label: 'climbing',
                    value: 2
                }
            ]
        },
    }],
    [`Rak' oon`, {
        type: SpeciesDiet.OMNIVORO,
        characteristic: `Los Mapaches son maestros en el arte del robo, puedes añadir 1d6 a tus pruebas de (P)recisión al intentar robar, sabes usar ganzúas para forzar candados y puedes volver a tirar 1d6 adicional cuando intentas forzar cerraduras.`,
        description: `Vagabundos, Viajeros, ladrones y mercenarios. Los Rak’oon son gente mapache que vive recluída en sus propios gremios, prefieren vivir en las ciudades que fundar las suyas propias, han pasado tanto tiempo ocultándose y usurpando edificios abandonados que se han vuelto extremadamente buenos en ello.
        Los Rak’oon son conocidos por sus habilidades de robo, infiltración y sacan buen provecho a ello.`,
        talents: [
            {
                name: 'Garranzúa',
                level: 3,
                description: `Sabes usar herramietas de Ladrón, tienes dos garras lo suficientemente largas para actuar como ganzúas, si se llegan a romper, deberás dormir 8 horas para que vuelvan a crecer.`
            },
            {
                name: 'Uno con la Sombra',
                level: 6,
                description: `Los Mapaches más experimentados son maestros del sigilo y lo oculto, tu velocidad de Escalado aumenta en +1 (Hasta un máximo de 3), si estás bajo sombra u oscuridad, puedes usar 2 Energía para esconderte.`
            }
        ],
        velocities: {
            values: [
                {
                    label: 'running',
                    value: 2,
                },
                {
                    label: 'climbing',
                    value: 1
                }
            ]
        },
    }],
    [`Felir`, {
        type: SpeciesDiet.CARNIVORO,
        characteristic: `Los Gatos pueden ver en la oscuridad a una distancia de 12 u.`,
        description: `Los habitantes de los desiertos, los Felir son gente gato que viven como emperadores, reinan las grandes ciudades de arenisca, son pomposos y orgullosos, portan joyería dorada incrustada en gemas y diamantes, su tiempo viviendo en los desiertos les ha otorgado una visión extraordinaria, son de las pocas criaturas capaces de ver en la oscuridad, pueden sobrevivir las salvajes dunas de los grandes desiertos.`,
        talents: [
            {
                name: 'Agilidad Gatuna',
                level: 3,
                description: `Los Felir son especialmente buenos ocultándose, puedes agregar dos veces tus (S)entidos cuando realices una prueba para ocultarte.`
            },
            {
                name: 'Siete Vidas',
                level: 6,
                description: `Los Felir tienen siete vidas, pues se piensa que son un enlace entre el mundo de los muertos y el de los vivos, si un Felir muere, volverá a la vida tras haber transcurrido 1d6 horas, un Felir puede volver a la vida solamente si su corazón y cerebro no han sido destruídos o removidos. Esto puede suceder hasta siete veces.`
            }
        ],
        velocities: {
            values: [
                {
                    label: 'running',
                    value: 2,
                },
                {
                    label: 'climbing',
                    value: 2
                }
            ]
        },
    }],
    [`Foxen`, {
        type: SpeciesDiet.OMNIVORO,
        characteristic: `Los Foxen se distinguen por sus habilidades olfativas, puedes volver a tirar 1d12 a tus pruebas de (S)entidos que recaigan en tu Olfato.`,
        description: `Los Foxen son conservadores y tradicionales, viven en sus comunidades lejos de las ciudades más pobladas, construyen sus casas de madera y paja, construyen sus lotes y establos para vivir una vida comunitaria tranquila, algunos de ellos son cazadores aunque se enfocan más en sus tradiciones y fiestas.`,
        talents: [
            {
                name: 'Zorro de Magia',
                level: 3,
                description: `La conexión de los Foxen con las energías del universo les impregnan con el poder del cosmos. Si tienes Maná o Fé, aumentas el máximo de alguno de los dos (a tu elección) en +2.`
            },
            {
                name: 'Iluzorro',
                level: 6,
                description: `Adquieres un hechizo de Ilusión de Iniciado o Profesional que puedes conjurar a voluntad, puedes conjurar el hechizo ignorando el elemento Canalizador, si no cuentas con canalizador arcano, el AD de tu hechizo es 1d8. El hechizo no debe costar más de 1 Maná ni tener un tiempo de lanzamiento mayor de 6 Energía.`
            }
        ],
        velocities: {
            values: [
                {
                    label: 'running',
                    value: 2,
                }
            ]
        },
    }],
    [`Wolfar`, {
        type: SpeciesDiet.CARNIVORO,
        characteristic: `Usando 2 Energía puedes realizar un aullido que proporciona aliento a sus compañeros que se encuentren a 12u, aumentando su Defensa Máxima en +2 y el daño de todos sus ataques con armas a distancia o cuerpo a cuerpo en +1 durante 1 minuto, puedes volver a usar esta habilidad tras dormir 8 horas.`,
        description: `Las jaurías de Wolfarr provienen del norte, los asentamientos más grandes construídos por ellos, se encuentran en Nuvernalia, tierras nevadas del norte. Como culturalmente cooperativos, los Wolfarr se juntan en “Jaurías”, que son tribus que desempeñan una función en común, cumpliendo con el legado y la promesa del fundador de la misma, se componen por varios roles, el principal, los Alfa (La pareja líder de la jauría), los Beta (Guerreros, guardias, combatientes o quienes desempeñan las funciones principales), los Ancianos (A quienes todos escuchan con atención y los Delta (Quienes desarrollan las funciones menores). Los Wolfarr se llaman por su apodo y el nombre de su Jauría.`,
        talents: [
            {
                name: 'Tácticas de Jauría',
                level: 3,
                description: `Cuando tengas a un aliado a 1u de ti o del oponente, adquieres 1 Bono en todos tus ataques cuerpo a cuerpo y a distancia.`
            },
            {
                name: 'Aullido Aterrador',
                level: 6,
                description: `Realizas un aullido poderoso que retumba sobre las mentes de tus oponentes, todas las criaturas enemigas a 24 u de ti, deberán hacer una prueba de (M)ente (12+1d8) o quedar aterrorizados por 1 minuto, al final de su turno, las criaturas afectadas pueden reintentar la prueba.`
            }
        ],
        velocities: {
            values: [
                {
                    label: 'running',
                    value: 2
                },
                {
                    label: 'swimming',
                    value: 1,
                }
            ]
        },
    }],
]);