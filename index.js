// code your solution heresuter
saturdayFun=(toDo = "roller-skate")=>{
        return `This Saturday, I want to ${toDo}!`;
    }

function mondayWork(toDo= "go to the office") {
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(emphatic) {
    return function(adjective) {
      return `You are ${emphatic}${adjective}${emphatic}!`;
    };
  }
