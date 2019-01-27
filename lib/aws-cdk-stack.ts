import path = require('path');

import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import event = require('@aws-cdk/aws-events');


export class AwsCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'MyLambda', {
      // 可指定當地路徑或s3 等
      code: lambda.Code.asset(path.join(__dirname, '../lambda')),
      handler: 'index.handler',
      runtime: lambda.Runtime.NodeJS810,
      environment: {
        STACK_NAME: "HelloWorld",
        REGION: props && props.env && props.env.region
      }
    });

    const scheduleEvent = new event.EventRule(this, 'ScheduledEvent', {
      scheduleExpression: 'cron(0/2 * * * ? *)'
    })

    scheduleEvent.addTarget(fn);
  }
}
