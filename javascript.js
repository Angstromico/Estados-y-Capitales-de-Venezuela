//JQuery desplegar estados y capitales
$(document).ready(function(){
    $("#1").click(function(){
      $(".panel1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#2").click(function(){
      $(".panel2").slideToggle("slow");
    });
});
//Agregar contenido a la lista
var estados = document.getElementsByTagName('a');
var listas = document.getElementsByTagName('li');
for(let i = 3; i <= 46; i++) {
    let estado = estados[i].id;
    let capital = estados[i];
      lista = listas[i -1].textContent;
    console.log(estado);
    console.log(estados[i]); 
    console.log(lista); 
    const div = document.createElement('DIV');
    div.classList.add(`panel${estado}`);
    div.style.display = 'none';
    div.style.backgroundImage = `url('img/${estado}.jpg')`
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundSize = 'cover';
    div.style.resize = 'both';
    const h2 = document.createElement('H2');
    if(i < 25) {
        h2.innerHTML = `Estado ${lista}`;
    } else {
        h2.innerHTML = `Capital ${lista}`
    };
    const h3 = document.createElement('H3');
    //h3.classList.add('h');
    h3.innerHTML = `Fundación:<span>Fecha</span>`;
    const p = document.createElement('P');
    //p.classList.add('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    div.append(h2);
    div.append(h3);
    div.append(p);
    capital.append(div);
    console.log(capital);
    const fundaciones = document.querySelectorAll('h3');
    const fechas = [...fundaciones];
    const contenido = document.querySelectorAll('p');
    const parrafos = [...contenido];
    console.log(h3.innerHTML);
    //carabobo.textContent = 'Carabobo es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es Valencia. Está ubicado en el centro-norte del país, en la región Central. Limita al norte con el golfo Triste (mar Caribe, océano Atlántico), al este con Aragua, al sur con Guárico y Cojedes, y al oeste con Yaracuy. Con 4650 km² es el tercer estado menos extenso por delante de Vargas y Nueva Esparta, el menos extenso, con 2.886.093 habitantes en 2016, el tercero más poblado —por detrás de Zulia y Miranda y con 713 hab/km², el más densamente poblado.'
    $(document).ready(function(){
        $(`#${estado}`).click(function(){
          $(`.panel${estado}`).slideToggle("slow");
        });
    });
}
//Contenido a los hijos de la lista
    const fundaciones = document.querySelectorAll('h3');
    const fechas = [...fundaciones];
    const contenido = document.querySelectorAll('p');
    const parrafos = [...contenido];
    console.log(fechas[2].innerHTML);
    console.log(parrafos[5].textContent);
    fechas[2].innerHTML = `Fundación: <span>25 de junio de 1824</span>`;
    parrafos[5].textContent = 'Carabobo es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es Valencia. Está ubicado en el centro-norte del país, en la región Central. Limita al norte con el golfo Triste (mar Caribe, océano Atlántico), al este con Aragua, al sur con Guárico y Cojedes, y al oeste con Yaracuy. Con 4650 km² es el tercer estado menos extenso por delante de Vargas y Nueva Esparta, el menos extenso, con 2.886.093 habitantes en 2016, el tercero más poblado —por detrás de Zulia y Miranda y con 713 hab/km², el más densamente poblado.'
    fechas[3].innerHTML = `Fundación; <span>29 de agosto de 1881</span>`;
    parrafos[6].textContent = 'Lara es uno de los veintitrés estados​ que, junto con el Distrito Capital y las Dependencias Federales, forman Venezuela.​ Su capital es Barquisimeto. Está ubicado en la región Centroccidental del país, limitando al norte con Falcón, al este con Yaracuy, al sur con Portuguesa, al suroeste con Trujillo y al oeste con Zulia. Con 2 234 763 habitantes en 2018, es el cuarto estado más poblado, después de Zulia, Miranda y Carabobo.5 Posee 9 municipios autónomos y 57 parroquias civiles. Sus principales ciudades son: Barquisimeto, Carora, El Tocuyo, Quíbor y Cabudare.';
    function fechasResumidas(a) {
      const fecha = `Fundación: <span>${a}</span>`;
      return fecha;
    }
    fechas[4].innerHTML = fechasResumidas('3 de mayo de 1855');
    parrafos[7].textContent = 'Cojedes es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es San Carlos. Está ubicado en el centro-noroeste del país, en la región Central del país. Limita al norte con Yaracuy y Carabobo, al este con Guárico, al sur con Barinas, al oeste con Portuguesa y al noroeste con Lara. Con 416.327  habitantes, en 2018 fue el tercer estado menos poblado, por delante de Delta Amacuro y Amazonas.​ Posee 9 municipios autónomos y 15 parroquias civiles. Sus principales ciudades son: San Carlos, Tinaquillo, Tinaco, Las Vegas (Romulo Gallegos), El Pao y Macapo.';
    fechas[5].innerHTML = fechasResumidas('17 de julio de 1823');
    parrafos[8].textContent = 'Apure es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman Venezuela. Su capital es San Fernando de Apure. Está ubicado al suroeste del país, en la región de Los Llanos, limitando al norte con Táchira, Barinas y Guárico, al este con Bolívar, al sureste con Amazonas y al sur con Colombia. Con 76 500 km² es el tercer estado más extenso por detrás de Bolívar y Amazonas, con 555 909 habitantes. en 2011, el quinto menos poblado por delante de La Guaira, Cojedes, Delta Amacuro y Amazonas y con 6 hab/km², el tercero menos densamente poblado, por delante de Delta Amacuro y Amazonas.';
    fechas[6].innerHTML = fechasResumidas('1899');
    parrafos[9].textContent = 'Yaracuy es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es San Felipe. Está ubicado en la región centro-occidental del país, limitando al norte con Falcón, al noreste con el golfo Triste (mar Caribe, océano Atlántico), al este con Carabobo, al sur con Cojedes y al oeste con Lara. Con 7100 km² es el quinto estado menos extenso —por delante de Aragua, Carabobo, Vargas y Nueva Esparta, el menos extenso y con 785 125 habitantes. en 2017.';
    fechas[7].innerHTML = fechasResumidas('28 de octubre de 1899');
    parrafos[10].textContent = 'Monagas es uno de los veintitrés Estados que, junto con el Distrito Capital y las Dependencias Federales, forman el territorio de Venezuela. Su capital es Maturín.';
    fechas[8].innerHTML = fechasResumidas('27 de mayo de 1874');
    parrafos[11].textContent = 'Bolívar es uno de los veintitrés estados que, junto con el distrito capital y las dependencias federales, forman la República Bolivariana de Venezuela. Su capital es Ciudad Bolívar y su ciudad más poblada, Ciudad Guayana.';
    fechas[9].innerHTML = fechasResumidas('3 de agosto de 1991');
    parrafos[12].textContent = 'Delta Amacuro es uno de los 23 estados de Venezuela. Su capital es Tucupita, está ubicado al noreste del país en la región Guayana, limitando al norte con el golfo de Paria (océano Atlántico), al este con el océano Atlántico y el territorio reclamado de Guayana Esequiba, al sur con el estado Bolívar y al oeste con Monagas. Con 167 522 habitantes en 2011, es el segundo estado menos poblado por delante de Amazonas, con 40 200 km², el séptimo más extenso por detrás de Bolívar, Amazonas, Apure, Guárico, Zulia y Estado Anzoátegui y con 4,65 hab/km², el segundo menos densamente poblado, por detrás de Amazonas.';
    fechas[10].innerHTML = fechasResumidas('10 de octubre de 1859');
    parrafos[13].textContent = 'Barinas del nombre «varinas» es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman Venezuela. Su capital es la ciudad homónima de Barinas.​ Forma parte del Suroccidente del país y ocupa gran parte de los llanos occidentales al margen izquierdo del río Apure, al igual que gran parte de la sierra del Piedemonte andino, en el Oriente de la cordillera de Mérida. Político-administrativamente forma parte de la región de los Andes y Los Llanos limita al norte con los estados Cojedes, Portuguesa y Trujillo; al este con el estado Guárico; al sur con el estado Apure y al oeste con los estados Mérida y Táchira. Con 35 200 km² es la octava entidad por extensión, y con un estimado de más de 960 000 habitantes y por tanto una densidad de 37.3 hab./km² es la décimo primera por población y la décimo séptima por densidad poblacional; Es un importante centro económico del llano venezolano destacando la industria ganadera y petrolera.';
    fechas[11].innerHTML = fechasResumidas('10 de abril de 1851');
    parrafos[14].textContent = 'Portuguesa es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es Guanare. Está ubicada en la región centroccidental limitando al norte con Lara, al este con Cojedes, al sur con Barinas y al oeste con Trujillo.​ Posee 14 municipios autónomos y 39 parroquias civiles. Sus principales ciudades son: Guanare, Acarigua y Araure.';
    fechas[12].innerHTML = fechasResumidas('23 de diciembre de 1889');
    parrafos[15].textContent = 'El estado Miranda es uno de los veintitrés estados de Venezuela, cuya capital es Los Teques. Está ubicado en el centro-norte del país, en la región Capital. Limita al norte con el estado La Guaira, el Distrito Capital y mar Caribe, al este con el mar Caribe, al sureste con el estado Anzoátegui, al sur con el estado Guárico y al oeste con el estado Aragua. Con 3 739 845 habitantes en 2016, es el segundo estado más poblado con 7950 km², el noveno menos extenso y con 336,5 hab/km², el cuarto más densamente poblado.';
    fechas[13].innerHTML = fechasResumidas('1717');
    parrafos[16].textContent = 'Mérida es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es la homónima Mérida. Está ubicado al oeste del país, en la región de los Andes. Limita al norte con Zulia, al noreste con Trujillo, al este con Barinas y al suroeste con Táchira.';
    fechas[14].innerHTML = fechasResumidas('1863');
    parrafos[17].textContent = 'Trujillo es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es la homónima Trujillo y su ciudad más poblada, Valera. Está ubicado al oeste del país, en la región de los Andes. Limita al norte con Zulia y Lara, al este con Portuguesa, al sur con Barinas, al suroeste con Mérida y al oeste con el lago Maracaibo. Con 7400 km² es el sexto estado menos extenso por delante de Yaracuy, Aragua, Carabobo, Vargas y Nueva Esparta, el menos extenso y con 945 921 habitantes. en 2018, el octavo menos poblado, por delante de Yaracuy, Nueva Esparta, Apure, Vargas, Cojedes, Delta Amacuro y Amazonas, el menos poblado.';
    fechas[15].innerHTML = fechasResumidas('22 de abril de 1864 ');
    parrafos[18].textContent = 'Zulia​ es uno de los veintitrés Estados de Venezuela. Su capital es Maracaibo. Está ubicado al noroeste y limitando al norte con el Mar Caribe, al este con Falcón, Lara y Trujillo, al sureste con Mérida, al sur con Táchira y al oeste, desde la Península de La Guajira hasta las montañas de Perijá, con Colombia. Con 63 100 km² es el quinto Estado más extenso y con 4 957 765 habitantes en 2016, el más poblado.';
    fechas[16].innerHTML = fechasResumidas('13 de enero de 1830');
    parrafos[19].textContent = 'Nueva Esparta es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Es un archipiélago formado por tres islas Margarita, Coche y Cubagua. Su capital es La Asunción y su ciudad más poblada, Porlamar.';
    fechas[17].innerHTML = fechasResumidas('29 de julio de 1992');
    parrafos[20].textContent = 'El Estado Indígena de Amazonas o Amazonas es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman Venezuela. Su capital, Puerto Ayacucho, concentra el 63% de la población total. Está ubicado al sur del país, en la región Guayana, limitando al norte con el Estado Bolívar, al noroeste con el Estado Apure en una pequeña línea en la confluencia del río Meta, al este y sur con Brasil mediante la  divisoria de aguas de las cuencas del Orinoco y Amazonas, y al oeste con Colombia mayormente usando como fronteras los ríos Atabapo, Orinoco y Negro. Con un estimado de 190 000 habitantes es el estado menos poblado, con una superficie de 177 617 km2, el segundo estado más extenso, y con 1 hab/km², el que menos densidad poblacional tiene. Está compuesto por 7 municipios y 23 parroquias. Sus principales localidades aparte de la capital son: La Esmeralda, San Fernando de Atabapo y San Carlos de Río Negro.';
    fechas[18].innerHTML = fechasResumidas('1901');
    parrafos[21].textContent = 'Sucre es uno de los veintitrés Estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es Cumaná. Está ubicado en la región nororiental del país limitando al norte con el Mar Caribe (océano Atlántico), al este con el Golfo de Paria, al sur con Monagas, al suroeste con Anzoátegui y al oeste con el Golfo de Cariaco. Está compuesto por 15 municipios divididos en 54 parroquias. Debe su nombre al Gran Mariscal de Ayacucho Antonio José de Sucre.';
    fechas[19].innerHTML = fechasResumidas('28 de octubre de 1899');
    parrafos[22].textContent = 'Falcón es uno de los 23 estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Se bautizó con ese nombre en honor a Juan Crisóstomo Falcón, líder de la Guerra Federal. Su capital es Coro, fundada el 26 de julio de 1527. Está ubicado en la Región Centroccidental: limita al norte con el golfo de Venezuela, el mar Caribe (océano Atlántico) y el grupo sotavento de las Antillas Neerlandesas (Aruba, Curazao y Bonaire), al este con el golfo Triste (mar Caribe), al sur con Yaracuy y Lara, y al oeste con Zulia.';
    fechas[20].innerHTML = fechasResumidas('1909');
    parrafos[23].textContent = 'Anzoátegui es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman Venezuela. Su capital y ciudad más poblada es Barcelona. Está ubicado en la región nororiental del país, limitando al norte con el mar Caribe (océano Atlántico), al noreste con Sucre, al este con Monagas, al sur con el río Orinoco que lo separa de Bolívar, al oeste con Guárico y al noroeste con Miranda. Con 43 300 km² es el sexto Estado más extenso (por detrás de Bolívar, Amazonas, Apure, Guárico y Zulia) y con 2 103 856 habitantes, siendo (según el INE de Venezuela) el séptimo más poblado, por detrás de Zulia, Miranda, Carabobo, Distrito Capital, Lara y Aragua.';
    fechas[21].innerHTML = fechasResumidas('1856');
    parrafos[24].textContent = 'Táchira es un estado de Venezuela, su capital es San Cristóbal y está ubicado al oeste del país, en la región de los Andes. Limita al norte con Zulia, al noreste con Mérida, al sur con Barinas y Apure, y al oeste con la República de Colombia. Con 11 100 km² de extensión, es el octavo Estado menos extenso y, con 1 255 869 habitantes en 2017, es el noveno más poblado.';
    fechas[22].innerHTML = fechasResumidas('11 de febrero de 1848');
    parrafos[25].textContent = 'Guárico es uno de los veintitrés estados que, junto con el Distrito Capital y las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es San Juan de Los Morros y ciudad más poblada es Calabozo. Está ubicado en el centro del país, en la región de Los Llanos, limitando al norte con Carabobo, Aragua y Miranda, al este con Estado Anzoátegui, al sur con Bolívar y Apure, y al oeste con Barinas y Cojedes. Con casi 65 000 km² es el cuarto estado más extenso por detrás de Bolívar, Amazonas y Apure, con 746 174 habs. en 2011, el noveno menos poblado por delante de Trujillo, Yaracuy, Nueva Esparta, Apure, Vargas, Cojedes, Delta Amacuro y Amazonas, el menos poblado y con 11,5 hab/km², el quinto menos densamente poblado, por delante de Bolívar, Apure, Delta Amacuro y Amazonas, el menos densamente poblado.';
    fechas[23].innerHTML = fechasResumidas('25 de julio de 1567');
    parrafos[26].textContent = 'Caracas es la capital y la ciudad más poblada de Venezuela.​ Desde el siglo XIX es considerada el centro del poder político y económico de Venezuela. Se encuentra ubicada en la zona centro-norte costera del país, a 12 km de la costa del mar Caribe y se sitúa dentro de un valle montañoso. Aunque se sitúa próxima a la costa, la ciudad se ubica a casi 900 metros de altitud, separada del Litoral central de Vargas, por la Cordillera de la Costa y que, a su paso por el núcleo urbano, se constituye como el Parque Nacional Waraira Repano.​ La autopista Caracas-La Guaira, sirve como principal vía de comunicación entre la ciudad y el estado costero de La Guaira, así como al Aeropuerto Internacional Simón Bolívar de Maiquetía y al puerto de La Guaira, el segundo puerto del país.';
    fechas[24].innerHTML = fechasResumidas('5 de marzo de 1701');
    parrafos[27].textContent = 'Maracay es una ciudad venezolana, capital del estado Aragua y del municipio Girardot. Se encuentra ubicada en la región central de Venezuela, al pie de la Cordillera de la Costa, y se ubica a 109 km al suroeste de la ciudad de Caracas. La ciudad es apodada frecuentemente como «la Ciudad Jardín» y en menor medida como «la Cuna de la Aviación Venezolana» o «La Cuna de Grandes Toreros».';
    fechas[25].innerHTML = fechasResumidas('25 de marzo de 1555');
    parrafos[28].textContent = 'Valencia es una ciudad de Venezuela, capital y ciudad más poblada del Estado Carabobo, situada en la Región Central del país. Es conocida como La Capital Industrial de Venezuela, debido a que alberga en ella una importante cantidad de zonas Industriales del país. De igual forma, se ha convertido en un centro de inversión, objeto de grandes proyectos como el World Trade Center Valencia, primero en el país, y el Complejo Isla Multiespacio. El PIB de la ciudad se ubica alrededor de los USD$24.443 millones, un per cápita nominal de 11825$ y un pib ppa per cápita de 20470$. En 2010 el GaWC (Globalization and World Cities), incluyó a la ciudad de Valencia en su listado, siendo ésta y Caracas las únicas ciudades de Venezuela en el ranking, clasificándola como una Ciudad de Suficiencia.';
    fechas[26].innerHTML = fechasResumidas('	14 de septiembre de 1552');
    parrafos[29].textContent = 'Barquisimeto es una ciudad venezolana, capital del estado Lara, ubicada en el occidente del país, es conocida por ser la ciudad musical del país, esta ciudad es la cuarta urbe más poblada de la nación sudamericana después de Caracas, Maracaibo y Valencia y la primera del Estado Lara. Se le considera el principal centro urbano, cultural, económico, educativo e industrial de la Región Centroccidental con una población de 1.059 092 habitantes. Su área metropolitana, la Gran Barquisimeto, tiene una población estimada (2011) de 1.244 177 hab. y está conformada por 7 parroquias del municipio Iribarren y 3 del municipio Palavecino​.';
    fechas[27].innerHTML = fechasResumidas('1678');
    parrafos[30].textContent = 'San Carlos es una ciudad venezolana, capital del estado Cojedes y del municipio Ezequiel Zamora. Fue fundada en 1678 con el nombre de San Carlos de Austria (nombre que lleva ahora una de las tres parroquias del municipio), cuenta con una población de 150.000 habitantes (censo 2011).';
    fechas[28].innerHTML = fechasResumidas('28 de febrero de 1788');
    parrafos[31].textContent = 'San Fernando de Apure (también referida solo como San Fernando) es la ciudad capital del municipio San Fernando y del Estado Apure en Los Llanos de Venezuela. Se identifica con la frase «¡La ciudad de la esperanza!». ​Es la sede administrativa del estado y tiene la sede de las unidades de mayor poder militar de la zona, siendo sus principales actividades económicas, el comercio las actividades financieras y seguridad. La ciudad es el principal asentamiento financiero del Estado,​ cuya primera actividad es la ganadería y la agricultura.​ Para el año 2020, el área metropolitana de San Fernando posee una población de 281.794 habitantes.';
    fechas[29].innerHTML = fechasResumidas('6 de noviembre de 1729');
    parrafos[32].textContent = 'San Felipe, es la capital del Municipio San Felipe y del Estado Yaracuy. Se encuentra ubicada al pie de la Sierra de Aroa, donde se encuentra el parque nacional Yurubí. Esta ubicación le permite tener un clima agradable, rodeado de una exótica vegetación. Una de sus mayores atracciones es el Parque de la Exótica Flora Tropical, donde se puede disfrutar de la belleza de la exuberante flora de la Región de la Sierra Occidental venezolana.';
    fechas[30].innerHTML = fechasResumidas('16 de agosto de 1599');
    parrafos[33].textContent = 'Maturín es una ciudad venezolana de la región nororiental, capital del estado Monagas​ y del municipio homónimo. Es la octava urbe más grande del país con 647.459 hab, superada en su orden por Caracas, Maracaibo, Valencia, Barquisimeto, Maracay, Barcelona y Ciudad Guayana. Está situada a 122 m s. n. m., junto al río Guarapiche, a 416 km de Caracas en línea recta.';
    fechas[31].innerHTML = fechasResumidas('22 de marzo de 1545');
    parrafos[34].textContent = 'Ciudad Bolívar (antes Angostura) es una ciudad venezolana y capital del Estado Bolívar, al sureste de Venezuela. Fue mudada por última vez y rebautizada con el nombre de Santo Tomás de la Nueva Guayana en la Angostura del Orinoco el 22 de mayo de 1764, y sería renombrada en junio de 1846 como Ciudad Bolívar (debido a esto no se puede considerar esa fecha como la fundación de Ciudad Bolívar). Tiene una población de 567.953 habitantes. Entre 23 °C y 37 °C está anualmente su temperatura.';
    fechas[32].innerHTML = fechasResumidas('31 de julio de 1848');
    parrafos[35].textContent = 'Tucupita o San José de Tucupita nombre de fundación, es una ciudad venezolana, capital del municipio Tucupita y del estado Delta Amacuro. Fue fundada el 31 de julio de 1848 por gente oriunda de la isla de Margarita. Esta ciudad experimentó un gran auge a partir de 1933 gracias a la explotación petrolera que se mantuvo hasta comienzos de la década de 1960.';
    fechas[33].innerHTML = fechasResumidas('30 de junio de 1577');
    parrafos[36].textContent = 'Barinas es una ciudad del occidente venezolano y capital del estado homónimo, en los llanos venezolanos a orillas del río Santo Domingo, siendo el principal centro económico y cultural de esta región venezolana. En el 2020 según el INE ubica una población de 489.585 habitantes, y su área metropolitana que cubre los municipios, Barinas, Bolívar y Obispos la población es de 601.594 habitantes, lo que la convierte en la segunda ciudad más poblada de la Región de los Andes y en la primera de los llanos venezolanos.';
    fechas[34].innerHTML = fechasResumidas('3 de noviembre de 1591');
    parrafos[37].textContent = 'Guanare fundada como Villa del Valle del Espíritu Santo de San Juan de Guanaguanare, es la capital del Estado Portuguesa, en Venezuela. Fue fundada El 3 de noviembre de 1591, con el nombre de «Espíritu Santo del Valle de Guanaguanare» por el portugués Juan Fernández de León. En 1786, cuando se creó la Comandancia General de Barinas, formó parte de ella, quedando comprendida en la Provincia de Caracas. En 1824, los cantones de Guanare, Ospino y Araure fueron separados de la Provincia de Caracas y reincorporados a Barinas, la cual había adquirido el rango de Provincia. En 1851, se creó la Provincia de Portuguesa con los cantones de Guanare, Araure, Guanarito y Ospino. En abril de 1881, Portuguesa, Cojedes y Zamora se fusionaron en el Gran Estado Sur de Occidente; esta unión duró hasta 1909, Guanare fue designada como capital del Estado por decreto del presidente Eleazar Lopez Contreras hasta la actualidad. Esta ciudad, además de ser la primera que se funda en el Estado Portuguesa, es una de las pocas ciudades de América que conserva el acta de fundación';
    fechas[35].innerHTML = fechasResumidas('21 de octubre de 1777');
    parrafos[38].textContent = 'Los Teques es una ciudad venezolana capital del Estado Miranda y del Municipio Guaicaipuro. Se encuentra ubicada en la Región Capital en el centro-norte de Venezuela. Los Teques cuenta con una población para el 2016, según el Instituto Nacional de Estadística, de 252.242 habitantes, la ciudad de Los Teques es reconocida como parte de la aglomeración denominada Gran Caracas';
    fechas[36].innerHTML = fechasResumidas('9 de octubre de 1577');
    parrafos[39].textContent = 'Mérida, es la capital del municipio Libertador y del estado Mérida, es una de las principales localidades de los andes venezolanos. Se encuentra ubicada sobre una meseta en medio de la región, entre las sierras montañosas de La Culata y Nevada, los parques nacionales homónimos, dicha condición geográfica la posiciona como un importante centro turístico. Así mismo, el prestigio de su principal universidad y la vasta variedad de institutos de enseñanza la han situado a nivel nacional como la capital estudiantil del Occidente del país.';
    fechas[37].innerHTML = fechasResumidas('28 de octubre de 1556');
    parrafos[40].textContent = 'Trujillo (fundada como "Nuestra Señora de la Paz de Trujillo" o "Trujillo de Nuestra Señora de la Paz "en 1558) es un municipio ubicada al oeste de Venezuela, capital del municipio y estado homónimo. Este municipio está ubicado en El Valle de Los Mukas. Rodeada de montañas, se le conoce como la ciudad de "La Paz" y también como tierra de santos y sabios o "La Ciudad Portátil". Esta vieja ciudad es larga y angosta protegida por su patrona la Virgen de la Paz de la cual se dice se apareció en la denominada peña de la virgen, siendo así que en la parte más alta de dicha montaña se edificó un monumento a la paz mundial. La obra digna de admiración por su imponencia tiene 46,72 metros de altura, 1200 toneladas de peso, fue levantada a una altura de 1800 metros sobre el nivel del mar. Inaugurada en diciembre de 1983 fue diseñada por el escultor Manuel de la Fuente. Actualmente es el monumento más alto de América superando a la estatua de la Libertad de Nueva York, USA y al Cristo Redentor de Río de Janeiro, Brasil.';
    fechas[38].innerHTML = fechasResumidas('8 de Septiembre de 1529');
    parrafos[41].textContent = 'Maracaibo es la ciudad capital del estado Zulia, ubicada en el noroeste de Venezuela. Fue fundada en 1529 como Nueva Núremberg (hispanización de Neu Nürnberg, en alemán). Es el centro económico más importante del occidente venezolano, debido a la industria petrolera que se desarrolla en las riberas del Lago de Maracaibo, específicamente en su sector noroccidental. Históricamente conocida como La Primera Ciudad de Venezuela, por su pujanza y desarrollo económico; también por ser la primera ciudad del país en ser protagonista de utilizar varios tipos de servicios públicos como la luz eléctrica y por encontrarse ubicada geográficamente colindante con las orillas del Lago de Maracaibo, lugar en dónde se originó el nombre del país (Venezuela).';
    fechas[39].innerHTML = fechasResumidas('18 de marzo de 1525');
    parrafos[42].textContent = 'La isla de Margarita, también llamada popularmente la «Perla del Caribe»,1​ se encuentra al sureste del mar Caribe, en el noreste venezolano y al norte de la península de Araya del estado Sucre. Junto con las islas de Coche y Cubagua, constituye el único estado insular de Venezuela denominado Nueva Esparta. La isla jugó un papel importante durante la independencia de Venezuela.';
    fechas[40].innerHTML = fechasResumidas('9 de diciembre de 1933');
    parrafos[43].textContent = 'Puerto Ayacucho es una ciudad venezolana, capital del estado Amazonas, siendo la más grande localidad del estado, fue fundada el 9 de diciembre de 1924, por el ingeniero-geólogo Santiago Aguerreverre. Tiene una población, según el censo de 2011 de 125 840 habs. Está ubicada a la orilla derecha del río Orinoco frente al poblado Casuarito de Colombia, al norte del estado en el municipio Atures.';
    fechas[41].innerHTML = fechasResumidas('27 de noviembre de 1515');
    parrafos[44].textContent = 'Cumaná es una importante ciudad venezolana del oriente del país, capital y sede de los poderes públicos del estado Sucre, Venezuela. Está ubicada en la entrada del golfo de Cariaco, junto a la desembocadura del río Manzanares. Actualmente posee una población de 374 706 habitantes, que al sumarle los de las localidades aledañas de El Peñón, Cantarrana, El Tacal, San Juan de Macarapana y otras poblaciones cercanas, forma una conurbación con un total de 680 918 habitantes que integran el Área metropolitana de Cumaná, distribuidos en 598 km² de superficie; se encuentra en la Región Nor-Oriental del país. Es la capital del Estado Sucre y centro de la región oriental. Desde el 3 de julio de 1591 recibe expresamente título de ciudad, con privilegio de escudo de armas. La ciudad de Cumaná también ha sido conocida como «La Capital Mundial De La Cultura» y «La Atenas venezolana».';
    fechas[42].innerHTML = fechasResumidas('26 de julio de 1527');
    parrafos[45].textContent = 'Santa Ana de Coro, más conocida como Coro, es una ciudad venezolana ubicada en el occidente del país. Es la capital del estado Falcón y del municipio Miranda, así como el principal centro cultural, histórico, artístico, educacional y político-administrativo de toda la región falconiana. Además, Coro es la quinta ciudad fundada en Venezuela, la tercera ciudad más antigua de Venezuela y la sexta ciudad más antigua de Sudamérica. Fue fundada el 26 de julio de 1527 por Juan de Ampíes y desde su creación fue un importante centro urbano y de operaciones durante la época colonial.';
    fechas[43].innerHTML = fechasResumidas('3 de septiembre de 1557');
    parrafos[46].textContent = 'Barcelona, (fundada como Nueva Barcelona del Cerro Santo o Nueva Barcelona al pie del cerro Santo ​y también llamada antes Nueva Barcelona), es una ciudad ubicada en el noreste de Venezuela, capital del Municipio de Simón Bolívar y a su vez del estado de Anzoátegui. Para el año 2011 contaba con una población de 448.016 habitantes según datos de la ONU y junto con Puerto La Cruz, Lechería y Guanta conforma la Gran Barcelona, una de las áreas metropolitanas del país y es una de las más grandes del oriente venezolano, la cual cuenta con una población de 781.242 habitantes. Es la sede del Gobierno Regional y del Parlamento del Estado Anzoátegui, y conserva una variedad de edificios que datan de la época colonial.';
    fechas[44].innerHTML = fechasResumidas('31 de marzo de 1561');
    parrafos[47].textContent = 'San Cristóbal es una ciudad venezolana, capital del Estado Táchira y del Municipio San Cristóbal ubicada en la Región de los Andes al suroeste de Venezuela. Está ubicada a 57 kilómetros de la frontera con Colombia. La ciudad es apodada La Ciudad de la Cordialidad. Fue fundada por Juan Maldonado Ordóñez y Villaquirán, capitán del ejército español, el 31 de marzo de 1561. Tiene una población proyectada para año 2015 de 485 872 habitantes, mientras que toda el área metropolitana cuenta con una población de 1.250 512 habitantes.';
    fechas[45].innerHTML = fechasResumidas('26 de mayo de 1780');
    parrafos[48].textContent = 'San Juan de Los Morros, es la capital del Estado Guárico en Venezuela, es prácticamente la puerta de entrada a los Llanos Centrales pero sin llegar a ser propiamente llano. Tiene una geografía muy particular donde prevalecen espectaculares montañas. Su población es de 120.111 habitantes segùn el censo 2011, siendo la segunda ciudad más poblada del estado Guárico después de Calabozo y es la primera en densidad de población.';
//Barra de Busqueda
  function buscar() {
    let input = document.getElementById('barra-busqueda').value;
    let li = [...listas]; 
    input = input.toLowerCase().trim();
    let lista =  li.map(e => e.textContent.toLowerCase());
        lista.forEach(e => {
          if(!e.includes(input) || input === 'distrito capital') {
            const indice = lista.indexOf(input);
            console.log(`Seleccionaste: ${input}`);
            console.log(indice);
            const objetivo = document.querySelector(`.panel${indice +1}`); 
            if(indice === -1) {
              $(`.panel${indice +2}`).slideToggle('slow');
            }
            $(`.panel${indice +1}`).slideToggle('slow');
            objetivo.scrollIntoView({
              behavior: 'smooth',
            });
            single_double_click();
          } else {
            console.log('no seleccionaste ningún estado o capital');
            single_double_click();
          }
        })
      }
      //Función que evita hacer más de un click cuand toco un botón.
      // Author:  Jacek Becela
// Source:  http://gist.github.com/399624
// License: MIT

jQuery.fn.single_double_click = function(single_click_callback, double_click_callback, timeout) {
  return this.each(function(){
    var clicks = 0, self = this;
    jQuery(this).click(function(event){
      clicks++;
      if (clicks == 1) {
        setTimeout(function(){
          if(clicks == 1) {
            single_click_callback.call(self, event);
          } else {
            double_click_callback.call(self, event);
          }
          clicks = 0;
        }, timeout || 300);
      }
    });
  });
}
//Autocompletado de Barra de Busqueda
const list = [...listas];
const listado = list.map(e => e.textContent);
  $( function() {
    listado;
    $( "#barra-busqueda" ).autocomplete({
      source: listado
    });
  } );
//Scroll a element seleccionado



  
