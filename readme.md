
# typescript module / relative imports testing

## findings
### rollup 

is necessary to use relative paths ignoring the dist folder.

the alternative is to write in the dist folder to every import from the common package. we could accomplish this with a mass search & replace.
this is apparently the way to do it and some existing commonjs packages actually import that way. see @ts-jest

### es imports/exports vs commonjs
doesn't matter. both will import fine because the output is always commonjs determined by the root package.json.

might as well do es imports because they are more flexible and the defacto syntax these days.

