# cleverbuy

### Data source
Price paid data source: https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads

## to deploy use: 
  npm run deploy -- -s cleverbuy -t template.yaml -b cleverbuy-package

## to run locally use
  npm run local:dev -- -l testLambda -e ./events/testLambda.json
  npm run local:dev -- -l testLambda -e ./events/testLambda.json -n env.json --skip-pull-image

## SQS data format
  place a message on an sqs in the console in the format: {"someKey": "someValue"}

## to build data
  run splitMissingPostcodes, to pull out those with missing postcodes
  ToDo: write prog to query dynamo for similar postcodes - Street and parish/||City?
  