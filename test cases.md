Input = []
Output => [ [] ]

Input = [{ id: 1 }]
Output => [[{ id: 1 }]]

Input = [{ id: 1 }, { id: 1 }]
Output => [[{ id: 1 }]]

Input = [{ id: 1 }, { id: 2 }]
Output => [[{ id: 1 }, { id: 2 }]]

Input = [{ id: 1 }, { id: 1 }, { id: 2 }]
Output => [[{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }]]

Input = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }]
Output => [
  [ { id: 1 }, { id: 2 }, { id: 3 } ],
  [ { id: 1 }, { id: 2 }, { id: 3 } ],
  [ { id: 1 }, { id: 2 }, { id: 3 } ],
  [ { id: 1 }, { id: 2 }, { id: 3 } ]
]