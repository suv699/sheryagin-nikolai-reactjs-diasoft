const TestConsole = function () {
    const stack = [];
    this.log = (arg) => {
        stack.push(arg);
    };
    this.result = () => {
        return stack.join("\n");
    };
};

module.exports = TestConsole;