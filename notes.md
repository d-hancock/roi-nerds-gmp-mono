# Close out Notes
Take notes here about where you left off.

# Notes - Unfinished from previous work

- Need to sort out what aproach I will take to handling the MUI bit of these sites. Maybe I will have to just do the local plugins on each site.
  - that portion of the site is unlikely to need to change much and it sould be simple to refactor it on each site if worst comes to worst.
- Also trying to figure out what exactly should go into the core theme vs presentational themes vs starters.

# Notes - General

- Going to start in on the core of the functionality we need out of the core theme.
- Splitting time with the dumb mockup implementation that will be refactored to incorporate the use of the refactored theme.
- After a dumb version is up it will just be incremetally turned into the core of the platform
- Dev work will start in js and will be refactored into typescript as part of the maturation process instead of initial development.

## Roi Nerds Site

I've got the quick and dirty copy and paste site set up. Instead of actually just manually typing in info I will spend some time on how I'd actually like to work with the data for this. I'm really not likely to win much in the way of business until I've got a few things on the portfolio.

- I'll begin experimenting from here with how dependencies can be handled withing the themes and how cumbersome working with more than one to start will be.
- I think I'll actually just begin with the core theme and then split off from there.
- Core theme is the giant bundle of dependancies and the data and typings stuff for the sections that like every site will have.
- blocks theme is to encapsalte the temporary inclusion stuff from the front.
- the core-mui theme will probably implement the basic themeing stuff and potentially the deps from including a particular styling framework.

## Core Theme

Mostly just going to load all the work onto this package for the time being. I will split stuff off as it makes sense though.

- Includes a local directory for building plugins that will be used in the core theme, at least to begin with.
- Need to roll the local plugins into the actual theme.
- Need to add Twin.Macro Setup
- For now all the different data related features will be handled as a plugin.
- Have to handle MUI concerns like FOUC and the like. Check out this implementation.
  https://github.com/hupe1980/gatsby-theme-material-ui/tree/master/packages/gatsby-theme-material-ui

- Need to refactor the config directory to actually be useful.
- Layout what data I need for this first pass MVP site
- shit like
  - Links
    - nav
    - footer
    - mobile
  - Services
  - Process
  - Packages
  - Posts
### TODOs

- Need to get all packages here using the same versions of the core technologies if possible. That should make it much easier to manage things going forward.

# Monorepo Configuration

The repo configuration needs to be updated to remove confusion about what config is handling what.
I intend to setup explicit configuations for TypeScript, Babel, WebPack, and Yarn workspaces following [this guide](https://javascript.plainenglish.io/build-react-app-by-using-typescript-yarn-workspaces-webpack-and-babel-d0ad120e72d9)

This needs to be done to make import refactoring less of a pain in the ass once modules are published. This will be important for dealing with the project when its actually in production.
