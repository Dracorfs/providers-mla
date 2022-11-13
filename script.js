// new gridjs.Grid({
//     columns: ['Nombre', 'Email', 'Telefono'],
//     data: [
//         ["John", "john@example.com", "(353) 01 222 3333"],
//         ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
//         ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
//         ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
//         ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
//     ]
// }).render(document.getElementById("table"));
new gridjs.Grid({
    search: true,
    pagination: {
        enabled: true,
        limit: 3,
    },
    columns: ['Nombre', 'Email', 'Telefono'],
    server: {
        url: "https://swapi.dev/api/films",
        then: (data) => data.results.map((movie) =>
            [movie.title, movie.director, movie.producer]
        )
    },
}).render(document.getElementById("table"));