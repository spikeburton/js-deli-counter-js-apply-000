var count = 0

function takeANumber(line) {
  count++;
  line.push(count)
  return `Welcome, number ${count}. You are number ${count} in line.`
}

function nowServing(line) {
  if(line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var cur = line.shift()
    return `Currently serving ${cur}.`
  }
}

function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently: " + count + " people long"

    // let i = 0
    // do {
    //   str += `${i+1}. ${line[i]}, `
    //   i++
    // } while (i < line.length-1)
    // str += `${i+1}. ${line[i]}`

    // return str
  }
}
