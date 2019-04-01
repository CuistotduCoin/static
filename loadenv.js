const fs = require('fs');
const awsParamEnv = require('aws-param-env');

awsParamEnv.load('/cuistot/static', { region: 'eu-west-1' });

const content = `\
AWS_REGION_PARIS=eu-west-3
AWS_STATIC_DOMAIN=${process.env['domain']}
`;

fs.writeFile('.env', content, (err) => {
  if (err) throw err;
  console.log('.env saved...');
});
