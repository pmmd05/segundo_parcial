// Base de datos en memoria con libros (exportado como CommonJS)
// Generated from the provided JSON array
const { randomUUID } = require('crypto');

// Array inicial (inmutable) generado a partir del JSON provisto
const initialBooks = [
  {
    "id": "5889f574-30d9-4bf6-a17e-6623fad8046a",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "year": 1605
  },
  {
    "id": "831ceef8-7ea0-44d5-94ce-58c502a8ad4c",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  },
  {
    "id": "30a8e5ca-1fff-4c5b-a051-91ba1d0e8b31",
    "title": "El amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": 1985
  },
  {
    "id": "ccf1ebda-6625-4337-938c-c464f3f358cd",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "year": 1955
  },
  {
    "id": "13dc03d7-2141-4f4f-9f4a-e02200c99995",
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "year": 1963
  },
  {
    "id": "5f2ac526-5b32-4726-b0d8-c296198c48b7",
    "title": "La ciudad y los perros",
    "author": "Mario Vargas Llosa",
    "year": 1963
  },
  {
    "id": "d90c1522-7fd4-4050-8feb-53c75ac02f46",
    "title": "La casa de los espíritus",
    "author": "Isabel Allende",
    "year": 1982
  },
  {
    "id": "028f73b7-5781-4405-8eff-37ce955f9d12",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944
  },
  {
    "id": "b56e8e6f-6cad-4f30-91d1-9627223b4e62",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "year": 1949
  },
  {
    "id": "e362768e-40b8-4c35-8e50-9d90b2072faf",
    "title": "Sobre héroes y tumbas",
    "author": "Ernesto Sabato",
    "year": 1961
  },
  {
    "id": "ff0d2c87-9398-4a4f-87ae-2ceedbbaf5ef",
    "title": "La tregua",
    "author": "Mario Benedetti",
    "year": 1960
  },
  {
    "id": "ee94084a-f784-4505-a689-23bd49ef677d",
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "year": 1948
  },
  {
    "id": "99618745-b22e-48e2-8bfd-7f6854f8a060",
    "title": "Como agua para chocolate",
    "author": "Laura Esquivel",
    "year": 1989
  },
  {
    "id": "fcaf1aba-eb21-4953-8e05-b624ec4238ab",
    "title": "El coronel no tiene quien le escriba",
    "author": "Gabriel García Márquez",
    "year": 1961
  },
  {
    "id": "6d333e15-c014-47e2-8265-b7ea9dd4ca4e",
    "title": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "year": 1981
  },
  {
    "id": "13d7ee61-b510-431c-8788-dd85ba3aade0",
    "title": "El otoño del patriarca",
    "author": "Gabriel García Márquez",
    "year": 1975
  },
  {
    "id": "a97fe2d7-bfbe-464f-b9f1-65dcf3d5a0c3",
    "title": "Los detectives salvajes",
    "author": "Roberto Bolaño",
    "year": 1998
  },
  {
    "id": "b3d4f158-2b3a-4a5f-8aae-b4b2c413bf98",
    "title": "2666",
    "author": "Roberto Bolaño",
    "year": 2004
  },
  {
    "id": "f1c8373c-7525-489b-939f-242e49264b43",
    "title": "La sombra del viento",
    "author": "Carlos Ruiz Zafón",
    "year": 2001
  },
  {
    "id": "502cfc65-8fcd-4f6a-bb41-e8a3bacee180",
    "title": "El juego del ángel",
    "author": "Carlos Ruiz Zafón",
    "year": 2008
  },
  {
    "id": "1d90a2ff-3649-49bd-8070-c1e9ed3d4789",
    "title": "Marina",
    "author": "Carlos Ruiz Zafón",
    "year": 1999
  },
  {
    "id": "a7837d9e-fb25-4c6a-98d2-64f7b0cc50f6",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
  },
  {
    "id": "4f278335-ff58-4f13-9b84-0c25fa521e51",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": "d50786d0-d109-45c6-9d10-b771390050ca",
    "title": "Rebelión en la granja",
    "author": "George Orwell",
    "year": 1945
  },
  {
    "id": "ac36f38a-cd35-4ee9-8ab0-6e0923f880c0",
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": 1953
  },
  {
    "id": "f8e42e86-e051-469c-89b6-554f16288013",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "year": 1866
  },
  {
    "id": "9f3aabbf-b09d-4894-8537-17bc0f8d34f4",
    "title": "Los hermanos Karamázov",
    "author": "Fiódor Dostoievski",
    "year": 1880
  },
  {
    "id": "52879b29-0a86-4600-a54b-6a6e17c5485c",
    "title": "Guerra y paz",
    "author": "León Tolstói",
    "year": 1869
  },
  {
    "id": "141e707a-8320-4115-9d37-ea4784e48b67",
    "title": "Anna Karenina",
    "author": "León Tolstói",
    "year": 1877
  },
  {
    "id": "e549e3f7-b027-4b75-b917-096779807498",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "year": 1857
  },
  {
    "id": "ea778af7-5e40-40ce-bf85-04f0dae2235f",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": "ac6f7773-7dcf-4e68-8a00-231dbeea08e6",
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815
  },
  {
    "id": "fbaf5207-463d-41c4-9f5d-2dee484fb58c",
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "year": 1847
  },
  {
    "id": "4742bf0f-7ddd-4dc8-bd83-f5a4c2f40a60",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847
  },
  {
    "id": "24bce10a-b8fa-45be-a6fb-3f7aa908e09b",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": "c65067f6-6b6b-4187-9723-1bb178c40ffb",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
  },
  {
    "id": "f97abb1d-51eb-4a3e-b168-c3b2bb42d889",
    "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897
  },
  {
    "id": "76ccf77e-dddb-4337-a86a-605c5e58a96d",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
  },
  {
    "id": "56788875-7a28-4988-96e5-e7a5d7a7d5ec",
    "title": "La metamorfosis",
    "author": "Franz Kafka",
    "year": 1915
  },
  {
    "id": "4478a0e4-33a4-406f-afa1-4baeec22b0ba",
    "title": "El proceso",
    "author": "Franz Kafka",
    "year": 1925
  },
  {
    "id": "d1b85bcf-1369-4438-9285-dc0f848aebd2",
    "title": "El castillo",
    "author": "Franz Kafka",
    "year": 1926
  },
  {
    "id": "9cc18601-d8ea-4821-9434-b49b9503f7f1",
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "year": 1913
  },
  {
    "id": "ec8d73f5-774f-40fa-a9f6-d53065d4d01d",
    "title": "Ulises",
    "author": "James Joyce",
    "year": 1922
  },
  {
    "id": "a91d72cb-56c8-4f9c-aa8d-95e793b1efee",
    "title": "Dublineses",
    "author": "James Joyce",
    "year": 1914
  },
  {
    "id": "9ce2dbc6-c815-4bbd-9750-5d377d83039d",
    "title": "El viejo y el mar",
    "author": "Ernest Hemingway",
    "year": 1952
  },
  {
    "id": "ce850988-fb3f-4c55-8e46-d4da72f8ba90",
    "title": "Por quién doblan las campanas",
    "author": "Ernest Hemingway",
    "year": 1940
  },
  {
    "id": "d61fdf45-1279-4828-bad2-a5fd010fa1c2",
    "title": "Adiós a las armas",
    "author": "Ernest Hemingway",
    "year": 1929
  },
  {
    "id": "499c316a-c4da-49b1-96bc-d4e555d57f94",
    "title": "El gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": "b7ea0b3f-22a9-49fc-9449-0765c1a048bf",
    "title": "La conjura de los necios",
    "author": "John Kennedy Toole",
    "year": 1980
  },
  {
    "id": "5c5d21b2-a328-462f-8735-e6d3654f7cd2",
    "title": "El guardián entre el centeno",
    "author": "J. D. Salinger",
    "year": 1951
  },
  {
    "id": "e39f5746-e86c-4425-b869-8aa84b53ab81",
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "year": 1759
  },
  {
    "id": "4e057169-542e-4077-90f3-f57bff1723f5",
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980
  },
  {
    "id": "b7378b33-4fa3-4028-aa8f-6e61e0605b93",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "year": 2000
  },
  {
    "id": "1eedff12-9d1a-448f-b6d4-6e55740948bf",
    "title": "El péndulo de Foucault",
    "author": "Umberto Eco",
    "year": 1988
  },
  {
    "id": "47b86c37-b5fa-462d-a965-8902e1a7eae2",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "year": 1922
  },
  {
    "id": "9819d03c-a347-4f22-bf0a-b0756e70c99d",
    "title": "El lobo estepario",
    "author": "Hermann Hesse",
    "year": 1927
  },
  {
    "id": "4e755b7b-8ddd-4915-bcb9-caa192934280",
    "title": "Demian",
    "author": "Hermann Hesse",
    "year": 1919
  },
  {
    "id": "40869a99-708f-44df-821f-41d36c7bb718",
    "title": "La náusea",
    "author": "Jean-Paul Sartre",
    "year": 1938
  },
  {
    "id": "7d11733b-20b5-43a1-88f2-b5056dddcd74",
    "title": "El extranjero",
    "author": "Albert Camus",
    "year": 1942
  },
  {
    "id": "4f8de1d5-1a2e-48ae-89f2-547bf9c87133",
    "title": "La peste",
    "author": "Albert Camus",
    "year": 1947
  },
  {
    "id": "f377cd95-c9e2-4d16-acd2-7dd6a0f09473",
    "title": "El diario de Ana Frank",
    "author": "Anne Frank",
    "year": 1947
  },
  {
    "id": "88bcc090-023c-40cd-8d2f-2813d63bd529",
    "title": "La isla del tesoro",
    "author": "Robert Louis Stevenson",
    "year": 1883
  },
  {
    "id": "7d7a9ff2-36bf-4d5e-98c0-a47ce6c4b9bc",
    "title": "La vuelta al mundo en 80 días",
    "author": "Julio Verne",
    "year": 1873
  },
  {
    "id": "c30f7a08-16d3-4f6b-983c-6e2feabd6bba",
    "title": "20.000 leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870
  },
  {
    "id": "4a43c7d9-68ae-420b-9318-af90b0d5899d",
    "title": "De la Tierra a la Luna",
    "author": "Julio Verne",
    "year": 1865
  },
  {
    "id": "1f6cc3d8-5912-4df3-af9c-0b5bf92a43c3",
    "title": "El conde de Montecristo",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "2b224e3b-07d4-4720-a86c-182924b55560",
    "title": "Los tres mosqueteros",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "1761d7a6-3f7a-4342-baa7-ad2bb701d3f6",
    "title": "Papá Goriot",
    "author": "Honoré de Balzac",
    "year": 1835
  },
  {
    "id": "acbd46ed-11b3-4f5c-a3d6-72d07229a592",
    "title": "La condición humana",
    "author": "André Malraux",
    "year": 1933
  },
  {
    "id": "7d863b3b-8ad2-47d3-bcfb-da1e12374320",
    "title": "El idiota",
    "author": "Fiódor Dostoievski",
    "year": 1869
  },
  {
    "id": "186e0231-b065-47e1-8c3d-dd1766f35b0a",
    "title": "Memorias del subsuelo",
    "author": "Fiódor Dostoievski",
    "year": 1864
  },
  {
    "id": "09c51574-163e-4d24-bb52-b5b3bf62cf9d",
    "title": "El corazón de las tinieblas",
    "author": "Joseph Conrad",
    "year": 1899
  },
  {
    "id": "227a1127-fb76-40cf-8323-aa071a82a552",
    "title": "El señor de las moscas",
    "author": "William Golding",
    "year": 1954
  },
  {
    "id": "707988b1-a4cc-4b05-89af-baf1a711772a",
    "title": "Cándido",
    "author": "Voltaire",
    "year": 1759
  },
  {
    "id": "382c90a1-ce78-4c7d-b012-21474630b714",
    "title": "La divina comedia",
    "author": "Dante Alighieri",
    "year": 1320
  },
  {
    "id": "a5cf62c1-7d05-4539-8d95-c1cd7f82ff01",
    "title": "La Odisea",
    "author": "Homero",
    "year": -800
  },
  {
    "id": "557d3359-d973-4b9c-a467-a3c7d8919c21",
    "title": "La Ilíada",
    "author": "Homero",
    "year": -750
  },
  {
    "id": "6a60032b-b66c-4af2-a595-d1624cd307b1",
    "title": "Antígona",
    "author": "Sófocles",
    "year": -441
  },
  {
    "id": "65fb32f0-0a61-4170-9f8e-d082d39ae665",
    "title": "Edipo Rey",
    "author": "Sófocles",
    "year": -429
  },
  {
    "id": "7dd514ed-3d83-41f6-988f-fe590af8f719",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "year": 1603
  },
  {
    "id": "2a2e6346-1b53-4be0-ab24-04c03002697a",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "year": 1606
  },
  {
    "id": "f6d30f20-f21d-4e68-b2cc-04eeaa2c6394",
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597
  },
  {
    "id": "81ab58ed-9382-41e6-8c8b-4af04a0534de",
    "title": "Otelo",
    "author": "William Shakespeare",
    "year": 1604
  },
  {
    "id": "81cab5b8-48a8-418e-a297-482573ca056a",
    "title": "El mercader de Venecia",
    "author": "William Shakespeare",
    "year": 1600
  },
  {
    "id": "f2672da6-3905-45f0-979c-e9749be3973a",
    "title": "El paraíso perdido",
    "author": "John Milton",
    "year": 1667
  },
  {
    "id": "065ec7c1-3f84-496a-9d0f-87cdb3509d06",
    "title": "Fausto",
    "author": "Johann Wolfgang von Goethe",
    "year": 1808
  },
  {
    "id": "2866b0e5-d9f4-49c4-a0db-43d53228f33a",
    "title": "Rojo y negro",
    "author": "Stendhal",
    "year": 1830
  },
  {
    "id": "4afd68bf-3ad1-4925-9075-00dd0713cb9d",
    "title": "La montaña mágica",
    "author": "Thomas Mann",
    "year": 1924
  },
  {
    "id": "7e329f16-b513-43d3-8a3e-0e5a2f23f916",
    "title": "Doctor Faustus",
    "author": "Thomas Mann",
    "year": 1947
  },
  {
    "id": "908f6494-f6d3-4016-8756-beeda61e0b1b",
    "title": "Los miserables",
    "author": "Victor Hugo",
    "year": 1862
  },
  {
    "id": "57a9c06d-4aad-491a-b38c-692b16b01638",
    "title": "Nuestra Señora de París",
    "author": "Victor Hugo",
    "year": 1831
  },
  {
    "id": "1f4b60f6-ef88-4b6d-9455-4268575f925f",
    "title": "El retrato de una dama",
    "author": "Henry James",
    "year": 1881
  },
  {
    "id": "18118958-208f-4af6-b711-a570cc6f1a94",
    "title": "Middlemarch",
    "author": "George Eliot",
    "year": 1871
  },
  {
    "id": "5d881d07-6849-4b4d-99d7-73f2e04fb132",
    "title": "Grandes esperanzas",
    "author": "Charles Dickens",
    "year": 1861
  },
  {
    "id": "24b62c7d-251b-4b5b-8b58-572fb94e933b",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "year": 1838
  },
  {
    "id": "8787e749-f592-4b32-a64d-7d294156e561",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "year": 1850
  },
  {
    "id": "bc8c027e-9565-42ed-ac62-98da7f51dc35",
    "title": "Historia de dos ciudades",
    "author": "Charles Dickens",
    "year": 1859
  },
  {
    "id": "067ae72b-84bf-4ad3-9a5b-86bee81145d1",
    "title": "La feria de las vanidades",
    "author": "William M. Thackeray",
    "year": 1848
  },
  {
    "id": "0a56ae1b-a406-40c5-8dca-c846850b2e2b",
    "title": "Narciso y Goldmundo",
    "author": "Hermann Hesse",
    "year": 1930
  },
  {
    "id": "cbb0e277-3eba-4073-9f2a-a1a7b3176b27",
    "title": "Yo, robot",
    "author": "Isaac Asimov",
    "year": 1950
  },
  {
    "id": "3ebbb974-9781-4702-bbc9-17d7be6d4b19",
    "title": "Fundación",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "f3466d3c-29b3-40b0-ac9d-8323162fc037",
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "id": "73dcea55-97a6-46d7-8461-ec960f806507",
    "title": "Neuromante",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "id": "de5354c7-43f7-4dcf-9cc3-dfb17cbd282b",
    "title": "La mano izquierda de la oscuridad",
    "author": "Ursula K. Le Guin",
    "year": 1969
  },
  {
    "id": "6cf27480-b339-4fca-a91f-9e9c340be7f0",
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "year": 1985
  },
  {
    "id": "57204d4e-a588-42ae-b16e-116cde8ceb7e",
    "title": "It",
    "author": "Stephen King",
    "year": 1986
  },
  {
    "id": "7292e80d-4775-4789-852d-ecee7994622e",
    "title": "El resplandor",
    "author": "Stephen King",
    "year": 1977
  },
  {
    "id": "eb808a3e-afba-432e-a714-bb127bc0f2cc",
    "title": "Cementerio de animales",
    "author": "Stephen King",
    "year": 1983
  },
  {
    "id": "fc78a929-1821-43d8-9cbc-ccb9abc699bb",
    "title": "El nombre del viento",
    "author": "Patrick Rothfuss",
    "year": 2007
  },
  {
    "id": "18d7030a-7d1d-49a2-be3d-a681e12298e4",
    "title": "Juego de tronos",
    "author": "George R. R. Martin",
    "year": 1996
  },
  {
    "id": "9725ce93-fffe-464b-8cdb-c30a9fee20c7",
    "title": "Choque de reyes",
    "author": "George R. R. Martin",
    "year": 1998
  },
  {
    "id": "7428e46a-c9a6-4824-95da-32217eb615b2",
    "title": "Tormenta de espadas",
    "author": "George R. R. Martin",
    "year": 2000
  },
  {
    "id": "43f91d09-b21d-4058-a3b4-eef7a1bd3edc",
    "title": "Festín de cuervos",
    "author": "George R. R. Martin",
    "year": 2005
  },
  {
    "id": "b080f2f7-7ee4-4452-a346-fa919ae0d93b",
    "title": "Danza de dragones",
    "author": "George R. R. Martin",
    "year": 2011
  },
  {
    "id": "e29a003e-0cb0-478b-954e-bca2282d7f0d",
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": 2002
  },
  {
    "id": "da9293ad-df07-4644-8265-f3a989ada2d0",
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": 2003
  },
  {
    "id": "dd5397db-e618-4c60-89fe-f522cf709c46",
    "title": "Ángeles y demonios",
    "author": "Dan Brown",
    "year": 2000
  },
  {
    "id": "f46194e8-d22c-49f4-900b-39cd375031f7",
    "title": "Inferno",
    "author": "Dan Brown",
    "year": 2013
  },
  {
    "id": "92a2649a-a53e-495c-bff9-582e75c72680",
    "title": "El alquimista",
    "author": "Paulo Coelho",
    "year": 1988
  },
  {
    "id": "465dc090-b664-48b6-b3cc-a098ae2842a7",
    "title": "La insoportable levedad del ser",
    "author": "Milan Kundera",
    "year": 1984
  },
  {
    "id": "f2703956-edc8-4608-89c9-94205b4fa6f8",
    "title": "El tambor de hojalata",
    "author": "Günter Grass",
    "year": 1959
  },
  {
    "id": "07c09315-8c63-43da-9d4d-d684d6d13eda",
    "title": "Patria",
    "author": "Fernando Aramburu",
    "year": 2016
  },
  {
    "id": "6aa4199f-1ff7-45ef-8cfc-6d9e8f825ab6",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "year": 2011
  },
  {
    "id": "628b574f-c656-44cc-a810-8a6bb9233810",
    "title": "Homo Deus",
    "author": "Yuval Noah Harari",
    "year": 2015
  },
  {
    "id": "84943668-123d-440c-ba57-e81c6b3d37d4",
    "title": "Breves respuestas a las grandes preguntas",
    "author": "Stephen Hawking",
    "year": 2018
  },
  {
    "id": "14ed006a-8707-4d7f-ac31-4a9e547fb270",
    "title": "Breve historia del tiempo",
    "author": "Stephen Hawking",
    "year": 1988
  },
  {
    "id": "1973a670-48ea-4228-9df1-9516fbcbfeee",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "year": 1605
  },
  {
    "id": "3bcd9b5c-8d75-4bbf-b825-887f21227686",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  },
  {
    "id": "c3b9ce6f-6489-47e7-bdfd-8daf3b3c5a25",
    "title": "El amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": 1985
  },
  {
    "id": "f3dc2b74-9105-42b5-b5db-273ac8288c3f",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "year": 1955
  },
  {
    "id": "e2191871-7d52-40fd-9a2e-240a92344cd6",
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "year": 1963
  },
  {
    "id": "73c54f66-edba-40e1-b4db-ed8bd2b7c204",
    "title": "La ciudad y los perros",
    "author": "Mario Vargas Llosa",
    "year": 1963
  },
  {
    "id": "6dd7ca0e-a721-4156-b1cb-0e5044532d30",
    "title": "La casa de los espíritus",
    "author": "Isabel Allende",
    "year": 1982
  },
  {
    "id": "35710c4d-25a9-4b6b-9d77-76b7a532b940",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944
  },
  {
    "id": "9fbc05f4-4dff-443e-8264-271973bf12f1",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "year": 1949
  },
  {
    "id": "dcbaf94d-8c5e-4589-a255-a651a359e196",
    "title": "Sobre héroes y tumbas",
    "author": "Ernesto Sabato",
    "year": 1961
  },
  {
    "id": "15124d8a-0d08-487d-b01d-fede350e22b5",
    "title": "La tregua",
    "author": "Mario Benedetti",
    "year": 1960
  },
  {
    "id": "f560b62e-089c-4a36-b9a1-d694cac9545b",
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "year": 1948
  },
  {
    "id": "4f976b45-8e07-4860-bef7-e70d7e51bca2",
    "title": "Como agua para chocolate",
    "author": "Laura Esquivel",
    "year": 1989
  },
  {
    "id": "fa0a83f1-1d2c-4f80-87c3-db415ad60d9e",
    "title": "El coronel no tiene quien le escriba",
    "author": "Gabriel García Márquez",
    "year": 1961
  },
  {
    "id": "ea4896d2-f3c0-4cbb-b7ce-09371d0ccaae",
    "title": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "year": 1981
  },
  {
    "id": "4f824049-9595-45b6-9f81-fa520f5cf81f",
    "title": "El otoño del patriarca",
    "author": "Gabriel García Márquez",
    "year": 1975
  },
  {
    "id": "cf1f0de2-6b67-4852-9bbb-844051eeb153",
    "title": "Los detectives salvajes",
    "author": "Roberto Bolaño",
    "year": 1998
  },
  {
    "id": "1a22262e-c48c-407d-98cf-0d9fba0e02eb",
    "title": "2666",
    "author": "Roberto Bolaño",
    "year": 2004
  },
  {
    "id": "6fa2c0b3-31cb-4d5e-b48e-453bfc064e65",
    "title": "La sombra del viento",
    "author": "Carlos Ruiz Zafón",
    "year": 2001
  },
  {
    "id": "8fa9c2dc-5ae2-41ac-b23e-d70842025b4f",
    "title": "El juego del ángel",
    "author": "Carlos Ruiz Zafón",
    "year": 2008
  },
  {
    "id": "c1f86eab-f2f1-4de3-9c85-99e02b50aac9",
    "title": "Marina",
    "author": "Carlos Ruiz Zafón",
    "year": 1999
  },
  {
    "id": "f5ce9869-a71c-420a-934d-2b5656fd2cb1",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
  },
  {
    "id": "4b298d15-1c81-485c-91f0-8c4f8c7a05a1",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": "498ef2ec-e10f-4e48-b0a3-e7750dde3157",
    "title": "Rebelión en la granja",
    "author": "George Orwell",
    "year": 1945
  },
  {
    "id": "c9582138-d7e7-48ba-a225-12375b6c9411",
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": 1953
  },
  {
    "id": "7fd6e967-1bdf-464e-9ec8-167aeaa33b1d",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "year": 1866
  },
  {
    "id": "3f7fe6f0-b1be-4982-9c4b-ac555487a7cf",
    "title": "Los hermanos Karamázov",
    "author": "Fiódor Dostoievski",
    "year": 1880
  },
  {
    "id": "a089ce15-89ab-4a8a-9d9c-c3f2ac364107",
    "title": "Guerra y paz",
    "author": "León Tolstói",
    "year": 1869
  },
  {
    "id": "462b8ed2-81e8-4096-aa32-25c477c49f95",
    "title": "Anna Karenina",
    "author": "León Tolstói",
    "year": 1877
  },
  {
    "id": "83729b70-9c33-4f52-9925-68f596af5dd5",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "year": 1857
  },
  {
    "id": "5774f00d-198a-45f3-8efe-a8fffef6e4b6",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": "ee663cd2-ec3f-477e-9b79-3f71c610b0ea",
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815
  },
  {
    "id": "9ff4e818-aa24-491a-82da-29d8f2ca0e91",
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "year": 1847
  },
  {
    "id": "0927b708-12e9-4453-bd31-1c995e693ece",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847
  },
  {
    "id": "1c494c52-4540-44e4-b624-b795ffd8b0e2",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": "f93b89e6-3de0-49b2-b3ca-06d71bc65489",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
  },
  {
    "id": "03fb433b-1eeb-40f2-8e50-bdd0e1eef842",
    "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897
  },
  {
    "id": "8134205a-2d8e-4bd5-9356-12de24c1adf1",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
  },
  {
    "id": "67735bce-82dd-4250-bbda-089d1add8e66",
    "title": "La metamorfosis",
    "author": "Franz Kafka",
    "year": 1915
  },
  {
    "id": "39f6e17a-8c48-484e-b804-47808fb100a2",
    "title": "El proceso",
    "author": "Franz Kafka",
    "year": 1925
  },
  {
    "id": "6c1bb21d-5f68-4561-a162-4f26dfb5e5d8",
    "title": "El castillo",
    "author": "Franz Kafka",
    "year": 1926
  },
  {
    "id": "a99d5d67-6692-403e-8f46-33a9a80efe41",
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "year": 1913
  },
  {
    "id": "f5b2d921-9d39-4cef-ab7c-87ec3dc9216b",
    "title": "Ulises",
    "author": "James Joyce",
    "year": 1922
  },
  {
    "id": "4bab13ca-9c8c-4f19-b45c-a6e243b1f14f",
    "title": "Dublineses",
    "author": "James Joyce",
    "year": 1914
  },
  {
    "id": "cd539117-f6df-45d0-a3d5-0a3615eaaba1",
    "title": "El viejo y el mar",
    "author": "Ernest Hemingway",
    "year": 1952
  },
  {
    "id": "d465400e-f698-4872-b033-6692f597f4bf",
    "title": "Por quién doblan las campanas",
    "author": "Ernest Hemingway",
    "year": 1940
  },
  {
    "id": "eac9f405-3363-4437-8456-fa423fe9dd16",
    "title": "Adiós a las armas",
    "author": "Ernest Hemingway",
    "year": 1929
  },
  {
    "id": "c52d5d88-eca2-4602-8c68-840a4d7fafe1",
    "title": "El gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": "fa5d35f5-b669-4055-8a93-847c2a15c4ff",
    "title": "La conjura de los necios",
    "author": "John Kennedy Toole",
    "year": 1980
  },
  {
    "id": "a33f430f-73ee-415a-bca3-7f661c54ed88",
    "title": "El guardián entre el centeno",
    "author": "J. D. Salinger",
    "year": 1951
  },
  {
    "id": "03fd0d60-a521-4394-982d-926d1fafec1a",
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "year": 1759
  },
  {
    "id": "2c8b64b4-b5f0-44ac-9edc-ba45ef1dccc6",
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980
  },
  {
    "id": "e9b14da6-4e12-465e-97a9-44b02f738c06",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "year": 2000
  },
  {
    "id": "fe0ef4de-635f-42a6-a0ca-333fb08230a4",
    "title": "El péndulo de Foucault",
    "author": "Umberto Eco",
    "year": 1988
  },
  {
    "id": "a9df666e-0723-470f-9a3a-07c0969ba670",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "year": 1922
  },
  {
    "id": "1db7ed2b-d2cd-47f6-b05e-b5ca1983b343",
    "title": "El lobo estepario",
    "author": "Hermann Hesse",
    "year": 1927
  },
  {
    "id": "ff54ada2-510d-4b0d-8df2-248b3b70e3ab",
    "title": "Demian",
    "author": "Hermann Hesse",
    "year": 1919
  },
  {
    "id": "b62c9a1b-dafd-44b4-9eff-212aeac84ccd",
    "title": "La náusea",
    "author": "Jean-Paul Sartre",
    "year": 1938
  },
  {
    "id": "28d26090-bf86-4b29-b6e7-8236e8223cbb",
    "title": "El extranjero",
    "author": "Albert Camus",
    "year": 1942
  },
  {
    "id": "d7f5e0b1-2b4b-456a-9ce8-ace8d60c93cc",
    "title": "La peste",
    "author": "Albert Camus",
    "year": 1947
  },
  {
    "id": "5820415b-dbd1-4995-abe2-af71e340c073",
    "title": "El diario de Ana Frank",
    "author": "Anne Frank",
    "year": 1947
  },
  {
    "id": "7c78780e-3211-4e13-96f5-edbd79c1b790",
    "title": "La isla del tesoro",
    "author": "Robert Louis Stevenson",
    "year": 1883
  },
  {
    "id": "b82f4589-0169-4a56-9fe0-55b0892cdde9",
    "title": "La vuelta al mundo en 80 días",
    "author": "Julio Verne",
    "year": 1873
  },
  {
    "id": "d35e0b3e-b7e7-4148-bedb-2da85987cd06",
    "title": "20.000 leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870
  },
  {
    "id": "87a20171-d344-4991-920a-f37222484e60",
    "title": "De la Tierra a la Luna",
    "author": "Julio Verne",
    "year": 1865
  },
  {
    "id": "2e370adb-997e-4f0b-8876-2fab5322c527",
    "title": "El conde de Montecristo",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "5bcf559b-eea4-44f7-b767-2ff7ffeb49e4",
    "title": "Los tres mosqueteros",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "3993d643-cf77-4ceb-b0f1-e4371e8cf045",
    "title": "Papá Goriot",
    "author": "Honoré de Balzac",
    "year": 1835
  },
  {
    "id": "9f335f59-0635-4043-b6dd-a03a03b45330",
    "title": "La condición humana",
    "author": "André Malraux",
    "year": 1933
  },
  {
    "id": "8723cb36-8a7b-483e-9583-9380d8d402be",
    "title": "El idiota",
    "author": "Fiódor Dostoievski",
    "year": 1869
  },
  {
    "id": "a1f4954a-e354-4843-b8b9-cb328edd8545",
    "title": "Memorias del subsuelo",
    "author": "Fiódor Dostoievski",
    "year": 1864
  },
  {
    "id": "5ee90974-eeca-4122-a94b-18c425bfaf0c",
    "title": "El corazón de las tinieblas",
    "author": "Joseph Conrad",
    "year": 1899
  },
  {
    "id": "f8260f7c-3493-4a95-8cf6-773502c7106d",
    "title": "El señor de las moscas",
    "author": "William Golding",
    "year": 1954
  },
  {
    "id": "5bd9d7dd-dec5-4e06-8664-a93996879eb7",
    "title": "Cándido",
    "author": "Voltaire",
    "year": 1759
  },
  {
    "id": "1592fcc3-15b6-44af-b46b-2f3156f4ac52",
    "title": "La divina comedia",
    "author": "Dante Alighieri",
    "year": 1320
  },
  {
    "id": "a2e46efa-0b5d-48ec-a41c-49e0abdca8f1",
    "title": "La Odisea",
    "author": "Homero",
    "year": -800
  },
  {
    "id": "ea07b4bd-ba16-4a51-9397-1dfeaff562d9",
    "title": "La Ilíada",
    "author": "Homero",
    "year": -750
  },
  {
    "id": "677a02cd-55f5-40ea-9341-477440cfb622",
    "title": "Antígona",
    "author": "Sófocles",
    "year": -441
  },
  {
    "id": "8916b46f-1c2a-4fba-999e-84de101d2853",
    "title": "Edipo Rey",
    "author": "Sófocles",
    "year": -429
  },
  {
    "id": "6df6e114-f147-4b84-9330-57790a8784f6",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "year": 1603
  },
  {
    "id": "5d8b7a52-7f8f-4240-995f-c53a5e0d1fc1",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "year": 1606
  },
  {
    "id": "06012a3c-d0ed-4dce-92be-84b78b85dc0f",
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597
  },
  {
    "id": "3a9420b5-20e0-4e85-b699-4437e4e0a76f",
    "title": "Otelo",
    "author": "William Shakespeare",
    "year": 1604
  },
  {
    "id": "f62088e4-87fb-4133-8775-2d7ef4507d4e",
    "title": "El mercader de Venecia",
    "author": "William Shakespeare",
    "year": 1600
  },
  {
    "id": "51e0af91-456e-42a4-ae18-558fb4e64b54",
    "title": "El paraíso perdido",
    "author": "John Milton",
    "year": 1667
  },
  {
    "id": "e2fd7805-b0c7-4753-b835-dce6778a292f",
    "title": "Fausto",
    "author": "Johann Wolfgang von Goethe",
    "year": 1808
  },
  {
    "id": "a382f6cd-25ed-48be-8ace-770ab220e317",
    "title": "Rojo y negro",
    "author": "Stendhal",
    "year": 1830
  },
  {
    "id": "89760040-f215-47b9-b02e-9c58b5ce50d6",
    "title": "La montaña mágica",
    "author": "Thomas Mann",
    "year": 1924
  },
  {
    "id": "2eb56285-c0a0-47f6-af71-39f1da84165b",
    "title": "Doctor Faustus",
    "author": "Thomas Mann",
    "year": 1947
  },
  {
    "id": "bdc29263-08f7-42ac-a5e3-c3dd2276d115",
    "title": "Los miserables",
    "author": "Victor Hugo",
    "year": 1862
  },
  {
    "id": "d2700b3a-48b4-4dbb-a055-584a77ef0993",
    "title": "Nuestra Señora de París",
    "author": "Victor Hugo",
    "year": 1831
  },
  {
    "id": "2c35deb4-c254-4e87-9f30-a0f91b1a44b7",
    "title": "El retrato de una dama",
    "author": "Henry James",
    "year": 1881
  },
  {
    "id": "1797ab9c-d1e7-47ca-b463-e25ab676fd62",
    "title": "Middlemarch",
    "author": "George Eliot",
    "year": 1871
  },
  {
    "id": "dd02773a-fed6-4804-a913-90aca15e76aa",
    "title": "Grandes esperanzas",
    "author": "Charles Dickens",
    "year": 1861
  },
  {
    "id": "cd90f5c8-fd15-4587-8475-607c9cac45fc",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "year": 1838
  },
  {
    "id": "2401795b-57c0-4dcc-9241-11c13cf617c3",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "year": 1850
  },
  {
    "id": "44dbd63d-b964-44c1-8e78-687b1b78c1e7",
    "title": "Historia de dos ciudades",
    "author": "Charles Dickens",
    "year": 1859
  },
  {
    "id": "d5ff6c4c-d111-4f89-bcad-13fef080f5cb",
    "title": "La feria de las vanidades",
    "author": "William M. Thackeray",
    "year": 1848
  },
  {
    "id": "d559d0fe-8f43-4d99-803d-a1a1ecaadb00",
    "title": "Narciso y Goldmundo",
    "author": "Hermann Hesse",
    "year": 1930
  },
  {
    "id": "266c7ac0-49b6-4082-a984-7b559b75d413",
    "title": "Yo, robot",
    "author": "Isaac Asimov",
    "year": 1950
  },
  {
    "id": "68f2afdf-1400-4cf7-a291-80515c837d3f",
    "title": "Fundación",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "4908d76f-01d6-4c27-ae0d-1aaf46c5d497",
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "id": "7126e1a5-934b-492a-8ed0-b69dca57b907",
    "title": "Neuromante",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "id": "489f2982-380d-48bd-aade-f51f5ac9801e",
    "title": "La mano izquierda de la oscuridad",
    "author": "Ursula K. Le Guin",
    "year": 1969
  },
  {
    "id": "3976d1de-957b-4a4b-bc58-17fc2787b021",
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "year": 1985
  },
  {
    "id": "8a478bbc-6eb4-428f-9ee6-e906835c953d",
    "title": "It",
    "author": "Stephen King",
    "year": 1986
  },
  {
    "id": "f41cce03-c9e0-4d82-9646-af70892db61b",
    "title": "El resplandor",
    "author": "Stephen King",
    "year": 1977
  },
  {
    "id": "44b0206d-6c0a-45f8-aab0-0d0664a23bd3",
    "title": "Cementerio de animales",
    "author": "Stephen King",
    "year": 1983
  },
  {
    "id": "846b8223-3f34-4dc9-a6c3-be7d87470d36",
    "title": "El nombre del viento",
    "author": "Patrick Rothfuss",
    "year": 2007
  },
  {
    "id": "1f71d5c6-35ec-4942-8245-664ab73b7dd2",
    "title": "Juego de tronos",
    "author": "George R. R. Martin",
    "year": 1996
  },
  {
    "id": "6db713ad-8025-4fe9-ad7a-462777047a5f",
    "title": "Choque de reyes",
    "author": "George R. R. Martin",
    "year": 1998
  },
  {
    "id": "aee52ca8-e0a3-4c2c-84e6-14f2a8c82927",
    "title": "Tormenta de espadas",
    "author": "George R. R. Martin",
    "year": 2000
  },
  {
    "id": "b26f4ee6-5d77-4078-b3ee-5ea28fe8d38f",
    "title": "Festín de cuervos",
    "author": "George R. R. Martin",
    "year": 2005
  },
  {
    "id": "4c9dce1e-e396-4b3e-845b-fc824672e51c",
    "title": "Danza de dragones",
    "author": "George R. R. Martin",
    "year": 2011
  },
  {
    "id": "5eb246b4-d3ba-49e2-930d-8c8418b31668",
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": 2002
  },
  {
    "id": "f3616f27-fdc3-4e4a-bfd8-076a1a90cf88",
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": 2003
  },
  {
    "id": "feb49e46-a80f-47c9-9597-300098a18284",
    "title": "Ángeles y demonios",
    "author": "Dan Brown",
    "year": 2000
  },
  {
    "id": "c2ec3e1a-379b-4e36-bbaf-6cd4bd71b63e",
    "title": "Inferno",
    "author": "Dan Brown",
    "year": 2013
  },
  {
    "id": "a175c26b-469d-47f5-a832-18045f6a71b6",
    "title": "El alquimista",
    "author": "Paulo Coelho",
    "year": 1988
  },
  {
    "id": "c3dfb1e3-e2ce-443c-a6af-3b15e7321d9f",
    "title": "La insoportable levedad del ser",
    "author": "Milan Kundera",
    "year": 1984
  },
  {
    "id": "8e6d66e2-5d43-4282-8070-ed61bfd54d08",
    "title": "El tambor de hojalata",
    "author": "Günter Grass",
    "year": 1959
  },
  {
    "id": "a8230b8d-4730-4786-857b-da9e14519e74",
    "title": "Patria",
    "author": "Fernando Aramburu",
    "year": 2016
  },
  {
    "id": "d18e8168-19c7-45e8-b569-2fa07a2aa2ef",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "year": 2011
  },
  {
    "id": "87a64c1a-edd1-4df8-92b5-7099142c40ae",
    "title": "Homo Deus",
    "author": "Yuval Noah Harari",
    "year": 2015
  },
  {
    "id": "538db211-5026-4480-8f41-1222703607be",
    "title": "Breves respuestas a las grandes preguntas",
    "author": "Stephen Hawking",
    "year": 2018
  },
  {
    "id": "d80b5a36-0190-4fdd-8078-735e385e0380",
    "title": "Breve historia del tiempo",
    "author": "Stephen Hawking",
    "year": 1988
  },
  {
    "id": "2aad5ecd-70d3-45c5-a2a5-d004ed62b2e5",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "year": 1605
  },
  {
    "id": "f5be6521-d7f8-440d-b377-1d7731488e44",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  },
  {
    "id": "cf6aeb04-074b-47d4-b6c3-8fb5ba69bbab",
    "title": "El amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": 1985
  },
  {
    "id": "06925fb6-61dc-488b-b48f-961366ba2d27",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "year": 1955
  },
  {
    "id": "aa56ca9e-5df5-4e3f-bd1a-d54fbc3960a6",
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "year": 1963
  },
  {
    "id": "24e0eaff-cf89-4c61-91dd-a80575d66e3c",
    "title": "La ciudad y los perros",
    "author": "Mario Vargas Llosa",
    "year": 1963
  },
  {
    "id": "4b076aaf-6407-4a4b-a24a-3192e4f7277f",
    "title": "La casa de los espíritus",
    "author": "Isabel Allende",
    "year": 1982
  },
  {
    "id": "aeee7fcf-274b-42a5-9cc9-366d5b98f9fa",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944
  },
  {
    "id": "36c57275-812e-4a05-985f-daf483d04142",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "year": 1949
  },
  {
    "id": "dd3d0b4b-eb32-49f4-8222-1b82f747d9a6",
    "title": "Sobre héroes y tumbas",
    "author": "Ernesto Sabato",
    "year": 1961
  },
  {
    "id": "661b1f55-90a2-4435-a399-163084a70e78",
    "title": "La tregua",
    "author": "Mario Benedetti",
    "year": 1960
  },
  {
    "id": "d7620ffc-ff68-4872-bc75-5bb216e484a6",
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "year": 1948
  },
  {
    "id": "7f2f847d-de95-493c-882b-5cbc716385b7",
    "title": "Como agua para chocolate",
    "author": "Laura Esquivel",
    "year": 1989
  },
  {
    "id": "ae7a2393-eb7e-4846-ac99-18f316307150",
    "title": "El coronel no tiene quien le escriba",
    "author": "Gabriel García Márquez",
    "year": 1961
  },
  {
    "id": "5cb8c4a9-060c-4283-b62c-6ac6b6dc1c14",
    "title": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "year": 1981
  },
  {
    "id": "1a151802-fecd-46ec-8b5c-31e6583e1f36",
    "title": "El otoño del patriarca",
    "author": "Gabriel García Márquez",
    "year": 1975
  },
  {
    "id": "96b65c3e-cbdf-4ddf-9c26-4e2dac58baf1",
    "title": "Los detectives salvajes",
    "author": "Roberto Bolaño",
    "year": 1998
  },
  {
    "id": "2fb1f2ef-8f23-4447-b8b6-7f0f11239d5e",
    "title": "2666",
    "author": "Roberto Bolaño",
    "year": 2004
  },
  {
    "id": "53872e1f-bc54-46ee-b3a6-be638a786a38",
    "title": "La sombra del viento",
    "author": "Carlos Ruiz Zafón",
    "year": 2001
  },
  {
    "id": "2ba9f04d-e895-4004-8d03-7d05d6f4a4ec",
    "title": "El juego del ángel",
    "author": "Carlos Ruiz Zafón",
    "year": 2008
  },
  {
    "id": "3943288b-0748-4aaf-9e10-c82e68edd33b",
    "title": "Marina",
    "author": "Carlos Ruiz Zafón",
    "year": 1999
  },
  {
    "id": "f305fbac-36a9-427b-9840-7f3240e6be4a",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
  },
  {
    "id": "9513de35-a763-4ffe-a1ee-cbfcc201542b",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": "951e5d7a-67a8-44c5-98b3-4b5568be0689",
    "title": "Rebelión en la granja",
    "author": "George Orwell",
    "year": 1945
  },
  {
    "id": "34afbc30-3d5e-4d6f-b8ed-2ffa5accbc12",
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": 1953
  },
  {
    "id": "a1b2dc86-a6f9-4ca3-8ae1-1a519e90d20e",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "year": 1866
  },
  {
    "id": "7c2c95b6-16dc-41e5-afb7-a5ecd5a59eb6",
    "title": "Los hermanos Karamázov",
    "author": "Fiódor Dostoievski",
    "year": 1880
  },
  {
    "id": "e072685c-d2cf-4c4d-a0a8-ac738010fd0b",
    "title": "Guerra y paz",
    "author": "León Tolstói",
    "year": 1869
  },
  {
    "id": "e5bc1259-e12f-4b58-aeb5-58fa4c7f7b32",
    "title": "Anna Karenina",
    "author": "León Tolstói",
    "year": 1877
  },
  {
    "id": "6153f00b-3e44-4d5c-af63-ea93cfe96467",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "year": 1857
  },
  {
    "id": "f3a39933-b40e-44c2-b4fc-2acb524c54ab",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": "25d52886-e473-42dd-8265-ee35326037ff",
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815
  },
  {
    "id": "2854833f-d10d-4046-8463-87bc262698d6",
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "year": 1847
  },
  {
    "id": "327269e6-5cdb-45e8-95de-338b695c4b29",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847
  },
  {
    "id": "c01524fa-a941-47db-8e15-78230af6789c",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": "b3b8c157-ec31-4367-b5bd-d8b743a9a6d9",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
  },
  {
    "id": "ad60654b-5e48-4175-846e-76394e5755f9",
    "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897
  },
  {
    "id": "2f9b98a8-1cbd-405f-bea7-7c65dcbb15f5",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
  },
  {
    "id": "e101d264-3948-46f8-807c-f4f04f90d6b1",
    "title": "La metamorfosis",
    "author": "Franz Kafka",
    "year": 1915
  },
  {
    "id": "fc2246e5-229a-40a7-badc-e89fec8ce662",
    "title": "El proceso",
    "author": "Franz Kafka",
    "year": 1925
  },
  {
    "id": "960a10c0-c72b-4379-88ba-eab41c59623c",
    "title": "El castillo",
    "author": "Franz Kafka",
    "year": 1926
  },
  {
    "id": "b3202e0c-5c84-4f2e-bd20-5b78f6f264ff",
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "year": 1913
  },
  {
    "id": "f729ccb4-0e83-4586-b861-5375f0c40f21",
    "title": "Ulises",
    "author": "James Joyce",
    "year": 1922
  },
  {
    "id": "0f693728-dbf3-4c63-b35c-036808f5f3de",
    "title": "Dublineses",
    "author": "James Joyce",
    "year": 1914
  },
  {
    "id": "628e2c30-77d9-40eb-8b79-ae7cd1bfbe40",
    "title": "El viejo y el mar",
    "author": "Ernest Hemingway",
    "year": 1952
  },
  {
    "id": "684ee200-6c2e-4ca8-80f3-8c1577318386",
    "title": "Por quién doblan las campanas",
    "author": "Ernest Hemingway",
    "year": 1940
  },
  {
    "id": "b4a79937-3832-4fce-918a-765fe7505c18",
    "title": "Adiós a las armas",
    "author": "Ernest Hemingway",
    "year": 1929
  },
  {
    "id": "9fa16667-909c-48f8-97a3-d024af0de96e",
    "title": "El gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": "a9979922-fe6e-4c8d-9483-1cc1030c2542",
    "title": "La conjura de los necios",
    "author": "John Kennedy Toole",
    "year": 1980
  },
  {
    "id": "41e4a567-f463-4550-acc4-44a02e10c570",
    "title": "El guardián entre el centeno",
    "author": "J. D. Salinger",
    "year": 1951
  },
  {
    "id": "81e8073d-ee5d-4ada-8f5f-699870fa43a9",
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "year": 1759
  },
  {
    "id": "5e232635-e184-4af3-85ce-55212b4736e2",
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980
  },
  {
    "id": "de35bcaf-78d1-4284-9153-83b2b1effb96",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "year": 2000
  },
  {
    "id": "38ab7c31-e177-455d-bbd0-2f1ad257a893",
    "title": "El péndulo de Foucault",
    "author": "Umberto Eco",
    "year": 1988
  },
  {
    "id": "5815c782-0c2f-4882-9912-44226812db07",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "year": 1922
  },
  {
    "id": "15526ac9-ed7e-4ef4-b6c1-2d73d7b64a4d",
    "title": "El lobo estepario",
    "author": "Hermann Hesse",
    "year": 1927
  },
  {
    "id": "66df7c69-49a5-47ae-b507-123f056f6d2d",
    "title": "Demian",
    "author": "Hermann Hesse",
    "year": 1919
  },
  {
    "id": "dcd999b5-9844-433d-8f63-63fdabec15ac",
    "title": "La náusea",
    "author": "Jean-Paul Sartre",
    "year": 1938
  },
  {
    "id": "03cbaa4b-2161-4741-b3c3-1233b1e48583",
    "title": "El extranjero",
    "author": "Albert Camus",
    "year": 1942
  },
  {
    "id": "fe09eb8f-5e3a-4328-aca0-8f4e21b80e4c",
    "title": "La peste",
    "author": "Albert Camus",
    "year": 1947
  },
  {
    "id": "a480a038-1d61-4434-8e23-cac32e0d12d0",
    "title": "El diario de Ana Frank",
    "author": "Anne Frank",
    "year": 1947
  },
  {
    "id": "5389e748-2810-4fd4-a3a5-a484684741b3",
    "title": "La isla del tesoro",
    "author": "Robert Louis Stevenson",
    "year": 1883
  },
  {
    "id": "bcd0aa0e-1d7c-4b43-8dc7-4e73fc2f8ac2",
    "title": "La vuelta al mundo en 80 días",
    "author": "Julio Verne",
    "year": 1873
  },
  {
    "id": "55a56a53-bc6e-444b-8b4e-ab09a5e2fc89",
    "title": "20.000 leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870
  },
  {
    "id": "bb863b0e-672f-4a9e-a4b0-5b01b63cef1c",
    "title": "De la Tierra a la Luna",
    "author": "Julio Verne",
    "year": 1865
  },
  {
    "id": "0f29d702-0c9a-4868-8c9e-e860ad2a838f",
    "title": "El conde de Montecristo",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "0ac52560-f219-4ff5-a0ea-2b2d7b5422c8",
    "title": "Los tres mosqueteros",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "48fad47f-e5c4-457a-b6c2-2c705e2c5dcb",
    "title": "Papá Goriot",
    "author": "Honoré de Balzac",
    "year": 1835
  },
  {
    "id": "6e83313c-dc2a-4e49-adee-0c9756ee1292",
    "title": "La condición humana",
    "author": "André Malraux",
    "year": 1933
  },
  {
    "id": "8040a582-85cc-4083-8e25-5e0c4bcb7e68",
    "title": "El idiota",
    "author": "Fiódor Dostoievski",
    "year": 1869
  },
  {
    "id": "9c4f886a-043c-4ea2-bfd8-aae95d4a4178",
    "title": "Memorias del subsuelo",
    "author": "Fiódor Dostoievski",
    "year": 1864
  },
  {
    "id": "0300be0d-5f9e-44b6-aedf-706a4e36043f",
    "title": "El corazón de las tinieblas",
    "author": "Joseph Conrad",
    "year": 1899
  },
  {
    "id": "52ccc168-661f-45c8-8cc4-81e6dbd7661f",
    "title": "El señor de las moscas",
    "author": "William Golding",
    "year": 1954
  },
  {
    "id": "d55e6f87-5df4-45d5-8cf0-de2dd485f2ef",
    "title": "Cándido",
    "author": "Voltaire",
    "year": 1759
  },
  {
    "id": "08c67751-edd9-4cb1-91c4-a0fd319fdee5",
    "title": "La divina comedia",
    "author": "Dante Alighieri",
    "year": 1320
  },
  {
    "id": "b895891d-a953-45f1-8b3f-21009a6d74d2",
    "title": "La Odisea",
    "author": "Homero",
    "year": -800
  },
  {
    "id": "1fa91aa8-751a-4005-890c-ec5c7a19be56",
    "title": "La Ilíada",
    "author": "Homero",
    "year": -750
  },
  {
    "id": "e1609181-5642-4c4a-9ee7-80cda9b35943",
    "title": "Antígona",
    "author": "Sófocles",
    "year": -441
  },
  {
    "id": "309d7885-d110-4c40-8d93-e88d93846969",
    "title": "Edipo Rey",
    "author": "Sófocles",
    "year": -429
  },
  {
    "id": "fca6daa9-408b-4831-b192-52d41a0a1529",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "year": 1603
  },
  {
    "id": "3e298339-12b0-4849-8cde-ed8c2e6f77f4",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "year": 1606
  },
  {
    "id": "8c358c74-3f2e-4d8d-8027-55a217f2ed8a",
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597
  },
  {
    "id": "9a4fe6b6-9d11-4827-923e-d1a1a7950e16",
    "title": "Otelo",
    "author": "William Shakespeare",
    "year": 1604
  },
  {
    "id": "1d726fe0-ccca-4a5d-a188-265e79ee230d",
    "title": "El mercader de Venecia",
    "author": "William Shakespeare",
    "year": 1600
  },
  {
    "id": "a37d80b3-4665-4763-ab67-8b8d503eed02",
    "title": "El paraíso perdido",
    "author": "John Milton",
    "year": 1667
  },
  {
    "id": "fc832362-2f7d-43af-83b3-1328e469c7db",
    "title": "Fausto",
    "author": "Johann Wolfgang von Goethe",
    "year": 1808
  },
  {
    "id": "e48fb1fd-18da-4eb3-afa1-5ddf8a7d9ab3",
    "title": "Rojo y negro",
    "author": "Stendhal",
    "year": 1830
  },
  {
    "id": "1da42ce3-0cab-4c66-b2f8-60241ae298c9",
    "title": "La montaña mágica",
    "author": "Thomas Mann",
    "year": 1924
  },
  {
    "id": "0c4b4368-cd9c-40c3-b78e-d78d5ac65fd7",
    "title": "Doctor Faustus",
    "author": "Thomas Mann",
    "year": 1947
  },
  {
    "id": "5639e8fa-64ea-45e2-b802-3109d13b167a",
    "title": "Los miserables",
    "author": "Victor Hugo",
    "year": 1862
  },
  {
    "id": "ee77654b-073e-4595-ac71-ad1181bd4f7e",
    "title": "Nuestra Señora de París",
    "author": "Victor Hugo",
    "year": 1831
  },
  {
    "id": "0960c43a-7c40-4803-9c42-8ffa52fc49e2",
    "title": "El retrato de una dama",
    "author": "Henry James",
    "year": 1881
  },
  {
    "id": "9a2853b0-9cb3-49f7-aae7-91de4ccb242d",
    "title": "Middlemarch",
    "author": "George Eliot",
    "year": 1871
  },
  {
    "id": "35217f35-cd5f-444f-af3c-6906894dced7",
    "title": "Grandes esperanzas",
    "author": "Charles Dickens",
    "year": 1861
  },
  {
    "id": "7067f790-5c3e-4893-a393-2c3ec73267b6",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "year": 1838
  },
  {
    "id": "f9ff15df-5c0d-42b0-979f-c321d2dbf06c",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "year": 1850
  },
  {
    "id": "6c2a180c-0cb0-47de-a4b7-e1315db2dbde",
    "title": "Historia de dos ciudades",
    "author": "Charles Dickens",
    "year": 1859
  },
  {
    "id": "dc0704e1-a6dd-414d-b7fa-bc5a603544b2",
    "title": "La feria de las vanidades",
    "author": "William M. Thackeray",
    "year": 1848
  },
  {
    "id": "86fcd970-2bcf-465a-916b-809cac42cfae",
    "title": "Narciso y Goldmundo",
    "author": "Hermann Hesse",
    "year": 1930
  },
  {
    "id": "dcd48a5a-05d4-4018-9de3-5797821903a0",
    "title": "Yo, robot",
    "author": "Isaac Asimov",
    "year": 1950
  },
  {
    "id": "d3205c41-f9c2-4706-a0fa-e6df0cec62e3",
    "title": "Fundación",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "9955a9af-7876-4b56-b37a-0949ed7cdd5b",
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "id": "ed31ccf1-22e1-4d1a-80c1-d662b657fe49",
    "title": "Neuromante",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "id": "b6dc7636-3db4-411a-b051-ebd1acf90ed0",
    "title": "La mano izquierda de la oscuridad",
    "author": "Ursula K. Le Guin",
    "year": 1969
  },
  {
    "id": "feba9330-f965-434d-9d78-87f08477adbd",
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "year": 1985
  },
  {
    "id": "75f3d8b0-3c85-4d30-9ee9-ce4425b99076",
    "title": "It",
    "author": "Stephen King",
    "year": 1986
  },
  {
    "id": "683ee829-4882-4d05-9ea2-9216798b3148",
    "title": "El resplandor",
    "author": "Stephen King",
    "year": 1977
  },
  {
    "id": "a62ef954-5457-4850-9e62-a1a10f541846",
    "title": "Cementerio de animales",
    "author": "Stephen King",
    "year": 1983
  },
  {
    "id": "9d4cff41-283e-4272-86f0-606a33e0affe",
    "title": "El nombre del viento",
    "author": "Patrick Rothfuss",
    "year": 2007
  },
  {
    "id": "2bae3eb3-6f5c-4434-b515-b5bf72ace131",
    "title": "Juego de tronos",
    "author": "George R. R. Martin",
    "year": 1996
  },
  {
    "id": "40cdc096-08ad-4556-99f3-e722370857c7",
    "title": "Choque de reyes",
    "author": "George R. R. Martin",
    "year": 1998
  },
  {
    "id": "96a87be1-2ac3-44e2-8845-b39ade5a5edb",
    "title": "Tormenta de espadas",
    "author": "George R. R. Martin",
    "year": 2000
  },
  {
    "id": "56cfede7-8edd-4a35-9532-35eda8cb9de5",
    "title": "Festín de cuervos",
    "author": "George R. R. Martin",
    "year": 2005
  },
  {
    "id": "b6cd211d-4e6b-4f90-806b-81621a495908",
    "title": "Danza de dragones",
    "author": "George R. R. Martin",
    "year": 2011
  },
  {
    "id": "5cde5c9d-b6df-4974-8d68-2f2860a2f996",
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": 2002
  },
  {
    "id": "bcba0707-c496-45e7-be9b-2eb12dfc8daf",
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": 2003
  },
  {
    "id": "5bea0de9-da22-4ba5-a022-b9140fb732fa",
    "title": "Ángeles y demonios",
    "author": "Dan Brown",
    "year": 2000
  },
  {
    "id": "b9958740-904f-4b20-b8be-26f23b876f6a",
    "title": "Inferno",
    "author": "Dan Brown",
    "year": 2013
  },
  {
    "id": "88bf37d6-9d2c-4371-9259-df9c551f764d",
    "title": "El alquimista",
    "author": "Paulo Coelho",
    "year": 1988
  },
  {
    "id": "4045314c-f8b4-4770-a5b4-4bf9d49b2702",
    "title": "La insoportable levedad del ser",
    "author": "Milan Kundera",
    "year": 1984
  },
  {
    "id": "8e379985-d80d-46a2-848a-9471d2ae9f30",
    "title": "El tambor de hojalata",
    "author": "Günter Grass",
    "year": 1959
  },
  {
    "id": "bb69bbf0-b49c-43e8-baf1-3379e23f699b",
    "title": "Patria",
    "author": "Fernando Aramburu",
    "year": 2016
  },
  {
    "id": "83bc634e-beb7-435d-949c-c34f07847c4c",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "year": 2011
  },
  {
    "id": "e397bbc0-29b8-42f8-b6d4-6039cc2b54c3",
    "title": "Homo Deus",
    "author": "Yuval Noah Harari",
    "year": 2015
  },
  {
    "id": "4cf638ed-e93c-41b2-b38d-21e86a4cff6b",
    "title": "Breves respuestas a las grandes preguntas",
    "author": "Stephen Hawking",
    "year": 2018
  },
  {
    "id": "4a07b69a-e70a-4627-a5d2-c7dd8ba2adaf",
    "title": "Breve historia del tiempo",
    "author": "Stephen Hawking",
    "year": 1988
  },
  {
    "id": "3519de1d-60ad-4d00-a657-104b00b14874",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "year": 1605
  },
  {
    "id": "24e70607-22a5-4135-b272-e8135234acc4",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  },
  {
    "id": "677e2032-6b3c-4aed-b05f-5bfebc370ca2",
    "title": "El amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": 1985
  },
  {
    "id": "1cec501b-5b29-4718-8453-b3411da147bc",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "year": 1955
  },
  {
    "id": "c0b70354-3d4e-4226-a9e4-70681d54c644",
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "year": 1963
  },
  {
    "id": "4a879f3c-d2d2-4743-81b1-3ff1842b2e7f",
    "title": "La ciudad y los perros",
    "author": "Mario Vargas Llosa",
    "year": 1963
  },
  {
    "id": "ed816440-f121-4242-8be4-62cd47f65e6d",
    "title": "La casa de los espíritus",
    "author": "Isabel Allende",
    "year": 1982
  },
  {
    "id": "8c371bcb-11fe-434f-960f-99bc4fe6957e",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944
  },
  {
    "id": "c667c62f-2c72-4ead-81c5-8c0d3450823b",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "year": 1949
  },
  {
    "id": "51f333ee-604d-446e-afb0-d847e5d715c8",
    "title": "Sobre héroes y tumbas",
    "author": "Ernesto Sabato",
    "year": 1961
  },
  {
    "id": "75e0e95a-4110-49ff-9b6c-ed5cd963d7ea",
    "title": "La tregua",
    "author": "Mario Benedetti",
    "year": 1960
  },
  {
    "id": "2b86d292-b798-4d1c-b12b-85f60a39f883",
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "year": 1948
  },
  {
    "id": "28358b71-f270-488b-b7c7-996653de3ef4",
    "title": "Como agua para chocolate",
    "author": "Laura Esquivel",
    "year": 1989
  },
  {
    "id": "8fb9b5dc-4aee-4760-8071-a123db9ef838",
    "title": "El coronel no tiene quien le escriba",
    "author": "Gabriel García Márquez",
    "year": 1961
  },
  {
    "id": "dc545832-100d-45af-8369-3affcf0fe53c",
    "title": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "year": 1981
  },
  {
    "id": "eda8ed2f-b8ea-4782-b3ac-4ed525ee2e50",
    "title": "El otoño del patriarca",
    "author": "Gabriel García Márquez",
    "year": 1975
  },
  {
    "id": "51fa9a3d-6fe6-4c63-864c-f5a898f0a9ea",
    "title": "Los detectives salvajes",
    "author": "Roberto Bolaño",
    "year": 1998
  },
  {
    "id": "ddda0514-ee5c-47d7-87e9-3dff35c7cbeb",
    "title": "2666",
    "author": "Roberto Bolaño",
    "year": 2004
  },
  {
    "id": "555f989d-98ea-414c-abba-c4d3d231ac3c",
    "title": "La sombra del viento",
    "author": "Carlos Ruiz Zafón",
    "year": 2001
  },
  {
    "id": "ff1114d4-1204-4c39-bc1a-cc43dd8d7c29",
    "title": "El juego del ángel",
    "author": "Carlos Ruiz Zafón",
    "year": 2008
  },
  {
    "id": "09e35744-3096-44a5-a6f8-d9b4284487d4",
    "title": "Marina",
    "author": "Carlos Ruiz Zafón",
    "year": 1999
  },
  {
    "id": "61bc1d67-9fdc-4635-9269-0c7557a1a31a",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
  },
  {
    "id": "700714cb-faaa-4c0f-87ae-f228dfa57ae9",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": "943b40ba-e038-4e76-9abf-2fe10d2249c8",
    "title": "Rebelión en la granja",
    "author": "George Orwell",
    "year": 1945
  },
  {
    "id": "151ab0cd-80c4-497c-83c4-3e7812c627c8",
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": 1953
  },
  {
    "id": "cd10e9b9-d006-492e-884f-c5bc45e97789",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "year": 1866
  },
  {
    "id": "762fd5f9-e218-4406-bbde-07263ec41174",
    "title": "Los hermanos Karamázov",
    "author": "Fiódor Dostoievski",
    "year": 1880
  },
  {
    "id": "5ccdf618-41ea-4a14-9a86-194b5520f174",
    "title": "Guerra y paz",
    "author": "León Tolstói",
    "year": 1869
  },
  {
    "id": "a4d5c070-6997-4f88-be13-28946cf89358",
    "title": "Anna Karenina",
    "author": "León Tolstói",
    "year": 1877
  },
  {
    "id": "83dd099e-d74b-485d-9112-da992a407ff6",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "year": 1857
  },
  {
    "id": "7ce94f24-9329-4a86-92db-db90679eb2f0",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": "f5c88852-383a-4975-8c07-392ff48d4e1b",
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815
  },
  {
    "id": "42e084eb-b8af-4c90-92e2-4b2043943633",
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "year": 1847
  },
  {
    "id": "828b36ab-bf26-4c05-9268-18420060d095",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847
  },
  {
    "id": "328ecb1f-c287-40dd-93bd-5ad62e78d761",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": "498c3336-0b34-40df-aa25-2f87284d7a47",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
  },
  {
    "id": "5beed1f5-6ad3-42b0-b054-2d1e81a6930f",
    "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897
  },
  {
    "id": "77ee1898-4c28-411a-9c5e-b9766ca6c9eb",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
  },
  {
    "id": "e78a8d85-b4ab-477e-a5ba-03d9c3ac071a",
    "title": "La metamorfosis",
    "author": "Franz Kafka",
    "year": 1915
  },
  {
    "id": "86fc92ab-4284-4d8a-ada8-95f819f9b3e7",
    "title": "El proceso",
    "author": "Franz Kafka",
    "year": 1925
  },
  {
    "id": "54be7459-6772-46d0-912e-7b8b9fe7bbd4",
    "title": "El castillo",
    "author": "Franz Kafka",
    "year": 1926
  },
  {
    "id": "12256c82-d434-421a-b0c6-a279adb381f6",
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "year": 1913
  },
  {
    "id": "72551d34-9d87-4f0e-b36b-1d36be8b2511",
    "title": "Ulises",
    "author": "James Joyce",
    "year": 1922
  },
  {
    "id": "049b3b8c-b0f5-4853-8ef6-e35a6ab60915",
    "title": "Dublineses",
    "author": "James Joyce",
    "year": 1914
  },
  {
    "id": "373aea29-8e56-4044-838c-ccbc5e0dbee3",
    "title": "El viejo y el mar",
    "author": "Ernest Hemingway",
    "year": 1952
  },
  {
    "id": "ea70611c-f30b-4e12-9ab2-93752123b2ee",
    "title": "Por quién doblan las campanas",
    "author": "Ernest Hemingway",
    "year": 1940
  },
  {
    "id": "189b486f-eb9a-4907-bd85-3226b29ccdef",
    "title": "Adiós a las armas",
    "author": "Ernest Hemingway",
    "year": 1929
  },
  {
    "id": "98860703-7a33-4dcb-8af8-16c1aa8ddee3",
    "title": "El gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": "e0087abe-3bb9-47f7-9c92-bf7fde1228c8",
    "title": "La conjura de los necios",
    "author": "John Kennedy Toole",
    "year": 1980
  },
  {
    "id": "19d7e3b0-3582-43d9-abfe-d1a382b47b63",
    "title": "El guardián entre el centeno",
    "author": "J. D. Salinger",
    "year": 1951
  },
  {
    "id": "ba7819f7-7194-4f2b-aa5c-7b2bcacb93a3",
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "year": 1759
  },
  {
    "id": "111c122c-7ddd-4912-927c-328683c9be8f",
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980
  },
  {
    "id": "9c94bbb8-917d-4795-a523-72aa033b0caf",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "year": 2000
  },
  {
    "id": "210938df-b797-44fe-b642-ad63237b9a9f",
    "title": "El péndulo de Foucault",
    "author": "Umberto Eco",
    "year": 1988
  },
  {
    "id": "1454f7b6-75ef-4baa-a934-6b7db2de1ca5",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "year": 1922
  },
  {
    "id": "63a050fd-8220-411f-9635-8720f90af41b",
    "title": "El lobo estepario",
    "author": "Hermann Hesse",
    "year": 1927
  },
  {
    "id": "3f566268-8472-4a7e-babe-cfb7b6634d75",
    "title": "Demian",
    "author": "Hermann Hesse",
    "year": 1919
  },
  {
    "id": "ef8b6d38-8353-4f97-aa81-fb45ffba5959",
    "title": "La náusea",
    "author": "Jean-Paul Sartre",
    "year": 1938
  },
  {
    "id": "86a7d63f-a664-469b-b69b-8bde861da15d",
    "title": "El extranjero",
    "author": "Albert Camus",
    "year": 1942
  },
  {
    "id": "c2f616e3-35f7-45ac-bee9-fa06b0b1efb4",
    "title": "La peste",
    "author": "Albert Camus",
    "year": 1947
  },
  {
    "id": "f5a6043e-e22b-436d-ae5c-18bef976ba3a",
    "title": "El diario de Ana Frank",
    "author": "Anne Frank",
    "year": 1947
  },
  {
    "id": "c0367c0f-d898-4212-a752-597bfde5e0b7",
    "title": "La isla del tesoro",
    "author": "Robert Louis Stevenson",
    "year": 1883
  },
  {
    "id": "854e8cf4-87e1-46fe-a330-5d77cf2fb773",
    "title": "La vuelta al mundo en 80 días",
    "author": "Julio Verne",
    "year": 1873
  },
  {
    "id": "2ae85c4c-e3d2-4c00-9688-84fc0696934d",
    "title": "20.000 leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870
  },
  {
    "id": "d98557c1-7d46-4092-889b-3c12c4f1c436",
    "title": "De la Tierra a la Luna",
    "author": "Julio Verne",
    "year": 1865
  },
  {
    "id": "0c764377-804e-4c9a-9d94-0fda57de63d9",
    "title": "El conde de Montecristo",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "c6a4a010-ff5a-4d4c-ad2d-792513f8202d",
    "title": "Los tres mosqueteros",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "ee219bac-b046-447f-a91d-8c2d192149a5",
    "title": "Papá Goriot",
    "author": "Honoré de Balzac",
    "year": 1835
  },
  {
    "id": "8fe60a98-3abc-4ee2-84d1-f268b0ae6f79",
    "title": "La condición humana",
    "author": "André Malraux",
    "year": 1933
  },
  {
    "id": "8032f82b-d81f-4797-a1b9-8a65f1a02490",
    "title": "El idiota",
    "author": "Fiódor Dostoievski",
    "year": 1869
  },
  {
    "id": "c6220487-2a95-4ff6-8c95-da4e25d2d043",
    "title": "Memorias del subsuelo",
    "author": "Fiódor Dostoievski",
    "year": 1864
  },
  {
    "id": "29ac5285-7b66-42b1-884d-0ad6516f23d4",
    "title": "El corazón de las tinieblas",
    "author": "Joseph Conrad",
    "year": 1899
  },
  {
    "id": "8ed59fda-1e04-4d38-9238-d2408b78de23",
    "title": "El señor de las moscas",
    "author": "William Golding",
    "year": 1954
  },
  {
    "id": "8727991e-e403-46e0-9e67-d02487206e10",
    "title": "Cándido",
    "author": "Voltaire",
    "year": 1759
  },
  {
    "id": "c867e4df-9036-4614-80f8-2309fb596e36",
    "title": "La divina comedia",
    "author": "Dante Alighieri",
    "year": 1320
  },
  {
    "id": "d17d47a0-2eae-4241-b776-dd946c5f4a0d",
    "title": "La Odisea",
    "author": "Homero",
    "year": -800
  },
  {
    "id": "7f70ce82-8b9a-418f-858e-1dea14bee070",
    "title": "La Ilíada",
    "author": "Homero",
    "year": -750
  },
  {
    "id": "5acbec93-fe32-4727-8e42-118670016019",
    "title": "Antígona",
    "author": "Sófocles",
    "year": -441
  },
  {
    "id": "1d360b00-2a17-4e82-a7f0-dacd5ee643e8",
    "title": "Edipo Rey",
    "author": "Sófocles",
    "year": -429
  },
  {
    "id": "7b9a57cd-5e94-45ff-99df-68f1791556ce",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "year": 1603
  },
  {
    "id": "02470381-5d8d-4dde-8140-b3f5fb284457",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "year": 1606
  },
  {
    "id": "524c9758-093f-4277-b907-0acda8d8af9e",
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597
  },
  {
    "id": "2e5567c3-71bb-4594-963c-ad98286b5ae7",
    "title": "Otelo",
    "author": "William Shakespeare",
    "year": 1604
  },
  {
    "id": "56b48541-6f73-4b32-8e00-357da4c6d2fd",
    "title": "El mercader de Venecia",
    "author": "William Shakespeare",
    "year": 1600
  },
  {
    "id": "178d380d-6a74-4bee-846b-0dcea0ffa930",
    "title": "El paraíso perdido",
    "author": "John Milton",
    "year": 1667
  },
  {
    "id": "c905fd8a-7862-439c-a37d-794b6566d8c6",
    "title": "Fausto",
    "author": "Johann Wolfgang von Goethe",
    "year": 1808
  },
  {
    "id": "707a1bdc-b038-49e7-9a49-9b6dd573d95b",
    "title": "Rojo y negro",
    "author": "Stendhal",
    "year": 1830
  },
  {
    "id": "408e49c1-9c7d-4e9a-81b7-922a83ccfdfe",
    "title": "La montaña mágica",
    "author": "Thomas Mann",
    "year": 1924
  },
  {
    "id": "ce1de2fb-3429-4547-9e5b-bfb48a8c0651",
    "title": "Doctor Faustus",
    "author": "Thomas Mann",
    "year": 1947
  },
  {
    "id": "f4c81e08-49c8-47e7-a2ba-6bd7e2e2d05a",
    "title": "Los miserables",
    "author": "Victor Hugo",
    "year": 1862
  },
  {
    "id": "c921beb7-0691-43c3-a35f-739b5436431f",
    "title": "Nuestra Señora de París",
    "author": "Victor Hugo",
    "year": 1831
  },
  {
    "id": "a26ca7d3-7e37-4adc-bbd3-a71adb508590",
    "title": "El retrato de una dama",
    "author": "Henry James",
    "year": 1881
  },
  {
    "id": "cdf06cef-6316-430d-93a0-49e2a8b0eeb1",
    "title": "Middlemarch",
    "author": "George Eliot",
    "year": 1871
  },
  {
    "id": "9d2fcb4d-443b-4082-9be7-d297f265e3bc",
    "title": "Grandes esperanzas",
    "author": "Charles Dickens",
    "year": 1861
  },
  {
    "id": "461a8a74-57d3-4410-8214-3fe7aa575942",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "year": 1838
  },
  {
    "id": "9d64a9c5-ba2e-4833-9303-d5d1e0d81b58",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "year": 1850
  },
  {
    "id": "18c51ede-1988-45a0-95bb-46103c009463",
    "title": "Historia de dos ciudades",
    "author": "Charles Dickens",
    "year": 1859
  },
  {
    "id": "bd8339e2-3382-44fe-afad-9caaa3ef0956",
    "title": "La feria de las vanidades",
    "author": "William M. Thackeray",
    "year": 1848
  },
  {
    "id": "6a232221-2819-4ffa-886d-9404fcc7b36a",
    "title": "Narciso y Goldmundo",
    "author": "Hermann Hesse",
    "year": 1930
  },
  {
    "id": "625e9943-4aed-4030-9b88-03f0bbaaa550",
    "title": "Yo, robot",
    "author": "Isaac Asimov",
    "year": 1950
  },
  {
    "id": "b7f68e0f-338a-44fc-816f-f86987d4ba3a",
    "title": "Fundación",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "c0099a62-9698-46d4-a95b-cb1582850374",
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "id": "1e11f72c-d586-41d8-acd5-e60ff6e3cbd4",
    "title": "Neuromante",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "id": "acf6c738-d55a-4335-a49f-650017cf8cc1",
    "title": "La mano izquierda de la oscuridad",
    "author": "Ursula K. Le Guin",
    "year": 1969
  },
  {
    "id": "6adb0c1d-3017-48a8-8715-90d5a47be377",
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "year": 1985
  },
  {
    "id": "399cc76f-450b-4515-9bf9-b646d9746d39",
    "title": "It",
    "author": "Stephen King",
    "year": 1986
  },
  {
    "id": "f8993c78-0a7f-4f74-ba22-8f3367a9c1c3",
    "title": "El resplandor",
    "author": "Stephen King",
    "year": 1977
  },
  {
    "id": "ac837265-a027-4659-8fcc-f1aa09288470",
    "title": "Cementerio de animales",
    "author": "Stephen King",
    "year": 1983
  },
  {
    "id": "b6013489-0eea-45e5-98f9-04ac8b0dc8f2",
    "title": "El nombre del viento",
    "author": "Patrick Rothfuss",
    "year": 2007
  },
  {
    "id": "4a2a23bb-e3d1-4c80-9b77-edbe4a7f41cd",
    "title": "Juego de tronos",
    "author": "George R. R. Martin",
    "year": 1996
  },
  {
    "id": "9d4135fd-f6de-4c95-afe2-925f4e9d2e48",
    "title": "Choque de reyes",
    "author": "George R. R. Martin",
    "year": 1998
  },
  {
    "id": "db0106bc-c8c8-4d9d-b20f-7f666ccb053f",
    "title": "Tormenta de espadas",
    "author": "George R. R. Martin",
    "year": 2000
  },
  {
    "id": "a6d8049b-79ea-43bd-a09c-484653c4f993",
    "title": "Festín de cuervos",
    "author": "George R. R. Martin",
    "year": 2005
  },
  {
    "id": "91b5092b-a308-4ea8-8a66-980c9ebf6eb5",
    "title": "Danza de dragones",
    "author": "George R. R. Martin",
    "year": 2011
  },
  {
    "id": "4f7db191-a70c-4d73-8b3f-685aa19c16dd",
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": 2002
  },
  {
    "id": "1a63efaa-e751-4a32-909e-a8841ea09d8d",
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": 2003
  },
  {
    "id": "9f64b88a-7c9d-476d-bc24-71cd6189a589",
    "title": "Ángeles y demonios",
    "author": "Dan Brown",
    "year": 2000
  },
  {
    "id": "9ae77ec5-cd23-443f-bbdb-010344f4b725",
    "title": "Inferno",
    "author": "Dan Brown",
    "year": 2013
  },
  {
    "id": "c12ec9ba-1d07-47b2-bd33-85d763c891fc",
    "title": "El alquimista",
    "author": "Paulo Coelho",
    "year": 1988
  },
  {
    "id": "2d72b151-2b78-4442-bfa4-88a347b70c8c",
    "title": "La insoportable levedad del ser",
    "author": "Milan Kundera",
    "year": 1984
  },
  {
    "id": "22a8f73f-c8a0-4490-862a-b0bb547fba3e",
    "title": "El tambor de hojalata",
    "author": "Günter Grass",
    "year": 1959
  },
  {
    "id": "4c25f162-7d5c-4af0-934c-da5c4f288d74",
    "title": "Patria",
    "author": "Fernando Aramburu",
    "year": 2016
  },
  {
    "id": "238d44ee-b172-4597-acae-8090209740b0",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "year": 2011
  },
  {
    "id": "7d0170ab-ec01-4ab3-ab54-b2ca27cfddd2",
    "title": "Homo Deus",
    "author": "Yuval Noah Harari",
    "year": 2015
  },
  {
    "id": "c97d3e58-e61a-4596-8890-4ed5a9405072",
    "title": "Breves respuestas a las grandes preguntas",
    "author": "Stephen Hawking",
    "year": 2018
  },
  {
    "id": "0d01ca15-b51a-4e29-b984-a4320d149ec1",
    "title": "Breve historia del tiempo",
    "author": "Stephen Hawking",
    "year": 1988
  },
  {
    "id": "a3f9c93b-36f1-4ce9-b0e2-61292e40a361",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "year": 1605
  },
  {
    "id": "2e124582-76cf-4d70-bc86-36d484b1795a",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  },
  {
    "id": "5d66fe33-59ce-436a-b111-975a7ef08381",
    "title": "El amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": 1985
  },
  {
    "id": "cf1d4a82-c7d3-4502-bf73-bfa92a1f1233",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "year": 1955
  },
  {
    "id": "149156ff-933c-4120-a733-c0e05aa94093",
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "year": 1963
  },
  {
    "id": "aafda522-b218-4375-8ce0-11959aa2e477",
    "title": "La ciudad y los perros",
    "author": "Mario Vargas Llosa",
    "year": 1963
  },
  {
    "id": "94534a40-1475-40eb-82ae-b4db00e4be60",
    "title": "La casa de los espíritus",
    "author": "Isabel Allende",
    "year": 1982
  },
  {
    "id": "ec5caff7-2aa8-48ef-8fd5-9e7a650fa86c",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944
  },
  {
    "id": "790df898-3d40-41bb-84b3-47f7da26510e",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "year": 1949
  },
  {
    "id": "71c75263-5804-4641-8ebd-18c7dc0c78c7",
    "title": "Sobre héroes y tumbas",
    "author": "Ernesto Sabato",
    "year": 1961
  },
  {
    "id": "23467e2f-6e62-4d96-83b3-79b859cfef7c",
    "title": "La tregua",
    "author": "Mario Benedetti",
    "year": 1960
  },
  {
    "id": "61f86756-e474-4c0d-9efb-606812cb4d1b",
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "year": 1948
  },
  {
    "id": "1b9a6846-57cc-4a5b-959b-0c839658d3b9",
    "title": "Como agua para chocolate",
    "author": "Laura Esquivel",
    "year": 1989
  },
  {
    "id": "df5cdae4-d102-4c1a-be88-36d0f7daa730",
    "title": "El coronel no tiene quien le escriba",
    "author": "Gabriel García Márquez",
    "year": 1961
  },
  {
    "id": "65e11511-9621-4a9e-b429-f401b13f049b",
    "title": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "year": 1981
  },
  {
    "id": "357d5d28-a3c0-4c9d-ad20-96b9cc422128",
    "title": "El otoño del patriarca",
    "author": "Gabriel García Márquez",
    "year": 1975
  },
  {
    "id": "12b0d81f-76d0-41a7-9bc2-5b1b2116ee2a",
    "title": "Los detectives salvajes",
    "author": "Roberto Bolaño",
    "year": 1998
  },
  {
    "id": "fe14fd6e-6787-42c9-929e-8105f42887e1",
    "title": "2666",
    "author": "Roberto Bolaño",
    "year": 2004
  },
  {
    "id": "c169bd6b-2d69-48b1-8c0e-05187b29e2ef",
    "title": "La sombra del viento",
    "author": "Carlos Ruiz Zafón",
    "year": 2001
  },
  {
    "id": "dfa693dd-edf5-4ad4-a578-e1c9fc0b3814",
    "title": "El juego del ángel",
    "author": "Carlos Ruiz Zafón",
    "year": 2008
  },
  {
    "id": "35c30d22-7e9f-4805-999f-3d30e43224fa",
    "title": "Marina",
    "author": "Carlos Ruiz Zafón",
    "year": 1999
  },
  {
    "id": "e21e3ea1-1f42-44f7-878d-491d9dd0e7dc",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
  },
  {
    "id": "ac37c982-7154-4996-b5f4-cb4d69eb79b5",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": "ab61d3f8-c89b-4917-916d-0b1600d0b396",
    "title": "Rebelión en la granja",
    "author": "George Orwell",
    "year": 1945
  },
  {
    "id": "1471b772-03e0-4b8c-88fb-840c3f13061c",
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": 1953
  },
  {
    "id": "ebbad167-412d-4f12-8c3a-4753427c3f97",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "year": 1866
  },
  {
    "id": "c9b5cd99-2a03-4688-9007-86318a5b17e8",
    "title": "Los hermanos Karamázov",
    "author": "Fiódor Dostoievski",
    "year": 1880
  },
  {
    "id": "f8a91f12-3378-47dd-b0eb-841ab73273ea",
    "title": "Guerra y paz",
    "author": "León Tolstói",
    "year": 1869
  },
  {
    "id": "dd34970a-c3d5-4a97-945a-d75a88487b54",
    "title": "Anna Karenina",
    "author": "León Tolstói",
    "year": 1877
  },
  {
    "id": "2243d468-896c-42d4-b124-b7a18145b946",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "year": 1857
  },
  {
    "id": "dfaa240e-97f1-46f6-b305-e5d6c71e0a4d",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": "ade08b2a-1e7d-414d-a77f-b00624565870",
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815
  },
  {
    "id": "15995395-c04b-4954-aca9-f85a51b6fbe3",
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "year": 1847
  },
  {
    "id": "eac58bdd-05d1-4f61-b233-c6ad08d49bdc",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847
  },
  {
    "id": "9a2e7cf4-77fb-4f80-bdd3-1671c6fc7a1c",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": "1fb809d0-1391-4f34-acf9-566e8a8ba56e",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
  },
  {
    "id": "d247dbd7-12fb-4f77-9f6d-293e9ede467d",
    "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897
  },
  {
    "id": "ee9dff5c-795c-4283-841e-5e651467bb7e",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
  },
  {
    "id": "81c00506-3db9-4f8d-aac4-7a712991397e",
    "title": "La metamorfosis",
    "author": "Franz Kafka",
    "year": 1915
  },
  {
    "id": "12ccd34d-6051-4f78-8be8-ddee49387bf0",
    "title": "El proceso",
    "author": "Franz Kafka",
    "year": 1925
  },
  {
    "id": "c7043685-78de-42de-8279-8880552e76ae",
    "title": "El castillo",
    "author": "Franz Kafka",
    "year": 1926
  },
  {
    "id": "89245cde-d654-4775-990b-73af0a365576",
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "year": 1913
  },
  {
    "id": "c2084b57-0896-4e4b-af7a-f28488431ee5",
    "title": "Ulises",
    "author": "James Joyce",
    "year": 1922
  },
  {
    "id": "68fd8a73-d0e3-4d56-92d9-15d24e441620",
    "title": "Dublineses",
    "author": "James Joyce",
    "year": 1914
  },
  {
    "id": "fae5a1f3-264e-40d8-b717-0a987b0d3e94",
    "title": "El viejo y el mar",
    "author": "Ernest Hemingway",
    "year": 1952
  },
  {
    "id": "7662ea89-4552-474e-bddc-fd1bc9e5c039",
    "title": "Por quién doblan las campanas",
    "author": "Ernest Hemingway",
    "year": 1940
  },
  {
    "id": "2ff5729f-3e13-43db-9142-2b4cb5b78618",
    "title": "Adiós a las armas",
    "author": "Ernest Hemingway",
    "year": 1929
  },
  {
    "id": "6db9d998-56b6-47ab-84c7-9ba142019c7b",
    "title": "El gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": "524b66ae-9970-487b-9300-e117a99fe701",
    "title": "La conjura de los necios",
    "author": "John Kennedy Toole",
    "year": 1980
  },
  {
    "id": "055aeed6-4743-476b-b31d-42c10007aaec",
    "title": "El guardián entre el centeno",
    "author": "J. D. Salinger",
    "year": 1951
  },
  {
    "id": "e57c8451-6c46-4a55-a546-966d00244997",
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "year": 1759
  },
  {
    "id": "40b68f5d-3b6a-4926-8679-fb8531c72dd4",
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980
  },
  {
    "id": "adef0aaf-b32b-492d-aa2c-e1aa7f79993b",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "year": 2000
  },
  {
    "id": "2cb2aab0-2cff-40a9-b8ee-95958437ae52",
    "title": "El péndulo de Foucault",
    "author": "Umberto Eco",
    "year": 1988
  },
  {
    "id": "4b21fc7d-51e1-4fe2-88c8-b8ea040f22fb",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "year": 1922
  },
  {
    "id": "bd9b71eb-2ad4-43d8-99dc-98a3f31731b7",
    "title": "El lobo estepario",
    "author": "Hermann Hesse",
    "year": 1927
  },
  {
    "id": "203ec61d-3ac4-4cd3-b0aa-6495288d196b",
    "title": "Demian",
    "author": "Hermann Hesse",
    "year": 1919
  },
  {
    "id": "a295866f-798b-4b7d-9312-63c5f4f9c80c",
    "title": "La náusea",
    "author": "Jean-Paul Sartre",
    "year": 1938
  },
  {
    "id": "416aa50c-8b9b-4536-b17f-9ce3814260a6",
    "title": "El extranjero",
    "author": "Albert Camus",
    "year": 1942
  },
  {
    "id": "2abf5570-86c2-4f3c-8534-fbc51c084bbb",
    "title": "La peste",
    "author": "Albert Camus",
    "year": 1947
  },
  {
    "id": "61776d86-1166-4ad2-a29f-56554b8de676",
    "title": "El diario de Ana Frank",
    "author": "Anne Frank",
    "year": 1947
  },
  {
    "id": "2be785f3-f367-4500-a0d2-c626c6897cef",
    "title": "La isla del tesoro",
    "author": "Robert Louis Stevenson",
    "year": 1883
  },
  {
    "id": "68f8045c-e2c4-45ae-b029-2379b9b7c142",
    "title": "La vuelta al mundo en 80 días",
    "author": "Julio Verne",
    "year": 1873
  },
  {
    "id": "5906a2fa-511d-4ecc-bd1f-79651f812333",
    "title": "20.000 leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870
  },
  {
    "id": "aef08e7a-ff23-4529-829b-bbe691437587",
    "title": "De la Tierra a la Luna",
    "author": "Julio Verne",
    "year": 1865
  },
  {
    "id": "487d609f-a004-4927-b681-d5f38571e93d",
    "title": "El conde de Montecristo",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "68677697-e787-45bd-a614-724ee40d0ca0",
    "title": "Los tres mosqueteros",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "de3c79c2-40ac-46eb-842d-3892ff0217c1",
    "title": "Papá Goriot",
    "author": "Honoré de Balzac",
    "year": 1835
  },
  {
    "id": "3b76348b-ae17-4ef3-a513-12064171b48a",
    "title": "La condición humana",
    "author": "André Malraux",
    "year": 1933
  },
  {
    "id": "46c70d4f-c081-41f8-ba7e-ac9352f955c1",
    "title": "El idiota",
    "author": "Fiódor Dostoievski",
    "year": 1869
  },
  {
    "id": "e05dacf5-911f-43f7-850b-390cfd47e512",
    "title": "Memorias del subsuelo",
    "author": "Fiódor Dostoievski",
    "year": 1864
  },
  {
    "id": "50d32d56-a8a8-4eb7-b58c-ab67ff24ec17",
    "title": "El corazón de las tinieblas",
    "author": "Joseph Conrad",
    "year": 1899
  },
  {
    "id": "25cf4708-d5a1-4acd-be5e-7fab88b8d75b",
    "title": "El señor de las moscas",
    "author": "William Golding",
    "year": 1954
  },
  {
    "id": "1d0209ea-fa80-4c8e-9358-38514bff6a4d",
    "title": "Cándido",
    "author": "Voltaire",
    "year": 1759
  },
  {
    "id": "b971bf22-d4dd-4f5b-9913-44e905bd4472",
    "title": "La divina comedia",
    "author": "Dante Alighieri",
    "year": 1320
  },
  {
    "id": "7ec707ba-0885-4b97-bf24-ad599fd76fb7",
    "title": "La Odisea",
    "author": "Homero",
    "year": -800
  },
  {
    "id": "2d3d3c65-04fc-47b4-85bf-ddf74528af90",
    "title": "La Ilíada",
    "author": "Homero",
    "year": -750
  },
  {
    "id": "43e6d70c-2c08-45e8-940c-904c0b599774",
    "title": "Antígona",
    "author": "Sófocles",
    "year": -441
  },
  {
    "id": "9d68aa95-f7db-41a3-91cb-e5be7e51b0f7",
    "title": "Edipo Rey",
    "author": "Sófocles",
    "year": -429
  },
  {
    "id": "586fb89f-9e93-40a2-a3a0-ad5dd2b102be",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "year": 1603
  },
  {
    "id": "c9d76b8a-4132-4188-85ea-8df3a3ad80f6",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "year": 1606
  },
  {
    "id": "6f625c8e-0a23-4ee3-8251-6f04abed6a85",
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597
  },
  {
    "id": "54fecfb9-a4c4-4758-9cda-f53efc540a24",
    "title": "Otelo",
    "author": "William Shakespeare",
    "year": 1604
  },
  {
    "id": "9d47c780-a0ef-496e-a7e4-6d19f28bf225",
    "title": "El mercader de Venecia",
    "author": "William Shakespeare",
    "year": 1600
  },
  {
    "id": "8d6382a1-9752-40de-9aa6-d2daa43cc1fb",
    "title": "El paraíso perdido",
    "author": "John Milton",
    "year": 1667
  },
  {
    "id": "23fc7a6e-1b2b-43a5-ace2-c3211e5a6dcc",
    "title": "Fausto",
    "author": "Johann Wolfgang von Goethe",
    "year": 1808
  },
  {
    "id": "782b53ee-2a28-422b-8231-c72955414102",
    "title": "Rojo y negro",
    "author": "Stendhal",
    "year": 1830
  },
  {
    "id": "f4442fc7-b70c-404e-bb62-e237e4149afe",
    "title": "La montaña mágica",
    "author": "Thomas Mann",
    "year": 1924
  },
  {
    "id": "ab356e66-3f52-47cc-9db9-3d6cb339b5cc",
    "title": "Doctor Faustus",
    "author": "Thomas Mann",
    "year": 1947
  },
  {
    "id": "a4ac3e3c-b6b9-4bea-803b-71f52c0c93b3",
    "title": "Los miserables",
    "author": "Victor Hugo",
    "year": 1862
  },
  {
    "id": "1fc0b1d0-38c7-4828-b9de-547663a6fb78",
    "title": "Nuestra Señora de París",
    "author": "Victor Hugo",
    "year": 1831
  },
  {
    "id": "75f0db24-3cd9-442a-8af7-973adb857e84",
    "title": "El retrato de una dama",
    "author": "Henry James",
    "year": 1881
  },
  {
    "id": "f324d772-d3c2-4053-b9e9-c7217f09cdde",
    "title": "Middlemarch",
    "author": "George Eliot",
    "year": 1871
  },
  {
    "id": "399881e7-068d-4a2f-8bb3-e1f1f50fec40",
    "title": "Grandes esperanzas",
    "author": "Charles Dickens",
    "year": 1861
  },
  {
    "id": "2fa9140b-107e-430e-9b8d-62be075196da",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "year": 1838
  },
  {
    "id": "127555d2-712a-4573-b4f2-bcd3118b0fa4",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "year": 1850
  },
  {
    "id": "8df12835-85d5-4230-a98b-70dc6658bfa4",
    "title": "Historia de dos ciudades",
    "author": "Charles Dickens",
    "year": 1859
  },
  {
    "id": "19fcd099-4017-4779-9ce0-677512373d71",
    "title": "La feria de las vanidades",
    "author": "William M. Thackeray",
    "year": 1848
  },
  {
    "id": "7fd58f61-42b9-48a0-a12f-0f07db4d4217",
    "title": "Narciso y Goldmundo",
    "author": "Hermann Hesse",
    "year": 1930
  },
  {
    "id": "88aaa06d-09bd-4b1e-a496-7d64fd41a8c3",
    "title": "Yo, robot",
    "author": "Isaac Asimov",
    "year": 1950
  },
  {
    "id": "8705f3ff-b06b-46a3-8237-54ca1f24d335",
    "title": "Fundación",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "d36dd7f9-a06b-446d-b701-802e8e77e56f",
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "id": "48b817ed-3a3d-4b14-85d6-f994d51c1ddd",
    "title": "Neuromante",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "id": "d3e0a18c-d79b-4044-b8bd-00aa6cd099ca",
    "title": "La mano izquierda de la oscuridad",
    "author": "Ursula K. Le Guin",
    "year": 1969
  },
  {
    "id": "77977f6d-26ae-4a6b-bd30-f88e7e785e6b",
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "year": 1985
  },
  {
    "id": "1f96c40d-192c-4c32-92df-70cfe7b714a8",
    "title": "It",
    "author": "Stephen King",
    "year": 1986
  },
  {
    "id": "80b8fb9d-1faa-4eb6-9954-fbc6abaf3106",
    "title": "El resplandor",
    "author": "Stephen King",
    "year": 1977
  },
  {
    "id": "74112985-29d0-4d34-8bcb-ae3666f08165",
    "title": "Cementerio de animales",
    "author": "Stephen King",
    "year": 1983
  },
  {
    "id": "f3dc350e-402b-46e2-89b9-417559172e41",
    "title": "El nombre del viento",
    "author": "Patrick Rothfuss",
    "year": 2007
  },
  {
    "id": "581c34a4-7102-42fa-98c8-1594924a9dff",
    "title": "Juego de tronos",
    "author": "George R. R. Martin",
    "year": 1996
  },
  {
    "id": "5c55cd53-712a-4b6d-a4af-3e415b8e2b79",
    "title": "Choque de reyes",
    "author": "George R. R. Martin",
    "year": 1998
  },
  {
    "id": "01cb0f35-98e1-4958-953a-3df091b37aa1",
    "title": "Tormenta de espadas",
    "author": "George R. R. Martin",
    "year": 2000
  },
  {
    "id": "21fc3bd7-9020-4390-8778-0ac5c1f01ef2",
    "title": "Festín de cuervos",
    "author": "George R. R. Martin",
    "year": 2005
  },
  {
    "id": "81f0dd64-f167-4e1f-bc00-737078246832",
    "title": "Danza de dragones",
    "author": "George R. R. Martin",
    "year": 2011
  },
  {
    "id": "8671fef0-2540-4446-a9c0-88abaafd70af",
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": 2002
  },
  {
    "id": "1cb2332d-8d92-49f3-874f-8d08cc792bb3",
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": 2003
  },
  {
    "id": "e57f97fc-5dce-4791-bedf-0405e13e9206",
    "title": "Ángeles y demonios",
    "author": "Dan Brown",
    "year": 2000
  },
  {
    "id": "6e1e8320-6c94-477f-b00f-c77bce455ffc",
    "title": "Inferno",
    "author": "Dan Brown",
    "year": 2013
  },
  {
    "id": "2bca060b-b57a-41c1-bd73-468578780670",
    "title": "El alquimista",
    "author": "Paulo Coelho",
    "year": 1988
  },
  {
    "id": "53835d30-e6c5-4c09-9a52-acf828368a12",
    "title": "La insoportable levedad del ser",
    "author": "Milan Kundera",
    "year": 1984
  },
  {
    "id": "553d2042-c3f1-4c3d-a813-2e79395cd370",
    "title": "El tambor de hojalata",
    "author": "Günter Grass",
    "year": 1959
  },
  {
    "id": "5204a4bb-d061-44da-a996-1a39f5bc40fc",
    "title": "Patria",
    "author": "Fernando Aramburu",
    "year": 2016
  },
  {
    "id": "899776db-6222-4033-941c-cd6e12202206",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "year": 2011
  },
  {
    "id": "c105b33d-78f2-4b95-9666-e3f554b03e68",
    "title": "Homo Deus",
    "author": "Yuval Noah Harari",
    "year": 2015
  },
  {
    "id": "92cd7c7e-f3d9-406f-ae56-d8710c5ffe1f",
    "title": "Breves respuestas a las grandes preguntas",
    "author": "Stephen Hawking",
    "year": 2018
  },
  {
    "id": "037787b4-b2b7-47a2-acd8-5ed3d75e3c9e",
    "title": "Breve historia del tiempo",
    "author": "Stephen Hawking",
    "year": 1988
  },
  {
    "id": "fadd703d-c145-411d-a095-5602bb32b133",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "year": 1605
  },
  {
    "id": "14e4b2c3-7ed2-49df-8fc1-6f218e86b481",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  },
  {
    "id": "64bb20e9-6909-4a89-b26a-60878e730f81",
    "title": "El amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": 1985
  },
  {
    "id": "b1aa1fb3-49a3-4b55-9260-0ae4c0978285",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "year": 1955
  },
  {
    "id": "73674a5a-0f65-4d52-84d0-30cceba5d414",
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "year": 1963
  },
  {
    "id": "a2ac74a0-18a5-4d9a-a3ab-e6be6bc4e36e",
    "title": "La ciudad y los perros",
    "author": "Mario Vargas Llosa",
    "year": 1963
  },
  {
    "id": "48bcaa13-b80d-45fb-ae21-45b6d1ccf4af",
    "title": "La casa de los espíritus",
    "author": "Isabel Allende",
    "year": 1982
  },
  {
    "id": "1167db25-119b-4237-ad56-ec4fd574b68b",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944
  },
  {
    "id": "214b7efa-fe82-454c-8854-0467cd38dacc",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "year": 1949
  },
  {
    "id": "25efd2f6-d883-4d46-9db2-e0f6b527e227",
    "title": "Sobre héroes y tumbas",
    "author": "Ernesto Sabato",
    "year": 1961
  },
  {
    "id": "2f406fb6-ede4-4daf-92c9-e96918723669",
    "title": "La tregua",
    "author": "Mario Benedetti",
    "year": 1960
  },
  {
    "id": "2221c3c5-2ff0-4d9c-a7d0-f2b1aa6de8f0",
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "year": 1948
  },
  {
    "id": "b2c541f5-b26b-405d-8da6-7c30efe527b9",
    "title": "Como agua para chocolate",
    "author": "Laura Esquivel",
    "year": 1989
  },
  {
    "id": "1f3f6e0f-0914-4d96-b6d3-d5fe74b5c395",
    "title": "El coronel no tiene quien le escriba",
    "author": "Gabriel García Márquez",
    "year": 1961
  },
  {
    "id": "3ba31a23-78c8-4513-a617-c39766ea76eb",
    "title": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "year": 1981
  },
  {
    "id": "f6b72091-e456-4f12-9090-213e4df14eb5",
    "title": "El otoño del patriarca",
    "author": "Gabriel García Márquez",
    "year": 1975
  },
  {
    "id": "c48c13e9-6f30-4fef-b8f1-4f350476b54d",
    "title": "Los detectives salvajes",
    "author": "Roberto Bolaño",
    "year": 1998
  },
  {
    "id": "ca12984e-4755-4d68-b193-6fa5cb393ce0",
    "title": "2666",
    "author": "Roberto Bolaño",
    "year": 2004
  },
  {
    "id": "be1e6bb4-7a7e-40bc-91e0-1695d1780512",
    "title": "La sombra del viento",
    "author": "Carlos Ruiz Zafón",
    "year": 2001
  },
  {
    "id": "61b725ea-4489-4648-8b3f-19743ddca749",
    "title": "El juego del ángel",
    "author": "Carlos Ruiz Zafón",
    "year": 2008
  },
  {
    "id": "330ea0f7-e48d-4fe9-9958-c99d1948601a",
    "title": "Marina",
    "author": "Carlos Ruiz Zafón",
    "year": 1999
  },
  {
    "id": "6570c5f1-9df3-46f4-8996-8fe9953e6a2a",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
  },
  {
    "id": "afc5cdae-cb7d-445c-a71b-bf4ef8827c0e",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": "20e26951-7ec4-462d-85f9-ffe5c8cacc0b",
    "title": "Rebelión en la granja",
    "author": "George Orwell",
    "year": 1945
  },
  {
    "id": "880d8cf1-533b-4749-a9ea-67aad06af4ea",
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": 1953
  },
  {
    "id": "eb8b0656-5bbb-449a-bd79-16663bba13a5",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "year": 1866
  },
  {
    "id": "9c396a9b-e255-4258-9d67-fdae879f91e0",
    "title": "Los hermanos Karamázov",
    "author": "Fiódor Dostoievski",
    "year": 1880
  },
  {
    "id": "7071e286-65a6-4e31-aa33-b8b9c138d298",
    "title": "Guerra y paz",
    "author": "León Tolstói",
    "year": 1869
  },
  {
    "id": "61bfc2b0-8136-4cea-ae14-684854c08e43",
    "title": "Anna Karenina",
    "author": "León Tolstói",
    "year": 1877
  },
  {
    "id": "bf2cae1c-f562-4d16-a7ee-25a0058140bf",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "year": 1857
  },
  {
    "id": "7970a668-a47a-4dc3-b5f5-20dc7d0b0240",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": "c685fdc3-ece5-4177-9989-84996b16ebdd",
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815
  },
  {
    "id": "c5a0757a-3815-443a-a553-1403381ff60f",
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "year": 1847
  },
  {
    "id": "81bb3231-e39e-4a6f-9d85-898931437ed4",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847
  },
  {
    "id": "874569bf-5fb1-49ea-ae98-24050d5f64bc",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": "8a2098a3-4f64-4f70-ae17-f26b21102f92",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
  },
  {
    "id": "56fa806c-dfde-4358-b7a8-7d54611a1dee",
    "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897
  },
  {
    "id": "e360ff7f-cb89-440a-b148-23bb2452a60f",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
  },
  {
    "id": "2e13379a-ee6f-4732-9c0a-5e10116a2a08",
    "title": "La metamorfosis",
    "author": "Franz Kafka",
    "year": 1915
  },
  {
    "id": "2c6293c4-aeb5-405a-ab55-54a908056907",
    "title": "El proceso",
    "author": "Franz Kafka",
    "year": 1925
  },
  {
    "id": "b159454c-45be-4acd-9d83-b73c4823f9a1",
    "title": "El castillo",
    "author": "Franz Kafka",
    "year": 1926
  },
  {
    "id": "986cec77-a7fb-45dc-a8f2-4f28effe180e",
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "year": 1913
  },
  {
    "id": "69c947af-9187-4d7d-94ff-5c876b361d03",
    "title": "Ulises",
    "author": "James Joyce",
    "year": 1922
  },
  {
    "id": "e4d0b49d-8af5-4070-bad5-8bd6e2a9fc25",
    "title": "Dublineses",
    "author": "James Joyce",
    "year": 1914
  },
  {
    "id": "ae2fd3a7-0d59-4a9f-9158-137d7fb0427e",
    "title": "El viejo y el mar",
    "author": "Ernest Hemingway",
    "year": 1952
  },
  {
    "id": "97d1c435-bae6-482e-b169-629b5fa3cb7e",
    "title": "Por quién doblan las campanas",
    "author": "Ernest Hemingway",
    "year": 1940
  },
  {
    "id": "85299dcc-77d8-4bfc-96aa-87b569782f6b",
    "title": "Adiós a las armas",
    "author": "Ernest Hemingway",
    "year": 1929
  },
  {
    "id": "1d76642e-929a-45e1-85e3-676d022a6db6",
    "title": "El gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": "b01e862f-bf68-4963-8c0f-e103a64f86d1",
    "title": "La conjura de los necios",
    "author": "John Kennedy Toole",
    "year": 1980
  },
  {
    "id": "d3a534d2-74d4-44f4-baab-4620012c661d",
    "title": "El guardián entre el centeno",
    "author": "J. D. Salinger",
    "year": 1951
  },
  {
    "id": "4bf7824c-cdea-4b16-994b-b174299991f9",
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "year": 1759
  },
  {
    "id": "b58cc95b-6741-455b-8205-6beda82e35ab",
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980
  },
  {
    "id": "67c89714-3183-44b0-b652-701e48512e8c",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "year": 2000
  },
  {
    "id": "c5df93f0-84ce-48d9-a0e5-cb6d4865a1ef",
    "title": "El péndulo de Foucault",
    "author": "Umberto Eco",
    "year": 1988
  },
  {
    "id": "e7778c1a-0844-4c8a-908f-2cbca63e48fc",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "year": 1922
  },
  {
    "id": "48aadc65-6a39-4134-bc20-8126ecb2b484",
    "title": "El lobo estepario",
    "author": "Hermann Hesse",
    "year": 1927
  },
  {
    "id": "8ed4182b-1623-491f-8a41-832ba5be3b39",
    "title": "Demian",
    "author": "Hermann Hesse",
    "year": 1919
  },
  {
    "id": "40d5402e-d90c-4ff5-841a-9077e5a7de77",
    "title": "La náusea",
    "author": "Jean-Paul Sartre",
    "year": 1938
  },
  {
    "id": "efc4ac20-e623-470c-abee-956e1518473d",
    "title": "El extranjero",
    "author": "Albert Camus",
    "year": 1942
  },
  {
    "id": "112a43c0-3a40-4500-9b32-ff52b6b1128e",
    "title": "La peste",
    "author": "Albert Camus",
    "year": 1947
  },
  {
    "id": "9d0c4ba4-d58e-4db9-b896-235015ccb7f5",
    "title": "El diario de Ana Frank",
    "author": "Anne Frank",
    "year": 1947
  },
  {
    "id": "3453a2ad-0211-476c-b166-5df0d11a1fff",
    "title": "La isla del tesoro",
    "author": "Robert Louis Stevenson",
    "year": 1883
  },
  {
    "id": "3236b38f-3790-47a9-8272-e7ce4ed9ec1f",
    "title": "La vuelta al mundo en 80 días",
    "author": "Julio Verne",
    "year": 1873
  },
  {
    "id": "34ff71da-8e96-48a4-ad5f-9f0230ae972b",
    "title": "20.000 leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870
  },
  {
    "id": "6e081e98-c598-4065-8ec4-cb7367cba4af",
    "title": "De la Tierra a la Luna",
    "author": "Julio Verne",
    "year": 1865
  },
  {
    "id": "6f696800-ae3b-463e-8c4a-223361839a7b",
    "title": "El conde de Montecristo",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "575c4514-d5df-4920-a479-a71ec5e6ed57",
    "title": "Los tres mosqueteros",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "72a55e64-b20c-4448-bc20-b2fa0bdfe4e7",
    "title": "Papá Goriot",
    "author": "Honoré de Balzac",
    "year": 1835
  },
  {
    "id": "286aaea6-7e10-438b-b07a-8467fa87c37a",
    "title": "La condición humana",
    "author": "André Malraux",
    "year": 1933
  },
  {
    "id": "23ac7359-c782-49c0-a231-b2346bd847e6",
    "title": "El idiota",
    "author": "Fiódor Dostoievski",
    "year": 1869
  },
  {
    "id": "a4115bfc-8c35-4350-becc-1850d6d0c115",
    "title": "Memorias del subsuelo",
    "author": "Fiódor Dostoievski",
    "year": 1864
  },
  {
    "id": "77cba0f8-78d1-47e9-a188-963ef2b6840b",
    "title": "El corazón de las tinieblas",
    "author": "Joseph Conrad",
    "year": 1899
  },
  {
    "id": "5d3b64cf-1fb9-49cf-8731-9986589a84a3",
    "title": "El señor de las moscas",
    "author": "William Golding",
    "year": 1954
  },
  {
    "id": "5507f35f-2af8-460f-9ae3-0646cbda14a3",
    "title": "Cándido",
    "author": "Voltaire",
    "year": 1759
  },
  {
    "id": "65e2408c-b37d-4b32-ab2f-cf2bab955e39",
    "title": "La divina comedia",
    "author": "Dante Alighieri",
    "year": 1320
  },
  {
    "id": "c024106a-5c1f-49c6-a139-9372fec21bda",
    "title": "La Odisea",
    "author": "Homero",
    "year": -800
  },
  {
    "id": "ad397911-83ba-49b3-982c-df0ba58b0049",
    "title": "La Ilíada",
    "author": "Homero",
    "year": -750
  },
  {
    "id": "549d65f3-b89a-4c1c-86b8-628098650b7d",
    "title": "Antígona",
    "author": "Sófocles",
    "year": -441
  },
  {
    "id": "5c102fbf-8c61-4974-90f9-9b9e7189c6de",
    "title": "Edipo Rey",
    "author": "Sófocles",
    "year": -429
  },
  {
    "id": "1781614c-2336-45af-8d71-950f40533905",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "year": 1603
  },
  {
    "id": "d86c465c-014a-41b5-8e97-053f05ce009c",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "year": 1606
  },
  {
    "id": "effe7e8c-51a3-468b-96f3-3b6915453ced",
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597
  },
  {
    "id": "afde7920-f976-4060-b5b0-086fbbb26c39",
    "title": "Otelo",
    "author": "William Shakespeare",
    "year": 1604
  },
  {
    "id": "24f26173-451d-4e62-8efb-8cb1f7c31a34",
    "title": "El mercader de Venecia",
    "author": "William Shakespeare",
    "year": 1600
  },
  {
    "id": "c0339178-ff25-46e8-aad1-545858416667",
    "title": "El paraíso perdido",
    "author": "John Milton",
    "year": 1667
  },
  {
    "id": "f8c46417-b3bc-4a2c-b393-8ad104832ee6",
    "title": "Fausto",
    "author": "Johann Wolfgang von Goethe",
    "year": 1808
  },
  {
    "id": "91695356-5582-4112-88e4-1325092b29cc",
    "title": "Rojo y negro",
    "author": "Stendhal",
    "year": 1830
  },
  {
    "id": "71a0c3b1-e5bd-42ef-be69-16edb17643d4",
    "title": "La montaña mágica",
    "author": "Thomas Mann",
    "year": 1924
  },
  {
    "id": "2e74de87-35d8-433c-bf1f-ac16c2af76aa",
    "title": "Doctor Faustus",
    "author": "Thomas Mann",
    "year": 1947
  },
  {
    "id": "8f9358ae-47eb-4a09-9bec-f77aa3a1c968",
    "title": "Los miserables",
    "author": "Victor Hugo",
    "year": 1862
  },
  {
    "id": "80bdb662-e7d8-4707-ae3c-9142665f5ddc",
    "title": "Nuestra Señora de París",
    "author": "Victor Hugo",
    "year": 1831
  },
  {
    "id": "aa975203-cadd-407c-b829-7acb7810cb75",
    "title": "El retrato de una dama",
    "author": "Henry James",
    "year": 1881
  },
  {
    "id": "f3962b81-c486-4da6-b765-51aed4b0d9a8",
    "title": "Middlemarch",
    "author": "George Eliot",
    "year": 1871
  },
  {
    "id": "4ff6299e-93dd-4259-9c56-0b81692a3278",
    "title": "Grandes esperanzas",
    "author": "Charles Dickens",
    "year": 1861
  },
  {
    "id": "4ea4aa94-745e-4ae3-8515-e45fbe8d5e1f",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "year": 1838
  },
  {
    "id": "f78da04a-a0e3-45ea-a9e4-b0bc7cc64480",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "year": 1850
  },
  {
    "id": "c40ca3f3-9fb6-4e08-b9c2-b12e479fe321",
    "title": "Historia de dos ciudades",
    "author": "Charles Dickens",
    "year": 1859
  },
  {
    "id": "f4e94dff-202c-4501-ad1a-aef7098e415f",
    "title": "La feria de las vanidades",
    "author": "William M. Thackeray",
    "year": 1848
  },
  {
    "id": "70aed2e0-d691-484f-bd2a-8646fbb9676b",
    "title": "Narciso y Goldmundo",
    "author": "Hermann Hesse",
    "year": 1930
  },
  {
    "id": "2f0f1041-cad4-434c-9132-bfc38c504f1e",
    "title": "Yo, robot",
    "author": "Isaac Asimov",
    "year": 1950
  },
  {
    "id": "8d6e29f7-8f04-4418-8acb-470042a0631d",
    "title": "Fundación",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "68b3ea30-a727-4d91-bcb2-e3f2bd0800cf",
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "id": "ec9de48c-43a2-4b45-8f81-b7458f51dead",
    "title": "Neuromante",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "id": "22d30d85-46a7-417b-8957-b7f30dbe8eff",
    "title": "La mano izquierda de la oscuridad",
    "author": "Ursula K. Le Guin",
    "year": 1969
  },
  {
    "id": "c1392ca6-884f-4965-b57a-3caffd6aa19a",
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "year": 1985
  },
  {
    "id": "a5e2d601-b9a9-4605-b55e-b8fea9d61fde",
    "title": "It",
    "author": "Stephen King",
    "year": 1986
  },
  {
    "id": "d8d2db94-6ebf-4645-bce8-54dcc485f8d3",
    "title": "El resplandor",
    "author": "Stephen King",
    "year": 1977
  },
  {
    "id": "32e0ea71-69c1-4b25-8d37-47e41ae3b977",
    "title": "Cementerio de animales",
    "author": "Stephen King",
    "year": 1983
  },
  {
    "id": "9426d047-223c-4306-8fd4-2a14a9e056b7",
    "title": "El nombre del viento",
    "author": "Patrick Rothfuss",
    "year": 2007
  },
  {
    "id": "d2c54fa9-f628-440a-b1a2-2ec75c71b6fa",
    "title": "Juego de tronos",
    "author": "George R. R. Martin",
    "year": 1996
  },
  {
    "id": "b540a40b-7fcc-404f-94cd-923f4a0be468",
    "title": "Choque de reyes",
    "author": "George R. R. Martin",
    "year": 1998
  },
  {
    "id": "682895d3-4525-455f-a644-fde777d9dc90",
    "title": "Tormenta de espadas",
    "author": "George R. R. Martin",
    "year": 2000
  },
  {
    "id": "77bd2b43-cce5-4a5e-8e39-8798a6337858",
    "title": "Festín de cuervos",
    "author": "George R. R. Martin",
    "year": 2005
  },
  {
    "id": "cd260592-c877-4eb9-9e00-9b97d95de553",
    "title": "Danza de dragones",
    "author": "George R. R. Martin",
    "year": 2011
  },
  {
    "id": "6a262dcf-0bb0-4271-99e2-50a30ede383f",
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": 2002
  },
  {
    "id": "f3184e91-8fe0-4c82-963d-e1642fe55977",
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": 2003
  },
  {
    "id": "373d2eb3-eddc-43bd-991a-0f1b6fb1f700",
    "title": "Ángeles y demonios",
    "author": "Dan Brown",
    "year": 2000
  },
  {
    "id": "3d21d745-d567-4c86-b701-acfcd1381cb8",
    "title": "Inferno",
    "author": "Dan Brown",
    "year": 2013
  },
  {
    "id": "777dc413-9885-45c1-9019-71622b566399",
    "title": "El alquimista",
    "author": "Paulo Coelho",
    "year": 1988
  },
  {
    "id": "a620d9fd-7690-4ae1-a3d4-031c71ff97f5",
    "title": "La insoportable levedad del ser",
    "author": "Milan Kundera",
    "year": 1984
  },
  {
    "id": "df89c151-7f84-4d5b-ba95-8239b87e0e4e",
    "title": "El tambor de hojalata",
    "author": "Günter Grass",
    "year": 1959
  },
  {
    "id": "ebf20fa9-0f6e-444d-9ad9-bc51883ccc07",
    "title": "Patria",
    "author": "Fernando Aramburu",
    "year": 2016
  },
  {
    "id": "25d5ef7b-a159-4926-9890-4e32cf2d09c2",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "year": 2011
  },
  {
    "id": "75491053-0500-4525-a654-fc4bfdec1dc7",
    "title": "Homo Deus",
    "author": "Yuval Noah Harari",
    "year": 2015
  },
  {
    "id": "a55f8b53-41a5-4412-8fbd-520abedbeaf0",
    "title": "Breves respuestas a las grandes preguntas",
    "author": "Stephen Hawking",
    "year": 2018
  },
  {
    "id": "fe1d96d3-7ae2-4e9d-9a2d-46b4d866c52f",
    "title": "Breve historia del tiempo",
    "author": "Stephen Hawking",
    "year": 1988
  },
  {
    "id": "011cb6a0-c849-4a3b-a06f-61ab3e3aae9a",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "year": 1605
  },
  {
    "id": "de25fd8c-af61-45cd-beda-9dc71d183713",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  },
  {
    "id": "92ecefd9-4702-4c85-a215-878c2434fb5e",
    "title": "El amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": 1985
  },
  {
    "id": "961e7e60-ac1c-40d5-be74-938231c6fc52",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "year": 1955
  },
  {
    "id": "43b365dc-4d0f-45e8-b98d-4a52ec725068",
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "year": 1963
  },
  {
    "id": "a0f43e11-5d9f-4256-a4c0-acd1d512c884",
    "title": "La ciudad y los perros",
    "author": "Mario Vargas Llosa",
    "year": 1963
  },
  {
    "id": "0d3a5fa9-f722-4185-b957-bfc394768d2d",
    "title": "La casa de los espíritus",
    "author": "Isabel Allende",
    "year": 1982
  },
  {
    "id": "fd0f67c3-731a-4952-89c8-81d57283348d",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944
  },
  {
    "id": "67fdc31b-79cd-4bae-817c-c866c7372071",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "year": 1949
  },
  {
    "id": "302475ed-6603-4883-97ce-36e40d87112a",
    "title": "Sobre héroes y tumbas",
    "author": "Ernesto Sabato",
    "year": 1961
  },
  {
    "id": "feba760a-8515-46f4-b90e-f7f5c48b4e39",
    "title": "La tregua",
    "author": "Mario Benedetti",
    "year": 1960
  },
  {
    "id": "98cbaead-3298-439d-94f6-f4996a4e50c4",
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "year": 1948
  },
  {
    "id": "edb9fe80-227d-4d1e-bc48-977df9685289",
    "title": "Como agua para chocolate",
    "author": "Laura Esquivel",
    "year": 1989
  },
  {
    "id": "03941fd4-77e4-45ac-9e26-7ea7a4e3612b",
    "title": "El coronel no tiene quien le escriba",
    "author": "Gabriel García Márquez",
    "year": 1961
  },
  {
    "id": "347693dc-6119-4bf0-9519-f5327d25ad20",
    "title": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "year": 1981
  },
  {
    "id": "9a3243bb-48a1-4d5b-a885-39fc9f45e7a0",
    "title": "El otoño del patriarca",
    "author": "Gabriel García Márquez",
    "year": 1975
  },
  {
    "id": "0771bc27-94e9-41dc-beae-1ed758e63ecf",
    "title": "Los detectives salvajes",
    "author": "Roberto Bolaño",
    "year": 1998
  },
  {
    "id": "d728d046-d0dc-434d-9113-145d126473ab",
    "title": "2666",
    "author": "Roberto Bolaño",
    "year": 2004
  },
  {
    "id": "8416c132-7173-4912-bc78-10e4d8b22505",
    "title": "La sombra del viento",
    "author": "Carlos Ruiz Zafón",
    "year": 2001
  },
  {
    "id": "bd9c02e5-c4c1-405f-bf58-3a27e89832c9",
    "title": "El juego del ángel",
    "author": "Carlos Ruiz Zafón",
    "year": 2008
  },
  {
    "id": "84e7fef2-8294-4e4c-bcab-eabc621398ea",
    "title": "Marina",
    "author": "Carlos Ruiz Zafón",
    "year": 1999
  },
  {
    "id": "8dffd59d-b229-4791-b17a-75b04e3acb45",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
  },
  {
    "id": "2030a671-5bbe-44e4-98e8-186d491f1518",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": "5f20d4f1-44b4-4578-b494-de58cadb225f",
    "title": "Rebelión en la granja",
    "author": "George Orwell",
    "year": 1945
  },
  {
    "id": "fb1096e8-0e31-489e-b5a1-e2b80a171eda",
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": 1953
  },
  {
    "id": "0916abaa-4491-409f-bed1-6f353c6179bb",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "year": 1866
  },
  {
    "id": "39145bd0-2e46-45c3-9bf3-f4d534d7cf2b",
    "title": "Los hermanos Karamázov",
    "author": "Fiódor Dostoievski",
    "year": 1880
  },
  {
    "id": "35f7f487-4db3-4b50-9ca6-80e7aa16da0b",
    "title": "Guerra y paz",
    "author": "León Tolstói",
    "year": 1869
  },
  {
    "id": "5aed20f8-e453-4492-b2b3-8274b93f77fb",
    "title": "Anna Karenina",
    "author": "León Tolstói",
    "year": 1877
  },
  {
    "id": "96646fce-815d-47b6-9227-76d13f394490",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "year": 1857
  },
  {
    "id": "936438ab-57ab-49e4-9193-97c84a7a898d",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": "7022401f-51bd-4c7a-96a2-26073a461ac2",
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815
  },
  {
    "id": "77b225a3-d59f-49cb-9c85-bf7e0f0f5806",
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "year": 1847
  },
  {
    "id": "2be3cffe-9a4a-4a8f-ae4c-8f0a7560fbfd",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847
  },
  {
    "id": "fec49506-6800-4185-868d-24df739400ba",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": "d8a8c0d9-0839-417e-b0eb-bf46cac97056",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
  },
  {
    "id": "bb300917-1ecd-4699-b579-629f639a1cc9",
    "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897
  },
  {
    "id": "28283405-cc6b-4b5a-a82e-1c092bce56da",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
  },
  {
    "id": "9f450f33-c380-477f-ae35-75441ae6e5f2",
    "title": "La metamorfosis",
    "author": "Franz Kafka",
    "year": 1915
  },
  {
    "id": "f3c0781a-d6ac-4a9a-ab3f-015e0ea45494",
    "title": "El proceso",
    "author": "Franz Kafka",
    "year": 1925
  },
  {
    "id": "065d4c54-4631-4530-9c15-b883fa56b22c",
    "title": "El castillo",
    "author": "Franz Kafka",
    "year": 1926
  },
  {
    "id": "9e1f5a24-3798-4a2c-9356-23f0dbbbee14",
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "year": 1913
  },
  {
    "id": "a9a75e54-62ee-4e77-aa51-4dce990a6efb",
    "title": "Ulises",
    "author": "James Joyce",
    "year": 1922
  },
  {
    "id": "3d2d8691-ac10-4010-8056-d8d85496f79c",
    "title": "Dublineses",
    "author": "James Joyce",
    "year": 1914
  },
  {
    "id": "f8d612b1-5c22-4014-ad09-d350e3257680",
    "title": "El viejo y el mar",
    "author": "Ernest Hemingway",
    "year": 1952
  },
  {
    "id": "9b981c48-8e78-4e5b-a21d-a567dce4b809",
    "title": "Por quién doblan las campanas",
    "author": "Ernest Hemingway",
    "year": 1940
  },
  {
    "id": "e4eb972b-b8ca-46ef-b565-3f7fe1965c3a",
    "title": "Adiós a las armas",
    "author": "Ernest Hemingway",
    "year": 1929
  },
  {
    "id": "a2565a3e-422f-4f05-b66c-1b668c254d9a",
    "title": "El gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": "872a9ad8-72b6-43ca-944d-a96c0cdf1efb",
    "title": "La conjura de los necios",
    "author": "John Kennedy Toole",
    "year": 1980
  },
  {
    "id": "ab28808d-6160-474c-af51-a772c9186f4d",
    "title": "El guardián entre el centeno",
    "author": "J. D. Salinger",
    "year": 1951
  },
  {
    "id": "9b513f1d-ebcc-43a0-bbec-f879b20a03f5",
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "year": 1759
  },
  {
    "id": "cd9907be-0a3f-4df9-ac67-ab441f07fbe2",
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980
  },
  {
    "id": "51f43c94-5b25-4840-a830-c6e6d9130c14",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "year": 2000
  },
  {
    "id": "f4cd659b-ca2b-403a-a5a0-71290a31e2fd",
    "title": "El péndulo de Foucault",
    "author": "Umberto Eco",
    "year": 1988
  },
  {
    "id": "44719248-0df7-4dab-92a9-bb90b3bc79f1",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "year": 1922
  },
  {
    "id": "cbf50cf1-e010-45b0-a8b0-aa4c9510a7ed",
    "title": "El lobo estepario",
    "author": "Hermann Hesse",
    "year": 1927
  },
  {
    "id": "3170cf96-ee86-4a89-8bea-2c2571513a15",
    "title": "Demian",
    "author": "Hermann Hesse",
    "year": 1919
  },
  {
    "id": "be86b4e2-bc94-4ba8-b3b3-150d3a1eb15e",
    "title": "La náusea",
    "author": "Jean-Paul Sartre",
    "year": 1938
  },
  {
    "id": "245471e1-025c-4831-8a65-6faa64326eeb",
    "title": "El extranjero",
    "author": "Albert Camus",
    "year": 1942
  },
  {
    "id": "16206a9e-d402-41e5-9198-4c62060169ef",
    "title": "La peste",
    "author": "Albert Camus",
    "year": 1947
  },
  {
    "id": "af42d0a4-5dca-4d85-8d97-642d43ca5da8",
    "title": "El diario de Ana Frank",
    "author": "Anne Frank",
    "year": 1947
  },
  {
    "id": "207f992c-07e2-49e9-b7b6-906dd3c8083f",
    "title": "La isla del tesoro",
    "author": "Robert Louis Stevenson",
    "year": 1883
  },
  {
    "id": "506f149d-5d7f-42e2-a53c-4e713519383c",
    "title": "La vuelta al mundo en 80 días",
    "author": "Julio Verne",
    "year": 1873
  },
  {
    "id": "5329b284-2947-443b-ba5f-912042042c28",
    "title": "20.000 leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870
  },
  {
    "id": "60911827-7d07-49d3-a15d-4302aaa5de81",
    "title": "De la Tierra a la Luna",
    "author": "Julio Verne",
    "year": 1865
  },
  {
    "id": "4599a701-09b4-4c1f-bc4d-e20631594d33",
    "title": "El conde de Montecristo",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "2ea1c9ad-3b3c-405b-a99d-f3f483ed36d2",
    "title": "Los tres mosqueteros",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "4d39baac-1648-4211-a17c-09a7aa3aa47e",
    "title": "Papá Goriot",
    "author": "Honoré de Balzac",
    "year": 1835
  },
  {
    "id": "3ccc32b8-4d1f-49ac-8c00-f0a235153c6e",
    "title": "La condición humana",
    "author": "André Malraux",
    "year": 1933
  },
  {
    "id": "d15df79a-6a95-4808-96b9-7bd861257a2f",
    "title": "El idiota",
    "author": "Fiódor Dostoievski",
    "year": 1869
  },
  {
    "id": "7a14d319-4614-41b2-803b-bd810ab75d2a",
    "title": "Memorias del subsuelo",
    "author": "Fiódor Dostoievski",
    "year": 1864
  },
  {
    "id": "4391fc0c-69c8-4a3c-b40a-b824b30792a8",
    "title": "El corazón de las tinieblas",
    "author": "Joseph Conrad",
    "year": 1899
  },
  {
    "id": "a9115788-e3ce-40ac-a9d4-72fe533579ca",
    "title": "El señor de las moscas",
    "author": "William Golding",
    "year": 1954
  },
  {
    "id": "18d9edb2-7d07-4232-ae30-4cb7f0c8ed98",
    "title": "Cándido",
    "author": "Voltaire",
    "year": 1759
  },
  {
    "id": "557e5b2c-a0e4-4a4c-ad0e-8862962148c9",
    "title": "La divina comedia",
    "author": "Dante Alighieri",
    "year": 1320
  },
  {
    "id": "94621350-9d0e-4f56-b7e9-2dd3c1c06729",
    "title": "La Odisea",
    "author": "Homero",
    "year": -800
  },
  {
    "id": "9b01712a-8a3a-4c15-a657-1142d909a598",
    "title": "La Ilíada",
    "author": "Homero",
    "year": -750
  },
  {
    "id": "658449a9-356b-477a-b6a3-d2398516dcd9",
    "title": "Antígona",
    "author": "Sófocles",
    "year": -441
  },
  {
    "id": "083151f2-a36b-4e6b-8edd-ede23883a97d",
    "title": "Edipo Rey",
    "author": "Sófocles",
    "year": -429
  },
  {
    "id": "3cdd2124-8717-4edc-9df3-a365c38fe818",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "year": 1603
  },
  {
    "id": "94503015-30fe-4c34-9f38-bce88d83d9d8",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "year": 1606
  },
  {
    "id": "a6c0ec00-039e-49fc-b40d-a7303fdc2165",
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597
  },
  {
    "id": "180699b1-35d2-412d-88f6-b5e2a7654372",
    "title": "Otelo",
    "author": "William Shakespeare",
    "year": 1604
  },
  {
    "id": "271c2e82-d955-4e4e-8820-23c98196f520",
    "title": "El mercader de Venecia",
    "author": "William Shakespeare",
    "year": 1600
  },
  {
    "id": "bb19032e-8206-4d83-9fa7-6bc2f48e579a",
    "title": "El paraíso perdido",
    "author": "John Milton",
    "year": 1667
  },
  {
    "id": "5c17d29a-f53f-40c6-82cb-6af9ae6a4a66",
    "title": "Fausto",
    "author": "Johann Wolfgang von Goethe",
    "year": 1808
  },
  {
    "id": "2f4ee4cc-467e-41ca-8de0-5f662c9d6c86",
    "title": "Rojo y negro",
    "author": "Stendhal",
    "year": 1830
  },
  {
    "id": "4793b257-2f41-45a1-8cc1-a168a20f8c45",
    "title": "La montaña mágica",
    "author": "Thomas Mann",
    "year": 1924
  },
  {
    "id": "12296b46-9d13-4c96-8ab6-7f5488b5f453",
    "title": "Doctor Faustus",
    "author": "Thomas Mann",
    "year": 1947
  },
  {
    "id": "27261177-2efa-459d-8cc4-493c0bbde41b",
    "title": "Los miserables",
    "author": "Victor Hugo",
    "year": 1862
  },
  {
    "id": "38424f46-e893-4c38-aa39-ab174c121329",
    "title": "Nuestra Señora de París",
    "author": "Victor Hugo",
    "year": 1831
  },
  {
    "id": "41752533-752f-484c-b3f9-e9eb5a0626c7",
    "title": "El retrato de una dama",
    "author": "Henry James",
    "year": 1881
  },
  {
    "id": "266aeaf3-f894-4efe-ab4f-665fcfee3059",
    "title": "Middlemarch",
    "author": "George Eliot",
    "year": 1871
  },
  {
    "id": "3802bbb7-47f0-448c-a04e-56bd7e5d61ff",
    "title": "Grandes esperanzas",
    "author": "Charles Dickens",
    "year": 1861
  },
  {
    "id": "a3b4df37-5af0-49e3-8148-cbfbbb07a9a7",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "year": 1838
  },
  {
    "id": "20590ca0-137d-407e-b08f-27e7c48f4e6a",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "year": 1850
  },
  {
    "id": "e1ed7ef8-8126-4c13-8898-4956f8f43c05",
    "title": "Historia de dos ciudades",
    "author": "Charles Dickens",
    "year": 1859
  },
  {
    "id": "01289f68-7285-4701-96bd-3b6d2128ea8f",
    "title": "La feria de las vanidades",
    "author": "William M. Thackeray",
    "year": 1848
  },
  {
    "id": "8c81c5f5-79bb-41fc-a39a-cc589287bf4e",
    "title": "Narciso y Goldmundo",
    "author": "Hermann Hesse",
    "year": 1930
  },
  {
    "id": "900c70d0-972a-429d-8869-833f062a6909",
    "title": "Yo, robot",
    "author": "Isaac Asimov",
    "year": 1950
  },
  {
    "id": "cf6d2f5a-0326-47b9-9c5c-47b87e645db3",
    "title": "Fundación",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "2d8979d1-19fe-4835-a014-0983550aa681",
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "id": "7caab939-5e1b-4d05-817d-a332e3a7cc31",
    "title": "Neuromante",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "id": "4c25a9cf-d83a-4348-9427-b06a000b6125",
    "title": "La mano izquierda de la oscuridad",
    "author": "Ursula K. Le Guin",
    "year": 1969
  },
  {
    "id": "f77020dc-3d70-4ba8-8d87-197b8888ac12",
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "year": 1985
  },
  {
    "id": "3e69dcea-7018-42cb-98fa-2102173cd216",
    "title": "It",
    "author": "Stephen King",
    "year": 1986
  },
  {
    "id": "bfe58705-a0da-45fa-ace5-214dabff6207",
    "title": "El resplandor",
    "author": "Stephen King",
    "year": 1977
  },
  {
    "id": "a9846c6b-c283-487e-aed0-672c2e525b0a",
    "title": "Cementerio de animales",
    "author": "Stephen King",
    "year": 1983
  },
  {
    "id": "1e8b74d9-eb73-4674-9f1c-e3b146a9b874",
    "title": "El nombre del viento",
    "author": "Patrick Rothfuss",
    "year": 2007
  },
  {
    "id": "b48e9ba3-c93d-4504-9b6a-4f214dc83bad",
    "title": "Juego de tronos",
    "author": "George R. R. Martin",
    "year": 1996
  },
  {
    "id": "0baeb000-bd73-4748-8fe3-2af20fb47c71",
    "title": "Choque de reyes",
    "author": "George R. R. Martin",
    "year": 1998
  },
  {
    "id": "a45b6595-5bbe-42af-9c97-29d2f76c01bd",
    "title": "Tormenta de espadas",
    "author": "George R. R. Martin",
    "year": 2000
  },
  {
    "id": "fcc1c55e-1d76-46f7-baa4-402c1ccb93ba",
    "title": "Festín de cuervos",
    "author": "George R. R. Martin",
    "year": 2005
  },
  {
    "id": "b4333c86-66b5-4b0b-b703-029fc08f46da",
    "title": "Danza de dragones",
    "author": "George R. R. Martin",
    "year": 2011
  },
  {
    "id": "ede6bef9-d529-417c-ad2d-4aa613a4e05e",
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": 2002
  },
  {
    "id": "40463420-bb05-452b-a1c2-73dc3a873202",
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": 2003
  },
  {
    "id": "49df0527-4845-4ec6-afac-5fcd45e1239e",
    "title": "Ángeles y demonios",
    "author": "Dan Brown",
    "year": 2000
  },
  {
    "id": "67d21779-81e5-4dbe-b84b-61ab7df3e22e",
    "title": "Inferno",
    "author": "Dan Brown",
    "year": 2013
  },
  {
    "id": "b9832c16-bf11-45e3-acf0-18a51f7b1b00",
    "title": "El alquimista",
    "author": "Paulo Coelho",
    "year": 1988
  },
  {
    "id": "a41ceb37-1bdc-4189-84ea-63045de31c91",
    "title": "La insoportable levedad del ser",
    "author": "Milan Kundera",
    "year": 1984
  },
  {
    "id": "eb2e831a-90c9-4b57-ab5d-856c19018b2a",
    "title": "El tambor de hojalata",
    "author": "Günter Grass",
    "year": 1959
  },
  {
    "id": "c25d7ad8-de4e-4ffe-a459-9cf4aae07bc2",
    "title": "Patria",
    "author": "Fernando Aramburu",
    "year": 2016
  },
  {
    "id": "30182468-a176-42fb-847d-7721e6082246",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "year": 2011
  },
  {
    "id": "f7b974d6-ea29-4f52-aa5a-79a98728e2c9",
    "title": "Homo Deus",
    "author": "Yuval Noah Harari",
    "year": 2015
  },
  {
    "id": "80262115-a8ab-4e4f-ac0f-c994dea73ae4",
    "title": "Breves respuestas a las grandes preguntas",
    "author": "Stephen Hawking",
    "year": 2018
  },
  {
    "id": "624f9304-d1ca-4eee-b14f-7bb757c2093d",
    "title": "Breve historia del tiempo",
    "author": "Stephen Hawking",
    "year": 1988
  },
  {
    "id": "841499f8-698d-4bdd-83ab-08fd5ed9e312",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "year": 1605
  },
  {
    "id": "31a34304-e3ae-4825-9470-5bff3da967c9",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  },
  {
    "id": "c7c5b7d0-3627-4ef6-a3cd-d56fa3c507f2",
    "title": "El amor en los tiempos del cólera",
    "author": "Gabriel García Márquez",
    "year": 1985
  },
  {
    "id": "1b55333a-7b1e-4033-a13d-a6c667fbe84e",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "year": 1955
  },
  {
    "id": "87cd4a02-278e-418f-8d2e-c04fcb74c0e0",
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "year": 1963
  },
  {
    "id": "1d456e1c-aa8e-4aac-882e-f66f2e78ec03",
    "title": "La ciudad y los perros",
    "author": "Mario Vargas Llosa",
    "year": 1963
  },
  {
    "id": "b38cb1d1-820b-454c-aa30-7fdb1e241d24",
    "title": "La casa de los espíritus",
    "author": "Isabel Allende",
    "year": 1982
  },
  {
    "id": "38ef9353-8606-49cb-bfdf-7584196674a3",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944
  },
  {
    "id": "9dd1c89d-9913-4d71-af86-dd73ee128dff",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "year": 1949
  },
  {
    "id": "4e2548ba-62ac-462a-bc80-dde107fa799a",
    "title": "Sobre héroes y tumbas",
    "author": "Ernesto Sabato",
    "year": 1961
  },
  {
    "id": "f25d2da3-6dac-440a-973a-133b5424ef29",
    "title": "La tregua",
    "author": "Mario Benedetti",
    "year": 1960
  },
  {
    "id": "0b88ca64-eb5e-4849-97cb-a7263d8a9d2a",
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "year": 1948
  },
  {
    "id": "7025c4c4-dc73-4c70-b7ad-58a93d3b974f",
    "title": "Como agua para chocolate",
    "author": "Laura Esquivel",
    "year": 1989
  },
  {
    "id": "6d97c259-d22c-44c6-a9a0-24161d105b46",
    "title": "El coronel no tiene quien le escriba",
    "author": "Gabriel García Márquez",
    "year": 1961
  },
  {
    "id": "442db26d-1f38-4616-bc36-a31d1ea7b1f0",
    "title": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "year": 1981
  },
  {
    "id": "cbb7509d-078f-4baa-b05a-70526d503930",
    "title": "El otoño del patriarca",
    "author": "Gabriel García Márquez",
    "year": 1975
  },
  {
    "id": "4d381edb-5f14-4e33-a043-67d67385d1c3",
    "title": "Los detectives salvajes",
    "author": "Roberto Bolaño",
    "year": 1998
  },
  {
    "id": "2eb73d73-3e4c-4b1d-bf55-8377a7411535",
    "title": "2666",
    "author": "Roberto Bolaño",
    "year": 2004
  },
  {
    "id": "47c66b70-7954-46b8-aa5a-b4b65c4a39b7",
    "title": "La sombra del viento",
    "author": "Carlos Ruiz Zafón",
    "year": 2001
  },
  {
    "id": "ad7b6147-22fc-467d-9161-444e2ad6c568",
    "title": "El juego del ángel",
    "author": "Carlos Ruiz Zafón",
    "year": 2008
  },
  {
    "id": "44ed81c4-45ac-4112-b35e-29d2b95f680e",
    "title": "Marina",
    "author": "Carlos Ruiz Zafón",
    "year": 1999
  },
  {
    "id": "801343c8-d554-4260-be76-b22ae35dc549",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
  },
  {
    "id": "4058931a-4e6e-428b-9c3a-3cb8972d00f5",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": "e8588a5d-009d-47a6-a738-f53db8ebf204",
    "title": "Rebelión en la granja",
    "author": "George Orwell",
    "year": 1945
  },
  {
    "id": "1598b6a4-31f3-463e-aa9d-69730137bea5",
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "year": 1953
  },
  {
    "id": "f91d5433-3f6a-41b0-8b8f-b92a42c61050",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "year": 1866
  },
  {
    "id": "ec7accf9-ebf8-4bad-9130-808291e8906a",
    "title": "Los hermanos Karamázov",
    "author": "Fiódor Dostoievski",
    "year": 1880
  },
  {
    "id": "a55c15a5-1278-4a4b-98d8-36260f665ca0",
    "title": "Guerra y paz",
    "author": "León Tolstói",
    "year": 1869
  },
  {
    "id": "50df4949-0c81-4c7e-8172-adcb9d190d30",
    "title": "Anna Karenina",
    "author": "León Tolstói",
    "year": 1877
  },
  {
    "id": "1b01500b-9d83-4908-b554-2599fd6adedf",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "year": 1857
  },
  {
    "id": "de872439-b46c-422a-8de3-0feddded8151",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": "d3aa8b87-72eb-48b3-b97c-e39f43d467b2",
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815
  },
  {
    "id": "c5c1ec37-7b6b-4d4f-b7cc-ca91a1d7c2f0",
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "year": 1847
  },
  {
    "id": "b92d10d9-8b8b-4a19-886c-7f88a8f119ae",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847
  },
  {
    "id": "5ce98c2d-e4bf-4043-9a61-ce1351b86648",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": "e5f5f386-6731-4db2-b1dc-573802dda826",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
  },
  {
    "id": "a02b3880-f856-4478-87ba-dea124357f46",
    "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897
  },
  {
    "id": "50afba5d-0d30-40bb-bb80-437457833dad",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
  },
  {
    "id": "76b49dd0-83f1-44e5-b631-cc1bd5a37b2f",
    "title": "La metamorfosis",
    "author": "Franz Kafka",
    "year": 1915
  },
  {
    "id": "f0ca1f69-58ca-4d01-ac8f-948a114b6948",
    "title": "El proceso",
    "author": "Franz Kafka",
    "year": 1925
  },
  {
    "id": "6fbe90bf-1289-4733-8139-651e347ccc09",
    "title": "El castillo",
    "author": "Franz Kafka",
    "year": 1926
  },
  {
    "id": "3a7740a5-1fe2-471d-81a7-c2c56261c061",
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "year": 1913
  },
  {
    "id": "b5f5163c-85e9-4bde-9f75-7a350cbb66bd",
    "title": "Ulises",
    "author": "James Joyce",
    "year": 1922
  },
  {
    "id": "d3fc86d1-8ed6-46f5-8803-d6e41e0204b0",
    "title": "Dublineses",
    "author": "James Joyce",
    "year": 1914
  },
  {
    "id": "1da58e63-d5b8-4f83-8e8c-e3dad0f6021a",
    "title": "El viejo y el mar",
    "author": "Ernest Hemingway",
    "year": 1952
  },
  {
    "id": "32218c25-1c29-45d7-b21f-f4f82792662b",
    "title": "Por quién doblan las campanas",
    "author": "Ernest Hemingway",
    "year": 1940
  },
  {
    "id": "21d042b0-d76c-4034-9118-2a6223efa191",
    "title": "Adiós a las armas",
    "author": "Ernest Hemingway",
    "year": 1929
  },
  {
    "id": "1bc17612-7c3f-492a-b9ad-d36a49e4fa87",
    "title": "El gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": "1a5fcd97-c31c-435f-92cb-a434eb57a39c",
    "title": "La conjura de los necios",
    "author": "John Kennedy Toole",
    "year": 1980
  },
  {
    "id": "3fe8cdb0-3cdb-42c6-8019-d96af82ae1ca",
    "title": "El guardián entre el centeno",
    "author": "J. D. Salinger",
    "year": 1951
  },
  {
    "id": "81e8ebc5-f576-4d4c-be8f-9cce1bad9b7a",
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "year": 1759
  },
  {
    "id": "ed206a70-aba6-46a0-ba4f-f2bd02554b63",
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980
  },
  {
    "id": "bcdf26a6-ca4d-49d0-b3d1-942760116666",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "year": 2000
  },
  {
    "id": "ec6b2e3e-5ee1-4a56-9efb-859a3dfb8913",
    "title": "El péndulo de Foucault",
    "author": "Umberto Eco",
    "year": 1988
  },
  {
    "id": "6a60eaa8-7c0b-48ca-bd82-1e2ef1561809",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "year": 1922
  },
  {
    "id": "5abe00c1-5fdd-4084-97cb-78c0b2765743",
    "title": "El lobo estepario",
    "author": "Hermann Hesse",
    "year": 1927
  },
  {
    "id": "72642a7f-2036-41ff-a92e-346d84935f1a",
    "title": "Demian",
    "author": "Hermann Hesse",
    "year": 1919
  },
  {
    "id": "a8d6a145-9c1e-4169-b2f5-2fa29497ad87",
    "title": "La náusea",
    "author": "Jean-Paul Sartre",
    "year": 1938
  },
  {
    "id": "cccff2ed-b035-4f99-be6a-d945fd970c87",
    "title": "El extranjero",
    "author": "Albert Camus",
    "year": 1942
  },
  {
    "id": "bc9fc7c4-42d8-4bb5-8997-d851b15cd591",
    "title": "La peste",
    "author": "Albert Camus",
    "year": 1947
  },
  {
    "id": "c18ddff7-d49a-414c-b0e0-45cdb393847a",
    "title": "El diario de Ana Frank",
    "author": "Anne Frank",
    "year": 1947
  },
  {
    "id": "98cd122e-205d-4ec0-b0ef-df9a8492e57d",
    "title": "La isla del tesoro",
    "author": "Robert Louis Stevenson",
    "year": 1883
  },
  {
    "id": "82f403c2-c11b-4120-88c4-4c02ce0f0e0c",
    "title": "La vuelta al mundo en 80 días",
    "author": "Julio Verne",
    "year": 1873
  },
  {
    "id": "0d3bf532-0e2d-4f7d-ac04-6a03920c8fe0",
    "title": "20.000 leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870
  },
  {
    "id": "6c56ccc5-4638-43ca-9511-a9113ff694d9",
    "title": "De la Tierra a la Luna",
    "author": "Julio Verne",
    "year": 1865
  },
  {
    "id": "bfcb51c2-0710-426e-9adc-ddb83339e874",
    "title": "El conde de Montecristo",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "77fedf19-0b6c-4491-92ee-92d055d74225",
    "title": "Los tres mosqueteros",
    "author": "Alexandre Dumas",
    "year": 1844
  },
  {
    "id": "258b3006-4490-4446-b9c9-1b6d6e6e813c",
    "title": "Papá Goriot",
    "author": "Honoré de Balzac",
    "year": 1835
  },
  {
    "id": "5f815164-9741-42b0-b5fe-94e2c4153223",
    "title": "La condición humana",
    "author": "André Malraux",
    "year": 1933
  },
  {
    "id": "8be8dc5b-3dff-4731-afde-71de2426464f",
    "title": "El idiota",
    "author": "Fiódor Dostoievski",
    "year": 1869
  },
  {
    "id": "904457e0-949e-4b09-bf87-4dd5a46b50c5",
    "title": "Memorias del subsuelo",
    "author": "Fiódor Dostoievski",
    "year": 1864
  },
  {
    "id": "3b8e2eb5-5879-47da-a610-80af6203de47",
    "title": "El corazón de las tinieblas",
    "author": "Joseph Conrad",
    "year": 1899
  },
  {
    "id": "e9887d28-2209-4d92-9999-71d52ab04444",
    "title": "El señor de las moscas",
    "author": "William Golding",
    "year": 1954
  },
  {
    "id": "e6a9e132-6749-4347-902c-b28fd78a6e8c",
    "title": "Cándido",
    "author": "Voltaire",
    "year": 1759
  },
  {
    "id": "c45b4e35-e422-4367-837b-473be46904b9",
    "title": "La divina comedia",
    "author": "Dante Alighieri",
    "year": 1320
  },
  {
    "id": "c8576e07-0da8-4727-be1b-aea5bc983f9b",
    "title": "La Odisea",
    "author": "Homero",
    "year": -800
  },
  {
    "id": "8bf7de7b-8b11-479c-b309-2631158395bc",
    "title": "La Ilíada",
    "author": "Homero",
    "year": -750
  },
  {
    "id": "108d565b-39ca-4e0d-b037-b47d4d32d3a6",
    "title": "Antígona",
    "author": "Sófocles",
    "year": -441
  },
  {
    "id": "140ac3da-70a1-4abc-8f53-3388a9d0f20c",
    "title": "Edipo Rey",
    "author": "Sófocles",
    "year": -429
  },
  {
    "id": "5fe539a1-9b97-49c6-992f-8f7e96c304ad",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "year": 1603
  },
  {
    "id": "55be44eb-205c-400e-be0e-74041efc5970",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "year": 1606
  },
  {
    "id": "c739c85e-d08c-4563-b083-9fcf53345156",
    "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597
  },
  {
    "id": "6ccb7d92-f179-409b-82ed-eaa7d57c8144",
    "title": "Otelo",
    "author": "William Shakespeare",
    "year": 1604
  },
  {
    "id": "8a2e0109-4229-485e-bba3-6ffe01932e2e",
    "title": "El mercader de Venecia",
    "author": "William Shakespeare",
    "year": 1600
  },
  {
    "id": "a8235f78-5586-435d-ae96-af699bfb1d68",
    "title": "El paraíso perdido",
    "author": "John Milton",
    "year": 1667
  },
  {
    "id": "b9d54195-8525-4786-8bff-90289f856fa7",
    "title": "Fausto",
    "author": "Johann Wolfgang von Goethe",
    "year": 1808
  },
  {
    "id": "26998247-2e15-422c-a513-2c1a8d23626e",
    "title": "Rojo y negro",
    "author": "Stendhal",
    "year": 1830
  },
  {
    "id": "7d9c57dc-d135-4e7d-b475-12b00b4550e0",
    "title": "La montaña mágica",
    "author": "Thomas Mann",
    "year": 1924
  },
  {
    "id": "92581456-11f8-485c-997c-38af7cec7d53",
    "title": "Doctor Faustus",
    "author": "Thomas Mann",
    "year": 1947
  },
  {
    "id": "ce3167d2-3231-4992-8d84-a534169d9888",
    "title": "Los miserables",
    "author": "Victor Hugo",
    "year": 1862
  },
  {
    "id": "6b0f35ea-930a-4d73-94fd-905aa1f84689",
    "title": "Nuestra Señora de París",
    "author": "Victor Hugo",
    "year": 1831
  },
  {
    "id": "5e584713-9b10-4694-b9ca-824770c0ea20",
    "title": "El retrato de una dama",
    "author": "Henry James",
    "year": 1881
  },
  {
    "id": "181a9b2f-f2ac-4a60-988f-51a389355720",
    "title": "Middlemarch",
    "author": "George Eliot",
    "year": 1871
  },
  {
    "id": "272b12bd-0892-4815-ae40-7595b715c0c2",
    "title": "Grandes esperanzas",
    "author": "Charles Dickens",
    "year": 1861
  },
  {
    "id": "f9b043a3-7407-471f-9007-1b760314cc6c",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "year": 1838
  },
  {
    "id": "c36af8bf-64ea-4be8-a2a2-a99b2b20c493",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "year": 1850
  },
  {
    "id": "74bf97cb-e792-4b24-bbd7-5e56fc569254",
    "title": "Historia de dos ciudades",
    "author": "Charles Dickens",
    "year": 1859
  },
  {
    "id": "b3b8fd7e-8b29-495c-ad83-002d3a8ca4c5",
    "title": "La feria de las vanidades",
    "author": "William M. Thackeray",
    "year": 1848
  },
  {
    "id": "5e65e3a1-19e1-4f4e-a90f-4a920b7fa32f",
    "title": "Narciso y Goldmundo",
    "author": "Hermann Hesse",
    "year": 1930
  },
  {
    "id": "3c59f55e-e6ec-4a2d-8055-456dbd3a4fe2",
    "title": "Yo, robot",
    "author": "Isaac Asimov",
    "year": 1950
  },
  {
    "id": "550bccb5-99af-4989-b00e-de47ad6d9bc0",
    "title": "Fundación",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "8463d97d-2ab5-44bf-8b8b-c8efabf7fa4d",
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "id": "31e0b335-fd78-4799-988e-d00830150b0e",
    "title": "Neuromante",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "id": "5d2eb874-f613-4a13-8bf5-8d1edfe487d0",
    "title": "La mano izquierda de la oscuridad",
    "author": "Ursula K. Le Guin",
    "year": 1969
  },
  {
    "id": "0ce867d3-36f4-44dd-adda-d0c719449f0a",
    "title": "El cuento de la criada",
    "author": "Margaret Atwood",
    "year": 1985
  },
  {
    "id": "ab510f49-dfe6-47df-85a5-d6e70af56b7c",
    "title": "It",
    "author": "Stephen King",
    "year": 1986
  },
  {
    "id": "4381a344-83f5-4105-84e5-35406bb28f4f",
    "title": "El resplandor",
    "author": "Stephen King",
    "year": 1977
  },
  {
    "id": "fcfcb49b-e3d7-4a65-bea5-b02b9241ff5c",
    "title": "Cementerio de animales",
    "author": "Stephen King",
    "year": 1983
  },
  {
    "id": "21ad5f54-8630-4cdf-9632-482850a72921",
    "title": "El nombre del viento",
    "author": "Patrick Rothfuss",
    "year": 2007
  },
  {
    "id": "5b071c8f-3772-4272-9b40-8286f20bd2ac",
    "title": "Juego de tronos",
    "author": "George R. R. Martin",
    "year": 1996
  },
  {
    "id": "cbb5b0b7-9029-4bf9-9bad-722753367ec9",
    "title": "Choque de reyes",
    "author": "George R. R. Martin",
    "year": 1998
  },
  {
    "id": "b4f9201c-9393-4dde-9b06-5c687cb8bd6c",
    "title": "Tormenta de espadas",
    "author": "George R. R. Martin",
    "year": 2000
  },
  {
    "id": "2ddb27e7-5caf-4770-ae6f-a1dd447e950d",
    "title": "Festín de cuervos",
    "author": "George R. R. Martin",
    "year": 2005
  },
  {
    "id": "60a98ae0-5596-417a-99be-1c9071155f57",
    "title": "Danza de dragones",
    "author": "George R. R. Martin",
    "year": 2011
  },
  {
    "id": "6f2d9d6f-250d-490e-a008-9c0f3b78275e",
    "title": "El psicoanalista",
    "author": "John Katzenbach",
    "year": 2002
  },
  {
    "id": "7b1ba5d8-bc52-4e39-ac78-42323129c36a",
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "year": 2003
  },
  {
    "id": "c897cd99-9711-4156-8d39-b1cd730a1d1c",
    "title": "Ángeles y demonios",
    "author": "Dan Brown",
    "year": 2000
  },
  {
    "id": "b14a8488-8af4-49d0-afb1-da040181a816",
    "title": "Inferno",
    "author": "Dan Brown",
    "year": 2013
  }

];

// Estado mutable en memoria (se inicializa mediante cargarLibros)
let books = [];

function cargarLibros() {
  // Copiamos el array inicial para mantener una fuente de verdad
  books = initialBooks.slice();
}

function obtenerTodos() {
  return books;
}

function buscarPorId(id) {
  return books.find(b => b.id === id) || null;
}

function existeDuplicado(title, year) {
  // Si year no está definido, consideramos solo por título
  if (year === undefined || year === null) {
    return books.some(b => b.title === title);
  }
  return books.some(b => b.title === title && b.year === year);
}

function agregarLibro({ title, author, year }) {
  const nuevo = {
    id: randomUUID(),
    title,
    author,
    year
  };
  books.push(nuevo);
  return nuevo;
}

function eliminarLibro(id) {
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return null;
  const [removed] = books.splice(idx, 1);
  return removed;
}

module.exports = {
  cargarLibros,
  obtenerTodos,
  buscarPorId,
  existeDuplicado,
  agregarLibro,
  eliminarLibro
};
