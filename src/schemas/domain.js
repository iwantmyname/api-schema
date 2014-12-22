var baseRef = '#/definitions/domain'

module.exports = {
  title: 'Domains',
  description: 'Interact with domain names managed by your account.',

  links: [
    {
      description: 'List all registered domain names.',
      method: 'GET',
      href: '/domains',
      rel: 'instances',
      targetSchema: {
        type: 'array',
        items: {
          $ref: baseRef
        }
      }
    },
    {
      description: 'Get all information associated with the domain.',
      method: 'GET',
      href: '/domains/{(' + baseRef + '/definitions/identity)}',
      rel: 'self',
      targetSchema: {
        $ref: baseRef
      }
    },
    {
      description: 'Update specific editable details for the domain.',
      method: 'PATCH',
      href: '/domains/{(' + baseRef + '/definitions/identity)}',
      rel: 'update',
      schema: {
        type: 'object',
        properties: {
          auto_renew: { $ref: baseRef + '/definitions/auto_renew' },
          transfer_lock: { $ref: baseRef + '/definitions/transfer_lock' },
          mask_contacts: { $ref: baseRef + '/definitions/mask_contacts' }
        },
        // TODO: enforce additionalProperties?
        minProperties: 1
      },
      targetSchema: {
        $ref: baseRef
      }
    }
  ],

  definitions: {
    domain: {
      type: 'string',
      format: 'hostname',
      readonly: true
    },
    domain_utf8: {
      type: 'string',
      format: 'hostname',
      readonly: true
    },
    identity: {
      anyOf: [
        { $ref: baseRef + '/definitions/domain' },
        { $ref: baseRef + '/definitions/domain_utf8' }
      ]
    },
    status: {
      // TODO: define and describe status values
      enum: ['active'],
      readonly: true
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      readonly: true
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      readonly: true
    },
    expires_at: {
      type: 'string',
      format: 'date-time',
      readonly: true
    },
    renews_at: {
      type: 'string',
      format: 'date-time',
      readonly: true
    },
    auto_renew: {
      type: 'boolean'
    },
    transfer_lock: {
      type: 'boolean'
    },
    transfer_code: {
      type: 'string',
      readonly: true
    },
    mask_contacts: {
      type: 'boolean'
    }
  },

  type: 'object',
  properties: {
    domain: { $ref: baseRef + '/definitions/domain' },
    domain_utf8: { $ref: baseRef + '/definitions/domain_utf8' },
    status: { $ref: baseRef + '/definitions/status' },
    created_at: { $ref: baseRef + '/definitions/created_at' },
    updated_at: { $ref: baseRef + '/definitions/updated_at' },
    expires_at: { $ref: baseRef + '/definitions/expires_at' },
    renews_at: { $ref: baseRef + '/definitions/renews_at' },
    auto_renew: { $ref: baseRef + '/definitions/auto_renew' },
    transfer_lock: { $ref: baseRef + '/definitions/transfer_lock' },
    transfer_code: { $ref: baseRef + '/definitions/transfer_code' },
    mask_contacts: { $ref: baseRef + '/definitions/mask_contacts' },
    pending: { $ref: '#/definitions/domainUpdate' },
    nameservers: { $ref: '#/definitions/domainNameservers' }
  },
  required: [
    'domain',
    'domain_utf8',
    'status',
    'created_at',
    'updated_at',
    'expires_at',
    'renews_at',
    'auto_renew',
    'transfer_lock',
    'transfer_code',
    'mask_contacts',
    'nameservers'
  ]
}
