#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { AwsCdkStack } from '../lib/aws-cdk-stack';

const app = new cdk.App();
new AwsCdkStack(app, 'AwsCdkStack', {
    env: {
        region: 'us-west-1'
    }
});

new AwsCdkStack(app, 'AwsCdkStack2', {
    env: {
        region: 'ap-northeast-1'
    }
});

new AwsCdkStack(app, 'AwsCdkStack3', {
    env: {
        region: 'eu-central-1'
    }
});

// 北京會不會被牆啊 XD
// 結果不能部署...
// new AwsCdkStack(app, 'AwsCdkStack4', {
//     env: {
//         region: 'cn-north-1'
//     }
// });

app.run();
