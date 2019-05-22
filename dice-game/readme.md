

React Simple App

1. RollDice(parent component) is called from App (main one)
2. RollDice statefull component set as defaultprops all possible values from dumb component(Die.js)
3. The face of both dices will changed base on a random number , this faces(values) go to RollDice state plus a boolean which will be used as to animate app later on.
4. Create a button in RollDice and call a method 'onClick' to calculate random number(faces from dices) and assigned them to state as well as set to true => isRolling for animation purposes.

