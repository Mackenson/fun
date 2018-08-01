'use strict';

const args = process.argv.slice(2);
let name = args[0];

const availableIntensities = ['low', 'medium', 'high'];
let intensity = availableIntensities.indexOf(args[1]) > -1 ? args[1] : low;

process.stdout.write['Hello' + name + '\n'];
process.stdout.write('You chose' + intensity + 'intensity workout\n')
process.stdout.write('\n Below are your exercisses:\n')

function exercisse(name, intensity){
  let min = 1;
  let max = 5;

  switch (intensity) {
    case 'medium':
      min = 10;
      max = 25;
      break;

      case 'high':
        min = 50;
        max = 100;
        break;
  }
  let reps = Math.floor(Math.random() * (max - min) + min);

  process.stdout.write(name + '' + reps + '\n')
}

exercisse('Push-ups:', intensity)
exercisse('Pull-ups:', intensity)
exercisse('Squats:', intensity)
exercisse('Plank:', intensity)
