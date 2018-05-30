const getInitialState = () => {
    return {
        movies: [
            {
                id: 1,
                name: 'Dead Pool',
                startDate: 1527552000000, // 29.05.2018
                endDate: 1528329600000, //07.06.2018
                img: 'deadpool',
            },
            {
                id: 2,
                name: 'Avengers: Infinity War',
                startDate: 1527552000000, // 29.05.2018
                endDate: 1528156800000, // 05.06.2018
                img: 'avengers3',
            },
            {
                id: 3,
                name: 'Thor: Ragnarok',
                startDate: 1527724800000, // 31.05.2018
                endDate: 1527724800000, // 31.05.2018
                img: 'thor-ragnarok',
            },
            {
                id: 4,
                name: 'Ant Man',
                startDate: 1527811200000, // 01.06.2018
                endDate: 1528329600000, // 07.06.2018
                img: 'ant-man',
            },
            {
                id: 5,
                name: 'Iron Man',
                startDate: 1527811200000, // 01.06.2018
                endDate: 1528329600000, // 07.06.2018
                img: 'iron-man1',
            }
        ]
    };
}

const MovieReducer = (state = getInitialState(), action = null) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default MovieReducer;