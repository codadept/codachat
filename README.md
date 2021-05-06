# codachat - A real time chatting application 📰

### Go visit the website [here](https://codadept.github.io/codachat) and chat with your friends in real time!

<br>

[![GitHub issues](https://img.shields.io/github/issues/codadept/codachat?style=for-the-badge)](https://github.com/codadept/codachat/issues)
[![GitHub stars](https://img.shields.io/github/stars/codadept/codachat?style=for-the-badge)](https://github.com/codadept/codachat/stargazers)
[![GitHub license](https://img.shields.io/github/license/codadept/codachat?style=for-the-badge)](https://github.com/codadept/codachat/blob/master/LICENSE)

## Have a peek at the codachat web application 🧐

<h2 align="center">
    <img src="https://github.com/codadept/codachat/blob/master/resources/one.png" alt="codachat" width="600px" />
    <br>
    <img src="https://github.com/codadept/codachat/blob/master/resources/two.png" alt="codachat" width="600px" />
    <br>
    <img src="https://github.com/codadept/codachat/blob/master/resources/four.png" alt="codachat" width="600px" />
    <br>
</h2>

---

## Features 🎊
- Fully responsive website. Fully functional mobile and desktop view.
- Client side HTML5, CSS3 and JavaScript
- Server side NodeJS, socket.io

### The client side of the website is exposed at https://codachat-server.herokuapp.com/

---

## Getting started 🎉

By following the instructions you can get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites 📄

Your local machine must have [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which basically comes with [NPM](http://npmjs.com)) installed.


```
node@v14.15.11 or higher
npm@6.14.11 or higher
git@2.31.1 or higher
```

---

### Let's see how to use? 🛠

Open your git bash in the required directory and first clone this repository-

```bash
# Clone this repository and the server repository
$ git clone https://github.com/codadept/codachat
$ git clone https://github.com/codadept/codachat-server

# First go into the server repository
$ cd codachat-server

# Remove current origin repository
$ git remote remove origin
```

Then install the dependencies using NPM-

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```
```bash
# Once your server has started, now go to the codachat repository:
$ cd codachat
```

```bash
# Remove current origin repository
$ git remote remove origin
```
Open <u>index.html</u> using your favourite code editor and modify the script tag as such
```html
<script src="http://localhost:8000/socket.io/socket.io.js"></script>
```
instead of 
```html
<script src="https://codachat-server.herokuapp.com/socket.io/socket.io.js"></script>
```
And then open <u>app.js</u> and modify the line
```js
const socket = io('https://codachat-server.herokuapp.com/');
```
to 
```js
const socket = io('http://localhost:8000/');
```
Now open <u>index.html</u> in your favourite browser and enjoy the experience of the live chat app!

---

## Technologies used ⚙

- <img src="https://github.com/codadept/developerfolio/blob/master/public/img/icons/html.svg" alt="html" width="25px"> HTML5
- <img src="https://github.com/codadept/developerfolio/blob/master/public/img/icons/css.svg" alt="css" width="25px"> CSS3
- <img src="https://github.com/codadept/developerfolio/blob/master/public/img/icons/javascript.svg" alt="js" width="25px"> JavaScript
- <img src="https://github.com/codadept/developerfolio/blob/master/public/img/icons/nodejs.svg" alt="nodejs" width="25px"> Node.js
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/800px-Socket-io.svg.png" alt="expressjs" width="25px"> socket.io

## Authors 👨

- Pratik Majumdar (codadept) - https://github.com/codadept

## Acknowledgments 😃

I was motivated to make this website as a way of learning more. The concept of this website is taken from a CodeWithHarry youtube video. socket.io has good documentation on their [website](https://socket.io) which makes it really easy for a start.

---

# To contribute to the project

Here are the steps you will need to follow to make your contributions.

<img align="right" width="300" src="https://github.com/codadept/codachat/blob/master/resources/c1.png" alt="fork this repo" />

If you don't have git on your machine, [install it.](https://git-scm.com)

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account. Also you'll need to fork the [codachat-server repo](https://github.com/codadept/codachat-server)

## Now clone the forked repository

<img align="right" width="300" src="https://github.com/codadept/codachat/blob/master/resources/c2.png" alt="clone the repo" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```bash
$ git clone <url you just copied>
```

For example,

```bash
$ git clone https://github.com/mygithub-accnt/codachat.git
```

## Create a branch

Change to the repository directory on your computer by,
```bash
$ cd codachat
```

```bash
#Create a branch using git checkout command
$ git checkout -b your-branch-name
```

## Make necessary changes and commit those changes

After doing the required changes in the code, when you execute `$ git status` you'll see that there are some changes.

Add those changes to the branch you have just created using,

```bash
$ git add .
```

Now commit those changes with a meaningful message,

```bash
$ git commit -m "commit message"
```

## Push changes into GitHub

```bash
$ git push origin your-branch-name
```

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float:right;" src="https://github.com/codadept/codachat/blob/master/resources/c3.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://github.com/codadept/codachat/blob/master/resources/c3.png" alt="send pull request" />

Soon I'll review your code and merge your changes. So you will be considered as a contributor!