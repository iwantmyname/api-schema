var baseRef = '#/definitions/domainUpdate'

module.exports = {
  links: [
    {
      description: 'List all registered domain names.',
      method: 'GET',
      href: '/domains/{(#/definitions/domain/definitions/identity)}/pending',
      rel: 'instances',
      targetSchema: {
        type: 'array',
        items: {
          $ref: baseRef
        }
      }
    },
  ],

  definitions: {
    created_at: {
      type: 'string',
      format: 'date-time',
      readonly: true
    },
    payload: {
      type: 'object',
      readonly: true
    }
  },

  type: 'object',
  properties: {
    created_at: { $ref: baseRef + '/definitions/created_at' },
    payload: { $ref: baseRef + '/definitions/payload' }
  },
  required: [
    'created_at',
    'payload'
  ]
}
