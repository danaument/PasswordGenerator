resources
    all the different letters, numbers, characters, stored as arrays
        let arrBlank = [];
        const arrUpper = str.split("abcdefghijklmnopqrstuvwxyz");
        const arrLower = str.split("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        const arrNum = str.split("0123456789");
        const arrSym = str.split(" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");




button press begins it all

prompt user for password length
    sanitize inputs
    include requirement for 8 > length > 256
    set length variable

prompt to include 4 data sets
    if none selected - return error
    if a set is selected, append it to source bank
    if a set is selected, add 1 to userWantsType

after all options are run

    do/while loop 
        do - run loop to build string/array
        while - string/array does not include at least one intersection with selected arrays
            compare doubleCheckTypesIncluded variable to userWantsThisManyTypes variable


    use random method to include number of items equal to length variable
        get length of source bank
        generate random number from 1 to length of source bank
            math.floor(math.random() * length) - e.g. .332160 x 30 = 9.978 which becomes 9
        use random number as index of source bank array
        add value from source bank array to string (or maybe array for now and string later)
        repeat * password length value from user

        proposed random method

    verify that password string/array includes at least one of each of the user selected data sets
        compare array intersection?  do this for each set
            perhaps store doublecheck variable above when prompts happen to run these comparisons

            if statements to create while statement comparison
                if userWantsType === 1
                    check intersection
                    add one to userWantsThisManyTypes variable
                repeat for all four types


Output password












to do: 
    look up how prompts work in js. want them to run after button press. which kind of prompt, alert, etc?
    look up how prompts can be used to store variables
