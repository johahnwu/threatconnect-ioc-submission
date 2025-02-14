module.exports = {
  name: 'ThreatConnect IOC Submission',
  acronym: 'TC+',
  description:
    'Polarity integration that connects to the ThreatConnect threat intelligence platform using the IOC Submission interface format.',
  entityTypes: ['domain', 'IPv4', 'IPv6', 'hash', 'email', 'url'],
  styles: ['./styles/styles.less'],
  block: {
    component: {
      file: './components/block.js'
    },
    template: {
      file: './templates/block.hbs'
    }
  },
  summary: {
    component: {
      file: './components/summary.js'
    },
    template: {
      file: './templates/summary.hbs'
    }
  },
  onDemandOnly: true,
  request: {
    cert: '',
    key: '',
    passphrase: '',
    ca: '',
    proxy: '',
    rejectUnauthorized: true
  },
  logging: {
    level: 'info' //trace, debug, info, warn, error, fatal
  },
  options: [
    {
      key: 'url',
      name: 'ThreatConnect API URL',
      description:
        'The API URL of your ThreatConnect instance to include the schema (i.e., https://) and port if applicable',
      default: '',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'accessId',
      name: 'Access ID',
      description: 'Account Identifier that is associated with the API Key',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'apiKey',
      name: 'API Key',
      description: 'The API (secret) Key associated with the provided Access ID',
      default: '',
      type: 'password',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'allowDelete',
      name: 'Allow IOC Deletion',
      description: 'If checked, users will be able to delete indicators from ThreatConnect.',
      default: false,
      type: 'boolean',
      userCanEdit: true,
      adminOnly: false
    }
  ]
};
