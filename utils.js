class Main {
  getInfo () {
    return {
      id: "utils",
      name: "Utils",
      blocks: [{
        opcode: 'isurl',
        blocktype: Scratch.BlockType.REPORTER,
        text: 'isURL [URL]',
        arguments: {
          URL: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'URL'
          }
        }
      }]
    }
  }
  isurl (url) {
    try {
      new URL(url);
    } catch {
      return false;
    }
    return true;
  }
}

Scratch.extensions.register(new Main())
