var swagger = require('swagger-tools').specs.v2
var yaml = require('js-yaml')
var fs = require('fs')

describe('Swagger spec', function () {
	var spec = yaml.safeLoad(fs.readFileSync(__dirname + '/../src/swagger.yaml'))

	it('is valid', function (done) {
		swagger.validate(spec, function (err, result) {
			if (err) return done(err)

			if (!result) return done()

			if (result.errors.length) {
				return done(new Error(result.errors[0].message))
			}
			if (result.warnings.length) {
				return done(new Error(result.warnings[0].message))
			}
		})
	})

})