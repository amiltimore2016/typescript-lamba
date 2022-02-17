import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'LambdaFunction', {
        runtime: lambda.Runtime.NODEJS_14_X,
        code: lambda.Code.fromAsset('resources/lambda'),
        handler: 'index.handler',
      }
    );
  }
}
