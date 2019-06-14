# Table of contents
- [Tieto styleguide general info](#tieto_styleguide)
  - [Contact info](#contact_info)
  - [What's in the box](#whats_in_the_box)
    - [Folder/file structure](#folder/file_structure)
- [How to include in your project](#how_to_include_in_your_project)
- [How to use in your project](#how_to_use_in_your_project)
  - [SCSS](#scss)
  - [CSS](#css)
- [Development and contribution](#development_and_contribution)
  - [SC5 styleguide tool](#sc5_stylegugide_tool)
  - [Prerequisites for running the styleguide locally](#prerequisites_for_running_the_styleguide_locally)
  - [Branches](#branches)
  - [Local environment setup](#local_environment_setup)
  - [Deployment to DEMO](#deployment_to_demo)
  - [Logging](#logging)
  - [Watch](#watch)
  - [Materials worth checking](#materials_worth_checking)

# Tieto styleguide

Stylesheet library containing common Tieto styles, colours, typography and components. To be used for consistency and non-redundant work within internal applications.

Previous version of styleguide should be mostly up-to-date but it'll not be maintained in the future:
https://company-81847.frontify.com/d/VHfNy7brWRvI/tieto-style-guide#/introduction/overview

Even older version, same case as above, will not be maintained in the future:
https://wiki.intra.tieto.com/xwiki/bin/view/User+Experience+guidelines/

## Contact info
(@TODO would be good having the contact list here as well as in the online documentation itself)

- Eriks Tikaize, eriks.tikaize@tieto.com - environment questions and integration to other projects.
- Vojtech Jaros, vojtech.jaros@tieto.com - styleguide implementation.
- Liisa Duerig, liisa.duerig@tieto.com - styleguide implementation, info on approved designs, any other questions.
- Kaisa Nummela, kaisa.nummela@tieto.com - if no one else knows, she does.
- Peter Ponya, pedro@brainsum.com - repository and permissions. (external)

## What's in the box?
### Folders/files structure

The SCSS files in this project are grouped into 2 folders:
- **styles-library** - This includes the actual styles library which is meant to be included in other projects.
- **styles-guide** - This includes the code comments needed to generate the standalone styleguide and any additional styles needed only for the styleguide itself which is **not meant to be** used on any other project.

This styleguide is using the [SC5 styleguide tool](https://github.com/SC5/sc5-styleguide), so the files located in folder "styles-library" need to be developed in tandem with the styleguide definition files located in folder "style-guide". The guide watches all SCSS files and changes/reloads accordingly.

Note that the SCSS partials are organized based on [SMACSS](http://smacss.com/) concepts into subfolders. Below is an example of what this structure might look like.
- base - Set it and forget it. There should not be class selectors in these files.
  - _variables.scss
  - _colors.scss
  - _reset.scss (This is usually taken care of by a framework and not needed to add yourself.)
  - _mixins.scss
  - _functions.scss
- vendor - Configurable variables provided by 3rd parties. No custom SCSS here.
  - foundation-sites
    - _settings.scss
- layout - Styles related to page layout. If using a grid system, there shouldn't be much here.
  - _page.scss
  - _print.scss
- components - Separate components of the website, most custom code and overrides will be here.
  - _button.scss
  - _card.scss
  - _menu.scss
- state - This is for components in different states, e.g. .button:hover. Often these changes are simple and can be included with the component itself, but sometimes it makees sense to put them here instead.
  - _menu-item.scss - might contain:
  -  .menu-item.is-expanded {}
  -  .menu-item.is-active {}
- theme - Theme variations, e.g. if one section of the site is promotional and should have a different color theme.
  - _blogs.scss
  - _news.scss

# How to include in your project
(@TODO this sections should be present in the documentation, redundant here)

- NPM package.
- Git submodule.
- @TODO: Gem for RoR applications.
- @TODO: Raw pre-compiled CSS files download and manual installation into project.
- @TODO: Raw SCSS files download and manual installation into project.

# How to use in your project
(@TODO this section should be present in the documentation, redundant here)

The approach of using this stylesheet library could be separated into two basic categories. Please note, that we highly encourage you to use the SCSS version. Simply because it gives you bigger power in the actual usage of this library within your project thanks to mixins, variables and other SCSS features.

## SCSS (**Recommended**)
Used by incorporating mixins and variables in your own SCSS and/or using classes in your markup etc. Don't forget to @import our SCSS files into your files first.

## CSS
Used by incorporating classes in your markup. No variables, mixins and other SCSS features present in this version, obviously. This option is for applications that do not use any CSS pre-processor or are using different one other than SCSS.

@TODO: Eriks?   Usage as angular components, if the project is Angular?

# Development and contribution
(@TODO this section should be present in the documentation. If somebody is reading this Readme, he already has access to repo and is probably meant to participate in the development...)

This library is a continous work in progress, If you want to participate, your help is needed and welcome! If you need a component that isn't here or have an improvement, check the materials available (@TODO link to official materials?) to make sure it's aligned with Tieto's design standards (@TODO link to official materials?), and feel free to clone, make a feature branch and a pull request.

We are happy to help you get started with that, feel free to contact us. See section contact info above.

## SC5 styleguide tool
As it has already been mentioned here, this styleguide uses [SC5](https://github.com/SC5/sc5-styleguide) tool for creating styleguides quickly and easily. Therefore, it is quite important to check what it's about before you start diving into developing this styleguide.

SC5 itself uses [KSS](http://warpspire.com/kss) syntax within SCSS files to generate the styleguide.

Build options for SC5: https://github.com/SC5/sc5-styleguide#build-options

## Prerequisites for running the styleguide locally
- Node.js
- NPM
- Git

## Branches:
- 1.x - [**Deprecated**] Old, not in use and nothing relevant here, to be deleted.
- 2.x - [**Deprecated**] Has been modified to 3.x, can probably be deleted.
- 3.x - Main branch, running on demo server, should be renamed to master or something obvious.

## Local environment setup

1. Clone the repository **`git clone git@github.com:brainsum/tieto_styles.git`** or through your Git client.
2. Move into the folder of this styleguide **`cd tieto_styles`**.
3. Checkout to the correct up-to-date branch **`git checkout 3.x`**.
4. NPM install all dependencies for this library **`npm install`**.
5. Start your local server **`npm start`**.
6. Go to [localhost](http://localhost:3000/) in your browser.

If you encounter errors or warnings on install, run **`npm audit fix`**.

## Deployment to DEMO
1. Login to demo server (no password, handled via SSH keys) **`ssh tsg@demo-intra.tieto.com`**
2. Navigate to styleguide's folder **`cd /home/tsg/tieto_styles`**
3. Verify you are on correct branch **`git status`** ( currently branch 3.x). If there are changes that need to be stashed, contact Eriks or Liisa for more info if needed.
4. Pull latest changes **`git pull`**.
5. Install dependencies via npm **`npm install`**.
6. If you encounter errors or warnings (same as with local installation), run **`npm audit fix`**.
7. Kill existing NPM process to stop the server.
  - The process ID will vary, so let's find the ID first **`ps -ef | grep npm`**.
  - The result of that will look similarly to following:
    ```
    tsg       5849     1  0 May07 ?        00:00:00 npm
    tsg      23701 22062  0 12:21 pts/1    00:00:00 grep npm
    ```
  - Kill the NPM process **`kill 5849`**.
8. Restart the server **`nohup npm start > tsg.log 2>&1 &`** - nohup ensures that the server is running in daemon mode and will not stop when the session is closed.


## Best practices
- In the styles-library folder which should be usable by other projects, wrap your SCSS in logical mixins so they do not generate CSS just by importing the file. This allows the end user to choose if they want to only use some parts of your styles. [Foundation for Sites](https://foundation.zurb.com) does this well, check their partials for examples.
- Component specific variables should be at the top of every partial. Even if you are directly assigning **`$input-margin: $global-margin`**, if it is a value reused in many places in the file, consider creating a component specific variable. Putting them at the top of the file ensuress that they are easy to find.
- Try to use variables as much as possible.

 **Wrong:**

All of these should be variables.

```
.my-component {
  color: #ff0000;
  font-size: 18px;
  margin-bottom: 1rem;
}
```

  **Correct:**

  Variables defined at top of file, re-using existing variables where sensible.

```
$component-color: #FF0000;
$component-font-size: map-deep-get($header-styles, 'small', 'h4', 'font-size');
```

**`map-deep-get`** Gets the font-size of h4 elements from Foundation settings.


By wrapping in smaller mixins, we allow the end user to choose if they want to include our entire component style definitions or only part of them.

Possibility to pass a variable with a default value `($font-size: $base-font-size)` makes the mixin more versatile.


 ```
@mixin component-font-styles($font-size: $base-font-size)
  @debug '$font-size is #{$font-size}';
  font-size: $font-size;
  margin-bottom: $global-margin;
}
```

```
@mixin my-component {
  .my-component {
    @include component-font-styles($component-font-size);
    color: $component-color;
  }
}
```

Don't forget that Sass has a lot of built-in features making it more like a programming language than writing CSS. See https://sass-lang.com/documentation or http://thesassway.com.

## Logging

You can check logs on DEMO environment (locally, you can check the log in the terminal where you NPM started the styleguide) by navigating into the folder of styleguide and running command **`tail -f tsg.log`**.

Alternatively, you can check the whole log file through text editor of your choice (nano for example) or **`cat`** command.

## Watch
Watcher works for most files, although it does not watch for changes in for example README.md file or SC5 stylesheets for the styleguide itself. To start the watcher, use **`npm start`** instead of **`gulp styleguide:generate:dev`** (which will start the app server after generating, but will not watch for changes).

## Materials worth checking
- [SMACSS conventions](Smacss.com)
- [BEM conventions](Bem.info)
- [Foundation framework docs](https://foundation.zurb.com/sites/docs/)
- [SC5 docs](https://github.com/SC5/sc5-styleguide)
