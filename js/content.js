// Add meditation text to each mystery’s description field.
(function (root) {
  const content = {
  "groups": {
    "gozosos": {
      "name": "Gozosos",
      "kind": "gozo",
      "mysteries": [
        {
          "title": "La Encarnación del Hijo de Dios (Lc 1,28.31.38).",
          "description": "El Ángel entró en su casa y la saludó, diciendo: “¡Alégrate!, llena de gracia, el Señor está contigo”… “Concebirás y darás a luz un hijo, y le pondrás por nombre Jesús”… María dijo entonces: “Yo soy la servidora del Señor, que se cumpla en mí lo que has dicho”"
        },
        {
          "title": "La visita de la Virgen María a Santa Isabel (Lc 1,39-42.45-46).",
          "description": "«María partió y fue sin demora a un pueblo de la montaña de Judá. Entró en la casa de Zacarías y saludó a Isabel… Isabel… exclamó: “¡Tú eres bendita entre todas las mujeres y bendito es el fruto de tu vientre!… Feliz de ti por haber creído”. María dijo entonces: “Mi alma canta la grandeza del Señor”"
        },
        {
          "title": "El nacimiento del Niño Jesús (Lc 2,6-7.10-11).",
          "description": "Mientras se encontraban en Belén, le llegó el tiempo de ser madre; y María dio a luz a su Hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre, porque no había lugar para ellos en el albergue… El Ángel les dijo: “Hoy, en la ciudad de David, les ha nacido un Salvador, que es el Mesías, el Señor"
        },
        {
          "title": "La Presentación de Jesús en el Templo (Lc 2,22.28-30).",
          "description": "Llevaron al niño a Jerusalén para presentarlo al Señor… Simeón lo tomó en sus brazos y alabó a Dios, diciendo: “Ahora, Señor, puedes dejar que tu servidor muera en paz, como lo has prometido, porque mis ojos han visto la salvación"
        },
        {
          "title": "El Niño Jesús perdido y hallado en el Templo (Lc 2,42-43.46).",
          "description": "Cuando el niño cumplió doce años, subieron como de costumbre, y acabada la fiesta, María y José regresaron, pero Jesús permaneció en Jerusalén sin que ellos se dieran cuenta… Al tercer día, lo hallaron en el Templo en medio de los doctores de la Ley, escuchándolos y haciéndoles preguntas"
        }
      ]
    },
    "dolorosos": {
      "name": "Dolorosos",
      "kind": "dolor",
      "mysteries": [
        {
          "title": "La oración de Jesús en el huerto (Marcos 14, 22-42).",
          "description": ""
        },
        {
          "title": "La flagelación de nuestro Señor Jesucristo (Marcos 15, 1-15).",
          "description": ""
        },
        {
          "title": "Jesús es coronado de espinas (Marcos 15, 16-20).",
          "description": ""
        },
        {
          "title": "Jesús con la cruz a cuestas (Marcos 15, 21-28).",
          "description": ""
        },
        {
          "title": "La Crucifixión y muerte de nuestro Señor Jesucristo (Marcos 15, 29-39).",
          "description": ""
        }
      ]
    },
    "gloriosos": {
      "name": "Gloriosos",
      "kind": "gloria",
      "mysteries": [
        {
          "title": "La Resurrección del Hijo de Dios (Mateo 28, 1-8).",
          "description": ""
        },
        {
          "title": "La Ascensión del Hijo de Dios (Hechos 1, 6-11).",
          "description": ""
        },
        {
          "title": "La venida del Espíritu Santo sobre los Apóstoles (Hechos 2, 1-13).",
          "description": ""
        },
        {
          "title": "La Asunción de María (Apocalipsis 12, 1).",
          "description": ""
        },
        {
          "title": "La Coronación de nuestra Señora, como Reina de cielos y tierra (Lucas 1, 46-50).",
          "description": ""
        }
      ]
    },
    "luminosos": {
      "name": "Luminosos",
      "kind": "luz",
      "mysteries": [
        {
          "title": "El bautismo de Jesús (Mt 3,13.16-17).",
          "description": "Jesús fue desde Galilea hasta el Jordán y se presentó a Juan para ser bautizado por él… Apenas fue bautizado, Jesús salió del agua. En ese momento se abrieron los cielos, y vio al Espíritu de Dios descender como una paloma y dirigirse hacia él. Y se oyó una voz del cielo que decía: “Este es mi Hijo muy querido, en quien tengo puesta toda mi predilección”"
        },
        {
          "title": "Las bodas de Caná (Jn 2,1.3.5.11).",
          "description": "Se celebraron unas bodas en Caná de Galilea, y la madre de Jesús estaba allí… Como faltaba vino, la madre de Jesús le dijo: “No tienen vino”… Su madre dijo a los sirvientes: “Hagan todo lo que él les diga”… Así manifestó su gloria, y sus discípulos creyeron en él"
        },
        {
          "title": "El anuncio del Reino (Mc 1,14-15).",
          "description": "Jesús se dirigió a Galilea. Allí proclamaba la Buena Noticia de Dios, diciendo: “El tiempo se ha cumplido: el Reino de Dios está cerca. Conviértanse y crean en la Buena Noticia"
        },
        {
          "title": "La transfiguración del Señor (Mt 17,1-2.5).",
          "description": "Jesús tomó a Pedro, a Santiago y a su hermano Juan, y los llevó aparte a un monte elevado. Allí se transfiguró en presencia de ellos: su rostro resplandecía como el sol y sus vestiduras se volvieron blancas como la luz… Se oyó una voz que decía desde la nube: “Este es mi Hijo muy querido, en quien tengo puesta mi predilección: escúchenlo”"
        },
        {
          "title": "La institución de la Eucaristía (1 Cor 11,23-25).",
          "description": "El Señor Jesús, la noche en que fue entregado, tomó el pan, dio gracias, lo partió y dijo: “Esto es mi Cuerpo, que se entrega por ustedes”… De la misma manera, después de cenar, tomó la copa, diciendo: “Esta copa es la Nueva Alianza que se sella con mi Sangre”"
        }
      ]
    }
  },
  "prayers": {
    "ourFather": "Padre nuestro, que estás en el cielo, santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.",
    "hailMary": "Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.",
    "glory": "Gloria al Padre, al Hijo y al Espíritu Santo, como era en un principio, ahora y siempre, por los siglos de los siglos. Amén.",
    "maryGrace": "Guía: María, Madre de gracia y Madre de misericordia,",
    "maryResponse": "Todos: en la vida y en la muerte ampáranos, gran Señora.",
    "fatimaPrayer": "Oh Jesús mío, perdona nuestros pecados y líbranos del fuego del infierno, lleva al cielo a todas las almas y socorre especialmente a las más necesitadas de tu misericordia. Amén.",
    "offering": "Por estos Misterios santos de que hemos hecho recuerdo, te pedimos, ¡oh, María!, de la Fe santa el aumento; la exaltación de la Iglesia; del Papa el mejor acierto; de la Nación Mexicana y el mundo, la unión y feliz gobierno. Que el no cristiano conozca a Dios, y el que se ha alejado reconozca sus errores. Que todos los pecadores tengamos arrepentimiento. Que los cristianos perseguidos puedan practicar su fe. Goce puerto el navegante y de salud los enfermos. Que en el Purgatorio logren las ánimas refrigerio. Y que este santo ejercicio tenga efecto tan completo en toda la cristiandad, que alcancemos por su medio, el ir a alabar a Dios en tu compañía en el cielo. Amén.",
    "initialPrayers": [
      "Por la señal de la Santa Cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.",
      "Señor mío Jesucristo, Dios y hombre verdadero, Creador y Redentor mío, por ser tú quien eres y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido. Quiero y propongo firmemente confesarme a su tiempo. Ofrezco mi vida, obras y trabajos en satisfacción de mis pecados. Y confío en que, en tu bondad y misericordia infinita, me los perdonarás y me darás la gracia para no volver a ofenderte. Amén.",
      "V: Ven, Espíritu Santo, llena los corazones de tus fieles",
      "R: y enciende en ellos el fuego de tu amor.",
      "V: Envía tu Espíritu Creador",
      "R: y renueva la faz de la tierra.",
      "Oh Dios, que has iluminado los corazones de tus hijos con la luz del Espíritu Santo; haznos dóciles a sus inspiraciones para gustar siempre del bien y gozar de su consuelo. Por Cristo nuestro Señor. Amén.",
      "Ofrecemos este rosario por las intenciones del Santo Padre, del arzobispo, del párroco, por la paz en el mundo y por…"
    ],
    "closingPrayers": [
      "Guía: Oh Soberano Santuario, Sagrario del Verbo Eterno.",
      "Todos: Libra, Virgen, del infierno a los que rezan tu Rosario.",
      "Guía: Emperatriz poderosa de los mortales consuelo.",
      "Todos: Ábrenos, Virgen, el cielo con una muerte dichosa, y danos pureza de alma ya que eres tan poderosa.",
      "Guía: Padre nuestro, que estás en el cielo, santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo.",
      "Todos: Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal.",
      "Guía: Dios te salve, María Santísima, hija de Dios Padre, Virgen purísima y castísima antes del parto, en tus manos encomiendo mi fe para que la alumbres, llena eres de gracia, etc.",
      "Todos: Santa María...",
      "Guía: Dios te salve, María, Madre de Dios Hijo, Virgen purísima y castísima en el parto, en tus manos encomiendo mi esperanza para que la alientes, llena eres de gracia, etc.",
      "Todos: Santa María...",
      "Guía: Dios te salve, María, esposa del Espíritu Santo, Virgen purísima y castísima después del parto, en tus manos encomiendo mi caridad para que la inflames, llena eres de gracia, etc.",
      "Todos: Santa María...",
      "Guía: Dios te salve, María, templo, trono y sagrario de la Santísima Trinidad, Virgen concebida sin la culpa original, Dios te salve.",
      "Todos: Reina y Madre de misericordia, vida, dulzura y esperanza nuestra, Dios te salve. A ti llamamos los desterrados hijos de Eva, a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. ¡Ea!, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clemente, oh piadosa, oh, dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo. Amén."
    ],
    "litanyOpening": [
      "Señor, ten piedad de nosotros.",
      "Cristo, ten piedad de nosotros.",
      "Señor, ten piedad de nosotros.",
      "Cristo, óyenos.",
      "Cristo, escúchanos.",
      "Dios, Padre Celestial que eres Dios.\nTen piedad de nosotros.",
      "Dios Hijo. Redentor del mundo que eres Dios.\nTen piedad de nosotros.",
      "Espíritu Santo que eres Dios.\nTen piedad de nosotros.",
      "Santísima Trinidad, que eres un solo Dios.\nTen piedad de nosotros."
    ],
    "litanyInvocations": [
      "Santa María.",
      "Santa Madre de Dios.",
      "Santa Virgen de las vírgenes.",
      "Madre de Jesucristo.",
      "Madre de la divina gracia.",
      "Madre purísima.",
      "Madre castísima.",
      "Madre intacta.",
      "Madre sin mancha.",
      "Madre amable.",
      "Madre del buen consejo.",
      "Madre del Creador.",
      "Madre del Salvador.",
      "Madre de la Iglesia.",
      "Virgen prudentísima.",
      "Virgen venerable.",
      "Virgen digna de alabanza.",
      "Virgen poderosa.",
      "Virgen misericordiosa.",
      "Virgen fiel.",
      "Espejo de justicia.",
      "Trono de la Sabiduría.",
      "Causa de nuestra alegría.",
      "Vaso espiritual.",
      "Vaso honorable.",
      "Rosa Mística.",
      "Torre de David.",
      "Torre de Marfil.",
      "Casa de Oro.",
      "Arca de la alianza.",
      "Puerta del cielo.",
      "Estrella de la mañana.",
      "Salud de los enfermos.",
      "Refugio de los pecadores.",
      "Consoladora de los afligidos.",
      "Auxilio de los Cristianos.",
      "Reina de los Ángeles.",
      "Reina de los Patriarcas.",
      "Reina de los Profetas.",
      "Reina de los Apóstoles.",
      "Reina de los Mártires.",
      "Reina de los Confesores.",
      "Reina de las Vírgenes.",
      "Reina de todos los Santos.",
      "Reina concebida sin pecado original.",
      "Reina subida al cielo en cuerpo y alma.",
      "Reina del Santísimo Rosario.",
      "Reina de la paz."
    ],
    "finalPrayers": [
      "Cordero de Dios, que quitas el pecado del mundo. Perdónanos, Señor.",
      "Cordero de Dios, que quitas el pecado del mundo, Escúchanos, Señor.",
      "Cordero de Dios, que quitas el pecado del mundo. Ten piedad y misericordia de nosotros.",
      "Guía: Bajo tu amparo nos acogemos, Santa Madre de Dios, no desprecies las súplicas que te dirigimos en nuestras necesidades, antes bien, líbranos de todos los peligros, oh, Virgen gloriosa y bendita. Ruega por nosotros, Santa Madre de Dios.",
      "Todos: Para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo.",
      "Guía: Oh Dios, cuyo Unigénito Hijo, con su vida, muerte y resurrección, nos alcanzó el premio de la vida eterna: concédenos, a los que recordamos estos misterios del Santo Rosario, imitar lo que contienen y alcanzar lo que prometen. Por el mismo Jesucristo, nuestro Señor.",
      "Amén."
    ],
    "conclusion": [
      "Guía: Reina del Santísimo Rosario.",
      "Todos: Ruega por nosotros.",
      "Guía: Viva la gracia.",
      "Todos: Muera el pecado.",
      "Guía: Ave María purísima.",
      "Todos: En gracia de Dios concebida."
    ],
    "rosaryVirginLeader": "Guía: Oh Virgen Santísima del Rosario, no permitas",
    "rosaryVirginResponse": "Todos: que vivamos y muramos en pecado mortal.",
    "ourLadyFatimaLeader": "Guía: Nuestra Señora de Fátima,",
    "ourLadyFatimaResponse": "Todos: ruega por nosotros.",
    "immaculateHeartLeader": "Guía: Corazón Inmaculado de María,",
    "immaculateHeartResponse": "Todos: sé la salvación del alma mía."
  }
};
  if (typeof module !== "undefined" && module.exports) module.exports = content;
  else root.RosaryContent = content;
})(typeof globalThis !== "undefined" ? globalThis : this);
