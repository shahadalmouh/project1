'use strict'
//////////////change
module.exports = (robot) => {

  

  robot.hear(/hello/i, (res) => {
    return res.send("hello, What type of food do you like?")
     
  })

  robot.respond(/food type (.*)/i, (res) => {
    const foodType = res.match[1]
    
    
  
    if (foodType === 'italian') {
      res.reply('nino restaueant')
      return
    }

    if (foodType === 'japanese') {
      res.reply('sushiyoshi restaueant ')
      return
    }
    
    res.reply('try again')
  })

  robot.respond(/do(.*)/i, (res) => {
    const foodType = res.match[1]
    
    
  
    if (foodType === '+') {
      let x=3+3
      res.send(x)
      return
    }

    if (foodType === '*') {
      let y=3*3
      res.reply(y)
      return
    }
    
    
  })


  
  const odd = ['1', '3', '5', '7', '9']
  const even = ['2', '4', '6', '8', '10']
  
  robot.respond(`/${odd.join('|')}/i`, (res) => {
    
    res.send(res.random(odd))
  })

  robot.respond(`/${even.join('|')}/i`, (res) => {
    
    res.send(res.random(even))
  })


  robot.respond(/I don t like Sam-I-am/i, (res) => {
    room =  '@shahadalmouh'
    robot.messageRoom (room,"Someone does not like Dr. Seus" )
    res.reply(`try again`)
  })

  
setTimeout(() => {
  res.send("is there any one'?", 60 * 1000)
}, timeout);

  



  

//HUBOT_SLACK_TOKEN=xoxb-550031626199-548966278898-SXfEbELdVSIl0IAzUUDbmRPE bin/hubot --adapter slack

 
 
}


