// Using Node Native Modules To Manipulate Files


// File System Module
import fileSystem from "fs";


/*
    A file was named file.txt was initially created
    And I used the CopyFileSync method from File System Module
    to copy the content of file.txt into file2.txt.

    I was able to run it by executing it with node in the terminal.
*/
fileSystem.copyFileSync("file.txt", "file2.txt");

/* 
    Regardless of what was written in file 2, once the code is run with Node, 
    it overides it and copies the content of file one to file 2. They synchronize.
*/



// The Node Package Manager (NPM)

// Using NPM
// I installed a package  called superheroes and about to use it in my code
import superheroes, { randomSuperhero } from "superheroes"

let theHeroes = randomSuperhero;

console.log(theHeroes);
