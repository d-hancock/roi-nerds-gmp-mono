# Plop generators package for GMP
This package is used to scafold bits of the repos packages.

Each package has a plopfile associated with it that is called in the package.json file for the package. The package's plopfile loads seperate plopfiles that actually handle the scafolding.

Currently each package has a directory that inclueds a subdirectory with a plopfile and a generator config file. The plopfile calls the generator config file and passes it the plop instance being used. 