var assert = require('assert')
var tv4 = require('tv4')
var request = require('superagent')
var glob = require('glob')
var path = require('path')

// set up meta schema
tv4.addSchema('http://json-schema.org/draft-04/schema', require('../schemas/meta/schema.json'))
var metaSchema = {$ref: 'http://json-schema.org/draft-04/schema#'}

// get schemas
var schemas = glob.sync(__dirname + '/../schemas/*.json')

describe('Schema', function () {
  schemas.forEach(function (filename) {
    describe(path.basename(filename), function () {
      it('is a valid JSON schema', function () {
        var schema = require(filename)
        var result = tv4.validateResult(schema, metaSchema, true)
        if (result.error) {
          throw new Error('"#' + result.error.dataPath + '" ' + result.error.message)
        }
      })
    })
  })
})