Heroku 101 — Twitter Stream in Node.js
======================================

This is the sample project that was used by the [sendwithus](https://www.sendwithus.com) team
during the UVic Webdev club talk on Tuesday November 25, 2014.

[Link to Demo](http://heroku-101.herokuapp.com/)

_**Note**: this code was only tested on Mac OSX and Ubuntu, but the instructions should be similar
on Windows._


Requirements
------------

There are a few basic requirements needed to deploy this project to Heroku:

- have a [Heroku](http://heroku.com/) account
- [Heroku toolbelt](https://toolbelt.heroku.com/) installed
- [Node.js](http://nodejs.org/) installed
- [Git](http://git-scm.com/) installed
- [Redis](http://redis.io/) installed

Here are some links if you get stuck:

- [setting up Git](https://help.github.com/articles/set-up-git/#platform-all)


1. Clone This Repository
------------------------

```bash
# Navigate to a directory of your choice
cd /my/directory/of/choice

# Clone the repository from Github
git clone git@github.com:sendwithus/heroku101.git

# Navigate into heroku101 repository
cd heroku101
```


2. Install NPM Dependencies
---------------------------

```bash
# Install requirements listed in package.json
npm install
```


3. Run the Server with Foreman
------------------------------

```bash
# Foreman is part of the Heroku Toolbelt
foreman start -f Procfile
```


Deploying to Heroku
-------------------

```bash
# TODO: ...
```
