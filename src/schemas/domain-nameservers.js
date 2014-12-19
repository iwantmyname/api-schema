var baseRef = '#/definitions/domainNameservers'

module.exports = {
  links: [
    {
      description: 'Replace domain\'s nameservers with a new list of nameservers.',
      method: 'GET',
      href: '/domains/{(#/definitions/domain/definitions/identity)}/nameservers',
      rel: 'self',
      targetSchema: {
        $ref: baseRef
      }
    },
    {
      description: 'List all updates initiated on the domain that are still pending at the registry.',
      method: 'PUT',
      href: '/domains/{(#/definitions/domain/definitions/identity)}/nameservers',
      rel: 'update',
      schema: {
        $ref: baseRef
      },
      targetSchema: {
        $ref: baseRef
      }
    }
  ],

  type: 'array',
  items: {
    type: 'string',
    format: 'hostname'
  },
  minItems: 2,
  maxItems: 5,
  uniqueItems: true
}
