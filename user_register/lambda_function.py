import json
import boto3
import dynamo.dynamoDB as dynamo


def lambda_handler(event, context):

    try:

        # Verificações das solicitações
        if event['httpMethod'] == 'POST':

            # Decodifica o corpo da solicitação HTTP em um objeto Python
            payload = json.loads(event['body'])

            result = dynamo.post_item(payload)

            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }

        elif event['httpMethod'] == 'PUT':

            # Extrai o valor do parâmetro 'userName'
            id_user = event['queryStringParameters']['userName']

            data = json.loads(event['body'])

            result = dynamo.update_item(id_user, data)

            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }

        elif event['httpMethod'] == 'DELETE':

            id_user = event['queryStringParameters']['userName']

            result = dynamo.delete_user(id_user)

            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }

        # Caso de a solicitação ser
        items = dynamo.get_data()

        return {
            'statusCode': 200,
            'body': json.dumps(items)
        }

    except Exception as e:
        return {
            'statusCode': 505,
            'body': json.dumps(f'{e}')
        }
