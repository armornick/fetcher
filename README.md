
# Fetcher

Fetcher is a utility for generating complete npm caches based on a list of packages. These caches can then be used to enable npm on computers that have no internet access.


## Usage

The fetching is based on `projects`, which are lists of `packages`. The current list of projects can be found in the `packages` directory, with the main index stored in `index.ts`. There are other package indexes, which are the files stored in the `indexes` directory. Every index is a set of projects that can be loaded into the program.

To use fetcher as-is, find the project(s) you would like to fetch and run `npm run fetch <list-of-projects>`. For example: `npm run fetch misc-libs bentojs_ css-libs`.

To fetch a project in an index other than the default one, you have to load the index into fetcher first. To do so, give an argument with the following form: `:index-name`. For example: `npm run fetch :vite vite-starters-official`. You can view the list of available indexes at the top of `packages/index.ts`.

It is also possible to load every index into fetcher at one, by loading the virtual index `:all`. For example: `npm run fetch :all cache-bundle`.

Since the application is written in TypeScript, adding projects means you have to compile the code into JavaScript first. To do this, run `npm run build`. You can see examples for how to define projects in the various indexes. The easiest way is to use a `BasicProject`, which is just a bare list of packages, or a `DegitProject`, which downloads a git repository and runs npm install in the downloaded directory.


## Contributions

This is honestly a project for my own private us, so while I don't care if you use my code for any purpose, I will not be accepting any pull requests.


## License

Permission to use, copy, modify, and/or distribute this software for
any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL
WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE
FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY
DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN
AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT
OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
