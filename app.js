let MainChar = {
    human: {
        race: 'human',
        gender: 'male',
        loveInterest: true
    },

    human2: {
        race: 'human',
        gender: 'female',
        loveInterest: true
    },

    human3: {
        race: 'human',
        gender: 'male',
        loveInterest: false
    },

    human4: {
        race: 'human',
        gender: 'female',
        loveInterest: false
    },

    alien: {
        race: 'alien',
        gender: 'male',
        loveInterest: false
    },

    alien2: {
        race: 'alien',
        gender: 'female',
        loveInterest: false
    },

    animal: {
        species: 'your choice',
        gender: 'male',
    },

    animal2: {
        species: 'your choice',
        gender: 'female',
    },
}

function generate(story) {
    console.log('it works')
    let MnChar = MainChar[story]
    console.log(MnChar)
    document.getElementById('genre').innerText = `Genre: ${MnChar}`
}