const log = console.debug

// these are commonjs imports to an index defined module
import commonUtils from "common/utils";
const { add } = commonUtils;

log(add(1, 2));

// commonjs import to an implicitly definted module

import Adder from 'common/utils/Adder';

log(new Adder(40, 2).getResult());

// es imports

// everything is rolled up to the top in es6 I guess, so this is possible even though it's in utils
// probably because it's imported/exported via `export * from utils;`
import { subtract } from "es-common"

log(subtract(420, 69));

import Differ from "es-common/utils/Differ"

log(new Differ(666, 333).getResult());
