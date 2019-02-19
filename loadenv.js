const fs = require('fs');
const awsParamEnv = require('aws-param-env'); // eslint-disable-line

awsParamEnv.load('/cuistot', { region: 'eu-west-1' });

const content = `\
AWS_REGION_PARIS=eu-west-3
AWS_STATIC_DOMAIN=${process.env['static/domain']}
`;

fs.writeFile('.env', content, (err) => {
  if (err) throw err;
  console.log('.env saved...');
});
