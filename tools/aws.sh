##############################################################################
# AWS
##############################################################################

# General
##############################################################################

aws sts get-caller-identity   # Returns details about the IAM user or role whose credentials are used to call the operation

# AWS Lambda
##############################################################################

aws lambda update-function-code --function-name MyFunction --zip-file fileb://myCode.zip  # Update the code of an existing Lambda function
aws lambda add-permission --function-name MyFunction --action lambda:InvokeFunction --principal apigateway.amazonaws.com --statement-id Id-1 # Add permission to the Lambda function

# AWS DynamoDB
##############################################################################

aws dynamodb put-item --table-name MyTable --item '{ "Name": {"S": "ItemName"}, "Attribute": {"S": "AttributeValue"}}' # Add an item to 'MyTable'
aws dynamodb get-item --table-name MyTable --key '{ "Name": {"S": "ItemName"}}' # Retrieve an item from 'MyTable'
aws dynamodb update-item --table-name MyTable --key '{ "Name": {"S": "ItemName"}}' --update-expression "SET Attribute = :val1" --expression-attribute-values '{":val1": {"S": "NewAttributeValue"}}' # Update an item in 'MyTable'

# AWS IAM
##############################################################################

aws iam attach-user-policy --user-name MyUser --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess  # Attach a policy to a user
aws iam detach-user-policy --user-name MyUser --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess  # Detach a policy from a user
aws iam create-policy --policy-name MyPolicy --policy-document file://mypolicy.json  # Create a new policy
aws iam delete-policy --policy-arn arn:aws:iam::aws:policy/MyPolicy  # Delete a policy

# AWS CloudWatch
##############################################################################

aws cloudwatch get-metric-data --metric-data-queries file://queries.json --start-time 2023-01-01T00:00:00Z --end-time 2023-01-02T00:00:00Z  # Retrieve metric data
aws cloudwatch put-metric-data --metric-name MyMetric --namespace MyNamespace --value 1  # Publish a metric
aws cloudwatch enable-alarm-actions --alarm-name MyAlarm  # Enable actions for an alarm
aws cloudwatch disable-alarm-actions --alarm-name MyAlarm  # Disable actions for an alarm

# AWS S3
##############################################################################

aws s3 cp s3://mybucket/myfile.txt .  # Copy a file from S3 to local
aws s3 rm s3://mybucket/myfile.txt  # Delete a file from S3
aws s3api put-object-acl --bucket mybucket --key myfile.txt --acl public-read  # Set S3 file to public
aws s3api create-bucket --bucket mynewbucket --region us-west-1  # Create a new S3 bucket in a specific region
aws s3api delete-object --bucket mybucket --key myfile.txt  # Delete an object from a bucket

# Additional AWS Services
# AWS RDS (Relational Database Service)
##############################################################################

aws rds describe-db-instances  # Describe all RDS instances
aws rds stop-db-instance --db-instance-identifier MyDbInstance  # Stop an RDS instance
aws rds start-db-instance --db-instance-identifier MyDbInstance  # Start an RDS instance
aws rds delete-db-instance --db-instance-identifier MyDbInstance --skip-final-snapshot  # Delete an RDS instance without creating a final snapshot

# AWS Route 53
##############################################################################

aws route53 list-hosted-zones  # List all hosted zones
aws route53 create-hosted-zone --name mydomain.com --caller-reference 1  # Create a new hosted zone
aws route53 delete-hosted-zone --id /hostedzone/Z2FDTNDATAQYW2  # Delete a hosted zone
aws route53 list-resource-record-sets --hosted-zone-id /hostedzone/Z2FDTNDATAQYW2  # List all records in a hosted zone
aws route53 change-resource-record-sets --hosted-zone-id /hostedzone/Z2FDTNDATAQYW2 --change-batch file://changes.json  # Change records in a hosted zone
