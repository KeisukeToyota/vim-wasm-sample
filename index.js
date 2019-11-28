import { VimWasm } from './node_modules/vim-wasm/vimwasm.js';

const vim = new VimWasm({
    canvas: document.getElementById('vim-canvas'),
    input: document.getElementById('vim-input'),
    workerScriptPath: './node_modules/vim-wasm/vim.js',
});

vim.start({
  dirs: ['/work'],
  files: {
    '/work/hello.txt': 'hello, world!\n',
    '/.vim/vimrc': 'set number\nset noexpandtab\n',
  },
});
