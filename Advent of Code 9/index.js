let arena = [];

for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 6; i++) {
    arena.push("O")
  }
}

function listToString(alist) {
  alist.forEach(arena => {
    console.log(arena.join(" "));
  });
}

listToString(arena)