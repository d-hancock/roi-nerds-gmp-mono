# Notes
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
- For now all the different data related features will be handled as a plugin.
- Have to handle MUI concerns like FOUC and the like. Check out this implementation.
https://github.com/hupe1980/gatsby-theme-material-ui/tree/master/packages/gatsby-theme-material-ui

- Need to refactor the config directory to actually be useful. 

## Component Libraries.
### TODOs
- Need to get all packages here using the same versions of the core technologies if possible. That should make it much easier to manage things going forward. 
