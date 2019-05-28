# Tieto styles

Generic Tieto style components. To be used for consistency within internal applications.
This is a library of components 

## Contact info

- Eriks Tikaize, eriks.tikaize@tieto.com - environment questions and integration to other projects.
- Vojtech Jaros, vojtech.jaros@tieto.com - styleguide implementation.
- Liisa Duerig, liisa.duerig@tieto.com - styleguide implementation, info on approved designs, any other questions.
- Kaisa Nummela, kaisa.nummela@tieto.com - if no one else knows, she does.
- Peter Ponya, pedro@brainsum.com - repository and permissions. (external)

## How to include in projects

Include SCSS files from the folder 'styles-library'.

@todo This section should be elaborated more clearly. @Eriks?
- Usage as angular components, if the project is Angular?
- Usage as a CSS framework, by adding classes in markup
- Usage by including raw scss and using mixins in your own scss
- Other ways to use?

## Development and contribution

This library is a work in progress, If you want to participate, your help is needed and welcome! If you need a component that isn't here or have an improvement, check the materials available to make sure it's aligned with Tieto's design standards, and feel free to clone, make a feature branch and a pull request. We are happy to help you get started with that, feel free to contact us. See contact info above. 

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

Use this to regenerate the styleguide if needed (it doesn't start watch):

```gulp styleguide:generate:dev```

## What's in the Box?

### File Structure

The SCSS files in this project are grouped into 2 folders:
- styles-library - This includes the actual styles which would be included in other projects.
- styles-guide - This includes the code comments needed to generate the standalone styleguide and any additional styles needed only for the styleguide which would not be used on any other project.

Note that the SCSS partials are organized based on SMACSS http://smacss.com/ concepts into subfolders. Below is an example of what this structure might look like.
- base - Set it and forget it. There should not be class selectors in these files.
  - _variables.scss
  - _colors.scss
  - _reset.scss (This is usually taken care of by a framework and not needed to add yourself.)
  - _mixinss.sscss
  - _functions.scsss
- vendor - Configurable variables provided by 3rd parties. No custom SCSS here. 
  - foundation-sites
    - _settings.scss
- layout - Styles related to page layout. If using a grid system, there shouldn't be much here.
  - _page.scss
  - _print.scss
- components - Separate components of the website, most custom code and overrides will be here.
  - _button.scss
  - _forms.scss
  - _input.scss
  - _dialog.scss
  - _toast.scss
  - _menu.sscss
  - _menu-item.scss
  - ... etc....
- state - This is for components in different states, e.g. .button:hover. Often these changes are simple and can be included with the component itself, but sometimes it makees sense to put them here instead.
  - _menu-item.scss - might contain:
     .menu-item.is-expanded {}
     .menu-item.is-active {}
- theme - Theme variations, e.g. if one section of the site is promotional and should have a different color theme.
  - _blogs.scss
  - _news.scss
  
### Best practices
- In the styles-library folder which should be usable by other projects, wrap your scss in logical mixins so they do not generate CSS just by importing the file. This allows the end user to choose if they want to only use some parts of your styles. Foundation for Sites does this well, check their partials for examples.
- Component specific variables should be at the top of every partial. Even if you are directly assigning `$input-margin: $global-margin`, if it is a value reused in many places in the file, consider creating a component specific variable. Putting them at the top of the file ensuress that they are easy to find.
- No numbers, colors, etc, in the SCSS.
Wrong:
    ```
    // All of these should be variables.
    .my-component {
      color: #ff0000;
      font-size: 18px;
      margin-bottom: 1rem;
    }
    ```
Correct:
    ```
    // Variables defined at top of file, re-using existing variables where sensible.
    $component-color: #FF0000;
    $component-font-size: map-deep-get($header-styles, 'small', 'h4', 'font-size'); // Gets the font-size of h4 elements from Foundation settings.
    
    // By wrapping in smaller mixins, we allow the end user to choose if they want to include our entire component style definitions or only part of them.
    @mixin component-font-styles($font-size: $base-font-size) { // Allowing to pass a variable with a default makes the mixin more versatile.
      @debug '$font-size is #{$font-size}';
      font-size: $font-size;
      margin-bottom: $global-margin;
    }
    
    @mixin my-component {
      .my-component {
        @include component-font-styles($component-font-size);
        color: $component-color;
      }
    }
    ```
    
- Don't forget that Sass has a lot of built-in features making it more like a programming language than writing CSS.
  - https://sass-lang.com/documentation
  - http://thesassway.com

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
