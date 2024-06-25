    // start with strings, numbers and booleans
    let str = "string 1";
    let str2 = str;
    console.log(str, str2);
    str = "Changed String"; //This doesn't change str2.
    console.log(str, str2);

    let num = 69;
    let num2 = num;
    console.log(num, num2);
    num2 = 96; //This doesn't change num.
    console.log(num, num2);

    //             BUT

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    // You might think we can just do something like this:
    const players2 = players;
    console.log(players, players2);

    // however what happens when we update that array?
    players2[1] = "Gopesh";

    // now here is the problem!
    console.log(players, players2);
    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way
    const players3 = players.slice();
    console.log(players, players3);
    players3[1] = "Goyal";
    console.log(players, players3);

    // or create a new array and concat the old one in
    const players4 = [].concat(players);
    console.log(players, players4);
    players4[1] = "Goyal";
    console.log(players, players4);

    // or use the new ES6 Spread
    const players5 = [...players];
    console.log(players, players5);
    players5[1] = "Goyal";
    console.log(players, players5);

    const players6 = Array.from(players);
    console.log(players, players6);
    players6[1] = "Goyal";
    console.log(players, players6);

    
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const person2 = person;
    console.log(person, person2);
    person2.sex = "male"
    console.log(person, person2);

    // how do we take a copy instead?

    const person3 = Object.assign({}, person);
    console.log(person, person3);
    person3.sex = "female" ;
    console.log(person, person3);

    // The object ...spread
    const person4 = {...person};
    console.log(person, person4);
    person4.sex = "female";
    console.log(person, person4);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
