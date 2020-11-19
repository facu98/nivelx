'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products',[
  {
    name: 'iPhone 11',
    description: 'iPhone 11, graba videos 4K y toma fotografías espectaculares con sus dos cámaras de 12MP cada una de ellas, modo noche para tomar buenas fotografías en situaciones de poca luz. Cámara para selfies de 12MP con Slofies, son selfies en cámara lenta o incluso con calidad 4K, si giras tu iPhone 11 al momento de tomar una selfie activara el zoom para ampliar el campo visual y que todos queden dentro de la foto. Pantalla Liquid Retina de 6.1 pulgadas. Procesador Hexa-core y chip A13 Bionic. Memoria interna de 64GB y 4GB de RAM.',
    price: 1000,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/wvDc2bmZ/1-1.jpg',
      'https://i.postimg.cc/q7hGh7Mk/1-2.jpg'
    ],
    brand: 'Apple',
    color: [ 'Verde', 'Purpura', 'Amarillo', 'Rojo', 'Blanco', 'Negro' ],
    category: [ 'Smartphones', 'Apple' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'iPhone 11 Pro',
    description: 'Descubrí todo lo que iPhone 11 Pro, tiene para vos! Toma fotos y graba videos espectaculares con su triple cámara ultra gran angular de 12MP cada una de ellas. Captura fotos increíbles en situaciones de poca luz gracias al modo noche. Su cámara para selfies de 12MP te permite grabar divertidos Slofies, son selfies en cámara lenta o incluso con calidad 4K, si giras tu iPhone 11 Pro al momento de tomar una selfie activara el zoom para alejar automáticamente y que todos queden dentro de la foto. Mira tu serie o película favorita en su pantalla Super Retina XDR de 5.8 pulgadas, la más brillante en un iPhone hasta el momento. Con su procesador Hexa-core y su chip A13 Bionic, tendrás un rendimiento en tus juegos y fluidez al momento de usar varias aplicaciones a la vez. Memoria interna de 64GB y una RAM de 4GB.',
    price: 1730,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/V6wbfsJZ/2-1.png',
      'https://i.postimg.cc/g2BD2hpS/2-2.jpg'
    ],
    brand: 'Apple',
    color: [ 'Verde', 'Blanco', 'Negro', 'Dorado' ],
    category: [ 'Smartphones', 'Apple' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Galaxy A71',
    description: 'El Samsung Galaxy A71 llega para suceder al Galaxy A70 con una pantalla Super AMOLED de 6.7 pulgadas a resolución FHD+. Utilizando un procesador Snapdragon 730 de ocho núcleos, el Galaxy A71 cuenta con 6GB de memoria RAM con 128GB de espacio de almacenamiento interno expandible con microSD. La cámara principal del Galaxy A71 es cuádruple, de 64 MP + 12 MP + 5 MP + 5 MP, mientras que su cámara para selfies es de 32 MP. El Galaxy A71 completa sus características con una generosa batería de 4500 mAh de carga rápida, lector de huellas óptico integrado en la pantalla, protección Gorilla Glass 3 y corre One UI basado en Android 9.0 Pie.',
    price: 509,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/BvrBxGX2/3-1.jpg',
      'https://i.postimg.cc/0jfGRMZC/3-2.jpg'
    ],
    brand: 'Samsung',
    color: [ 'Rosa', 'Verde', 'Blanco' ],
    category: [ 'Smartphones', 'Samsung' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Galaxy A21s',
    description: 'Samsung A21s se coloca en la gama media de Samsung. Se destaca su cuádruple cámara de 48+8+2+2MP, con LED-flash, cámara frontal de 13MP. Memoria interna de 64GB y RAM de 6GB, huella dactilar para desbloqueo.Mira tus vídeo favoritos, videojuegos y streamings en una impresionante pantalla infinita de 6.5 pulgadas.',
    price: 259,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/kG9NpFN4/4-1.jpg',
      'https://i.postimg.cc/ryCNt3ct/4-2.jpg'
    ],
    brand: 'Samsung',
    color: [ 'Blanco', 'Negro' ],
    category: [ 'Smartphones', 'Samsung' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Galaxy A51',
    description: 'No te pierdas esta incorporación Samsung Galaxy A51!! Cuenta con una pantalla Full HD+ de 6.5, procesador Exynos 9611, posee 4 GB RAM y 128GB de memoria interna expandible hasta 1T. Su cámara principal es de cuatro lentes de 48 MP + 12 MP + 5 MP + 5 MP, mientras que la cámara frontal para selfies es de 32 MP. En Samsung Galaxy A51 encontramos una batería de 4000 mAh con soporte para carga rápida, puerto USB-C, lector de huellas óptico bajo la pantalla y Android 10.0',
    price: 364,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/Kzht1rHN/5-1.jpg',
      'https://i.postimg.cc/SNS7LdN1/5-2.jpg'
    ],
    brand: 'Samsung',
    color: [ 'Blanco', 'Negro' ],
    category: [ 'Smartphones', 'Samsung' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Galaxy Note 20 Ultra',
    description: 'El diseño minimalista cuenta con un cuerpo metálico perfeccionado con detalles exquisitos, colores trascendentales y cristal Corning® Gorilla® Glass Victus™: el vidrio Gorilla Glass más resistente que existe para un teléfono inteligente.',
    price: 1760,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/NFMFFKBD/6-1.jpg',
      'https://i.postimg.cc/gkgyghxz/6-2.jpg'
    ],
    brand: 'Samsung',
    color: [ 'Dorado', 'Blanco', 'Negro' ],
    category: [ 'Smartphones', 'Samsung' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Galaxy Note 20',
    description: 'El diseño minimalista cuenta con un cuerpo metálico perfeccionado con detalles exquisitos, colores trascendentales y cristal Corning® Gorilla® Glass Victus™: el vidrio Gorilla Glass más resistente que existe para un teléfono inteligente.',
    price: 1329,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/kM1DZvvp/7-1.jpg',
      'https://i.postimg.cc/Sxj63K9W/7-2.jpg'
    ],
    brand: 'Samsung',
    color: [ 'Dorado', 'Blanco', 'Negro' ],
    category: [ 'Smartphones', 'Samsung' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Redmi Note 9S',
    description: 'El Xiaomi Redmi Note 9S cuenta con una pantalla Full HD+ de 6.67 pulgadas y relación de aspecto 20:9, tiene un procesador Snapdragon 720G acompañado de 4GB de memoria RAM con 64GB de almacenamiento o 6GB de RAM con 128GB de almacenamiento. La cámara del Redmi Note 9S es cuádruple en configuración 48 MP + 8 MP + 5 MP + 2 MP, mientras que su cámara selfie es de 16 megapixels. Completando las características del Redmi Note 9S encontramos una batería de 5020 mAh de carga rápida, lector de huellas montado de costado, vidrio Gorilla Glass 5 al frente y atrás y MIUI 12 basado en Android 10.',
    price: 329,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/QMTpNn0C/8-1.jpg',
      'https://i.postimg.cc/nzKBB98t/8-2.jpg'
    ],
    brand: 'Xiaomi',
    color: [ 'Verde', 'Blanco', 'Gris' ],
    category: [ 'Smartphones', 'Xiaomi' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Redmi Note 8 Pro',
    description: 'El Xiaomi Redmi Note 8 Pro es el smartphone más poderoso de la octava serie Redmi Note. El Redmi Note 8 Pro cuenta con una pantalla Full HD+ de 6.53 pulgadas, y está potenciado por un procesador Mediatek Helio G90T de ocho núcleos con variantes de 6GB de memoria RAM y 64GB de espacio de almacenamiento, o 8GB de memoria RAM con 64GB o 128GB de almacenamiento interno. La cámara posterior del Redmi Note 8 Pro es cuádruple, de 64 MP + 8 MP + 2 MP + 2 MP, mientras que su cámara selfie es de 20 MP. El Redmi Note 8 Pro completa sus características con protección Gorilla Glass 5 y certificación IP52 a prueba de agua, puerto USB-C, NFC, batería de 4500 mAh con carga rápida, sistema de enfriamiento líquido para mantener la temperatura del procesador controlada y corre MIUI 10 basado en Android 9 Pie.',
    price: 310,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/Nfjm20pW/9-1.jpg' ],
    brand: 'Xiaomi',
    color: [ 'Verde', 'Blanco', 'Negro' ],
    category: [ 'Smartphones', 'Xiaomi' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'iPhone SE 2020',
    description: 'El iPhone SE llegó con todo: el procesador más potente en el tamaño más popular, a un precio muy conveniente. Justo lo que estabas esperando. Diseño resistente de vidrio y aluminio. Cuenta con una pantalla Retina HD de 4.7 pulgadas. Su cámara de 12MP viene con el modo Retrato, que difumina el fondo para resaltar al protagonista. Incluso en las selfies. Vuelve el clásico Touch ID que te permite desbloquear tu iPhone de forma segura e iniciar sesión en las apps al instante. El iPhone SE está diseñado para que puedas aprovechar las nuevas funcionalidades y las que están por venir.',
    price: 675,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/FRxk7tcr/10-1.png',
      'https://i.postimg.cc/fy23fxB1/10-2.png'
    ],
    brand: 'Apple',
    color: [ 'Verde', 'Blanco', 'Negro', 'Dorado' ],
    category: [ 'Smartphones', 'Xiaomi' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Aspire 3 15,6"',
    description: 'Su procesador Intel Celeron ICDN4000 junto con su memoria RAM de 4GB, se complementan y ofrecen el máximo rendimiento con mejor consumo de energía. A su vez permite ejecutar cualquier tarea con facilidad. También, guarda tu contenido multimedia y programas favoritos en el disco rígido de 500GB.',
    price: 592,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/ZnVNDkK7/11-1.jpg',
      'https://i.postimg.cc/CMNbK8HG/11-2.jpg'
    ],
    brand: 'Acer',
    category: [ 'Notebooks' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'MacBook Air 2020 13.3"',
    description: 'Llevá toda la potencia a donde quieras con esta MacBook Air 2020, potente, delgada y super liviana. Tiene una pantalla retina de 13.3" LED-backlit 2560 x 1600. Además cuenta con un procesador Intel Core i3, 256GB PCIe-based SSD y una RAM de 8GB. A todo eso sumale sistema operativo MacOs, Bluetooth, WiFi y muchas funcionalidades inteligentes y eficientes.',
    price: 1690,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/CxWq2sSg/12-1.jpg' ],
    brand: 'Apple',
    color: [ 'Dorado', 'Plata', 'Gris' ],
    category: [ 'Notebooks' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Vivobook X512DA',
    description: 'Ya sea en el trabajo o en el tiempo libre, ASUS VivoBook 15 es el equipo compacto que te sumerge en todo lo que te propongas hacer. Su nueva pantalla NanoEdge de cuatro lados sin marco cuenta con un bisel ultraplano de 5,7 mm, que ofrece una sorprendente relación pantalla-cuerpo del 88% que ofrece unas imágenes extremadamente envolventes, el nuevo diseño de bisagra ErgoLift también inclina el teclado hacia arriba para una mayor comodidad a al escribir. VivoBook 15 está equipado con el último procesador Amd Ryzen  y la unidad de almacenamiento de 512 SSD para ayudarte a hacer las cosas con la menor cantidad de molestias.',
    price: 670,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/MK3R78LX/13-1.jpg',
      'https://i.postimg.cc/qvtKQ5fw/13-2.jpg'
    ],
    brand: 'Asus',
    category: [ 'Notebooks' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Vivobook F512JA',
    description: 'Ya sea en el trabajo o en el tiempo libre, ASUS VivoBook 15 es el equipo compacto que te sumerge en todo lo que te propongas hacer. Su nueva pantalla NanoEdge de cuatro lados sin marco cuenta con un bisel ultraplano de 5,7 mm, que ofrece una sorprendente relación pantalla-cuerpo del 88% que ofrece unas imágenes extremadamente envolventes.',
    price: 600,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/65P27f7v/14-1.jpg',
      'https://i.postimg.cc/YSYWBLCm/14-2.jpg',
      'https://i.postimg.cc/SRN29Z7W/14-3.jpg'
    ],
    brand: 'Asus',
    category: [ 'Notebooks' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Pavilion 15',
    description: 'El modelo HP Pavilion  dy1751ms mes un modelo delgado y ultra portátil. Con una batería de larga duración, es fácil mantenerse social, productivo y conectado, cuenta con un procesador i5 de 10ma generación,.8 gb de ram, pantalla de 15″, y un ssd de 512gb. Ideal para uso de oficina, hogar y mas.',
    price: 430,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/7YhJYWL4/15-1.jpg',
      'https://i.postimg.cc/pVqnvHRk/15-2.jpg'
    ],
    brand: 'HP',
    category: [ 'Notebooks' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Airdots WL Earbuds',
    description: 'Los auriculares inalámbricos Xiaomi Airdots poseen micrófono integrado y podés conectarlos mediante Bluetooth a un celular o a una Notebook, poseen un estuche para transportarlos que a su vez funciona como cargador. El tiempo de carga estimado es de 2 horas y la autonomía ronda entre 4 y 5 horas, dependiendo de si estamos usando uno o dos auriculares, así como la música o volumen reproducidos.',
    price: 40,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/t4V1FnPm/16-1.jpg',
      'https://i.postimg.cc/25R1Gj7j/16-2.jpg'
    ],
    brand: 'Xiaomi',
    category: [ 'Audio', 'Auriculares' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'WF XB700 EXTRA BASS',
    description: 'Conectividad Bluetooth estable y confiable, gracias a un chip Bluetooth que transmite el sonido a ambos oídos a la vez y a su diseño de antena optimizado, podrás disfrutar de una conexión estable y una experiencia de audio asombrosa de baja latencia para audio y video.',
    price: 177,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/7L3fWvK3/17-1.jpg',
      'https://i.postimg.cc/26CVpHtP/17-2.jpg'
    ],
    brand: 'Sony',
    category: [ 'Audio', 'Auriculares' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Supraurales Xtrike',
    description: 'Hacé lo que te gusta hacer con la música que te encanta. Estos auriculares supraurales inalámbricos te proporcionan 15 horas de tiempo de reproducción y sonido nítido. Los botones en las almohadillas facilitan el control de la música y las llamadas, y se pliegan por completo para guardarlos de manera sencilla.',
    price: 45,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/FRG1hy51/18-1.jpg',
      'https://i.postimg.cc/brBJtqvh/18-2.jpg',
      'https://i.postimg.cc/rFDzLRhF/18-3.jpg'
    ],
    brand: 'Sony',
    category: [ 'Audio', 'Auriculares' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'In Ear Bluetooth',
    description: 'Los auriculares intrauditivos tienen auriculares magnéticos acanalados que garantizan en forma inteligente el almacenamiento ordenado y fácil. Los imanes están incorporados en la parte trasera de cada auricular de forma tal que permanecen unidos, sin enredos, complicaciones ni desorden.',
    price: 47,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/4Njy44Mv/19-1.jpg',
      'https://i.postimg.cc/3xpRk55s/19-2.jpg'
    ],
    brand: 'Philips',
    category: [ 'Audio', 'Auriculares' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'SHL5005/00',
    description: 'Estos auriculares están diseñados para que disfrutes de la música vayas donde vayas. Las suaves almohadillas te permiten escuchar tus canciones preferidas por más tiempo y el excelente sonido te ofrece una experiencia espectacular.',
    price: 30,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/fbNbX2MJ/20-1.jpg',
      'https://i.postimg.cc/g0H2KV04/20-2.jpg',
      'https://i.postimg.cc/yd6YpDgK/20-3.jpg'
    ],
    brand: 'Philips',
    category: [ 'Audio', 'Auriculares' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'JBL Flip 5',
    description: 'Disfruta de un sonido para llevar con el potente Flip 5 de JBL. Nuestro ligero altavoz Bluetooth va adonde quieras. ¿Hace mal tiempo? No te preocupes. Con un diseño impermeable, puedes disfrutar de tu sonido favorito con lluvia y sol. No pares de moverte.',
    price: 190,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/DfMy5y2V/21-1.jpg',
      'https://i.postimg.cc/hPQ4YWjX/21-2.jpg',
      'https://i.postimg.cc/wjKx8fy0/21-3.jpg'
    ],
    brand: 'JBL',
    color: [ 'Verde', 'Blanco', 'Negro', 'Gris', 'Azul', 'Rojo' ],
    category: [ 'Audio', 'Parlantes' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'JBL Charge 4',
    description: 'Presentamos el altavoz portátil Bluetooth JBL Charge 4 con un potente espectro de sonido completo y un banco de energía incorporado para cargar sus dispositivos. Cuenta con un controlador desarrollado de forma patentada y dos radiadores de graves JBL que intensifican el sonido con graves profundos y potentes. Su batería de iones de litio recargable de alta capacidad de 7500 mAh proporciona hasta 20 horas de tiempo de reproducción.',
    price: 255,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/k5s7S7jp/22-1.jpg',
      'https://i.postimg.cc/rwSV815c/22-2.jpg',
      'https://i.postimg.cc/nrgFLTdV/22-3.jpg'
    ],
    brand: 'JBL',
    color: [ 'Negro', 'Gris', 'Azul', 'Rojo' ],
    category: [ 'Audio', 'Parlantes' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'JBL Go 2',
    description: 'El JBL GO 2 es un altavoz Bluetooth completísimo resistente al agua para llevar contigo a todas partes. Reproduce música de forma inalámbrica a través de Bluetooth hasta 5 horas con calidad de sonido de JBL continua.',
    price: 35,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/KvTFNPqL/23-1.jpg',
      'https://i.postimg.cc/XqGWtdnR/23-2.jpg'
    ],
    brand: 'JBL',
    color: [ 'Celeste', 'Blanco', 'Negro', 'Amarillo', 'Azul', 'Rojo' ],
    category: [ 'Audio', 'Parlantes' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Sony XB12',
    description: 'De diseño compacto y potente, el altavoz inalámbrico portátil SRS-XB12 incorpora EXTRA BASS™ para un sonido profundo e impactante, y batería de hasta 16 horas de duración',
    price: 70,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/KYxZ415T/24-1.jpg',
      'https://i.postimg.cc/FRKNgw8s/24-2.jpg'
    ],
    brand: 'Sony',
    category: [ 'Audio', 'Parlantes' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Bt6900a/00',
    description: 'Mi música nunca se detiene. El parlante portátil inalámbrico Everplay sigue reproduciendo música todo el tiempo y sin interrupción gracias a la potente conexión Bluetooth y las opciones de carga intuitivas.',
    price: 125,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/HLYgdfp4/25-1.jpg',
      'https://i.postimg.cc/cH5ZDXG7/25-2.jpg'
    ],
    brand: 'Philips',
    category: [ 'Audio', 'Parlantes' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Logi BT K780',
    description: 'Escritura silenciosa y fluida con el sistema de teclas Logitech PerfectStroke™. Con un diseño robusto, con grandes teclas cóncavas creadas con esmero, un práctico teclado numérico y todos los accesos directos favoritos.',
    price: 134,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/x8wQQ8Cc/26-1.jpg' ],
    brand: 'Logitech',
    category: [ 'Periféricos', 'Teclados' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Trust MUTO SILENT',
    description: 'Cómodo teclado con una pulsación suave y silenciosa',
    price: 17,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/R0gzFXhr/27-1.jpg',
      'https://i.postimg.cc/4xTGFYq0/27-2.jpg'
    ],
    brand: 'Trust',
    category: [ 'Periféricos', 'Teclados' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Logi K230',
    description: 'La fiable conexión inalámbrica permite trabajar o jugar hasta a 10 metros de distancia sin apenas retrasos ni interrupciones.',
    price: 38,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/W3tcJgqd/28-1.jpg',
      'https://i.postimg.cc/ry0zBtZy/28-2.jpg'
    ],
    brand: 'Logitech',
    category: [ 'Periféricos', 'Teclados' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Wireless Combo MK345',
    description: 'Escribe en una distribución de tamaño normal con 12 teclas F mejoradas para control de medios. Salta una canción, pausa un video o silencia el audio al instante',
    price: 63,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/L8RXgQ9h/29-1.jpg' ],
    brand: 'Logitech',
    category: [ 'Periféricos', 'Teclados', 'Mouses' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Trust Classicline',
    description: 'Teclado resistente a los vertidos, con teclas de tamaño completo para hacer facilitar la escritura',
    price: 17,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/4dMkvypB/30-1.jpg',
      'https://i.postimg.cc/2yZp0Ywm/30-2.jpg'
    ],
    brand: 'Trust',
    category: [ 'Periféricos', 'Teclados' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'NX7000 Wireless',
    description: 'El diseño de suaves curvas es cómodo para cualquier mano y podrá utilizarlo cómodamente durante todo el día.',
    price: 13,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/XXSRhPH5/31-1.jpg',
      'https://i.postimg.cc/xjwqnTBv/31-2.jpg'
    ],
    brand: 'Genius',
    category: [ 'Periféricos', 'Mouses' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Eco8100 Wireless',
    description: 'Este es un mouse pensado para la oficina y los ambientes laborales, y responder en una variedad de superficies. Sin embargo, su plus más interesante es su batería recargable y ecológica que permite usarlo con o sin cable.',
    price: 17,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/VLXv6Pc3/32-1.jpg',
      'https://i.postimg.cc/2Sw5QdyG/32-2.jpg'
    ],
    brand: 'Genius',
    category: [ 'Periféricos', 'Mouses' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Recargable ECO-8015',
    description: 'UNA NUEVA GENERACIÓN DE LA COMODIDAD Inalámbrico y recargable, puede realizar su trabajo de oficina en cualquier lugar sin interrupción.',
    price: 15,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/zfGG0LRr/33-1.jpg',
      'https://i.postimg.cc/wB4TP6hs/33-2.jpg'
    ],
    brand: 'Genius',
    category: [ 'Periféricos', 'Mouses' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Verbatim Optico',
    description: 'Mouse ideal para llevar a los viajes por su reducido tamaño y su cable retractil.',
    price: 9,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/4dKNRr52/34-1.jpg',
      'https://i.postimg.cc/xCWjftpf/34-2.jpg'
    ],
    brand: 'Verbatim',
    category: [ 'Periféricos', 'Mouses' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'MX Ergo Trackball',
    description: 'El trackball más avanzado de Logitech para fieles entusiastas y usuarios que busquen alternativas a mouse y touchpads. Requiere un 20% menos de tensión muscular que un mouse estándar. MX ERGO tiene una bisagra ajustable exclusiva para confort personalizado, y la tecnología más avanzada para seguimiento, desplazamiento y administración de energía.',
    price: 155,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/htSDtJsd/35-1.jpg' ],
    brand: 'Logitech',
    category: [ 'Periféricos', 'Mouses' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Logitech M170',
    description: 'La forma del mouse ofrece un cómodo soporte para la mano durante horas y horas de uso. El diseño ambidiestro y la posibilidad de reasignar las funciones de los botones derecho e izquierdo hacen que M170 sean los mouse ideales para cualquier mano.',
    price: 16,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/7LhqSppP/36-1.jpg',
      'https://i.postimg.cc/HnDHDjjj/36-2.jpg'
    ],
    brand: 'Logitech',
    category: [ 'Periféricos', 'Mouses' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Logitech M110 Silent',
    description: 'Acaba todo tu trabajo sin perder el ritmo y sin molestar a los que te rodean. Los silenciosos mouse SILENT ofrecen la misma sensación de click pero sin el ruido, reducido en más de un 90%.',
    price: 11,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/vTfYcfCW/37-1.jpg' ],
    brand: 'Logitech',
    category: [ 'Periféricos', 'Mouses' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Samsung LS22F350 22"',
    description: 'Perfil increíblemente delgado, diseño elegante y contemporáneo',
    price: 278,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/KcMvqh4R/38-1.jpg',
      'https://i.postimg.cc/28Njg9BT/38-2.jpg',
      'https://i.postimg.cc/DyQfhQrh/38-3.jpg'
    ],
    brand: 'Samsung',
    category: [ 'Periféricos', 'Monitores' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Samsung LC24F390 24"',
    description: 'Disfruta de una experiencia totalmente inmersiva con el nuevo monitor curvo de Samsung. Su curvatura 1800R (radio de curvatura de 1800 mm) te ofrece un mayor campo de visión, mejorando la percepción de profundidad y haciendo que te sumerjas aún más en tu contenido multimedia.',
    price: 379,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/vB6MN5Yp/39-1.jpg',
      'https://i.postimg.cc/d32FqvT6/39-2.jpg',
      'https://i.postimg.cc/sgwVQVH0/39-3.jpg',
      'https://i.postimg.cc/9fkCbLhd/39-4.jpg'
    ],
    brand: 'Samsung',
    category: [ 'Periféricos', 'Monitores' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'HP N246V 24"',
    description: 'Experimente un detalle extraordinario en la gran pantalla del monitor Full HD N246V de 24 pulgadas con una nítida resolución 1920 x 1080 y amplios ángulos de visualización. Las vibrantes imágenes, la práctica conectividad, la adaptabilidad y el precio asequible son ideales para el día a día de cualquier negocio.',
    price: 238,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/qvbTB1gP/40-1.png',
      'https://i.postimg.cc/FKwX31yG/40-2.png',
      'https://i.postimg.cc/NfsSy1hB/40-3.png'
    ],
    brand: 'HP',
    category: [ 'Periféricos', 'Monitores' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'HP 22" FHD 3ML60AA',
    description: 'Disfrute de detalles nítidos con el monitor FHD N223 de 22", que ofrece capacidad de adaptación y precio económico, lo que es ideal para las tareas empresariales cotidianas.',
    price: 241,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/qqLFb73P/41-1.png',
      'https://i.postimg.cc/ydCr7RXq/41-2.png',
      'https://i.postimg.cc/kgh0PDp9/41-3.png'
    ],
    brand: 'HP',
    category: [ 'Periféricos', 'Monitores' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Samsung LC27FG73 27”',
    description: 'El monitor Samsung LC27FG73 de 27 pulgadas cuenta con una resolución Full HD (1920 x 1080 píxeles) de formato widescreen 16:9 y un contraste 3000:1. Su pantalla curva te permite concentrarte al máximo para que ganes más veces. Jugarás más tiempo con menor fatiga visual. Su Tiempo de respuesta de 1 ms (MPRT) te permite disfrutar de un rendimiento de juego sin precedentes en toda la pantalla. Además, la velocidad de actualización de la pantalla rápida de 144Hz minimiza el retraso de la imagen y el desenfoque de movimiento para un juego fluido.',
    price: 1074,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/J7ZM33dX/42-1.jpg',
      'https://i.postimg.cc/65KwM7Dm/42-2.jpg',
      'https://i.postimg.cc/Kv5bwGbv/42-3.jpg',
      'https://i.postimg.cc/vZHydJ87/42-4.jpg'
    ],
    brand: 'Samsung',
    category: [ 'Gaming Zone', 'Monitores' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'HP E-243M Elite 23.8"',
    description: 'El monitor HP E-243M Elite de 23,8 pulgadas cuenta con resolución Full HD (1920 x 1080 a 60 Hz) de formato widescreen 16:9 y un contraste 1000:1. La pantalla utiliza la tecnología IPS con retroiluminación LED. Por otro lado, suma una Webcam HD 720p emergente integrada con micrófonos duales digitales.',
    price: 606,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/8cB22Hqn/43-1.jpg',
      'https://i.postimg.cc/MGn8n1Qv/43-2.jpg',
      'https://i.postimg.cc/SRq5f9JL/43-3.png'
    ],
    brand: 'HP',
    category: [ 'Periféricos', 'Monitores' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PS4 1TB',
    description: 'La PlayStation 4 presenta un elegante diseño y cuenta con nuevos detalles como los botones táctiles de encendido o eject que no se ven a simple vista. Es más ligera y más delgada que el modelo original, y también puede colocarse en forma vertical, con un soporte que se vende por separado.',
    price: 796,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/50vd31pJ/44-1.jpg' ],
    brand: 'Sony',
    category: [ 'Gaming Zone', 'Consolas' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Nintendo Switch 32GB',
    description: 'La consola Nintendo Switch está diseñada para cualquier estilo de vida, transformándose rápidamente de una consola casera a una consola portátil.',
    price: 923,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/qMpV8PKf/45-1.jpg' ],
    brand: 'Nintendo',
    category: [ 'Gaming Zone', 'Consolas' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Xbox One S 1TB',
    description: 'Gracias a su disco rígido de 1 TB y a la retro-compatibilidad, en la Xbox One S vas a poder guardar juegos e inclusive jugar tus títulos de Xbox 360. Además, están disponibles tanto los títulos digitales como los físicos que formen parte del catálogo. ',
    price: 758,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/Ghz0zXP4/46-1.jpg',
      'https://i.postimg.cc/7h614Pc8/46-2.png'
    ],
    brand: 'Microsoft',
    category: [ 'Gaming Zone', 'Consolas' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'FIFA 2020 PS4',
    description: 'Con el FIFA 2020 vas a sumergirte en todas las experiencias futbolísticas de la temporada 2019-2020. Disfrutá de varios modos, clubes, estadios y reconocidos jugadores. Las mejores ligas y torneos del mundo, como la Champions League, Premier League o la Bundesliga están disponibles. También los clubes más populares del planeta como el F.C Barcelona, el Manchester United y el Real Madrid. Vas a poder tener experiencias de fútbol más reales y sentir la manera en que los jugadores piensan y se mueven. Inclusive, vas a tener nuevas opciones de ataque y podrás interactuar físicamente con tus oponentes.',
    price: 38,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/BvLdSsrF/47-1.jpg' ],
    brand: 'Electronic Arts',
    color: [ 'N/A' ],
    category: [ 'Gaming Zone', 'Videojuegos' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Sony Uncharted 4',
    description: 'Uncharted 4: A Thiefs End es un videojuego de acción-aventura y exploración en tercera persona. Junto a Nathan Drake, protagonista de toda la saga, y Sam, hermano de Drake, lucharemos por desenmascarar una conspiración histórica del reconocido aventurero Henry Avery y su legendario tesoro pirata. En esta entrega final pon a prueba tus habilidades físicas, determinación y lo que estás dispuesto a sacrificar para salvar a tus seres queridos mientras recorres islas selváticas, grandes ciudades y nevados picos montañosos en busca del tesoro de Avery.',
    price: 14,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/rpB7z3TP/48-1.png' ],
    brand: 'Sony',
    color: [ 'N/A' ],
    category: [ 'Gaming Zone', 'Videojuegos' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Grand Theft Auto V',
    description: 'Grand Theft Auto V es un videojuego en tercera persona parte de una saga que lleva el mismo nombre. En esta entrega, la trama también ocurre en San Andreas, Estado ficticio que contiene a tres ciudades metropolitanas: Los Santos, San Fierro y Las Venturas. Como en ediciones anteriores en este videojuego de acción podrás robar y manejar una gran variedad de vehículos, incluyendo coches, barcos, helicópteros y motocicletas. A su vez, podrás correr, nadar, trepar y saltar, así como utilizar armas y luchar cuerpo a cuerpo. Esta edición incluye: Grand Theft Auto V, Grand Theft Auto Online y The criminal Enterprise starter pack.',
    price: 38,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/wvDZN2TT/49-1.jpg' ],
    brand: 'Rock Star Games',
    color: [ 'N/A' ],
    category: [ 'Gaming Zone', 'Videojuegos' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Mortal Kombat 11',
    description: 'Mortal Kombat 11 es la última entrega de la famosa saga de combate y peleas. La historia se sitúa luego de Mortal Kombat X. Tras la derrota de Shinnok, Raiden se ve forzado a absorber toda la corrupción y maldad lanzadas por el Dios caído. Su tarea es eliminar a cualquiera que considere una amenaza contra el reino de la Tierra. El nuevo motor gráfico usado en esta edición permite mostrar peleas más espectaculares, con un nuevo sistema de cámaras que muestra al detalle los momentos más emocionantes de la lucha. Además de regresar personajes como Raiden, Scorpio o Shao Khan, tendremos versiones como Liu Kang de joven, al esperado Sub-Zero, Skarlet, Ermac, Sonya Blade o incluso a Kabal. Personajes como Cassie, Johnny Cage, Reptile y demás clásicos están también en una plantilla de 25 personajes de inicio.',
    price: 68,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/pVY3Xs6s/50-1.jpg' ],
    brand: 'Warner Bros Games ',
    color: [ 'N/A' ],
    category: [ 'Gaming Zone', 'Videojuegos' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Ghost of Tsushima',
    description: 'Ghost of Tsushima es un juego de acción y aventuras que ocurre a finales del siglo XIII, luego de que el imperio mongol arrasara con naciones enteras en su campaña por conquistar Oriente. La isla de Tsushima es el único obstáculo que se interpone entre la isla principal de Japón y una gigantesca flota invasora liderada por el astuto y despiadado general Khotun Khan. Cuando Tsushima se hunde en el caos tras el primer ataque de los mongoles, el guerrero samurái Jin Sakai es uno de los últimos sobrevivientes de su clan. Jin está decidido a hacer lo que sea necesario, a cualquier costo, para proteger a su pueblo y recuperar su hogar.',
    price: 63,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/Hs6KbVH5/51-1.jpg' ],
    brand: 'Sony',
    color: [ 'N/A' ],
    category: [ 'Gaming Zone', 'Videojuegos' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Halo 5 Guardians',
    description: 'Halo 5: Guardians empieza cuando termina su antecesor, Halo 4. El videojuego, que muestra una historia vista desde dos bandos, se centra en la deserción del Jefe Maestro y la caza del mismo por parte de la Oficina de Inteligencia Naval.',
    price: 20,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/t47ckpCc/52-1.jpg' ],
    brand: 'Sony',
    color: [ 'N/A' ],
    category: [ 'Gaming Zone', 'Videojuegos' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Minecraft Favorite Pack',
    description: 'Minecraft es un juego de mundo abierto en primera persona que ofrece una gran libertad en cuanto a la elección de su forma de jugar. Toda la diversión pasa por la colocación y destrucción de bloques y la construcción de un entorno cotidiano. Viviremos las aventuras de Jesse y su grupo de amigos a lo largo de una historia repleta de emoción, humor y toma de decisiones. Esta edición incluye 7 packs descargables.',
    price: 20,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/C1Cr5KmR/53-1.jpg' ],
    brand: 'Mojang',
    color: [ 'N/A' ],
    category: [ 'Gaming Zone', 'Videojuegos' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Mad Catz F.R.E.Q. 4',
    description: 'Sonido envolvente virtual 7.1: Sumérjase completamente en su juego con el control Cancelación de ruidos ambientales (ENC): Los dos micrófonos omnidireccionales eliminan el ruido externo Zonas de iluminación personalizables: Personalice la iluminación RGB con el software incluido. Micrófono retráctil omnidireccional: el micrófono omnidireccional permite una mayor flexibilidad de detección de sonido Calce ajustable y ergonómico: diseñado para ofrecer comodidad, incluso después de horas de uso, con diadema ajustable y almohadillas de espuma de poliuretano livianas.',
    price: 118,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/3NKSvHcn/54-1.jpg',
      'https://i.postimg.cc/VkTVHpJk/54-2.jpg',
      'https://i.postimg.cc/L5NykbdR/54-3.jpg'
    ],
    brand: 'Mad Catz',
    category: [ 'Gaming Zone', 'Accesorios', 'Auriculares' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Havit h2232d',
    description: 'Auriculares Gamer con vincha regulable, microfono flexible con luz led en la punta, orejeras envolventes para disfrutar los juegos. Luces led RGB, conector 3,5mm compatible con consolas de videojuegos PS4 y XBOX, conector USB para alimentar las luces led.',
    price: 70,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/TPD480bq/55-1.jpg',
      'https://i.postimg.cc/g2wMRsgF/55-2.jpg',
      'https://i.postimg.cc/qMvDB4n7/55-3.jpg'
    ],
    brand: 'Havit',
    category: [ 'Gaming Zone', 'Accesorios', 'Auriculares' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Havit h2011d',
    description: 'Auriculares Gamer con vincha regulable, microfono flexible, orejeras envolventes para disfrutar los juegos. Conector USB para alimentar luces led, y 2 x plug 3,5mm audio y mic para PC',
    price: 63,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/445FTmYM/56-1.jpg' ],
    brand: 'Havit',
    category: [ 'Gaming Zone', 'Accesorios', 'Auriculares' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'S.T.R.I.K.E. 2',
    description: 'Equipado con iluminación RGB y la mejor durabilidad de su clase, S.T.R.I.K.E.2 brinda la sensación de un teclado mecánico genuino, a un precio notablemente asequible.',
    price: 73,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/3wmnfRMt/57-1.jpg',
      'https://i.postimg.cc/PxHKgjTT/57-2.jpg'
    ],
    brand: 'Mad Catz',
    category: [ 'Gaming Zone', 'Teclados y Mouses Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Scorpion K9 USB',
    description: 'Las teclas del teclado gaming Scorpion K9 tienen la mitad de altura que un teclado regular y duran hasta 10 millones de pulsaciones.',
    price: 40,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/T3Ztcbsy/58-1.jpg',
      'https://i.postimg.cc/pTBkx6L8/58-2.jpg'
    ],
    brand: 'Genius',
    category: [ 'Gaming Zone', 'Teclados y Mouses Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Me Kb-705',
    description: 'Teclado estándar americano 104 teclas Xtrike-me KB-705 Anti-ghosting: soporte para superposición de 19 teclas Rendimiento optimizado para juegos, funciones multimedia Retroalimentación de arco iris mixto de 7 colores',
    price: 33,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/vHTXFXFg/59-1.jpg' ],
    brand: 'Xtrike',
    category: [ 'Gaming Zone', 'Teclados y Mouses Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'S.T.R.I.K.E. 4',
    description: 'Teclado gamer con Interruptor Cherry MX Red para una respuesta rápida y un funcionamiento suave. Tecnología anti-ghosting para juegos sin errores a un nivel competitivo. Iluminación RGB Chameleon de 16,8',
    price: 170,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/QC4bKK5d/60-1.jpg',
      'https://i.postimg.cc/PJryqQC7/60-2.jpg'
    ],
    brand: 'Mad Catz',
    category: [ 'Gaming Zone', 'Teclados y Mouses Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'GX X-G600',
    description: 'Diseño ergonómico y excelente terminación de agarre en caucho que le permitirá tener un control total durante prolongadas sesiones de juego.',
    price: 29,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/vmrtLN9j/61-1.jpg',
      'https://i.postimg.cc/c1XTb2jG/61-2.jpg'
    ],
    brand: 'Genius',
    category: [ 'Gaming Zone', 'Teclados y Mouses Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'G703 LIGHTSPEED',
    description: 'Mouse Gamer Inalambrico con 16000 dpi sensor HERO iluminacion RGB LIGHTSPEED',
    price: 142,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/m2njbMBd/62-1.jpg',
      'https://i.postimg.cc/Z5yc0RqJ/62-2.jpg',
      'https://i.postimg.cc/6QJhZX7n/62-3.jpg'
    ],
    brand: 'Logitech',
    category: [ 'Gaming Zone', 'Teclados y Mouses Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Xtrike Me GM-510',
    description: 'Presentacion Diseño de alto perfil con soporte total para la palma. Control mejorado para estilos de agarre de palma y garras Selección rápida de DPI de 6 pasos hasta 6400 Retroiluminación RGB con efecto de respiración',
    price: 34,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/cCbRLyyK/63-1.png' ],
    brand: 'Xtrike',
    category: [ 'Gaming Zone', 'Teclados y Mouses Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'G502 LIGHTSPEED',
    description: 'Mouse Gamer Inalambrico con 16000 dpi sensor HERO iluminacion RGB LIGHTSPEED 11 botones',
    price: 190,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/Hx30F869/64-1.jpg' ],
    brand: 'Logitech',
    category: [ 'Gaming Zone', 'Teclados y Mouses Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PC GAMER',
    description: '– INTEL CORE I7 9700F – MOTHERBOARD ASROCK – RAM 16GB 2666 – SSD 240GB – TARJETA VIDEO RTX 2060 6GB – FUENTE 600W REALES – GABINETE GAMER – Conexión WIFI y por cable RJ45',
    price: 1599,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/VsGBRMrY/65-1.jpg' ],
    brand: 'Intel',
    category: [ 'Gaming Zone', 'PCs Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PC GAMER',
    description: '– REF. LIQUIDA – INTEL CORE I7 9700F – MOTHERBOARD ASROCK – RAM 16GB 2666 – SSD 240GB – HDD 2TB SATA3 – TARJETA VIDEO RX580 8GB – FUENTE 600W REALES – GABINETE GAMER – Conexión WIFI y por cable RJ45',
    price: 1499,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/VsGBRMrY/65-1.jpg' ],
    brand: 'Intel',
    category: [ 'Gaming Zone', 'PCs Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PC GAMER',
    description: '– MONITOR GAMER 22″ Gamer – AMD RYZEN 5 2600 – MOTHERBOARD GIGABYTE – RAM 8GB 2666 – HDD 1TB WD BLUE SATA3 – TARJETA VIDEO AMD RX580 8GB – FUENTE 600W REALES – GABINETE GAMER – Conexión WIFI y por cable RJ45',
    price: 1179,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/VsGBRMrY/65-1.jpg' ],
    brand: 'AMD',
    category: [ 'Gaming Zone', 'PCs Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PC GAMER',
    description: '– INTEL CORE I7 9700F – MOTHERBOARD ASROCK – RAM 16GB 2666 – SSD 240GB – HDD 1TB 7200RPM – TARJETA VIDEO RX570 8GB – FUENTE 600W REALES – GABINETE GAMER – Conexión WIFI y por cable RJ45',
    price: 1358,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/VsGBRMrY/65-1.jpg' ],
    brand: 'Intel',
    category: [ 'Gaming Zone', 'PCs Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PC GAMER',
    description: '– INTEL CORE I5 9400F – MOTHERBOARD GIGABYTE – RAM 16GB 2666 Dual Channel – SSD 480GB – GEFORCE RTX 2060 6GB – FUENTE 600W REALES – GABINETE GAMER – Conexión WIFI y por cable RJ45',
    price: 1358,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/VsGBRMrY/65-1.jpg' ],
    brand: 'Intel',
    category: [ 'Gaming Zone', 'PCs Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PC GAMER',
    description: '– INTEL CORE I7 9700F – MOTHERBOARD GIGABYTE – RAM 8GB 2666MHZ – HDD 1TB 7200RPM – TARJETA VIDEO RX570 8GB – FUENTE 600W REALES – GABINETE GAMER – Conexión WIFI y por cable RJ45',
    price: 1199,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/VsGBRMrY/65-1.jpg' ],
    brand: 'Intel',
    category: [ 'Gaming Zone', 'PCs Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PC GAMER',
    description: '– INTEL CORE I5 9400F – MOTHERBOARD GIGABYTE – RAM 8GB 2666 – SSD 240GB – HDD 1TB 7200RPM – TARJETA VIDEO RX580 8GB – FUENTE 600W REALES – GABINETE GAMER – Conexión WIFI y por cable RJ45',
    price: 999,
    stock: true,
    quantity: 100,
    pictures: [ 'https://i.postimg.cc/VsGBRMrY/65-1.jpg' ],
    brand: 'Intel',
    category: [ 'Gaming Zone', 'PCs Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'MSI GL73',
    description: 'La notebook GeForce® GTX 1660 Ti está construida con el desempeño gráfico de vanguardia de la arquitectura premiada NVIDIA Turing™. Con un desempeño que rivaliza con la tarjeta gráfica GeForce GTX 1070, es un supercargador velocísimo para los juegos más populares de hoy, y aún más rápido con los títulos más modernos.',
    price: 1279,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/5tVw0SGm/72-1.jpg',
      'https://i.postimg.cc/zfFTRRYY/72-2.jpg'
    ],
    brand: 'MSI',
    category: [ 'Gaming Zone', 'Notebooks Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'MSI GL63',
    description: 'El ROG Strix G incorpora un diseño optimizado, que ofrece una experiencia central formidable para juegos serios y multitarea en Windows 10 Pro. Con los últimos procesadores Intel Core de novena generación y gráficos GeForce RTX ™, ofrece un rendimiento de juego impactante para una amplia audiencia. La refrigeración inteligente libera todo el potencial de sus procesadores de vanguardia, mientras que RangeBoost proporciona la señal Wi-Fi más fuerte posible para su entorno. Donde sea que juegues, ilumina los alrededores con Aura Sync en la nueva barra de luces de triple filo y el teclado RGB de 4 zonas.',
    price: 1099,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/ZRYpPKJB/73-1.jpg',
      'https://i.postimg.cc/bwbxpB6J/73-2.jpg'
    ],
    brand: 'Asus',
    category: [ 'Gaming Zone', 'Notebooks Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'MSI GS66 Stealth',
    description: 'La notebook GeForce® GTX 1660 Ti está construida con el desempeño gráfico de vanguardia de la arquitectura premiada NVIDIA Turing™. Con un desempeño que rivaliza con la tarjeta gráfica GeForce GTX 1070, es un supercargador velocísimo para los juegos más populares de hoy, y aún más rápido con los títulos más modernos.',
    price: 1199,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/YqTNcHzZ/74-1.jpg',
      'https://i.postimg.cc/4d8tWk38/74-2.jpg'
    ],
    brand: 'MSI',
    category: [ 'Gaming Zone', 'Notebooks Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'ROG Zephyrus',
    description: 'GS66 Stealth es una laptop robusta y muy portátil con procesador hasta 10ma Gen. Intel® Core™ i9 y gráficos NVIDIA® GeForce RTX 2080 SUPER™. Para liberar todo su potencial, el nuevo sistema de refrigeración exclusivo Cooler Boost Trinity+ con aspas de apenas 0.1 mm de espesor maximiza el flujo de aire. La batería de 99.9Whr y la frecuencia de actualización rapidísima de 300Hz aseguran una productividad sin pausa y un juego fluido.',
    price: 1699,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/9Q398BWj/75-1.jpg',
      'https://i.postimg.cc/Zn2Nh8pp/75-2.png'
    ],
    brand: 'MSI',
    category: [ 'Gaming Zone', 'Notebooks Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'OMEN 2S 15',
    description: 'La revolucionaria laptop de gaming ROG Zephyrus es el fruto de la determinación de ROG por innovar constantemente. Aunque es más fina que el resto de las laptops de ROG, lleva el hardware necesario para desafiar a ordenadores de mesa de alta gama: gráficos NVIDIA® GeForce® GTX 1080 con diseño Max-Q, procesador Intel® Core™ de 7ª generación, una pantalla opcional de 120 Hz y Windows 10. Gracias al nuevo Sistema Aerodinámico Activo (AAS), ROG ha conseguido reducir el grosor del chasis a 16,9-17,9 mm sin renunciar a una refrigeración de vanguardia ni a bajas emisiones de ruido. También incluye un teclado RGB que resultará familiar a los gamers acostumbrados a jugar con PC de mesa.',
    price: 1519,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/9QG7vqMw/76-1.jpg',
      'https://i.postimg.cc/HLdyHscZ/76-2.jpg',
      'https://i.postimg.cc/J7vH0QHB/76-3.jpg'
    ],
    brand: 'Asus',
    category: [ 'Gaming Zone', 'Notebooks Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'ROG Strix G15',
    description: 'Nunca vio una notebook como esta. Elegante, potente y equipada con dos pantallas que duplican las ventajas, el futuro de los juegos portátiles comienza aquí. El primer diseño de dos pantallas de la industria le permite jugar en pantalla completa y mantener pestañas en otras aplicaciones en una segunda pantalla montada sobre el teclado. No importa donde lo lleve el juego, esta gran máquina está diseñada para multiplicar su potencia.',
    price: 5886,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/CMQkDgX5/77-1.jpg',
      'https://i.postimg.cc/YqLgzPB3/77-2.jpg'
    ],
    brand: 'HP',
    category: [ 'Gaming Zone', 'Notebooks Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Blade Stealth 13',
    description: 'ROG Strix G15 incorpora un diseño aerodinámico, ofreciendo un formidable experiencia central para juegos serios y multitarea en Windows 10 Pro. Presentando hasta la última generación Intel ® CPU Core ™ i7 y una GPU SUPER GeForce RTX ™ 2070, ofrece un alto FPS Potencia que aprovecha al máximo hasta 240Hz / 3ms. monitor. Innovaciones de enfriamiento inteligentes como toma de metal líquido rendimiento a otro nivel. Conectividad Wi-Fi 6 ultrarrápida y hasta 2 SSD que se ejecutan en RAID 0 aceleran el trabajo y el juego. Espacio para un tercero SSD significa que puedes actualizar tu almacenamiento para llevar tus juegos completos colección donde quiera que vaya.',
    price: 1499,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/tTmZh3rw/78-1.jpg',
      'https://i.postimg.cc/SN92Mzc1/78-2.png'
    ],
    brand: 'Asus',
    category: [ 'Gaming Zone', 'Notebooks Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Galaxy Z Flip',
    description: 'El Razer Blade Stealth 13 sigue siendo el portátil para juegos más portátil que existe. Su marco unibody está reforzado con mecanizado CNC de precisión de aluminio de alta calidad, y el color negro sigiloso está anodizado en el aluminio a un nivel submolecular para una máxima durabilidad. El diseño presenta un logotipo de Razer tono sobre tono para una apariencia elegante.',
    price: 1799,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/vTg1X4kB/79-1.jpg',
      'https://i.postimg.cc/NF3Kngvx/79-2.jpg'
    ],
    brand: 'Razer',
    category: [ 'Gaming Zone', 'Notebooks Gamer' ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Samsung Galaxy Z Flip',
    description: 'Su diseño increíblemente compacto que se pliega volviéndose sorprendentemente pequeño, junto con su pantalla Infinity Flex amoled dinámica inmersiva la cual ofrece una visualización cinematográfica, hacen del Samsung Z Flip una experiencia smartphone reinventada.',
    price: 1990,
    stock: true,
    quantity: 100,
    pictures: [
      'https://i.postimg.cc/FKpJK509/80-1.jpg',
      'https://i.postimg.cc/pTd5hGBK/80-2.jpg'
    ],
    brand: 'Samsung',
    color: [ 'Violeta', 'Blanco', 'Negro' ],
    category: [ 'Smartphones', 'Samsung' ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
, {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {})
  }
};
