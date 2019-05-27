# Tieto styles

Generic Tieto style components. To be used for consistency within internal applications.

## Contact info

- Eriks Tikaize eriks.tikaize@tieto.com - environment questions and integration to other projects.
- Vojtech Jaros vojtech.jaros@tieto.com - styleguide implementation.
- Liisa Duerig liisa.duerig@tieto.com - styleguide implementation, info on approved designs, any other questions.
- Kaisa Nummela kaisa.nummela@tieto.com - if no one else knows, she does.
- Peter Ponya pedro@brainsum.com - repository and permissions. (external)

## How to include in projects

Include SCSS files from the folder 'styles-library'.

Contact Eriks Tikaize for info.

## Development and contribution

We would love if others want to help out. If you need a component that isn't here, check the materials available to make sure it's aligned with Tieto's design standards, and feel free to clone, make a feature branch and a pull request. We are happy to help you get started with that, feel free to contact us. See contact info above. 

### Prerequisites
- NPM (installation varies depending on your environment)
- Git

### Local environment

Clone the repository, start your local server.
        
Repository:
- https://github.com/brainsum/tieto_styles

Branches:
- 1.x - [deprecated] Old, not in use and nothing relevant here, to be deleted.
- 2.x - [deprecated] Has been modified to 3.x, can probably be deleted.
- 3.x - Main branch, running on demo server, should be renamed to master or something obvious.


```
git clone git@github.com:brainsum/tieto_styles.git
cd tieto_styles
git checkout 3.x
npm install
```
If errors or warnings on install:
```npm audit fix```

Start your server:

```npm start```

Navigate to http://localhost:3000/

### Watch
Check the gulpfile for tasks that can be run to automate watch. With these instructions, local changes will not always be visible without restart. [Liisa can fill this in]

Use this to regenerate the styleguide (it doesn't start watch):

```gulp styleguide:generate:dev````


## Deployment to Demo
Login to demo (no password)
```
ssh tsg@demo-intra.tieto.com
cd /home/tsg/tieto_styles
```

Sanity check
```git status```
Verify you are on correct branch, currently 3.x. If there are changes that need to be stashed, contact Eriks or Liisa for more info if needed.

Get latest changes.

```
git pull
npm install
```
If errors or warnings (as with local installation):
```npm audit fix```



Kill existing NPM process (stop the server). 
The process ID will vary, but as an example:
```ps -ef | grep npm```
Will display
```````
tsg       5849     1  0 May07 ?        00:00:00 npm
tsg      23701 22062  0 12:21 pts/1    00:00:00 grep npm
```
So:
```kill 5849```
And it's dead.  

Restarting the server
```nohup npm start > tsg.log 2>&1 &```
nohup ensures that the server is running in daemon mode and will not stop when the session is closed.

Checking logs
```tail -f tsg.log````

## stuff worth checking
- smacss.com
- bem.info
- [Foundation docs]
- [sc5 docs]
- [sc5 build options]

## Working with the styleguide

SC5-Styleguide, parses SCSS comments for a standalone component library.

Currently existing styles, should be most up-to-date but this tool will not be maintained in the future:
https://company-81847.frontify.com/d/VHfNy7brWRvI/tieto-style-guide#/introduction/overview

SC5-styleguide
https://github.com/SC5/sc5-styleguide

Built on KSS documenting syntax
http://warpspire.com/kss/

Build options
https://github.com/SC5/sc5-styleguide#build-options


Check links in the Additional Info section of the github project. There are some useful things for advanced techniques.

### Template for standalone

@TODO

## Usage
Include SCSS files from the folder 'styles-library'.

## Style Guide
Style guide is generated by SC5 styleguide generator and its files reside in '/style-guide'.

### Development
To develop the style guide type 'npm start' it will open up a server on port localhost:3000. (WORKS)

The development process is based on the SC5 styleguide tool, so the files located in folder "styles-library" need to be developed in tandem with the styleguide definition files located in folder "style-guide". The gude watches all SCSS files an changes/ reloads accordingly.

### Build
To build the style guide type 'gulp styleguide' it will build the guide into the 'docs' folder. (DOESNT WORK)
