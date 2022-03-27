const readlineSync = require('readline-sync')

function getVideoSpecs() {
    console.log('\nYouTube Meme Maker (v.0.1)')

    let categories = [ 'Shorts', 'Compilado' ]
    let sources = [ 'Pastebin', 'Reddit', 'YouTube', 'Facebook', 'TikTok', 'Local Storage' ]

    let videoType = readlineSync.keyInSelect(categories, 'Que tipo de vídeo você quer postar?')
    let videoSource = readlineSync.keyInSelect(sources, 'Onde deseja fazer a coleta dos memes?')
    let compiledDuration

    switch(videoType) {
        case 0:
            return { videoType, videoSource }
            break
        case 1:
            compiledDuration = Number(readlineSync.keyIn('Deseja postar um compilado de quantos minutos? [4 ... 8]: ', { limit: '$<4-8>'}))
            return { videoType, videoSource, compiledDuration }
            break
    }
}

module.exports = getVideoSpecs