// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript!'; }
    console.log("Size of the shirt is: ".concat(size, ", and the messasge on the shirt is: \"").concat(message, "\""));
}
make_shirt2();
make_shirt2('medium');
make_shirt2('small', 'typescript is awesome!');
