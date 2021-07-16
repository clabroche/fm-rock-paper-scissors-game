const stack = [
  {
    label: 'rock-paper-scissors-game-front',
    description: 'Your challenge is to build out this rock, paper, scissors game',
    git: {
      home: 'https://github.com/clabroche/fm-rock-paper-scissors-game',
      remote: 'git@github.com:clabroche/fm-rock-paper-scissors-game.git'
    },
    url: 'http://localhost:8080',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'client'],
    spawnOptions: {
      cwd: __dirname,
      env: {

      }
    }
  },
]

module.exports = stack
